import React from 'react';

import { Header } from '../../components/Header';
import { Hero } from '../../components/Hero';
import { HomeProjects } from '../../components/HomeProjects';
import { ScrollLine } from '../../components/ScrollLine';
import { Container, Content } from './styles';

export const HomePage: React.FC = () => {
  return (
    <Container>
      <Header />
      <Content>
        <ScrollLine />
        <Hero />
        <HomeProjects />
      </Content>
    </Container>
  );
};
