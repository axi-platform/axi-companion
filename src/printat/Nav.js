import React from 'react'
import styled from 'react-emotion'
import {Link} from 'react-static'

import Icon from '../ui/Icon'
import {sm} from '../ui/style'

import pwLogo from '../../assets/pw_logo.svg'

const Logo = styled.img`
  width: 2.5em;
  height: auto;

  opacity: 0.5;
  cursor: pointer;
  vertical-align: middle;

  &:hover {
    opacity: 1;
  }
`

const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  position: relative;
  z-index: 2;

  width: 100%;
  height: 3.5em;

  color: #efefef;
  background: #353e48;

  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
`

const Left = styled.div`
  padding-left: 1.5em;
`

const Right = styled.div`
  padding-right: 1.5em;
`

const Nav = () => (
  <NavContainer>
    <Left>
      <Icon i="pin" />
    </Left>
    <Link to="/printat">
      <Logo src={pwLogo} />
    </Link>
    <Right>
      <Icon i="pin" />
    </Right>
  </NavContainer>
)

export default Nav
