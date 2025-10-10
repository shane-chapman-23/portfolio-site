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
          <ContactButtons />
          <div className={styles.titleContainer}>
            <h1 className={styles.title}>
              Hi, I'm <span style={{ fontStyle: "italic" }}>Shane.</span> <br />
              I like making <br />
              Websites.
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
        </section>
      </div>
    </>
  );
}
