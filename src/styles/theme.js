import {css} from 'styled-components';

const colors = {
    orange: '#ff7034',
    black: '#000000',
    black_2: '#222222',
    black_3: '#333333',
    lightGray: '#c2c2c2',
    mediumGray: '#c4c4c4',
    homeBoardGray: '#eaeaea',
    white: '#ffffff',
}

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
}

export default theme;