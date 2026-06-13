import React from "react";

/**
 * Cartesian School — Input
 * Text field with optional leading icon and label. Rounded, soft
 * border, indigo focus ring. Used in the audit-request / contact form.
 */
export function Input({
  label = null,
  icon = null,
  type = "text",
  placeholder = "",
  id,
  style = {},
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  return (
    <label style={{ display: "block", ...style }} htmlFor={id}>
      {label && (
        <span style={{ display: "block", fontSize: "var(--text-sm)", fontWeight: 500, color: "var(--text-strong)", marginBottom: "0.4375rem" }}>
          {label}
        </span>
      )}
      <span
        style={{
          display: "flex", alignItems: "center", gap: "0.625rem",
          background: "var(--surface-card)",
          border: `1px solid ${focused ? "var(--indigo-600)" : "var(--border-strong)"}`,
          borderRadius: "var(--radius-sm)",
          padding: "0.6875rem 0.875rem",
          boxShadow: focused ? "var(--ring-accent)" : "none",
          transition: "border-color var(--dur-fast), box-shadow var(--dur-fast)",
        }}
      >
        {icon && <span style={{ color: "var(--text-faint)", display: "inline-flex" }}>{icon}</span>}
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={{
            flex: 1, border: "none", outline: "none", background: "transparent",
            fontFamily: "var(--font-sans)", fontSize: "var(--text-body)", color: "var(--text-strong)",
          }}
          {...rest}
        />
      </span>
    </label>
  );
}
