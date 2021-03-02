import styled from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';

import { theme } from '../root';

const BUTTON_ELEMENTS = {
  mediumRegister: () => `
    padding: 6px 12px;
    background-color: #2f5dc3;
    border-color: #2f5dc3;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: 0.25rem;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    color: ${theme.colors.white};
  `,
  mediumLogin: () => `
    padding: 6px 12px;
    color: #2f5dc3 !important;
    background-color: #ebf4ff;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: 0.25rem;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  `,
  largeEmailSubscription: () => `
    font-weight: 600;
    color: #fff;
    border-radius: 0 4px 4px 0;
    background-color: #ff7900;
    padding: 14px 22px;
    height: 50px;
    min-height: 40px;
    line-height: 23px;
    margin: 0;
  `,
  bloodPacket: () => `
    background: rgba(40, 167, 69, 0.5);
    border-radius: 3px;
    padding: 10px;
    text-align: center;
    margin-left: 1%;
    font-Size: 14px;
    width: max-content
  `,
  disabled: () => `
    background: ${theme.colors.darkWhite};
    border-radius: 3px;
    padding: 10px;
    text-align: center;
    margin-left: 1%;
    font-Size: 14px;
    width: max-content
  `,
  cariLabButton: () => `
    font-weight: 600;
    color: #fff;
    border-radius: 4px;
    background-color: #ff7900;
    padding: 14px 22px;
    height: 45px;
    min-height: 40px;
    line-height: 23px;
    margin: 0;
  `,
};

export const Button = styled.button`
  cursor: pointer;
  border: none;
  outline: none;

  ${applyStyleModifiers(BUTTON_ELEMENTS)};
`;
