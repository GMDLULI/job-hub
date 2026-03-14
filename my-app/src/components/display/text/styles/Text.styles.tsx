import styled, { css } from "styled-components";
import type { TextProps } from "../Text.types";



export const TextContainer = styled.p<TextProps>`
  margin: 0;

  ${({ variant }) => {
    switch (variant) {
      case "h1":
        return css`
          font-family: "Playfair Display", serif;
          font-size: 54px;
          line-height: 1.1;
          font-weight: 900;
          margin-bottom: 18px;

          em {
            color: #C2410C;
            font-style: normal;
          }
        `;

      case "h2":
        return css`
          font-family: "Playfair Display", serif;
          font-size: 40px;
          font-weight: 700;
          color: #fff;
          margin-bottom: 12px;
        `;

      case "p":
      default:
        return css`
          color: #a8a29e;
          font-size: 15px;
          margin-bottom: 30px;
        `;
    }
  }}
`;