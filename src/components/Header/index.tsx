import React from 'react';
import {
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
    <span>.GBL</span>
    <nav>
      <p>
        <AiOutlineFundProjectionScreen /> projetos
      </p>
      <p>
        <AiOutlineUser /> sobre
      </p>
      <p>
        <AiOutlinePhone /> contato
      </p>
    </nav>
  </Container>
);
