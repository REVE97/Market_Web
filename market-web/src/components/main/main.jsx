import styles from "./main.module.css";
import { EventBanner } from "../eventBanner/eventBanner";
import { Product } from "../products/product";
import { useEffect } from "react";
import axios from "axios";

export const Main = ({ products, setProducts, convertPrice }) => {
  
  useEffect(() => {
    axios.get("/data/products.json").then((data) => {
      setProducts(data.data.products);
    });
  }, [setProducts]);

  const sortProduct = (type) => {                               // 정렬 함수
    const newProduct = [...products];
    if ( type === "basic" ) {
      newProduct.sort(( a, b ) => a.id - b.id);
      setProducts(newProduct);
    } else if ( type === "row" ) {
      newProduct.sort(( a, b ) => a.price - b.price);
      setProducts(newProduct);
    } else if ( type === "high" ) {
      newProduct.sort(( a, b ) => b.price - a.price);
      setProducts(newProduct);
    }
  }

  return (
    <>
      <EventBanner />
      <hr></hr><br></br>
      
      <div className={styles.filter}>
        <p onClick={()=> sortProduct("basic")}>기본순</p>
        <p onClick={()=> sortProduct("high")}>높은 가격순</p>
        <p onClick={()=> sortProduct("row")}>낮은 가격순</p>
      </div>
      
      <main className={styles.flex_wrap}>
        {products.map((product) => {
          return <Product key={product.id} product={product} convertPrice={convertPrice} />
        })}
      </main>

      <hr></hr>

    </>
  );
};
