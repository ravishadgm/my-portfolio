import React from "react";
import { motion } from "framer-motion";
import styles from "./Home.module.scss";
import heroImg from "../../assets/images/girl.png";
import wave from "../../assets/images/line.png";

// Animation Variants
const heroTextVariant = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut", delay: 0.3 },
  },
};

const heroImageVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: "backOut", delay: 0.5 },
  },
};

const introVariant = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
};

const containerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15, // Very slow
    },
  },
};

const charVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }, // Slow per character
  },
};

const Home = () => {
  const name = "Isabelle Ryal";
  const nameChars = name.split("");

  return (
    <div className={styles.home}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.content}>
          <motion.div
            className={styles.text}
            variants={heroTextVariant}
            initial="hidden"
            animate="visible"
          >
            <h4>
              <span className={styles.dot}></span>Hello, I’m
            </h4>

            {/* Animated H1 */}
            <motion.h1
              variants={containerVariant}
              initial="hidden"
              animate="visible"
              className={styles.name}
            >
              {nameChars.map((char, index) => (
                <motion.span key={index} variants={charVariant}>
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.h1>

            <h2>Web Developer & Blockchain Enthusiast</h2>
            <p>
              Crafting modern, fast, and responsive web applications using
              <span> JavaScript</span>, <span>React</span>, and{" "}
              <span>Next.js</span>.
            </p>
            <button>Hire Me</button>
          </motion.div>

          <motion.div
            className={styles.image}
            variants={heroImageVariant}
            initial="hidden"
            animate="visible"
          >
            <img src={heroImg} alt="Isabelle Ryal" />
          </motion.div>
        </div>

        {/* Background Circles */}
        <div className={styles.circles}>
          <motion.div
            className={styles.circle}
            animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            style={{ top: "10%", left: "5%" }}
          />
          <motion.div
            className={styles.circle}
            animate={{ y: [0, -15, 0], x: [0, -10, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            style={{ top: "60%", left: "80%" }}
          />
          <motion.div
            className={styles.circle}
            animate={{ y: [0, 25, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            style={{ top: "40%", left: "20%" }}
          />
        </div>

        <div className={styles.wave}>
          <img src={wave} alt="wave design" />
        </div>
      </section>

      {/* Introduction Section */}
      <motion.section
        className={styles.introduce}
        variants={introVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className={styles.container}>
          <h2>
            LET ME <span>INTRODUCE</span> MYSELF
          </h2>
          <p>
            I fell in love with programming and constantly strive to improve.
            I'm fluent in
            <span className={styles.highlight}> C++, JavaScript, and Go</span>.
            My passion lies in building innovative{" "}
            <span className={styles.highlight}>web applications</span> and
            exploring
            <span className={styles.highlight}> blockchain technologies</span>.
            I enjoy working with
            <span className={styles.highlight}> Node.js</span> and modern
            frameworks like
            <span className={styles.highlight}> React</span> and{" "}
            <span className={styles.highlight}>Next.js</span>, using them to
            turn ideas into clean, efficient products.
          </p>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;
