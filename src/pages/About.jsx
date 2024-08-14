import React from 'react';
import { Link } from 'react-router-dom';
import gad from '../assets/About_images/Gad.jpg';
import yotam from '../assets/About_images/Yotam.jpg';
import almog from '../assets/About_images/Almog.jpg';
import tomer from '../assets/About_images/Tomer.jpg';
import background from '../assets/About_images/Background.jpg';
import styles from '../style'; // import style

// About component representing the "About Us" page
function About() {
  return (
    <main 
      className={styles.aboutMain}
      style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className={styles.aboutContainer}>
        
        <Link to="/" className={styles.aboutLink}>
          &larr; Back Home {/* Link to navigate back to the home page */}
        </Link>
        
        <h1 className={styles.aboutTitle}>About CookMate</h1>

        <div className="flex flex-col md:flex-row items-start">

          <div className={styles.aboutTextContainer}>
            <h2 className={styles.aboutSubTitle}>Welcome to CookMate!</h2>
            <p className={styles.aboutText}>
              At CookMate, we aim to make cooking enjoyable and accessible for everyone, whether you're a seasoned chef or just starting out.
              We provide a wide range of recipes and detailed instructions to help you create delicious meals with confidence.
            </p>
            <br />
            <h2 className={styles.aboutSubTitle}>Our Story</h2>
            <p className={styles.aboutText}>
              CookMate was born from a passion for making cooking easy and fun. We noticed many people felt overwhelmed in the kitchen,
              so we created a platform with user-friendly recipes and cooking tips. Today, CookMate is a trusted resource for home cooks around the world.
            </p>
            <br />
            <h2 className={styles.aboutSubTitle}>Our Recipes</h2>
            <p className={styles.aboutText}>
              We offer a diverse collection of recipes to suit all tastes and dietary preferences. From quick weeknight dinners to gourmet meals,
              our carefully curated recipes are designed to inspire creativity and ensure delicious results.
            </p>
            <br />
            <h2 className={styles.aboutSubTitle}>Interactive Cooking Assistant</h2>
            <p className={styles.aboutText}>
              CookMate's Interactive Cooking Assistant provides step-by-step guides, timer integration, and voice commands to make cooking easier.
              Whether you need a reminder to stir or a timer for baking, our assistant is here to help.
            </p>
          </div>

          <div className={styles.teamContainer}>    {/* Right section - Team Members */}
            <h2 className={styles.teamTitle}>Our Group</h2>
            <div className={styles.teamGrid}>
              
              <div className={styles.teamMember}>
                <img src={gad} alt="Gad Azriel" className={styles.memberImage} />
                <p className={styles.memberName}>Gad Azriel</p>
              </div>
              
              <div className={styles.teamMember}>
                <img src={yotam} alt="Yotam Gilad" className={styles.memberImage} />
                <p className={styles.memberName}>Yotam Gilad</p>
              </div>

              <div className={styles.teamMember}>
                <img src={almog} alt="Almog Elbaz" className={styles.memberImage} />
                <p className={styles.memberName}>Almog Elbaz</p>
              </div>

              <div className={styles.teamMember}>
                <img src={tomer} alt="Tomer Ben-lulu" className={styles.memberImage} />
                <p className={styles.memberName}>Tomer Ben-lulu</p>
              </div>
            </div>
          </div>
        </div>

        <p className={styles.thankYou}>
          Thank you for choosing CookMate.
        </p>
      </div>
    </main>
  );
}

export default About;
