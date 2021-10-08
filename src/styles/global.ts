import { createGlobalStyle } from 'styled-components';

import loading from '../assets/loading.gif';

const theme = {
  yellow: '#cdca69',
  dsoulsFont: 'OptimusPrincepsSemiBold',
};

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

  h1, h2 {
    font-family: ${theme.dsoulsFont}, sans-serif;
  }

  .loading {
    background-image: url(${loading});
    background-repeat: no-repeat;
    background-position: center;
  }
`;
