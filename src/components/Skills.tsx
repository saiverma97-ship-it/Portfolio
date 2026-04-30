import styles from './Skills.module.css';
import { Layout, Database, Settings } from 'lucide-react';

const skillGroups = [
  {
    title: 'Frontend Development',
    icon: <Layout size={24} />,
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion']
  },
  {
    title: 'Backend Development',
    icon: <Database size={24} />,
    skills: ['Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'REST APIs']
  },
  {
    title: 'System Design & Tools',
    icon: <Settings size={24} />,
    skills: ['Scalable Architecture', 'Performance Optimization', 'Git', 'API Design']
  },
  {
    title: 'Core Engineering Knowledge',
    icon: <Settings size={24} />,
    skills: ['Electronics Fundamentals', 'Embedded Concepts', 'System-Level Thinking']
  }
];


export default function Skills() {
  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>Expertise</span>
          <h2 className={styles.title}>Technical Skills</h2>
          <div className={styles.underline}></div>
        </div>

        <div className={styles.grid}>
          {skillGroups.map((group, index) => (
            <div key={index} className={styles.skillCard}>
              <div className={styles.cardHeader}>
                <div className={styles.iconWrapper}>{group.icon}</div>
                <h3>{group.title}</h3>
              </div>
              <div className={styles.skillTags}>
                {group.skills.map((skill, i) => (
                  <span key={i} className={styles.tag}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
