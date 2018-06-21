import React from 'react'
import styled, {css} from 'react-emotion'
import Ink from 'react-ink'
import {observer} from 'mobx-react'

import Paper from '../ui/Paper'
import {sm} from '../ui/style'

import store from '../printat/store'

const Title = styled.div`
  font-weight: 400;
  font-size: 1.15em;

  margin-bottom: 0.25em;
`

// prettier-ignore
const Card = styled(Paper)`
  position: relative;
  padding: 1.1em 1.5em;
  font-size: 1.15em;
  cursor: pointer;

  &:hover {
    box-shadow: 0 12px 20px -10px rgba(255, 255, 255, 0.28),
      0 4px 20px 0px rgba(0, 0, 0, 0.12),
      0 7px 8px -5px rgba(255, 255, 255, 0.2);
  }

  ${props => props.selected && css`
    color: #ffffff;
    background: #af2cc5;
    box-shadow: 0 12px 20px -10px rgba(156, 39, 176, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(156, 39, 176, 0.2);

    &:hover {
      box-shadow: 0 12px 20px -10px rgba(156, 39, 176, 0.38), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(156, 39, 176, 0.2);
    }
  `}
`

const Container = styled.div`
  position: absolute;
  width: 100%;
  z-index: 1;

  margin: 0 auto;
  margin-top: 1.5em;

  padding: 0 2em;
  max-width: 1000px;
`

const Grid = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;

  > div {
    margin-right: 1.8em;
    margin-bottom: 1.8em;
    width: 100%;
  }

  @media (max-width: ${sm}px) {
    flex-direction: column;
    align-items: flex-start;

    > div {
      margin-right: 0;
    }
  }
`

function distance(meter) {
  if (meter > 1000) {
    return `${(meter / 1000).toFixed(2)} กิโล`
  }

  return `${Math.round(meter)} เมตร`
}

const Nearby = ({data = []}) => (
  <Container>
    <Grid>
      {data.map(shop => (
        <Card
          key={shop.id}
          onClick={() => store.setStore(shop)}
          selected={store.store.name === shop.name}>
          <Title>{shop.displayName}</Title>
          <div>ระยะทาง {distance(shop.distance)}</div>
          <Ink opacity={0.1} />
        </Card>
      ))}
    </Grid>
  </Container>
)

export default observer(Nearby)
