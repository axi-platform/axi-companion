import React, {Component} from 'react'
import {observer} from 'mobx-react'

import StoreMap from './StoreMap'
import Query from '../common/Query'

import {getPosition, getNearbyStores} from './utils'
import store from '../printat/store'

@observer
export default class StoreLocator extends Component {
  async componentDidMount() {
    // Set the current position, which is used as the center of the map.
    const {coords} = await getPosition()
    store.position = [coords.latitude, coords.longitude]

    console.log('Current Position is', store.position.toJS())

    // Set the default print store to the nearest one.
    const [device] = await getNearbyStores(store.position)
    store.setStore(device)
  }

  render() {
    return (
      <Query service="devices">
        {(data, loading, error) => {
          if (loading) return <div>Loading...</div>
          if (error) return <div>Error: {error.message}</div>

          return <StoreMap data={data} />
        }}
      </Query>
    )
  }
}
