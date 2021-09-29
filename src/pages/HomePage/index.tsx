import React from 'react';

import { About } from '../../components/About';
import { Header } from '../../components/Header';
import { Hero } from '../../components/Hero';
import { ScrollLine } from '../../components/ScrollLine';
import { Container, Content } from './styles';

export const HomePage: React.FC = () => {
  return (
    <Container>
      <Header />
      <Content>
        <ScrollLine />
        <Hero />
        <About />
      </Content>
    </Container>
  );
};
