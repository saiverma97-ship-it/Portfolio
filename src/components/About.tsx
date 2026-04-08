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
              I am <span className={styles.highlight}>saiverma.in</span>, currently pursuing my Engineering degree in Electronics and Communication at <span className={styles.highlight}>Guru Nanak Dev Engineering College, Bidar</span>.
            </p>
            <p>
              My background in ECE gives me a unique perspective on how hardware and software interoperate. I bridge the gap between high-level logic and low-level system design.
            </p>
            <p>
              I am a quick learner and a team player. I'm currently looking for an internship opportunity where I can apply my skills in both frontend and backend development to deliver innovative solutions.
            </p>
            
            <div className={styles.stats}>
              <div className={styles.statItem}>
                <h3>9+</h3>
                <p>Projects</p>
              </div>
              <div className={styles.statItem}>
                <h3>2+</h3>
                <p>Years Learning</p>
              </div>
            </div>
          </div>

          <div className={styles.featureSide}>
            <div className={styles.card}>
              <Zap className={styles.icon} size={32} />
              <h3>Quick Learner</h3>
              <p>Adapting rapidly to modern stacks like Next.js, React, and Node.js.</p>
            </div>
            <div className={styles.card}>
              <Users className={styles.icon} size={32} />
              <h3>Team Player</h3>
              <p>Committing to collaborative success and shared technical excellence.</p>
            </div>
            <div className={styles.card}>
              <Target className={styles.icon} size={32} />
              <h3>Solution Oriented</h3>
              <p>Focused on solving complex problems with efficient system design.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
