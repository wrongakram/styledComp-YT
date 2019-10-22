import styled, {css} from 'styled-components';
import { colors } from './global.js'

export const Button = styled.a`
height: 48px;
line-height: 48px;
padding: 0 64px;
border-radius: 100px;
font-weight: 600;
color: ${colors.black};
background: ${colors.white};
font-family: 'Avenir';
cursor: pointer;
margin: 0 24px;
font-size: 14px;
text-decoration: none;
${props => props.outline && css`
    background: none;
    border: 1px solid ${colors.black};
  `};
${props => props.primary && css`
    background: ${colors.primary};
`};
${props => props.secondary && css`
    background: ${colors.secondary}; 
`};
`


export const Searchbar = styled.div`
  height: 48px;
  width: 700px;
  position: relative;
  margin: 0 24px;
  input {
    height: 48px;
    padding: 0 64px;
    width: 700px;
    border-radius: ${props => props.squared ? "0px" : "100px"};
    border: none;
    font-size: 14px; 
    position: relative;
    outline: none;
    color: ${colors.black};
    &::placeholder {
      color: ${colors.gray}
    }
  }

  img {
    position: absolute;
    top: 50%;
    left: 24px;
    transform: translateY(-50%);
    z-index: 9;
    width: 16px;
    height: 16px;
  }
`