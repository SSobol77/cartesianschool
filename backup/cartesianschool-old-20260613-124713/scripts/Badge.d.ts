import * as React from "react";

/** Small pill label / chip. */
export interface BadgeProps {
  children: React.ReactNode;
  /** Color tone. @default "indigo" */
  tone?: "indigo" | "neutral" | "pass" | "before" | "fail" | "onDark";
  /** Show a pulsing leading status dot. @default false */
  dot?: boolean;
  /** Render as a bold mono metric chip. @default false */
  metric?: boolean;
  style?: React.CSSProperties;
}

export function Badge(props: BadgeProps): JSX.Element;
