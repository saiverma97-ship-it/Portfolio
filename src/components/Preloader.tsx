'use client';

import { useEffect, useState, useRef } from 'react';
import styles from './Preloader.module.css';

const NAME_LETTERS = ['s', 'a', 'i', 'v', 'e', 'r', 'm', 'a'];
const DOMAIN_LETTERS = ['.', 'i', 'n'];

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const progressRef = useRef(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    // Animate progress 0 → 100 over ~2.2 seconds
    const duration = 2200;
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const raw = Math.min(elapsed / duration, 1);
      // Ease out expo
      const eased = raw === 1 ? 1 : 1 - Math.pow(2, -10 * raw);
      const val = Math.round(eased * 100);
      progressRef.current = val;
      setProgress(val);

      if (raw < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        // Small pause at 100%, then start exit
        setTimeout(() => {
          setIsExiting(true);
          // After curtains slide out, hide entirely
          setTimeout(() => setIsHidden(true), 950);
        }, 300);
      }
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  if (isHidden) return null;

  return (
    <div
      className={`${styles.preloader} ${isExiting ? styles.exit : ''}`}
      aria-hidden="true"
    >
      {/* Decorative grid lines */}
      <div className={styles.lines}>
        <div className={styles.lineH} />
        <div className={styles.lineH} />
        <div className={styles.lineV} />
        <div className={styles.lineV} />
        <div className={styles.cornerDot} />
        <div className={styles.cornerDot} />
        <div className={styles.cornerDot} />
        <div className={styles.cornerDot} />
      </div>

      {/* Background glow */}
      <div className={styles.glowBlob} />

      {/* Curtain panels */}
      <div className={styles.curtainTop} />
      <div className={styles.curtainBottom} />

      {/* Center content */}
      <div className={styles.content}>
        {/* Animated logo */}
        <div className={styles.logo}>
          <div className={styles.logoLetters}>
            {NAME_LETTERS.map((char, i) => (
              <span
                key={i}
                className={styles.letter}
                style={{ animationDelay: `${0.05 + i * 0.06}s` }}
              >
                {char}
              </span>
            ))}
          </div>
          <span
            className={styles.domain}
            style={{ animationDelay: `${0.05 + NAME_LETTERS.length * 0.06}s` }}
          >
            .in
          </span>
        </div>

        {/* Tagline */}
        <p
          className={styles.tagline}
          style={{ animationDelay: '0.7s' }}
        >
          ECE Student &amp; Full Stack Developer
        </p>

        {/* Progress bar */}
        <div className={styles.progressBar}>
          <span className={styles.progressLabel}>{progress}%</span>
          <div
            className={styles.progressFill}
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
