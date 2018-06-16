import React from 'react'
import {observer} from 'mobx-react'

import store from './store'

import BottomNavigation from '../ui/BottomNavigation'

const tabs = [
  {
    path: 'locator',
    label: 'Print Shops',
    icon: 'pin',
  },
  {
    path: 'document',
    label: 'Upload File',
    icon: 'attach',
  },
  {
    path: 'queue',
    label: 'Queue & Print',
    icon: 'addSquare',
  },
]

const BottomNav = () => (
  <BottomNavigation tabs={tabs} setTab={store.setTab} selected={store.tab} />
)

export default observer(BottomNav)
