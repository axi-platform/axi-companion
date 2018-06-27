import React, {Component} from 'react'
import {observer} from 'mobx-react'
import DropZone from 'react-dropzone'
import styled, {css} from 'react-emotion'
import Ink from 'react-ink'
import {observable} from 'mobx'
import Noty from 'noty'

import CircleIcon from './CircleIcon'
import {humanFileSize} from './utils'

import noti from '../utils/noti'
import app from '../utils/feathers'
import store from '../printat/store'

Noty.setMaxVisible(1, 'upload')

const maxSize = 80000000

const Meta = styled.div`
  font-size: 16px;
  color: rgba(0, 0, 0, 0.54);
`

const Upload = styled(DropZone)`
  display: flex;
  flex-direction: row;
  position: relative;

  padding: 0.85em 1.5em;
  margin-bottom: 1em;

  font-size: 1.08em;
  line-height: 1.5em;

  background: white;
  color: rgb(85, 85, 85);

  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 25px;
  transition: all 0.5s cubic-bezier(0.22, 0.61, 0.36, 1);

  &:hover {
    ${'' /* color: white; */} ${'' /* background: #2d2d30; */};
  }
`

const draggingStyle = css`
  border: 2px solid white;
  background: rgb(255, 87, 34) !important;
  box-shadow: 0 12px 20px -10px rgba(255, 87, 34, 0.28),
    0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 87, 34, 0.2) !important;
`

const Title = styled.div`
  color: white;
  font-weight: 400;
  align-self: center;
  justify-content: center;
  font-size: 19px;
`

@observer
export default class FileUploader extends Component {
  @observable isDragging = false

  onAccepted = files => {
    this.isDragging = false

    files.forEach(file => {
      store.addFile(file)
      store.selectFile(file)

      this.upload(file)
    })
  }

  onRejected = files => {
    console.log(files)
  }

  onDragEnter = event => {
    this.isDragging = true
  }

  onDragLeave = () => {
    console.log('Drag Leave')

    this.isDragging = false
  }

  renderInterface = () => {
    if (this.isDragging) {
      return <Title>ปล่อยไฟล์ลงตรงนี้เพื่ออัพโหลด</Title>
    }

    return (
      <div>
        <b>อัพโหลดไฟล์</b>
        <Meta>ลากไฟล์มาหรือกดตรงนี้เพื่ออัพโหลด</Meta>
      </div>
    )
  }

  upload = file => {
    const upload = app.service('upload')
    const reader = new window.FileReader()

    reader.onload = async () => {
      try {
        const res = await upload.create({uri: reader.result})
        console.log('Upload Success', res)

        noti.success(`อัพโหลดไฟล์ <b>${file.name}</b> เรียบร้อยแล้ว`, 1100, {
          queue: 'upload',
          killer: true,
        })
      } catch (err) {
        console.error('Upload Error', err)

        noti.error(
          `การอัพโหลดไม่สำเร็จสำหรับไฟล์ <b>${file.name}</b>: ${err.message}`,
          1100,
          {queue: 'upload', killer: true},
        )
      }
    }

    reader.onprogress = e => {
      const loaded = humanFileSize(e.loaded)
      const total = humanFileSize(e.total)
      const perc = (e.loaded / e.total * 100).toFixed(2)

      if (e.lengthComputable) {
        // prettier-ignore
        noti.info(`กำลังอัพโหลด <b>${file.name}</b>: <b>${perc}%</b> (${loaded} จาก ${total})`, 1100, {queue: 'upload'})
      }
    }

    reader.readAsDataURL(file)
  }

  render() {
    const config = {
      onDropAccepted: this.onAccepted,
      onDropRejected: this.onRejected,
      onDragEnter: this.onDragEnter,
      onDragLeave: this.onDragLeave,
      activeClassName: draggingStyle,
      maxSize,
    }

    const color = this.isDragging ? '45, 45, 48' : '255, 87, 34'

    return (
      <Upload {...config}>
        <CircleIcon icon="addFile" color={color} />
        {this.renderInterface()}
        <Ink opacity={0.15} />
      </Upload>
    )
  }
}
