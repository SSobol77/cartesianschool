import React from "react";

/**
 * Cartesian School — Eyebrow
 * Uppercase, indigo, wide-tracked section label that sits above
 * a heading ("Process", "Portfolio", "What you get").
 */
export function Eyebrow({ children, style = {} }) {
  return (
    <span
      style={{
        display: "block",
        fontFamily: "var(--font-sans)",
        fontSize: "var(--text-xs)",
        fontWeight: 600,
        textTransform: "uppercase",
        letterSpacing: "var(--tracking-wide)",
        color: "var(--text-accent)",
        ...style,
      }}
    >
      {children}
    </span>
  );
}
