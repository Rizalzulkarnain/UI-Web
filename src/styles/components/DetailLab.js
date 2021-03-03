import styled from 'styled-components';

import { theme, mixins } from '../root';

export const DetailLabContainer = styled.div`
  display: grid;
  text-align: center;
  grid-template-columns: repeat(auto-fit, minmax(450px, 200px));
  grid-gap: 10%;
  max-width: 900px;
  margin: 0 auto;

  .description__laboratory {
    margin: 8% 0;
    ${mixins.backgroundCard}
    width: fit-content;
  }

  .article__laboratory__container {
    text-align: start;
    margin: 30px 0 40px 25px;
    padding-right: 20px;

    .title__article {
      font-size: ${theme.fontSizes.xxl};
      font-weight: 700;
      color: ${theme.colors.mainHeader};
    }
    .subtitle__article {
      margin-top: 13px;
      font-size: ${theme.fontSizes.base};
      font-weight: 700;
      color: ${theme.colors.mainHeader};
    }

    .main__article {
      margin-top: 13px;
      font-size: ${theme.fontSizes.base};
      font-weight: 500;
      color: ${theme.colors.gray};

      ol {
        li {
          margin-top: 10px;
        }
      }
    }
  }

  .packet__price__laboratory {
    margin: 8% 0px 0px 38%;
    ${mixins.backgroundCard}
    width: fit-content;
    height: fit-content;
    padding: 5%;
    text-align: start;

    .title__price__packet {
      font-size: ${theme.fontSizes.base};
      font-weight: 700;
      color: ${theme.colors.mainHeader};
    }

    .seperate__price__packet {
      border: 0.05px solid ${theme.colors.softGray};
      margin: 15px 0;
    }

    .contents__price__packet {
      display: flex;

      .description__price__packet {
        margin-left: 20px;

        .title__description__price__packet {
          font-size: ${theme.fontSizes.base};
          font-weight: 700;
          color: ${theme.colors.mainHeader};
        }
      }

      .address__price__packet {
        font-size: ${theme.fontSizes.sm};
        font-weight: 300;
      }

      .pin__address__price__packet {
        font-size: ${theme.fontSizes.sm};
        font-weight: 300;
        color: ${theme.colors.primary};
        margin: 8px 0;
      }
    }

    .note__explain__price__packet {
      font-size: ${theme.fontSizes.sm};
      font-weight: 500;
      color: ${theme.colors.gray};
      margin: 15px 0px 5px 5px;
    }

    .note__explain__price__packet__child {
      margin: 8px 0;
    }
  }
`;

export const RatingPricePacket = styled.div`
  display: flex;

  .star__rating__image {
    width: 12px;
  }

  .score__rating {
    font-size: ${theme.fontSizes.sm};
    margin: auto;
    margin-right: 65%;
    font-weight: bold;
  }
`;

export const DiscountPricePaketTotal = styled.div`
  .discount__original__price {
    display: flex;
    justify-content: center;

    .discount__price__packet {
      font-size: ${theme.fontSizes.xs};
      font-weight: bold;
      color: red;
      background: rgba(241, 202, 221, 1);
      border-radius: 3px;
      padding: 3px 3px;
      width: fit-content;
      margin-right: 5px;
    }

    .not__discount__price__packet {
      margin-top: 4px;
      font-size: ${theme.fontSizes.base};
      color: ${theme.colors.gray};
      font-weight: 500;
      text-decoration: line-through;
      margin-left: 5px;
    }
  }

  .final__total__price__packet {
    margin: 8px 0;
    font-size: ${theme.fontSizes.xl};
    color: ${theme.colors.primary};
    font-weight: bolder;
    text-align: center;
  }

  .button__order__price__packet {
    display: grid;
    justify-content: center;
  }
`;
