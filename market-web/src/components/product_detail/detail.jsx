import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./detail.module.css";
import axios from "axios";

import { Chart } from '../linechart/linechart.jsx'
import { userData } from '../../ChartData.js';

import { BarChart } from '../barchart/barchart.jsx'
import { parseData } from "../../ChartData.js";

export const Detail = ( {convertPrice}) => {
  
  const {id} = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    axios.get("/data/products.json").then((data) => {
      setProduct(data.data.products.find((product) => product.id === parseInt(id)))
    });
  }, [id]);

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
              {new Intl.NumberFormat().format(product.price)}
              <span className={styles.unit}>원</span>
            </span>
            
            {/* 구매 링크 */}
            <button 
            className={styles.buyButton} 
            onClick={() => window.location.href = "http://coupang.com"}>
            구매하기
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
