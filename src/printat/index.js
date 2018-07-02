import React from 'react'

import Nav from './Nav'
import Tab from './Tab'
import BottomNav from './BottomNav'

import Locator from '../axi-locator'
import Document from '../printat-document'
import Queue from '../printat-queue'

const Dashboard = props => (
  <main>
    <Nav />

    <Tab name="locator" component={Locator} />
    <Tab name="document" component={Document} />
    <Tab name="queue" component={Queue} />

    <BottomNav />
  </main>
)

export default Dashboard
