import styled from 'styled-components';

import { mixins, theme } from '../root';

export const LabCardContainer = styled.div`
  ${mixins.backgroundCard}

  position: relative;
  height: 165px;
  margin-bottom: 1%;
  width: 165%;

  margin-top: 10%;
  display: flex;

  .image__card {
    position: absolute;
    height: 165px;
    width: 112px;
  }

  .description__card {
    margin-left: 125px;
    margin-top: 10px;

    .title__service__card {
      ${mixins.gridCenter}
    }

    .come__to__lab {
      background-color: ${theme.colors.teal};
      color: ${theme.colors.white};
      font-size: ${theme.fontSizes.xs};
      border-radius: 100px;
      font-weight: bold;
    }

    .home__service {
      font-size: ${theme.fontSizes.xs};
      color: ${theme.colors.white};
      background-color: ${theme.colors.primary};
      border-radius: 100px;
      font-weight: bold;
      margin-left: 15px;
      padding: 0 8px;
    }

    .price__card {
      margin-left: 15px;
    }
  }
`;
