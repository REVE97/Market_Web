import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TopNavigationBar } from "./components/header/topNavigationBar/topNavigationBar";
import Home from "./pages/home";
import Product from "./pages/product";
import { Nav } from "./components/nav/nav.jsx";
import { Sidebar } from "./components/sidebar/sidebar.jsx";

function App() {
  return (
    <BrowserRouter>
      <div className="others">
        <TopNavigationBar />
        <Nav />
      </div>
  
      
      <div className="container">
        <Sidebar />
      </div>

      <div className="others">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<Product />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
