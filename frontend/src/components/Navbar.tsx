import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import NavbarCartShop from './NavbarComponents/NavbarCartShop';
import NavLogo from './NavbarComponents/NavLogo';

import styled from 'styled-components'

const NavbarWrapper = styled.nav`
width: 100%;
background-color: #171717;
display: flex;
justify-content: space-between;
align-items: center;
padding: 1.5rem 1rem;
z-index: 50;
`
const Navbar: FC = () => {
  return (
    <NavbarWrapper>
      <NavLogo />
      <NavbarCartShop />
    </NavbarWrapper>
  );
}

export default Navbar;
