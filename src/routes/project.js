import React from 'react'
import styled, {css, keyframes} from 'react-emotion'
import {Route, Redirect} from 'react-static'
import {Observer} from 'mobx-apollo'

import Query from '../components/Query'
import ProjectToolbar from '../components/Project/ProjectToolbar'

import app from '../stores/app'

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

const opacity = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`

// prettier-ignore
const CoolButton = styled.div`
  text-decoration: none;
  padding: 4em 4em;
  font-size: 20px;
  color: #333;
  display: flex;
  background: linear-gradient(45deg, #d4145a, #fbb03b);
  border-radius: 3px;
  position: relative;
  z-index: 1;
  transition: color 0.3s ease-out;
  cursor: pointer;

  &:before {
    background: linear-gradient(45deg, #662d8c, #ed1e79);
    color: #ffffff;
    content: '';
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: absolute;
    z-index: -1;
    transition: opacity 0.3s ease-out;
    border-radius: 3px;

    ${props => props.animating && css`
      animation: ${opacity} 1s ease infinite;
      animation-direction: alternate;
    `};
  }
`

const Overview = () => (
  <div>
    <Heading>Overview Route is Active</Heading>
  </div>
)

const Services = () => (
  <div>
    <Heading>Services Route is Active</Heading>
  </div>
)

const Devices = () => (
  <div>
    <Heading>Devices Route is Active</Heading>
  </div>
)

const IndexRedirect = ({path, to}) => (
  <Route exact path={path} render={() => <Redirect to={to} />} />
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

            <IndexRedirect path="/project/:id" to={`/project/${id}/overview`} />
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
