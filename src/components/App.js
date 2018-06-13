import React from 'react'
import {hot} from 'react-hot-loader'
import {Provider} from 'mobx-react'
import {compose, lifecycle} from 'recompose'
import {injectGlobal} from 'react-emotion'
import {ApolloProvider} from 'react-apollo'

import client from '../core/apollo'

import Routes from './Routes'

import stores from '../stores'

const App = () => (
  <ApolloProvider client={client}>
    <Provider {...stores}>
      <Routes />
    </Provider>
  </ApolloProvider>
)

const enhance = compose(
  hot(module),
  lifecycle({
    componentWillMount() {
      injectGlobal`
        body {
          margin: 0;
          color: #555;
          min-height: 100vh;
          font-weight: 300;
          font-family: Roboto, "Helvetica Neue", "Sukhumvit Set", Kanit, Avenir, -apple-system, BlinkMacSystemFont, "Segoe UI", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `
    },
  }),
)

export default enhance(App)
