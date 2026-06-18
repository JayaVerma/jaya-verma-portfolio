<div align="center">

# Jaya Verma — Portfolio

### AI Engineer · building production LLM, agentic & RAG systems

[![Live](https://img.shields.io/badge/Live-jaya--verma--portfolio.vercel.app-7c3aed?style=for-the-badge&logo=vercel&logoColor=white)](https://jaya-verma-portfolio.vercel.app)

[![Next.js](https://img.shields.io/badge/Next.js_16-000000?style=flat-square&logo=next.js&logoColor=white)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_v4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-EF4D8B?style=flat-square&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Deployed on Vercel](https://img.shields.io/badge/Deployed-Vercel-000000?style=flat-square&logo=vercel&logoColor=white)](https://vercel.com)

</div>

---

A fast, fully **data-driven** personal portfolio. Every section is generated from a
single JSON file ([`src/data/portfolio.json`](src/data/portfolio.json)) — edit the
data, and the whole site updates. Designed to read as a confident-but-still-learning
AI engineer: vibrant, animated, and recruiter-friendly.

🔗 **Live site → https://jaya-verma-portfolio.vercel.app**

## ✨ Highlights

- 🌈 **Vibrant, animated UI** — drifting aurora-gradient background, animated gradient
  text, glassmorphism cards with gradient borders, a cursor-following spotlight, and
  scroll-reveal motion (all respecting `prefers-reduced-motion`).
- 🔢 **Animated stat counters** that count up on scroll (700+ commits / 108 PRs / 35+ repos).
- 🧩 **100% data-driven** — experience, projects, skills, education, and publications all
  render from `portfolio.json` with full TypeScript types.
- 📄 **One-click downloads** — résumé PDF and the JETIR research paper, with the paper's
  first 6 pages rendered as inline previews.
- 🖼️ **Transparent profile cutout** (background removed) floating over a color glow.
- ⚡ **Production-grade** — Next.js 16 App Router, `next/font`, `next/image` optimization,
  SEO metadata, Open Graph, and JSON-LD `Person` schema.

## 🛠️ Tech Stack

| Layer | Tech |
| --- | --- |
| Framework | Next.js 16 (App Router) · React 19 · TypeScript |
| Styling | Tailwind CSS v4 · custom design tokens |
| Animation | Framer Motion · CSS keyframes |
| Icons | Lucide + custom brand SVGs |
| Hosting | Vercel (auto-deploy on push) |

## 🚀 Getting Started

```bash
git clone https://github.com/JayaVerma/jaya-verma-portfolio.git
cd jaya-verma-portfolio
npm install
npm run dev          # http://localhost:3000
```

```bash
npm run build        # production build
npm start            # serve the production build
```

## ✏️ Editing Content

Everything lives in data + a few asset folders — no component edits needed for content.

| What | Where |
| --- | --- |
| All text (experience, projects, skills, education, publications) | [`src/data/portfolio.json`](src/data/portfolio.json) |
| Résumé PDF (download button) | `public/resume/Jaya_Verma_Resume.pdf` |
| Research paper PDF + page previews | `public/papers/` (PDF) and `public/papers/pages/page-1…6.png` |
| Profile photo | `public/images/profile.png` (transparent cutout) |
| Theme colors / fonts | [`src/app/globals.css`](src/app/globals.css) (`@theme` block) |
| Hero stats | `stats` array in [`src/components/sections/Hero.tsx`](src/components/sections/Hero.tsx) |
| SEO / site URL | [`src/app/layout.tsx`](src/app/layout.tsx) |

## 📁 Structure

```
src/
├─ app/
│  ├─ layout.tsx       # fonts, SEO metadata, JSON-LD
│  ├─ page.tsx         # composes the sections
│  └─ globals.css      # theme tokens, aurora bg, animations
├─ components/
│  ├─ Nav.tsx
│  ├─ sections/        # Hero · About · Experience · Projects · Skills · Publications · Education · Contact
│  └─ ui-bits/         # SectionHeading · TechChip · MotionReveal · DownloadButton · AnimatedCounter · Spotlight · BrandIcons
├─ data/
│  ├─ portfolio.json   # ← single source of truth
│  └─ portfolio.ts     # typed accessor
└─ lib/
   ├─ assets.ts        # auto-detect profile photo + paper pages
   └─ cn.ts
```

## ☁️ Deployment

Hosted on **Vercel**. With the GitHub repo connected, every push to `main` triggers a
production deploy and pull requests get preview URLs automatically.

```bash
# manual production deploy (optional)
npx vercel --prod
```

---

<div align="center">

Built with Next.js, Tailwind & Framer Motion · © Jaya Verma

<a href="https://jaya-verma-portfolio.vercel.app">Website</a> ·
<a href="https://www.linkedin.com/in/jaya0902verma/">LinkedIn</a> ·
<a href="https://github.com/JayaVerma">GitHub</a>

</div>
