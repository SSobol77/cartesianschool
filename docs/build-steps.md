# Cartesian School Rebuild Steps

Date: 2026-06-13

## Source Inputs

- Previous deployable app: `backup/cartesianschool-old-20260613-124713/old_project_files/`
- Design system export: `backup/cartesianschool-old-20260613-124713/Cartesian School Design System/`
- Prompt documents copied into this project: `docs/prompts/`
- Brand guide: `backup/cartesianschool-old-20260613-124713/readme.md`

## Build Procedure

1. Preserved the complete initial workspace in `backup/cartesianschool-old-20260613-124713/`.
2. Promoted the previous Next.js app from `old_project_files/` to the repository root so the root is directly deployable.
3. Installed `lucide-react` because the new design handoff replaces emoji tiles with line icons.
4. Replaced `app/page.tsx` and `app/globals.css` from the design-system handoff.
5. Updated `app/layout.tsx` for explicit Geist and Geist Mono font variables, valid Open Graph/Twitter image references, metadata, icons, and JSON-LD.
6. Removed old scaffold files and obsolete generated images from the new root. Originals remain in the backup snapshot.
7. Copied design prompt documents into `docs/prompts/` for traceability.
8. Verified with repository scripts: `npm run lint` and `npm run build`.

## Prompt Sources

The prompt sources are preserved verbatim under `docs/prompts/`:

- `Badge.prompt.md`
- `Button.prompt.md`
- `Card.prompt.md`
- `Eyebrow.prompt.md`
- `FeatureCard.prompt.md`
- `Input.prompt.md`
- `StatBlock.prompt.md`
- `StepCard.prompt.md`

## Notes

- The audit modal is currently client-side only and reports local confirmation after form submission.
- Production mail delivery should be added through a server action or route handler before relying on the modal as a contact intake path.
- NPM reported two moderate audit findings after dependency installation; no forced upgrade was applied.
