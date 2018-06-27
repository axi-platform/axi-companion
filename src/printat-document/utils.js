export function humanFileSize(size) {
  const units = ['B', 'kB', 'MB', 'GB', 'TB']
  const i = Math.floor(Math.log(size) / Math.log(1024))
  const fileSize = (size / 1024 ** i).toFixed(2) * 1

  return `${fileSize} ${units[i]}`
}
