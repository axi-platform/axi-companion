import React, {Component} from 'react'
import styled from 'react-emotion'
import Ink from 'react-ink'
import {observer} from 'mobx-react'
import {observable, action} from 'mobx'

import {Card, Content, Meta} from './Card'

import app from '../utils/feathers'
import colorize from '../utils/color-hash'

const Input = styled.input`
  background: transparent;
  overflow: hidden;
  border: none;
  font-size: ${props => props.size || 'inherit'};
  margin-top: ${props => props.sub && '0.5em'};
  font-family: inherit;
  font-weight: inherit;
  color: white;
  outline: none;

  &::placeholder {
    color: rgba(245, 245, 245, 0.3);
  }
`

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 18em;

  > div > div {
    padding: 0.8em;
    font-size: 1.2em;
  }
`

const Confirm = styled.button`
  position: relative;
  cursor: pointer;
  margin-top: 1em;
  border: 1px solid ${props => props.color || '#2c3e50'};
  color: ${props => props.color || '#2c3e50'};
  background: transparent;
  outline: none;
  width: 6.5em;
  padding: 0.2em;
  align-self: flex-end;
  font-size: 1.05em;
  font-weight: 300;
  border-radius: 5px;
  transition: 1s cubic-bezier(0.22, 0.61, 0.36, 1) all;

  &:hover {
    transform: scale(1.05);
  }
`

const Label = styled.div`
  padding: 1px;
  padding-right: 0;
  font-size: 0.8em;
`

const slug = text => text.toLowerCase().replace(/ /g, '-')

@observer
export default class CreateCard extends Component {
  @observable username = 'phoomparin'
  @observable name = ''
  @observable displayName = ''
  @observable description = ''
  @action
  setDisplayName = e => {
    const {value} = e.target

    this.name = slug(value)
    this.displayName = value
  }

  @action setName = e => (this.name = e.target.value)

  @action setDesc = e => (this.description = e.target.value)

  @action
  create = async () => {
    const projects = app.service('projects')

    const data = {
      name: this.name,
      displayName: this.displayName,
      description: this.description,
      color: colorize(this.name),
      icon: 'lumbot',
    }

    const result = await projects.create(data)

    console.log('Created Project:', result)
  }

  render() {
    return (
      <CardWrapper>
        <Card color={colorize(this.name)}>
          <Content>
            <Input
              placeholder="Project Name"
              value={this.displayName}
              onChange={this.setDisplayName}
            />
            <Input
              size="0.6em"
              placeholder="Description"
              value={this.description}
              onChange={this.setDesc}
              sub
            />
          </Content>
          <Meta>
            <Label>{this.username}:</Label>
            <Input
              size="0.8em"
              placeholder="Project ID"
              value={this.name}
              onChange={this.setName}
            />
          </Meta>
        </Card>
        <Confirm onClick={this.create} color={colorize(this.name)}>
          Create
          <Ink />
        </Confirm>
      </CardWrapper>
    )
  }
}
