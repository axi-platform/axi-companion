import React, {Fragment} from 'react'
import styled from 'react-emotion'
import {observer} from 'mobx-react'

import store from './store'

import Toolbar, {IconLink} from '../ui/Toolbar'
import Tabs from '../ui/Tabs'

import colorize from '../utils/color-hash'

const Left = styled.div`
  display: flex;
  align-items: center;

  & > *:not(:last-child) {
    margin-right: 1em;
  }
`

const Right = styled.div`
  display: flex;
  align-items: center;

  & > * {
    margin-right: 1em;
  }
`

const Separator = styled.div`
  height: 1.78em;
  width: 1px;
  background: #f5f5f5;
  margin-right: ${props => props.margin || 0.5}em;
  margin-left: ${props => props.margin || 0.5}em;
  opacity: 0.75;
`

export const Title = styled.div`
  display: flex;
  align-items: flex-end;

  padding-left: 0.6em;
  font-size: 1.15em;

  @media screen and (max-width: 700px) {
    font-size: 1em;
    padding-left: 0;
    overflow: hidden;
  }
`

const Desktop = styled.div`
  @media screen and (max-width: 700px) {
    display: none;
  }
`

const MobileTab = styled.div`
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.16);

  @media screen and (min-width: 700px) {
    display: none;
  }
`

const tabLabels = {
  overview: 'ภาพรวม',
  services: 'บริการ',
  devices: 'อุปกรณ์',
}

const tabs = Object.keys(tabLabels)

const ProjectToolbar = ({data}) => (
  <Fragment>
    <Toolbar
      color={data.color || colorize(data.name)}
      left={
        <Left>
          <IconLink to="/dashboard" icon="dashboard" />
          <Separator />
          <Title min={6}>
            {data.displayName} &nbsp;<small>({data.name})</small>
          </Title>
        </Left>
      }
      right={
        <Right>
          <Desktop>
            <Tabs
              tabs={tabs}
              labels={tabLabels}
              tab={store.tab}
              go={store.setTab}
            />
          </Desktop>
          <Separator />
          <IconLink to="/dashboard" icon="notifications" />
          <IconLink to="/dashboard" icon="settings" />
        </Right>
      }
    />
    <MobileTab>
      <Tabs
        tabs={tabs}
        tab={store.tab}
        labels={tabLabels}
        color="hsl(264, 46%, 41%)"
        go={store.setTab}
      />
    </MobileTab>
  </Fragment>
)

export default observer(ProjectToolbar)
