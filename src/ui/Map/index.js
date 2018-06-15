import React from 'react'
import GoogleMap from 'google-map-react'

import Pin, {pinType} from './Pin'

import {NaturalMap} from './style'

// NOTE: Don't steal my API key!
const GMAPS_API_KEY = 'AIzaSyByuPdK_PChenE1ejwbdyCDb861nWpdtF8'

// Zoomlevel 17 is perfect for nearby locations
// Zoomlevel 10 is for central view
const config = {
  bootstrapURLKeys: {
    key: GMAPS_API_KEY,
  },
  defaultCenter: [13.7, 100.5],
  defaultZoom: 15,
  options: () => ({
    gestureHandling: 'greedy',
    styles: NaturalMap,
  }),
}

const Map = ({center, pins, onMarkerClick}) => (
  <GoogleMap center={center} {...config}>
    {pins &&
      pins.map((props, i) => (
        <Pin
          key={i}
          type={pinType(i, pins.length)}
          onClick={onMarkerClick}
          {...props}
        />
      ))}
  </GoogleMap>
)

export default Map
