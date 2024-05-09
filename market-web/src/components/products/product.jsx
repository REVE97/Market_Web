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

      <div className={styles.product_item}>
        <Link to="#">
          <div className={styles.product_image}>
            <img src="images/desktop.png" alt="product" />
          </div>
        </Link>
        <div className={styles.store}>
          <span>APPLE</span>
        </div>

        <div className={styles.product_name}>
          <span>DESKTOP</span>
        </div>

        <div className={styles.product_price}>
          <span className={styles.price}>1,835,820</span>
          <span className={styles.unit}>원</span>
        </div>
      </div>

      <div className={styles.product_item}>
        <Link to="#">
          <div className={styles.product_image}>
            <img src="images/monitor.png" alt="product" />
          </div>
        </Link>
        <div className={styles.store}>
          <span>APPLE</span>
        </div>

        <div className={styles.product_name}>
          <span>MONITOR</span>
        </div>

        <div className={styles.product_price}>
          <span className={styles.price}>2,490,000</span>
          <span className={styles.unit}>원</span>
        </div>
      </div>

      <div className={styles.product_item}>
        <Link to="#">
          <div className={styles.product_image}>
            <img src="images/keyboard.png" alt="product" />
          </div>
        </Link>
        <div className={styles.store}>
          <span>APPLE</span>
        </div>

        <div className={styles.product_name}>
          <span>KEYBOARD</span>
        </div>

        <div className={styles.product_price}>
          <span className={styles.price}>153,050</span>
          <span className={styles.unit}>원</span>
        </div>
      </div>

      <div className={styles.product_item}>
        <Link to="#">
          <div className={styles.product_image}>
            <img src="images/mouse.png" alt="product" />
          </div>
        </Link>
        <div className={styles.store}>
          <span>APPLE</span>
        </div>

        <div className={styles.product_name}>
          <span>MOUSE</span>
        </div>

        <div className={styles.product_price}>
          <span className={styles.price}>82,770</span>
          <span className={styles.unit}>원</span>
        </div>
      </div>

      <div className={styles.product_item}>
        <Link to="#">
          <div className={styles.product_image}>
            <img src="images/smartwatch.png" alt="product" />
          </div>
        </Link>
        <div className={styles.store}>
          <span>APPLE</span>
        </div>

        <div className={styles.product_name}>
          <span>SMARTWATCH</span>
        </div>

        <div className={styles.product_price}>
          <span className={styles.price}>499,900</span>
          <span className={styles.unit}>원</span>
        </div>
      </div>

      <div className={styles.product_item}>
        <Link to="#">
          <div className={styles.product_image}>
            <img src="images/game.png" alt="product" />
          </div>
        </Link>
        <div className={styles.store}>
          <span>NINTENDO</span>
        </div>

        <div className={styles.product_name}>
          <span>SWITCH GAME</span>
        </div>

        <div className={styles.product_price}>
          <span className={styles.price}>63,900</span>
          <span className={styles.unit}>원</span>
        </div>
      </div>
    </div>
  );
};
