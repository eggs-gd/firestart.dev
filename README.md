# firestart.dev

Personal landing page for [firestart.dev](https://firestart.dev).

## Development

```sh
yarn install
yarn dev
```

Page content comes from `docs/CONTENT.en.md` (built into the site on `yarn content` / `yarn build`).

CV profiles live under `docs/cv/` and are published into `static/cv/` via `yarn cv` (needs a local `.env` with an OpenAI key).

## GitHub Pages

Deploys through `.github/workflows/deploy.yml` on push to `main`, same pattern as the other eggs.gd landings. `static/CNAME` binds the custom domain `firestart.dev`.
