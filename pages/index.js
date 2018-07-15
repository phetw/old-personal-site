import styled, { css, injectGlobal } from 'react-emotion'

injectGlobal`
@import url('https://fonts.googleapis.com/css?family=Montserrat:200,700');
  html,body {
    height: 100%;
    width: 100%;
    margin: 0;
    background-color: black;
    font-family: 'Montserrat', sans-serif;
  }
`
const Container = styled('div')`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: black;
`
const Navbar = styled('nav')`
  order: 1;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (min-width: 425px) and (max-width: 1024px) {
    height: 90px;
  }
  @media (min-width: 425px) and (max-width: 1024px) {
    height: 70px;
  }
  @media (min-width: 1024px) {
    height: 60px;
  }
`
const Content = styled('main')`
  order: 2;
  /* This defines the ability for a flex item to grow if necessary. */
  flex-grow: 1;
  /* This defines the ability for a flex item to shrink if necessary. */
  flex-shrink: 1;
  /*The auto keyword means "look at my width or height property */
  flex-basis: auto;
  padding: 2rem 1.5rem 2rem 3rem;
`

const Footer = styled('footer')`
  order: 3;
  flex-shrink: 0;
  text-align: center;
  align-self: flex-end;
  height: 60px;
  width: 100%;
  color: white;
`

const TitleContainer = styled('div')`
  margin: 2rem 1rem;
`

const Title = styled('h1')`
  color: white;
  font-size: 3rem;
  font-weight: 700;
`

const SubTitle = styled('p')`
  color: #c7c7c7;
  width: 95%;
  padding-left: 0.45rem;
  font-size: 1rem;
  font-weight: 200;
`

const HalfCard = styled('div')`
  display: inline-block;
  width: 46.5%;
  height: 400px;
  background-color: #fff;
  margin: 0rem 1%;
`

const Card = styled('div')`
  height: 400px;
  width: 95%;
  background-color: #fff;
  margin: 1rem 1%;
  /* @media (min-width: 425px) and (max-width: 1024px) {
    margin: 1rem auto;
  }
  @media (min-width: 425px) and (max-width: 1024px) {
    margin: 1rem auto;
  }
  @media (min-width: 1024px) {
    margin: 1rem auto;
  } */
`
const CardContent = styled('div')`
  padding: 2rem;
`
const IconClass = css`
  margin: 1.5rem;
  color: #ffffff;
  @media (min-width: 320px) and (max-width: 425px) {
    width: 38px;
  }
  @media (min-width: 426px) and (max-width: 1023px) {
    width: 36px;
  }
  @media (min-width: 1024px) {
    width: 28px;
  }
`

export default () => (
  <Container>
    <Navbar>
      <img src="/static/code-solid.svg" className={IconClass} alt="" />
    </Navbar>
    <Content>
      <TitleContainer>
        <Title>Hello world</Title>
        <SubTitle>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, quos libero sit velit corrupti excepturi dicta quo rerum, consectetur
          aut at neque ut cum harum dolores vel magni reiciendis iste laboriosam labore, nesciunt blanditiis. Animi in, recusandae autem quis at
          delectus mollitia, hic labore maiores sequi aliquam eius iure illum!
        </SubTitle>
      </TitleContainer>
      <Card>
        <CardContent>test</CardContent>
      </Card>
      <HalfCard>
        <CardContent>test</CardContent>
      </HalfCard>
      <HalfCard>
        <CardContent>test</CardContent>
      </HalfCard>
      <Card>
        <CardContent>test</CardContent>
      </Card>
    </Content>
    <Footer>
      <SubTitle>Wasuwat Limsuparhat | 2018</SubTitle>
    </Footer>
  </Container>
)
