# Marketing Site — UI kit

An interactive, high-fidelity recreation of **cartesianschool.net** (the agency's
own marketing site), rebuilt on the Cartesian School design system and lightly
**improved** over the live Next.js original.

## Run it
Open `index.html`. It loads React + the compiled `_ds_bundle.js` and assembles the
page from the screen modules below.

## Files
| File | Role |
|---|---|
| `index.html` | Shell — loads React, Babel, Lucide, the DS bundle, then the modules |
| `data.js` | All copy/content (nav, steps, features, portfolio, stats) as `window.CS_DATA` |
| `nav-hero.jsx` | Sticky `Nav`, `Logo`, `Hero` + phone-mockup `HeroVisual` |
| `sections.jsx` | `StatsBar`, `Process`, `Portfolio`, `Features` + `Pricing`, `About`, `Footer` |
| `app.jsx` | `App` shell, interactive `AuditModal` (form → success), Lucide refresh |

## What it demonstrates
- Composes the DS primitives (`Button`, `Badge`, `Eyebrow`, `Card`, `FeatureCard`,
  `StepCard`, `StatBlock`, `Input`) — no re-implementation.
- Working interactions: sticky/blur nav on scroll, hover lifts, and a **Get free
  audit** modal with a two-step form → confirmation flow.

## Improvements over the live site (intentional, not the original)
1. **Emoji → line icons.** The live site uses emoji tiles (🔍 👁️ 💰 🚀 …). This kit
   swaps them for Lucide outline icons in gradient/line tiles — cleaner, on-brand.
2. **Hero polish.** Replaced the three drifting color "blobs" with a restrained
   brand radial wash + masked grid, and folded in the new layered-sphere motif.
3. **Tokenized.** Every color, radius, shadow and type size comes from the DS tokens
   instead of ad-hoc Tailwind utilities, so the brand stays consistent.

> These are suggestions for the site. The structure, copy and sections faithfully
> mirror the original — only the visual finish is elevated.
