import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import recipesData from '../recipes.json';
import { FaArrowLeft } from 'react-icons/fa';

// Function to dynamically import all images
const importAll = (r) => {
  let images = {};
  r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

// Importing all recipe images from the specified directory
const images = importAll(require.context('../assets/Recipes_images', false, /\.(png|jpe?g|svg)$/));

// Defining the Recipes component which displays a list of recipes
function Recipes() {
  const [recipes, setRecipes] = useState([]);
  const navigate = useNavigate();

  // useEffect hook to fetch recipes data from the local JSON file when the component mounts
  useEffect(() => {
    const fetchedRecipes = Object.values(recipesData.recipes);
    setRecipes(fetchedRecipes);
    console.log('Recipes fetched:', fetchedRecipes);
  }, []);

  return (
    <main className="bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-200 font-tenor-sans min-h-screen flex flex-col items-center py-20 px-4 md:px-8">
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden w-full max-w-screen-xl p-8">
        <div className="container mx-auto px-4">
        <div className="relative mb-8 flex justify-center items-center">
      <Link to="/" className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-500 text-white py-2 px-3 rounded-full hover:bg-gray-700 transition duration-300 items-center text-sm md:left-4 md:block hidden" aria-label="Back">
        <FaArrowLeft />
      </Link>
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 drop-shadow-lg">
        CookMate's Recipes
      </h1>
    </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {recipes.map((recipe, index) => (
              <li key={index} className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105">
                <div onClick={() => navigate(`/recipes/${recipe.title}`)} className="cursor-pointer">
                  <img src={images[`${recipe.title}.jpg`]} alt={recipe.title} className="w-full h-48 object-cover" />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-bold mb-2 text-bla-700 text-center">{recipe.title}</h2>
                  <Link to={`/recipes/${recipe.title}/steps`}>
                    <button className="bg-gray-500 text-white px-6 py-2 mt-4 rounded-full hover:bg-blue-200 transition duration-300 w-full">
                      Click for interactive assistant
                    </button>
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}

export default Recipes;
