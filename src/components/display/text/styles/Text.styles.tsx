import styled, { css } from "styled-components";
import type { TextProps, FontFamily, FontSize } from "../Text.types";

const fontFamilyMap: Record<FontFamily, string> = {
  playfair: '"Playfair Display", serif',
  cormorant: '"Cormorant Garamond", serif',
  lora: '"Lora", serif',
  nunito: '"Nunito", sans-serif',
  raleway: '"Raleway", sans-serif',
};

const fontWeightMap: Record<FontSize, number> = {
  sm: 300,
  md: 500,
  lg: 700,
};

const colorMap: Record<string, string> = {
  primary: "#1d1c1b",
  secondary: "#a8a29e",
  light: "#FFF7ED",
  text: "#374151",
  label: "#C2410C",
};

export const TextContainer = styled.p<TextProps>`
  margin: 0;

  ${({ variant, fontFamily = "playfair", size = "md", color = "primary" }) => {
    const family = fontFamilyMap[fontFamily];
    const weight = fontWeightMap[size];
    const textColor = colorMap[color];

    switch (variant) {
      case "h1":
        return css`
          font-family: ${family};
          font-size: 54px;
          line-height: 1.1;
          font-weight: ${weight};
          margin-bottom: 18px;
          color: ${textColor};

          em {
            color: #573b2f;
            font-style: normal;
          }
        `;

      case "h2":
        return css`
          font-family: ${family};
          font-size: 40px;
          font-weight: ${weight};
          color: ${textColor};
          margin-bottom: 12px;
        `;
        case "h3":
          return css`
            font-family: ${family};
            font-size: 30px;
            font-weight: ${weight};
            color: ${textColor};
            margin-bottom: 10px;
          `;
      case "p":
        return css`
          font-family: ${family};
          font-weight: ${weight};
          color: ${textColor};
          font-size: 18px;
          line-height: 1.75;
          margin-bottom: 0px;`

      case "span":
          return css`
          font-family: ${family};
          font-weight: ${weight};
          color: ${textColor};
          font-size: 16px;
          line-height: 1.5;
        `;
      case "label":
        return css`          
          font-family: ${family};
          font-weight: ${weight};
          color: ${textColor};
          display: block;
          font-size: 13px;
          font-weight: 600;
          color: ${textColor};
          margin-bottom: 7px;
        `;
      default:
        return css`
          font-family: ${family};
          font-weight: ${weight};
          color: ${textColor};
          font-size: 20px;
          margin-bottom: 30px;
          line-height: 1.75;
        `;
    }
  }}
`;