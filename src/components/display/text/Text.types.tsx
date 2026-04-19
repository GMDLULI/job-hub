import type { ReactNode } from "react";

type TextVariant = "h1" | "h2" | "h3" | "p" | "span" |"label";
export type FontFamily = "playfair" | "cormorant" | "lora" | "nunito" | "raleway";
export type FontSize = "sm" | "md" | "lg";

export interface TextProps {
  variant?: TextVariant;
  fontFamily?: FontFamily;
  size?: FontSize;
  label?: string;
  children?: ReactNode;
  color?: string;
}