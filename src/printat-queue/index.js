import React from 'react'
import {observer} from 'mobx-react'
import styled from 'react-emotion'

import QueueCard from './QueueCard'
import Confirmation from './Confirmation'

import Button from '../ui/Button'
import Paper from '../ui/Paper'
import Query from '../common/Query'

import store from '../printat/store'

const Container = styled.div`
  margin: 0 auto;
  max-width: 1000px;
  padding: 1em;
`

const ButtonRow = styled.div`
  display: flex;

  button:first-child {
    margin-right: 1em;
  }
`

const cancelableStatus = ['idle', 'processing']
const resolvedStatus = ['completed', 'failed', 'canceled']

const Queue = () => {
  if (!store.queueId) {
    return <Confirmation />
  }

  return (
    <Container>
      <h1>คิวปรินท์งานที่ {store.queueId}</h1>

      <Query service="queues" id={store.queueId}>
        {(queue, loading, error) => {
          if (loading) return <div>Loading...</div>

          const isCancelable = cancelableStatus.includes(queue.status)

          const isResolved = resolvedStatus.includes(queue.status)

          return (
            <div>
              <QueueCard {...queue} />

              <Paper style={{marginTop: '1.3em'}}>
                {isCancelable && (
                  <Button onClick={store.cancel} danger>
                    ยกเลิกคิว
                  </Button>
                )}

                {isResolved && (
                  <Button onClick={store.startOver} success>
                    เริ่มต้นใหม่
                  </Button>
                )}
              </Paper>
            </div>
          )
        }}
      </Query>
    </Container>
  )
}

export default observer(Queue)
