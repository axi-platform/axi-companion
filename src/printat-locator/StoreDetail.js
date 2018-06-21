import React from 'react'
import styled from 'react-emotion'

import Button from '../ui/Button'
import Paper from '../ui/Paper'

import {sm} from '../ui/style'

const Heading = styled.h1`
  margin: 0;
  margin-bottom: 0.35em;

  color: #a3b4bb;
  font-weight: 300;
  font-size: 1.5em;
  line-height: 1.8em;
  text-align: right;

  @media (max-width: ${sm}px) {
    text-align: right;
    font-size: 1.18em;
  }
`

const SubHeading = styled.h2`
  margin: 0;
  margin-bottom: 0.35em;

  color: #a3b4bb;
  font-weight: 300;
  font-size: 1.15em;
  line-height: 1.15em;
  text-align: right;
`

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

const StoreStatus = ({store}) => {
  const {id, displayName, presence, queue} = store
  const isOnline = presence === 'online'

  if (!store || !id) {
    return (
      <Heading>
        Please select a <Strong>Print Shop</Strong> to print to.
      </Heading>
    )
  }

  return (
    <div>
      <Heading>
        Printing at <Strong>{displayName}</Strong>.
      </Heading>

      <SubHeading primary={isOnline} />
    </div>
  )
}

const StoreDetail = ({selected, onConfirm}) => {
  const {presence = 'unavailable'} = selected
  const isOnline = presence === 'online'

  return (
    <Container>
      <StoreStatus store={selected} />

      <Button onClick={onConfirm} disabled={!isOnline} primary>
        {isOnline ? 'Proceed' : 'Print Shop is Unavailable.'}
      </Button>
    </Container>
  )
}

export default StoreDetail
