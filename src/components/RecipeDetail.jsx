import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import recipesData from '../recipes.json';

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
    <div className="min-h-screen py-8 bg-gray-100 text-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center md:items-start bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="md:w-1/2 p-8">
            <h2 className="text-3xl font-bold mb-4 text-blue-800">{recipe.title}</h2>
            <div className="mb-4">
              <label htmlFor="numberOfDishes" className="block text-lg font-bold mb-2">Number of Dishes:</label>
              <select id="numberOfDishes" className="border rounded-lg p-1 w-20" value={numberOfDishes} onChange={handleNumberOfDishesChange}>
                {[...Array(10).keys()].map(i => (
                  // Mapping each number to an option element
                  <option key={i} value={i + 1}>{i + 1}</option>
                ))}
              </select>
            </div>
            <div className="text-left max-h-96 overflow-y-auto pr-4">
              <p className="mb-2"><strong>Allergies:</strong> {recipe.allergies}</p>
              <p className="mb-2"><strong>Difficulty:</strong> {recipe.difficulty}</p>
              <p className="mb-2"><strong>Ingredients:</strong></p>
              <ul className="list-disc list-inside mb-4">{formatIngredients()}</ul>
              <p className="mb-2"><strong>Instructions:</strong></p>
              <ol className="list-decimal list-inside mb-4">{formatInstructions()}</ol>
            </div>
            <div className="flex justify-center mt-4">
              <Link to={`/recipes/${recipe.title}/steps`} className="bg-gray-500 text-white text-center py-2 px-6 rounded-full hover:bg-gray-700 transition duration-300">
                Cook by Steps
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 flex items-center justify-center p-8">
            <img src={images[`${recipe.title}.jpg`]} alt={recipe.title} className="w-full h-auto object-cover rounded-lg shadow-md" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetail;
