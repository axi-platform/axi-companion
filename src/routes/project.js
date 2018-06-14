import React from 'react'
import styled from 'react-emotion'

import Query from '../components/Query'
import ProjectToolbar from '../components/Project/ProjectToolbar'

import {font} from '../core/style'

const Section = styled.div`
  padding: 2.8em 2.5em;
  max-width: 900px;
  min-height: 95vh;
  margin: 0 auto;
  color: #777;

  font-family: ${font};
  font-weight: 300;
  line-height: 1.4em;
  font-size: 1em;
`

const Heading = styled.h1`
  margin: 0;
  font-weight: 300;
  color: #555;
`

const Page = ({is, children}) => <Section>{children}</Section>

const Project = props => {
  // prettier-ignore
  const {match: {params: {id}}} = props

  console.log('ID is', id)

  return (
    <Query service="projects" id={id}>
      {(data, loading, error) => {
        if (loading) return <div>Loading...</div>
        if (error) return <div>Error: {error.message}</div>

        return (
          <div>
            <ProjectToolbar data={data} />
            <Page is={0}>
              <Heading>Project: {data.displayName}</Heading>
            </Page>
          </div>
        )
      }}
    </Query>
  )
}

export default Project
