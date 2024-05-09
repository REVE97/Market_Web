import styles from "./topNavigationBar.module.css";
import { Link } from "react-router-dom";

export const TopNavigationBar = () => {
  
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        
        <Link to="/">
          <h1 className={styles.logo}>
            <img src="/images/symbol.png" alt="logo" />
          </h1>
        </Link>
        
        <div className={styles.input_wrap}>
          <input type="text" placeholder="Search..." />
          {/* <img src="/images/icon-search.svg" alt="search" /> */}
        </div>

      </div>

      <div className={styles.menu}>
        <Link to="">
          <div className={styles.mypage}>
            <img src="/images/icon-user.svg" alt="user" />
            <span>마이페이지</span>
          </div>
        </Link>

        <Link to="">
          <div className={styles.mypage}>
            <img src="/images/icon-favorite.svg" alt="favorite" />
            <span>찜목록</span>
          </div>
        </Link>

        <Link to="">
          <div className={styles.mypage}>
            <img src="/images/icon-power.svg" alt="login" />
            <span>로그인</span>
          </div>
        </Link>


      </div>

    </header>
  );
};
