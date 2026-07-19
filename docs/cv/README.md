# CV Pipeline

This directory contains the source CV and profile instructions used to generate profile-specific resumes.

## Files

- `CV_GENERAL.en.md` - master/source CV used as the canonical input.
- `profiles.yaml` - list of target profile resumes, shared `system_prompt`, per-profile instructions for the LLM, and optional `enabled: false` to skip a profile by default.
- `generated/*.md` - generated profile-specific markdown resumes.

## Commands

Run from the repo root:

```sh
yarn cv:check
```

Quick connectivity check for the LLM API (no generation). Useful when `fetch failed` appears in your own terminal.

```sh
yarn cv
```

This will:

1. read `docs/cv/CV_GENERAL.en.md`
2. read profile instructions from `docs/cv/profiles.yaml`
3. archive the current public `static/cv/` contents into `static/cv/arch/<timestamp>/` (and `docs/cv/generated/` into `docs/cv/generated/arch/<timestamp>/` when regenerating via LLM)
4. call the configured LLM to generate profile-specific markdown files
5. normalize the generated markdown (spacing around headings/lists; ASCII punctuation outside fenced code blocks)
6. render those markdown files to HTML
7. place generated files into a clean `static/cv/`

To rebuild PDFs from existing generated markdown without calling the LLM:

```sh
yarn cv:pdf
```

To run the full pipeline with PDF in one command:

```sh
npm run cv:all
```

By default, only profiles with `enabled: true` (or omitted `enabled`) are generated. To include disabled profiles as well:

```sh
node --env-file=.env scripts/build-cv.js --all-profiles
node --env-file=.env scripts/build-cv.js --all-profiles --pdf
```

To build one profile explicitly (even if disabled):

```sh
node --env-file=.env scripts/build-cv.js --only architect
node --env-file=.env scripts/build-cv.js --only fractional-cto,senior-developer --pdf
```

## PDF generation (pandoc)

PDF export uses `pandoc` (no headless Chrome).

Install on macOS with Homebrew:

```sh
brew install pandoc
```

`pandoc` also needs a LaTeX PDF engine on your PATH (for example `pdflatex`, `xelatex`, `lualatex`, or `tectonic`). A common lightweight setup:

```sh
brew install --cask basictex
```

After installing BasicTeX, ensure TeX binaries are on your PATH (often `/Library/TeX/texbin`). For example, in `~/.zshrc`:

```sh
export PATH="/Library/TeX/texbin:$PATH"
```

Optional overrides:

- `CV_PANDOC_BIN` - path to `pandoc` if not on PATH
- `CV_PANDOC_PAGE_MARGINS` - PDF page margins preset in cm, order **left / right / top / bottom**: `2222` (default, 2 cm on each side) or `2213` (2, 2, 1, 3). Dots optional (`2.2.2.2`).
- `CV_PANDOC_GEOMETRY` - if set, replaces presets entirely; value is appended to LaTeX `geometry` (for example `left=3cm,right=2cm,top=2cm,bottom=2cm` for a wider binding margin)
- `CV_PANDOC_PDF_ENGINE` - force a specific pandoc PDF engine name (for example `xelatex` or `pdflatex`)
- `CV_PANDOC_VERBOSE` - set to `1` to pass `--verbose` to pandoc (more logs while building PDFs)
- `CV_PANDOC_TIMEOUT_MS` - kill stuck pandoc/LaTeX runs after this many milliseconds (default: 600000)
- `CV_PANDOC_MAINFONT` / `CV_PANDOC_MONOFONT` - override `fontspec` fonts for `xelatex`/`lualatex` (defaults: Helvetica / Menlo)
- `CV_PANDOC_LINE_SPREAD` - `setspace` stretch factor (default `0.98`; try `0.96` if a PDF ends with a lonely last line)
- `CV_PANDOC_WIDOWPENALTY` / `CV_PANDOC_CLUBPENALTY` - LaTeX widow/club penalties (defaults `10000`)
- `CV_PANDOC_LOOSENESS` - LaTeX paragraph looseness hint (default `1`)
- `CV_PANDOC_HEADER_INCLUDES` - extra LaTeX pasted after the defaults (advanced)
- `CV_MD_ASCII` - set to `0` to disable ASCII punctuation normalization outside fenced code blocks (enabled by default)

Note: `CV_PANDOC_PDF_ENGINE` must be an **engine name** supported by pandoc (like `pdflatex`), not a TeX distribution name like `basictex`.

If you see odd PDF formatting compared to HTML preview, prefer `xelatex` — it tends to handle Unicode punctuation from LLM output more reliably than `pdflatex`.

The first PDF build can take a while (TeX font setup / package generation). If it looks “stuck”, run once with:

```sh
CV_PANDOC_VERBOSE=1 npm run cv:pdf
```

## Environment variables

The pipeline uses an OpenAI-compatible chat completions API.

Required for `npm run cv`:

- `CV_LLM_API_KEY` or `OPENAI_API_KEY`

Optional:

- `CV_LLM_BASE_URL` or `OPENAI_BASE_URL`
- `CV_LLM_MODEL` or `OPENAI_MODEL`
- `CV_LLM_TEMPERATURE`
- `CV_LLM_CONNECT_TIMEOUT_MS` - connect timeout in ms (default: 60000)
- `CV_LLM_HEADERS_TIMEOUT_MS` - wait for response headers in ms (default: 600000). Increase if you see `Headers Timeout Error` with slow models like `gpt-5`.
- `CV_LLM_BODY_TIMEOUT_MS` - response body read timeout in ms (default: 600000)
- `CV_LLM_RETRY_ATTEMPTS` - retries on transient network/timeout failures (default: 3)

The npm commands run the script with `node --env-file=.env`, so keeping these variables in
a local `.env` (see `.env.example`) is enough for local usage.

Default base URL:

```text
https://api.openai.com/v1
```

## Output

Generated markdown is stored in:

```text
docs/cv/generated/
```

Publicly accessible markdown, HTML, and (optionally) PDF files are stored in:

```text
static/cv/
```

Before each build, existing files in `static/cv/` (except `arch/`) are moved to:

```text
static/cv/arch/<timestamp>/
```

With `--only`, only the matching profile files (plus `manifest.json`) are archived; other current CVs stay in place.

After the site is built and deployed, files from `static/cv/` are available by direct URL, but nothing links to them automatically from the landing page. `cv/arch/` is also under `static/`, so older snapshots remain reachable by path if needed.
