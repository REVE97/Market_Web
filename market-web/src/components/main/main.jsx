import styles from "./main.module.css";
import { EventBanner } from "../eventBanner/eventBanner";
import { Product } from "../products/product";
import { Chart } from '../chart/chart.jsx'
import { useEffect } from "react";
import axios from "axios";

export const Main = ({ products, setProducts }) => {
  
  useEffect(() => {
    axios.get("/data/products.json").then((data) => {
      setProducts(data.data.products);
    });
  }, [setProducts]);

  console.log(products);
  
  return (
    <>
      <EventBanner />
      <hr></hr><br></br>
      
      <div className={styles.filter}>
        <p>높은 변동순</p>
        <p>낮은 변동순</p>
      </div>
      
      <main className={styles.flex_wrap}>
        <Product />
      </main>

      <hr></hr>

      <Chart></Chart>
      
    </>
  );
};
