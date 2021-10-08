import styled from 'styled-components';

const theme = {
  yellow: '#cdca69',
  dsoulsFont: 'OptimusPrincepsSemiBold',
};

export const Container = styled.div`
  align-items: center;
  background: linear-gradient(180deg, #0e1212 4rem, rgba(14, 18, 18, 0));
  color: #fff;
  display: flex;
  padding: 20px 150px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;

  svg {
    position: relative;
    top: 2px;
    right: 2px;
    color: ${theme.yellow};
  }

  span {
    font-family: ${theme.dsoulsFont}, sans-serif;
    letter-spacing: 0.2rem;
    font-size: 20px;

    &:hover {
      cursor: pointer;
      color: ${theme.yellow};
    }
  }

  nav {
    display: flex;
    margin-left: auto;
    align-items: center;
    font-size: 18px;
    letter-spacing: 0.1rem;
    font-family: ${theme.dsoulsFont}, sans-serif;

    & > p {
      margin-left: 40px;

      &:hover {
        cursor: pointer;
        color: ${theme.yellow};
      }
    }

    .social {
      svg {
        &:hover {
          color: white;
          cursor: pointer;
        }
      }
      & > a {
        margin-left: 15px;
      }
    }
  }
`;
