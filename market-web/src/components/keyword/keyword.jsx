import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const Keyword = () => {
  const [keywords, setKeywords] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    
    // 데이터베이스에서 키워드 목록 가져오기
    axios.get('http://3.34.188.16:8080/api/keywords')
      .then(response => {
        const keywords = response.data;
        
        // count를 기준으로 내림차순 정렬
        keywords.sort((a, b) => b.count - a.count);
        
        // 상위 검색어 가져오기 ( slice (0, n) n의 값 변경하여 상위 갯수 조정 )
        const topKeywords = keywords.slice(0, 10);
        setKeywords(topKeywords);
      })
      .catch(error => {
        console.error("Error fetching keywords:", error);
      });
  }, []); 

  const handleKeywordClick = (keyword) => {
    navigate(`/search?query=${keyword}`);
  };

  const styles = {
    keywordContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '10px',
      padding: '10px',
      backgroundColor: 'white',
      marginTop: '10px',
      marginBottom:'10px',
      marginLeft: '10px',
      boxShadow: '0px 4px 5px rgba(0, 0, 0, 0.1)'
    },
    keywordTitle: {
      fontWeight: 'bold',
      marginTop: '8px'
    },
    keywordButton: {
      padding: '10px 20px',
      border: '1px solid #D5D5D5',
      borderRadius: '20px',
      backgroundColor: 'white',
      color: 'gray',
      cursor: 'pointer',
      transition: 'background-color 0.3s'
    },
    keywordButtonHover: {
      backgroundColor: 'skyblue'
    }
  };

  return (
    <div style={styles.keywordContainer}>
      <span style={styles.keywordTitle}>인기검색어 :</span>
      {keywords.map((keywordObj) => (
        <button
          key={keywordObj.keyword}
          style={styles.keywordButton}
          onMouseOver={(e) => e.target.style.backgroundColor = styles.keywordButtonHover.backgroundColor}
          onMouseOut={(e) => e.target.style.backgroundColor = styles.keywordButton.backgroundColor}
          onClick={() => handleKeywordClick(keywordObj.keyword)}
        >
          {keywordObj.keyword}
        </button>
      ))}
    </div>
  );
};

export default Keyword;
