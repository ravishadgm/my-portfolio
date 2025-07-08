import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>
          <a
            href="https://mail.google.com/mail/?view=cm&to=viraniravisha@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            viraniravisha@gmail.com
          </a>

          <span className={styles.separator}>|</span>
          <a href="tel:+919327574166">+91 9327574166</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
