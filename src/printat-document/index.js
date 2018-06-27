import React from 'react'
import styled from 'react-emotion'
import {observer} from 'mobx-react'

import File from './File'
import Proofing from './Proofing'
import Uploader from './Uploader'

import {sm} from '../ui/style'
import store from '../printat/store'

const List = styled.div`
  width: 100%;
`

const Container = styled.div`
  margin: 0 auto;
  padding: 2em 1em;
  max-width: 1000px;
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 80vh;

  @media (max-width: ${sm}px) {
    flex-direction: column;
  }
`

const Documents = () => (
  <Container>
    <Row>
      <List>
        <Uploader />

        {store.files.map((file, i) => <File key={i} i={i} data={file} />)}
      </List>
      <Proofing />
    </Row>
  </Container>
)

export default observer(Documents)
