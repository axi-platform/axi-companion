import React, {Component} from 'react'
import {observable} from 'mobx'
import {observer} from 'mobx-react'
import styled from 'react-emotion'

import StationDetail from './StationDetail'

import {getPosition, getNearbyStations} from './utils'

import Map from '../ui/Map'
import Query from '../common/Query'

import store from '../printat/store'

const MapContainer = styled.div`
  position: absolute;
  z-index: 0;

  width: 100%;
  height: 100vh;
`

@observer
export default class StationMap extends Component {
  // The current position of the user
  @observable position = [13.74, 100.588]

  async componentDidMount() {
    // Set the current position, which is used as the center of the map.
    const {coords} = await getPosition()
    this.position = [coords.latitude, coords.longitude]

    console.log('Current Position is', this.position)

    // Set the default print station to the nearest one.
    const [device] = await getNearbyStations(this.position)
    store.setStation(device)
  }

  render() {
    return (
      <Query service="devices">
        {(data, loading, error) => {
          if (loading) return <div>Loading...</div>
          if (error) return <div>Error: {error.message}</div>

          console.log('Data is', data)

          return (
            <div>
              <StationDetail
                selected={store.station}
                onConfirm={store.proceed}
              />

              <MapContainer>
                <Map
                  center={this.position}
                  pins={data}
                  onMarkerClick={store.setStation}
                />
              </MapContainer>
            </div>
          )
        }}
      </Query>
    )
  }
}
