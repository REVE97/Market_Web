import styles from "./main.module.css";
import { EventBanner } from "../eventBanner/eventBanner";
import { Product } from "../products/product";
import { useEffect, useState } from "react";
import axios from "axios";

export const Main = ({ products, setProducts, convertPrice }) => {
  
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;    // 페이지에 나타낼 product 제품수 설정
  
  // 데이터 입력
  useEffect(() => {                                             
    axios.get("/data/products.json").then((data) => {
      setProducts(data.data.products);
    });
  }, [setProducts]);
  
  // 정렬 함수
  const sortProduct = (type) => {                               
    const newProduct = [...products];
    if ( type === "basic" ) {
      newProduct.sort(( a, b ) => a.id - b.id);
      setProducts(newProduct);
    } else if ( type === "row" ) {
      newProduct.sort(( a, b ) => a.origin_price - b.origin_price);
      setProducts(newProduct);
    } else if ( type === "high" ) {
      newProduct.sort(( a, b ) => b.origin_price - a.origin_price);
      setProducts(newProduct);
    }
  }

  // 페이지 변경 함수
  const changePage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  
  // 현재 페이지에 맞는 제품 리스트를 계산
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

  // 총 페이지 수 계산
  const totalPages = Math.ceil(products.length / itemsPerPage);

  return (
    <>
      <EventBanner />
      <hr></hr><br></br>
      
      <div className={styles.filter}>
        <p onClick={()=> sortProduct("basic")}>기본순</p>
        <p onClick={()=> sortProduct("high")}>높은 가격순</p>
        <p onClick={()=> sortProduct("row")}>낮은 가격순</p>
      </div>
      
      <main className={styles.flex_wrap}>
        {currentItems.map((product) => {
          return <Product key={product.id} product={product} convertPrice={convertPrice} />
        })}
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
