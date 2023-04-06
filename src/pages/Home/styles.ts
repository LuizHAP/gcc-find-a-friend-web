import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: space-between;

  background-color: #f15156;

  padding: 6rem;
`

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const Image = styled.img`
  width: 12rem;
`

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const LeftSideWrapper = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 30vw;

  h1 {
    font-size: 4rem;
    color: #fff;
    font-weight: 800;
  }
`
