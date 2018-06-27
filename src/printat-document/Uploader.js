import React, {Component} from 'react'
import {observer} from 'mobx-react'
import DropZone from 'react-dropzone'
import styled, {css} from 'react-emotion'
import Ink from 'react-ink'
import {observable} from 'mobx'

import CircleIcon from './CircleIcon'

import {humanFileSize} from './utils'

import noti from '../utils/noti'
import store from '../printat/store'

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
      const size = humanFileSize(file.size)

      noti.info(`Uploading <b>${file.name}</b> (${size})`)

      store.addFile(file)
      store.selectFile(file)

      setTimeout(() => {
        noti.success(`Uploaded <b>${file.name}</b> successfully.`)
      }, 1000)
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

  render() {
    const config = {
      onDropAccepted: this.onAccepted,
      onDropRejected: this.onRejected,
      onDragEnter: this.onDragEnter,
      onDragStart: e => console.log('Start', e),
      onDragOver: e => console.log('Over', e),
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
