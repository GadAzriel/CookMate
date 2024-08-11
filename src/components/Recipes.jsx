import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import recipes from '../assets/recipes.json';

// Utility function to import all images from a directory
const importAll = (r) => {
  let images = {};
  r.keys().forEach((item) => {
    images[item.replace('./', '')] = r(item);
  });
  return images;
};

// Importing all recipe images from the specified directory
const images = importAll(require.context('../assets/Recipes_images', false, /\.(png|jpe?g|svg)$/));

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'gray', borderRadius: '50%' }}
      onClick={onClick}
    />
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'gray', borderRadius: '50%' }}
      onClick={onClick}
    />
  );
};

const Recipes = () => {
  const recipeList = recipes.recipes;

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
    <div className="min-h-screen bg-gray-100 p-4 md:p-8 dark:bg-gray-900 dark:text-white">
      <h1 className="text-5xl font-bold text-center mb-12 text-green-600">Our Delicious Recipes</h1>
      <Slider {...settings}>
        {Object.keys(recipeList).map((id) => {
          const recipe = recipeList[id];
          const imageName = `${recipe.title.replace(/\s+/g, '')}.jpg`; // Adjusted for possible spaces in filenames
          const image = images[imageName];

          if (!image) {
            console.error(`Image not found: ${imageName}`);
            return null; // Or display a default image
          }

          return (
            <div key={id} className="p-4">
              <Link
                to={`/recipes/${id}`}
                className="group relative block bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 dark:bg-gray-800"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={image.default || image}
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
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Recipes;
