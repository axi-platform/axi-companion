import React from 'react'
import styled from 'react-emotion'
import {observer} from 'mobx-react'

import Preview from './Preview'

import store from '../printat/store'
import {sm} from '../ui/style'

const Container = styled.div`
  width: 100%;
  margin-bottom: 2em;

  @media (min-width: ${sm}px) {
    padding-left: 1.8em;
  }
`

const Proofing = () => (
  <Container>
    <Preview file={store.selectedFile} />
  </Container>
)

export default observer(Proofing)
