import styles from "./Projects.module.css";

export default function Projects() {
  return (
    <div className={styles.pageContainer}>
      <section className={styles.imageSection}>
        <img src="/images/placeholder1.png" />
      </section>
      <section className={styles.infoSection}>
        <div className={styles.infoContainer}>
          <h2>Trademe Clone</h2>

          <p className={styles.technologies}>
            React, Node.js, Express, MongoDB, Tailwind CSS
          </p>
          <p className={styles.summary}></p>
        </div>
      </section>
    </div>
  );
}
