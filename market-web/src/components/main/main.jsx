import styles from "./main.module.css";
import { EventBanner } from "../eventBanner/eventBanner";
import { Product } from "../products/product";

export const Main = () => {
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
    </>
  );
};
