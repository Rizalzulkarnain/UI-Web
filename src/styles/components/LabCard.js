import styled from 'styled-components';

import { mixins, theme, below } from '../root';

export const LabCardContainer = styled.div`
  ${mixins.backgroundCard}
  position: relative;
  height: 165px;
  margin-bottom: 1%;
  width: 180%;
  margin-top: 10%;
  display: flex;

  ${below.tablet`
    right: 40%;
  `}

  .seperate__card__price {
    border: 1px solid ${theme.colors.gray};
    transform: rotate(90deg);
    width: 164px;
    margin-top: 81px;
    margin-left: 55%;
    position: absolute;
    z-index: 99;
  }

  .image__card {
    position: absolute;
    height: 165px;
    width: 112px;
  }

  .description__card {
    margin-left: 120px;
    margin-top: 10px;

    .title__service__card {
      display: flex;
    }

    .come__to__lab {
      background-color: ${theme.colors.teal};
      color: ${theme.colors.white};
      font-size: ${theme.fontSizes.xs};
      border-radius: 100px;
      font-weight: bold;
      width: fit-content;
      padding: 0px 6px 0px 6px;
    }

    .home__service {
      font-size: ${theme.fontSizes.xs};
      color: ${theme.colors.white};
      background-color: ${theme.colors.primary};
      border-radius: 100px;
      font-weight: bold;
      margin-left: 15px;
      padding: 0 8px;
      width: fit-content;
      padding: 0px 6px 0px 6px;
    }

    .hospital {
      color: ${theme.colors.mainHeader};
      font-weight: 700;
      font-size: ${theme.fontSizes.sm};
      margin-top: 15px;
    }

    .hospital__address {
      color: ${theme.colors.mainHeader};
      font-weight: 400;
      font-size: ${theme.fontSizes.sm};
    }

    .hospital__rating__container {
      display: flex;
      margin-top: 35px;

      img {
        margin-top: 10px;
      }

      .score__rating {
        margin-top: 12px;
        font-size: ${theme.fontSizes.sm};
        font-weight: bold;
      }

      .description__rating {
        color: ${theme.colors.mainHeader};
        font-size: ${theme.fontSizes.sm};
        font-weight: 300;
        margin-top: 12px;
        display: flex;
        margin-left: 15px;
      }
    }
  }
`;

export const PriceCard = styled.div`
  display: table;
  margin: auto;
  text-align: start;
  margin-left: 25px;

  .price__discount {
    font-size: ${theme.fontSizes.xs};
    font-weight: bold;
    color: red;
    background: rgba(241, 202, 221, 1);
    border-radius: 3px;
    padding: 3px 3px;
    width: fit-content;
  }

  .not_discount {
    margin-top: 4px;
    font-size: ${theme.fontSizes.base};
    color: ${theme.colors.mainHeader};
    font-weight: 500;
    text-decoration: line-through;
  }

  .final_discount {
    margin-top: 4px;
    font-size: ${theme.fontSizes.xl};
    color: ${theme.colors.orange};
    font-weight: bolder;
  }
`;
