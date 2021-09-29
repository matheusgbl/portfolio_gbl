import React, { useEffect } from 'react';

import scrollLine from '../../animations/scrollLine';
import { Container } from './styles';

export const ScrollLine: React.FC = () => {
  useEffect(() => {
    scrollLine();
  }, []);

  return (
    <Container>
      <div className="secondaryScroll" />
      <div className="scrollLine" />
      <div className="scroll-target">
        <div className="circle" />
        <div className="pulse" />
      </div>
    </Container>
  );
};
