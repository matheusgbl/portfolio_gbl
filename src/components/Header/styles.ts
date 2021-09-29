import styled from 'styled-components';

const theme = {
  yellow: '#cdca69',
  dsoulsFont: 'OptimusPrincepsSemiBold',
  arcadeFont: 'ARCADECLASSIC',
};

export const Container = styled.div`
  align-items: center;
  background: linear-gradient(180deg, #0e1212 4rem, rgba(14, 18, 18, 0));
  color: #fff;
  display: flex;
  padding: 20px 230px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;

  svg {
    position: relative;
    top: 2px;
    right: 2px;
  }

  span {
    font-family: ${theme.arcadeFont}, sans-serif;
    letter-spacing: 0.3rem;
    font-size: 24px;

    &:hover {
      cursor: pointer;
      color: ${theme.yellow};
    }
  }

  nav {
    display: flex;
    margin-left: auto;
    font-size: 18px;
    font-family: ${theme.dsoulsFont}, sans-serif;

    & > p {
      margin-left: 120px;

      &:hover {
        cursor: pointer;
        color: ${theme.yellow};
      }
    }
  }
`;
