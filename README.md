# PrintLedger Landing Page

This repository contains the single-page landing site for PrintLedger, a self-hosted open-source web system for managing printers, cartridges, consumables, stock movements, repairs, locations, users, and backup operations inside a local network.

The site is built with Vite, React, TypeScript, and plain CSS. It is intended for public project presentation and deployment to Cloudflare Pages.

## Local Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

## Build

Create a production build:

```bash
npm run build
```

The static output is generated in `dist/`.

## Deployment

Deployment target: Cloudflare Pages.

Suggested build settings:

- Build command: `npm run build`
- Output directory: `dist`

## Content Notes

- The page uses local screenshots from `src/assets/screenshots/`.
- No analytics or tracking scripts are included.
- The commercial support email is intentionally kept as `YOUR_EMAIL_HERE` until a public contact address is chosen.
