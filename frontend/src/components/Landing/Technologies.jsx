import {
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiJavascript,
  SiMongodb,
} from "react-icons/si";

import styles from "./Technologies.module.css";

export default function Technologies() {
  const technologies = ["Javascript", "React", "Node.js", "Express", "MongoDB"];

  const icons = {
    Javascript: SiJavascript,
    React: SiReact,
    "Node.js": SiNodedotjs,
    Express: SiExpress,
    MongoDB: SiMongodb,
  };

  return (
    <div className={styles.techContainer}>
      {technologies.map((tech) => {
        const IconComponent = icons[tech];
        return (
          <div key={tech} className={styles.techItem}>
            <IconComponent />
            <p>{tech}</p>
          </div>
        );
      })}
    </div>
  );
}
