import styled from 'styled-components';

import { theme, mixins, below } from '../root';

export const SearchLabContainer = styled.div`
  justify-content: center;
  margin-right: 15%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 365px));
  margin-top: 5%;

  ${below.tablet`
    margin-left: auto;
    margin-right: auto;
  `}

  .filter__title {
    font-weight: 700;
    font-size: ${theme.fontSizes.base};
    margin-bottom: 4%;
  }

  .filter__card {
    ${mixins.backgroundCard}
    padding: 18px 130px 7px 15px;
    margin-bottom: 1%;
    width: fit-content;

    .seperate__filter {
      border: solid 1px ${theme.colors.gray};
      width: 100%;
    }
  }

  .checkbox__price {
    margin-top: 15%;

    .container {
      display: block;
      position: relative;
      padding-left: 35px;
      margin-bottom: 12px;
      cursor: pointer;
      font-size: ${theme.fontSizes.base};
      font-weight: 300;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }

    /* Hide the browser's default checkbox */
    .container input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
      height: 0;
      width: 0;
    }

    /* Create a custom checkbox */
    .checkmark {
      position: absolute;
      top: 0;
      left: 0;
      height: 25px;
      width: 25px;
      background-color: #eee;
    }

    /* On mouse-over, add a grey background color */
    .container:hover input ~ .checkmark {
      background-color: #ccc;
    }

    /* When the checkbox is checked, add a blue background */
    .container input:checked ~ .checkmark {
      background-color: #2196f3;
    }

    /* Create the checkmark/indicator (hidden when not checked) */
    .checkmark:after {
      content: '';
      position: absolute;
      display: none;
    }

    /* Show the checkmark when checked */
    .container input:checked ~ .checkmark:after {
      display: block;
    }

    /* Style the checkmark/indicator */
    .container .checkmark:after {
      left: 9px;
      top: 5px;
      width: 5px;
      height: 10px;
      border: solid white;
      border-width: 0 3px 3px 0;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
    }
  }
`;
