import React from 'react'

import {Page, Nav, Fold, Why, Ideas, Join} from '../components/Landing'

const Landing = () => (
  <Page>
    <Nav />
    <main>
      <Fold />
      <Why />
      <Ideas />
      <Join />
    </main>
  </Page>
)

export default Landing
