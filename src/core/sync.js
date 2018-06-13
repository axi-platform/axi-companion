import Realtime from 'feathers-offline-realtime'

import app from './feathers'

import stores from '../stores/feathers'

export default async function sync(name, config) {
  stores.init(name)

  const store = stores[name]
  const service = app.service(name)

  function subscriber(records, {action, ...event}) {
    console.log(`[> Sync ${name}]`, action, records, event)

    store.records = records
  }

  const options = {
    sort: Realtime.multiSort({id: 1}),
    subscriber,
    ...config,
  }

  const rt = new Realtime(service, options)
  await rt.connect()

  return rt
}
