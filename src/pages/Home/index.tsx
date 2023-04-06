import { Container, Header, Image, Main, LeftSideWrapper } from './styles'

import LogoHeader from '@/assets/icons/logo-header.svg'

export function Home() {
  function handleSearchPets() {
    // TO DO
  }

  function handleChangeState() {
    // TO DO
  }

  function handleChangeCity() {
    // TO DO
  }

  return (
    <Container>
      <Header>
        <Image src={LogoHeader} alt="Logo image" />
      </Header>

      <Main>
        <LeftSideWrapper>
          <h1>Leve a felicidade para o seu lar</h1>
          <p>Encontre o animal de estimação ideal para seu estilo de vida!</p>
        </LeftSideWrapper>
      </Main>
    </Container>
  )
}
