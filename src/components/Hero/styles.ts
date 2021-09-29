import styled from 'styled-components';

const theme = {
  yellow: '#cdca69',
  dsoulsFont: 'OptimusPrincepsSemiBold',
  arcadeFont: 'ARCADECLASSIC',
};

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: 120vh;
  font-family: ${theme.dsoulsFont};

  h2 {
    line-height: 2.5rem;
    max-width: 550px;
  }
`;

export const TextContent = styled.section`
  justify-content: center;

  h2 {
    letter-spacing: 0.03rem;
  }

  h3 {
    line-height: 3.2rem;
  }

  #continue {
    margin-top: 2rem;
    font-size: 36px;
    letter-spacing: 0.5rem;
  }

  #please {
    margin-left: 2rem;
    font-size: 44px;
    letter-spacing: 0.5rem;
  }

  #praise {
    margin-left: 2rem;
    font-size: 44px;
    letter-spacing: 0.5rem;
    width: 100%;
    overflow: hidden;
    color: ${theme.yellow};
  }
`;

export const PraiseScroll = styled.div`
  position: absolute;
  bottom: 5%;
  left: 50%;

  svg {
    width: 100%;
    animation: sdb04 2s infinite;
    color: ${theme.yellow};
  }

  @keyframes sdb04 {
    0% {
      transform: translateY(0, 0);
    }
    20% {
      transform: translateY(15px);
    }
    40% {
      transform: translateY(0, 0);
    }
  }
`;