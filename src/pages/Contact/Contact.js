import React from "react";
import styles from "./Contact.module.scss";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

const Contact = () => {
  return (
    <section className={styles.contactSection}>
      <SectionTitle text="Let's Connect" />

      <p className={styles.contactSubtitle}>
        Ready to build something amazing together? Whether you need a React
        developer, mobile app specialist, or want to discuss your next project —
        I'd love to hear from you!
      </p>

      <div className={styles.contactGrid}>
        <div className={styles.card}>
          <FaEnvelope />
          <a
            href="https://mail.google.com/mail/?view=cm&to=viraniravisha@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            viraniravisha@gmail.com
          </a>
        </div>

        <div className={styles.card}>
          <FaPhoneAlt />
          <a href="tel:+919327574166">+91 9327574166</a>
        </div>

        <div className={styles.card}>
          <FaMapMarkerAlt />
          <span>Surat, Gujarat, India</span>
        </div>
      </div>
    </section>
  );
};

export default Contact;
