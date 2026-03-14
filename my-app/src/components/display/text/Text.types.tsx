import type { ReactNode } from "react";

type TextVariant = "h1" | "h2" | "p";

export interface TextProps {
  variant?: TextVariant;
  label?: string
  children?: ReactNode;
}