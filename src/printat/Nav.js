import React from 'react'
import styled from 'react-emotion'
import {Link} from 'react-static'

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
  justify-content: center;

  width: 100%;
  height: 3.5em;

  color: #efefef;
  background: #353e48;

  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;

  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
`

const Nav = () => (
  <NavContainer>
    <Link to="/printat">
      <Logo src={pwLogo} />
    </Link>
  </NavContainer>
)

export default Nav
