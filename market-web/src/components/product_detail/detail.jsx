import React from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./detail.module.css";
import axios from "axios";

import { ProductLineChart } from '../linechart/linechart.jsx';
import { ProductBarChart } from '../barchart/barchart.jsx';
import { PieChartWithGroupedData } from '../piechart/piechart.jsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';

// 제품 리뷰 별점 체크 함수
const Rating = ({ rating }) => {
  const validRating = Math.max(0, Math.min(rating, 5));
  const hasHalfStar = validRating % 1 >= 0.25 && validRating % 1 <= 0.75;
  const fullStars = Math.floor(validRating);
  const emptyStars = Math.max(0, 5 - fullStars - (hasHalfStar ? 1 : 0));

  const fullStarsArray = Array.from({ length: fullStars });
  const emptyStarsArray = Array.from({ length: emptyStars });

  return (
    <div className={styles.rating}>
      {fullStarsArray.map((_, index) => (
        <FontAwesomeIcon key={`full-${index}`} icon={faStar} />
      ))}
      {hasHalfStar && <FontAwesomeIcon key="half" icon={faStarHalfAlt} />}
      {emptyStarsArray.map((_, index) => (
        <FontAwesomeIcon key={`empty-${index}`} icon={faStar} />
      ))}
    </div>
  );
};

export const Detail = ({ convertPrice, cart, setCart }) => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([]);
  const navigate = useNavigate(); // useNavigate 훅

  // 알림 메시지 배열
  const [showAlert, setShowAlert] = useState(false);

  // 데이터 연동
  useEffect(() => {
    axios.get("http://3.34.188.16:8080/api/products/").then((response) => {
      const productData = response.data.find((product) => product.id === parseInt(id));
      setProduct(productData);
      
      if (productData) {
        const related = response.data.filter(p => 
          p.id !== productData.id && 
          p.category_id === productData.category_id && 
          p.brand_id === productData.brand_id
        ).slice(0, 5);
        setRelatedProducts(related);
      }
    });
  }, [id]);

  // 찜목록 기능 
  const handleCart = () => {
    const cartItem = {
      id: product.id,
      image: product.img_url,
      name: product.title,
      provider: product.brand_name,
      price: product.coupon_price
    };
    setCart([...cart, cartItem]);
    setShowAlert(true); // 알림 메시지 표시
    setTimeout(() => setShowAlert(false), 2000); // 2초 후 알림 메시지 숨기기
  };

  // 관련 제품 클릭 함수
  const handleRelatedProductClick = (relatedProductId) => {
    navigate(`/product/${relatedProductId}`);
    window.scrollTo(0, 0);  // 제품 클릭시에 스크롤 맨위로 이동
  };

  return (
    <>
      {/* 알림 메시지 출력 */}
      {showAlert && <div className={styles.alert}>찜목록에 추가되었습니다!</div>}
      
      <main className={styles.main}>
        <section className={styles.product}>
          <div className={styles.product_img}>
            <img src={product.img_url} alt="product_url" />
          </div>
        </section>

        <section className={styles.product}>
          <div className={styles.product_info}>
            
            {/* 브랜드,제품명 */}
            <p className={styles.seller_store}>{product.brand_name}</p>
            <p className={styles.product_name}>{product.title}</p>
            
            {/* 제품 리뷰 별점 */}
            <div className={styles.rating}>
              <span className={styles.rating_line}>리뷰 평점 : {product.rating} </span>
              <Rating rating={product.rating} />
              <span className={styles.rating_line}>{product.review_count}개 상품평</span>
            </div>

            <hr />
            
            {/* 가격 정보 */}
            <span className={styles.price}> 
              <span style={{ fontSize:'20px' }}>출시가 : {' '}</span>
              <span style={{ textDecoration: 'line-through', opacity: 0.4 }}> 
                 {new Intl.NumberFormat().format(product.origin_price)}
              </span>
              <span className={styles.unit}>원 </span>
              <span className={styles.discount_rate}>{product.discount_rate}</span>
              <br />
              
              <span style={{ fontSize:'20px' }}>할인가 : {' '}</span>
              <span style={{color:'red'}}> 
                 {new Intl.NumberFormat().format(product.coupon_price)}
              </span>
              <span className={styles.unit}>원 </span>           
            
            </span>

            <hr />

            {/* 배송일 정보 */}
            <span className={styles.delivery}>
              <img src="/images/icon-calendar.svg" alt="calendar" /> 
              <span className={styles.deliveryText}>배송일 : {product.delivery} </span>
            </span>

            <hr />

            {/* 옵션 정보 */}
            <span className={styles.option}>{product.prod_option}</span>

            {/* 상품설명 정보 */}
            <span className={styles.description}>
              {(product.description || '').split(',').map((line, index) => (
                <p key={index} className={styles.des_line}>· {line}</p>
              ))}
            </span>

            <div className={styles.buttonContainer}>             
              {/* 구매 링크 버튼*/}
              <button 
              className={styles.buyButton} 
              onClick={() => window.open(product.url,'_blank')}>
              구매링크로 이동
              </button>

              {/* 찜목록 버튼 */}
              <button 
              className={styles.favorite} onClick={ () => handleCart()}>
              찜목록 추가
              </button>              
            </div>

          </div>
        </section>
      </main>
      
      <hr />
      
      <div style={{ display: 'flex' }}>
        {/* PieCharts 그래프 */}
        <div style={{ flex: 1 , marginTop: 50 }}>
          <PieChartWithGroupedData productId={id} />
        </div>
        
        {/* LineCharts 그래프 */}
        <div style={{ flex: 6 }}>
          <ProductLineChart productId={id} />
        </div>
      </div>

      <hr />
      
      {/* BarCharts 그래프 */}
      <ProductBarChart productId={id} />

      <hr />
      
      {/* 관련 제품 정보 */}
      <section className={styles.relatedProducts}>
        <h2>관련 제품</h2>
        <div className={styles.relatedProductsList}>
          {relatedProducts.map((relatedProduct) => (
            <div 
              key={relatedProduct.id} 
              className={styles.relatedProduct}
              onClick={() => handleRelatedProductClick(relatedProduct.id)} 
            >
              <img src={relatedProduct.img_url} alt={relatedProduct.title} />
              <p style={{ color:'gray' }}>{relatedProduct.brand_name}</p>
              <p>{relatedProduct.title}</p>
              <p>{new Intl.NumberFormat().format(relatedProduct.coupon_price)}원</p>
            </div>
          ))}
        </div>
      </section>

      <hr />
    </>
  );
};
