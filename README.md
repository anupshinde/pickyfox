# PickyFox (Astro)

Static Astro site migrated from Ghost.

## Requirements
- Node.js 18+ (recommended)
- npm

## Install
```bash
npm install
```

## Develop
```bash
npm run dev
```

Open the local URL printed in the terminal (usually `http://localhost:4321`).

## Build
```bash
npm run build
```

## Preview (production build)
```bash
npm run preview
```

## Content
- Posts: `src/content/posts`
- Pages: `src/content/pages`
- Layouts: `src/layouts`
- Routes: `src/pages`
- Featured images: `public/images/featured`

## Third-Party Scripts
- Add third-party analytics/ad scripts in `src/config/thirdPartyScripts.ts`.
- Use `placement: 'head'` (default) or `placement: 'body'` for each snippet.
- Scripts load only in production by default. Set `enabledInDev: true` in `src/config/thirdPartyScripts.ts` if you want to test locally.

## Deploy (Cloudflare Pages)
- Build command: `npm run build`
- Build output: `dist`

## Notes
- Canonical URLs are generated automatically from the page URL in `BaseLayout.astro`.
