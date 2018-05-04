import createHistory from 'history/createBrowserHistory'

let history = {}

if (typeof window !== 'undefined') {
  history = createHistory()
}

window._history = history

export default history
