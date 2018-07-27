import { Component } from 'react'
import axios from 'axios'
import styled, { keyframes, injectGlobal } from 'styled-components'
import Loader from '../components/Loader'

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

const Icon = styled.img`
  @media (max-width: 425px) {
    margin: 1.75rem;
    width: 40px;
  }
  @media (min-width: 426px) and (max-width: 767px) {
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

const ImageCaption = BoxContent.extend`
  font-size: 0.75rem;
  margin: 2rem;
  text-align: center;
`

const ProfileImageContainer = ImageContainer.extend`
  img {
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

export default class extends Component {
  state = {
    isLoading: false
  }

  static async getInitialProps() {
    const { data } = await axios.get('https://api.github.com/users/rappad')
    return { data }
  }

  componentDidMount() {
    this.updateLoadingStatus()
  }

  updateLoadingStatus = () => {
    console.log(this.props.data)
    if (this.props.data) {
      this.setState({
        isLoading: false
      })
    }
  }

  render() {
    const { avatar_url, name, location, company, bio } = this.props.data
    const { isLoading } = this.state

    if (isLoading) {
      return <Loader />
    }

    return (
      <Container>
        <Navbar>
          <Icon id="logo" src={'./static/code-solid.svg'} />
        </Navbar>
        <Content>
          <TitleContainer>
            <Title>Hello world</Title>
          </TitleContainer>
          <Box>
            <ProfileImageContainer>
              <img src={avatar_url} alt="Profile image" />
            </ProfileImageContainer>
            <ProfileContent>
              <h2>Who am I</h2>
              <ul>
                <li>
                  <span>{name}</span>
                </li>
                <li>
                  <span>{location}</span>
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima consectetur perspiciatis provident autem tempore veniam, illum ad facere, deserunt consequatur laudantium quo
              sequi quos repudiandae corrupti. Ipsum aliquid, fuga velit eum soluta esse rem architecto laborum suscipit minus nostrum sapiente quas cupiditate voluptas enim voluptates
              omnis, aliquam nulla accusantium laudantium?
            </BoxContent>
          </Box>
          <Box>
            <SubTitle>These days...</SubTitle>
            <BoxContent>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit iure eligendi voluptatum odit corporis quasi voluptas, ipsam doloremque ea eius. Quas, sunt iste. Eaque tempora
              esse impedit illo, perspiciatis officiis.
            </BoxContent>
            <BoxContent>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam soluta numquam ipsam, quos modi nulla aut aliquid quia dolor quis ab deserunt delectus voluptatem nam aspernatur
              neque totam a autem animi facilis odio blanditiis at dignissimos ad. Quasi expedita voluptatem distinctio pariatur ad, ea explicabo velit rerum ab temporibus nesciunt optio
              deserunt aspernatur architecto harum tenetur nam, qui nostrum molestiae consequatur, reprehenderit odio recusandae ipsa! Sapiente iusto nisi consequatur aut, minima quas
              pariatur velit quo. Aperiam hic, corporis eaque excepturi ratione fugiat cumque reprehenderit optio ad nostrum sequi corrupti aliquid in. Beatae officia quia corrupti dolor
              mollitia voluptatibus numquam perspiciatis?
            </BoxContent>
          </Box>
          <Box>
            <QuoteContent>
              <q>{bio}</q>
            </QuoteContent>
          </Box>
          <Box>
            <ImageContainer>
              <img src={'https://picsum.photos/g/500/300?image=1045'} alt="placeholder image" />
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
