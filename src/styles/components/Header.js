import styled from 'styled-components';

import { theme, below, above } from '../root';

export const HeaderMain = styled.div`
  position: sticky;

  .main-navigation__menu-btn {
    width: 3rem;
    height: 3rem;
    background: transparent;
    border: none;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-right: 2rem;
    cursor: pointer;

    ${above.tablet`
      display: none;
    `}
  }

  .main-navigation__menu-btn__span {
    display: block;
    width: 3rem;
    height: 2.5px;
    background: ${theme.colors.gray};
  }
`;

export const TopHeaderContainer = styled.div`
  font-size: ${theme.fontSizes.sm};
  color: ${theme.colors.dark};
  display: flex;
  justify-content: flex-end;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  margin: 9px;
  padding: 15px;
  margin: 0;
  background-color: ${theme.colors.darkWhite};

  .TopHeaderNav {
    margin-right: 40px;
    margin-top: 12px;

    ${below.tablet`
      display: none;
    `}
  }

  ${below.tablet`
    display: none;
  `}
`;

export const SiteHeader = styled.div`
  display: flex;
  justify-content: space-around;
  color: ${theme.colors.mainHeader};
  position: relative;
  background-color: #fff;
  height: 80px;
  padding-top: 16px;
  padding-bottom: 16px;
  box-shadow: 4px 6px 12px 0 rgb(0 0 0 / 6%);
  z-index: 99;

  .triasse__image__div {
    margin-left: 5rem;

    ${below.tablet`
      margin-left: auto;
      margin-right: auto;
      `}

    .triasse__image {
      ${below.tablet`
        width: 64px;
        `}
    }
  }
`;
