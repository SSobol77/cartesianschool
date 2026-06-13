import React from "react";

/**
 * Cartesian School — StatBlock
 * Big number + label, as on the dark stats bar. `onDark` (default)
 * is white-on-space; set onDark={false} for light sections.
 */
export function StatBlock({ value, label, onDark = true, style = {} }) {
  return (
    <div style={{ textAlign: "center", ...style }}>
      <div
        style={{
          fontSize: "clamp(2.25rem, 1.5rem + 2.5vw, 3rem)",
          fontWeight: 800,
          letterSpacing: "-0.02em",
          lineHeight: 1,
          color: onDark ? "#fff" : "var(--text-strong)",
        }}
      >
        {value}
      </div>
      <p
        style={{
          marginTop: "0.5rem",
          fontSize: "var(--text-sm)",
          fontWeight: 500,
          color: onDark ? "var(--slate-400)" : "var(--text-muted)",
        }}
      >
        {label}
      </p>
    </div>
  );
}
