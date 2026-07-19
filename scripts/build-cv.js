import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFile, spawn } from 'node:child_process';
import { promisify } from 'node:util';

import { marked } from 'marked';
import YAML from 'yaml';
import { Agent, fetch as undiciFetch } from 'undici';

const execFileAsync = promisify(execFile);

function readTimeoutMs(name, fallbackMs) {
	const raw = process.env[name];
	if (raw === undefined || raw === null || raw === '') return fallbackMs;
	const value = Number(raw);
	return Number.isFinite(value) && value > 0 ? value : fallbackMs;
}

function readPositiveInt(name, fallback) {
	const raw = process.env[name];
	if (raw === undefined || raw === null || raw === '') return fallback;
	const value = Number(raw);
	return Number.isFinite(value) && value > 0 ? Math.floor(value) : fallback;
}

const llmDispatcher = new Agent({
	connectTimeout: readTimeoutMs('CV_LLM_CONNECT_TIMEOUT_MS', 60_000),
	headersTimeout: readTimeoutMs('CV_LLM_HEADERS_TIMEOUT_MS', 600_000),
	bodyTimeout: readTimeoutMs('CV_LLM_BODY_TIMEOUT_MS', 600_000)
});

function isRetryableLlmError(error) {
	if (!(error instanceof Error)) return false;
	const message = error.message.toLowerCase();
	const causeCode =
		error.cause && typeof error.cause === 'object' && 'code' in error.cause ? String(error.cause.code) : '';
	return (
		message.includes('timeout') ||
		message.includes('fetch failed') ||
		causeCode.includes('TIMEOUT') ||
		causeCode === 'ECONNRESET' ||
		causeCode === 'ECONNREFUSED' ||
		causeCode === 'ENOTFOUND'
	);
}

async function llmFetch(url, options = {}, label = 'LLM request') {
	const attempts = readPositiveInt('CV_LLM_RETRY_ATTEMPTS', 3);
	let lastError;

	for (let attempt = 1; attempt <= attempts; attempt += 1) {
		try {
			return await undiciFetch(url, { ...options, dispatcher: llmDispatcher });
		} catch (error) {
			lastError = error;
			if (!isRetryableLlmError(error) || attempt === attempts) {
				break;
			}
			const delayMs = attempt * 2000;
			console.warn(
				`${label} attempt ${attempt}/${attempts} failed. Retrying in ${delayMs}ms...\n${formatError(error)}`
			);
			await new Promise((resolve) => setTimeout(resolve, delayMs));
		}
	}

	throw lastError;
}

async function runProcess(command, args, options) {
	const timeoutMsRaw = process.env.CV_PANDOC_TIMEOUT_MS;
	const timeoutMs =
		timeoutMsRaw === undefined || timeoutMsRaw === null || timeoutMsRaw === ''
			? 10 * 60 * 1000
			: Number(timeoutMsRaw);

	return await new Promise((resolve, reject) => {
		const child = spawn(command, args, {
			env: process.env,
			stdio: ['ignore', 'inherit', 'inherit']
		});

		let timedOut = false;
		const timer =
			Number.isFinite(timeoutMs) && timeoutMs > 0
				? setTimeout(() => {
						timedOut = true;
						try {
							child.kill('SIGKILL');
						} catch {
							// ignore
						}
					}, timeoutMs)
				: null;

		child.on('error', (error) => {
			if (timer) clearTimeout(timer);
			reject(error);
		});

		child.on('close', (code, signal) => {
			if (timer) clearTimeout(timer);
			if (timedOut) {
				reject(new Error(`Timed out after ${timeoutMs}ms while running: ${command} ${args.join(' ')}`));
				return;
			}
			if (code === 0) {
				resolve();
				return;
			}
			reject(new Error(`${command} exited with code ${code}${signal ? ` (signal ${signal})` : ''}`));
		});
	});
}

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const defaultConfigPath = path.resolve(rootDir, 'docs', 'cv', 'profiles.yaml');

