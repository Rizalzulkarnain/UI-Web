import { css } from 'styled-components';
import theme from './theme';

const mixins = {
  gridResponsive: css`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  `,

  backgroundCard: css`
    background-color: #fff;
    background-clip: border-box;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
    border-radius: 3px;
  `,

  gridCenter: css`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    text-align: center;
  `,

  flexBetween: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,

  outline: css`
    outline: 1px solid red;
  `,

  link: css`
    position: relative;
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    transition: ${theme.transition};
    cursor: pointer;
    color: ${theme.colors.black};

    &:hover,
    &:active,
    &:focus {
      color: ${theme.colors.purple};
    }
  `,
};

export default mixins;
