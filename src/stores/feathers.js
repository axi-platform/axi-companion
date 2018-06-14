import {action, observable} from 'mobx'

import app from '../core/feathers'

class FeathersStore {
  @action
  init = name => {
    if (!this[name]) {
      this[name] = observable({
        data: {},
        records: [],
        loading: false,
        error: null,
      })
    }
  }

  @action
  setLoading = state => {
    if (state) {
      store.error = null
    }

    store.loading = state
  }

  @action
  find = async (service, query = {}) => {
    const Service = app.service(service)
    const store = this[service]

    this.setLoading(true)

    try {
      const {data, skip, total, limit} = await Service.find({query})
      store.records = data

      store.skip = skip
      store.total = total
      store.limit = limit
    } catch (err) {
      store.error = err
    }

    this.setLoading(false)
  }

  @action
  get = async (service, id) => {
    const Service = app.service(service)
    const store = this[service]

    this.setLoading(true)

    try {
      const data = await Service.get(id)

      store.data = data
    } catch (err) {
      store.error = err
    }

    this.setLoading(false)
  }
}

const store = new FeathersStore()

export default store
