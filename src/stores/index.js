import {enableLogging} from 'mobx-logger'

import app from './app'
import feathers from './feathers'

const stores = {app, feathers}

enableLogging()

if (typeof window !== 'undefined') {
  window.stores = stores
}

export default stores
