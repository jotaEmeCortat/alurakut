import { createGlobalStyle } from 'styled-components';
import normalize from 'styled-normalize';
import { AlurakutStyles } from '../src/libs/AlurakutCommons';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  ${normalize}
  /* Full height layout */
  html, body {
    display: flex;
    min-height: 100vh;
    width: 100%;
    margin: 0;
    padding: 0;
    background-color: #D9E6F6;
  }
  h1, h2, p {
    margin: 0;
    padding: 0;
  }
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }
  ${AlurakutStyles}
`;
