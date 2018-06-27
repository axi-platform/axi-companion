import React from 'react'
import {observer} from 'mobx-react'

import store from './store'

import BottomNavigation from '../ui/BottomNavigation'

const tabs = [
  {
    path: 'locator',
    label: 'ค้นหาร้าน',
    icon: 'pin',
  },
  {
    path: 'document',
    label: 'อัพโหลดเอกสาร',
    icon: 'attach',
  },
  {
    path: 'queue',
    label: 'สั่งปรินท์',
    icon: 'addSquare',
  },
]

const BottomNav = () => (
  <BottomNavigation tabs={tabs} setTab={store.setTab} selected={store.tab} />
)

export default observer(BottomNav)
