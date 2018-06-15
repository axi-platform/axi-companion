import React from 'react'
import Ink from 'react-ink'
import styled, {css} from 'react-emotion'

// prettier-ignore
const ButtonContainer = styled.button`
  border: none;
  outline: none;
  user-select: none;
  -webkit-tap-highlight-color: transparent;

  position: relative;
  cursor: pointer;

  font-family: "Roboto", "Kanit", "Segoe UI", "Helvetica Neue", sans-serif;
  font-size: 1em;
  font-weight: 300;
  text-decoration: none;

  width: auto;
  min-width: 6em;
  height: 2.6em;
  padding: 0.6em 1em;

  border-radius: 4px;

  color: #efefef;
  background: #16a8af;

  transition: 1s cubic-bezier(0.22, 0.61, 0.36, 1) all;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);

  &:hover {
    transform: scale(1.03);
  }

  ${props => props.primary && css`
    border: none;
    color: #ffffff;
    background: #353e48;

    &:hover {
      background: #2d2d30;
    }
  `}

  ${props => props.disabled && css`
    color: #a3b4bb;
    background: #efefef;
    box-shadow: none;

    &:hover {
      background: #efefef;
    }
  `}
`

const Button = ({children, ...props}) => (
  <ButtonContainer {...props}>
    {children}
    <Ink />
  </ButtonContainer>
)

export default Button
