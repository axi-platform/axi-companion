import {enableLogging} from 'mobx-logger'

import routing from './routing'

import print from '../printat/store'
import project from '../project-editor/store'

const stores = {routing, print, project}

if (typeof window !== 'undefined') {
  enableLogging()

  window.stores = stores
}

export default stores
