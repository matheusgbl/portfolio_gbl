import styled from 'styled-components';

const theme = {
  yellow: '#cdca69',
  dsoulsFont: 'OptimusPrincepsSemiBold',
};

export const Container = styled.section`
  display: flex;
  height: 60vh;
  h2 {
    color: ${theme.yellow};
    font-size: 60px;
    font-family: ${theme.dsoulsFont};
  }
`;
