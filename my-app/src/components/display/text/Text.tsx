import React from "react";
import { TextContainer } from "./styles/Text.styles";
import type { TextProps } from "./Text.types";

const Text: React.FC<TextProps> = ({ variant, children }) => {
  return <TextContainer variant={variant}>{children}</TextContainer>;
};

export default Text;