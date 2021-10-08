import React from 'react';
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineFundProjectionScreen,
  AiOutlinePhone,
  AiOutlineUser,
} from 'react-icons/ai';

import { Container } from './styles';

export const Header: React.FC = () => (
  <Container>
    <div className="bg-header">
      <div className="bg-default" />
    </div>
    <span>GBL</span>
    <nav>
      <p>
        <AiOutlineFundProjectionScreen /> projects
      </p>
      <p>
        <AiOutlineUser /> about
      </p>
      <p>
        <AiOutlinePhone /> contact
      </p>
      <div className="social">
        <a href="https://github.com/matheusgbl" target="_blank" rel="noreferrer">
          <AiFillGithub size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/matheusgbl/"
          target="_blank"
          rel="noreferrer">
          <AiFillLinkedin size={24} />
        </a>
      </div>
    </nav>
  </Container>
);
