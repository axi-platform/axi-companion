import * as R from 'ramda'
import {action, observable} from 'mobx'
import Realtime from 'feathers-offline-realtime'

import app from '../core/feathers'

async function handleEvents(rootStore, app, service) {
  const Service = app.service(service)
  const store = rootStore[service]

  Service.on('created', data => {
    store.data = [...store.data, data]

    console.info(`${service} created:`, data)
  })

  Service.on('updated', data => {
    const index = store.data.findIndex(x => x.id === data.id)
    store.data = R.update(index, data, store.data)

    console.info(`${service} updated:`, data)
  })

  Service.on('patched', data => {
    const index = store.data.findIndex(x => x.id === data.id)
    store.data = R.update(index, data, store.data)

    console.info(`${service} patched:`, data)
  })

  Service.on('removed', data => {
    store.data = store.data.filter(x => x.id !== data.id)

    console.info(`${service} removed:`, data)
  })
}

class FeathersStore {
  @action
  use = async service => {
    if (!this[service]) {
      this[service] = observable({data: [], loading: true, error: null})
      handleEvents(this, app, service)

      console.log(`[>] Service Registered: ${service}`)
    }
  }

  @action
  find = async (service, query = {}) => {
    const store = this[service]
    store.loading = true

    const result = await app.service(service).find({query})
    const {data, skip, total, limit} = result

    store.data = data
    store.skip = skip
    store.total = total
    store.limit = limit

    store.loading = false
  }

  @action
  off = (service, customEvents) => {
    const Service = app.service(service)
    const events = ['created', 'updated', 'patched', 'removed', ...customEvents]

    events.forEach(event => Service.off(event))
  }
}

const store = new FeathersStore()

if (typeof window !== 'undefined') {
  window.store = store
}

export default store
