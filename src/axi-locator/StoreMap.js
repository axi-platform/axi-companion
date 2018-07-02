import React from 'react'
import {observer} from 'mobx-react'
import styled from 'react-emotion'

import Map from '../axi-map'
import store from '../printat/store'

const MapContainer = styled.div`
  position: absolute;
  z-index: 0;

  width: 100%;
  height: 100vh;
`

const StoreMap = ({data}) => (
  <MapContainer>
    <Map
      center={store.center}
      current={store.position}
      selected={store.store.id}
      pins={data}
      onMarkerClick={store.setStore}
    />
  </MapContainer>
)

export default observer(StoreMap)
