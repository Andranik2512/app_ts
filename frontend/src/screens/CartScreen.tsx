import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import CartItem from '../components/CartItem';
import { addToCart, removeFromCart } from '../redux/actions/cartActions';



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
  const dispatch = useDispatch();

  const cart = useSelector((state: any) => state.cart)
  const { cartItems } = cart;

  const qtyChangeHandlers = (id:number, qty:number) => {
    dispatch(addToCart(id, qty))
  }

  const removeHandler = (id:number) => {
    dispatch(removeFromCart(id))
  }

const getCartCount = () => {
  return cartItems.reduce((qty:any, item:any) => Number(item.qty) + qty,0);
}

const getCartSubTotal = () => {
  return cartItems.reduce((price:any, item:any) => item.price * item.qty + price, 0);
}


  return (
    <Cartscreen>
      <CartscreenLeft>
        <h2>Shoping Cart</h2>
        {cartItems.length === 0 ? (
          <div>
            Your cart is empty <Link to='/'>Go back</Link>
          </div>
        ) : (
          cartItems.map((item: any) => 
          <CartItem 
           item={item}
           qtyChangeHandler={qtyChangeHandlers}
           removeHandler={removeHandler}
           />)
        )}
      </CartscreenLeft>
      <CartscreenRight>
        <CartscreenInfo>
          <p>Subtotal ({getCartCount()}) items</p>
          <p>${getCartSubTotal().toFixed(2)}</p>
        </CartscreenInfo>
        <div>
          <button>Procrrd To Checkout</button>
        </div>
      </CartscreenRight>

    </Cartscreen>
  );
}

export default CartScreen;
