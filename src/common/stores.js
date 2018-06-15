import {enableLogging} from 'mobx-logger'

import routing from './routing'

import print from '../printat/store'
import project from '../project-editor/store'

const stores = {routing, print, project}

enableLogging()

if (typeof window !== 'undefined') {
  window.stores = stores
}

export default stores
