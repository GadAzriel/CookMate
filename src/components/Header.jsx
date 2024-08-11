import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/Images/logo.png';

const Header = () => {
  const navigate = useNavigate();
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Initialize state from localStorage or default to false
    return localStorage.getItem('isDarkMode') === 'true';
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
    // Save dark mode state to localStorage
    localStorage.setItem('isDarkMode', isDarkMode);
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md fixed w-full z-10 dark:bg-gray-900">
      <div className="container mx-auto flex justify-between items-center py-4 px-4 md:px-8">
        <div className="flex items-center cursor-pointer" onClick={() => navigate('/')}>
          <img src={logo} alt="CookMate Logo" className="w-12 h-12 mr-2" />
          <h1 className="text-xl font-bold text-gray-800 dark:text-white">CookMate</h1>
        </div>
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="text-gray-800 hover:text-blue-500 dark:text-white font-bold">Home</Link>
          <Link to="/recipes" className="text-gray-800 hover:text-blue-500 dark:text-white font-bold">Recipes</Link>
          <Link to="/about" className="text-gray-800 hover:text-blue-500 dark:text-white font-bold">About</Link>
          <button
            onClick={toggleDarkMode}
            className="text-gray-800 hover:text-blue-500 dark:text-white cursor-pointer font-bold bg-transparent border-none"
          >
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </nav>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-gray-800 hover:text-blue-500 dark:text-white">
            ☰
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden bg-white dark:bg-gray-900 shadow-md flex flex-col items-start space-y-2 py-2 px-4">
          <Link to="/" className="text-gray-800 hover:text-blue-500 dark:text-white" onClick={toggleMenu}>Home</Link>
          <Link to="/recipes" className="text-gray-800 hover:text-blue-500 dark:text-white" onClick={toggleMenu}>Recipes</Link>
          <Link to="/about" className="text-gray-800 hover:text-blue-500 dark:text-white" onClick={toggleMenu}>About</Link>
          <button
            onClick={() => { toggleDarkMode(); toggleMenu(); }}
            className="text-gray-800 hover:text-blue-500 dark:text-white cursor-pointer bg-transparent border-none"
          >
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </nav>
      )}
    </header>
  );
};

export default Header;