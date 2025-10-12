import {
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiJavascript,
  SiMongodb,
} from "react-icons/si";

import ContactButtons from "./ContactButtons";
import styles from "./Landing.module.css";

export default function Landing() {
  return (
    <>
      <div className={styles.landingContainer}>
        <section className={styles.imageSection}>
          <img
            src="/images/shane.jpg"
            alt="picture of Shane"
            className={styles.image}
          ></img>
        </section>
        <section className={styles.introduction}>
          <div className={styles.titleContainer}>
            <h2>Shane Chapman</h2>
            <h1 className={styles.title}>
              Full-Stack <br />
              Developer.
            </h1>
          </div>

          <p className={styles.technologies}>
            <SiJavascript title="JavaScript" />
            Javascript
            <SiReact title="React" />
            React
            <SiNodedotjs title="Node.js" />
            Node.js
            <SiExpress title="Express" />
            Express
            <SiMongodb title="MongoDB" />
            MongoDB
          </p>
          <ContactButtons />
        </section>
      </div>
    </>
  );
}
