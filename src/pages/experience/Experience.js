import React from 'react';
import { FaBuilding, FaMapMarkerAlt, FaCode, FaLaptopCode, FaMobileAlt } from 'react-icons/fa';
import { HiOutlineCalendar } from 'react-icons/hi';
import styles from './Experience.module.scss';
import SectionTitle from '../../components/SectionTitle/SectionTitle';

const experiences = [
 
   {
    company: "Beact Infotech",
    logo: <FaCode className={styles.icon} />,
    logoColor: styles.grayLogo,
    duration: "2020 – 2021",
    location: "Surat, India",
    positions: [
      {
        title: "React Developer",
        period: "2020 – 2021",
        description:
          "Developed internal dashboards using React. Improved UI/UX based on feedback and testing. Participated in Agile sprints for timely delivery."
      }
    ],
    technologies: ["React.js", "JavaScript", "SCSS", "Axios"]
  },
 
    {
    company: "Vision Infotech",
    logo: <FaLaptopCode className={styles.icon} />,
    logoColor: styles.blueLogo,

    duration: "Sep 2021 – July 2024",
    location: "Surat, India",
    positions: [
      {
        title: "Frontend Developer",
        period: "Sep 2021 – July 2024",
        description:
          "Created scalable UIs using React and Next.js. Managed state with Redux and Zustand. Mentored juniors and performed code reviews."
      }
    ],
    technologies: ["React.js", "Next.js", "Zustand", "Tailwind CSS", "Node.js"]
  }, {
    company: "DI Solutions",
    logo: <FaMobileAlt className={styles.icon} />,
    logoColor: styles.redLogo,
    location: "Surat, India",

    duration: "July 2024 – May 2025",

    positions: [
      {
        title: "React Native Developer",
        period: "July 2024 – May 2025",
        description:
          "Built enterprise-level React Native apps. Integrated biometric login, push notifications, and deep linking. Collaborated across teams for consistent UX."
      }
    ],
    technologies: ["React Native", "TypeScript", "Redux", "Firebase", "Expo", "Ionic React"]
  },

];

const ExperienceCard = ({ experience }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <div className={`${styles.logo} ${experience.logoColor}`}>{experience.logo}</div>
        <div className={styles.companyContent}>
          <div className={styles.companyTop}>
            <h3 className={styles.companyName}>{experience.company}</h3>
            <span className={styles.companyDuration}>{experience.duration}</span>
          </div>
          <div className={styles.meta}>
          
            <span>
              <FaMapMarkerAlt className={styles.icon} />
              {experience.location}
            </span>
          </div>

          <div className={styles.positions}>
            {experience.positions.map((position, idx) => (
              <div key={idx} className={styles.positionItem}>
                {experience.positions.length > 1 && (
                  <>
                    <div className={styles.timelineDot}></div>
                    {idx < experience.positions.length - 1 && (
                      <div className={styles.timelineLine}></div>
                    )}
                  </>
                )}
                <div className={experience.positions.length > 1 ? styles.positionContentWithLine : ""}>
                  <div className={styles.positionTop}>
                    <h4>{position.title}</h4>
                  </div>
                  <div className={styles.period}>
                    <HiOutlineCalendar className={styles.icon} />
                    {position.period}
                  </div>
                  <p className={styles.description}>{position.description}</p>
                </div>
              </div>
            ))}
          </div>

          {experience.technologies && (
            <div className={styles.technologies}>
              <strong>Technologies:</strong>{" "}
          {experience.technologies.map((tech, i) => (
  <span key={i} className={styles['technology-tag']}>
    {tech}
  </span>
))}

            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const Experience = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.titleSection}>
 
         <SectionTitle text="Experience" />
        <p>My career journey and key achievements</p>
      </div>
      <div className={styles.experienceList}>
        {experiences.map((exp, idx) => (
          <ExperienceCard key={idx} experience={exp} />
        ))}
      </div>
    </div>
  );
};

export default Experience;
