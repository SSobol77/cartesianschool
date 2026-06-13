Pill-shaped call-to-action button — use for every primary/secondary action; `tone="gradient"` is reserved for hero and pricing moments.

```jsx
<Button tone="primary" size="lg" iconRight={<ArrowRight />}>Book a call</Button>
<Button tone="secondary">Get free audit</Button>
<Button tone="gradient" size="lg">See it live</Button>
```

Tones: `primary` (indigo + glow), `secondary` (outline), `ghost` (text link), `gradient` (brand gradient, hero only), `onDark` (white pill for dark sections). Sizes: `sm` / `md` / `lg`. Pass `href` to render as an `<a>`.
