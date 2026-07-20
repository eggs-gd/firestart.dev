/**
 * Parses docs/CONTENT.en.md into { sections, sectionOrder, sectionOptions }.
 * Convention: <!-- id: section-id --> or <!-- id: section-id; cards: row -->.
 * Class section--<id> is automatic. Runs at build/prerender time from +page.ts
 * (no separate build step, no generated intermediate file).
 */
import { marked } from 'marked';
import type { Sections, SectionOrder, SectionOptions, CardSection, ContactSection, BlockSection } from './loadSections';

function md(text: string): string {
	return marked.parse(text, { async: false }) as string;
}

const ID_COMMENT = /<!-- id: ([a-z0-9-]+)(?:\s*;\s*([^>]+))? -->\n/g;

function parseCommentOptions(rest: string | undefined): { cards?: string } {
	const opts: { cards?: string } = {};
	if (!rest || !rest.trim()) return opts;
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
function parseBlockWithCards(content: string): CardSection | null {
	const hr = '\n---\n';
	const hrIndex = content.lastIndexOf(hr);
	let mainMd = content;
	let footerRaw: string | null = null;
	if (hrIndex !== -1) {
		mainMd = content.slice(0, hrIndex);
		footerRaw = content.slice(hrIndex + hr.length).trim();
	}

	const parts = mainMd.split(/\n(?=## )/);
	if (parts.length < 2) return null;

	const first = parts[0].trim();
	const intro = first ? md(first) : null;

	const cards: CardSection['cards'] = [];
	for (let i = 1; i < parts.length; i++) {
		let part = parts[i].trim();
		if (part.startsWith('## ')) part = part.slice(3);
		const firstLineEnd = part.indexOf('\n');
		const title = firstLineEnd === -1 ? part : part.slice(0, firstLineEnd).trim();
		const body = firstLineEnd === -1 ? '' : part.slice(firstLineEnd).trim();
		cards.push({ title, html: md(body) });
	}

	const footer = footerRaw ? md(footerRaw) : null;
	return { intro, cards, footer };
}

const LINKS_BLOCK = /\n<!-- links\n([\s\S]*?)\n-->/;
/**
 * If content has <!-- links --> block, parse as contact section: intro + contactLinks.
 * Lines: "Label | href" or "Label | href | icon" (icon = mdi name: email, linkedin, telegram, instagram).
 */
function parseContactSection(content: string): ContactSection | null {
	const match = content.match(LINKS_BLOCK);
	if (!match) return null;
	const introRaw = content.slice(0, match.index).trim();
	const intro = introRaw ? md(introRaw) : null;
	const lines = match[1]
		.trim()
		.split('\n')
		.map((line) => line.trim())
		.filter(Boolean);
	const contactLinks: ContactSection['contactLinks'] = [];
	for (const line of lines) {
		const parts = line.split('|').map((p) => p.trim());
		if (parts.length < 2) continue;
		contactLinks.push({
			label: parts[0],
			href: parts[1],
			icon: parts[2] || undefined
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
function parseSectionWithAsides(content: string): BlockSection | null {
	const match = content.match(ASIDE_BLOCK);
	if (!match) return null;
	const mainMd = content.slice(0, match.index).trim();
	const asideId = match[1];
	const asideBodyMd = match[2].trim();
	if (!asideBodyMd) return null;
	const paragraphs = mainMd
		.split(/\n\n+/)
		.map((p) => p.trim())
		.filter(Boolean);
	if (paragraphs.length === 0) return null;
	const triggerMd = paragraphs.pop() as string;
	const introMd = paragraphs.join('\n\n');
	let triggerHtml = md(triggerMd);
	if (triggerHtml.startsWith('<p>') && triggerHtml.endsWith('</p>') && !triggerHtml.slice(4, -5).includes('</p>')) {
		triggerHtml = triggerHtml.slice(4, -5);
	}
	const blocks: BlockSection['blocks'] = [];
	if (introMd) blocks.push({ type: 'html', content: md(introMd) });
	blocks.push({
		type: 'aside',
		id: asideId,
		trigger: triggerHtml,
		body: md(asideBodyMd)
	});
	return { blocks };
}

export function parseSections(source: string): {
	sections: Sections;
	sectionOrder: SectionOrder;
	sectionOptions: SectionOptions;
} {
	const sections: Sections = {};
	const sectionOrder: SectionOrder = [];
	const sectionOptions: SectionOptions = {};

	let match: RegExpExecArray | null;
	let prevId: string | null = null;
	let prevStart = 0;

	const regex = new RegExp(ID_COMMENT);

	const consume = (id: string, content: string) => {
		const contact = parseContactSection(content);
		const withAsides = parseSectionWithAsides(content);
		sections[id] = contact ?? parseBlockWithCards(content) ?? withAsides ?? md(content);
		sectionOrder.push(id);
	};

	while ((match = regex.exec(source)) !== null) {
		if (prevId !== null) {
			consume(prevId, source.slice(prevStart, match.index).trim());
		}
		prevId = match[1];
		const opts = parseCommentOptions(match[2]);
		if (Object.keys(opts).length > 0) sectionOptions[prevId] = opts;
		prevStart = match.index + match[0].length;
	}
	if (prevId !== null) {
		consume(prevId, source.slice(prevStart).trim());
	}

	return { sections, sectionOrder, sectionOptions };
}
