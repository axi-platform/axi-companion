import React from 'react'
import styled from 'react-emotion'

import Query from '../components/Query'
import Toolbar from '../components/Toolbar'
import Directory from '../components/Directory'

import {font} from '../core/style'

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 1.5em;
  min-height: 100vh;

  font-family: ${font};
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

      <Query service="projects" query={{displayName: 'PrintAt'}}>
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
