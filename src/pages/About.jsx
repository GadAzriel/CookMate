import React from 'react';
import { Link } from 'react-router-dom';
import gad from '../assets/About_images/Gad.jpg';
import yotam from '../assets/About_images/Yotam.jpg';
import almog from '../assets/About_images/Almog.jpg';
import tomer from '../assets/About_images/Tomer.jpg';

function About() {
  return (
    <main className="bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-200 font-tenor-sans min-h-screen flex flex-col items-center py-20 px-4 md:px-8">
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden w-full max-w-screen-xl p-8">
      <div className="relative flex items-center mb-4">
          <Link to="/" className="absolute left-0 bg-gray-500 text-white text-center py-2 px-6 rounded-full hover:bg-gray-700 transition duration-300">Back</Link>
          <h1 className="text-5xl font-bold text-center w-full text-black-600">ABOUT COOKMATE</h1>
        </div>
        <div className="flex flex-col md:flex-row items-start">
          <div className="flex-1 text-center md:text-left mb-10 md:mb-0 md:pr-8">
            <h2 className="text-2xl font-bold text-black dark:text-white mb-4">Welcome to CookMate!</h2>
            <p className="mt-4 text-lg leading-relaxed text-gray-800 dark:text-gray-200">
              At CookMate, we aim to make cooking enjoyable and accessible for everyone, whether you're a seasoned chef or just starting out.
              We provide a wide range of recipes and detailed instructions to help you create delicious meals with confidence.
            </p>
            <br />
            <h2 className="text-2xl font-bold text-black dark:text-white mb-4">Our Story</h2>
            <p className="mt-4 text-lg leading-relaxed text-gray-800 dark:text-gray-200">
              CookMate was born from a passion for making cooking easy and fun. We noticed many people felt overwhelmed in the kitchen,
              so we created a platform with user-friendly recipes and cooking tips. Today, CookMate is a trusted resource for home cooks around the world.
            </p>
            <br />
            <h2 className="text-2xl font-bold text-black dark:text-white mb-4">Our Recipes</h2>
            <p className="mt-4 text-lg leading-relaxed text-gray-800 dark:text-gray-200">
              We offer a diverse collection of recipes to suit all tastes and dietary preferences. From quick weeknight dinners to gourmet meals,
              our carefully curated recipes are designed to inspire creativity and ensure delicious results.
            </p>
            <br />
            <h2 className="text-2xl font-bold text-black dark:text-white mb-4">Interactive Cooking Assistant</h2>
            <p className="mt-4 text-lg leading-relaxed text-gray-800 dark:text-gray-200">
              CookMate's Interactive Cooking Assistant provides step-by-step guides, timer integration, and voice commands to make cooking easier.
              Whether you need a reminder to stir or a timer for baking, our assistant is here to help.
            </p>
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-black dark:text-white text-center mb-8">Our Group</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="team-member flex flex-col items-center mb-8">
                <img src={gad} alt="Gad Azriel" className="w-48 h-48 object-cover rounded-full mb-2 shadow-lg" />
                <p className="font-semibold text-lg text-gray-800 dark:text-gray-200">Gad Azriel</p>
              </div>
              <div className="team-member flex flex-col items-center mb-8">
                <img src={yotam} alt="Yotam Gilad" className="w-48 h-48 object-cover rounded-full mb-2 shadow-lg" />
                <p className="font-semibold text-lg text-gray-800 dark:text-gray-200">Yotam Gilad</p>
              </div>
              <div className="team-member flex flex-col items-center mb-8">
                <img src={almog} alt="Almog Elbaz" className="w-48 h-48 object-cover rounded-full mb-2 shadow-lg" />
                <p className="font-semibold text-lg text-gray-800 dark:text-gray-200">Almog Elbaz</p>
              </div>
              <div className="team-member flex flex-col items-center mb-8">
                <img src={tomer} alt="Tomer Ben-lulu" className="w-48 h-48 object-cover rounded-full mb-2 shadow-lg" />
                <p className="font-semibold text-lg text-gray-800 dark:text-gray-200">Tomer Ben-lulu</p>
              </div>
            </div>
          </div>
        </div>
        <p className="text-2xl font-bold text-center text-green-800 dark:text-green-300 mt-8">Thank you for choosing CookMate.</p>
      </div>
    </main>
  );
}

export default About;
