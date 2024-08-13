import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import recipes from '../assets/recipes.json'; // Importing the recipes data from a JSON file
import background from '../assets/videos/Background.jpg'; // Importing the background image
import styles from '../style'; // Import styles from style.js

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
      className={styles.recipeDetailMain}
      style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className={styles.recipeDetailContainer}>
        
        {/* Link to go back to the recipes page */}
        <Link to="/recipes" className={styles.backLink}>
          &larr; Back to Recipes
        </Link>
        
        {/* Recipe title */}
        <h1 className={styles.recipeDetailTitle}>{recipe.title}</h1>

        {/* Video Section */}
        <div className={styles.videoSection}>
          <video 
            controls 
            className={styles.video}
          >
             {/* Dynamically loading the video file based on the recipe title */}
            <source src={require(`../assets/videos/${recipe.title}.mp4`)} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Input field to change the number of servings */}
        <label className={styles.servingsLabel}>
          <span className="text-lg font-semibold">Number of Servings:</span>
          <input
            type="number"
            value={servings} // The current value of servings
            onChange={(e) => setServings(e.target.value)} // Update the state when the user changes the number of servings
            className={styles.servingsInput}
            min="1" // Ensure the number of servings is at least 1
          />
        </label>

        {/* Ingredients list */}
        <h2 className={styles.ingredientsTitle}>Ingredients</h2>
        <ul className={styles.ingredientsList}>
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>
              {/* Scaling the amount of each ingredient based on the number of servings */}
              {scaleIngredient(recipe.amounts[index])} {ingredient}
            </li>
          ))}
        </ul>

        {/* Instructions list */}
        <h2 className={styles.instructionsTitle}>Instructions</h2>
        <ol className={styles.instructionsList}>
          {recipe.instructions.map((instruction, index) => (
            <li key={index} className={styles.instructionItem}>
              {instruction} <br />
              {/* Displaying the duration for each step */}
              <span className={styles.instructionDuration}>Duration: {recipe.duration[index]} minutes</span>
            </li>
          ))}
        </ol>

        {/* Button to go to the Interactive Cooking Assistant */}
        <Link 
          to={`/recipes/${recipe.title}/steps`} 
          className={styles.interactiveCookingButton}
        >
          Start Interactive Cooking
        </Link>
      </div>
    </div>
  );
};

export default RecipeDetail;
