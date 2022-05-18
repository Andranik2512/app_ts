import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components'

//Стили
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
const CartShopBadge = styled.span`
width: 30px;
height: 30px;
background-color: #f4f4f4;
border-radius: 50%;
margin-left: 8px;
color: #171717;
display: flex;
justify-content: center;
align-items: center;
font-size: 1rem;`
const NavbarCartShop: FC = () => {
    return (
        <WrapperCartShop>
            <CartShopLi>
                <Link to='/cart' >
                    <CartShopSpan>
                        Cart
                        <CartShopBadge>
                            0
                        </CartShopBadge>
                    </CartShopSpan>
                </Link>
            </CartShopLi>
            <CartShopLi>
                <Link to='/'>
                    <CartShopSpan>Shop</CartShopSpan>
                </Link>
            </CartShopLi>
        </WrapperCartShop>
    );
}

export default NavbarCartShop;
