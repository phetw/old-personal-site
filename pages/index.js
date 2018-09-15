import { Component } from 'react'
import axios from 'axios'
import styled, { keyframes, injectGlobal } from 'styled-components'

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

const expandWidth = keyframes`
    from { width: 0vw; }
    to   { width: 100vw; }
`
const ProgressBar = styled.div`
  width: 0vw;
  height: 3px;
  background-color: white;
  position: absolute;
  animation: ${expandWidth} 400ms ease-in;
`

const Container = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: black;
`
const Content = styled.main`
  order: 2;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: auto;
  padding: 2rem;
  @media (min-width: 320px) and (max-width: 425px) {
    padding: 0 1.5rem;
  }
  @media (min-width: 426px) and (max-width: 600px) {
    padding: 0 12%;
  }
  @media (min-width: 600px) and (max-width: 767px) {
    padding: 0 15%;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    padding: 0 18%;
  }
  @media (min-width: 1025px) {
    padding: 0 25%;
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
  @media (max-width: 425px) {
    padding: 0.5rem;
  }
  @media (min-width: 426px) {
    padding: 0.25rem;
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
  @media (min-width: 376px) {
    font-size: 3rem;
  }
`

const SubTitle = styled.p`
  color: #c7c7c7;
  width: 95%;
  padding: 0.25rem 1.5rem;
  font-weight: 400;
  font-size: 1.25rem;
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
    filter: grayscale();
    width: 100%;
    height: 100%;
  }
`

const BoxContent = styled.div`
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

const ProfileImageContainer = ImageContainer.extend`
  img {
    filter: none;
    width: 100%;
    border-radius: 50%;
  }
  @media (max-width: 525px) {
    width: 75%;
    margin: 2rem auto;
    img {
      margin: 0 auto;
    }
  }
  @media (min-width: 526px) {
    width: 30%;
    display: inline-block;
  }
`

const ProfileContent = BoxContent.extend`
  margin-left: 2.5rem;
  @media (max-width: 525px) {
    margin-left: 1.5rem;
    ul li {
      margin: 1rem 0;
      list-style-type: circle;
    }
    ul li span {
      color: #c7c7c7;
      font-weight: 100;
    }
  }

  @media (min-width: 526px) {
    margin: 1rem;
    width: 50%;
    display: inline-block;
    ul li {
      margin: 1rem 0;
      list-style-type: circle;
    }
    ul li span {
      color: #c7c7c7;
      font-weight: 100;
    }
  }
`

const Socials = styled.section`
  display: flex;
  justify-content: center;
`

const Button = styled.button`
  cursor: pointer;
  background-color: black;
  margin: 0 0.5rem;
  margin-top: 1rem;
  padding: 0.65rem 1.2rem;
  font-size: 0.75rem;
  font-weight: 200;
  font-family: 'Roboto Mono', sans-serif;
  box-shadow: 2px 3px 0px #ececec;
  a {
    text-decoration: none;
    color: white;
  }
`
export default class extends Component {
  static async getInitialProps() {
    const { data } = await axios.get('https://api.github.com/users/rappad')
    return { data }
  }

  render() {
    const { avatar_url = 'https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png', name = 'Wasuwat Limsuparhat', location = 'Thailand', company = '', bio = '' } = this.props.data

    return (
      <Container>
        <ProgressBar />
        <Content>
          <TitleContainer>
            <Title>Hello world</Title>
          </TitleContainer>
          <Box>
            <ProfileImageContainer profile={true}>
              <img src={avatar_url} alt="Profile image" />
            </ProfileImageContainer>
            <ProfileContent>
              <SubTitle>Who am I</SubTitle>
              <ul>
                <li>
                  <span>{name}</span>
                </li>
                <li>
                  <span>Live :{location}</span>
                </li>
                <li>
                  <span>Fluent English and Thai</span>
                </li>
                <li>
                  <span>Hired : {company}</span>
                </li>
              </ul>
            </ProfileContent>
          </Box>
          <Box>
            <SubTitle>What I do</SubTitle>
            <BoxContent>
              I currently work as a software developer at Nextzy Technologies where I had done my internship at since January of 2018. I am currently wandering in Javascript world especially with
              React.js. But nervertheless, I frequently get to work with Angular and a lot of Node.js. I also have a strong belief and interests in blockchain technology and cryptocurrencies.
            </BoxContent>
          </Box>
          <Box>
            <QuoteContent>
              <q>{bio}</q>
            </QuoteContent>
          </Box>
          <Socials>
            <Button>
              <a href="https://medium.com/@phet.w" target="_blank">
                Medium
              </a>
            </Button>
            <Button>
              <a href="https://github.com/rappad" target="_blank">
                Github
              </a>
            </Button>
          </Socials>
        </Content>
        <Footer>
          <FooterText>© Wasuwat Limsuparhat | 2018</FooterText>
        </Footer>
      </Container>
    )
  }
}
