import styles from "./eventBanner.module.css";

export const EventBanner = () => {
  return (
    
    // 배너 링크
    <a href="https://github.com/REVE97/Market_Web" target="_blank" rel="noopener noreferrer">
    <article
      className={styles.banner}
      style={{
        backgroundImage: "url(/images/github.png)",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundColor: "white",
        backgroundPosition: "center",
        padding: 0,
      }}
    >
    </article>
    </a>
    
  );
};