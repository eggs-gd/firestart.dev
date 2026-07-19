/**
 * Build-time only: read docs/CONTENT.en.md, split by <!-- id: xxx [; key: value ...] -->, write sections.generated.json.
 * Convention: <!-- id: section-id --> or <!-- id: section-id; cards: row -->. Class section--<id> is automatic.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { marked } from 'marked';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const contentPath = path.join(rootDir, 'docs', 'CONTENT.en.md');
const outPath = path.join(rootDir, 'src', 'lib', 'content', 'sections.generated.json');

const ID_COMMENT = /<!-- id: ([a-z0-9-]+)(?:\s*;\s*([^>]+))? -->\n/g;

function parseCommentOptions(rest) {
	if (!rest || !rest.trim()) return {};
	const opts = {};
	for (const part of rest.split(';')) {
		const colon = part.indexOf(':');
		if (colon === -1) continue;
		const key = part.slice(0, colon).trim().toLowerCase();
		const value = part.slice(colon + 1).trim();
		if (key === 'cards' && value) opts.cards = value;
	}
	return opts;
}

/**
 * If the section has ## headings, parse as block (intro + cards + optional footer after ---).
 * Returns { intro?, cards: [{ title, html }, ...], footer? } or null when no ## found.
 */
function parseBlockWithCards(md) {
	const hr = '\n---\n';
	const hrIndex = md.lastIndexOf(hr);
	let mainMd = md;
	let footerRaw = null;
	if (hrIndex !== -1) {
		mainMd = md.slice(0, hrIndex);
		footerRaw = md.slice(hrIndex + hr.length).trim();
	}

	const parts = mainMd.split(/\n(?=## )/);
	if (parts.length < 2) return null;

	const first = parts[0].trim();
	const intro = first ? marked.parse(first, { async: false }) : null;

	const cards = [];
	for (let i = 1; i < parts.length; i++) {
		let part = parts[i].trim();
		if (part.startsWith('## ')) part = part.slice(3);
		const firstLineEnd = part.indexOf('\n');
		const title = firstLineEnd === -1 ? part : part.slice(0, firstLineEnd).trim();
		const body = firstLineEnd === -1 ? '' : part.slice(firstLineEnd).trim();
		cards.push({ title, html: marked.parse(body, { async: false }) });
	}

	const footer = footerRaw ? marked.parse(footerRaw, { async: false }) : null;
	return { intro, cards, footer };
}

const LINKS_BLOCK = /\n<!-- links\n([\s\S]*?)\n-->/;
/**
 * If content has <!-- links --> block, parse as contact section: intro + contactLinks.
 * Lines: "Label | href" or "Label | href | icon" (icon = mdi name: email, linkedin, telegram, instagram).
 */
function parseContactSection(content) {
	const match = content.match(LINKS_BLOCK);
	if (!match) return null;
	const introRaw = content.slice(0, match.index).trim();
	const intro = introRaw ? marked.parse(introRaw, { async: false }) : null;
	const lines = match[1].trim().split('\n').map((line) => line.trim()).filter(Boolean);
	const contactLinks = [];
	for (const line of lines) {
		const parts = line.split('|').map((p) => p.trim());
		if (parts.length < 2) continue;
		contactLinks.push({
			label: parts[0],
			href: parts[1],
			icon: parts[2] || null
		});
	}
	if (contactLinks.length === 0) return null;
	return { intro, contactLinks };
}

const ASIDE_BLOCK = /<!-- aside: ([a-z0-9-]+)\n([\s\S]*?)\n\s*-->/;
/**
 * If content contains <!-- aside: id\n...body...\n --> (body inside comment, like links),
 * split: main prose before comment; last paragraph of main = trigger line; body = expandable aside.
 */
function parseSectionWithAsides(content) {
	const match = content.match(ASIDE_BLOCK);
	if (!match) return null;
	const mainMd = content.slice(0, match.index).trim();
	const asideId = match[1];
	const asideBodyMd = match[2].trim();
	if (!asideBodyMd) return null;
	const paragraphs = mainMd.split(/\n\n+/).map((p) => p.trim()).filter(Boolean);
	if (paragraphs.length === 0) return null;
	const triggerMd = paragraphs.pop();
	const introMd = paragraphs.join('\n\n');
	let triggerHtml = marked.parse(triggerMd, { async: false });
	if (typeof triggerHtml === 'string' && triggerHtml.startsWith('<p>') && triggerHtml.endsWith('</p>') && !triggerHtml.slice(4, -5).includes('</p>')) {
		triggerHtml = triggerHtml.slice(4, -5);
	}
	const blocks = [];
	if (introMd) blocks.push({ type: 'html', content: marked.parse(introMd, { async: false }) });
	blocks.push({
		type: 'aside',
		id: asideId,
		trigger: triggerHtml,
		body: marked.parse(asideBodyMd, { async: false })
	});
	return { blocks };
}

const md = fs.readFileSync(contentPath, 'utf-8');
const sections = {};
const sectionOrder = [];
const sectionOptions = {};
let match;
let prevId = null;
let prevStart = 0;

while ((match = ID_COMMENT.exec(md)) !== null) {
	if (prevId !== null) {
		const content = md.slice(prevStart, match.index).trim();
		const contact = parseContactSection(content);
		const withAsides = parseSectionWithAsides(content);
		sections[prevId] = contact ?? parseBlockWithCards(content) ?? (withAsides ?? marked.parse(content, { async: false }));
		sectionOrder.push(prevId);
	}
	prevId = match[1];
	const opts = parseCommentOptions(match[2] ?? '');
	if (Object.keys(opts).length > 0) sectionOptions[prevId] = opts;
	prevStart = match.index + match[0].length;
}
if (prevId !== null) {
	const content = md.slice(prevStart).trim();
	const contact = parseContactSection(content);
	const withAsides = parseSectionWithAsides(content);
	sections[prevId] = contact ?? parseBlockWithCards(content) ?? (withAsides ?? marked.parse(content, { async: false }));
	sectionOrder.push(prevId);
}

const output = { sections, sectionOrder, sectionOptions };
fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, JSON.stringify(output, null, 0), 'utf-8');
console.log('Content built:', outPath);
