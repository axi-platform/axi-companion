import React from 'react'
import {inject, observer} from 'mobx-react'

const Landing = ({app}) => (
  <div>
    <h1>Message: {app.message}</h1>
    <button onClick={app.fetchMessage}>Fetch Message...</button>
  </div>
)

export default inject('app')(observer(Landing))
