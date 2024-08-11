import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/Home_images/Logo.jpg'; 
import background from '../assets/Home_images/Background.jpg';

const Home = () => {
  return (
    <div 
      className="min-h-screen bg-cover bg-center flex items-center justify-center" 
      style={{ backgroundImage: `url(${background})` }} 
    >
      <div className="bg-black bg-opacity-50 min-h-screen flex items-center justify-center w-full px-4 sm:px-8">
        <div className="text-center px-4 py-8 bg-white dark:bg-gray-900 bg-opacity-70 backdrop-blur-md rounded-xl shadow-lg max-w-full sm:max-w-2xl mx-auto">
          {/* Logo image with bounce animation */}
          <img src={Logo} alt="CookMate Logo" className="mx-auto mb-6 w-24 h-24 sm:w-40 sm:h-40 animate-bounce" />
          <h1 className="text-3xl sm:text-5xl font-bold text-gray-900 dark:text-white drop-shadow-lg">WELCOME TO COOKMATE!</h1>
          <p className="mt-4 text-sm sm:text-lg text-gray-700 dark:text-gray-300 drop-shadow-lg">
            Discover a world of culinary inspiration with our diverse collection of recipes and detailed preparation instructions.
            Enhance your cooking experience with our Interactive Cooking Assistant, featuring step-by-step guides, timer integration, and voice commands.
            Cook, share, and enjoy your culinary journey with CookMate!
          </p>
           {/* Button linking to the recipes page with hover effects */}
          <Link to="/recipes">
            <button className="mt-6 sm:mt-8 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-500 to-green-400 text-white rounded-full text-base sm:text-lg font-semibold hover:bg-gradient-to-l hover:from-green-400 hover:to-blue-500 transition-all duration-300 transform hover:scale-105">
              Start your culinary experience
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
