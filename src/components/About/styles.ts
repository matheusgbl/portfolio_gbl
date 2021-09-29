import styled from 'styled-components';

const theme = {
  yellow: '#cdca69',
  dsoulsFont: 'OptimusPrincepsSemiBold',
};

export const Container = styled.section`
  height: 60vh;

  h2 {
    width: 100%;
    color: ${theme.yellow};
    font-size: 60px;
    font-family: ${theme.dsoulsFont};
  }
`;

export const AboutText = styled.div`
  display: flex;
  width: 100%;
  font-family: 'Roboto', sans-serif;
`;
