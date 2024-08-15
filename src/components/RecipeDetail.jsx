import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import background from '../assets/videos/Background.jpg'; 
import styles from '../style'; 

const RecipeDetail = () => {
  const { id } = useParams(); // ID of the recipe from the URL params
  
  const [recipe, setRecipe] = useState(null); // State to store the recipe data
  const [servings, setServings] = useState(1);

  useEffect(() => {
    // Fetch the specific recipe data from the API using the recipe ID
    fetch("https://backendcookmate-5llw.vercel.app/api")
      .then((response) => response.json())
      .then((data) => {
        const recipeData = data[0].recipes[id]; // Accessing the specific recipe using the ID
        setRecipe(recipeData); // Store the recipe data in state
      })
      .catch((error) => console.error("Error fetching recipe:", error));
  }, [id]);

  const scaleIngredient = (amount) => {
    return (amount * servings).toFixed(2);
  };

  if (!recipe) {
    return <div>Loading...</div>; // Show a loading message while the data is being fetched
  }

  return (
    <div 
      className={styles.recipeDetailMain}
      style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className={styles.recipeDetailContainer}>
        
        <Link to="/recipes" className={styles.backLink}>
          &larr; Back to Recipes
        </Link>
        
        <h1 className={styles.recipeDetailTitle}>{recipe.title}</h1>

        <div className={styles.videoSection}>
          <video 
            controls 
            className={styles.video}
          >
            <source src={require(`../assets/videos/${recipe.title}.mp4`)} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

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

        <h2 className={styles.ingredientsTitle}>Ingredients</h2>
        <ul className={styles.ingredientsList}>
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>
              {scaleIngredient(recipe.amounts[index])} {ingredient}
            </li>
          ))}
        </ul>

        <h2 className={styles.instructionsTitle}>Instructions</h2>
        <ol className={styles.instructionsList}>
          {recipe.instructions.map((instruction, index) => (
            <li key={index} className={styles.instructionItem}>
              {instruction} <br />
              <span className={styles.instructionDuration}>Duration: {recipe.duration[index]} minutes</span>
            </li>
          ))}
        </ol>

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
