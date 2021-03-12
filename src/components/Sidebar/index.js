import React from 'react';
import {
  Container,
  FilterButton,
  TextButton,
  ContainerGenres,
  ToogleButton,
  TextTitle,
} from './styles';
const Sidebar = () => {
  return (
    <Container>
      <TextTitle>Generos</TextTitle>
      <ContainerGenres>
        <ToogleButton>
          <TextButton>Todos</TextButton>
        </ToogleButton>
        <ToogleButton>
          <TextButton>Aventura</TextButton>
        </ToogleButton>
        <ToogleButton>
          <TextButton>Suspense</TextButton>
        </ToogleButton>
        <ToogleButton>
          <TextButton>Aventura</TextButton>
        </ToogleButton>
      </ContainerGenres>
    </Container>
  );
};

export default Sidebar;
