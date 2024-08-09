import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import recipesData from '../recipes.json';
import { FaArrowLeft } from 'react-icons/fa';

// Function to dynamically import an image of a specified recipe
const importAll = (r) => {
  let images = {};
  r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('../assets/Recipes_images', false, /\.(png|jpe?g|svg)$/));

// Defining the RecipeDetail component, which displays detailed information about a specific recipe
function RecipeDetail() {
  const { name } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [numberOfDishes, setNumberOfDishes] = useState(1);

  //useEffect hook to fetch recipe data from the local JSON file
  useEffect(() => {
    const foundRecipe = Object.values(recipesData.recipes).find(r => r.title === name);
    setRecipe(foundRecipe);
    console.log('Recipe fetched:', foundRecipe);
  }, [name]);

  // For update the number of dishes
  const handleNumberOfDishesChange = (event) => {
    setNumberOfDishes(parseInt(event.target.value));
  };

  // Return loading message if recipe data is not yet loaded
  if (!recipe) {
    return <div>Loading...</div>;
  }

  // Formatting the ingredients list to adjust quantities based on the number of dishes
  const formatIngredients = () => {
    return recipe.ingredients.map((ingredient, index) => (
      <li key={index}>{`${(recipe.amounts[index] * numberOfDishes).toFixed(2)} ${ingredient}`}</li>
    ));
  };

  // Formatting the instructions list
  const formatInstructions = () => {
    return recipe.instructions.map((instruction, index) => (
      <li key={index}>{instruction}</li>
    ));
  };

  return (
    <div className="bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-200 font-tenor-sans min-h-screen flex flex-col items-center py-20 px-4 md:px-8">
      <div className="container-custom mx-auto px-4 text-center card-custom shadow-lg bg-white rounded-lg p-8">
            <div className="relative mb-8 flex justify-center items-center">
              <Link to="/recipes" className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-500 text-white py-2 px-3 rounded-full hover:bg-gray-700 transition duration-300 items-center text-sm md:left-4 md:block hidden"
               aria-label="Back"><FaArrowLeft />
              </Link>
              <h2 className="text-3xl font-bold text-blue-800 mx-auto" style={{ flexGrow: 1, textAlign: 'center' }}>{recipe.title}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <img src={images[`${recipe.title}.jpg`]} alt={recipe.title} className="w-full h-auto rounded-lg shadow-md" />
              <div className="flex flex-col justify-center">
                <div className="mb-4">
                <div className="text-left">
                  <label htmlFor="numberOfDishes" className=" block text-lg font-bold mb-2">Number of Dishes: 
                  <select id="numberOfDishes" className="border rounded-lg p-1 w-20" value={numberOfDishes} onChange={handleNumberOfDishesChange}>
                    {[...Array(10).keys()].map(i => (
                    // Mapping each number to an option element
                    <option key={i} value={i + 1}>{i + 1}</option>
                   ))}
                  </select>
                  </label>
                </div>
                <div className="text-left max-h-96 overflow-y-auto pr-4">
                  <p className="mb-2"><strong>Allergies:</strong> {recipe.allergies}</p>
                  <p className="mb-2"><strong>Difficulty:</strong> {recipe.difficulty}</p>
                  <p className="mb-2"><strong>Ingredients:</strong></p>
                  <ul className="list-disc list-inside mb-4">{formatIngredients()}</ul>
                  <p className="mb-2"><strong>Instructions:</strong></p>
                   <ol className="list-decimal list-inside mb-4">{formatInstructions()}</ol>
                </div>
                </div>
                <div className="mt-4 flex justify-center">
                  <Link to={`/recipes/${recipe.title}/steps`} className="bg-yellow-500 text-black px-6 py-2 mt-4 rounded-full hover:bg-yellow-600 transition duration-300">
                    Cook by Steps
                  </Link>
                </div>
              </div>
            </div>
        </div>
    </div>

  );
}

export default RecipeDetail;
