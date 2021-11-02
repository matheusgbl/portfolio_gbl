import React from 'react';

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
  return (
    <Container>
      <h2>favorite projects</h2>
      <ProjectsCard>
        <FirstCard>
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
        <SecondCard>
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
        <ThirdCard>
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
