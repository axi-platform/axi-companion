import React from 'react'
import {observer} from 'mobx-react'

import store from './store'

const Tab = ({name, component: Component}) => (
  <div style={{display: name === store.tab ? 'block' : 'none'}}>
    <Component />
  </div>
)

export default observer(Tab)
