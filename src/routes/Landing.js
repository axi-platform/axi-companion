import React from 'react'
import {inject, observer} from 'mobx-react'
import styled from 'react-emotion'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  min-height: 100vh;
`

const Heading = styled.h1`
  color: #666;
  font-weight: 300;
`

const Landing = ({app}) => (
  <Container>
    <Heading>Message: {app.message}</Heading>
    <button onClick={app.fetchMessage}>Fetch Message...</button>
  </Container>
)

export default inject('app')(observer(Landing))