function parseArgs(argv) {
	const args = {
		config: defaultConfigPath,
		skipLlm: false,
		buildPdf: false,
		checkOnly: false,
		allProfiles: false,
		only: null
	};

	for (let i = 0; i < argv.length; i += 1) {
		const arg = argv[i];
		if (arg === '--skip-llm') {
			args.skipLlm = true;
			continue;
		}
		if (arg === '--check') {
			args.checkOnly = true;
			continue;
		}
		if (arg === '--all-profiles') {
			args.allProfiles = true;
			continue;
		}
		if (arg === '--pdf') {
			args.buildPdf = true;
			continue;
		}
		if (arg === '--config') {
			args.config = argv[i + 1] ? path.resolve(argv[i + 1]) : args.config;
			i += 1;
			continue;
		}
		if (arg === '--only') {
			const raw = argv[i + 1] ?? '';
			args.only = new Set(
				raw
					.split(',')
					.map((item) => item.trim())
					.filter(Boolean)
			);
			i += 1;
		}
	}

	return args;
}

function assert(condition, message) {
	if (!condition) throw new Error(message);
}

function formatError(error) {
	if (!(error instanceof Error)) return String(error);

	const parts = [error.message];
	let cause = error.cause;
	while (cause) {
		if (cause instanceof Error) {
			parts.push(`caused by: ${cause.message}`);
			cause = cause.cause;
			continue;
		}
		if (typeof cause === 'object' && cause !== null && 'code' in cause) {
			const code = String(cause.code);
			const address = 'address' in cause ? ` (${cause.address}:${cause.port})` : '';
			parts.push(`caused by: ${code}${address}`);
		} else {
			parts.push(`caused by: ${String(cause)}`);
		}
		break;
	}

	const proxyVars = ['HTTP_PROXY', 'HTTPS_PROXY', 'ALL_PROXY'].filter((name) => process.env[name]);
	if (proxyVars.length > 0) {
		parts.push(`proxy env: ${proxyVars.map((name) => `${name}=${process.env[name]}`).join(', ')}`);
	}

	return parts.join('\n');
}

async function preflightLlmConnection({ apiKey, baseUrl, model }) {
	const endpoint = `${baseUrl.replace(/\/$/, '')}/models`;
	try {
		const response = await llmFetch(endpoint, {
			headers: { authorization: `Bearer ${apiKey}` }
		}, 'LLM preflight');
		if (!response.ok) {
			const errorText = await response.text();
			throw new Error(`LLM preflight failed (${response.status}) for ${endpoint}: ${errorText}`);
		}
	} catch (error) {
		if (error instanceof Error && error.message.startsWith('LLM preflight failed')) {
			throw error;
		}
		throw new Error(
			[
				`Cannot reach LLM API at ${baseUrl} (model: ${model}).`,
				'This is a network/connectivity issue before the CV build starts.',
				'Check VPN, DNS, firewall, and any HTTP_PROXY/HTTPS_PROXY values in your shell.',
				formatError(error)
			].join('\n')
		);
	}
}

function resolveFromConfig(configPath, maybeRelativePath, fallback = null) {
	if (!maybeRelativePath) return fallback;
	return path.resolve(path.dirname(configPath), maybeRelativePath);
}

function ensureCleanMarkdown(raw) {
	return raw.replace(/^```(?:md|markdown)?\s*/i, '').replace(/\n```$/, '').trim();
}

function getTextContent(content) {
	if (typeof content === 'string') return content;
	if (Array.isArray(content)) {
		return content
			.map((part) => {
				if (typeof part === 'string') return part;
				if (part && typeof part === 'object' && 'text' in part && typeof part.text === 'string') return part.text;
				return '';
			})
			.join('')
			.trim();
	}
	return '';
}

async function loadConfig(configPath) {
	const raw = await fs.readFile(configPath, 'utf-8');
	const parsed = YAML.parse(raw);

	assert(parsed && typeof parsed === 'object', `Invalid YAML config: ${configPath}`);
	assert(Array.isArray(parsed.profiles) && parsed.profiles.length > 0, `No profiles found in ${configPath}`);

	return parsed;
}

function isProfileEnabled(profile) {
	return profile.enabled !== false;
}

function selectProfiles(configProfiles, args) {
	if (args.only) {
		return configProfiles.filter((profile) => args.only.has(profile.slug));
	}
	if (args.allProfiles) {
		return configProfiles;
	}
	return configProfiles.filter(isProfileEnabled);
}

function archiveStamp() {
	return new Date().toISOString().replace(/[:.]/g, '-');
}

async function listArchiveCandidates(dirPath) {
	try {
		const entries = await fs.readdir(dirPath, { withFileTypes: true });
		return entries.filter((entry) => entry.name !== 'arch');
	} catch (error) {
		if (error && typeof error === 'object' && 'code' in error && error.code === 'ENOENT') {
			return [];
		}
		throw error;
	}
}

