import React, { FC, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//Actions
import { getProductDetails } from '../redux/actions/productActions';
import { addToCart } from '../redux/actions/cartActions';
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

    // interface Props {
    //   match?: any
    //   history?:any
    // }

const ProductScreen: FC = () => {

const [qty, setQty] = useState(1);
const pathname = window.location.href;
const arr = pathname.split("/");
const prodId = arr[arr.length-1];

const productDetails = useSelector((state:any) => state.getProductDetails);
const { loading, error, product } = productDetails;

const dispatch = useDispatch();

useEffect(() => {
  if (product && prodId !== product._id) {
    dispatch(getProductDetails(prodId));
  }
}, [dispatch, product]);

const addToCartHandler = () => {
  dispatch(addToCart(product._id, qty));
};


  return (
    <ProductWrapper>
      {loading ? <h2>Loading...</h2> : error ? <h2>{error}</h2> : (
        <>
        <ProductLeft>
        <ProductLeftImg>
          <img src={product.imageUrl}
            alt={product.name} />
        </ProductLeftImg>
        <ProductLeftInfo>
          <ProductLeftName>{product.name}</ProductLeftName>
          <p>Price: ${product.price}</p>
          <p>Decscription: {product.decoration}</p>
        </ProductLeftInfo>
      </ProductLeft>
      <ProductScreenRight>
        <ProductScreenRightInfo>
          <p> Price: <span>${product.price}</span></p>
          <p> Status: <span>{product.countInStock > 0 ? "In Stock" : "Out of Stock"}</span></p>
          <p>
            qty
            <select value={qty} onChange={(e) => setQty((e.target as any).value)}>
            {[...Array(product.countInStock).keys()].map((x) => (
              <option key={x+1} value={x+1}>{x+1}</option>
            ))}
            </select>
          </p>
          <p>
            <button type='button' onClick={addToCartHandler}>
              <Link to={"/cart"}>
              Add to Cart
              </Link>
              </button>
          </p>
        </ProductScreenRightInfo>
      </ProductScreenRight>
        </>
      )}
      
    </ProductWrapper>
  );
}

export default ProductScreen;