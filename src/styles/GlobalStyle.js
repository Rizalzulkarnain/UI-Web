import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

import { theme } from './root';

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  * {
    box-sizing: border-box;
  }

  body {
    box-sizing: border-box;
    margin: 0 auto;
    padding: 0;
    font-family: "Inv Maison Neue","Maison Neue",-apple-system,BlinkMacSystemFont,"Open Sans",open-sans,sans-serif;
    background-color: ${theme.colors.white};
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
`;
