import React from 'react'
import styled from 'react-emotion'
import {keyframes} from 'emotion'

/*
  Pin Colors are defined here.
  TODO: Use color codes to indicate queue activity
*/

export const pinColor = '#00cae9'
export const pinHoverColor = '#3498db'

// Indicate that the device is online and available at the moment.
export const availableColor = '#2ecc71'
export const availableHoverColor = '#27ae60'

// Indicate that the device is most likely at its peak.
// You might experience lots of queue, and waiting time could be long.
export const peakColor = '#e74c3c'
export const peakHoverColor = '#c0392b'

// Indicate that the device is unavailable, due to being offline or in maintenance.
export const unavailableColor = '#9E9E9E'
export const unavailableHoverColor = '#616161'

// Indicate that the device is currently selected
export const selectedColor = '#af2cc5'
export const selectedHoverColor = '#673ab7'

// HotelSuite CI
// export const selectedColor = 'linear-gradient(60deg, #d4145a, #fbb03b)'
// export const selectedHoverColor = 'linear-gradient(5deg, #d4145a, #fbb03b)'
// export const selectedColor = 'linear-gradient(5deg, #662d8c, #ed1e79)'
// export const selectedHoverColor = 'linear-gradient(60deg, #662d8c, #ed1e79)'

const getPinColor = props => {
  if (props.selected) return selectedColor

  if (props.presence === 'offline') return unavailableColor

  return availableColor
}

const getPinHoverColor = props => {
  if (props.selected) return selectedHoverColor

  if (props.presence === 'offline') return unavailableHoverColor

  return availableHoverColor
}

/*
  Custom Map Pin Components
*/

const pulsate = keyframes`
  0% {
    transform: scale(0.1, 0.1);
    opacity: 0;
  }
  50% {
    opacity: 1;
    filter: none;
  }
  100% {
    transform: scale(1.2, 1.2);
    opacity: 0;
  }
`

const bounce = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-2000px) rotate(-45deg);
  }
  60% {
    opacity: 1;
    filter: none;
    transform: translateY(30px) rotate(-45deg);
  }
  80% {
    transform: translateY(-10px) rotate(-45deg);
  }
  100% {
    transform: translateY(0) rotate(-45deg);
  }
`

export const PinItem = styled.div`
  height: 30px;
  transform: rotate(-45deg);
  border-radius: 50% 50% 50% 0;
  background: ${getPinColor};
  animation: ${bounce} 1s ease;
  cursor: pointer;
  margin: -20px 0 0 -20px;

  position: absolute;
  left: 50%;
  top: 50%;
  width: 30px;

  opacity: ${props => (props.presence === 'offline' ? 0.7 : 1)};

  transition: 1s cubic-bezier(0.22, 0.61, 0.36, 1) all;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);

  &::after {
    background: white;
    border-radius: 50%;
    content: '';
    height: 14px;
    margin: 8px 0 0 8px;
    position: absolute;
    width: 14px;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16),
      0 2px 10px 0 rgba(0, 0, 0, 0.12);
  }

  &:hover {
    background: ${getPinHoverColor};
    transform: rotate(-45deg) scale(1.3);
  }
`

export const PinEffect = styled.div`
  background: rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  height: 14px;
  left: 50%;
  margin: 11px 0px 0px -12px;
  position: absolute;
  top: 50%;
  transform: rotateX(55deg);
  width: 14px;
  z-index: -2;

  &::after {
    animation-delay: 1.1s;
    animation: ${pulsate} 1s ease-out infinite;
    border-radius: 50%;
    box-shadow: 0 0 1px 2px ${getPinColor};
    content: '';
    height: 40px;
    margin: -13px 0 0 -13px;
    opacity: 0;
    position: absolute;
    width: 40px;
  }
`

export const CurrentPos = styled(PinEffect)`
  background: none;

  &::after {
    box-shadow: 0 0 1px 2px ${peakColor};
  }
`

// Adjust marker position to align with the polyline
const PinContainer = styled.div`
  transform: translate(5px, -18px);
  z-index: 1;
`

const Pin = ({onClick, ...props}) => (
  <PinContainer onClick={onClick}>
    <PinItem {...props} />
    {props.presence === 'online' && <PinEffect {...props} />}
  </PinContainer>
)

export default Pin
