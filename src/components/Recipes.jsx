import React, { useEffect, useState } from 'react';
import Slider from 'react-slick'; 
import { Link } from 'react-router-dom'; 
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import background from '../assets/Recipes_images/Background.jpg'; 
import styles from '../style'; 

// Utility function to import all images from a directory
const importAll = (r) => {
  let images = {};
  r.keys().forEach((item) => {
    images[item.replace('./', '')] = r(item);
  });
  return images;
};

const images = importAll(require.context('../assets/Recipes_images', false, /\.(png|jpe?g|svg)$/));

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className} 
      style={{
        ...style, 
        display: 'block',
        background: 'gray',
        borderRadius: '60%',
        width: '40px', 
        height: '40px', 
        padding: '10px', 
        zIndex: '2',
      }}
      onClick={onClick} 
    />
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
        background: 'gray',
        borderRadius: '60%',
        width: '40px',
        height: '40px',
        padding: '10px',
        zIndex: '2',
      }}
      onClick={onClick}
    />
  );
};

const Recipes = () => {
  const [recipeList, setRecipeList] = useState([]); // State for storing recipes

  useEffect(() => {
    // Fetching recipes data from the backend API
    fetch("https://backendcookmate-5llw.vercel.app/api")
      .then((response) => response.json())
      .then((data) => {
        setRecipeList(data.recipes); // Updating state with fetched recipes
      })
      .catch((error) => console.error("Error fetching recipes:", error));
  }, []);

  const settings = {
    dots: true, 
    infinite: true, 
    speed: 500, 
    slidesToShow: 3, 
    slidesToScroll: 1, 
    nextArrow: <NextArrow />, 
    prevArrow: <PrevArrow />, 
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div
      className={styles.recipesMain}
      style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className={styles.recipesContainer}>
        <h1 className={styles.recipesTitle}>Our Delicious Recipes</h1>
        <Slider {...settings}>
          {recipeList.map((recipe, id) => {
            const imageName = `${recipe.title.replace(/\s+/g, '')}.jpg`; 
            const image = images[imageName]; 

            if (!image) {
              console.error(`Image not found: ${imageName}`);
              return null;
            }

            return (
              <div key={id} className={styles.recipeCard}>
                <Link
                  to={`/recipes/${id}`}
                  className={styles.recipeLink}
                >
                  <div className={styles.recipeImageContainer}>
                    <img
                      src={image.default || image}
                      alt={recipe.title}
                      className={styles.recipeImage}
                    />
                    <div className={styles.recipeOverlay}></div>
                  </div>
                  <div className={styles.recipeInfoContainer}>
                    <h2 className={styles.recipeTitle}>{recipe.title}</h2>
                    <div className={styles.recipeDetailsContainer}>
                      <span
                        className={`${styles.recipeDifficultyBadge} ${
                          recipe.difficulty === 'Beginner'
                            ? 'bg-green-500'
                            : recipe.difficulty === 'Easy'
                            ? 'bg-blue-500'
                            : recipe.difficulty === 'Intermediate'
                            ? 'bg-orange-500'
                            : 'bg-red-500'
                        }`}
                      >
                        {recipe.difficulty}
                      </span>
                      <span className={styles.recipeAllergiesText}>Allergies: {recipe.allergies}</span>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Recipes;
