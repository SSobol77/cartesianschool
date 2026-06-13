import * as React from "react";

/**
 * Pill-shaped call-to-action button in the Cartesian School style.
 *
 * @startingPoint section="Core" subtitle="Pill CTA with brand glow" viewport="700x200"
 */
export interface ButtonProps {
  children: React.ReactNode;
  /** Visual tone. @default "primary" */
  tone?: "primary" | "secondary" | "ghost" | "gradient" | "onDark";
  /** Size. @default "md" */
  size?: "sm" | "md" | "lg";
  /** Optional trailing icon node (e.g. an arrow). */
  iconRight?: React.ReactNode;
  /** Optional leading icon node. */
  iconLeft?: React.ReactNode;
  /** Renders as an anchor when set. */
  href?: string;
  disabled?: boolean;
  style?: React.CSSProperties;
}

export function Button(props: ButtonProps): JSX.Element;
