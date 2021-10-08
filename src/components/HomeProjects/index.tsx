import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';

import gobarber from '../../assets/gobarberLogo.png';
import gobarberPrint from '../../assets/gobarberPrint.png';
import pokedex from '../../assets/pokedex.png';
import pokedexPrint from '../../assets/pokedexPrint.png';
import undefinedShop from '../../assets/undefinedShop.png';
import { Container, FirstCard, ProjectsCard, SecondCard, ThirdCard } from './styles';

export const HomeProjects: React.FC = () => {
  return (
    <Container className="home-projects">
      <h2>Favorite Projects</h2>
      <ProjectsCard className="home-projects-cards flex m-4">
        <FirstCard>
          <div>
            <img className="pokedex_logo" src={pokedex} alt="pokedex logo" />
          </div>
          <a
            href="https://github.com/matheusgbl/pokedex"
            target="_blank"
            rel="noreferrer">
            <img src={pokedexPrint} alt="pokedex app" />
          </a>
        </FirstCard>
        <SecondCard>
          <div>
            <img className="gobarber_logo" src={gobarber} alt="gobarber logo" />
          </div>
          <a
            href="https://github.com/matheusgbl/gobarber"
            target="_blank"
            rel="noreferrer">
            <img src={gobarberPrint} alt="gobarber app" />
          </a>
        </SecondCard>
        <ThirdCard>
          <div>
            <AiOutlineShoppingCart size={24} />
            <span>Undefined Shop</span>
            <AiOutlineShoppingCart size={24} />
          </div>
          <a
            href="https://github.com/matheusgbl/trybe_projects"
            target="_blank"
            rel="noreferrer">
            <img src={undefinedShop} alt="gobarber app" />
          </a>
        </ThirdCard>
      </ProjectsCard>
    </Container>
  );
};
