import styles from "./Projects.module.css";

export default function Projects() {
  return (
    <div className={styles.pageContainer}>
      <section className={styles.infoSection}>
        <h2>Trademe Clone</h2>
      </section>
      <section className={styles.imageSection}>
        <img src="/images/placeholder1.png" />
      </section>
    </div>
  );
}
