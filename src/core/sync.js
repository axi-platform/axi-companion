import Realtime from 'feathers-offline-realtime'
import optimisticMutator from 'feathers-offline-realtime/lib/optimistic-mutator'

import app from './feathers'

import stores from '../stores/feathers'

const capitalize = text => text.charAt(0).toUpperCase() + text.substr(1)

export default async function sync(name, config) {
  stores.init(name)

  const store = stores[name]
  const service = app.service(name)

  function subscriber(records, {action, ...event}) {
    console.log(`[> Sync ${name}]`, action, records, event)

    store.records = records
  }

  const options = {
    uuid: true,
    sort: Realtime.multiSort({id: 1}),
    subscriber,
    ...config,
  }

  const replicator = new Realtime(service, options)

  app.use(`client${capitalize(name)}`, optimisticMutator({replicator}))

  await replicator.connect()

  return replicator
}
