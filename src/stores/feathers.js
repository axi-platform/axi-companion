import {action, observable} from 'mobx'
import Realtime from 'feathers-offline-realtime'

import app from '../core/feathers'

class FeathersStore {
  @observable name = 'Phoom'

  @action
  use = async service => {
    console.log('Using Service:', service)

    if (!this[service]) {
      this.setup(service)

      console.log('Registered Service:', service)
    }
  }

  @action
  setup = async service => {
    this[service] = observable({data: []})
    const Service = app.service(service)

    Service.on('created', data => {
      console.log(`Service ${service} created:`, data)
    })

    Service.on('updated', data => {
      console.log(`Service ${service} updated:`, data)
    })

    Service.on('patched', data => {
      console.log(`Service ${service} patched:`, data)
    })

    Service.on('removed', data => {
      console.log(`Service ${service} removed:`, data)
    })

    Service.find().then(data => {
      this[service].data = data
    })
  }
}

const store = new FeathersStore()

if (typeof window !== 'undefined') {
  window.store = store
}

export default store
