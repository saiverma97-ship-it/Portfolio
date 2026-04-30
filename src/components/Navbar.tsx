'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.nav} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          saiverma<span>.in</span>
        </Link>
        
        <ul className={`${styles.links} ${isMobileMenuOpen ? styles.mobileActive : ''}`}>
          <li><Link href="#home" onClick={() => setIsMobileMenuOpen(false)}>Home</Link></li>
          <li><Link href="#about" onClick={() => setIsMobileMenuOpen(false)}>About</Link></li>
          <li><Link href="#skills" onClick={() => setIsMobileMenuOpen(false)}>Skills</Link></li>
          <li><Link href="#education" onClick={() => setIsMobileMenuOpen(false)}>Education</Link></li>
          <li><Link href="#projects" onClick={() => setIsMobileMenuOpen(false)}>Projects</Link></li>
          <li><Link href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link></li>
        </ul>

        <button 
          className={styles.mobileToggle}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  );
}
