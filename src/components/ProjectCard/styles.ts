import styled from 'styled-components';

// #77411D

const theme = {
  yellow: '#F2C36B',
};

export const Container = styled.div`
  width: 90vw;
  height: 90vh;
  padding-top: 5.5vh;
`;

export const Card = styled.div`
  display: flex;
`;

export const CardFirstContent = styled.div`
  width: 50%;
  height: 70vh;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #000;
  border-top-left-radius: 2.5vw;
  border: 2px solid #333;
  border-bottom-left-radius: 2.5vw;

  .card__first-content__info {
    padding: 6.5vw 7vw 6.7vw 6.9vw;

    h1 {
      font-size: 3.8vw;
      letter-spacing: 0.2rem;
    }

    .card-techs {
      font-size: 1.5vw;
      font-weight: 600;
    }

    .card-description {
      font-size: 1.2vw;
    }

    a {
      text-decoration: none;
      width: 14.5vw;
      height: 5vh;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: ${theme.yellow};
      border-radius: 0.5vw;
      border: 2px solid #000;
      color: #000;
      font-weight: 600;
      letter-spacing: 0.15rem;
      transition: all 0.5s ease;

      &:hover {
        color: #fff;
        background-color: #000;
        border-radius: 1.5vw;
      }
    }

    & > .card-techs {
      margin: 0.5vw 0;
    }

    & > .card-description,
    a {
      margin: 2.5vw 0;
    }
  }
`;

export const RadioSelector = styled.div`
  width: 100%;
  margin-top: 20px;
`;

export const CardSecondContent = styled.div`
  width: 50%;
  height: 70vh;
  background-color: #6094aa;
  border-top-right-radius: 2.5vw;
  border-bottom-right-radius: 2.5vw;
  display: flex;
  justify-content: center;
  flex-direction: column;
  border: 2px solid #333;

  img {
    display: flex;
    width: 35vw;
    height: 50vh;
    margin-left: auto;
  }
`;
