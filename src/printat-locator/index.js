import React, {Component} from 'react'
import {observer} from 'mobx-react'
import {observable} from 'mobx'

import StoreMap from './StoreMap'
import Nearby from './Nearby'

import Query from '../common/Query'
import {getPosition, getNearbyStores} from './utils'

import store from '../printat/store'
import noti from '../utils/noti'

@observer
export default class StoreLocator extends Component {
  @observable nearby = []

  async componentDidMount() {
    // Set the current position, which is used as the center of the map.
    const {coords} = await getPosition()
    store.position = [coords.latitude, coords.longitude]

    console.log('Current Position is', store.position.toJS())

    // Set the default print store to the nearest one.
    const devices = await getNearbyStores(store.position)
    noti.success(`พบ ${devices.length} ร้านปริ้นท์ใกล้ตัวคุณ`)

    this.nearby = devices
    store.setStore(devices[0])
  }

  render() {
    return (
      <Query service="devices">
        {(data, loading, error) => {
          if (loading) return <div>Loading...</div>
          if (error) return <div>Error: {error.message}</div>

          return (
            <div>
              <Nearby data={this.nearby} />
              <StoreMap data={data} />
            </div>
          )
        }}
      </Query>
    )
  }
}
