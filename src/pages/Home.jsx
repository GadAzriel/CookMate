import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-gray-900">WELCOME TO COOKMATE!</h1>
        <p className="mt-4 text-lg text-gray-700">
          Discover a world of culinary inspiration with our diverse collection of recipes and detailed preparation instructions.
          Enhance your cooking experience with our Interactive Cooking Assistant, featuring step-by-step guides, timer integration, and voice commands.
          Cook, share, and enjoy your culinary journey with CookMate!
        </p>
        <Link to="/recipes">
          <button className="mt-8 px-6 py-3 bg-blue-500 text-white rounded-full text-lg font-semibold hover:bg-blue-600">
            Start your culinary experience
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
