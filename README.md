# CYBER_CORE

**CYBER_CORE** is a tactical cybersecurity story: *Invisible Protection. Absolute Control.*—digital perimeters, threat intel, a global mesh map, proof and capabilities, and a **Secure Uplink** to get in touch. Branded **CYBER_CORE TACTICAL** throughout.

**Repository:** [github.com/WailSolaiman/cyber-core](https://github.com/WailSolaiman/cyber-core)

## Stack

- [Vite](https://vitejs.dev/) 8 · [React](https://react.dev/) 19 · TypeScript  
- [Tailwind CSS](https://tailwindcss.com/) v4 (`@tailwindcss/vite`)  
- [React Router](https://reactrouter.com/) 7  
- [Framer Motion](https://www.framer.com/motion/) (including `MotionConfig` / reduced motion)  
- [Lucide React](https://lucide.dev/) · [React Icons](https://react-icons.github.io/react-icons/) (Simple Icons for logos)  
- Hero background: static WebP image (`public/hero.webp`)

## Requirements

- Node.js 20+ (recommended; align with your deployment environment)

## Getting started

```bash
git clone https://github.com/WailSolaiman/cyber-core.git
cd cyber-core
npm install
```

Start the dev server:

```bash
npm run dev
```

## Scripts

| Command          | Description                              |
| ---------------- | ---------------------------------------- |
| `npm run dev`    | Local dev server with HMR                |
| `npm run build`  | Typecheck (`tsc -b`) then production build to `dist/` |
| `npm run preview`| Serve the production build locally       |
| `npm run lint`   | Run ESLint                               |

## Project layout

- `src/pages/HomePage.tsx` — Composes the landing sections.  
- `src/components/landing/` — Section components, header, footer, chapter nav, shared motion helpers.  
- `src/components/Layout.tsx` — App shell and global UI (e.g. scroll-to-top).  
- `public/` — Static assets (favicon, hero background, map image, team photo, etc.).  
- `stitch-cc-design/` — Design reference (tokens, HTML snapshot, notes); not required at runtime.

## Production build

Output is static files under `dist/`. Deploy to any static host (GitHub Pages, Netlify, Vercel, S3, etc.). Ensure client-side routing rules match your host if you add more routes later; the current app is effectively a single index route.
