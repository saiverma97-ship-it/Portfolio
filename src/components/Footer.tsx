import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.logo}>
            saiverma<span>.in</span>
          </div>
          <p className={styles.copy}>
            &copy; {new Date().getFullYear()} saiverma.in. Designed & Built with passion.
          </p>
        </div>
      </div>
    </footer>
  );
}
