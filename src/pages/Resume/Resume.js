import React from 'react';
import styles from './Resume.module.scss';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import { FaDownload } from 'react-icons/fa';
import resumePdf from '../../assets/pdf/ravisha_resume.pdf'

const Resume = () => {
  return (
    <section className={styles.resumeSection}>
      <SectionTitle text="Resume" />

      <p className={styles.subtitle}>Here's my complete resume. You can also download the PDF version below.</p>

      {/* PDF Viewer - displays the resume directly without controls */}
      <div className={styles.resumeViewer}>
        <iframe
          src={`${resumePdf}#toolbar=0&navpanes=0&scrollbar=0`}
          title="Resume PDF"
          className={styles.pdfFrame}
          width="100%"
          height="600"
        />
      </div>

   
      <a
        href={resumePdf}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.downloadButton}
      >
        <FaDownload className={styles.icon} />
        Download Full Resume (PDF)
      </a>
    </section>
  );
};

export default Resume;