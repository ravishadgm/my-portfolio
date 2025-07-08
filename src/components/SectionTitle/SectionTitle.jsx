import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import styles from "./SectionTitle.module.scss";

const headingVariants = {
  visible: {
    transition: { staggerChildren: 0.06 },
  },
};

const charVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const SectionTitle = ({ text = "Title" }) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  return (
    <motion.h2
      className={styles.title}
      variants={headingVariants}
      initial="hidden"
      animate={controls}
    >
      {text.split("").map((char, index) => (
        <motion.span key={index} variants={charVariants}>
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.h2>
  );
};

export default SectionTitle;
