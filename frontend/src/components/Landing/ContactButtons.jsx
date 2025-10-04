import styles from "./ContactButtons.module.css";

export default function ContactButtons() {
  return (
    <div className={styles.buttonGroup}>
      <a
        href="https://www.linkedin.com/in/shane-chapman-4971b2278/"
        target="_blank"
        className={styles.buttonLink}
      >
        <button className={styles.linkedIn}></button>
      </a>
      <a href="mailto:shanechristopherjohnchapman@gmail.com">
        <button className={styles.email}></button>
      </a>
      <a href="/shaneChapmanResume.pdf" download>
        <button className={styles.resume}></button>
      </a>
    </div>
  );
}
