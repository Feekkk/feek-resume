# Feek Resume

A single-page professional portfolio you can clone and customize. It turns resume content into an interactive site with a hero, bio, experience, education, and supporting sections—built as a static React app you can host anywhere.

Sample content in the repo is placeholder data (Maya Chen). Replace it with your own details before you ship.

## Stack

- **React 18** + **TypeScript**
- **Vite 5** (dev server on port `8080`)
- **Tailwind CSS 4** + **shadcn/ui**
- **GSAP** and **Framer Motion** for motion
- **React Router** for `/`, `/style-guide`, and 404
- **next-themes** for light / dark / system theme

Product intent, section behavior, and accessibility goals are documented in [SPECIFICATION.md](./SPECIFICATION.md).

## Features

- Hero with name, title, portrait, and contact cues
- Bio and skills
- Experience and education from a typed data file
- Snap-scroll layout, skip link, back-to-top, and footer
- Theme toggle (system default)
- Style guide at `/style-guide`
- Error boundary around the app shell

## Prerequisites

- Node.js 18+ (LTS recommended)
- npm (this repo includes `package-lock.json`)

## Getting started

```bash
git clone <your-fork-or-this-repo>
cd feek-resume
npm install
npm run dev
```

Open [http://localhost:8080](http://localhost:8080).

| Script | Purpose |
| --- | --- |
| `npm run dev` | Local development |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Serve the production build |
| `npm run lint` | ESLint |

## Customize your content

All portfolio copy lives in one place:

[`src/data/portfolio-data.ts`](./src/data/portfolio-data.ts)

Update `personalInfo`, `experience`, `education`, and related exports. Shapes are defined in [`src/types/portfolio.ts`](./src/types/portfolio.ts).

Also update HTML metadata so search and social previews match you:

[`index.html`](./index.html) — `<title>`, description, Open Graph, Twitter, and canonical URL.

Swap the avatar URL in `personalInfo.avatar` (or add a file under `public/` and point to it). Put static assets in `public/`.

## Project layout

```
src/
  data/portfolio-data.ts    # content
  types/portfolio.ts        # TypeScript models
  pages/Index.tsx           # home composition
  pages/StyleGuide.tsx      # design tokens / components
  pages/NotFound.tsx
  components/
    Layout.tsx
    sections/               # Hero, Bio, Content
    ui/                     # shadcn primitives
  hooks/
  App.tsx
```

Path alias: `@/` maps to `src/` (see `vite.config.ts`).

## Routes

| Path | Page |
| --- | --- |
| `/` | Portfolio |
| `/style-guide` | Style guide |
| `*` | 404 |

## License

Private project unless you add a license file. Fork and adapt as you like for your own resume site.
