import React, { useEffect } from 'react';
import { AiOutlineDown } from 'react-icons/ai';

import heroIntro from '../../animations/hero';
import { Container, PraiseScroll, TextContent } from './styles';

export const Hero: React.FC = () => {
  useEffect(() => {
    heroIntro();
  }, []);
  return (
    <Container className="hero">
      <TextContent className="hero_container">
        <h2 className="hero_h2">
          Hi stranger 👋, <br /> Me chamo Matheus, um entusiasta no desenvolvimento front
          end!
          <br />
          Atualmente estudante da Trybe! 💚
        </h2>
        <div className="praise_the_sun">
          <h3 id="continue">To continue,</h3>
          <h3 id="please">Please,</h3>
          <h3 id="praise">PRAISE THE SUN</h3>
        </div>
      </TextContent>
      <PraiseScroll className="praise_scroll">
        <h3>SCROLL TO PRAISE</h3>
        <AiOutlineDown size={34} />
      </PraiseScroll>
    </Container>
  );
};
