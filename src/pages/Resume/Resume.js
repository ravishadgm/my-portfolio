import React, { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

import styles from './Resume.module.scss';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import { FaDownload, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

// Set PDF.js worker source
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

// PDF file path (must be in /public folder)
const resumePdf = '/assets/ravisha_resume.pdf';

const Resume = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    // Adjust scale for mobile vs desktop
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setScale(0.95); // Mobile
      } else {
        setScale(1); // Desktop
      }
    };

    handleResize(); // Initial run
    window.addEventListener('resize', handleResize); // On resize

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setPageNumber(1);
  };

  const nextPage = () => setPageNumber((prev) => Math.min(prev + 1, numPages));
  const prevPage = () => setPageNumber((prev) => Math.max(prev - 1, 1));

  return (
    <section className={styles.resumeSection}>
      <SectionTitle text="Resume" />

      <p className={styles.subtitle}>
        Here's my complete resume. You can view it below or download the PDF version.
      </p>

      <div className={styles.resumeViewer}>
        <Document
          file={resumePdf}
          onLoadSuccess={onDocumentLoadSuccess}
          loading="Loading resume..."
          error="Failed to load PDF."
          className={styles.pdfDocument}
        >
          <Page
            pageNumber={pageNumber}
            scale={scale}
            renderTextLayer={true}
            renderAnnotationLayer={true}
            className={styles.pdfPage}
          />
        </Document>
      </div>

      <div className={styles.paginationControls}>
        <button onClick={prevPage} disabled={pageNumber <= 1}>
          <FaArrowLeft /> Previous
        </button>

        <span className={styles.pageIndicator}>
          Page {pageNumber} of {numPages}
        </span>

        <button onClick={nextPage} disabled={pageNumber >= numPages}>
          Next <FaArrowRight />
        </button>
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
