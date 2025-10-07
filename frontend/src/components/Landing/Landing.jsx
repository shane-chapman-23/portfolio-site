import ContactButtons from "./ContactButtons";
import styles from "./Landing.module.css";

export default function Landing() {
  return (
    <>
      <div className={styles.landingContainer}>
        <section className={styles.image}>
          <img
            src="/images/shane.jpg"
            alt="picture of Shane"
            className={styles.image}
          ></img>
        </section>
        <section className={styles.introduction}>
          <h2>Shane Chapman</h2>
          <div className={styles.titleContainer}>
            <h1>
              FULL-STACK
              <br />
              DEVELOPER
            </h1>
          </div>
          <p className={styles.technologies}>
            Javascript, React, Node.js, Express, <br />
            and MORE!
          </p>
          <ContactButtons />
        </section>
      </div>
    </>
  );
}
