import React from 'react';
import styles from './customFooter.module.css';

export default function CustomFooter() {
  return (
    <footer className={styles.footerWrapper}>

      {/* LEFT SIDE — copyright + links */}
      <div className={styles.leftBlock}>
        <div className={styles.copyright}>
          © {new Date().getFullYear()} All Rights Reserved
        </div>

        <div className={styles.links}>
          <a href="https://5day.io/terms/cookie-policy/" target="_blank" rel="noopener noreferrer">
            Cookie Policy
          </a>
          <a href="https://5day.io/terms/privacy-policy/" target="_blank" rel="noopener noreferrer">
            Privacy Policy
          </a>
          <a href="https://5day.io/terms/terms-of-use/" target="_blank" rel="noopener noreferrer">
            Terms of Use
          </a>
        </div>
      </div>

      {/* RIGHT SIDE — social icons */}
      <div className={styles.rightBlock}>
        <a href="https://www.instagram.com/5day.io/" target="_blank" rel="noreferrer">
          <img src="/img/icons/Instagram.svg" alt="Instagram" />
        </a>
        <a href="https://www.linkedin.com/company/5day-io" target="_blank" rel="noreferrer">
          <img src="/img/icons/Linkedin.svg" alt="LinkedIn" />
        </a>
        <a href="https://www.youtube.com/@5day-io" target="_blank" rel="noreferrer">
          <img src="/img/icons/Youtube.svg" alt="YouTube" />
        </a>
      </div>

    </footer>
  );
}
