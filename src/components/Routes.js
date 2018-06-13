import React from 'react'
import {Router, Route, Switch} from 'react-static'
import StaticRoutes from 'react-static-routes'

import Project from '../routes/project'
import NotFound from '../routes/404'

import history from '../core/history'

const Routes = () => (
  <Router history={history}>
    <Switch>
      <Route path="/project/:id" component={Project} />
      <StaticRoutes />
      <Route component={NotFound} />
    </Switch>
  </Router>
)

export default Routes