function shouldArchiveEntry(entryName, onlyBasenames) {
	if (!onlyBasenames) return true;
	if (entryName === 'manifest.json') return true;
	const stem = path.parse(entryName).name;
	return onlyBasenames.has(stem);
}

async function archiveDirectoryContents(dirPath, { onlyBasenames = null, label = dirPath } = {}) {
	const candidates = await listArchiveCandidates(dirPath);
	const toArchive = candidates.filter((entry) => shouldArchiveEntry(entry.name, onlyBasenames));
	if (toArchive.length === 0) return null;

	const stamp = archiveStamp();
	const archiveRoot = path.join(dirPath, 'arch');
	const archiveDir = path.join(archiveRoot, stamp);
	await fs.mkdir(archiveDir, { recursive: true });

	for (const entry of toArchive) {
		await fs.rename(path.join(dirPath, entry.name), path.join(archiveDir, entry.name));
	}

	console.log(`Archived ${toArchive.length} item(s) from ${label} -> ${path.join('arch', stamp)}`);
	return archiveDir;
}

async function callLlm({
	apiKey,
	baseUrl,
	model,
	temperature,
	sourceMarkdown,
	profile,
	systemPrompt
}) {
	const userPrompt = [
		'Create a profile-specific resume from the source below.',
		'Follow the profile instructions closely.',
		'If something is not supported by the source markdown, do not add it.',
		'',
		`Profile slug: ${profile.slug}`,
		`Profile title: ${profile.title ?? profile.slug}`,
		'Profile instructions:',
		profile.instructions?.trim() || 'No extra instructions provided.',
		'',
		'Source markdown:',
		sourceMarkdown
	].join('\n');

	const endpoint = `${baseUrl.replace(/\/$/, '')}/chat/completions`;
	const basePayload = {
		model,
		messages: [
			{ role: 'system', content: systemPrompt },
			{ role: 'user', content: userPrompt }
		]
	};
	const payloadWithTemperature =
		typeof temperature === 'number' && Number.isFinite(temperature)
			? { ...basePayload, temperature }
			: basePayload;

	let response;
	try {
		response = await llmFetch(
			endpoint,
			{
				method: 'POST',
				headers: {
					'content-type': 'application/json',
					authorization: `Bearer ${apiKey}`
				},
				body: JSON.stringify(payloadWithTemperature)
			},
			`LLM request (${profile.slug})`
		);
	} catch (error) {
		throw new Error(`LLM request to ${endpoint} failed:\n${formatError(error)}`);
	}

	// Some models accept only default temperature; retry once without temperature.
	if (!response.ok && payloadWithTemperature !== basePayload) {
		const firstErrorText = await response.text();
		if (firstErrorText.includes('"param": "temperature"') || firstErrorText.toLowerCase().includes('temperature')) {
			try {
				response = await llmFetch(
					endpoint,
					{
						method: 'POST',
						headers: {
							'content-type': 'application/json',
							authorization: `Bearer ${apiKey}`
						},
						body: JSON.stringify(basePayload)
					},
					`LLM retry (${profile.slug})`
				);
			} catch (error) {
				throw new Error(`LLM retry request to ${endpoint} failed:\n${formatError(error)}`);
			}
		} else {
			throw new Error(`LLM request failed (${response.status}): ${firstErrorText}`);
		}
	}

	if (!response.ok) {
		const errorText = await response.text();
		throw new Error(`LLM request failed (${response.status}): ${errorText}`);
	}

	const json = await response.json();
	const content = getTextContent(json?.choices?.[0]?.message?.content);
	assert(content, `LLM returned an empty response for profile "${profile.slug}"`);
	return ensureCleanMarkdown(content);
}

