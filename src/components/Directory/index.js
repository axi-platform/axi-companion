import React from 'react'
import Ink from 'react-ink'
import {Link} from 'react-static'

import {Grid, Row, Card, Content, Meta, Adder, AdderRing, Small} from './Card'
import Create from './Create'

import Modal from '../Modal'
import Icon from '../Icon'

import toColor from '../../core/color'

export const ServiceCard = ({id, to, color, name, desc, icon}) => (
  <Card color={color || toColor(id)} to={to}>
    <Content>
      <Ink />
      {name}
      {desc && <Small>{desc}</Small>}
      {icon && <img src={icon} alt="" />}
    </Content>
    <Meta>{id}</Meta>
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

const Directory = ({open, services = [], toggleOpen}) => (
  <Grid>
    {services.map(item => (
      <Row key={item.id}>
        <ServiceCard to={`/service?id=${item.id}`} {...item} />
      </Row>
    ))}
    <Row>
      <Add onClick={toggleOpen} />
    </Row>
    <Modal open={open} onClose={toggleOpen}>
      <Create />
    </Modal>
  </Grid>
)

export default Directory
