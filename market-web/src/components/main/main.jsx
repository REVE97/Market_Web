import styles from "./main.module.css";
import { Product } from "../products/product";
import { useEffect, useState } from "react";
import axios from "axios";

export const Main = ({ products, setProducts, convertPrice }) => {
  
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;    // 페이지에 나타낼 product 제품수 설정
  
  const [pageChunk, setPageChunk] = useState(0);
  const pagesPerChunk = 10;  // 페이지 청크당 페이지 수
  const [pageInput, setPageInput] = useState('');

  // 데이터 입력
  useEffect(() => {                                             
    axios.get("http://3.34.188.16:8080/api/products/").then((response) => {
      setProducts(response.data);
    });
  }, [setProducts]);

  // 페이지 청크 변경 시 현재 페이지 업데이트
  useEffect(() => {
    setCurrentPage(pageChunk * pagesPerChunk + 1);
  }, [pageChunk]);
  
  // 정렬 함수
  const sortProduct = (type) => {                               
    const newProduct = [...products];
    if ( type === "basic" ) { // 기본순
      newProduct.sort(( a, b ) => a.id - b.id);
      setProducts(newProduct);
    } else if ( type === "row" ) {  // 현재 가격 낮은순
      newProduct.sort(( a, b ) => a.coupon_price - b.coupon_price);
      setProducts(newProduct);
    } else if ( type === "high" ) { // 현재 가격 높은순
      newProduct.sort(( a, b ) => b.coupon_price - a.coupon_price);
      setProducts(newProduct);
    } else if ( type === "price_change_rate_high" ) {   // 변동가격 높은순
      newProduct.sort(( a, b ) => b.price_change_rate - a.price_change_rate);
      setProducts(newProduct);
    } else if ( type === "price_change_rate_low" ) {    // 변동가격 낮은순
      newProduct.sort(( a, b ) => a.price_change_rate - b.price_change_rate);
      setProducts(newProduct);
    }
  }

  // 페이지 변경 함수
  const changePage = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
      setPageChunk(Math.floor((pageNumber - 1) / pagesPerChunk));
    }
  };

  // 사용자 페이지 입력 버튼 함수
  const handlePageInputChange = (e) => {
    setPageInput(e.target.value);
  };

  const handlePageInputSubmit = () => {
    const pageNumber = parseInt(pageInput, 10);
    if (!isNaN(pageNumber) && pageNumber > 0 && pageNumber <= totalPages) {
      changePage(pageNumber);
    } else {
      alert(`페이지 번호는 1과 ${totalPages} 사이여야 합니다.`);
    }
    setPageInput('');
  };
  
  // 현재 페이지에 맞는 제품 리스트를 계산
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

  // 총 페이지 수 계산
  const totalPages = Math.ceil(products.length / itemsPerPage);
  const totalChunks = Math.ceil(totalPages / pagesPerChunk);

  // 현재 페이지 청크 내에서 시작 페이지와 끝 페이지를 계산
  const startPage = pageChunk * pagesPerChunk + 1;
  const endPage = Math.min(startPage + pagesPerChunk - 1, totalPages);

  // 다음 페이지 청크로 이동
  const nextChunk = () => {
    setPageChunk(prev => Math.min(prev + 1, totalChunks - 1));
  };

  // 이전 페이지 청크로 이동
  const prevChunk = () => {
    setPageChunk(prev => Math.max(prev - 1, 0));
  };

  return (
    <>
      <p>현재페이지 : {currentPage} {'|'} 총페이지 : {totalPages}</p>
      
      <div className={styles.filter}>
        <p onClick={()=> sortProduct("price_change_rate_low")}>할인 가격률 변동순</p>
        <p onClick={()=> sortProduct("high")}>현재 가격 높은순</p>
        <p onClick={()=> sortProduct("row")}>현재 가격 낮은순</p>
      </div>
      
      <main className={styles.flex_wrap}>
        {currentItems.map((product) => {
          return <Product key={product.id} product={product} convertPrice={convertPrice} />
        })}
      </main>

      {/* 페이지 버튼 구현 */}
      <div className={styles.pagination}>
        
        {pageChunk > 0 && <button onClick={prevChunk}>이전</button>}
        
        {Array.from({ length: endPage - startPage + 1 }, (_, index) => (
          <button key={startPage + index} onClick={() => changePage(startPage + index)}>
            {startPage + index}
          </button>
        ))}
        
        {pageChunk < totalChunks - 1 && <button onClick={nextChunk}>다음</button>}

        {/* 사용자 페이지 번호 입력 이동 버튼 */}
        <div className={styles.pageInput}>
          <input 
            type="number" 
            min="1"
            max={totalPages}
            value={pageInput} 
            onChange={handlePageInputChange} 
            placeholder="페이지 번호 입력" 
          />
          <button onClick={handlePageInputSubmit}>이동</button>
        </div>
      </div>
      
    </>
  );
};

