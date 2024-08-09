import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const importAll = (r) => {
  let images = {};
  r.keys().forEach((item) => { images[item.replace('./', '')] = r(item); });
  return images;
};

const images = importAll(require.context('../assets/Recipes_images', false, /\.(png|jpe?g|svg)$/));

function Recipes() {
  const [currentRecipeIndex, setCurrentRecipeIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const navigate = useNavigate();
  const intervalRef = useRef(null);

  const stopAutoSlide = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  }, []);

  const handleNextRecipe = useCallback(() => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentRecipeIndex((prevIndex) => (prevIndex + 1) % Object.keys(images).length);
      setTimeout(() => setIsAnimating(false), 500);
    }
  }, [isAnimating]);

  const handlePrevRecipe = useCallback(() => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentRecipeIndex((prevIndex) => (prevIndex - 1 + Object.keys(images).length) % Object.keys(images).length);
      setTimeout(() => setIsAnimating(false), 500);
    }
  }, [isAnimating]);

  const startAutoSlide = useCallback(() => {
    stopAutoSlide();
    intervalRef.current = setInterval(handleNextRecipe, 5000);
  }, [handleNextRecipe, stopAutoSlide]);

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, [startAutoSlide, stopAutoSlide]);

  return (
    <main className="bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-200 font-tenor-sans min-h-screen flex flex-col items-center justify-center py-10 px-4 md:px-8">
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden w-full max-w-screen-xl p-4 md:p-8">
        <div className="container mx-auto px-4 text-center">
          <div className="relative mb-8 flex justify-center items-center">
            <Link
              to="/"
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-500 text-white py-2 px-3 rounded-full hover:bg-gray-700 transition duration-300 flex items-center text-sm md:left-4 md:block hidden"
              aria-label="Back"
            >
              <FaArrowLeft />
            </Link>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 drop-shadow-lg">
              CookMate's Recipes
            </h1>
          </div>
          <div className="relative">
            <div className="flex overflow-hidden items-center justify-center">
              <button
                onClick={handlePrevRecipe}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white rounded-full p-2 hover:bg-gray-900 transition duration-300 z-10"
                aria-label="Previous Recipe"
              >
                <FaChevronLeft size={20} />
              </button>
              <div
                className="flex transition-transform duration-500 ease-in-out transform w-full"
                style={{ transform: `translateX(-${currentRecipeIndex * 100}%)` }}
              >
                {Object.keys(images).map((key, index) => (
                  <div key={index} className="flex flex-col items-center min-w-full p-4">
                    <div className="w-full p-4 flex justify-center">
                      <img
                        src={images[key]}
                        alt={key.replace('.jpg', '')}
                        className="w-full max-w-md h-auto object-contain rounded-lg shadow-lg cursor-pointer"
                        onClick={() => navigate(`/recipes/${key.replace('.jpg', '')}`)}
                      />
                    </div>
                    <div className="text-center w-full mt-4">
                      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-gray-100">
                        {key.replace('.jpg', '')}
                      </h2>
                      <div className="flex flex-col gap-4 mt-4">
                        <Link to={`/recipes/${key.replace('.jpg', '')}`}>
                          <button className="bg-gray-700 text-white font-semibold px-6 py-3 rounded-full hover:bg-gray-800 transition duration-300 dark:bg-gray-900 dark:hover:bg-gray-700">
                            View Full Recipe
                          </button>
                        </Link>
                        <Link to={`/recipes/${key.replace('.jpg', '')}/steps`}>
                          <button className="bg-yellow-500 text-black font-semibold px-6 py-3 rounded-full hover:bg-yellow-600 transition duration-300">
                            Interactive Assistant
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
                aria-label="Next Recipe"
              >
                <FaChevronRight size={20} />
              </button>
            </div>
            <div className="flex justify-center mt-4">
              {Object.keys(images).map((_, index) => (
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