function renderHtmlDocument(markdown, title) {
	const bodyHtml = marked.parse(markdown, { async: false });
	return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${escapeHtml(title)}</title>
  <style>
    :root {
      color-scheme: light;
      --text: #111827;
      --muted: #4b5563;
      --line: #d1d5db;
      --accent: #1f2937;
    }
    * { box-sizing: border-box; }
    body {
      margin: 0;
      color: var(--text);
      font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      font-size: 12px;
      line-height: 1.55;
      background: white;
    }
    main {
      max-width: 820px;
      margin: 0 auto;
      padding: 28px 36px 36px;
    }
    h1, h2, h3 {
      color: var(--accent);
      line-height: 1.2;
      margin: 1.2em 0 0.45em;
      break-after: avoid-page;
    }
    h1 {
      font-size: 28px;
      margin-top: 0;
      margin-bottom: 0.3em;
    }
    h2 {
      font-size: 16px;
      border-bottom: 1px solid var(--line);
      padding-bottom: 0.25em;
    }
    h3 {
      font-size: 13px;
    }
    p, ul, ol, blockquote {
      margin: 0.5em 0;
    }
    ul, ol {
      padding-left: 1.25rem;
    }
    li + li {
      margin-top: 0.18em;
    }
    blockquote {
      margin-left: 0;
      padding-left: 0.9rem;
      border-left: 3px solid var(--line);
      color: var(--muted);
    }
    hr {
      border: 0;
      border-top: 1px solid var(--line);
      margin: 1rem 0;
    }
    code {
      font-family: "SFMono-Regular", ui-monospace, Menlo, Consolas, monospace;
      font-size: 0.92em;
    }
    a {
      color: inherit;
      text-decoration: none;
    }
    @page {
      size: A4;
      margin: 14mm;
    }
  </style>
</head>
<body>
  <main>${bodyHtml}</main>
</body>
</html>`;
}

function escapeHtml(value) {
	return value
		.replaceAll('&', '&amp;')
		.replaceAll('<', '&lt;')
		.replaceAll('>', '&gt;')
		.replaceAll('"', '&quot;');
}

async function which(command) {
	if (!/^[a-z0-9._+-]+$/i.test(command)) return null;
	try {
		const { stdout } = await execFileAsync('/bin/sh', ['-lc', `command -v ${command}`]);
		return stdout.trim().split('\n')[0]?.trim() || null;
	} catch {
		return null;
	}
}

const PANDOC_PDF_ENGINES = new Set([
	'weasyprint',
	'wkhtmltopdf',
	'pagedjs-cli',
	'prince',
	'pdflatex',
	'lualatex',
	'xelatex',
	'latexmk',
	'tectonic',
	'pdflatex-dev',
	'lualatex-dev',
	'pdfroff',
	'groff',
	'typst',
	'context'
]);

function normalizePdfEngineInput(raw) {
	const value = raw?.trim().replace(/^['"]|['"]$/g, '');
	if (!value) return { mode: 'auto' };

	const lower = value.toLowerCase();
	if (['basictex', 'mactex', 'texlive', 'tinytex'].includes(lower)) {
		return { mode: 'auto', ignoredDistributionHint: lower };
	}

	if (value.includes('/') || value.includes('\\')) {
		const base = path.basename(value).replace(/\.exe$/i, '');
		const engine = base.toLowerCase();
		if (PANDOC_PDF_ENGINES.has(engine)) return { mode: 'explicit', engine };
		throw new Error(
			`Invalid CV_PANDOC_PDF_ENGINE path "${value}". Either pass a pandoc engine name (for example pdflatex) or a full path whose basename is a supported engine.`
		);
	}

	const engine = value.toLowerCase();
	if (!PANDOC_PDF_ENGINES.has(engine)) {
		throw new Error(
			`Invalid CV_PANDOC_PDF_ENGINE "${value}". Must be one of: ${[...PANDOC_PDF_ENGINES].sort().join(', ')}. ` +
				'If you installed BasicTeX/MacTeX, you typically want `pdflatex` or `xelatex` on PATH (not the string basictex).'
		);
	}

	return { mode: 'explicit', engine };
}

async function resolvePdfEngine() {
	const explicitRaw = process.env.CV_PANDOC_PDF_ENGINE;
	const normalized = normalizePdfEngineInput(explicitRaw ?? '');

	if (normalized.mode === 'explicit') {
		return normalized.engine;
	}

	if (normalized.ignoredDistributionHint) {
		console.warn(
			`Ignoring CV_PANDOC_PDF_ENGINE="${explicitRaw?.trim()}" (${normalized.ignoredDistributionHint} is a TeX distribution, not a pandoc --pdf-engine name). Auto-detecting a LaTeX engine on PATH.`
		);
	}

	for (const candidate of ['xelatex', 'tectonic', 'lualatex', 'pdflatex']) {
		// eslint-disable-next-line no-await-in-loop
		const resolved = await which(candidate);
		if (resolved) return candidate;
	}

	return null;
}

function applyAsciiTypographyToText(text) {
	// Normalize punctuation that often comes from LLM output and can confuse LaTeX engines.
	return text
		.replaceAll('\u00ad', '') // soft hyphen
		.replaceAll('\u2011', '-') // non-breaking hyphen
		.replace(/\s*[\u2013\u2014]\s*/g, ' - ') // en dash / em dash -> always spaced hyphen
		.replaceAll('\u2212', '-') // minus sign
		.replaceAll('\u00a0', ' ') // nbsp
		.replaceAll('\u202f', ' ') // narrow nbsp
		.replaceAll('…', '...')
		.replaceAll('\u201c', '"')
		.replaceAll('\u201d', '"')
		.replaceAll('\u2018', "'")
		.replaceAll('\u2019', "'");
}

function normalizeAsciiTypographyOutsideFences(markdown) {
	const lines = markdown.replace(/\r\n/g, '\n').split('\n');
	const out = [];

	const isFenceStart = (line) => /^\s{0,3}```/.test(line);
	let inFence = false;

	for (const line of lines) {
		if (isFenceStart(line)) {
			inFence = !inFence;
			out.push(line);
			continue;
		}

		out.push(inFence ? line : applyAsciiTypographyToText(line));
	}

	return `${out.join('\n')}\n`;
}

