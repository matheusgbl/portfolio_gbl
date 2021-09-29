import React from 'react';

import loading from '../../assets/loading.gif';
import { Container } from './styles';

export const Loading: React.FC = () => {
  return (
    <Container>
      <img src={loading} alt="loading" />
    </Container>
  );
};
