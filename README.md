# Jaya Verma — Portfolio

A fast, data-driven portfolio for an AI Engineer. Built with **Next.js 16
(App Router)**, **Tailwind v4**, and **Framer Motion**. Refined dark theme,
fully responsive, SEO-ready.

Everything on the page is generated from a single source of truth:
**`src/data/portfolio.json`** — edit that file and the whole site updates.

## Quick start

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

## Editing content

| What | Where |
| --- | --- |
| All text (experience, projects, skills, education, publication) | `src/data/portfolio.json` |
| Résumé PDF (download button) | `public/resume/Jaya_Verma_Resume.pdf` (replace this file) |
| Research paper PDF | drop any `*.pdf` into `public/papers/` — the Publications section auto-links the first one |
| Profile photo | drop `profile.jpg` (or `.png`/`.webp`) into `public/images/` — the hero auto-detects it; until then it shows a styled placeholder |
| Theme colors / fonts | `src/app/globals.css` (`@theme` block) |
| SEO title/description/OG + the deployed URL | `src/app/layout.tsx` (`siteUrl`) |
| Hero stats strip | `stats` array in `src/components/sections/Hero.tsx` |

## Deploy to Vercel (free)

1. Push this folder to a new GitHub repo:
   ```bash
   git add -A
   git commit -m "Portfolio site"
   git branch -M main
   git remote add origin https://github.com/jayaverma/portfolio.git
   git push -u origin main
   ```
2. Go to **vercel.com → New Project → Import** the repo. Framework is
   auto-detected as Next.js — just click **Deploy**.
3. Live in ~1 min at `your-project.vercel.app`. Every `git push` to `main`
   redeploys automatically.
4. (Optional) Add a custom domain in Vercel → Settings → Domains, then update
   `siteUrl` in `src/app/layout.tsx`.

> After deploying, update `siteUrl` in `src/app/layout.tsx` to your real URL so
> Open Graph share previews resolve correctly.

## Structure

```
src/
  app/
    layout.tsx      # fonts, SEO metadata, JSON-LD Person schema
    page.tsx        # composes the sections
    globals.css     # theme tokens, grain/vignette, scrollbar
  components/
    Nav.tsx
    sections/       # Hero, About, Experience, Projects, Skills, Publications, Education, Contact
    ui-bits/        # SectionHeading, TechChip, MotionReveal, DownloadButton, BrandIcons
  data/
    portfolio.json  # ← single source of truth
    portfolio.ts    # typed accessor
  lib/
    assets.ts       # auto-detect profile photo + research paper
    cn.ts
```
