import {enableLogging} from 'mobx-logger'

import app from './app'
import routing from './routing'

const stores = {app, routing}

enableLogging()

if (typeof window !== 'undefined') {
  window.stores = stores
}

export default stores
