import React from 'react';
import Slider from 'react-slick'; // Importing React-slick for the carousel functionality
import { Link } from 'react-router-dom'; // Importing Link for navigation between pages
import 'slick-carousel/slick/slick.css'; // Importing necessary styles for the carousel
import 'slick-carousel/slick/slick-theme.css';
import recipes from '../assets/recipes.json'; // Importing the recipes data from a JSON file
import background from '../assets/Recipes_images/Background.jpg'; // Importing a background image for the page

// Utility function to import all images from a directory
const importAll = (r) => {
  let images = {};
  // Iterating over all files in the directory and adding them to the images object
  r.keys().forEach((item) => {
    images[item.replace('./', '')] = r(item); // Removing './' from the file path and saving the file in the images object
  });
  return images;
};

// Importing all recipe images from the specified directory
const images = importAll(require.context('../assets/Recipes_images', false, /\.(png|jpe?g|svg)$/));

// Custom component for the "Next" arrow in the carousel
const NextArrow = (props) => {
  const { className, style, onClick } = props; // Destructuring props passed by React Slick
  return (
    <div
      className={className} // Applying the default className provided by React Slick
      style={{
        ...style, // Applying the default styles provided by React Slick
        display: 'block',
        background: 'gray',
        borderRadius: '60%',
        width: '40px', // Increased width
        height: '40px', // Increased height
        padding: '10px', // Adjust padding for better sizing
        zIndex: '2',
      }}
      onClick={onClick} // Handling the click event to move to the previous slide
    />
  );
};

// Custom component for the "Previous" arrow in the carousel
const PrevArrow = (props) => {
  const { className, style, onClick } = props; // Destructuring props passed by React Slick
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
        background: 'gray',
        borderRadius: '60%',
        width: '40px', // Increased width
        height: '40px', // Increased height
        padding: '10px', // Adjust padding for better sizing
        zIndex: '2',
      }}
      onClick={onClick}
    />
  );
};

// Main component to display the list of recipes with a carousel
const Recipes = () => {
  const recipeList = recipes.recipes; // Accessing the list of recipes from the imported JSON file

  // Configuration settings for the carousel
  const settings = {
    dots: true,  // Show navigation dots below the carousel
    infinite: true, // Enables infinite looping of slides
    speed: 500, // Transition speed between slides
    slidesToShow: 3, // Number of slides to show at a time
    slidesToScroll: 1, // Number of slides to scroll at a time
    nextArrow: <NextArrow />, // Custom "Next" arrow component
    prevArrow: <PrevArrow />, // Custom "Previous" arrow component
    responsive: [
      {
        breakpoint: 1280, // Adjusted for extra large screens
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024, // Settings for tablet
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600, // Settings for small screens (mobile)
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div
      className="min-h-screen p-4 md:p-8 dark:bg-gray-900 dark:text-white"
      style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
       {/* Container for the carousel and heading */}
      <div className="bg-white dark:bg-gray-900 bg-opacity-70 backdrop-blur-md rounded-xl shadow-lg max-w-full lg:max-w-6xl xl:max-w-7xl mx-auto max-h-full lg:max-h-[70vh] xl:max-h-[80vh]">
        <h1 className="text-5xl font-bold text-center mb-12 text-green-600 dark:text-green-400">Our Delicious Recipes</h1>
         {/* Carousel displaying recipe cards */}
        <Slider {...settings}>
          {Object.keys(recipeList).map((id) => {
            const recipe = recipeList[id];
            const imageName = `${recipe.title.replace(/\s+/g, '')}.jpg`; // Constructing the image name from the recipe title
            const image = images[imageName]; // Fetching the corresponding image

            if (!image) {
              console.error(`Image not found: ${imageName}`);
              return null; // If the image is not found, log an error and return null
            }

            return (
              <div key={id} className="p-4">
                <Link
                  to={`/recipes/${id}`} // Link to the detailed recipe page
                  className="group relative block bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 dark:bg-gray-800"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={image.default || image} // Display the recipe image
                      alt={recipe.title}
                      className="w-full h-72 object-cover transform transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-75 dark:opacity-50"></div> {/* Gradient overlay for better readability */}
                  </div>
                  <div className="p-4 absolute bottom-0 left-0 right-0 z-20 bg-black bg-opacity-50 dark:bg-gray-900 dark:bg-opacity-75">
                    <h2 className="text-2xl font-bold text-white">{recipe.title}</h2>
                    <div className="flex items-center mt-2">
                      <span
                        className={`inline-block px-3 py-1 text-sm font-semibold text-white rounded-full ${
                          recipe.difficulty === 'Beginner'
                            ? 'bg-green-500'
                            : recipe.difficulty === 'Easy'
                            ? 'bg-blue-500'
                            : recipe.difficulty === 'Intermediate'
                            ? 'bg-orange-500'
                            : 'bg-red-500'
                        }`}
                      >
                        {recipe.difficulty} {/* Difficulty level of the recipe */}
                      </span>
                      <span className="ml-2 text-gray-300">Allergies: {recipe.allergies}</span>
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
