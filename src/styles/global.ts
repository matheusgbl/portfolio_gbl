import { createGlobalStyle } from 'styled-components';

import loading from '../assets/loading.gif';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: #0E1212;
    color: #fff;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Roboto', serif;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }

  .loading {
    background-image: url(${loading});
    background-repeat: no-repeat;
    background-position: center;
  }
`;
