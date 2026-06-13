import React from "react";

/**
 * Cartesian School — Card
 * Rounded surface container with a soft border. `interactive` adds
 * the hover lift + indigo border used on portfolio / step cards.
 * `tone="space"` is the dark panel; `tone="gradient"` is the brand
 * pricing/CTA panel.
 */
export function Card({
  children,
  tone = "default",      // default | subtle | space | gradient
  interactive = false,
  padding = "var(--space-8)",
  style = {},
  ...rest
}) {
  const tones = {
    default: { background: "var(--surface-card)", border: "1px solid var(--border-subtle)", color: "var(--text-body)" },
    subtle:  { background: "var(--surface-subtle)", border: "1px solid var(--border-subtle)", color: "var(--text-body)" },
    space:   { background: "linear-gradient(160deg, var(--space-800), var(--space-950))", border: "1px solid var(--border-on-dark)", color: "#fff" },
    gradient:{ background: "var(--brand-gradient)", border: "1px solid transparent", color: "#fff" },
  };

  return (
    <div
      style={{
        position: "relative",
        borderRadius: "var(--radius-2xl)",
        padding,
        transition: "transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out)",
        ...tones[tone],
        ...style,
      }}
      onMouseEnter={(e) => {
        if (!interactive) return;
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow = "var(--shadow-hover)";
        if (tone === "default" || tone === "subtle") e.currentTarget.style.borderColor = "rgba(79,70,229,0.35)";
      }}
      onMouseLeave={(e) => {
        if (!interactive) return;
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "none";
        e.currentTarget.style.borderColor = tones[tone].border.split(" ").slice(2).join(" ") || "var(--border-subtle)";
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
