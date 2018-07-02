import React from 'react'
import {observer} from 'mobx-react'
import styled from 'react-emotion'

import Paper from '../ui/Paper'
import Button from '../ui/Button'

import store from '../printat/store'

const Container = styled.div`
  margin: 0 auto;
  max-width: 1000px;
  padding: 1em;
`

const NoticeTitle = styled.div`
  color: #555;
  font-size: 1.45em;
  font-weight: bold;
`

const Notice = ({back, children}) => (
  <Container>
    <Paper>
      <NoticeTitle>{children}</NoticeTitle>

      <br />

      <div>
        <Button onClick={() => store.setTab(back)}>ย้อนกลับไปทำก่อน</Button>
      </div>
    </Paper>
  </Container>
)

const Heading = styled.h1`
  margin: 0;
  margin-bottom: 0.5em;
  font-size: 1.85em;

  font-weight: bold;
`

const Confirmation = () => {
  if (!store.store.name) {
    return <Notice back="locator">กรุณาเลือกร้านปรินท์ก่อนค่ะ 🖨</Notice>
  }

  if (store.files.length === 0) {
    return <Notice back="document">กรุณาอัพโหลดไฟล์เอกสารด้วยค่ะ 📚</Notice>
  }

  return (
    <Container>
      <h1>สรุปการปรินท์เอกสาร</h1>

      <Paper>
        <Heading>
          ปรินท์ที่ {store.store.displayName} มีเอกสาร {store.files.length} ไฟล์
        </Heading>

        <div>
          {store.files.map(file => <div key={file.id}>{file.name}</div>)}
        </div>

        <br />

        <div>
          <Button onClick={store.createQueue} primary>
            สร้างคิวปรินท์เอกสาร
          </Button>
        </div>
      </Paper>
    </Container>
  )
}

export default observer(Confirmation)
