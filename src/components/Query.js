import React, {Component} from 'react'
import {observer} from 'mobx-react'
import sift from 'sift'

import stores from '../stores/feathers'

import sync from '../core/sync'

@observer
export default class Query extends Component {
  constructor(props) {
    super(props)

    this.setup()
  }

  setup = async () => {
    let {service, query, sifter, id} = this.props
    const options = {}

    if (query) {
      options.query = query
      options.publication = sift(sifter || query)
    }

    if (id) {
      id = parseInt(id) || id

      options.query = {id}
      options.publication = sift({id})

      options.subscriber = ([data], {action, ...event}) => {
        const store = stores[service]
        store.data = data

        console.log(`[> Sync ${service}: GET ${id}]`, action, data, event)
      }
    }

    this.sync = await sync(service, options)
  }

  render() {
    const {service, id, children} = this.props
    const store = stores[service]

    const {data, records, loading, error} = store

    if (id) {
      const isLoading = (data && !data.id) || loading

      return children(data, isLoading, error)
    }

    return children(records, loading, error)
  }
}
