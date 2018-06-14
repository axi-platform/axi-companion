import React, {Component} from 'react'
import {Observer} from 'mobx-react'
import sift from 'sift'

import stores from '../stores/feathers'

import sync from '../core/sync'

export default class Query extends Component {
  constructor(props) {
    super(props)

    this.setup()
  }

  setup = async () => {
    const {service, query, sifter, id} = this.props
    const options = {}

    if (query) {
      options.query = query
      options.publication = sift(sifter || query)
    }

    if (id) {
      options.query = {id}
      options.publication = sift({id})

      options.subscriber = ([data], {action, ...event}) => {
        const store = stores[service]
        store.data = data

        console.log(`[> Sync ${service}: GET ${id}]`, action, data, event)
      }
    }

    this.sync = await sync(service, options)

    console.log('[> Sync Instance]', this.sync)
  }

  render() {
    const {service, id, children} = this.props
    const store = stores[service]

    return (
      <Observer>
        {() => {
          const {data, records, loading, error} = store

          if (id) {
            return children(data, data.id || loading, error)
          }

          return children(records, loading, error)
        }}
      </Observer>
    )
  }
}
