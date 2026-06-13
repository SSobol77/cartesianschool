# Cartesian School — new homepage: install guide

This is the **improved homepage** wired into your real stack
(Next.js app router · Tailwind v4 · framer-motion). It uses your existing brand
assets in `/public/brand/` — nothing new to add there.

## What changed vs. your current site
1. **Emoji → line icons.** The 🔍 👁️ 💰 🚀 📱 ⚡ 🔒 📞 🎯 🔑 tiles are now `lucide-react`
   line icons (cleaner, on-brand, scalable).
2. **Hero polish.** The three drifting blur "blobs" are replaced with a restrained
   brand radial wash + a masked grid, and the new layered-sphere (`jajo.png`)
   appears faintly behind the phone mockup.
3. **New: working "Get free audit" modal** — two-field form → confirmation, opened
   from the hero and the About CTA. (Front-end only; wire the submit to your
   `/api/contact` route or email when ready.)
4. **Tokenized brand** — `--cs-*` custom properties + a `.cs-gradient-text` utility
   in `globals.css`.

## Steps

### 1. Install the icon library
```bash
npm i lucide-react
```

### 2. Replace two files
| Replace this file | with |
|---|---|
| `app/page.tsx` | `handoff/page.tsx.txt` &nbsp;→ save as `app/page.tsx` |
| `app/globals.css` | `handoff/globals.css` |

> `page.tsx.txt` is the TSX source stored with a `.txt` extension (so the design
> system's compiler leaves it alone). Copy its contents into `app/page.tsx` — the
> code itself is unchanged, ready-to-run TSX.

> If you've customized `globals.css` since, just merge the `:root { --cs-* }`
> block and the `.cs-gradient-text` rule into your existing file — those two are
> the only additions the new `page.tsx` depends on.

### 3. Confirm assets exist (they already do in your repo)
`/public/brand/logo_light.png`, `/public/brand/logo_dark.png`,
`/public/brand/jajo.png`, `/public/freebsd.png`.

### 4. Run
```bash
npm run dev
```

## Wiring the audit form (optional, later)
The modal currently just shows a success state. To make it send, replace the
`onSubmit` in `page.tsx`'s `<form>` (search for `setAuditSent(true)`) with a
`fetch("/api/contact", …)` call to your existing route.

## Notes
- Geist is unchanged (loaded via `next/font` in your `layout.tsx`).
- The pricing/stat/footer dark panels use the deep-space gradient
  (`#1b1442 → #0a0820`) from the logo backdrop.
- Everything is responsive and respects `prefers-reduced-motion`.
- Want the design-system version (tokens, components, specimen cards) instead of
  the single page? That lives in the rest of this project (`styles.css`,
  `tokens/`, `components/core/`, `ui_kits/marketing-site/`).
