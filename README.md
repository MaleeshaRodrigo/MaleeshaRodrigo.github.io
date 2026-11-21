# Maleesha Achintha — Data Engineer Portfolio

Modern static portfolio built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com), deployed to GitHub Pages.

**Live site:** https://maleesharodrigo.github.io

## Folder structure

```
src/
  components/     # UI sections (Hero, About, Projects, …)
  data/assets.ts  # Single source of truth for media URLs
  layouts/        # Base HTML layout
  pages/          # Routes (index)
  scripts/        # Client JS (nav, reveals, carousels)
  styles/         # Global CSS + design tokens
public/
  favicon.*       # Site icons only
  media/
    portraits/    # Hero, about, education, experience, OG
    projects/     # App screenshots (laser-app, technician-portal)
    documents/    # CV PDF
scripts/          # Node utilities (image optimization)
.github/workflows # GitHub Pages deploy
_archive/         # Local legacy copies (gitignored, not deployed)
```

## Develop

```bash
npm install
npm run dev
```

Open the local URL printed in the terminal (usually `http://localhost:4321`).

## Build & preview

```bash
npm run build
npm run preview
```

Output is written to `dist/`.

## Images

Optimized portraits live in `public/media/portraits/`. Re-run compression from the local photo folder:

```bash
npm run optimize-images
```

Requires source files under `C:\Users\User\Pictures\My photo` (see `scripts/optimize-images.mjs`).

## Deploy (GitHub Pages)

1. In the repo **Settings → Pages**, set Source to **GitHub Actions**.
2. Push to `main` (or run the **Deploy to GitHub Pages** workflow manually).
3. The workflow in `.github/workflows/deploy.yml` builds Astro and publishes `dist/`.

## Stack

- Astro (static)
- Tailwind CSS v4
- Vanilla JS for nav, reveals, and project carousels
