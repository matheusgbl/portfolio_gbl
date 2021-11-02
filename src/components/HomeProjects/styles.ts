import styled from 'styled-components';

const theme = {
  yellow: '#F2C36B',
  dsoulsFont: 'OptimusPrincepsSemiBold',
};

export const Container = styled.section`
  margin-top: 10rem;
  h2 {
    width: 100%;
    color: ${theme.yellow};
    font-family: ${theme.dsoulsFont};
    font-size: 72px;
    text-align: center;
  }
`;

export const ProjectsCard = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

export const FirstCard = styled.div``;

export const SecondCard = styled.div``;

export const ThirdCard = styled.div``;
