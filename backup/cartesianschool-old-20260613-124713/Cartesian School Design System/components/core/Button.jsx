import React from "react";

/**
 * Cartesian School — Button
 * Pill-shaped action. Primary uses the indigo action color with a soft
 * colored glow; secondary is an outline; ghost is text-only; the
 * `gradient` tone uses the signature brand gradient for hero moments.
 */
export function Button({
  children,
  tone = "primary",      // primary | secondary | ghost | gradient | onDark
  size = "md",           // sm | md | lg
  iconRight = null,
  iconLeft = null,
  href = null,
  disabled = false,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: { padding: "0.5rem 1rem", fontSize: "0.8125rem", gap: "0.375rem" },
    md: { padding: "0.6875rem 1.375rem", fontSize: "0.9375rem", gap: "0.5rem" },
    lg: { padding: "0.9375rem 2rem", fontSize: "1rem", gap: "0.5rem" },
  };

  const tones = {
    primary: {
      background: "var(--action-primary)",
      color: "var(--action-on-primary)",
      boxShadow: "var(--glow-indigo-sm)",
    },
    gradient: {
      background: "var(--brand-gradient)",
      color: "#fff",
      boxShadow: "var(--glow-indigo)",
    },
    secondary: {
      background: "transparent",
      color: "var(--text-body)",
      border: "2px solid var(--border-subtle)",
    },
    ghost: {
      background: "transparent",
      color: "var(--text-accent)",
    },
    onDark: {
      background: "#fff",
      color: "var(--indigo-600)",
    },
  };

  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: sizes[size].gap,
    fontFamily: "var(--font-sans)",
    fontWeight: 600,
    fontSize: sizes[size].fontSize,
    padding: sizes[size].padding,
    borderRadius: "var(--radius-pill)",
    border: tones[tone].border || "2px solid transparent",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.5 : 1,
    textDecoration: "none",
    whiteSpace: "nowrap",
    transition: "transform var(--dur-fast) var(--ease-soft), box-shadow var(--dur-base) var(--ease-soft), background var(--dur-fast) var(--ease-soft)",
    ...tones[tone],
    ...style,
  };

  const Tag = href ? "a" : "button";

  return (
    <Tag
      href={href || undefined}
      disabled={href ? undefined : disabled}
      style={base}
      onMouseEnter={(e) => {
        if (disabled) return;
        e.currentTarget.style.transform = "translateY(-1px)";
        if (tone === "primary") e.currentTarget.style.background = "var(--action-primary-hover)";
        if (tone === "secondary") e.currentTarget.style.borderColor = "var(--indigo-600)";
        if (tone === "primary" || tone === "gradient") e.currentTarget.style.boxShadow = "var(--glow-indigo)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.background = tones[tone].background;
        if (tone === "secondary") e.currentTarget.style.borderColor = "var(--border-subtle)";
        e.currentTarget.style.boxShadow = tones[tone].boxShadow || "none";
      }}
      {...rest}
    >
      {iconLeft}
      {children}
      {iconRight}
    </Tag>
  );
}
