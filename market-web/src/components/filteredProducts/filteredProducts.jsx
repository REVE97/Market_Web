import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { Product } from '../products/product';
// import { EventBanner } from "../eventBanner/eventBanner";
import axios from 'axios';
import styles from "../main/main.module.css";

export const FilteredProducts = ({ products, setProducts, convertPrice }) => {
  
  const { category_id, brand_id } = useParams();
  
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("query");

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9; // 페이지에 나타낼 product 제품수 설정

  const [pageChunk, setPageChunk] = useState(0);
  const pagesPerChunk = 20; // 페이지 청크당 페이지 수

  useEffect(() => {
    axios.get("http://3.34.188.16:8080/api/products/").then((response) => {
      setProducts(response.data);
    });
  }, [setProducts]);

  useEffect(() => {
    setCurrentPage(pageChunk * pagesPerChunk + 1);
  }, [pageChunk]);

  const sortProduct = (type) => {
    const newProduct = [...products];
    if (type === "basic") {
      newProduct.sort((a, b) => a.id - b.id);
      setProducts(newProduct);
    } else if (type === "row") { // 현재 가격 낮은순
      newProduct.sort((a, b) => a.coupon_price - b.coupon_price);
      setProducts(newProduct);
    } else if (type === "high") { // 현재 가격 높은순
      newProduct.sort((a, b) => b.coupon_price - a.coupon_price);
      setProducts(newProduct);
    } else if ( type === "price_change_rate_high" ) {   // 변동가격 높은순
      newProduct.sort(( a, b ) => b.price_change_rate - a.price_change_rate);
      setProducts(newProduct);
    } else if ( type === "price_change_rate_low" ) {    // 변동가격 낮은순
      newProduct.sort(( a, b ) => a.price_change_rate - b.price_change_rate);
      setProducts(newProduct);
    }
  };

  const filteredProducts = products.filter(product => {
    if (query) {
      return product.title.toLowerCase().includes(query.toLowerCase());
    } else if (category_id) {
      return product.category_id === parseInt(category_id, 10);
    } else if (brand_id) {
      return product.brand_id === parseInt(brand_id, 10);
    }
    return false;
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const totalChunks = Math.ceil(totalPages / pagesPerChunk);

  const changePage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const nextChunk = () => {
    setPageChunk(prev => Math.min(prev + 1, totalChunks - 1));
  };

  const prevChunk = () => {
    setPageChunk(prev => Math.max(prev - 1, 0));
  };

  const startPage = pageChunk * pagesPerChunk + 1;
  const endPage = Math.min(startPage + pagesPerChunk - 1, totalPages);

  return (
    <>
      {/* <EventBanner />
      <hr></hr><br></br> */}

      <div className={styles.filter}>
        <p onClick={()=> sortProduct("price_change_rate_low")}>할인 가격률 변동순</p>       
        <p onClick={() => sortProduct("high")}>현재 가격 높은순</p>
        <p onClick={() => sortProduct("row")}>현재 가격 낮은순</p>
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

      <div className={styles.pagination}>
        {pageChunk > 0 && <button onClick={prevChunk}>이전</button>}
        
        {Array.from({ length: endPage - startPage + 1 }, (_, index) => (
          <button
            key={startPage + index}
            onClick={() => changePage(startPage + index)}
          >
            {startPage + index}
          </button>
        ))}
        
        {pageChunk < totalChunks - 1 && <button onClick={nextChunk}>다음</button>}
      </div>
    </>
  );
};
