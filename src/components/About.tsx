import styles from './About.module.css';
import { Target, Zap, Users } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>Discovery</span>
          <h2 className={styles.title}>About Me</h2>
          <div className={styles.underline}></div>
        </div>

        <div className={styles.content}>
          <div className={styles.textSide}>
            <p>
              I’m an <span className={styles.highlight}>Electronics and Communication Engineering</span> student at <span className={styles.highlight}>Guru Nanak Dev Engineering College, Bidar</span>, with a strong passion for full-stack development.
            </p>
            <p>
              My academic background enables me to understand systems from both a hardware and software perspective. I enjoy building applications that are not only functional but also scalable, efficient, and user-focused.
            </p>
            <p>
              I’m currently seeking internship opportunities where I can contribute to real-world projects, collaborate with experienced teams, and continue growing as a developer.
            </p>
            
            <div className={styles.stats}>
              <div className={styles.statItem}>
                <h3>9+</h3>
                <p>Projects Completed</p>
              </div>
              <div className={styles.statItem}>
                <h3>2+</h3>
                <p>Years of Development</p>
              </div>
            </div>
            <p className={styles.focusText}>
              Strong focus on problem-solving and system design.
            </p>
          </div>

          <div className={styles.featureSide}>
            <div className={styles.card}>
              <Zap className={styles.icon} size={32} />
              <h3>Adaptability</h3>
              <p>Quick to learn and implement modern technologies like React, Next.js, and Node.js.</p>
            </div>
            <div className={styles.card}>
              <Users className={styles.icon} size={32} />
              <h3>Collaboration</h3>
              <p>Effective team player with strong communication and development workflow practices.</p>
            </div>
            <div className={styles.card}>
              <Target className={styles.icon} size={32} />
              <h3>Problem Solving</h3>
              <p>Focused on building efficient, scalable, and maintainable solutions.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
