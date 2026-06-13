import * as React from "react";

/**
 * Rounded surface container.
 *
 * @startingPoint section="Core" subtitle="Surface card with hover lift" viewport="700x260"
 */
export interface CardProps {
  children: React.ReactNode;
  /** Surface tone. @default "default" */
  tone?: "default" | "subtle" | "space" | "gradient";
  /** Enable hover lift + indigo border. @default false */
  interactive?: boolean;
  /** CSS padding value. @default "var(--space-8)" */
  padding?: string;
  style?: React.CSSProperties;
}

export function Card(props: CardProps): JSX.Element;
