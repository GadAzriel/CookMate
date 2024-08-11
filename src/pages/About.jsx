import React from 'react';
import { Link } from 'react-router-dom';
import gad from '../assets/About_images/Gad.jpg';
import yotam from '../assets/About_images/Yotam.jpg';
import almog from '../assets/About_images/Almog.jpg';
import tomer from '../assets/About_images/Tomer.jpg';

function About() {
  return (
    <main className="min-h-screen bg-gray-100 p-4 md:p-8 dark:bg-gray-900 dark:text-white">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 dark:bg-gray-800 dark:text-white">
        
        {/* Back to Home Link */}
        <Link to="/" className="text-blue-500 hover:underline mb-4 inline-block">
          &larr; Back Home
        </Link>
        
        {/* Main Title */}
        <h1 className="text-4xl font-bold text-center mb-8">About CookMate</h1>

        <div className="flex flex-col md:flex-row items-start">

          {/* Left section - About Content */}
          <div className="flex-1 text-center md:text-left mb-10 md:mb-0 md:pr-8">
            <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">Welcome to CookMate!</h2>
            <p className="mt-4 text-lg leading-relaxed text-gray-800 dark:text-gray-200">
              At CookMate, we aim to make cooking enjoyable and accessible for everyone, whether you're a seasoned chef or just starting out.
              We provide a wide range of recipes and detailed instructions to help you create delicious meals with confidence.
            </p>
            <br />
            <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">Our Story</h2>
            <p className="mt-4 text-lg leading-relaxed text-gray-800 dark:text-gray-200">
              CookMate was born from a passion for making cooking easy and fun. We noticed many people felt overwhelmed in the kitchen,
              so we created a platform with user-friendly recipes and cooking tips. Today, CookMate is a trusted resource for home cooks around the world.
            </p>
            <br />
            <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">Our Recipes</h2>
            <p className="mt-4 text-lg leading-relaxed text-gray-800 dark:text-gray-200">
              We offer a diverse collection of recipes to suit all tastes and dietary preferences. From quick weeknight dinners to gourmet meals,
              our carefully curated recipes are designed to inspire creativity and ensure delicious results.
            </p>
            <br />
            <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">Interactive Cooking Assistant</h2>
            <p className="mt-4 text-lg leading-relaxed text-gray-800 dark:text-gray-200">
              CookMate's Interactive Cooking Assistant provides step-by-step guides, timer integration, and voice commands to make cooking easier.
              Whether you need a reminder to stir or a timer for baking, our assistant is here to help.
            </p>
          </div>

          {/* Right section - Team Members */}
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 text-center mb-8">Our Group</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              
              {/* Team Member: Gad Azriel */}
              <div className="team-member flex flex-col items-center mb-8">
                <img src={gad} alt="Gad Azriel" className="w-48 h-48 object-cover rounded-full mb-2 shadow-lg hover:scale-105 transition-transform duration-300" />
                <p className="font-semibold text-lg text-gray-800 dark:text-gray-200">Gad Azriel</p>
              </div>
              
              {/* Team Member: Yotam Gilad */}
              <div className="team-member flex flex-col items-center mb-8">
                <img src={yotam} alt="Yotam Gilad" className="w-48 h-48 object-cover rounded-full mb-2 shadow-lg hover:scale-105 transition-transform duration-300" />
                <p className="font-semibold text-lg text-gray-800 dark:text-gray-200">Yotam Gilad</p>
              </div>

              {/* Team Member: Almog Elbaz */}
              <div className="team-member flex flex-col items-center mb-8">
                <img src={almog} alt="Almog Elbaz" className="w-48 h-48 object-cover rounded-full mb-2 shadow-lg hover:scale-105 transition-transform duration-300" />
                <p className="font-semibold text-lg text-gray-800 dark:text-gray-200">Almog Elbaz</p>
              </div>

              {/* Team Member: Tomer Ben-lulu */}
              <div className="team-member flex flex-col items-center mb-8">
                <img src={tomer} alt="Tomer Ben-lulu" className="w-48 h-48 object-cover rounded-full mb-2 shadow-lg hover:scale-105 transition-transform duration-300" />
                <p className="font-semibold text-lg text-gray-800 dark:text-gray-200">Tomer Ben-lulu</p>
              </div>
            </div>
          </div>
        </div>

        {/* Closing Thank You Message */}
        <p className="text-2xl font-bold text-center text-green-800 dark:text-green-300 mt-8">
          Thank you for choosing CookMate.
        </p>
      </div>
    </main>
  );
}

export default About;
