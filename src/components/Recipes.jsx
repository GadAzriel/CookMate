import React from 'react';
import { Link } from 'react-router-dom';
import recipes from '../assets/recipes.json'; // Adjust the path as needed

// Utility function to import all images from a directory
const importAll = (r) => {
  let images = {};
  r.keys().forEach((item) => {
    images[item.replace('./', '')] = r(item);
  });
  return images;
}

// Importing all recipe images from the specified directory
const images = importAll(require.context('../assets/Recipes_images', false, /\.(png|jpe?g|svg)$/));

const Recipes = () => {
  const recipeList = recipes.recipes;

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8 dark:bg-gray-900 dark:text-white">
      <h1 className="text-5xl font-bold text-center mb-12">Our Delicious Recipes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Object.keys(recipeList).map((id) => {
          const recipe = recipeList[id];
          const imageName = `${recipe.title}.jpg`; // Adjust this if your filenames differ

          return (
            <Link
              to={`/recipes/${id}`}
              key={id}
              className="group relative block bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 dark:bg-gray-800"
            >
              <div className="relative overflow-hidden">
                <img
                  src={images[imageName]?.default || images[imageName]}
                  alt={recipe.title}
                  className="w-full h-56 object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-75"></div>
              </div>
              <div className="p-4 absolute bottom-0 left-0 right-0 z-20">
                <h2 className="text-2xl font-bold text-white">{recipe.title}</h2>
                <div className="flex items-center mt-2">
                  <span
                    className={`inline-block px-3 py-1 text-sm font-semibold text-white bg-${
                      recipe.difficulty === 'Beginner'
                        ? 'green'
                        : recipe.difficulty === 'Easy'
                        ? 'blue'
                        : recipe.difficulty === 'Intermediate'
                        ? 'orange'
                        : 'red'
                    }-500 rounded-full`}
                  >
                    {recipe.difficulty}
                  </span>
                  <span className="ml-2 text-gray-300">Allergies: {recipe.allergies}</span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Recipes;
