import React from 'react';

// import { Character } from '../../components/Character';
import { Header } from '../../components/Header';
import { Hero } from '../../components/Hero';
import { HomeProjects } from '../../components/HomeProjects';
import { Container, Content } from './styles';

export const HomePage: React.FC = () => {
  return (
    <Container>
      <Header />
      <Content>
        <Hero />
        {/* <Character /> */}
        <HomeProjects />
      </Content>
    </Container>
  );
};
