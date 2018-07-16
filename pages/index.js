import styled, { css, keyframes, injectGlobal } from 'react-emotion'

injectGlobal`
@import url('https://fonts.googleapis.com/css?family=Montserrat:300,500,700');
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
  height: 110px;
  @media (min-width: 320px) and (max-width: 767px) {
    height: 130px;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    height: 110px;
  }
  @media (min-width: 1025px) {
    height: 90px;
  }
`
const Content = styled('main')`
  order: 2;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: auto;
  padding: 0rem 1.5rem 2rem 3rem;
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

const FooterText = styled('p')`
  color: #c7c7c7;
  padding: 2rem;
  text-align: center;
  font-weight: 300;
  font-size: 2rem;
  @media (max-width: 767px) {
    font-size: 26px;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 20px;
  }
  @media (min-width: 1025px) {
    font-size: 20px;
  }
`

const TitleContainer = styled('div')`
  margin: 2.75rem 1rem;
`
const bounce = keyframes`
  from, 20%, 53%, 80%, to {
    transform: translate3d(0,0,0);
  }

  40%, 43% {
    transform: translate3d(0, -15px, 0);
  }

  70% {
    transform: translate3d(0, -7px, 0);
  }

  90% {
    transform: translate3d(0,-2px,0);
  }
`

const Title = styled('h1')`
  color: white;
  font-size: 5rem;
  font-weight: 700;
  animation: ${bounce} 1s ease;
  transform-origin: center bottom;
  @media (max-width: 767px) {
    font-size: 6.5rem;
    color: red;
  }
`

const SubTitle = styled('p')`
  color: #c7c7c7;
  width: 95%;
  padding-left: 0.5rem;
  font-size: 140%;
  font-weight: 300;
`

const HalfCard = styled('div')`
  margin: 1.5rem 1%;
  height: 600px;
  width: 95%;
  @media (min-width: 1024px) {
    display: inline-block;
    margin: 0 1%;
    height: 400px;
    width: 46.5%;
  }
`

const Card = styled('div')`
  width: 95%;
  background-color: black;
  margin: 1rem 1%;
  margin: 1.5rem 1%;
  height: 600px;
  @media (min-width: 1024px) {
    margin: 1rem 1%;
    height: 400px;
  }
`

const Image = styled('img')`
  width: 100%;
  height: 100%;
`

const IconClass = css`
  margin: 2.5rem;
  width: 60px;
  @media (max-width: 787px) {
    margin: 2.35rem;
    width: 70px;
  }
`

export default () => (
  <Container>
    <Navbar>
      <img src="./static/code-solid.svg" className={IconClass} alt="" />
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
        <Image src={'https://picsum.photos/g/600/400?image=1045'} />
      </Card>
      <HalfCard>
        <Image src={'https://picsum.photos/g/600/500?image=972'} />
      </HalfCard>
      <HalfCard>
        <Image src={'https://picsum.photos/g/600/500?image=965'} />
      </HalfCard>
      <Card>
        <Image src={'https://picsum.photos/g/600/500?image=1033'} />
      </Card>
    </Content>
    <Footer>
      <FooterText>Wasuwat Limsuparhat | 2018</FooterText>
    </Footer>
  </Container>
)
