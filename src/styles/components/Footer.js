import styled from 'styled-components';

import { theme, mixins } from '../root';

export const HeaderMain = styled.div`
  position: sticky;
`;

export const FooterContainer = styled.footer`
  left: 0;
  bottom: 0;
  width: 100%;
  text-align: center;
`;

export const EmailSubcription = styled.div`
  padding: 40px;
  background-color: ${theme.colors.emailBackground};
  color: ${theme.colors.white};

  display: grid;
  justify-content: center;
  grid-template-columns: 1fr 1fr;

  .text__newsletter {
    font-size: ${theme.colors.md};
    margin: auto;
  }

  .form__newsletter {
    padding-right: 15%;
  }

  input {
    width: 100%;
    max-width: 270px;
    height: 50px;
    padding: 0 16px;
    background-color: #fff;
    border-radius: 4px 0 0 4px;
    border: none;
    outline: none;
    font-size: 12px;
  }

  button {
    position: absolute;
  }
`;

export const SiteFooter = styled.div`
  background-color: #0a315f;
  padding-top: 42px;
  padding-bottom: 42px;
  color: #fff;
  font-weight: 300;

  ${mixins.gridResponsive}
  grid-gap: 2px;
  padding-right: 15px;
  padding-left: 15px;

  .title__footer {
    text-align: start;
    font-weight: 700;
    margin-left: 40px;
  }

  ul {
    text-align: start;
    list-style: none;
    li {
      margin-bottom: 8px;
    }
  }

  .medsos__logo {
    margin-top: 8%;
    background-color: transparent;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
    grid-gap: 2px;
  }
`;
