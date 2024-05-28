import React from 'react';
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./detail.module.css";
import axios from "axios";

import { Chart } from '../linechart/linechart.jsx'
import { userData } from '../../ChartData.js';

import { BarChart } from '../barchart/barchart.jsx'
import { parseData } from "../../ChartData.js";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt, faStar as farStar } from '@fortawesome/free-solid-svg-icons';

// 제품 리뷰 별점 체크 함수
const Rating = ({ rating }) => {
  const validRating = Math.max(0, Math.min(rating, 5));
  const fullStars = Math.floor(validRating);
  const hasHalfStar = validRating % 1 >= 0.25 && validRating % 1 <= 0.75;
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
        <FontAwesomeIcon key={`empty-${index}`} icon={farStar} />
      ))}
    </div>
  );
};

export const Detail = ( {convertPrice, cart, setCart}) => {
  
  const {id} = useParams();
  const [product, setProduct] = useState({});

  // 데이터 연동
  useEffect(() => {
    axios.get("/data/products.json").then((data) => {
      setProduct(data.data.products.find((product) => product.id === parseInt(id)))
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
  };

  return (
    <>
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
            <p className={styles.rating}>RATING : {product.rating} 
              <Rating rating={product.rating} />
            </p>

            <hr />
            
            {/* 가격 정보 */}
            <span className={styles.price}> 
              Origin Price : {' '}
              <span className={styles.discount_rate}>{product.discount_rate}</span>
              <span style={{ textDecoration: 'line-through', opacity: 0.4 }}> 
                 {new Intl.NumberFormat().format(product.origin_price)}
              </span>
              <span className={styles.unit}>원 </span>
              <br />
              
              Coupon Price : {' '}
              <span style={{color:'red'}}> 
                 {new Intl.NumberFormat().format(product.coupon_price)}
              </span>
              <span className={styles.unit}>원 </span>           
            
            </span>

            <hr />

            {/* 배송일 정보 */}
            <span className={styles.delivery}><img src="/images/icon-calendar.svg" alt="calendar" />배송일: {' '}
              {product.delivery}
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
      
      <hr></hr>
      
      {/* LineCharts 그래프 */}
      <Chart
        data={userData}
        title="Price LineCharts"
        grid
        dataKey="Price"
      ></Chart>

      <hr></hr>

      {/* BarCharts 그래프 */}
      <BarChart
        data={parseData}
        title="Price BarCharts"
        grid
        datekey="date,openClose,highLow"
      ></BarChart>
      
    </>
  );
};
