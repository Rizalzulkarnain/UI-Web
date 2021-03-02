import styled from 'styled-components';

import { theme } from '../root';

export const LocationCheckupContainer = styled.div`
  display: flex;
  justify-content: space-evenly;

  background: ${theme.colors.white};

  margin-top: 1.5%;
  margin-bottom: 1.5%;
  margin-left: 85px;

  .title__locationChekUp {
    font-size: ${theme.fontSizes.sm};
    margin-bottom: 5%;
  }

  input {
    position: relative;
    padding: 0 0 0 35px;
    font-size: 14px;
    width: 235px;
    height: 35px;
    overflow: hidden;
    border-radius: 2px;
    border: 1px solid gray;
  }

  .icon__location {
    position: absolute;
    margin-left: 10px;
    margin-top: 8px;
    color: ${theme.colors.primary};
    z-index: 99;
  }
`;

export const Select = styled.select`
  position: relative;
  padding: 0 0 0 35px;
  font-size: 14px;
  width: 235px;
  height: 35px;
  overflow: hidden;
  border-radius: 2px;
  border: 1px solid gray;

  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;

export const TypeOfPacket = styled.div`
  margin-bottom: 2%;
  margin-left: 12%;
  display: flex;
  justify-content: flex-start;

  div {
    margin-left: 5%;
  }
`;
