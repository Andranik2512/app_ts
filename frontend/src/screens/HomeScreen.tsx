import React, { FC, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts as listProducts } from '../redux/actions/productActions'
import Product from '../components/Product';
import styled from 'styled-components'
import { BsList } from "react-icons/bs";


const Wrapper = styled.div`
max-width: 1300px;
margin: 1rem auto;
`
const HsProduct = styled.div`
 display: grid;
 grid-template-columns: repeat(4, 1fr);
 @media (max-width:1232px) {
    grid-template-columns: repeat(3, auto);
}
@media (max-width:950px) {
    grid-template-columns: repeat(2, auto);
}
@media (max-width:630px) {
    grid-template-columns: 1fr;
}`
//список
// const List = styled.div`
// display:inline-block;
// width: 100%;`

const HomeScreen: FC = () => {
  const [list, setList] = useState(true);

  const dispatch = useDispatch();

  const getProducts = useSelector((state: any) => state.getProducts);
  const { products, loading, error } = getProducts;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <Wrapper>
      <div>
        <BsList style={{
          width: '3rem',
          height: '3rem'
        }}
          onClick={() => setList(!list)}>
        </BsList>
      </div>
      <HsProduct>
        {loading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          products.map((product:any) => (
            <Product
            productId={product._id}
            key={product._id}
            name={product.name}
            description={product.description}
            price={product.price}
            imageUrl={product.imageUrl}
            />
          ))
        )}

      </HsProduct>

    </Wrapper>
  );
}

export default HomeScreen;
