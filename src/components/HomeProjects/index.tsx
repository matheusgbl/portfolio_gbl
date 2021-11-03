import React, { useEffect } from 'react';

import projectsAnimation from '../../animations/projects';
import barberDashboard from '../../assets/barberDashboard.png';
import cards from '../../assets/cards.svg';
import undefConfirmation from '../../assets/cartConfirm.png';
import undefCart from '../../assets/cartProducts.png';
import gobarberlogin from '../../assets/gobarberlogin.png';
import pokedexMainPage from '../../assets/pokedexMainPage.png';
import pokeInfo from '../../assets/pokeInfo.png';
import undefShop from '../../assets/undef_shop.png';
import userDashboard from '../../assets/userDashboard.png';
import { ProjectCard } from '../ProjectCard';
import { Container, FirstCard, ProjectsCard, SecondCard, ThirdCard } from './styles';

export const HomeProjects: React.FC = () => {
  useEffect(() => {
    projectsAnimation();
  }, []);
  return (
    <Container className="home-projects">
      <h2 className="home-projects-text">favorite projects</h2>
      <ProjectsCard className="home-projects-cards">
        <FirstCard className="card-1">
          <ProjectCard
            title="POKÉDEX"
            techs={['Typescript, ', 'React, ', 'NextJS.']}
            description="Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of type
              and scrambled it to make a type specimen book."
            link="https://github.com/matheusgbl/pokedex"
            label1="Web app"
            label2="info card"
            label3="Region filter"
            img1={pokedexMainPage}
            img2={pokeInfo}
            img3={cards}
          />
        </FirstCard>
        <SecondCard className="card-2">
          <ProjectCard
            title="GOBARBER"
            techs={['Typescript, ', 'React, ', 'NodeJS, ', 'React Native.']}
            description="Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of type
              and scrambled it to make a type specimen book."
            link="https://github.com/matheusgbl/gobarber"
            label1="Login screen"
            label2="user dashboard"
            label3="barber dashboard"
            img1={gobarberlogin}
            img2={userDashboard}
            img3={barberDashboard}
          />
        </SecondCard>
        <ThirdCard className="card-3">
          <ProjectCard
            title="UNDEF. SHOP"
            techs={['Javascript, ', 'React.']}
            description="Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of type
              and scrambled it to make a type specimen book."
            link="https://github.com/matheusgbl/trybe_projects/tree/master/online_store"
            label1="home page"
            label2="cart"
            label3="order confirmation"
            img1={undefShop}
            img2={undefCart}
            img3={undefConfirmation}
          />
        </ThirdCard>
      </ProjectsCard>
    </Container>
  );
};
