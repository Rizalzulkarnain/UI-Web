import styled from 'styled-components';

import { theme, below } from '../root';

export const BannerCheckUpContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: center;
  grid-gap: 10%;

  ${below.tablet`
    display:flex;
    flex-direction: column;
  `}

  .text__checkUp__title {
    padding-top: 3%;
    margin: auto;
    font-size: ${theme.fontSizes.xxl};
    font-weight: bold;
    margin-bottom: 12px;

    ${below.tablet`
      text-align: center;
    `}
  }

  .text__checkUp__description {
    margin: auto;
    font-size: ${theme.fontSizes.base};
    font-weight: 300;
    padding-bottom: 12px;

    ${below.tablet`
      text-align: center;
    `}
  }

  .image__banner__doctor {
    margin: 0 auto;
  }
`;
