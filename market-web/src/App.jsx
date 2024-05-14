import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TopNavigationBar } from "./components/header/topNavigationBar/topNavigationBar";
import Home from "./pages/home";
import Product from "./pages/product";
import { Sidebar } from "./components/sidebar/sidebar.jsx";
import { useState } from "react";
// import { Nav } from "./components/nav/nav.jsx";  // 상단 네이게이션 바 

function App() {
  
  const [products, setProducts] = useState([]);

  return (
    <BrowserRouter>
    
        <TopNavigationBar />
        {/* <Nav /> */}
        <hr></hr><br></br>
      
      <div className="container">
        <Sidebar />
          
        <div className="others">
        <Routes>
          <Route path="/" element={<Home products = {products} setProducts = {setProducts} />} />
          <Route path="/product/:id" element={<Product />} />
        </Routes>
        </div>

      </div>
      
    </BrowserRouter>
  );
}

export default App;
