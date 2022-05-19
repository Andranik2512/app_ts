import React, { FC } from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const Cartitem = styled.div`
width: 100%;
padding: 1rem;
display: grid;
grid-template-columns: 1fr 4fr 1fr 1fr 1fr;
gap: 8px;
background: #fff;
border-radius: 2px;
place-items: center;
margin-bottom: 8px;`
const CartitemImg = styled.div`
`
const StyledLink = styled(Link)`
text-decoration: none;
color: #171717;
&:hover {
    color: #dd219e;
  }
  @media (max-width: 700px) {
      font-size: 0.8rem;
    }
    @media (max-width: 500px) {
        font-size: 0.6rem;
      }`
const CartitemPrice = styled.p`
@media (max-width: 700px) {
    font-size: 0.8rem;
}
@media (max-width: 500px) {
    font-size: 0.6rem;
}`
const CartitemSelect = styled.select`
padding: 10px 17px;
@media (max-width: 700px) {
    padding: 8px 13px;
}
@media (max-width: 500px) {
    padding: 5px 8px;
}`
const CartitemDeleteBtn = styled.button`
padding: 10px 17px;
color: red;
background: #f4f4f4;
border: 1px solid #171717;
cursor: pointer;
transition: all 0.3s ease-out;
&:hover, :active, :focus{
    background: #171717;
    transform: scale(1.2);
}
@media (max-width: 700px) {
    padding: 8px 13px;
}
@media (max-width: 500px) {
    padding: 5px 8px;
}`
const CartItem: FC = () => {
    return (
        <Cartitem>
            <CartitemImg>
                <img src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-family-hero?wid=940&hei=1112&fmt=png-alpha&.v=1644969385433'
                    alt='product name' />
            </CartitemImg>
            <StyledLink to={'/product/${111}'}>
                <p>Product 1</p>
            </StyledLink>
            <CartitemPrice>$499.99</CartitemPrice>
            <CartitemSelect>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
            </CartitemSelect>
            <CartitemDeleteBtn>
                <i className='fas fa-trash'></i>
            </CartitemDeleteBtn>
        </Cartitem>
    );
}
export default CartItem;
