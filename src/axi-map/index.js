import React from 'react'
import GoogleMap from 'google-map-react'

import Pin, {CurrentPos} from './Pin'

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

const Map = ({pins = [], current, center, selected, onMarkerClick}) => {
  pins = pins.map(x => ({
    lat: x.latitude,
    lng: x.longitude,
    selected: x.id === selected,
    ...x,
  }))

  return (
    <GoogleMap center={center} {...pins} {...config}>
      {pins &&
        pins.map((pin, i) => (
          <Pin key={i} onClick={() => onMarkerClick(pin)} {...pin} />
        ))}

      {current && <CurrentPos lat={current[0]} lng={current[1]} />}
    </GoogleMap>
  )
}

export default Map
