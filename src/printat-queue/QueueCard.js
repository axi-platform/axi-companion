import React, {Component} from 'react'
import styled from 'react-emotion'

import Paper from '../ui/Paper'
import Query from '../common/Query'

import noti from '../utils/noti'

const statuses = {
  idle: 'รอการประมวลผล 🙂',
  processing: 'กำลังดำเนินการอยู่ กรุณารอสักครู่ 😇',
  canceled: 'คิวถูกยกเลิก 😐',
  failed: 'เกิดความผิดพลาด 😭',
  completed: 'ปรินท์เสร็จเรียบร้อย รับเอกสารได้เลย 😎',
}

const Bold = styled.strong`
  font-weight: bold;
  font-size: 1.15em;
`

const Card = styled(Paper)`
  font-size: 1.15em;
  line-height: 1.5em;
`

const DeviceInfo = device => {
  const {displayName, queues} = device

  return (
    <div>
      <div>
        ชื่อร้านปรินท์ <b>{displayName}</b>
      </div>

      <div>
        ยังเหลืออีก <b>{queues.length}</b> คิว
      </div>
    </div>
  )
}

export default class QueueCard extends Component {
  componentDidUpdate(prev) {
    const {id, status} = this.props

    if (status !== prev.status) {
      if (status === 'processing') noti.alert(statuses.processing)
      if (status === 'completed') noti.success(statuses.completed)
      if (status === 'failed') noti.error(statuses.failed)

      if (status === 'canceled') {
        noti.warn(`ยกเลิกคิวที่ ${id} เรียบร้อยแล้ว 😐`)
      }
    }
  }

  render() {
    const {id, deviceId, status, data, createdAt, updatedAt} = this.props
    const creationTime = new Date(createdAt).toLocaleTimeString()
    const updatedTime = new Date(updatedAt).toLocaleTimeString()

    return (
      <Card>
        <Bold>{statuses[status]}</Bold>

        <br />

        <div>
          คิวที่ <strong>{id}</strong>
        </div>
        <div>จำนวนเอกสาร {data.files.length} ไฟล์</div>

        <br />

        <Query service="devices" id={deviceId}>
          {(data, loading, error) => {
            if (loading) return <div>Loading...</div>

            return <DeviceInfo {...data} />
          }}
        </Query>

        <br />

        <div>สร้างคิวเมื่อ {creationTime}</div>
        <div>อัพเดตล่าสุดเมื่อ {updatedTime}</div>
      </Card>
    )
  }
}
