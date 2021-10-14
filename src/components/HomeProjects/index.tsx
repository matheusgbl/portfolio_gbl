import React from 'react';

import artorias from '../../assets/artorias.png';
import pokedexMockup from '../../assets/pokedexMockup.png';
import solaire from '../../assets/solaire.png';
import { ProjectCard } from '../ProjectCard';
import { Container, FirstCard, ProjectsCard, SecondCard, ThirdCard } from './styles';

export const HomeProjects: React.FC = () => {
  return (
    <Container className="home-projects">
      <h2>favorite projects</h2>
      <ProjectsCard className="home-projects-cards">
        <FirstCard>
          <ProjectCard
            title="POKÉDEX"
            techs={['React, ', 'Typescript, ', 'NextJS.']}
            description="Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of type
              and scrambled it to make a type specimen book."
            link="https://github.com/matheusgbl/pokedex"
            label1="Web application"
            label2="Pokémon info card"
            label3="Regions filter"
            img1={pokedexMockup}
            img2={artorias}
            img3={solaire}
          />
        </FirstCard>
        {/* <SecondCard>
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
        </ThirdCard> */}
      </ProjectsCard>
    </Container>
  );
};
