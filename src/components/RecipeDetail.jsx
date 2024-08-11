import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import recipes from '../assets/recipes.json';
import background from '../assets/videos/Background.jpg'; // Importing the background image

const RecipeDetail = () => {
  // Extracting the recipe ID from the URL parameters
  const { id } = useParams();
  
  // Retrieving the recipe from the JSON file using the ID
  const recipe = recipes.recipes[id];
  
  // State to manage the number of servings, initialized to 1
  const [servings, setServings] = useState(1);

  // Function to scale the amount of each ingredient based on the number of servings
  const scaleIngredient = (amount) => {
    return (amount * servings).toFixed(2);
  };

  return (
    <div 
      className="min-h-screen p-4 md:p-8 dark:bg-gray-900 dark:text-white"
      style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-900 bg-opacity-70 backdrop-blur-md rounded-lg shadow-md p-6 dark:bg-gray-800">
        
        {/* Link to go back to the recipes page */}
        <Link to="/recipes" className="text-blue-500 hover:underline mb-4 inline-block">
          &larr; Back to Recipes
        </Link>
        
        {/* Recipe title */}
        <h1 className="text-4xl font-bold mb-4">{recipe.title}</h1>

        {/* Video Section */}
        <div className="mb-4">
          <video 
            controls 
            className="w-full max-w-lg mx-auto aspect-video rounded-lg shadow-md"
          >
            <source src={require(`../assets/videos/${recipe.title}.mp4`)} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Input field to change the number of servings */}
        <label className="block mb-4">
          <span className="text-lg font-semibold">Number of Servings:</span>
          <input
            type="number"
            value={servings}
            onChange={(e) => setServings(e.target.value)}
            className="ml-2 p-2 border border-gray-400 rounded w-20 dark:bg-gray-700 dark:border-gray-600"
            min="1"
          />
        </label>

        {/* Ingredients list */}
        <h2 className="text-2xl font-semibold mb-4">Ingredients</h2>
        <ul className="list-disc list-inside mb-4">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>
              {scaleIngredient(recipe.amounts[index])} {ingredient}
            </li>
          ))}
        </ul>

        {/* Instructions list */}
        <h2 className="text-2xl font-semibold mb-4">Instructions</h2>
        <ol className="list-decimal list-inside mb-4">
          {recipe.instructions.map((instruction, index) => (
            <li key={index} className="mb-4">
              {instruction} <br />
              {/* Displaying the duration for each step */}
              <span className="text-sm text-gray-500">Duration: {recipe.duration[index]} minutes</span>
            </li>
          ))}
        </ol>

        {/* Button to go to the Interactive Cooking Assistant */}
        <Link 
          to={`/recipes/${recipe.title}/steps`} 
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 block text-center"
        >
          Start Interactive Cooking
        </Link>
      </div>
    </div>
  );
};

export default RecipeDetail;
