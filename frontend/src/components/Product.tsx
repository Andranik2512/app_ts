import React, { FC } from 'react';
import { Link } from 'react-router-dom';
// import ProductWr from './ProductComponents/ProductWrapper';

import styled from 'styled-components'
//Стили
const ProductWrapper = styled.div`
width: 300px;
padding: 1rem;
background: #fff;
cursor: pointer;
box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
margin: 8px auto;
display: flex;
justify-content: space-between;
flex-direction: column;
img{
  width: 100%;
  height: 170px;
  object-fit: contain;
  border-radius: 8px;
}
`
const StyledLink = styled(Link)`
color:black;
`
const ProductInWrapper = styled.div`
p{margin-bottom: 8px;}`
const ProductP1 = styled.p`
font-size: 1rem;
overflow: hidden;`
const ProductP2 = styled.p`
font-size: 0.8rem;`
const ProductP3 = styled.p`
font-weight: bold;`
const StyledInLink = styled(Link)`
display: block;
text-align: center;
color: #171717;
width: 100 %;
padding: 8px 16px;
background-color: #f4f4f4;
border: 1px solid black;
fontSize: 1rem;
&:hover {
    background:#171717;
    color:#f4f4f4;
  }
`
//типизация пропсов
interface Productprops {
  imageUrl?: string,
  description?: string,
  price?: number,
  name?: string,
  productId?: number;
}

const Product: FC<Productprops> = ({ imageUrl, description, price, name, productId }) => {
  return (
    <StyledLink to={`/product/${productId}`}>
      <ProductWrapper>
        <img src={imageUrl}
          alt={name} />
        <ProductInWrapper>
          <ProductP1>
            {name}
          </ProductP1>
          <ProductP2>
            {description?.substring(0,100)}...
          </ProductP2>
          <ProductP3>
            ${price}
          </ProductP3>
          <StyledInLink to={`/product/${productId}`}>
            Add to Cart
          </StyledInLink>
        </ProductInWrapper >
      </ProductWrapper>
    </StyledLink>
  );
}

export default Product;
