import React from "react";
import { TextContainer } from "./styles/Text.styles";
import type { TextProps } from "./Text.types";

const Text: React.FC<TextProps> = ({ variant, fontFamily, size, color, children }) => {
  return (
    <TextContainer variant={variant} fontFamily={fontFamily} size={size} color={color}>
      {children}
    </TextContainer>
  );
};

export default Text;