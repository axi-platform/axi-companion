import React from 'react'
import {observer} from 'mobx-react'
import styled from 'react-emotion'

import StoreDetail from './StoreDetail'

import Map from '../axi-map'
import store from '../printat/store'

const MapContainer = styled.div`
  position: absolute;
  z-index: 0;

  width: 100%;
  height: 100vh;
`

const StoreMap = ({data}) => (
  <div>
    <StoreDetail selected={store.store} onConfirm={store.proceed} />

    <MapContainer>
      <Map center={store.position} pins={data} onMarkerClick={store.setStore} />
    </MapContainer>
  </div>
)

export default observer(StoreMap)
