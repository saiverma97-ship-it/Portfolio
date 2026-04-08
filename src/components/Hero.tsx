import Image from 'next/image';
import styles from './Hero.module.css';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.greeting}>Building the future of electronics & software.</p>
          <h1 className={styles.title}>
            I'm <span className="text-gradient">saiverma.in</span>
          </h1>
          <h2 className={styles.subtitle}>
            ECE Student & Full Stack developer
          </h2>
          <p className={styles.description}>
            Engineering student at GNDEC Bidar, specializing in Electronics and Communication with a passion for building robust full-stack applications.
          </p>
          <div className={styles.cta}>
            <a href="#contact" className={styles.btnPrimary}>
              Get In Touch <ArrowRight size={18} />
            </a>
            <a href="#about" className={styles.btnSecondary}>
              Learn More
            </a>
          </div>
        </div>
        <div className={styles.visual}>
          <div className={styles.blob_visual}></div>
          <div className={styles.image_wrapper}>
            <Image 
              src="/profile.png" 
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
