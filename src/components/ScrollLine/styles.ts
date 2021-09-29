import styled from 'styled-components';

const theme = {
  yellow: '#cdca69',
  backgroundColor: '#0E1212',
  bgRgb: '14,18,18',
};

export const Container = styled.section`
  .scrollLine {
    position: fixed;
    top: 50vh;
    bottom: 0;
    left: calc(25vw - 10rem);
    z-index: 2;
    width: 1px;
    background: ${theme.yellow}
      linear-gradient(to top, ${theme.backgroundColor} 1rem, rgba(${theme.bgRgb}, 0) 20vh);
  }

  .secondaryScroll {
    position: absolute;
    top: 50vh;
    height: 100vh;
    bottom: 0;
    left: calc(25vw - 10rem);
    z-index: 2;
    width: 1px;
    background: ${theme.yellow};
    opacity: 0.2;
  }

  .scroll-target {
    position: fixed;
    top: calc(50vh - 8px);
    left: calc(25vw - 10rem - 4px);
    width: 9px;
    height: 9px;
    z-index: 2;

    .circle,
    .pulse {
      position: absolute;
      width: 9px;
      height: 9px;
      transform-origin: center;
      border-radius: 3rem;
      background: ${theme.yellow};
      border: 1px solid ${theme.yellow};
    }
  }
`;
