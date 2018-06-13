import React from 'react'
import styled from 'react-emotion'
import {Link} from 'react-static'

import {font} from '../core/style'

const View = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`

const Text = styled.div`
  font-family: ${font};
  font-weight: 300;
  font-size: 2em;
  color: #333;
`

const Anchor = styled(Link)`
  display: flex;
  justify-content: center;
  margin-top: 1em;

  text-decoration: none;
  font-size: 1.2em;
  color: #8e44ad;
`

export default () => (
  <View>
    <Text>
      Axi Platform is coming to town!
      <Anchor to="/dashboard">Explore.</Anchor>
    </Text>
  </View>
)
