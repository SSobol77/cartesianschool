# Cartesian School

Production Next.js site for `cartesianschool.net`.

## Stack

- Next.js 16 App Router
- React 19
- Tailwind CSS 4
- Framer Motion
- Lucide React icons

## Commands

```bash
npm install
npm run lint
npm run build
npm run dev
```

The development server defaults to `http://localhost:3000`.

## Project Layout

- `app/page.tsx` - single-page marketing site.
- `app/layout.tsx` - metadata, JSON-LD, fonts, document shell.
- `app/globals.css` - Tailwind import and Cartesian School brand tokens.
- `public/brand/` - production brand assets.
- `docs/prompts/` - prompt sources used to generate the design-system components.
- `docs/build-steps.md` - reconstruction notes for this rebuild.
- `backup/cartesianschool-old-20260613-124713/` - full preserved snapshot of the previous root and old project files.

## Content Invariants

- Metrics shown as audit facts are measured "before" conditions only.
- Do not invent performance improvements, client outcomes, or post-launch numbers.
- Primary offer remains: free audit, live preview before payment, fixed price, five business day launch.
- Brand voice is plain, concrete, and low-hype.
