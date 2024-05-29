import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { Product } from '../products/product';
import { EventBanner } from "../eventBanner/eventBanner";
import axios from 'axios';
import styles from "../main/main.module.css";

export const FilteredProducts = ({ products, setProducts, convertPrice }) => {
  
  const { categoryId, brand_id } = useParams();
  
  // 검색 엔진 기능
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("query");

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // 페이지에 나타낼 product 제품수 설정

  useEffect(() => {
    axios.get("/data/products.json").then((data) => {
      setProducts(data.data.products);
    });
  }, [setProducts]);

  // 정렬 함수
  const sortProduct = (type) => {
    const newProduct = [...products];
    if (type === "basic") {
      newProduct.sort((a, b) => a.id - b.id);
      setProducts(newProduct);
    } else if (type === "row") {
      newProduct.sort((a, b) => a.origin_price - b.origin_price);
      setProducts(newProduct);
    } else if (type === "high") {
      newProduct.sort((a, b) => b.origin_price - a.origin_price);
      setProducts(newProduct);
    }
  };

  // 필터링된 제품 목록을 생성 ( 사이드바 카테고리 )
  const filteredProducts = products.filter(product => {
    if (query) {
      return product.title.toLowerCase().includes(query.toLowerCase());
    } else if (categoryId) {
      return product.categoryId === parseInt(categoryId, 10);
    } else if (brand_id) {
      return product.brand_id === parseInt(brand_id, 10);
    }
    return false;
  });

  // 현재 페이지에 맞는 제품 리스트를 계산
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);

  // 총 페이지 수 계산
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  // 페이지 변경 함수
  const changePage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <EventBanner />
      <hr></hr><br></br>

      <div className={styles.filter}>
        <p onClick={() => sortProduct("basic")}>기본순</p>
        <p onClick={() => sortProduct("high")}>높은 가격순</p>
        <p onClick={() => sortProduct("row")}>낮은 가격순</p>
      </div>

      <main className={styles.flex_wrap}>
        {currentItems.length > 0 ? (
          currentItems.map((product) => (
            <Product key={product.id} product={product} convertPrice={convertPrice} />
          ))
        ) : (
          <p>제품 리스트가 없습니다.</p>
        )}
      </main>

      {/* 페이지 버튼 구현 */}
      <div className={styles.pagination}>
        {Array.from({ length: totalPages }, (_, index) => (
          <button key={index + 1} onClick={() => changePage(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>
    </>
  );
};


