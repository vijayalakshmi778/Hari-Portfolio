# Chandrahari V — Data Analyst Portfolio

A recruiter-focused, BI-dashboard-inspired portfolio built with **React + Vite**, for a
2026 Engineering graduate targeting Data Analyst / Business Analyst / BI Analyst roles.

## Run locally

```bash
npm install
npm run dev
```

Open the URL shown in the terminal (usually http://localhost:5173).

## Build for production

```bash
npm run build
```

This outputs a static site to `dist/`.

## Deploy

- **Vercel**: import the repo, framework preset "Vite" — no config needed.
- **Netlify**: build command `npm run build`, publish directory `dist`.
- **GitHub Pages**: run `npm run build`, then deploy the `dist/` folder (e.g. with the
  `gh-pages` package, or GitHub Actions).

## What to add before publishing

The brief intentionally avoids inventing content that isn't in the resume. Before you
publish, search the project for these placeholders and replace them with real content:

- `src/assets/profile.jpg` — a real profile photo (the hero currently shows a styled
  placeholder card instead of a generated photo).
- `public/assets/projects/*.png` — real dashboard/project screenshots. Point the
  `image` field in `src/data/projects.js` at your file and swap the placeholder
  `<div className="img-placeholder">` in `ProjectCard.jsx`, `ProjectModal.jsx`, and
  `DashboardGallery.jsx` for an `<img>` tag once the images exist.
- "Add actual project insight here." / "Add business recommendations here." /
  "Add GitHub repository link here." — in `src/data/projects.js`, fill these in with
  your real findings and repo links once available.

## Project structure

```
src/
├── components/     # One component per section (Navbar, Hero, About, Skills, ...)
├── data/           # Content lives here, separate from UI (projects.js, skills.js)
├── hooks/          # useReveal (scroll animations), useCountUp (KPI counters)
├── App.jsx
├── main.jsx
└── index.css       # Design tokens + all component styles
public/
├── favicon.svg
└── resume/Chandrahari_V_Resume.docx   # Powers the "Download Resume" buttons
```

## Tech

React 19, Vite, lucide-react for icons. Animations are hand-built with CSS keyframes
and two small hooks (scroll-reveal via IntersectionObserver, animated KPI counters) —
no animation library dependency required, so the bundle stays small (~80 KB gzipped).
