import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Hook to programmatically navigate between routes
import { FaSun, FaMoon } from 'react-icons/fa'; // icons
import logo from '../assets/Home_images/Logo.jpg'; // Importing the logo image
import styles from '../style'; // Import styles from style.js

const Header = () => {
  const navigate = useNavigate(); // Hook to programmatically navigate between routes
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Initialize state from localStorage or default to false
    return localStorage.getItem('isDarkMode') === 'true';
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Effect hook to apply dark mode class to the body element based on the state
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
    // Save dark mode state to localStorage
    localStorage.setItem('isDarkMode', isDarkMode);
  }, [isDarkMode]);

  // Function to toggle dark mode state
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Function to toggle mobile menu open/close state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        {/* Logo and title, clickable to navigate to home */}
        <div className={styles.headerLogoContainer} onClick={() => navigate('/')}>
          <img src={logo} alt="CookMate Logo" className={styles.headerLogoImage} />
          <h1 className={styles.headerTitle}>CookMate</h1>
        </div>

        {/* Navigation links for larger screens */}
        <nav className={styles.navLinksContainer}>
          <Link to="/" className={styles.navLink}>
            Home
          </Link>
          <Link to="/recipes" className={styles.navLink}>
            Recipes
          </Link>
          <Link to="/about" className={styles.navLink}>
            About
          </Link>

          {/* Dark Mode Toggle with Icons */}
          <button
            onClick={toggleDarkMode}
            className={styles.darkModeButton}
          >
            {isDarkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-blue-500" />}
          </button>
        </nav>

        {/* Mobile menu toggle button */}
        <div className={styles.mobileMenuButtonContainer}>
          <button onClick={toggleMenu} className={styles.mobileMenuButton}>
            ☰
          </button>
        </div>
      </div>

      {/* Mobile menu that appears when isMenuOpen is true */}
      {isMenuOpen && (
        <nav className={styles.mobileMenuContainer}>
          <Link to="/" className={styles.mobileNavLink} onClick={toggleMenu}>
            Home
          </Link>
          <Link to="/recipes" className={styles.mobileNavLink} onClick={toggleMenu}>
            Recipes
          </Link>
          <Link to="/about" className={styles.mobileNavLink} onClick={toggleMenu}>
            About
          </Link>

          {/* Dark Mode Toggle with Icons in Mobile Menu */}
          <button
            onClick={() => { toggleDarkMode(); toggleMenu(); }}
            className={styles.mobileDarkModeButton}
          >
            {isDarkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-blue-500" />}
          </button>
        </nav>
      )}
    </header>
  );
};

export default Header;
