import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import ProductWr from './ProductComponents/ProductWrapper';

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
    <StyledLink to={`/product/${1111}`}>
      <ProductWrapper>
        <img src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-family-hero?wid=940&hei=1112&fmt=png-alpha&.v=1644969385433'
          alt='product name' />
        <ProductWr />
      </ProductWrapper>
    </StyledLink>
  );
}

export default Product;