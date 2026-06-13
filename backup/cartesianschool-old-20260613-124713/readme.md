# Cartesian School — Design System

The brand and UI foundation for **Cartesian School**, a one-person
web-modernization agency run by **Siergej Sobolewski** (Warsaw, Poland). The
agency finds local businesses with weak websites, audits them with Google's own
tools, builds a **live demo before any payment**, and rebuilds them fast and
mobile-first. Tagline: **"See your new site live before you pay."**

This system captures the brand introduced by the **new layered-sphere logo** and
elevates the marketing site to match its premium, technical-but-honest tone.

---

## Sources this system was built from

| Source | What it gave us |
|---|---|
| **Codebase** `cartesianschool/` (Next.js 15 + Tailwind 4, framer-motion) | The live marketing site copy, sections, color usage, and the SVG `Logo` component (gradient stops `#7C3AED → #5B3DF5 → #2563EB`). |
| **New logo set** `cartesianschool/public/brand/` | The layered-glass sphere mark, full lockups (light/dark), app-icon squircle, and the exploded-sphere illustration (`jajo.png`). Copied into `assets/`. |
| **GitHub** [`SSobol77/agency`](https://github.com/SSobol77/agency) | The agency's operating model: the Scout → Auditor → Builder → Video → Outreach → Closer pipeline, target market (US/EU SMBs), tone, and owner identity. Explore it to understand *what the brand does* and to build more accurate audit/demo/outreach artifacts. |
| Live site | <https://www.cartesianschool.net> |

> Readers with access can explore the [`SSobol77/agency`](https://github.com/SSobol77/agency)
> repo (and the public [`SSobol77/cartesianschool`](https://github.com/SSobol77/cartesianschool))
> to go deeper on the product and produce better-aligned designs.

---

## Content fundamentals — how Cartesian School writes

The voice is **plain-spoken, confident, and anti-hype**. It sells trust by removing
risk, not by boasting. Specifics over adjectives.

- **Person & address.** "We" for the agency, "you/your" for the prospect. Direct
  and second-person: *"See **your** new site live before **you** pay."*
- **Tone.** Honest, concrete, slightly blunt. *"Don't? It cost you nothing."*
  *"No contracts, no deposits, no risk."* Never breathless or salesy.
- **Numbers are real and measured, never invented.** Metrics are the *measured
  "before"* from Google PageSpeed (e.g. *"21.8 s load"*, *"46/100 speed"*,
  *"'Not Secure'"*). The codebase comment is explicit: *"we never invent 'after'
  numbers or client results."* Honor this — only cite measured facts.
- **Casing.** Sentence case for body and most headings; Title Case for short
  feature/step labels ("Free Audit", "Live Preview", "Mobile-First"). UPPERCASE
  only for the wide-tracked eyebrow labels ("Process", "Portfolio").
- **Eyebrow → headline → sub** is the standard section rhythm.
- **Verbs lead.** "See live examples", "Get free audit", "Book a call",
  "View live". CTAs are short and action-first.
- **Emoji:** used on the *current* live site (🔍 👁️ 💰 🚀 in step/feature tiles).
  This system recommends **replacing them with line icons** (see Iconography) — so
  treat emoji as legacy, not brand. Don't add new emoji to copy.
- **Vibe:** a sharp indie operator who respects the reader's time and money.
  Short sentences. Concrete promises. Plain language a roofer in Austin
  understands instantly.

**Lexicon:** audit · live preview · rebuild · mobile-first · fixed price ·
5-day launch · you own it · quality gates · before/after.

---

## Visual foundations

The visual identity is anchored by the **layered-glass sphere**: a violet dome, a
blue lens, and a white bowl, separated by falling spark particles — depth,
clarity, and "assembled with care."

- **Color.** A **violet → indigo → blue** brand ramp (`#7C3AED · #5B3DF5 ·
  #2563EB`) drawn straight from the logo, on a **slate** neutral spine for text
  and surfaces. **Indigo-600 `#4F46E5`** is the single primary action color.
  **Deep-space** indigo-purples (`#0A0820`–`#271C5E`) back dark sections, footers
  and the logo. Status: green = pass/audited, amber = "before"/warning, red = "not
  secure"/fail. Full ramps in `tokens/colors.css`.
- **The signature gradient** (`--brand-gradient`, 135° violet→indigo→blue) is used
  sparingly for identity moments: the "School" wordmark, hero/pricing panels,
  step-icon tiles, primary-on-hero buttons. Not as a default background.
- **Type.** **Geist** for everything (the product's typeface), **Geist Mono** for
  metrics, URLs and audit numbers. Display sizes are large, **extra-bold (800)**,
  with tight `-0.02em` tracking and balanced wrap; body is slate-600 at 16/1.5.
  Eyebrows are 12px, 600, uppercase, `0.08em` tracking, indigo.
- **Backgrounds.** Mostly clean **white**, alternating with **slate-50** sections
  for rhythm. Accents are *restrained*: a soft brand **radial wash** and a faint
  **masked grid** in the hero (the improved system replaces the live site's three
  drifting blur "blobs"). Dark sections use a deep-space gradient. The
  layered-sphere illustration appears as a low-opacity motif, never loud.
- **Shape & radii.** The brand **leans round**: fully-pill buttons and badges,
  `2xl` (28px) cards and panels, `lg` (16px) inner tiles, the logo squircle at
  `2xl`. Inputs use `sm` (8px).
- **Cards.** White surface, `1px` slate-200 border, no shadow at rest; on hover
  they **lift 4px**, gain a soft indigo-tinted shadow (`--shadow-hover`) and an
  indigo border. Portfolio image headers are slate gradients with a mono metric
  chip pinned top-right.
- **Shadows.** Two families: **neutral** low-contrast elevation for cards/menus
  (`--shadow-sm…xl`), and **colored brand glow** under primary buttons, the logo
  and gradient panels (`--glow-indigo / --glow-violet`). Never a harsh black drop
  shadow on a brand element.
- **Glass & blur.** The sticky nav switches to **white 85% + blur(16px)** after
  ~30px of scroll. On-dark chips use a subtle white-glass fill + blur. Light
  scrims (white 90% + blur) sit over imagery.
- **Motion.** Calm and purposeful: fades + short upward slides on scroll
  (`translateY` 20–30px), `--ease-out` for entrances, gentle 4–5s float loops on
  the hero's floating cards, a slow pulse on the status dot. Hover = `translateY(-1px
  to -4px)` lift; primary buttons darken indigo-600 → indigo-700. No bounces, no
  spinners. All motion respects `prefers-reduced-motion`.
- **Borders.** Hairline `1px` slate-200 (subtle) / slate-300 (strong);
  `rgba(255,255,255,0.12)` on dark. Secondary buttons use a `2px` slate border
  that turns indigo on hover.
- **Layout.** Centered `max-w 1280px` container, fluid side padding, generous
  `~112px` section rhythm. Eyebrow-centered section heads. Grids: 4-up steps/stats,
  3-up portfolio/features.
- **Imagery vibe.** Cool, premium, glassy — purples and blues, soft studio
  lighting, subtle particle sparkle. The sphere reads equally well on white or deep
  space.

---

## Iconography

- **What the live site uses today:** a mix of **emoji** (🔍 👁️ 💰 🚀 📱 ⚡ 🔒 📞 🎯 🔑)
  in step/feature tiles, plus a few **Heroicons-outline** inline SVGs (the hero
  arrow, the pricing checkmarks, the calendar). No icon font is bundled.
- **System recommendation (a deliberate improvement):** standardize on a single
  **outline line-icon set at ~2px stroke**. We use **[Lucide](https://lucide.dev)**
  (the open continuation of Feather, visually consistent with the Heroicons-outline
  the site already uses) via CDN. **This replaces the emoji** in tiles with clean,
  monochrome glyphs that take the brand color.
  - ⚠️ **Substitution flagged:** emoji → Lucide line icons is *our suggestion*, not
    the current site. If you prefer to keep emoji, that's a content decision — the
    components accept any icon node.
- **Usage.** Icons are passed as nodes into `Button` (`iconLeft`/`iconRight`),
  `FeatureCard`, `StepCard`, `Input`. Inside gradient step tiles they render white;
  in feature tiles and inputs they take `--indigo-600` or `--text-faint`. Common
  glyphs: `search`, `eye`, `tag`, `rocket`, `smartphone`, `zap`, `lock`,
  `phone-call`, `target`, `key`, `arrow-right`, `arrow-up-right`, `check`,
  `calendar`, `globe`, `mail`.
- **Logo, not an icon.** The layered sphere is the brand mark — use the PNGs in
  `assets/`, never redraw it as an inline icon.

---

## Typography note / fonts

**Geist** and **Geist Mono** are loaded from Google Fonts (`tokens/fonts.css`) —
this matches the live site exactly, so **no font substitution was needed**. If you
later self-host, swap the `@import` for local `@font-face` rules pointing at
`assets/fonts/` and the tokens keep working unchanged.

---

## Index / manifest

**Root**
- `styles.css` — the single entry point consumers link (only `@import`s).
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`,
  `effects.css`, `base.css`.
- `assets/` — logos (mark, full light/dark lockups, app icon, mobile), the
  layered-sphere illustration (`jajo.png`), favicon, FreeBSD mark.
- `readme.md` (this file), `SKILL.md`.

**Components** — `components/core/` (React, named exports; mount via
`window.CartesianSchoolDesignSystem_f05947`)
- `Button` · `Badge` · `Eyebrow` · `Card` · `FeatureCard` · `StepCard` ·
  `StatBlock` · `Input`. Each has a `.d.ts` contract, a `.prompt.md`, and a shared
  `*.card.html` specimen.

**UI kits** — `ui_kits/`
- `marketing-site/` — interactive, improved recreation of cartesianschool.net.

**Foundation cards** — `guidelines/` (render in the Design System tab)
- Colors (brand ramp, neutral, deep space, status, gradient), Type (display, body,
  mono), Spacing (scale, radii, elevation, glow & glass), Brand (lockups, mark,
  layered-sphere motif).

---

## Quick start for designers

1. Link `styles.css`; use the semantic tokens (`--text-strong`, `--surface-card`,
   `--action-primary`, `--brand-gradient`, `--radius-2xl`, `--glow-indigo`).
2. Compose with the `core` components rather than re-styling raw elements.
3. Keep copy plain, concrete and honest; numbers must be measured, never invented.
4. Use the signature gradient sparingly — identity moments only.
