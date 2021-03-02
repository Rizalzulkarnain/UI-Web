import styled from 'styled-components';

import { theme } from '../root';

export const HeaderMain = styled.div`
  position: sticky;
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

  div {
    margin-right: 40px;
    margin-top: 12px;
  }
`;

export const SiteHeader = styled.div`
  display: flex;
  color: ${theme.colors.mainHeader};
  position: relative;
  background-color: #fff;
  height: 80px;
  padding-top: 16px;
  padding-bottom: 16px;
  box-shadow: 4px 6px 12px 0 rgb(0 0 0 / 6%);
  z-index: 99;

  img {
    margin-left: 5rem;
  }
`;

export const SiteHeaderDiv = styled.div`
  display: flex;
  margin: auto;
  margin-right: 0;
  padding-right: 20px;

  div {
    margin: auto;
    margin-left: 24px;
  }
`;
