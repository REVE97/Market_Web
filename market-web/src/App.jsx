import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TopNavigationBar } from "./components/header/topNavigationBar/topNavigationBar";
import Home from "./pages/home";
import Product from "./pages/product";
import { Sidebar } from "./components/sidebar/sidebar.jsx";
import { useState } from "react";
import { FilteredProducts } from "./components/filteredProducts/filteredProducts.jsx";

function App() {
  
  const [products, setProducts] = useState([]);
  const convertPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");   // 천원 단위로 가격표시
  }

  return (
    <BrowserRouter>
    
        <TopNavigationBar />
        
        <hr></hr><br></br>
      
      <div className="container">
        <Sidebar />
          
        <div className="others">
        <Routes>
          
          {/* 기본 메인 페이지 */}
          <Route path="/" element={
          <Home 
            products = {products} 
            setProducts = {setProducts} 
            convertPrice = {convertPrice} />
          } 
          />
          
          {/* 제품 상세 페이지 */}
          <Route path="/product/:id" element={<Product />} />

          {/* 제품 종류별 카테고리 */}
          <Route path="/:category" element={
              <FilteredProducts
               products={products} 
               setProducts={setProducts} 
               convertPrice={convertPrice} />} 
          />
          
          {/* 제품 브랜드별 카테고리 */}
          <Route path="/provider/:provider" element={
              <FilteredProducts 
                products={products} 
                setProducts={setProducts} 
                convertPrice={convertPrice} />} 
          />

          {/* 데이터의 name 필드 값 검색기능 */}
          <Route path="/search" element={
              <FilteredProducts 
                products={products} 
                setProducts={setProducts} 
                convertPrice={convertPrice} />
            } 
            />

        </Routes>
        </div>

      </div>
      
    </BrowserRouter>
  );
}

export default App;
