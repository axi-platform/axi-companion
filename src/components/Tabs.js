import React from 'react'
import styled from 'react-emotion'
import Ink from 'react-ink'

import {font} from '../core/style'

// box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);
const TabWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`

const Tab = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  width: 100%;
  padding: 0.76em 1.5em;
  background: transparent;

  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  user-select: none;

  font-family: ${font};
  font-weight: 300;
  font-size: 1.1em;
  text-transform: capitalize;
`

const TabIndicator = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: ${props => 100 / props.total}%;
  border-bottom: 2px solid ${props => props.color || 'white'};
  transition: 1s cubic-bezier(0.22, 0.61, 0.36, 1) all;
  transform: translateX(${props => props.index * 100}%);
`

const Tabs = ({tab, go, tabs, color}) => {
  const index = Math.max(tabs.indexOf(tab), 0)
  console.log('Index is', index)

  return (
    <TabWrapper>
      {tabs.map(item => (
        <Tab key={item} onClick={() => go(item)}>
          {item}
          <Ink opacity={0.1} />
        </Tab>
      ))}
      <TabIndicator color={color} total={tabs.length} index={index} />
    </TabWrapper>
  )
}

export default Tabs
