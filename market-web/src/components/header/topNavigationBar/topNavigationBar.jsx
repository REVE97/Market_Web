import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "./topNavigationBar.module.css";

export const TopNavigationBar = ({ cart }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [keywords, setKeywords] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // 데이터베이스에서 키워드 목록 가져오기
    axios.get('http://3.34.188.16:8080/api/keywords')
      .then(response => {
        const keywords = response.data;
        // count를 기준으로 내림차순 정렬
        keywords.sort((a, b) => b.count - a.count);
        // 상위 5개만 가져오기
        const topKeywords = keywords.slice(0, 5);
        setKeywords(topKeywords); // 상위 5개의 키워드를 상태에 저장
      })
      .catch(error => {
        console.error("Error fetching keywords:", error);
      });
  }, []); // 컴포넌트가 마운트될 때 한 번만 실행

  // 검색 엔진 함수
  const handleSearch = (e) => {
    e.preventDefault();
    const trimmedSearchTerm = searchTerm.trim();

    if (trimmedSearchTerm) {
      // 검색어를 데이터베이스에 저장
      axios.post('http://3.34.188.16:8080/api/keywords', {
        keyword: trimmedSearchTerm
      })
      .then(() => {
        // 검색 결과 페이지로 이동
        navigate(`/search?query=${trimmedSearchTerm}`);
      })
      .catch(error => {
        console.error("Error saving keyword:", error);
      });
    }
  };

  const handleKeywordClick = (keyword) => {
    // 키워드의 이름을 검색어로 설정하고 검색 결과 페이지로 이동
    setSearchTerm(keyword);
    navigate(`/search?query=${keyword}`);
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
        
        {/* 검색 창 버튼 */}
        <div className={styles.input_wrap}>
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="제품명을 검색하시오..."
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
        
        <Link to="/login">
          <div className={styles.mypage}>
            <img src="/images/icon-user.svg" alt="user" />
            <span>로그인</span>
          </div>
        </Link>
        
        <Link to="/signup">
          <div className={styles.mypage}>
            <img src="/images/icon-power.svg" alt="login" />
            <span>회원가입</span>
          </div>
        </Link>
      </div>

      {/* 키워드 버튼 */}
      <div className={styles.keywordContainer}>
        <span style={{ fontWeight:'bold', marginTop:'8px'}}>인기검색어 :</span>
        {keywords.map((keywordObj) => (
          <button
            key={keywordObj.keyword}
            className={styles.keywordButton}
            onClick={() => handleKeywordClick(keywordObj.keyword)}
          >
            {keywordObj.keyword}
          </button>
        ))}
      </div>
    </header>
  );
};

