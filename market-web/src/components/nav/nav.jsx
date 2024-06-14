import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// 내부 CSS
const NavContainer = styled.div`
  display: flex;
  gap: 1rem;
  padding: 1rem;
  background-color: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Product = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  background-color: #ffffff;
  border: 1px solid #dee2e6;
  border-radius: 4px;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.1);
  }
`;

const ProductName = styled.span`
  margin-left: 10px;
  font-weight: bold;
  color: #343a40;
`;

const DiscountRate = styled.span`
  margin-left: 10px;
  color: #ff6b6b;
  font-size: 10px;
`;

const Review = styled.span`
  color: #ff6b6b;
  font-size: 10px;
  color: blue;
`;

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

  // 상품평이 많은 순으로 제품 추출 및 중복 타이틀 제거
  const topDiscountProducts = Array.from(
    new Set(products.map(product => product.title))
  )
  .map(title => products.find(product => product.title === title))
  .sort((a, b) => b.review_count - a.review_count)
  .slice(0, 5);

  return (
    <NavContainer>
      {topDiscountProducts.map((product) => (
        <Product key={product.id}>
          <Review>{product.review_count}개 상품평</Review>
          <DiscountRate>{product.discount_rate}</DiscountRate>
          <ProductName>{product.name}</ProductName>
          <ProductLink to={`/product/${product.id}`}>{product.title}</ProductLink>
        </Product>
      ))}
    </NavContainer>
  );
}

export default Nav;
