import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.logo}>
            Sai Verma
          </div>
          <p className={styles.copy}>
            &copy; {new Date().getFullYear()} Sai Verma. All rights reserved.
          </p>
          <p className={styles.tagline}>Designed & developed with precision and passion.</p>

        </div>
      </div>
    </footer>
  );
}
