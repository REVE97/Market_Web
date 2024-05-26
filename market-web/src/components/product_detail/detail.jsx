import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./detail.module.css";
import axios from "axios";

import { Chart } from '../linechart/linechart.jsx'
import { userData } from '../../ChartData.js';

import { BarChart } from '../barchart/barchart.jsx'
import { parseData } from "../../ChartData.js";

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
      image: product.image,
      name: product.name,
      provider: product.provider,
      price: product.price
    };
    setCart([...cart, cartItem]);
  };

  return (
    <>
      <main className={styles.main}>
        <section className={styles.product}>
          <div className={styles.product_img}>
            <img src={product.image} alt="product" />
          </div>
        </section>
        <section className={styles.product}>
          <div className={styles.product_info}>
            <p className={styles.seller_store}>{product.provider}</p>
            <p className={styles.product_name}>{product.name}</p>
            <span className={styles.price}>
              Cost Price : {new Intl.NumberFormat().format(product.price)}
              <span className={styles.unit}>원</span>
            </span>
        
            {/* 구매 링크 버튼*/}
            <button 
            className={styles.buyButton} 
            onClick={() => window.location.href = "http://coupang.com"}>
            구매하기
            </button>

            {/* 찜목록 버튼 */}
            <button 
            className={styles.favorite} onClick={ () => handleCart()}>찜목록
            </button>

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
