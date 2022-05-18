import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const ProductWrapper = styled.div`
p{margin-bottom: 8px;}`
const ProductP1 = styled.p`
font-size: 1rem;
overflow: hidden;`
const ProductP2 = styled.p`
font-size: 0.8rem;`
const ProductP3 = styled.p`
font-weight: bold;`

const ProductWr: FC = () => {
    return (
        <ProductWrapper>
            <ProductP1>
                Product 1
            </ProductP1>
            <ProductP2>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, vero minus aut laudantium doloremque fugit!
            </ProductP2>
            <ProductP3>
                $499.99
            </ProductP3>
            <Link
                style={{
                    display: 'block',
                    textDecoration: 'none',
                    textAlign: 'center',
                    color: '#171717',
                    width: '100 %',
                    padding: '8px 16px',
                    backgroundColor: '#f4f4f4',
                    border: '1px solid black',
                    fontSize: '1rem',
                }}
                to={`/product/${1111}`} >
                View
            </Link>


        </ProductWrapper >
    );
}

export default ProductWr;
