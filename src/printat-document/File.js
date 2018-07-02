import React from 'react'
import Ink from 'react-ink'
import styled, {css} from 'react-emotion'
import {observer} from 'mobx-react'

import CircleIcon from './CircleIcon'

import getFormat from './formats'
import {humanFileSize} from './utils'

import Paper from '../ui/Paper'

import store from '../printat/store'

const Meta = styled.div`
  font-size: 15px;
  color: rgba(0, 0, 0, 0.54);
`

// prettier-ignore
const Card = styled(Paper)`
  flex-direction: row;
  align-items: center;

  padding: 0.85em 1.5em;
  margin-bottom: 1em;

  cursor: pointer;
  font-size: 1.08em;
  line-height: 1.5em;
  transition: all 0.5s cubic-bezier(0.22, 0.61, 0.36, 1);

  ${props => props.selected && css`
    background-color: #af2cc5;
    box-shadow: 0 12px 20px -10px rgba(156,39,176,0.28), 0 4px 20px 0px rgba(0,0,0,0.12), 0 7px 8px -5px rgba(156,39,176,0.2);

    div {
      color: white;
    }
  `}
`

const Title = styled.div`
  color: #333;
  font-weight: 400;
  font-size: 17px;
`

function truncate(text) {
  if (text.length < 40) return text

  return text.slice(0, 40) + '...'
}

const File = ({i, data}) => {
  const size = humanFileSize(data.size)
  const {format, icon} = getFormat(data.type, data.name)
  const date = data.lastModifiedDate.toLocaleString()
  const selected = store.selectedFile.name === data.name
  const color = selected ? '45, 45, 48' : '0, 150, 136'

  return (
    <Card onClick={() => store.selectFile(data)} selected={selected}>
      <CircleIcon icon={icon} color={color} />
      <div>
        <Title>
          {i + 1}: {truncate(data.name)}
        </Title>

        <Meta>
          {size} - {format} - {date}
        </Meta>
      </div>

      <Ink opacity={0.15} />
    </Card>
  )
}

export default observer(File)
