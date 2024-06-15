import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TopNavigationBar } from "./components/header/topNavigationBar/topNavigationBar";
import { Sidebar } from "./components/sidebar/sidebar.jsx";
import { useState } from "react";
import { FilteredProducts } from "./components/filteredProducts/filteredProducts.jsx";
import { Nav } from "./components/nav/nav.jsx";
import { Login } from "./components/login/login.jsx";
import { Signup } from "./components/signup/signup.jsx";
import Home from "./pages/home";
import Product from "./pages/product";
import Basket  from "./pages/basket.jsx";

function App() {
  
  const [products, setProducts] = useState([]);
  const convertPrice = (origin_price) => {
    return origin_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");   // 천원 단위로 가격표시
  }

  const [cart, setCart] = useState([]);

  return (
    <BrowserRouter>
    
        <TopNavigationBar cart={cart} />

        <hr />

        <Nav />
  
        <hr /><br></br>
      
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
          <Route path="/product/:id" element={<Product cart={cart} setCart={setCart} />} />

          {/* 제품 종류별 카테고리 */}
          <Route path="/categoryId/:category_id" element={
              <FilteredProducts
               products={products} 
               setProducts={setProducts} 
               convertPrice={convertPrice} />} 
          />
          
          {/* 제품 브랜드별 카테고리 */}
          <Route path="/brand_id/:brand_id" element={
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

          {/* 찜목록 페이지 생성 */}
          <Route path="/favorite" element={
          <Basket cart={cart} setCart={setCart} convertPrice={convertPrice} />} 
          />
          
          {/* 로그인 페이지 생성 */}
          <Route path="/login" element={
            <Login /> }
          />
          
          {/* 회원가입 페이지 생성 */}
          <Route path="/signup" element={
            <Signup /> }
          />

        </Routes>

        </div>

      </div>
      
    </BrowserRouter>
  );
}

export default App;
