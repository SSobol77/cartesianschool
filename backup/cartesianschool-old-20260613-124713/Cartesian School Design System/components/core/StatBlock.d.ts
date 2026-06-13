import * as React from "react";

/** Large metric number with a caption, for stat bars. */
export interface StatBlockProps {
  value: string;
  label: string;
  /** White-on-dark styling. @default true */
  onDark?: boolean;
  style?: React.CSSProperties;
}

export function StatBlock(props: StatBlockProps): JSX.Element;
