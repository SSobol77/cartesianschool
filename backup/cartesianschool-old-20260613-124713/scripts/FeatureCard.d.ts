import * as React from "react";

/** Icon tile + title + description for feature grids. */
export interface FeatureCardProps {
  /** Line icon node (Heroicons / Lucide outline, ~24px). */
  icon: React.ReactNode;
  title: string;
  desc: string;
  /** Icon position. @default "row" */
  layout?: "row" | "stack";
  style?: React.CSSProperties;
}

export function FeatureCard(props: FeatureCardProps): JSX.Element;
