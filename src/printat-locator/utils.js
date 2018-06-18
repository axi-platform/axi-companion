import app from '../utils/feathers'

export const getPosition = () =>
  new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error('Geolocation API is unavailable.'))
    }

    navigator.geolocation.getCurrentPosition(resolve, reject)
  })

// Retrieve the print stations near you.
export async function getNearbyStations([lat, lon]) {
  const nearby = app.service('devices/nearby')

  // Query the nearby print device
  const {data} = await nearby.find({query: {lat, lon}})
  console.log('Nearby Shops:', data)

  return data
}
