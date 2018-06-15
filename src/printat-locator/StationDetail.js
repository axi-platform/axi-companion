import React from 'react'
import styled from 'react-emotion'

import Button from '../ui/Button'
import Paper from '../ui/Paper'

const Heading = styled.h1`
  margin: 0;
  margin-bottom: 0.5em;

  color: #a3b4bb;
  font-weight: 300;
  font-size: 1.5em;
  line-height: 1.8em;
  text-align: right;
`

const SubHeading = styled.h2``

const Strong = styled.span`
  color: #222;
`

const Container = styled(Paper)`
  align-items: flex-end;

  position: fixed;
  top: 5em;
  right: 1em;

  z-index: 1;
  margin-left: 1em;

  z-index: 2;
  box-shadow: 0 1px 1.5px 1px rgba(0, 0, 0, 0.12);
`

const StationStatus = ({station}) => {
  const {id, name, presence, queue} = station
  const isOnline = presence === 'online'

  if (!station || !id) {
    return (
      <Heading>
        Please select a <Strong>Print Station</Strong> to print to.
      </Heading>
    )
  }

  return (
    <div>
      <Heading>
        Selected <Strong>{name}</Strong> as destination.
      </Heading>

      <SubHeading primary={isOnline}>
        {isOnline && <span>{queue} Queues</span>}

        <span>{presence}</span>
      </SubHeading>
    </div>
  )
}

const StationDetail = ({selected, onConfirm}) => {
  const {presence = 'unavailable'} = selected
  const isOnline = presence === 'online'

  return (
    <Container>
      <StationStatus station={selected} />

      <Button onClick={onConfirm} disabled={!isOnline} primary>
        {isOnline ? 'Proceed' : 'Select an Available Printer'}
      </Button>
    </Container>
  )
}

export default StationDetail
