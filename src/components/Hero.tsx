import Image from 'next/image';
import styles from './Hero.module.css';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.greeting}>Building Scalable Digital Solutions at the Intersection of Electronics & Software</p>
          <h1 className={styles.title}>
            Hi, I’m <span className="text-gradient">Sai Verma</span>
          </h1>
          <h2 className={styles.subtitle}>
            Electronics & Communication Engineering Student | Full-Stack Developer
          </h2>
          <p className={styles.description}>
            I design and develop high-performance web applications, combining strong fundamentals in electronics with modern software engineering practices.
          </p>
          <div className={styles.cta}>
            <a href="#contact" className={styles.btnPrimary}>
              Get in Touch <ArrowRight size={18} />
            </a>
            <a href="#projects" className={styles.btnSecondary}>
              View Projects
            </a>
          </div>
        </div>

        <div className={styles.visual}>
          <div className={styles.blob_visual}></div>
          <div className={styles.image_wrapper}>
            <Image 
              src="/avatar.png" 
              alt="Sai Verma" 
              width={400} 
              height={400} 
              className={styles.profile_img}
              loading="eager"
              priority
            />

          </div>
        </div>
      </div>
    </section>
  );
}
