import React from 'react'
import styled, {css} from 'react-emotion'
import Ink from 'react-ink'
import {observer} from 'mobx-react'

import Paper from '../ui/Paper'
import {sm} from '../ui/style'

import haversine from '../utils/haversine'
import store from '../printat/store'

const Title = styled.div`
  font-weight: 400;
  font-size: 1.15em;

  margin-bottom: 0.25em;
`

// prettier-ignore
const Card = styled(Paper)`
  color: #555;
  position: relative;
  cursor: pointer;

  min-width: 16em;
  max-width: 20em;

  user-select: none;

  padding: 1em 1.2em;
  font-size: 1.05em;

  box-shadow: 0 12px 20px -10px rgba(255, 255, 255, 0.38),
    0 4px 20px 0px rgba(0, 0, 0, 0.12),
    0 7px 8px -5px rgba(255, 255, 255, 0.2);

  transition: all 0.5s cubic-bezier(0.22, 0.61, 0.36, 1);
  -webkit-tap-highlight-color: transparent;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.22) 0px 1px 6px, rgba(0, 0, 0, 0.22) 0px 1px 4px;
  }

  @media (max-width: ${sm}px) {
    max-width: none;
  }

  ${props => props.selected && css`
    font-size: 1.15em;
    padding: 1.1em 1.5em;

    color: #ffffff;
    background-color: #af2cc5;

    box-shadow: 0 12px 20px -10px rgba(156, 39, 176, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(156, 39, 176, 0.2);

    &:hover {
      box-shadow: 0 12px 20px -10px rgba(156, 39, 176, 0.48), 0 4px 20px 0px rgba(0, 0, 0, 0.22), 0 7px 8px -5px rgba(156, 39, 176, 0.4);
    }
  `}
`

// HotelSuite CI
// background-image: linear-gradient(45deg, #662d8c, #ed1e79);
// background-color: #f55a4e;
// background-image: linear-gradient(45deg, #d4145a, #fbb03b);
// box-shadow: 0 12px 20px -10px rgba(244, 67, 54, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(244, 67, 54, 0.2);
// box-shadow: 0 12px 20px -10px rgba(244, 67, 54, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(244, 67, 54, 0.2);

const Container = styled.div`
  position: absolute;
  z-index: 1;
  width: 100%;

  margin: 0 auto;
  margin-top: 1.5em;
  padding: 0 1em;

  overflow: scroll;

  @media (max-width: ${sm}px) {
    max-height: 21em;
  }
`

const Grid = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;

  > div {
    margin-left: 0.9em;
    margin-right: 0.9em;
    margin-bottom: 1.8em;
    width: 100%;
  }

  @media (max-width: ${sm}px) {
    flex-direction: column;
    align-items: flex-start;

    > div {
      margin-left: 0;
      margin-right: 0;
    }
  }
`

function getDistanceLabel(meter) {
  if (meter > 1000) {
    return (
      <span>
        <b>{(meter / 1000).toFixed(2)}</b> กม.
      </span>
    )
  }

  return (
    <span>
      <b>{Math.round(meter)}</b> เมตร
    </span>
  )
}

const withDistance = coordinate => shop => ({
  ...shop,
  distance: haversine(coordinate, shop),
})

const sortByDistance = (x, y) => x.distance - y.distance

const Nearby = ({data = []}) => {
  const [latitude, longitude] = store.position

  const shops = data
    .filter(shop => shop.presence === 'online')
    .map(withDistance({latitude, longitude}))
    .sort(sortByDistance)

  return (
    <Container>
      <Grid>
        {shops.map(shop => (
          <Card
            key={shop.id}
            onClick={() => store.setStore(shop)}
            selected={store.store.name === shop.name}>
            <Title>{shop.displayName}</Title>
            <div>
              ระยะทาง {getDistanceLabel(shop.distance)} เหลือ {shop.queue} คิว
            </div>
            <Ink opacity={0.1} />
          </Card>
        ))}
      </Grid>
    </Container>
  )
}

export default observer(Nearby)
