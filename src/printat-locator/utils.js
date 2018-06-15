import app from '../utils/feathers'

export const getPosition = () =>
  new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error('Geolocation API is unavailable.'))
    }

    navigator.geolocation.getCurrentPosition(resolve, reject)
  })

// Retrieve the nearest print station
export async function getNearestStation(position) {
  const devices = app.service('devices')

  // Query the nearest print device
  const {data, total} = await devices.find({
    query: {
      $limit: 1,
      // loc: {$near: position},
      // presence: 'online',
      // service: 'printat',
    },
  })

  // Notify that there aren't any available print shops nearby.
  if (!data || total === 0) {
    throw new Error("There aren't any nearby print shops right now.")
  }

  // Choose the nearest device.
  const [device] = data

  return device
}
