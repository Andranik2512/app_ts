import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';


import styled from 'styled-components'
//Стили
const NavbarWrapper = styled.nav`
width: 100%;
background-color: #171717;
display: flex;
justify-content: space-between;
align-items: center;
padding: 1.5rem 1rem;
z-index: 50;
`
const Logo = styled.h2`
color: #f4f4f4;
font-size: 1.5rem;
cursor: pointer;
`
const WrapperCartShop = styled.ul`
display: flex;
list-style: none;
align-items: center;
`
const CartShopLi = styled.li`
padding-left: 1.5rem;
`
const CartShopSpan = styled.span`
display: flex;
align-items: center;
font-size: 1.5rem;
color: white;
margin-left: 8px;
`

const Navbar: FC = () => {
  return (
    <NavbarWrapper>
      <Logo>
        <Link to='/'>
          APPLE SHOP
        </Link>
      </Logo>
      <WrapperCartShop>
        <CartShopLi>
          <Link to='/cart' >
            <CartShopSpan>
              Cart
            </CartShopSpan>
          </Link>
        </CartShopLi>
        <CartShopLi>
          <Link to='/'>
            <CartShopSpan>Shop</CartShopSpan>
          </Link>
        </CartShopLi>
      </WrapperCartShop>
    </NavbarWrapper>
  );
}

export default Navbar;
