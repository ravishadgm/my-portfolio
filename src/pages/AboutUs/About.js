import React from "react";
import { motion } from "framer-motion";
import styles from "./About.module.scss";

import { FaReact, FaNodeJs, FaMobileAlt } from "react-icons/fa";
import {
  SiNextdotjs,
  SiMongodb,
  SiFirebase,
  SiJavascript,
  SiTypescript,
} from "react-icons/si";

// Animation configs
const headingVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07 },
  },
};

const charVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const skills = [
  { name: "React", icon: <FaReact size={30} color="#61DBFB" /> },
  { name: "Next.js", icon: <SiNextdotjs size={30} /> },
  { name: "React Native", icon: <FaMobileAlt size={30} color="#61DBFB" /> },
  { name: "Node.js", icon: <FaNodeJs size={30} color="#3C873A" /> },
  { name: "MongoDB", icon: <SiMongodb size={30} color="#4DB33D" /> },
  { name: "Firebase", icon: <SiFirebase size={30} color="#FFA000" /> },
  { name: "JavaScript", icon: <SiJavascript size={30} color="#F7DF1E" /> },
  { name: "TypeScript", icon: <SiTypescript size={30} color="#007ACC" /> },
];

const About = () => {
  const heading = "About Me";

  return (
    <motion.section
      className={styles.about}
      initial="hidden"
      animate="visible"
    >
      <div className={styles.container}>
        {/* Title */}
        <motion.h2 className={styles.title} variants={headingVariants}>
          {heading.split("").map((char, i) => (
            <motion.span key={i} variants={charVariants}>
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h2>

        {/* Bio */}
        <motion.div className={styles.bio} variants={fadeUp}>
          <p>
            I’m a <span>Full Stack Developer</span> focused on crafting modern,
            accessible, and high-performance applications. My current toolkit includes
            <span> React</span>, <span>Next.js</span>, and <span>Node.js</span>, among others.
          </p>
          <p>
            I enjoy turning complex problems into intuitive solutions. Whether it's
            building real-time apps with <span>Firebase</span>, designing scalable
            backends with <span>MongoDB</span>, or writing type-safe code with
            <span> TypeScript</span> — I aim to deliver value through clean and efficient code.
          </p>
        </motion.div>

        {/* Skills */}
        <motion.div className={styles.skillsSection} variants={fadeUp}>
          <h3 className={styles.skillsTitle}>🛠️ Technologies I Use</h3>
          <div className={styles.skillsGrid}>
            {skills.map((skill, index) => (
              <motion.div
                className={styles.skillCard}
                key={index}
                whileHover={{ scale: 1.08 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                {skill.icon}
                <span>{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
