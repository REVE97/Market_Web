import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// CSS
const NavContainer = styled.div`
  display: flex;
  gap: 1rem;
  padding: 1rem;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Product = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  background-color: #ffffff;
  border: 1px solid #D5D5D5;
  border-radius: 20px;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.1);
  }
`;

const ProductName = styled.span`
  font-weight: bold;
  color: #343a40;
  margin-left: 10px;
`;

const DiscountRate = styled.span`
  color: #ff6b6b;
  font-size: 10px;
`;

// const Review = styled.span`
//   color: #ff6b6b;
//   font-size: 10px;
//   color: blue;
// `;

const ProductLink = styled(Link)`
  text-decoration: none;
  color: gray;
  font-weight: bold;
  font-size: 10px;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: #0056b3;
  }
`;

export const Nav = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://3.34.188.16:8080/api/products/").then((response) => {
      setProducts(response.data);
    });
  }, []);

  // lowestPrice가 true인 제품들을 필터링하고 review_count로 정렬
  const filteredProducts = products
    .filter(product => product.lowestPrice)
    .sort((a, b) => b.review_count - a.review_count);

  // brand_id가 중복되지 않도록 선택
  const topLowestPriceProducts = Array.from(
    new Set(filteredProducts.map(product => product.brand_id))
  )
  .map(brand_id => filteredProducts.find(product => product.brand_id === brand_id))
  .slice(0, 5);

  return (
    <NavContainer>
      <p style={{ fontWeight:'bold', marginLeft:'3px', marginTop:'4px' }}>역대최저가 : </p>
      {topLowestPriceProducts.map((product) => (
        <Product key={product.id}>
          {/* <Review>{product.review_count}개 상품평</Review> */}
          <DiscountRate>{product.discount_rate}</DiscountRate>
          <ProductName>{product.name}</ProductName>
          <ProductLink to={`/product/${product.id}`}>{product.title}</ProductLink>
        </Product>
      ))}
    </NavContainer>
  );
}

export default Nav;