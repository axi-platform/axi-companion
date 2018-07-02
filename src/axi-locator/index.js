import React, {Component} from 'react'
import {observer} from 'mobx-react'

import StoreMap from './StoreMap'
import Nearby from './Nearby'

import Query from '../common/Query'
import {getPosition, getNearbyStores} from './utils'

import store from '../printat/store'
import noti from '../utils/noti'

@observer
export default class Locator extends Component {
  componentDidMount() {
    this.relocate()

    window.relocate = this.relocate
  }

  relocate = async () => {
    // Set the current position, which will set the center of the map.
    const {coords} = await getPosition()
    store.setPosition([coords.latitude, coords.longitude])

    try {
      // Set the default print store to the nearest one.
      const devices = await getNearbyStores(store.position)
      noti.success(`พบ ${devices.length} ร้านปริ้นท์ใกล้ตัวคุณ`)

      store.setStore(devices[0])
    } catch (err) {
      noti.error(err.message)
    }
  }

  render() {
    return (
      <Query service="devices" query={{serviceId: 1}}>
        {(data, loading, error) => {
          if (loading) return <div>Loading...</div>
          if (error) return <div>Error: {error.message}</div>

          return (
            <div>
              <Nearby data={data} />
              <StoreMap data={data} />
            </div>
          )
        }}
      </Query>
    )
  }
}
