import styles from './Projects.module.css';
import { Link, GitFork, Code, Cpu, Globe, Box } from 'lucide-react';
import Image from 'next/image';

const projects = [
  {
    title: 'Smart Home IoT Dashboard',
    description: 'A full-stack IoT platform for monitoring and controlling household electronics in real-time. Built with Next.js and WebSockets.',
    tags: ['Next.js', 'Node.js', 'Socket.io', 'Electronics'],
    link: '#',
    github: '#',
    icon: <Cpu size={20} />
  },
  {
    title: 'AI-Powered System Monitor',
    description: 'Real-time system health monitoring tool with predictive analysis for hardware failure using machine learning models.',
    tags: ['Python', 'React', 'FastAPI', 'TensorFlow'],
    link: '#',
    github: '#',
    icon: <Box size={20} />
  },
  {
    title: 'Precision E-Commerce Platform',
    description: 'A high-performance e-commerce solution with advanced filtering, real-time inventory tracking, and seamless checkout.',
    tags: ['TypeScript', 'Next.js', 'PostgreSQL', 'Stripe'],
    link: '#',
    github: '#',
    icon: <Globe size={20} />
  }
];

export default function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>Portfolio</span>
          <h2 className={styles.title}>Featured Projects</h2>
          <div className={styles.underline}></div>
        </div>

        <div className={styles.grid}>
          {projects.map((project, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.cardContent}>
                <div className={styles.projectHeader}>
                  <div className={styles.iconWrapper}>{project.icon}</div>
                  <div className={styles.links}>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.linkIcon} title="GitHub"><GitFork size={18} /></a>
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.linkIcon} title="Live Demo"><Link size={18} /></a>
                  </div>
                </div>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>
                <div className={styles.tags}>
                  {project.tags.map((tag, i) => (
                    <span key={i} className={styles.tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
