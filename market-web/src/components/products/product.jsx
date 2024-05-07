import { Link } from "react-router-dom";
import styles from "./product.module.css";

export const Product = () => {
  return (
    <div className={styles.product}>
      <div className={styles.product_item}>
        <Link to="#">
          <div className={styles.product_image}>
            <img src="images/MacBook.png" alt="product" />
          </div>
        </Link>
        <div className={styles.store}>
          <span>APPLE</span>
        </div>

        <div className={styles.product_name}>
          <span>Macbook air</span>
        </div>

        <div className={styles.product_price}>
          <span className={styles.price}>1,300,000</span>
          <span className={styles.unit}>원</span>
        </div>
      </div>

      <div className={styles.product_item}>
        <Link to="#">
          <div className={styles.product_image}>
            <img src="images/ipad.png" alt="product" />
          </div>
        </Link>
        <div className={styles.store}>
          <span>APPLE</span>
        </div>

        <div className={styles.product_name}>
          <span>IPAD</span>
        </div>

        <div className={styles.product_price}>
          <span className={styles.price}>1,100,000</span>
          <span className={styles.unit}>원</span>
        </div>
      </div>

      <div className={styles.product_item}>
        <Link to="#">
          <div className={styles.product_image}>
            <img src="images/iphone.png" alt="product" />
          </div>
        </Link>
        <div className={styles.store}>
          <span>APPLE</span>
        </div>

        <div className={styles.product_name}>
          <span>IPHONE</span>
        </div>

        <div className={styles.product_price}>
          <span className={styles.price}>1,500,000</span>
          <span className={styles.unit}>원</span>
        </div>
      </div>
    </div>
  );
};
