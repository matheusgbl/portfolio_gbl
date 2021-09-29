import React from 'react';

import { AboutText, Container } from './styles';

export const About: React.FC = () => {
  return (
    <Container className="about">
      <h2>about</h2>
      <AboutText className="leading-loose text-xl">
        <p>
          Currently more dedicated to front end development, but always searching and
          practicing my skills in backend too!
          <br />
          On Front End i currently work with React and React Native for mobile, using
          Typescript/Javascript, and now learning about NextJS!
          <br />
          For Back End i use NodeJS, MySQL, Postgres, MongoDB and Docker.
        </p>
      </AboutText>
    </Container>
  );
};
