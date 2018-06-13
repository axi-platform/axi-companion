import React from 'react'
import styled from 'react-emotion'

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

const services = [
  {
    id: 'phoomparin:printat',
    name: 'PrintAt',
    desc: 'Print Anywhere, Instantly. The Next Generation Print Shop Service.',
    color: 'linear-gradient(45deg, #d4145a, #fbb03b)',
    icon: require('../assets/wizbot.png'),
  },
  {
    id: 'phoomparin:hotelsuite',
    name: 'HotelSuite',
    desc: 'Check-in to a hotel room and control them within a tap.',
    color: 'linear-gradient(45deg, #f24645, #ebc08d)',
    icon: require('../assets/archbot.png'),
  },
  {
    id: 'phoomparin:eventclub',
    name: 'EventClub',
    desc: 'Host a local event with your communities and get to know others.',
    color: 'linear-gradient(45deg, #662d8c, #ed1e79)',
    icon: require('../assets/lumbot.png'),
  },
  {
    id: 'phoomparin:tales',
    name: 'Tales',
    desc: 'Everyone has a story to tell. Step up and let the world know!',
    color: 'linear-gradient(45deg, #4f00bc, #29abe2)',
    icon: require('../assets/solbot.png'),
  },
  {
    id: 'phoomparin:ifttt-portal',
    name: 'IFTTT Portal',
    desc: 'Directly access IFTTT services and applets from Axi.',
    color: 'linear-gradient(45deg, #3a3897, #a3a1ff)',
    icon: require('../assets/archbot.png'),
  },
]

const Dashboard = () => (
  <div>
    <Toolbar title="Dashboard" />
    <Container>
      <Directory services={services} />
    </Container>
  </div>
)

export default Dashboard
