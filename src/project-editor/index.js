import React from 'react'
import styled from 'react-emotion'
import {Route, Redirect} from 'react-static'

import ProjectToolbar from './ProjectToolbar'

import Query from '../common/Query'

const Section = styled.div`
  padding: 1.8em 2.5em;
  max-width: 900px;
  min-height: 95vh;
  margin: 0 auto;
  color: #777;

  font-weight: 300;
  line-height: 1.4em;
  font-size: 1em;
`

const Heading = styled.h1`
  font-weight: 300;
  color: #555;
`

const Overview = () => (
  <Section>
    <Heading>Overview Route is Active</Heading>
  </Section>
)

const Services = () => (
  <Section>
    <Heading>Services Route is Active</Heading>
  </Section>
)

const Devices = () => (
  <Section>
    <Heading>Devices Route is Active</Heading>
  </Section>
)

const RedirectIf = ({match, to}) => (
  <Route exact path={match} render={() => <Redirect to={to} />} />
)

const Project = props => {
  // prettier-ignore
  const {match: {params: {id}}} = props

  return (
    <Query service="projects" id={id}>
      {(data, loading, error) => {
        if (loading) return <div>Loading...</div>
        if (error) return <div>Error: {error.message}</div>

        return (
          <div>
            <ProjectToolbar data={data} />

            <RedirectIf match="/project/:id" to={`/project/${id}/overview`} />
            <Route path="/project/:id/overview" component={Overview} />
            <Route path="/project/:id/services" component={Services} />
            <Route path="/project/:id/devices" component={Devices} />
          </div>
        )
      }}
    </Query>
  )
}

export default Project
