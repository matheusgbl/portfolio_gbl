import styled from 'styled-components';

const theme = {
  yellow: '#F2C36B',
};

export const Container = styled.section`
  width: 85vw;
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
    padding: 6.5vw 5vw 6.7vw 4.9vw;

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
      text-align: center;

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
  border-top-right-radius: 2.5vw;
  border-bottom-right-radius: 2.5vw;
  display: flex;
  justify-content: center;
  flex-direction: column;
  border: 2px solid #333;
  position: relative;

  .project-image-info {
    display: flex;
    margin-left: auto;
    width: 39.8vw;
    height: 100%;
  }
  .project-image-Web {
    display: flex;
    margin-left: auto;
    width: 39.75vw;
    height: 100%;
  }

  .project-image-Region {
    position: absolute;
    inset: 0px;
    box-sizing: border-box;
    padding: 0px;
    border: none;
    margin: auto;
    display: block;
    width: 0px;
    height: 0px;
    min-width: 90%;
    max-width: 90%;
    min-height: 100%;
    max-height: 100%;
    object-fit: cover;
  }

  .project-image-Login {
    display: flex;
    margin-left: auto;
    height: 100%;
  }

  .project-image-user.dashboard,
  .project-image-barber.dashboard {
    display: flex;
    margin: auto;
    height: 100%;
  }

  .project-image-home {
    width: 41vw;
    display: flex;
    margin-left: auto;
    height: 100%;
  }

  .project-image-cart {
    width: 40vw;
    display: flex;
    margin: auto;
    height: 100%;
  }

  .project-image-order {
    display: flex;
    margin: auto;
    height: 100%;
  }
`;
