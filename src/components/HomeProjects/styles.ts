import styled from 'styled-components';

const theme = {
  yellow: '#F2C36B',
  dsoulsFont: 'OptimusPrincepsSemiBold',
};

const card = {
  bgCard: 'white',
  pdCard: '200px',
  rdCard: '10px',
};

export const Container = styled.section`
  h2 {
    width: 100%;
    color: ${theme.yellow};
    font-family: ${theme.dsoulsFont};
    font-size: 54px;
  }
`;

export const ProjectsCard = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

export const FirstCard = styled.div``;

export const SecondCard = styled.div`
  background-color: ${card.bgCard};
  border-radius: ${card.rdCard};
  width: 450px;
  height: 230px;

  transition: all 0.5s;

  div {
    background-color: #2d333b;
    padding: 14px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;

    .gobarber_logo {
      width: 150px;
      margin: auto;
      display: flex;
    }
  }

  a {
    img {
      display: flex;
      margin: auto;
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;
      width: 450px;
    }
  }
  &:hover {
    transform: scale(1.03);
  }
`;

export const ThirdCard = styled.div`
  background-color: ${card.bgCard};
  border-radius: ${card.rdCard};
  width: 450px;
  height: 230px;

  transition: all 0.5s;

  div {
    background-color: #2d333b;
    padding: 14px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      margin-right: 20px;
      margin-left: 20px;
      color: #ff9000;
    }

    span {
      font-size: 24px;
      font-weight: 600;
      font-family: ${theme.dsoulsFont};
    }
  }

  a {
    img {
      display: flex;
      margin: auto;
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;
      width: 450px;
    }
  }
  &:hover {
    transform: scale(1.03);
  }
`;
