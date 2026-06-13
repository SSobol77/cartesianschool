import * as React from "react";

/** Numbered process step with a gradient icon tile. */
export interface StepCardProps {
  /** Step number string, e.g. "01". */
  n: string;
  icon: React.ReactNode;
  title: string;
  desc: string;
  style?: React.CSSProperties;
}

export function StepCard(props: StepCardProps): JSX.Element;
