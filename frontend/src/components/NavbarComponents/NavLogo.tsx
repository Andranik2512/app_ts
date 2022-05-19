import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components'


const Logo = styled.h2`
color: #f4f4f4;
font-size: 1.5rem;
cursor: pointer;
`

const NavLogo: FC = () => {
  return (
  <Logo>
    <Link to='/'>
    APPLE SHOP
    </Link>
  </Logo>
  );
}

export default NavLogo;
