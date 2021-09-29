import React from 'react';

import { Header } from '../../components/Header';
import { Hero } from '../../components/Hero';
import { Container } from './styles';

export const HomePage: React.FC = () => {
  return (
    <Container>
      <Header />
      <Hero />
    </Container>
  );
};
