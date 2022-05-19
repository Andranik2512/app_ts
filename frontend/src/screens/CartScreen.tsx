import React, { FC } from 'react';
import styled from 'styled-components'
import CartItem from '../components/CartItem';

const Cartscreen = styled.div`
display: flex;
max-width: 1300px;
margin: 2rem auto;
h2{
  margin-bottom: 1rem;
}
@media (max-width: 1320px) {
    max-width: 900px;
}
@media (max-width: 960px) {
  max-width: 800px;
}
@media (max-width: 960px) {
  flex-direction: column;
}`
const CartscreenLeft = styled.div`
    flex: 0.7;
    margin-right: 1rem;
    background-color: transparent;
    padding: 1rem;`
const CartscreenRight = styled.div`
    flex: 0.3;
    background: #fff;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
    height: fit-content;
    div {
      border-bottom: 1px solid rgba(0, 0, 0, 0.2);
      padding: 1rem;
      &:last-child {
        border: none;
      }
      button {
        padding: 10px 17px;
        width: 100%;
        background: #171717;
        color: #f4f4f4;
        border: 1px solid #171717;
        cursor: pointer;
        &:hover {
          opacity: 0.9;
        }
    }
    @media (max-width: 960px) {
      margin: 1rem;
    }`
const CartscreenInfo = styled.div`
p {
  padding: 8px;
}
&:first-child {
  font-weight: bold;
}`



const CartScreen: FC = () => {
  return (
<Cartscreen>
  <CartscreenLeft>
    <h2>Shoping Cart</h2>

    <CartItem/>
    <CartItem/>
    <CartItem/>
    <CartItem/>
    
  </CartscreenLeft>
<CartscreenRight>
  <CartscreenInfo>
     <p>Subtotal (0) items</p>
     <p>$499.99</p>
  </CartscreenInfo>
  <div>
    <button>Procrrd To Checkout</button>
  </div>
</CartscreenRight>

</Cartscreen>
  );
}

export default CartScreen;
