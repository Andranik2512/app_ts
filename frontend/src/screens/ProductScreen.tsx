import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'
//Стили
const ProductWrapper = styled.div`
    max-width: 1300px;
    margin: 1rem auto;
    display: flex;
    @media (max-width: 960px) {
    flex-direction: column;}`
const ProductLeft = styled.div`
    display: flex;
    flex: 0.8;
    @media (max-width: 960px) {
    flex-direction: column;
      flex: 1;}`
const ProductLeftImg = styled.div`
    margin: 1rem;
    flex: 0.6;
    @media (max-width: 960px) {
    flex: 1;}`
const ProductLeftInfo = styled.div`
    margin: 1rem;
    flex: 0.4;
    background: #fff;
    height: fit-content;
    font-size: 0.9rem;
    p{
       padding: 1rem;
       border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    }
    &:last-child {
      border: none;
    }
    @media (max-width: 960px) {
      flex: 1;}`
const ProductLeftName = styled.p`
    font-weight: bold;
    font-size: 1.3rem;`
const ProductScreenRight = styled.div`
    flex: 0.2;
    @media (max-width: 960px) {
    flex: 1;
    padding: 1rem;}`
const ProductScreenRightInfo = styled.div`
    width: 250px;
    margin: 1rem;
    background: #fff;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
    p{
    padding: 1rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    font-size: 0.8rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);}
    button{
    grid-column: 1/-1;
    width: 100%;
    padding: 10px 16px;
    background: #171717;
    color: #f4f4f4;
    border: 1px solid #171717;
    cursor: pointer;
    border-radius: 5px;}
    select {
    padding: 10px 16px;}
    &:last-child {
    border: none;}
    @media (max-width: 960px) {
    width: 100%;
    margin: 0;}`

const ProductScreen: FC = () => {
  return (
    <ProductWrapper>
      <ProductLeft>
        <ProductLeftImg>
          <img src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-family-hero?wid=940&hei=1112&fmt=png-alpha&.v=1644969385433'
            alt='product name' />
        </ProductLeftImg>
        <ProductLeftInfo>
          <ProductLeftName>Product 1</ProductLeftName>
          <p>Price: $499.99</p>
          <p>Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quibusdam dolorem quia nostrum veritatis adipisci?</p>
        </ProductLeftInfo>
      </ProductLeft>
      <ProductScreenRight>
        <ProductScreenRightInfo>
          <p>
            Price: <span>$499.99</span>
          </p>
          <p>
            Status: <span>In Stock</span>
          </p>
          <p>
            Qty
            <select>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='4'>4</option>
            </select>
          </p>
          <p>
            <button type='button'>Add to Cart</button>
          </p>
        </ProductScreenRightInfo>
      </ProductScreenRight>
    </ProductWrapper>
  );
}

export default ProductScreen;