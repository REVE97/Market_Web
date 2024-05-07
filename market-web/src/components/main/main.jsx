import styles from "./main.module.css";
import { EventBanner } from "../eventBanner/eventBanner";
import { Product } from "../products/product";

export const Main = () => {
  return (
    <>
      <EventBanner />
      <div className={styles.filter}>
        <p>최신순</p>
        <p>낮은 변동순</p>
        <p>높은 변동순</p>
      </div>
      <main className={styles.flex_wrap}>
        <Product />
      </main>
    </>
  );
};
