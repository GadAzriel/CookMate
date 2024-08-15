import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import background from '../assets/videos/Background.jpg'; 
import styles from '../style'; 

const RecipeDetail = () => {
  // Extract the recipe ID from the URL parameters
  const { id } = useParams();
  
  // State to store the recipe data fetched from the API
  const [recipe, setRecipe] = useState(null);
  // State to manage the number of servings, defaulting to 1
  const [servings, setServings] = useState(1);

  useEffect(() => {
    // Fetch the recipe data from the API using the ID from the URL
    fetch("https://backendcookmate-5llw.vercel.app/api")
      .then((response) => response.json())
      .then((data) => {
        // Access the specific recipe using the ID
        const recipeData = data[0].recipes[id];
        // Store the fetched recipe data in the state
        setRecipe(recipeData);
      })
      .catch((error) => console.error("Error fetching recipe:", error));
  }, [id]); // The effect runs whenever the ID changes

  // Function to scale ingredient amounts based on the number of servings
  const scaleIngredient = (amount) => {
    return (amount * servings).toFixed(2);
  };

  // If the recipe data is not yet loaded, show a loading message
  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    // Main container for the recipe detail page with background styling
    <div 
      className={styles.recipeDetailMain}
      style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className={styles.recipeDetailContainer}>
        
        {/* Link to navigate back to the recipes list */}
        <Link to="/recipes" className={styles.backLink}>
          &larr; Back to Recipes
        </Link>
        
        {/* Recipe title */}
        <h1 className={styles.recipeDetailTitle}>{recipe.title}</h1>

        {/* Section to display the recipe video */}
        <div className={styles.videoSection}>
          <video 
            controls 
            className={styles.video}
          >
            <source src={require(`../assets/videos/${recipe.title}.mp4`)} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Input field to adjust the number of servings */}
        <label className={styles.servingsLabel}>
          <span className="text-lg font-semibold">Number of Servings:</span>
          <input
            type="number"
            value={servings}
            onChange={(e) => setServings(e.target.value)}
            className={styles.servingsInput}
            min="1"
          />
        </label>

        {/* Section to display the ingredients list */}
        <h2 className={styles.ingredientsTitle}>Ingredients</h2>
        <ul className={styles.ingredientsList}>
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>
              {scaleIngredient(recipe.amounts[index])} {ingredient}
            </li>
          ))}
        </ul>

        {/* Section to display the cooking instructions */}
        <h2 className={styles.instructionsTitle}>Instructions</h2>
        <ol className={styles.instructionsList}>
          {recipe.instructions.map((instruction, index) => (
            <li key={index} className={styles.instructionItem}>
              {instruction} <br />
              <span className={styles.instructionDuration}>Duration: {recipe.duration[index]} minutes</span>
            </li>
          ))}
        </ol>

        {/* Button to start the interactive cooking assistant */}
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
