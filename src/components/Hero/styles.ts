import styled from 'styled-components'
import { Container } from '../../../src/styles'

export const Form = styled.form`
  height: 360px;
  width: 100%;
  background-image: ${(props) => props.theme.imagemHero};
  background-size: cover;
  position: relative;
  display: flex;
  align-items: center;

  &:before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.theme.corPrincipal};
    content: '';
    opacity: 0.7;
  }

  @media (max-width: 768px) {
    height: auto;
    padding: 24px 0;
  }
`

export const FormDiv = styled(Container)`
  position: relative;
  color: #eee;
`

export const HeroTitle = styled.h2`
  font-family: Gloock, serif;
  font-size: 48px;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`
