import React, {Fragment} from 'react'
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

const ProjectDirectory = () => (
  <Fragment>
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
  </Fragment>
)

export default ProjectDirectory
