import styled from 'styled-components';

import { theme } from '../root';

export const LocationCheckupContainer = styled.div`
  display: flex;
  justify-content: space-evenly;

  background: ${theme.colors.white};

  margin-top: 1.5%;
  margin-bottom: 1.5%;

  .title__locationChekUp {
    font-size: ${theme.fontSizes.sm};
    margin-bottom: 5%;
  }

  input {
    position: relative;
    padding: 0 10px 0 35px;
    font-size: 14px;
    width: 235px;
    height: 35px;
    overflow: hidden;
    border-radius: 2px;
    border: 1px solid gray;
  }

  img {
    position: absolute;
    right: 32%;
    z-index: 99;
    top: 52%;
  }
`;

export const Select = styled.select`
  margin-top: 3%;
  width: 220%;
  height: 35px;
  background: white;
  color: gray;
  padding-left: 5px;
  font-size: 14px;
  border-radius: 2px;

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
