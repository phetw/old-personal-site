import styled, { keyframes } from 'styled-components'

const Overlay = styled.div`
  color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
`

const expandWidth = keyframes`
    from { width: 0vw; }
    to   { width: 100vw; }
`

const ring = keyframes`
   0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }`

const ProgressBar = styled.div`
  width: 0vw;
  height: 3px;
  background-color: white;
  position: absolute;
  animation: ${expandWidth} 400ms linear;
`

const Spinner = styled.div`
  float: right;
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 26px;
  height: 26px;
  margin: 1.5rem;
  border: 2px solid #fff;
  border-radius: 50%;
  animation: ${ring} 400ms linear infinite;
  border-color: #fff transparent transparent transparent;
`

export default () => (
  <Overlay>
    <ProgressBar />
    <Spinner />
  </Overlay>
)
