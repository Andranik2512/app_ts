import React, { FC, useState } from 'react';
import styled from 'styled-components'
import Product from '../components/Navbar/Product';
import { BsList } from "react-icons/bs";
// import HSProduct from './HSProduct';

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
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </HsProduct>

    </Wrapper>
  );
}

export default HomeScreen;
