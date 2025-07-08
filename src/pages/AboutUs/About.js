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
  SiRedux,
  SiTailwindcss,
  SiExpo,
  SiSupabase,
  SiHtml5,
  SiCss3,
  SiSass,
} from "react-icons/si";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

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
  { name: "React.js", icon: <FaReact size={30} color="#61DBFB" /> },
  { name: "React Native", icon: <FaMobileAlt size={30} color="#61DBFB" /> },
  { name: "Next.js", icon: <SiNextdotjs size={30} /> },
  { name: "TypeScript", icon: <SiTypescript size={30} color="#007ACC" /> },
  { name: "JavaScript", icon: <SiJavascript size={30} color="#F7DF1E" /> },
  { name: "Redux", icon: <SiRedux size={30} color="#764ABC" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={30} color="#38B2AC" /> },
  { name: "Expo", icon: <SiExpo size={30} color="#000020" /> },
  { name: "Firebase", icon: <SiFirebase size={30} color="#FFA000" /> },
  { name: "MongoDB", icon: <SiMongodb size={30} color="#4DB33D" /> },
  { name: "Node.js", icon: <FaNodeJs size={30} color="#3C873A" /> },
  { name: "HTML5", icon: <SiHtml5 size={30} color="#E34F26" /> },
  { name: "CSS3", icon: <SiCss3 size={30} color="#1572B6" /> },
  { name: "SCSS", icon: <SiSass size={30} color="#CC6699" /> },
  { name: "Supabase", icon: <SiSupabase size={30} color="#3ECF8E" /> },
];

const About = () => {
  const heading = "About Me";

  return (
    <motion.section className={styles.about} initial="hidden" animate="visible">
      <div className={styles.container}>
        <SectionTitle text="About Me" />

        {/* Bio */}
        <motion.div className={styles.bio} variants={fadeUp}>
          <p>
            I'm a <span>React.js & React Native Developer</span> with 5+ years of experience 
            building dynamic, responsive web and mobile applications. I specialize in creating 
            cross-platform solutions using modern technologies like
            <span> React.js</span>, <span>React Native</span>, and <span>Next.js</span>.
          </p>
          <p>
            My expertise includes state management with <span>Redux</span>, <span>Context API</span>, 
            and <span>Zustand</span>, along with seamless API integration and third-party services. 
            I'm passionate about delivering performant, scalable applications with clean, maintainable code. 
            From real-time machinery monitoring systems to spiritual mobile apps with AI-powered features, 
            I enjoy turning complex ideas into intuitive user experiences.
          </p>
          <p>
            I have extensive experience with <span>TypeScript</span>, mobile frameworks like 
            <span> Expo</span> and <span>Ionic React</span>, and databases including 
            <span> Firebase</span>, <span>MongoDB</span>, and <span>Supabase</span>.
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