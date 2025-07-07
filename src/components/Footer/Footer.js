import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>
          <a href="mailto:isabelle.ryal@example.com">isabelle.ryal@example.com</a>
          <span className={styles.separator}>|</span>
          <a href="tel:+1234567890">+1 (234) 567-890</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
