import { Link } from "react-router-dom";
import styles from "./product.module.css";

export const Product = ( {product, convertPrice} ) => {
  return (
    <div className={styles.product}>
      <div className={styles.product_item}>
      <Link to={`/product/${product.id}`}>
          <div className={styles.product_image}>
            <img src={product.img_url} alt="product" />
          </div>
        </Link>
        <div className={styles.store}>
          <span>{product.brand_name}</span>
        </div>

        <div className={styles.product_name}>
          <span>{product.title}</span>
        </div>

        <div className={styles.product_price}>
          <span className={styles.price}>{convertPrice(product.origin_price)}</span>
          <span className={styles.unit}>원</span>
        </div>
      </div>
    </div>
  );
};
