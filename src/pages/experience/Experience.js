import React from 'react';
import styles from './Experience.module.scss';
import { motion } from 'framer-motion';
import { FaMobileAlt, FaLaptopCode, FaCode, FaArrowUp } from 'react-icons/fa';

const experiences = [
  {
    icon: <FaCode />,
    company: "Beact Infotech",
    role: "React Developer",
    duration: "2020 – 2021",
    responsibilities: [
      "Developed internal dashboards using React.",
      "Improved UI/UX based on feedback and testing.",
      "Participated in Agile sprints for timely delivery."
    ],
    technologies: ["React.js", "JavaScript", "SCSS", "Axios"]
  },
  {
    icon: <FaLaptopCode />,
    company: "Vision Infotech",
    role: "Frontend Developer",
    duration: "Sep 2021 – July 2024",
    responsibilities: [
      "Created scalable UIs using React and Next.js.",
      "Managed state with Redux and Zustand.",
      "Mentored juniors and performed code reviews."
    ],
    technologies: ["React.js", "Next.js", "Zustand", "Tailwind CSS", "Node.js"]
  },
  {
    icon: <FaMobileAlt />,
    company: "DI Solutions",
    role: "React Native Developer",
    duration: "July 2024 – May 2025",
    responsibilities: [
      "Built enterprise-level React Native apps.",
      "Integrated biometric login, push notifications, and deep linking.",
      "Collaborated across teams for consistent UX."
    ],
    technologies: ["React Native", "TypeScript", "Redux", "Firebase", "Expo", "Ionic React"]
  }
];

const Experience = () => {
  return (
    <section className={styles.experienceSection}>
      <h2 className={styles.title}>Career Timeline</h2>
      <div className={styles.timeline}>
        {[...experiences].reverse().map((exp, index) => (
          <motion.div
            key={index}
            className={styles.step}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className={styles.marker}>
              <div className={styles.iconCircle}>{exp.icon}</div>
              {index < experiences.length - 1 && (
                <div className={styles.arrow}><FaArrowUp /></div>
              )}
            </div>

            <div className={styles.contentBox}>
              <h3 className={styles.company}>{exp.company}</h3>
              <p className={styles.role}>{exp.role}</p>
              <p className={styles.duration}>{exp.duration}</p>

              <ul className={styles.points}>
                {exp.responsibilities.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>

              <div className={styles.techStack}>
                {exp.technologies.map((tech, i) => (
                  <span key={i} className={styles.tech}>{tech}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
