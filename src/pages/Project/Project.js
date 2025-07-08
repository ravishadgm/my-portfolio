import React from 'react';
import styles from './Project.module.scss';
import { motion } from 'framer-motion';
import { FaMobileAlt, FaGlobe, FaTools } from 'react-icons/fa';
import SectionTitle from '../../components/SectionTitle/SectionTitle';

const categorizedProjects = {
  mobile: {
    icon: <FaMobileAlt />,
    title: "Mobile Apps",
    projects: [
      {
        title: "Speed App (Chinese App)",
        description: "Developed a cross-platform mobile application that tracks the user's GPS location in real-time and finds the nearest camera location based on the user's latitude and longitude coordinates. The app includes a floating window feature that provides real-time notifications and location information without interrupting the user's ongoing activities. Additionally, biometric authentication and Google login integration were implemented for secure user access.",
        features: [
          "Implemented GPS tracking and geo location functionality to calculate distances between the user and camera locations",
          "Designed and integrated the floating window feature using React Native libraries for Android and iOS platforms",
          "Set up Google and biometric authentication to ensure secure user logins"
        ],
        technologies: ["React Native", "Node.js", "Redux", "Content API"],
        platforms: ["Android", "iOS"]
      },
      {
        title: "Waves MVP",
        description: "Developed a spiritual app focused on Bible verses, featuring a verse explorer, AI-powered chat for verse suggestions, and Bible poems. Integrated Google and Apple login, in-app purchases for premium content, and daily verse reminders with custom notifications. Added home and lock screen widgets for quick verse access without opening the app.",
        features: [
          "Led the full-stack development of a spiritual app centered around Bible verses, from backend to frontend",
          "Implemented an interactive chat feature that provides relevant Bible verses in response to user queries",
          "Integrated in-app purchases for premium content and features, including daily Bible verse reminders and widgets for home/lock screen views",
          "Set up Google and Apple login for seamless user authentication",
          "Designed and developed a user-friendly interface for easy navigation and browsing of Bible verses and poems"
        ],
        technologies: ["React Native", "Firebase", "Redux", "Content API"],
        platforms: ["Android", "iOS"]
      }
    ]
  },
  web: {
    icon: <FaGlobe />,
    title: "Web Applications",
    projects: [
      {
        title: "Prognost",
        description: "Developed a real-time machinery monitoring system that tracks critical machine data, including speed, performance, and sensor readings. The system uses integrated sensors to monitor machine health, detect failures, and generate real-time alerts (high and low alerts) based on predefined thresholds. Notifications are sent to users in case of machine failure or abnormal conditions.",
        features: [
          "Developed a real-time machinery monitoring system to track machine performance, including speed and health using integrated sensors",
          "Created a dynamic graph to visualize alert data and machine performance metrics, allowing users to track the status and trends over time",
          "Integrated sensors for real-time data collection, enabling accurate failure detection and alerts"
        ],
        technologies: ["React", "TypeScript", ".NET", "Redux", "Content API"]
      },
      {
        title: "Budget Planner",
        description: "For the Budget Planner, we assess new and existing customers based on income, credit history, and debts to determine loan eligibility. Applications failing criteria are automatically rejected to ensure consistency. Clear rules help employees uniformly handle onboarding and advising. While digital forms improve efficiency over paper, they can still be error-prone and cause delays if data is entered incorrectly.",
        features: [
          "Developed dynamic digital forms to streamline loan eligibility checks for new and existing customers",
          "Implemented rule-based validations to ensure uniform application of eligibility criteria",
          "Enhanced data accuracy by reducing manual errors through field-level validations and guided user flows"
        ],
        technologies: ["React", "Node.js", "TypeScript", "Redux", "Content API"]
      },
      {
        title: "Anton (Amazon Ads)",
        description: "Anton - developed an app for Amazon advertisement, which allowed users to achieve desired value of bid for marketing by conditionally changing values of specific campaign reports (integrating Redux and other third party libraries) using React.js.",
        features: [
          "Developed a dynamic campaign optimization tool using React.js for Amazon Ads",
          "Integrated Redux for scalable state management across complex ad report data",
          "Applied conditional logic to update bid values based on real-time campaign metrics",
          "Integrated REST APIs and third-party marketing services"
        ],
        technologies: ["React", "Node.js", "JavaScript", "Redux"]
      },
      {
        title: "Matla Life",
        description: "Matla Life is a sales and marketing solutions company that engineers services relevant to diverse partners. They offer innovative solutions for African business problems. The project involved creating a tablet application where users can save customer information, evaluate financial needs, provide quotes, and assist with the application process.",
        features: [
          "Led the complete frontend development of a tablet application using React",
          "Designed and implemented intuitive UI screens for capturing customer information, performing financial assessments, generating quotes, and assisting in the application process",
          "Collaborated closely with the backend team to integrate APIs for real-time data syncing and application submission",
          "Ensured seamless user experience with responsive layouts optimized for tablet devices",
          "Handled form validations, conditional flows, and state management to support dynamic user journeys"
        ],
        technologies: ["React", "Node.js", "JavaScript", "Redux", "Context API"]
      }
    ]
  },
  others: {
    icon: <FaTools />,
    title: "Other Projects & Tools",
    projects: [
      {
        title: "Internal Tools (Beact)",
        description: "Dashboard and internal tooling built for client success teams and agile delivery. Focused on improving team productivity and streamlining internal processes through better UI design and enhanced feedback loops.",
        features: [
          "Agile-based delivery methodology implementation",
          "Improved UI design and user experience",
          "Enhanced feedback loops for better team collaboration",
          "Streamlined internal processes and workflows"
        ],
        technologies: ["React", "JavaScript", "SCSS", "Axios"]
      }
    ]
  }
};

const Section = ({ icon, title, projects }) => (
  <div className={styles.projectGroup}>
    <div className={styles.groupHeader}>
      <span className={styles.groupIcon}>{icon}</span>
      <h2 className={styles.groupTitle}>{title}</h2>
    </div>
    <div className={styles.projectGrid}>
      {projects.map((proj, index) => (
        <motion.div
          key={index}
          className={styles.card}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <div className={styles.cardHeader}>
            <h3 className={styles.projectTitle}>{proj.title}</h3>
            {proj.platforms && (
              <div className={styles.platforms}>
                {proj.platforms.map((platform, i) => (
                  <span key={i} className={styles.platform}>{platform}</span>
                ))}
              </div>
            )}
          </div>
          <p className={styles.description}>{proj.description}</p>
          
          <div className={styles.featuresSection}>
            <h4 className={styles.featuresTitle}>Key Features & Achievements:</h4>
            <ul className={styles.features}>
              {proj.features.map((feat, i) => (
                <li key={i}>{feat}</li>
              ))}
            </ul>
          </div>
          
          <div className={styles.techStack}>
            <span className={styles.techTitle}>Technologies:</span>
            {proj.technologies.map((tech, i) => (
              <span key={i} className={styles.tech}>{tech}</span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

const Project = () => (
  <section className={styles.projectSection}>
             <SectionTitle text="My Projects" />
    <p className={styles.subtitle}>
      A comprehensive overview of my development work across mobile and web applications
    </p>
    {Object.values(categorizedProjects).map((section, i) => (
      <Section
        key={i}
        icon={section.icon}
        title={section.title}
        projects={section.projects}
      />
    ))}
  </section>
);

export default Project