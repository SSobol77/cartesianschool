import React from "react";
import { Card } from "./Card.jsx";

/**
 * Cartesian School — FeatureCard
 * Icon tile + title + description. Used in the "what you get" grid.
 * `layout="row"` puts the icon beside the text; "stack" puts it above.
 * Pass a line icon (Heroicons/Lucide outline) as `icon`.
 */
export function FeatureCard({ icon, title, desc, layout = "row", style = {} }) {
  const isRow = layout === "row";
  return (
    <Card tone="subtle" interactive padding="var(--space-6)" style={style}>
      <div style={{ display: "flex", flexDirection: isRow ? "row" : "column", gap: "var(--space-4)", alignItems: isRow ? "flex-start" : "stretch" }}>
        <span
          style={{
            flexShrink: 0,
            width: 48, height: 48,
            display: "inline-flex", alignItems: "center", justifyContent: "center",
            borderRadius: "var(--radius-md)",
            background: "var(--surface-card)",
            border: "1px solid var(--border-subtle)",
            color: "var(--indigo-600)",
            boxShadow: "var(--shadow-xs)",
          }}
        >
          {icon}
        </span>
        <div>
          <h3 style={{ fontSize: "var(--text-h4)", fontWeight: 700, color: "var(--text-strong)", margin: 0 }}>{title}</h3>
          <p style={{ marginTop: "0.375rem", fontSize: "var(--text-sm)", color: "var(--text-body)", lineHeight: "var(--leading-normal)" }}>{desc}</p>
        </div>
      </div>
    </Card>
  );
}
