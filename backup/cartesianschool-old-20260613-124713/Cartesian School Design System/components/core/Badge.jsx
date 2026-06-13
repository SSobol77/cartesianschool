import React from "react";

/**
 * Cartesian School — Badge
 * Small pill label. `dot` shows a pulsing status dot (the hero
 * "Websites for Local Businesses" chip). `metric` is the bold
 * mono chip used on portfolio cards ("21.8 s", "46/100 speed").
 */
export function Badge({
  children,
  tone = "indigo",       // indigo | neutral | pass | before | fail | onDark
  dot = false,
  metric = false,
  style = {},
}) {
  const tones = {
    indigo:  { bg: "var(--tint-indigo)", fg: "var(--indigo-700)", bd: "rgba(79,70,229,0.18)" },
    neutral: { bg: "var(--slate-100)", fg: "var(--slate-600)", bd: "var(--border-subtle)" },
    pass:    { bg: "var(--green-100)", fg: "var(--green-600)", bd: "rgba(22,163,74,0.20)" },
    before:  { bg: "rgba(245,158,11,0.12)", fg: "#b45309", bd: "rgba(245,158,11,0.25)" },
    fail:    { bg: "rgba(239,68,68,0.10)", fg: "#b91c1c", bd: "rgba(239,68,68,0.22)" },
    onDark:  { bg: "var(--glass-fill)", fg: "#fff", bd: "var(--glass-border)" },
  };
  const t = tones[tone] || tones.indigo;

  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "0.5rem",
        fontFamily: metric ? "var(--font-mono)" : "var(--font-sans)",
        fontSize: metric ? "0.75rem" : "0.8125rem",
        fontWeight: metric ? 600 : 500,
        lineHeight: 1,
        padding: metric ? "0.375rem 0.75rem" : "0.4375rem 0.875rem",
        borderRadius: "var(--radius-pill)",
        background: t.bg,
        color: t.fg,
        border: `1px solid ${t.bd}`,
        whiteSpace: "nowrap",
        ...style,
      }}
    >
      {dot && (
        <span
          style={{
            width: 8, height: 8, borderRadius: "50%", background: "currentColor",
            boxShadow: "0 0 0 4px color-mix(in srgb, currentColor 18%, transparent)",
            animation: "cs-pulse 2s var(--ease-soft) infinite",
          }}
        />
      )}
      {children}
      <style>{`@keyframes cs-pulse{0%,100%{opacity:1}50%{opacity:.4}}`}</style>
    </span>
  );
}
