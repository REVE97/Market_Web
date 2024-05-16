import { useParams } from "react-router-dom";
import styles from "./detail.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Chart } from '../chart/chart.jsx'
import { userData } from '../../Data.js';

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
          </div>
        </section>
      </main>
      
      <hr></hr>
      
      <Chart
        data={userData}
        title="Price Charts"
        grid
        dataKey="Price"
      ></Chart>
      
    </>
  );
};
