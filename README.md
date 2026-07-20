# firestart.dev

Personal landing page for [firestart.dev](https://firestart.dev).

## Development

```sh
yarn install
yarn dev
```

Page content comes from `docs/CONTENT.en.md`, parsed directly at build/prerender time in `src/routes/+page.ts` (via `$lib/content/parseSections.ts`) — no separate content-build step.

CV/resume generation lives in a separate project: [`career-wizard`](../career-wizard).

## GitHub Pages

Deploys through `.github/workflows/deploy.yml` on push to `main`, same pattern as the other eggs.gd landings. `static/CNAME` binds the custom domain `firestart.dev`.
