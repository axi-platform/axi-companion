import React from 'react'
import styled from 'react-emotion'
import {observer} from 'mobx-react'

import File from './File'
import FilePane from './FilePane'
import Uploader from './Uploader'

import Button from '../ui/Button'

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

const Heading = styled.h1``

const Documents = () => {
  if (!store.store.name) {
    return (
      <Container>
        <Heading>กรุณาเลือกร้านปรินท์ก่อนดำเนินการต่อ 🖨</Heading>

        <Button onClick={() => store.setTab('locator')} primary>
          ย้อนกลับ
        </Button>
      </Container>
    )
  }

  return (
    <Container>
      <Heading>อัพโหลดไฟล์เอกสาร 📚</Heading>
      <Row>
        <List>
          <Uploader />

          {store.files.map((file, i) => <File key={i} i={i} data={file} />)}

          {store.files.length > 0 && (
            <Button onClick={store.proceed} block>
              ดำเนินการต่อ
            </Button>
          )}
        </List>

        <FilePane />
      </Row>
    </Container>
  )
}

export default observer(Documents)
