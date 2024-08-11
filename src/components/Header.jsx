import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Hook to programmatically navigate between routes
import { FaSun, FaMoon } from 'react-icons/fa'; // icons
import logo from '../assets/Home_images/Logo.jpg'; // Importing the logo image

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
    <header className="bg-white shadow-md fixed w-full z-10 dark:bg-gray-900">
      <div className="container mx-auto flex justify-between items-center py-4 px-4 md:px-8">
        {/* Logo and title, clickable to navigate to home */}
        <div className="flex items-center cursor-pointer" onClick={() => navigate('/')}>
          <img src={logo} alt="CookMate Logo" className="w-12 h-12 mr-2 rounded-full" />
          <h1 className="text-xl font-bold text-gray-800 dark:text-white">CookMate</h1>
        </div>

        {/* Navigation links for larger screens */}
        <nav className="hidden md:flex space-x-6 items-center">
          <Link to="/" className="text-gray-800 hover:text-blue-500 dark:text-white font-bold transition-colors">
            Home
          </Link>
          <Link to="/recipes" className="text-gray-800 hover:text-blue-500 dark:text-white font-bold transition-colors">
            Recipes
          </Link>
          <Link to="/about" className="text-gray-800 hover:text-blue-500 dark:text-white font-bold transition-colors">
            About
          </Link>

          {/* Dark Mode Toggle with Icons */}
          <button
            onClick={toggleDarkMode}
            className="text-gray-800 dark:text-white bg-gray-200 dark:bg-gray-700 p-2 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition duration-300"
          >
            {isDarkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-blue-500" />}
          </button>
        </nav>

        {/* Mobile menu toggle button */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-gray-800 hover:text-blue-500 dark:text-white text-2xl">
            ☰
          </button>
        </div>
      </div>

      {/* Mobile menu that appears when isMenuOpen is true */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white dark:bg-gray-900 shadow-md flex flex-col items-start space-y-2 py-2 px-4">
          <Link to="/" className="text-gray-800 hover:text-blue-500 dark:text-white font-bold w-full text-left" onClick={toggleMenu}>
            Home
          </Link>
          <Link to="/recipes" className="text-gray-800 hover:text-blue-500 dark:text-white font-bold w-full text-left" onClick={toggleMenu}>
            Recipes
          </Link>
          <Link to="/about" className="text-gray-800 hover:text-blue-500 dark:text-white font-bold w-full text-left" onClick={toggleMenu}>
            About
          </Link>

          {/* Dark Mode Toggle with Icons in Mobile Menu */}
          <button
            onClick={() => { toggleDarkMode(); toggleMenu(); }}
            className="text-gray-800 dark:text-white bg-gray-200 dark:bg-gray-700 p-2 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition duration-300 w-full"
          >
            {isDarkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-blue-500" />}
          </button>
        </nav>
      )}
    </header>
  );
};

export default Header;
