import React from "react";
import { Card } from "./Card.jsx";

/**
 * Cartesian School — StepCard
 * Numbered process step. The gradient icon tile + big ghosted step
 * number echo the site's "How it works" grid.
 */
export function StepCard({ n, icon, title, desc, style = {} }) {
  return (
    <Card tone="subtle" interactive padding="var(--space-8)" style={{ height: "100%", ...style }}>
      <span
        style={{
          position: "absolute", top: "var(--space-6)", right: "var(--space-6)",
          fontSize: "3rem", fontWeight: 800, lineHeight: 1,
          color: "var(--slate-100)", letterSpacing: "-0.02em",
          fontFamily: "var(--font-mono)",
        }}
      >
        {n}
      </span>
      <span
        style={{
          display: "inline-flex", alignItems: "center", justifyContent: "center",
          width: 56, height: 56, borderRadius: "var(--radius-lg)",
          background: "var(--brand-gradient)", color: "#fff",
          boxShadow: "var(--glow-indigo-sm)", marginBottom: "var(--space-6)",
        }}
      >
        {icon}
      </span>
      <h3 style={{ fontSize: "var(--text-h3)", fontWeight: 700, color: "var(--text-strong)", marginBottom: "0.5rem" }}>{title}</h3>
      <p style={{ fontSize: "var(--text-sm)", color: "var(--text-body)", lineHeight: "var(--leading-relaxed)" }}>{desc}</p>
    </Card>
  );
}
