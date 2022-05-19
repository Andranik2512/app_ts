import React, { FC } from 'react';
import styled from 'styled-components'
import CartItem from '../components/CartItem';

const Cartscreen = styled.div`
`
const CartscreenLeft = styled.div`
`
const CartscreenRight = styled.div`
`
const CartscreenInfo = styled.div`
`



const CartScreen: FC = () => {
  return (
<Cartscreen>
  <CartscreenLeft>
    <h2>Shoping Cart</h2>

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
