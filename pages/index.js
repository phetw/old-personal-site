import { Component } from 'react'
import axios from 'axios'
import styled, { css, keyframes, injectGlobal } from 'styled-components'

injectGlobal`
  html,body {
    height: 100%;
    width: 100%;
    margin: 0;
    color:#c7c7c7;
    background-color: black;
    font-family: 'Roboto Mono', sans-serif;
  }
`
const Container = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: black;
`
const Navbar = styled.nav`
  order: 1;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 110px;
  @media (min-width: 320px) and (max-width: 767px) {
    height: 110px;
  }
  @media (min-width: 768px) {
    height: 135px;
  }
`
const Content = styled.main`
  order: 2;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: auto;
  /* padding: 0rem 1.5rem 2rem 3rem; */
  padding: 2rem;
  @media (min-width: 320px) and (max-width: 425px) {
    padding: 0 1rem;
  }
  @media (min-width: 426px) and (max-width: 767px) {
    padding: 0 2.5rem;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    padding: 0 5rem;
  }
  @media (min-width: 1025px) {
    padding: 0 15%;
  }
`

const Footer = styled.footer`
  order: 3;
  flex-shrink: 0;
  text-align: center;
  align-self: flex-end;
  height: 60px;
  width: 100%;
  color: white;
`

const FooterText = styled.p`
  color: #c7c7c7;
  padding: 2rem;
  text-align: center;
  font-size: 1rem;
  font-weight: 100;
`

const TitleContainer = styled.div`
  /* margin: 2.5rem 1rem; */
  /* @media (min-width: 425px) {
    padding: 0.5rem;
    margin: 1rem;
  } */
  @media (max-width: 425px) {
    padding: 0.75rem;
  }
  @media (min-width: 426px) {
    padding: 1rem;
  }
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

const Title = styled.h1`
  color: white;
  font-weight: 400;
  animation: ${bounce} 1s ease;
  transform-origin: center bottom;
  @media (max-width: 375px) {
    font-size: 2.45rem;
  }
  @media (min-width: 376px) and (max-width: 767px) {
    font-size: 3rem;
  }
  @media (min-width: 768px) {
    font-size: 4rem;
  }
`

const SubTitle = styled.p`
  color: #c7c7c7;
  width: 95%;
  padding-left: 0.5rem;
  font-weight: 100;
  @media (max-width: 375px) {
    font-size: 1rem;
  }
  @media (min-width: 376px) and (max-width: 767px) {
    font-size: 1.1rem;
  }
  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
`

const Icon = styled.img`
  @media (max-width: 767px) {
    margin: 2.5rem;
    width: 40px;
  }
  @media (min-width: 768px) {
    margin: 3rem;
    width: 50px;
  }
`

const Box = styled.div`
  width: 100%;
  margin: 1rem 0;
  border: 1px solid white;
  background-color: black;
`

const ImageContainer = styled.div`
  @media (max-width: 767px) {
    margin: 1rem;
  }
  @media (min-width: 768px) {
    margin: 2rem;
  }
  img {
    width: 100%;
    height: 100%;
  }
`

const BoxContent = styled.p`
  color: #c7c7c7;
  margin: 2.35rem;
  font-size: 0.95rem;
  font-weight: 100;
  word-wrap: normal;
  @media (max-width: 426px) {
    margin: 1.5rem;
    line-height: 1.65rem;
  }
`

const QuoteContent = BoxContent.extend`
  text-align: center;
  q {
    font-style: italic;
  }
`

const ImageCaption = BoxContent.extend`
  font-size: 0.75rem;
  margin: 2rem;
  text-align: center;
`

const ProfileImage = ImageContainer.extend`
  @media (min-width: 426px) and (max-width: 767px) {
    margin: 2rem;
  }
  @media (min-width: 768px) {
    width: 40%;
    display: inline-block;
    img {
    }
  }
`

const ProfileContent = BoxContent.extend`
  margin-left: 2.5rem;
  @media (max-width: 425px) {
    margin-left: 1.5rem;
  }
  ul li {
    margin: 1rem 0;
    list-style-type: circle;
  }
  ul li span {
    color: #c7c7c7;
  }
  @media (min-width: 768px) {
    margin: auto 0;
    width: 50%;
    display: inline-block;
  }
`

export default class extends Component {
  static async getInitialProps() {
    const { data } = await axios.get('https://api.github.com/users/rappad')
    return { data }
  }

  render() {
    const { avatar_url, name, location, company, bio } = this.props.data
    return (
      <Container>
        <Navbar>
          <Icon src={'./static/code-solid.svg'} />
        </Navbar>
        <Content>
          <TitleContainer>
            <Title>Hello world</Title>
            <SubTitle>This is a sample SSR website made by Next.js and styled-components.</SubTitle>
          </TitleContainer>
          <Box>
            <ProfileImage>
              <img src={avatar_url} alt="Profile image" />
            </ProfileImage>
            <ProfileContent>
              <ul>
                <li>
                  <span>{name}</span>
                </li>
                <li>
                  <span>Location : {location}</span>
                </li>
                <li>
                  <span>Fluent English and Thai</span>
                </li>
                <li>
                  <span>Hired at : {company}</span>
                </li>
              </ul>
            </ProfileContent>
          </Box>
          <Box>
            <QuoteContent>
              <q>{bio}</q>
            </QuoteContent>
          </Box>
          <Box>
            <BoxContent>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab corporis earum, illo id ut quos consequatur impedit atque ipsa delectus aliquid recusandae magni, doloremque, cum
              asperiores culpa maiores fuga dolores! Dolorem consequuntur cupiditate est cumque, molestiae cum ipsum odit aspernatur ratione, unde quo aperiam? Obcaecati necessitatibus
              expedita assumenda exercitationem ipsum quo ratione illum recusandae veritatis nemo voluptatem dolore tempore officiis nulla aliquam debitis corrupti id iure consequuntur, odit
              delectus?
            </BoxContent>
          </Box>
          <Box>
            <ImageContainer>
              <img src={'https://picsum.photos/g/500/300?image=1045'} alt="demo img" />
            </ImageContainer>
            <ImageCaption>This is image caption.</ImageCaption>
          </Box>
        </Content>
        <Footer>
          <FooterText>Wasuwat Limsuparhat | 2018</FooterText>
        </Footer>
      </Container>
    )
  }
}
