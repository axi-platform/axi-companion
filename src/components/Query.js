import React, {Component} from 'react'
import {Observer} from 'mobx-react'

import feathers from '../stores/feathers'

export default class Query extends Component {
  constructor(props) {
    super(props)

    feathers.use(props.service)
    feathers.find(props.service, props.query)
  }

  componentWillUnmount() {
    feathers.off(this.props.service)
  }

  render() {
    return (
      <Observer>
        {() => {
          const store = feathers[this.props.service]

          return this.props.children(store.data, store.loading, store.error)
        }}
      </Observer>
    )
  }
}
