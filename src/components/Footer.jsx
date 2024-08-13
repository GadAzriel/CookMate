import React from 'react';
import styles from '../style'; // Import styles from style.js

// Footer component to display at the bottom of the page
const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.footerText}>
      © 2024 CookMate. All rights reserved.
    </div>
  </footer>
);

export default Footer;
