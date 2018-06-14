import {enableLogging} from 'mobx-logger'

import app from './app'
import feathers from './feathers'
import routing from './routing'

const stores = {app, feathers, routing}

enableLogging()

if (typeof window !== 'undefined') {
  window.stores = stores
}

export default stores