function normalizeMarkdownStructure(markdown) {
	const lines = markdown.replace(/\r\n/g, '\n').split('\n');
	const out = [];

	const isBlank = (line) => !line.trim();
	const isFenceStart = (line) => /^\s{0,3}```/.test(line);
	const isAtxHeading = (line) => /^\s{0,3}#{1,6}\s+/.test(line);
	// Allow a small amount of indentation for nested list items.
	const isBullet = (line) => /^(\s{0,7})([-*+])\s+/.test(line);
	const isBlockquote = (line) => /^\s{0,3}>\s?/.test(line);
	const isThematicBreak = (line) => /^\s{0,3}(\*{3,}|-{3,}|_{3,})\s*$/.test(line);

	let inFence = false;

	for (let i = 0; i < lines.length; i += 1) {
		const line = lines[i];
		const next = i + 1 < lines.length ? lines[i + 1] : null;

		if (isFenceStart(line)) {
			inFence = !inFence;
			out.push(line);
			continue;
		}

		if (inFence) {
			out.push(line);
			continue;
		}

		const prevOut = out.length > 0 ? out[out.length - 1] : null;

		if (isAtxHeading(line)) {
			if (prevOut !== null && !isBlank(prevOut)) {
				out.push('');
			}
			out.push(line);

			if (next !== null && !isBlank(next) && !isAtxHeading(next) && !isFenceStart(next) && !isThematicBreak(next)) {
				out.push('');
			}

			continue;
		}

		// Ensure lists/blockquotes start after a blank line when preceded by non-blank text.
		if (prevOut !== null && !isBlank(prevOut)) {
			if (isBullet(line) && !isAtxHeading(prevOut) && !isBullet(prevOut)) {
				out.push('');
			}
			if (isBlockquote(line) && !isAtxHeading(prevOut) && !isBlockquote(prevOut)) {
				out.push('');
			}
		}

		if ((isBullet(line) || isBlockquote(line)) && out.length > 0) {
			const last = out[out.length - 1];
			if (isAtxHeading(last)) out.push('');
		}

		out.push(line);
	}

	return `${out.join('\n').replace(/\n{3,}/g, '\n\n').trim()}\n`;
}

function formatCvMarkdown(markdown) {
	const ascii = process.env.CV_MD_ASCII !== '0';
	const normalizedStructure = normalizeMarkdownStructure(markdown);
	return ascii ? normalizeAsciiTypographyOutsideFences(normalizedStructure) : normalizedStructure;
}

function normalizeMarkdownForPandocPdf(markdown) {
	// PDF gets typography normalization by default; structure normalization always applies.
	return formatCvMarkdown(markdown);
}

function buildDefaultLatexHeaderIncludes(pdfEngine) {
	const widow = process.env.CV_PANDOC_WIDOWPENALTY?.trim() || '10000';
	const club = process.env.CV_PANDOC_CLUBPENALTY?.trim() || '10000';
	const looseness = process.env.CV_PANDOC_LOOSENESS?.trim() || '1';
	const linespread = process.env.CV_PANDOC_LINE_SPREAD?.trim() || '0.98';

	const mainFont = process.env.CV_PANDOC_MAINFONT?.trim();
	const monoFont = process.env.CV_PANDOC_MONOFONT?.trim();

	const penalties = [
		`\\widowpenalty=${widow}`,
		`\\clubpenalty=${club}`,
		`\\looseness=${looseness}`,
		`\\usepackage{setspace}`,
		`\\setstretch{${linespread}}`
	].join('\n');

	if (pdfEngine === 'xelatex' || pdfEngine === 'lualatex') {
		const fontSetup = [
			`\\usepackage{fontspec}`,
			mainFont ? `\\setmainfont{${mainFont}}` : `\\setmainfont{Helvetica}`,
			monoFont ? `\\setmonofont{${monoFont}}[Scale=0.92]` : `\\setmonofont{Menlo}[Scale=0.92]`
		].join('\n');

		const microtype = pdfEngine === 'lualatex' ? `\\usepackage{microtype}\n` : '';
		return `${fontSetup}\n${penalties}\n${microtype}`;
	}

	if (pdfEngine === 'pdflatex') {
		// No fontspec here; use Latin Modern instead of Computer Modern/Times-like defaults.
		return [
			`\\usepackage[T1]{fontenc}`,
			`\\usepackage[utf8]{inputenc}`,
			`\\usepackage{lmodern}`,
			`\\usepackage{microtype}`,
			penalties,
			''
		].join('\n');
	}

	// Other engines: keep conservative defaults.
	return `${penalties}\n`;
}

function appendPandocHeaderIncludes(args, pdfEngine) {
	const extra = process.env.CV_PANDOC_HEADER_INCLUDES?.trim();
	const merged = [buildDefaultLatexHeaderIncludes(pdfEngine), extra ? `${extra}\n` : ''].join('');
	if (merged.trim()) {
		args.push('-V', `header-includes=${merged}`);
	}
}

/**
 * Page margins for pandoc → LaTeX `geometry`.
 * Presets (cm, order left / right / top / bottom): `2222` = 2-2-2-2, `2213` = 2-2-1-3.
 * Override fully with `CV_PANDOC_GEOMETRY` (passed to `geometry`, e.g. `left=2.5cm,marginparwidth=0pt`).
 */
function appendPandocGeometry(args) {
	const raw = process.env.CV_PANDOC_GEOMETRY?.trim();
	if (raw) {
		args.push('-V', `geometry:${raw}`);
		return;
	}

	const preset = (process.env.CV_PANDOC_PAGE_MARGINS ?? '2222').replace(/[.\s]/g, '').replace(/-/g, '');
	if (preset === '2213') {
		args.push('-V', 'geometry:left=2cm,right=2cm,top=1cm,bottom=3cm');
		return;
	}

	// Default and `2222`: symmetric 2 cm (common office / print).
	args.push('-V', 'geometry:margin=2cm');
}

async function writePdfWithPandoc(markdownPath, pdfPath) {
	const pandocBin = process.env.CV_PANDOC_BIN?.trim() || 'pandoc';
	const pdfEngine = await resolvePdfEngine();

	const rawMarkdown = await fs.readFile(markdownPath, 'utf-8');
	const normalizedMarkdown = normalizeMarkdownForPandocPdf(rawMarkdown);

	const tmpMdPath = `${pdfPath}.pandoc-tmp.md`;
	await fs.writeFile(tmpMdPath, normalizedMarkdown, 'utf-8');

	const args = [tmpMdPath, '-o', pdfPath, '--from', 'markdown+smart', '--standalone'];
	appendPandocGeometry(args);

	if (process.env.CV_PANDOC_VERBOSE === '1') {
		args.push('--verbose');
	}

	if (pdfEngine) {
		args.push('--pdf-engine', pdfEngine);
		if (pdfEngine === 'pdflatex' || pdfEngine === 'xelatex' || pdfEngine === 'lualatex') {
			args.push('--pdf-engine-opt=-interaction=nonstopmode');
		}

		appendPandocHeaderIncludes(args, pdfEngine);
	} else {
		throw new Error(
			'No LaTeX PDF engine found on PATH for pandoc. Install BasicTeX/MacTeX so `xelatex`/`pdflatex`/`lualatex`/`tectonic` exists, ' +
				'ensure `/Library/TeX/texbin` is on your PATH, or set CV_PANDOC_PDF_ENGINE to a supported engine name (for example xelatex). ' +
				'See docs/cv/README.md for Homebrew setup notes.'
		);
	}

	try {
		console.log(`pandoc: generating ${path.basename(pdfPath)} (engine: ${pdfEngine})`);
		await runProcess(pandocBin, args);
	} catch (error) {
		const stderr = error instanceof Error && 'stderr' in error ? String(error.stderr) : '';
		const hint =
			'PDF generation requires pandoc plus a LaTeX PDF engine (for example BasicTeX/MacTeX). ' +
				'Install a TeX distribution so `xelatex`/`pdflatex`/`lualatex`/`tectonic` exists on PATH, ' +
				'or set CV_PANDOC_PDF_ENGINE explicitly. ' +
				'See docs/cv/README.md for Homebrew setup notes.';
		throw new Error(`${hint}\n\npandoc failed: ${stderr || (error instanceof Error ? error.message : String(error))}`);
	} finally {
		await fs.rm(tmpMdPath, { force: true });
	}
}

async function main() {
	const args = parseArgs(process.argv.slice(2));
	const config = await loadConfig(args.config);
	const sourcePath = resolveFromConfig(args.config, config.source, path.resolve(path.dirname(args.config), 'CV_GENERAL.en.md'));
	const generatedMarkdownDir = resolveFromConfig(args.config, config.generated_markdown_dir, path.resolve(path.dirname(args.config), 'generated'));
	const publicPdfDir = resolveFromConfig(args.config, config.public_pdf_dir, path.resolve(rootDir, 'static', 'cv'));
	const publicMarkdownDir = resolveFromConfig(args.config, config.public_markdown_dir, publicPdfDir);
	const publicHtmlDir = resolveFromConfig(args.config, config.public_html_dir, publicPdfDir);

	const sourceMarkdown = await fs.readFile(sourcePath, 'utf-8');
	const profiles = selectProfiles(config.profiles, args);

	assert(profiles.length > 0, 'No matching CV profiles to build.');

	if (!args.only && !args.allProfiles) {
		const skipped = config.profiles.filter((profile) => !isProfileEnabled(profile));
		if (skipped.length > 0) {
			console.log(`Skipping disabled profiles: ${skipped.map((profile) => profile.slug).join(', ')}`);
		}
	}

	await fs.mkdir(generatedMarkdownDir, { recursive: true });
	await fs.mkdir(publicMarkdownDir, { recursive: true });
	await fs.mkdir(publicHtmlDir, { recursive: true });
	if (args.buildPdf) {
		await fs.mkdir(publicPdfDir, { recursive: true });
	}

	const llmConfig = config.llm ?? {};
	const apiKey = process.env.CV_LLM_API_KEY ?? process.env.OPENAI_API_KEY ?? '';
	const baseUrl = process.env.CV_LLM_BASE_URL ?? process.env.OPENAI_BASE_URL ?? 'https://api.openai.com/v1';
	const model = process.env.CV_LLM_MODEL ?? process.env.OPENAI_MODEL ?? 'gpt-4.1-mini';
	const temperatureRaw = process.env.CV_LLM_TEMPERATURE ?? llmConfig.temperature;
	const temperature =
		temperatureRaw === undefined || temperatureRaw === null || temperatureRaw === ''
			? NaN
			: Number(temperatureRaw);

	const systemPrompt =
		typeof config.system_prompt === 'string' && config.system_prompt.trim()
			? config.system_prompt.trim()
			: [
					'You generate profile-specific resumes from a larger master CV.',
					'Use only facts present in the source markdown.',
					'Do not invent employers, dates, titles, team sizes, technologies, responsibilities, or outcomes.',
					'Keep experience in strict reverse chronological order and never merge non-contiguous tenures at the same company.',
					'Condense roles older than 10 years into an "Early Career" section, except when a role belongs to a tenure that continues within the last 10 years; keep such tenure intact.',
					'You may compress, reorder, and reframe the information to fit the requested target profile.',
					'Return markdown only.',
					'Do not wrap the answer in code fences.',
					'Produce a complete standalone resume in English.'
				].join(' ');

	if (!args.skipLlm) {
		assert(apiKey, 'Missing LLM API key. Set CV_LLM_API_KEY (or OPENAI_API_KEY), or run with --skip-llm to only rebuild PDFs from existing markdown.');
		console.log(`LLM preflight: ${baseUrl} (model: ${model})`);
		await preflightLlmConnection({ apiKey, baseUrl, model });
		if (args.checkOnly) {
			console.log('LLM connectivity check passed.');
			return;
		}
	}

	const onlyBasenames = args.only
		? new Set(profiles.map((profile) => profile.output_basename || profile.slug))
		: null;

	// Keep previous public outputs; do not leave orphans when the active profile set changes.
	await archiveDirectoryContents(publicHtmlDir, {
		onlyBasenames,
		label: path.relative(rootDir, publicHtmlDir) || publicHtmlDir
	});
	if (publicMarkdownDir !== publicHtmlDir) {
		await archiveDirectoryContents(publicMarkdownDir, {
			onlyBasenames,
			label: path.relative(rootDir, publicMarkdownDir) || publicMarkdownDir
		});
	}
	if (args.buildPdf && publicPdfDir !== publicHtmlDir && publicPdfDir !== publicMarkdownDir) {
		await archiveDirectoryContents(publicPdfDir, {
			onlyBasenames,
			label: path.relative(rootDir, publicPdfDir) || publicPdfDir
		});
	}
	if (!args.skipLlm) {
		await archiveDirectoryContents(generatedMarkdownDir, {
			onlyBasenames,
			label: path.relative(rootDir, generatedMarkdownDir) || generatedMarkdownDir
		});
	}

	const manifest = [];

	for (const profile of profiles) {
		assert(profile.slug, 'Each profile must define a slug.');
		const baseName = profile.output_basename || profile.slug;
		const markdownPath = path.join(generatedMarkdownDir, `${baseName}.md`);
		const publicMarkdownPath = path.join(publicMarkdownDir, `${baseName}.md`);
		const publicHtmlPath = path.join(publicHtmlDir, `${baseName}.html`);
		const pdfPath = path.join(publicPdfDir, `${baseName}.pdf`);
		const title = profile.title ?? baseName;

		if (!args.skipLlm) {
			const markdown = await callLlm({
				apiKey,
				baseUrl,
				model,
				temperature,
				sourceMarkdown,
				profile,
				systemPrompt
			});
			const formattedMarkdown = formatCvMarkdown(markdown);
			await fs.writeFile(markdownPath, formattedMarkdown, 'utf-8');
		}

		await fs.access(markdownPath).catch(() => {
			throw new Error(`Missing generated markdown for profile "${profile.slug}": ${markdownPath}`);
		});

		const markdown = await fs.readFile(markdownPath, 'utf-8');
		const formattedMarkdown = formatCvMarkdown(markdown);
		await fs.writeFile(markdownPath, formattedMarkdown, 'utf-8');
		await fs.writeFile(publicMarkdownPath, formattedMarkdown, 'utf-8');
		await fs.writeFile(publicHtmlPath, renderHtmlDocument(formattedMarkdown, title), 'utf-8');
		if (args.buildPdf) {
			await writePdfWithPandoc(markdownPath, pdfPath);
		}

		manifest.push({
			slug: profile.slug,
			title,
			markdown: `/cv/${path.basename(publicMarkdownPath)}`,
			html: `/cv/${path.basename(publicHtmlPath)}`,
			pdf: args.buildPdf ? `/cv/${path.basename(pdfPath)}` : null
		});

		console.log(`Built CV profile: ${profile.slug}`);
	}

	const manifestJson = JSON.stringify(
		{
			source: path.relative(rootDir, sourcePath),
			generatedAt: new Date().toISOString(),
			profiles: manifest
		},
		null,
		2
	);

	await fs.writeFile(path.join(generatedMarkdownDir, 'manifest.json'), `${manifestJson}\n`, 'utf-8');
	await fs.writeFile(path.join(publicHtmlDir, 'manifest.json'), `${manifestJson}\n`, 'utf-8');

	if (args.buildPdf) {
		console.log(`CV pipeline finished. HTML/MD/PDF available in ${publicPdfDir}`);
	} else {
		console.log(`CV pipeline finished. HTML/MD available in ${publicHtmlDir}. Run with --pdf to build PDF.`);
	}
}

main().catch((error) => {
	console.error(formatError(error));
	process.exitCode = 1;
});
