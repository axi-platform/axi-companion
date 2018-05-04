import React from 'react'
import {Router} from 'react-static'
import {hot} from 'react-hot-loader'
import {Provider} from 'mobx-react'

import Routes from 'react-static-routes'

import stores from '../stores'

const App = () => (
  <Provider {...stores}>
    <Router>
      <Routes />
    </Router>
  </Provider>
)

const enhance = hot(module)

export default enhance(App)
