import React from 'react'
import styled from 'react-emotion'
import {observer} from 'mobx-react'

import Preview from './Preview'

import Button from '../ui/Button'
import Paper from '../ui/Paper'

import {sm} from '../ui/style'
import store from '../printat/store'

const RContainer = styled.div`
  width: 100%;
  margin-bottom: 2em;

  @media (min-width: ${sm}px) {
    padding-left: 1.8em;
  }
`

const Title = styled.div`
  font-weight: bold;
`

const Notice = styled.div`
  color: #666;
  font-size: 1.15em;
  line-height: 1.5em;
`

const NoticePane = ({children}) => (
  <RContainer>
    <Paper>
      <Notice>{children}</Notice>
    </Paper>
  </RContainer>
)

const FilePane = () => {
  if (store.files.length === 0) {
    return (
      <NoticePane>
        <Title>ยังไม่มีไฟล์อยู่เลยในตอนนี้ 🙂</Title>
        ลากไฟล์เข้ามาหรือกดเพื่อเพิ่มไฟล์ 🗳
      </NoticePane>
    )
  }

  if (!store.selectedFile.name) {
    return (
      <NoticePane>
        <Title>กรุณาเลือกไฟล์เพื่อแสดงผล</Title>
      </NoticePane>
    )
  }

  return (
    <RContainer>
      <Preview file={store.selectedFile} />

      <Paper>
        <Button onClick={store.removeFile} icon="trash" danger>
          ลบไฟล์
        </Button>
      </Paper>
    </RContainer>
  )
}

export default observer(FilePane)
