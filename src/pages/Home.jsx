import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/Home_images/Logo.jpg';
import background from '../assets/Home_images/Background.jpg';
import styles from '../style'; //add the style

// Home component representing the homepage
const Home = () => {
  return (
    <div 
      className={styles.homeContainer} // Applying the container style
      style={{ backgroundImage: `url(${background})` }} 
    >
      <div className={styles.overlayContainer}>
        <div className={styles.contentContainer}>
          <img src={Logo} alt="CookMate Logo" className={styles.logoImage} />
          <h1 className={styles.title}>WELCOME TO COOKMATE!</h1>
          <p className={styles.description}>
            Discover a world of culinary inspiration with our diverse collection of recipes and detailed preparation instructions.
            Enhance your cooking experience with our Interactive Cooking Assistant, featuring step-by-step guides, timer integration, and voice commands.
            Cook, share, and enjoy your culinary journey with CookMate!
          </p>
          <Link to="/recipes">
            <button className={styles.button}>
              Start your culinary experience
            </button>
          </Link> {/* Button linking to the recipes page */}
        </div>
      </div>
    </div>
  );
};

export default Home;
