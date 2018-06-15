import React from 'react'
import styled from 'react-emotion'

import Directory from './Directory'

import Query from '../common/Query'
import Toolbar from '../ui/Toolbar'

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 1.5em;
  min-height: 100vh;
  font-weight: 300;
`

const Dashboard = () => (
  <div>
    <Toolbar title="Dashboard" />
    <Container>
      <Query service="projects">
        {(data, loading, error) => {
          if (loading) return <p>Loading...</p>
          if (error) return <p>Error :(</p>

          return <Directory projects={data} />
        }}
      </Query>
    </Container>
  </div>
)

export default Dashboard
