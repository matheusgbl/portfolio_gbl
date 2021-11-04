import React from 'react';

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
        <HomeProjects />
      </Content>
    </Container>
  );
};
