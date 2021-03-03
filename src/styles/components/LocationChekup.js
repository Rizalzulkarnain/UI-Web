import styled from 'styled-components';

import { theme, below } from '../root';

export const WrapperLocationCheckup = styled.div`
  justify-content: center;
  display: grid;
`;

export const LocationCheckupContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, auto));
  grid-gap: 100px;
  background: ${theme.colors.white};
  margin-top: 1.5%;
  margin-bottom: 1.5%;

  ${below.tablet`
    display: flex;
    flex-direction: column;
    grid-gap: 0px;
    margin-left: auto;
    margin-right: auto;
  `}

  .title__locationChekUp {
    font-size: ${theme.fontSizes.sm};

    ${below.tablet`
      text-align: center;
      margin: 3px 0px;
    `}
  }

  .wrapper__input__select__locationChekUp {
    .icon__location {
      position: absolute;
      margin-left: 10px;
      margin-top: 8px;
      color: ${theme.colors.primary};
      z-index: 99;
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
  display: flex;
  justify-content: center;

  ${below.tablet`
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;
  `}

  .button__typeOfPacket__container {
    margin: 0 5px 0 0;

    ${below.tablet`
      margin: 0 0 0 0;
      margin: 3px 0;
      margin-left: auto;
      margin-right: auto;
  `}
  }
`;
