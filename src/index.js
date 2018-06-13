import React from 'react'
import ReactDOM from 'react-dom'

import app from './core/feathers'

import App from './components/App'

if (typeof document !== 'undefined') {
  const renderMethod = module.hot
    ? ReactDOM.render
    : ReactDOM.hydrate || ReactDOM.render

  const render = Comp => {
    renderMethod(<Comp />, document.getElementById('root'))
  }

  // Render!
  render(App)
}

if (typeof window !== 'undefined') {
  window.app = app
}

export default App
