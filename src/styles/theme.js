import { css } from "styled-components";

const colors = {
  cookieOrange: "#ff7134",
  grey_1: "#f9f9f9",
  grey_2: "#f3f3f3",
  grey_3: "#dddddd",
  grey_4: "#c2c2c2",
  grey_5: "#999999",
  grey_6: "#555555",
  black: "#000000",
  black_1: "#333333",
  black_2: "#222222",
  white: "#ffffff",
};
// how to use : ${({ theme }) => theme.colors.orange};

const sizes = {
  desktop: 102.4,
  tablet: 76.8,
  mobile: 32,
};

const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label]}rem) {
      ${css(...args)};
    }
  `;
  return acc;
}, {});
// how to use : ${({ theme }) => theme.media.phone` mobile ver code comes here `;

const theme = {
  colors,
  media,
};

export default theme;
