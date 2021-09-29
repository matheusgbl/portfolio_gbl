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
        <p className="hero_text text-xl">
          Hello 👋, <br /> My name is Matheus, i&apos;m an full-stack web developer
          <br />
          and currently a student at Trybe 💚
        </p>
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
