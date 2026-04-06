# CYBER_CORE

Marketing site for **CYBER_CORE**: a single-page landing built with React, shipped as a static Vite app. Layout, typography, and color tokens follow the reference material in `stitch-cc-design/`.

**Live site:** [https://cybercore.wailsolaiman.com](https://cybercore.wailsolaiman.com)

**Repository:** [github.com/WailSolaiman/cyber-core](https://github.com/WailSolaiman/cyber-core)

## Stack

- [Vite](https://vitejs.dev/) 8 · [React](https://react.dev/) 19 · TypeScript  
- [Tailwind CSS](https://tailwindcss.com/) v4 (`@tailwindcss/vite`)  
- [React Router](https://reactrouter.com/) 7  
- [Framer Motion](https://www.framer.com/motion/) (including `MotionConfig` / reduced motion)  
- [Lucide React](https://lucide.dev/) · [React Icons](https://react-icons.github.io/react-icons/) (Simple Icons for logos)  
- Hero video: [Mux](https://www.mux.com/) Player (`player.mux.com` iframe)

## Requirements

- Node.js 20+ (recommended; align with your deployment environment)

## Getting started

```bash
git clone https://github.com/WailSolaiman/cyber-core.git
cd cyber-core
npm install
```

Copy environment variables and adjust as needed:

```bash
cp .env.example .env
```

See **Environment** below for Mux-related variables.

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

## Environment

Variables are read at build time (Vite `import.meta.env`).

| Variable                 | Purpose |
| ------------------------ | ------- |
| `VITE_MUX_PLAYBACK_ID`   | Mux asset ID for the hero iframe. If empty, a bundled demo playback ID is used. |
| `VITE_MUX_PLAYER_PARAMS` | Optional extra query string for the player URL (no leading `?`). Autoplay, loop, and muted defaults are applied in code. |

`.env` is gitignored; use `.env.example` as the template.

## Project layout

- `src/pages/HomePage.tsx` — Composes the landing sections.  
- `src/components/landing/` — Section components, header, footer, chapter nav, shared motion helpers.  
- `src/components/Layout.tsx` — App shell and global UI (e.g. scroll-to-top).  
- `src/lib/` — Mux URL / playback helpers.  
- `public/` — Static assets (favicon, map image, team photo, etc.).  
- `stitch-cc-design/` — Design reference (tokens, HTML snapshot, notes); not required at runtime.

## Production build

Output is static files under `dist/`. Deploy to any static host (GitHub Pages, Netlify, Vercel, S3, etc.). Ensure client-side routing rules match your host if you add more routes later; the current app is effectively a single index route.

## License

Private project (`"private": true` in `package.json`). Add a license file if you intend to open-source it.
