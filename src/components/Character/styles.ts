import styled from 'styled-components';

const theme = {
  yellow: '#cdca69',
  cardWidth: '285px',
  cardHeight: '450px',
  cardRadius: '10px',
  cardBg: 'linear-gradient(180deg, rgba(0, 0, 0, 0.3), rgba(238, 187, 78, 0.5))',
};

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  h2 {
    color: ${theme.yellow};
    font-size: 54px;
    display: flex;
    justify-content: center;

    & > svg {
      margin: 0 12px;
    }
  }
`;

export const Warriors = styled.div`
  display: flex;
  justify-content: center;
  gap: 200px;
  align-items: center;
  margin-top: 100px;
`;

export const Warrior1Card = styled.div`
  .warrior_name {
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
    font-size: 24px;
  }
  .solaire_card {
    transition: all 0.3s ease-in;

    &:hover {
      cursor: pointer;
      transform: scale(1.05);
    }
  }

  .solaire_bg {
    width: ${theme.cardWidth};
    height: ${theme.cardHeight};
    border-radius: ${theme.cardRadius};
    background-image: ${theme.cardBg};
    position: absolute;
    z-index: -1;
    margin-top: -15px;
    margin-left: -10px;
  }
`;

export const Warrior2Card = styled.div`
  .warrior_name {
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
    font-size: 24px;
  }

  .artorias_card {
    transition: all 0.3s ease-in;

    &:hover {
      cursor: pointer;
      transform: scale(1.05);
    }
  }

  margin-left: 20px;
  .artorias_bg {
    width: ${theme.cardWidth};
    height: ${theme.cardHeight};
    border-radius: ${theme.cardRadius};
    background-image: ${theme.cardBg};
    position: absolute;
    z-index: -1;
    margin-top: -15px;
    margin-left: -3px;
  }
`;

export const Warrior3Card = styled.div`
  .warrior_name {
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
    font-size: 24px;
  }

  .ornstein_card {
    transition: all 0.3s ease-in;

    &:hover {
      cursor: pointer;
      transform: scale(1.05);
    }
  }

  .ornstein_bg {
    width: ${theme.cardWidth};
    height: ${theme.cardHeight};
    border-radius: ${theme.cardRadius};
    background-image: ${theme.cardBg};
    position: absolute;
    z-index: -1;
    margin-top: -15px;
  }
`;
