import React from 'react';
import { RiSwordLine } from 'react-icons/ri';

import artorias from '../../assets/artorias.png';
import ornstein from '../../assets/ornstein.png';
import solaire from '../../assets/solaire.png';
import { Container, Warrior1Card, Warrior2Card, Warrior3Card, Warriors } from './styles';

export const Character: React.FC = () => {
  return (
    <Container>
      <h2>
        {' '}
        <RiSwordLine /> Choose your warrior <RiSwordLine />
      </h2>
      <Warriors>
        <Warrior1Card>
          <div className="warrior_name">
            <h3>Solaire</h3>
          </div>
          <div className="solaire_card">
            <div className="solaire_bg" />
            <img src={solaire} alt="Solaire warrior" />
          </div>
        </Warrior1Card>
        <Warrior2Card>
          <div className="warrior_name">
            <h3>Artorias</h3>
          </div>
          <div className="artorias_card">
            <div className="artorias_bg" />
            <img src={artorias} alt="Artorias warrior" />
          </div>
        </Warrior2Card>
        <Warrior3Card>
          <div className="warrior_name">
            <h3>Ornstein</h3>
          </div>
          <div className="ornstein_card">
            <div className="ornstein_bg" />
            <img src={ornstein} alt="Ornstein warrior" />
          </div>
        </Warrior3Card>
      </Warriors>
    </Container>
  );
};
