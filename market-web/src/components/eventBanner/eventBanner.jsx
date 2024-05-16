import styles from "./eventBanner.module.css";

export const EventBanner = () => {
  return (
    
    // 배너 링크
    <a href="https://github.com/REVE97/Market_Web">
    <article
      className={styles.banner}
      style={{
        backgroundImage: "url(/images/banner.jpg)",
        backgroundSize: "cover",
      }}
    >
    </article>
    </a>
    
  );
};
