import ContactButtons from "./ContactButtons";
import styles from "./Landing.module.css";

export default function Landing() {
  return (
    <>
      <div className={styles.landingContainer}>
        <section className={styles.image}></section>
        <section className={styles.introduction}>
          <h2>Shane Chapman</h2>
          <h1>
            FULL-STACK <br />
            DEVELOPER
          </h1>
          <p className={styles.technologies}>
            Javascript, React, Node.js, and Express
          </p>
          <ContactButtons />
        </section>
      </div>
    </>
  );
}
