import styles from './Education.module.css';
import { GraduationCap, BookOpen, School } from 'lucide-react';

const education = [
  {
    type: 'Bachelor of Engineering',
    institution: 'Guru Nanak Dev Engineering College, Bidar',
    field: 'Electronics and Communication Engineering',
    status: 'Currently Studying',
    icon: <GraduationCap size={24} />
  },
  {
    type: 'Pre-University Course (PUC)',
    institution: 'Saptagiri PUC College, Bidar',
    field: 'Science',
    status: 'Completed',
    icon: <BookOpen size={24} />
  },
  {
    type: 'Secondary School (SSLC)',
    institution: 'Saptagiri Public School',
    field: 'General Education',
    status: 'Completed',
    icon: <School size={24} />
  }
];

export default function Education() {
  return (
    <section id="education" className={styles.education}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>Academic Journey</span>
          <h2 className={styles.title}>Education</h2>
          <div className={styles.underline}></div>
        </div>

        <div className={styles.timeline}>
          {education.map((item, index) => (
            <div key={index} className={styles.timelineItem}>
              <div className={styles.point}>
                <div className={styles.iconCircle}>{item.icon}</div>
              </div>
              <div className={styles.content}>
                <span className={styles.status}>{item.status}</span>
                <h3>{item.type}</h3>
                <h4>{item.institution}</h4>
                <p>{item.field}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
