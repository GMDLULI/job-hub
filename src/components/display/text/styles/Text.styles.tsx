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

          @media (max-width: 1024px) {
            font-size: 46px;
          }

          @media (max-width: 768px) {
            font-size: 38px;
            margin-bottom: 14px;
          }

          @media (max-width: 640px) {
            font-size: 30px;
            line-height: 1.2;
            margin-bottom: 12px;
          }

          @media (max-width: 480px) {
            font-size: 26px;
          }
        `;

      case "h2":
        return css`
          font-family: ${family};
          font-size: 40px;
          font-weight: ${weight};
          color: ${textColor};
          margin-bottom: 12px;

          @media (max-width: 1024px) {
            font-size: 34px;
          }

          @media (max-width: 768px) {
            font-size: 28px;
            margin-bottom: 10px;
          }

          @media (max-width: 640px) {
            font-size: 24px;
          }

          @media (max-width: 480px) {
            font-size: 22px;
          }
        `;

      case "h3":
        return css`
          font-family: ${family};
          font-size: 30px;
          font-weight: ${weight};
          color: ${textColor};
          margin-bottom: 10px;

          @media (max-width: 768px) {
            font-size: 24px;
          }

          @media (max-width: 640px) {
            font-size: 20px;
            margin-bottom: 8px;
          }

          @media (max-width: 480px) {
            font-size: 18px;
          }
        `;

      case "p":
        return css`
          font-family: ${family};
          font-weight: ${weight};
          color: ${textColor};
          font-size: 18px;
          line-height: 1.75;
          margin-bottom: 0px;

          @media (max-width: 768px) {
            font-size: 16px;
            line-height: 1.7;
          }

          @media (max-width: 480px) {
            font-size: 15px;
            line-height: 1.65;
          }
        `;

      case "span":
        return css`
          font-family: ${family};
          font-weight: ${weight};
          color: ${textColor};
          font-size: 16px;
          line-height: 1.5;

          @media (max-width: 640px) {
            font-size: 14px;
          }
        `;

      case "label":
        return css`
          font-family: ${family};
          font-weight: 600;
          color: ${textColor};
          display: block;
          font-size: 13px;
          margin-bottom: 7px;

          @media (max-width: 640px) {
            font-size: 12px;
            margin-bottom: 5px;
          }
        `;

      default:
        return css`
          font-family: ${family};
          font-weight: ${weight};
          color: ${textColor};
          font-size: 20px;
          margin-bottom: 30px;
          line-height: 1.75;

          @media (max-width: 768px) {
            font-size: 17px;
            margin-bottom: 22px;
          }

          @media (max-width: 480px) {
            font-size: 15px;
            margin-bottom: 18px;
          }
        `;
    }
  }}
`;