import styled from 'styled-components';

import { Link } from 'react-router-dom';

import { theme } from '../root';

export const LinkRouterDom = styled(Link)`
  text-decoration: none;
  color: ${theme.colors.black};
  cursor: pointer;
`;
