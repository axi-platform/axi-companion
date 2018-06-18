import React, {Component} from 'react'
import Ink from 'react-ink'
import {observable, action} from 'mobx'
import {observer} from 'mobx-react'

import {Grid, Row, Card, Content, Meta, Adder, AdderRing, Small} from './Card'
import Create from './Create'

import Modal from '../ui/Modal'
import Icon from '../ui/Icon'

import toColor from '../utils/color'

export const ServiceCard = data => (
  <Card color={data.color || toColor(data.name)} to={data.to}>
    <Content>
      <Ink />
      {data.displayName}
      <Small>{data.description}</Small>
      {data.icon && (
        <img src={require(`../../assets/${data.icon}.png`)} alt="" />
      )}
    </Content>
    <Meta>{data.name}</Meta>
  </Card>
)

export const Add = ({onClick}) => (
  <Adder color="linear-gradient(45deg, #d4145a, #fbb03b)" onClick={onClick}>
    <Icon i="add" size={1.25} />
    <AdderRing color="#e74c3c" />
    <Ink background opacity={0.15} />
  </Adder>
)

export {Grid, Row} from './Card'

@observer
export default class Directory extends Component {
  @observable open = false

  @action toggleOpen = () => (this.open = !this.open)

  render() {
    const {projects} = this.props

    return (
      <Grid>
        {projects.map(item => (
          <Row key={item.id}>
            <ServiceCard to={`/project/${item.id}`} {...item} />
          </Row>
        ))}
        <Row>
          <Add onClick={this.toggleOpen} />
        </Row>
        <Modal open={this.open} onClose={this.toggleOpen}>
          <Create />
        </Modal>
      </Grid>
    )
  }
}
