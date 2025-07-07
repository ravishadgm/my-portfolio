import React from 'react';
import styles from './Contact.module.scss';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className={styles.contactSection}>
      <h2 className={styles.contactTitle}>Let’s Connect 🚀</h2>
      <p className={styles.contactSubtitle}>
        Whether it's about a project, opportunity, or just a friendly chat — I’d love to hear from you.
      </p>

      <div className={styles.contactGrid}>
        <div className={styles.card}>
          <FaEnvelope />
          <a href="mailto:yourname@example.com">yourname@example.com</a>
        </div>

        <div className={styles.card}>
          <FaPhoneAlt />
          <a href="tel:+1234567890">+1 234 567 890</a>
        </div>

        <div className={styles.card}>
          <FaMapMarkerAlt />
          <span>Cape Town, South Africa</span>
        </div>

        <div className={styles.card}>
          <FaLinkedin />
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
            linkedin.com/in/yourprofile
          </a>
        </div>

        <div className={styles.card}>
          <FaGithub />
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            github.com/yourusername
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
