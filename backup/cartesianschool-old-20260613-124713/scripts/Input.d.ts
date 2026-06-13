import * as React from "react";

/** Text input with optional label and leading icon. */
export interface InputProps {
  label?: string;
  /** Leading icon node. */
  icon?: React.ReactNode;
  type?: string;
  placeholder?: string;
  id?: string;
  style?: React.CSSProperties;
}

export function Input(props: InputProps): JSX.Element;
