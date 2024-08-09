import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import recipesData from '../recipes.json';

const importAll = (r) => {
  let images = {};
  r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('../assets/Recipes_images', false, /\.(png|jpe?g|svg)$/));

function Recipes() {
  const [currentRecipeIndex, setCurrentRecipeIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [recipes, setRecipes] = useState([]);
  const navigate = useNavigate();
  const intervalRef = useRef(null);

  useEffect(() => {
    const fetchedRecipes = Object.values(recipesData.recipes);
    setRecipes(fetchedRecipes);
    startAutoSlide();
    return () => stopAutoSlide(); // Cleanup on unmount
  }, []);

  const startAutoSlide = () => {
    stopAutoSlide(); // Clear any existing interval
    intervalRef.current = setInterval(() => {
      handleNextRecipe();
    }, 5000); // 5-second interval
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const handleNextRecipe = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentRecipeIndex((prevIndex) => (prevIndex + 1) % recipes.length);
    setTimeout(() => setIsAnimating(false), 500); // 500ms matches transition duration
  };

  const handlePrevRecipe = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentRecipeIndex((prevIndex) => (prevIndex - 1 + recipes.length) % recipes.length);
    setTimeout(() => setIsAnimating(false), 500); // 500ms matches transition duration
  };

  useEffect(() => {
    startAutoSlide(); // Restart the slide interval when currentRecipeIndex changes
    return () => stopAutoSlide(); // Cleanup the interval on unmount
  }, [currentRecipeIndex]);

  return (
    <main className="bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-200 font-tenor-sans min-h-screen flex flex-col items-center py-20 px-4 md:px-8">
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden w-full max-w-screen-xl p-4 md:p-8">
        <div className="container mx-auto px-4 text-center">
          <div className="relative mb-8">
            <Link to="/"
              className="absolute left-0 bg-gray-500 text-white text-center py-1.5 px-3 md:px-4 rounded-full hover:bg-gray-700 transition duration-300 flex items-center text-sm">
              <FaArrowLeft /> </Link>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-red-500 drop-shadow-lg">
              CookMate's Recipes
            </h1>
          </div>
          <div className="relative">
            <div className="flex overflow-hidden items-center justify-center">
              <button
                onClick={handlePrevRecipe}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white rounded-full p-2 hover:bg-gray-900 transition duration-300 z-10"
              >
                <FaChevronLeft size={20} />
              </button>
              <div
                className={`flex transition-transform duration-500 ease-in-out transform w-full`}
                style={{ transform: `translateX(-${currentRecipeIndex * 100}%)` }}
              >
                {recipes.map((recipe, index) => (
                  <div key={index} className="flex flex-col items-center min-w-full p-4">
                    <div className="w-full p-4 flex justify-center">
                      <img
                        src={images[`${recipe.title}.jpg`]}
                        alt={recipe.title}
                        className="w-full max-w-md h-auto object-contain rounded-lg shadow-lg cursor-pointer"
                        onClick={() => navigate(`/recipes/${recipe.title}`)}
                      />
                    </div>
                    <div className="text-center w-full mt-4">
                      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-gray-100">
                        {recipe.title}
                      </h2>
                      <div className="flex flex-col sm:flex-row justify-center gap-4 mt-4">
                        <Link to={`/recipes/${recipe.title}/steps`}>
                          <button className="bg-yellow-500 text-black font-semibold px-6 py-3 rounded-full hover:bg-yellow-600 transition duration-300">
                            Interactive Assistant
                          </button>
                        </Link>
                        <Link to={`/recipes/${recipe.title}`}>
                          <button className="bg-gray-700 text-white font-semibold px-6 py-3 rounded-full hover:bg-gray-800 transition duration-300">
                            View Full Recipe
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <button
                onClick={handleNextRecipe}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white rounded-full p-2 hover:bg-gray-900 transition duration-300 z-10"
              >
                <FaChevronRight size={20} />
              </button>
            </div>
            <div className="flex justify-center mt-4">
              {recipes.map((_, index) => (
                <span
                  key={index}
                  className={`inline-block w-2 h-2 mx-1 rounded-full ${index === currentRecipeIndex ? 'bg-gray-900 dark:bg-gray-300' : 'bg-gray-500 dark:bg-gray-700'}`}
                ></span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Recipes;
