import React, { FC, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts as listProducts } from '../redux/actions/productActions'
import Product from '../components/Product';
import styled, { ThemeProvider } from 'styled-components'
import './screen.css'
import { BsList } from "react-icons/bs";


const Wrapper = styled.div`
max-width: 1300px;
margin: 1rem auto;
`
const HsProduct = styled.div`
 display: grid;
 grid-template-columns:${({theme})=>theme.list ? 'repeat(1, 1fr)%' : 'repeat(4, 1fr)'} ;
 @media (max-width:1232px) {
  ${({theme})=>theme.list ? 'grid-template-columns: repeat(1, auto)' : 'grid-template-columns: repeat(3, auto)'}
}
@media (max-width:950px) {
  ${({theme})=>theme.list ? 'grid-template-columns: repeat(1, auto)' : 'grid-template-columns: repeat(2, auto)'}
}
@media (max-width:630px) {
    grid-template-columns: 1fr;
}
`
const StyledBsList = styled(BsList)`
width:2rem;
height:2rem;
cursor: pointer;
@media (max-width:630px) {
  width:1.5rem;
height:1.5rem;
}
`



const HomeScreen: FC = () => {
  const [list, setList] = useState(true);
  const dispatch = useDispatch();
  const getProducts = useSelector((state: any) => state.getProducts);
  const { products, loading, error } = getProducts;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);


  return (
    <ThemeProvider theme={{list}}>
       <Wrapper>
        <StyledBsList onClick={() => {setList(!list)
        }} />
        <HsProduct>
          {loading ? (
            <h2>Loading...</h2>
          ) : error ? (
            <h2>{error}</h2>
          ) : (
            products.map((product: any) => (
              <Product
                productId={product._id}
                key={product._id}
                name={product.name}
                description={product.description}
                price={product.price}
                imageUrl={product.imageUrl}
                list={list}
              />
            ))
          )}
        </HsProduct>
      </Wrapper>
    </ThemeProvider>
  );
}

export default HomeScreen;
