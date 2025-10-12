import { MdOutlineMailOutline } from "react-icons/md";
import { IoDocumentTextOutline } from "react-icons/io5";
import { RiLinkedinBoxLine } from "react-icons/ri";

import styles from "./ContactButtons.module.css";

export default function ContactButtons() {
  return (
    <div className={styles.buttonGroup}>
      <a
        href="https://www.linkedin.com/in/shane-chapman-4971b2278/"
        target="_blank"
        className={styles.buttonLink}
      >
        <button className={styles.linkedIn}>
          <RiLinkedinBoxLine />
          LinkedIn
        </button>
      </a>
      <a href="mailto:shanechristopherjohnchapman@gmail.com">
        <button className={styles.email}>
          <MdOutlineMailOutline />
          Email
        </button>
      </a>
      <a href="/shaneChapmanResume.pdf" download>
        <button className={styles.resume}>
          <IoDocumentTextOutline />
          Resume
        </button>
      </a>
    </div>
  );
}
