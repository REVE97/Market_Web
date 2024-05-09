import styles from "./eventBanner.module.css";

export const EventBanner = () => {
  return (
    <article
      className={styles.banner}
      style={{
        backgroundImage: "url(/images/banner.jpg)",
        backgroundSize: "cover",
      }}
    >
    </article>
    
  );
};
