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

  button {
    cursor: pointer;
  }

  .loading {
    background-image: url(${loading});
    background-repeat: no-repeat;
    background-position: center;
  }
`;
