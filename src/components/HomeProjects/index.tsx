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
import { InverseProjectCard } from '../InverseProjectCard';
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
            description="Pokedex application, build with Typescript and NextJS,
            using the PokeAPI and some material design components."
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
          <InverseProjectCard
            title="GOBARBER"
            techs={['Typescript, ', 'React, ', 'NodeJS, ', 'React Native.']}
            description="Fullstack application, built during the Rocketseat bootcamp.
            This application is made for barbers and users who want to schedule services
            related to barber shop."
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
            description="Market application, build using the API from Mercado Livre.
            One of the projects carried out during the course at Trybe. This application was
            built in group, and we use the agile methodologies like Scrum and Kanban."
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
