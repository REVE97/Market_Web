import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./topNavigationBar.module.css";

export const TopNavigationBar = ( {cart} ) => {
  
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  // 검색 엔진 함수
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?query=${searchTerm.trim()}`);
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        
        {/* 홈 화면으로 가는 홈버튼 */}
        <Link to="/">
          <h1 className={styles.logo}>
            <img src="/images/symbol.png" alt="logo" />
          </h1>
        </Link>
        
        {/* 검색 창, 버튼 */}
        <div className={styles.input_wrap}>
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type="submit">
              <img src="/images/icon-search.svg" alt="Search" />
            </button>
          </form>
        </div>
      </div>
   
      <div className={styles.menu}>
        <Link to="/">
          <div className={styles.mypage}>
            <img src="/images/icon-user.svg" alt="user" />
            <span>마이페이지</span>
          </div>
        </Link>

        {/* 찜목록 페이지 */}
        <Link to="/favorite">
          <div className={styles.mypage}>
            <img src="/images/icon-favorite.svg" alt="cart" />
            <span>찜목록</span>
            {cart.length >= 1 ? (
              <div className={styles.new_shopping_cart}>
                <p>{cart.length}</p>
              </div>
            ) : ("")}
          
          </div>
        </Link>

        <Link to="/">
          <div className={styles.mypage}>
            <img src="/images/icon-power.svg" alt="login" />
            <span>로그인</span>
          </div>
        </Link>
      </div>
    </header>
  );
};
