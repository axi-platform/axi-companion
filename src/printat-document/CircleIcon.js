import React from 'react'
import styled from 'react-emotion'

import Icon from '../ui/Icon'

const Circle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  background: rgb(${props => props.color});
  border-radius: 50%;

  width: 45px;
  height: 45px;

  min-width: 45px;
  min-height: 45px;

  margin-right: 1em;
  transition: all 0.5s cubic-bezier(0.22, 0.61, 0.36, 1);
  box-shadow: rgba(${props => props.color}, 0.35) 0px 0px 15px;
`

const CircleIcon = ({icon, color = '0, 150, 136'}) => (
  <Circle color={color}>
    <Icon i={icon} />
  </Circle>
)

export default CircleIcon
