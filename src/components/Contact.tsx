'use client';

import styles from './Contact.module.css';
import { Mail, GitFork, Link, Send, Camera, MessageCircle, Ghost, Users } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.info}>
            <span className={styles.label}>Get in Touch</span>
            <h2 className={styles.title}>Let's talk about your next project</h2>
            <p className={styles.description}>
              I am currently looking for an internship opportunity where I can apply my skills and knowledge. Feel free to reach out if you have any questions or just want to connect!
            </p>
            
            <div className={styles.connect}>
              <a href="mailto:contact@saiverma.in" className={styles.link}>
                <div className={styles.iconWrapper}><Mail size={20} /></div>
                <span>contact@saiverma.in</span>
              </a>
              <div className={styles.socials}>
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className={styles.socialBtn} title="GitHub"><GitFork size={20} /></a>
                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className={styles.socialBtn} title="LinkedIn"><Link size={20} /></a>
                <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer" className={styles.socialBtn} title="Instagram"><Camera size={20} /></a>
                <a href="https://wa.me/yourphonenumber" target="_blank" rel="noopener noreferrer" className={styles.socialBtn} title="WhatsApp"><MessageCircle size={20} /></a>
                <a href="https://snapchat.com/add/yourusername" target="_blank" rel="noopener noreferrer" className={styles.socialBtn} title="Snapchat"><Ghost size={20} /></a>
                <a href="https://facebook.com/yourusername" target="_blank" rel="noopener noreferrer" className={styles.socialBtn} title="Facebook"><Users size={20} /></a>
              </div>
            </div>
          </div>

          <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
            <div className={styles.inputGroup}>
              <input type="text" placeholder="Your Name" required />
            </div>
            <div className={styles.inputGroup}>
              <input type="email" placeholder="Your Email" required />
            </div>
            <div className={styles.inputGroup}>
              <textarea placeholder="Your Message" rows={5} required></textarea>
            </div>
            <button type="submit" className={styles.submitBtn}>
              Send Message <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
