import React, { useEffect, useState, useRef } from 'react';
import { useParams, Link } from 'react-router-dom'; // Importing necessary hooks for routing
import recipesData from '../assets/recipes.json'; // Importing recipes data from a JSON file
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'; // Importing speech recognition functionality
import background from '../assets/Steps_images/Background.jpg';  // Importing background image
import styles from '../style'; // Importing styles

const importAll = (r) => {
  let images = {};
  r.keys().forEach((item) => {
    images[item.replace('./', '')] = r(item); // Adding images to the images object
  });
  return images;
};

// Importing all step images from the specified directory
const images = importAll(require.context('../assets/Steps_images', false, /\.(png|jpe?g|svg)$/));

function Steps() {
  const { name } = useParams();  // Extracting the recipe name from the URL parameters
  const [recipe, setRecipe] = useState(null);  // State to hold the current recipe
  const [currentStep, setCurrentStep] = useState(0); // State to track the current step in the recipe
  const [timer, setTimer] = useState(0);   // State to manage the countdown timer for each step
  const [totalDuration, setTotalDuration] = useState(0); // State to track the total duration of the recipe in seconds
  const [isListening, setIsListening] = useState(false);   // State to check if the voice recognition is active
  const intervalRef = useRef(null);  // Ref to store the interval ID for clearing later
  const synth = window.speechSynthesis; // Speech synthesis object for speaking instructions

   // useEffect to find the recipe based on the name and initialize the state
  useEffect(() => {
    const foundRecipe = Object.values(recipesData.recipes).find(r => r.title === name);
    if (foundRecipe) {
      setRecipe(foundRecipe); // Set the recipe state
      const totalTime = foundRecipe.duration.reduce((acc, time) => acc + time, 0);
      setTotalDuration(totalTime); // Calculate and set the total duration of the recipe
      setTimer(foundRecipe.duration[0] * 60); // Set timer for the first step (in seconds)
    } else {
      console.error(`Recipe with title "${name}" not found.`);
    }
  }, [name]);

  // useEffect to handle the timer for the current step
  useEffect(() => {
    if (recipe) {
      setTimer(recipe.duration[currentStep] * 60); // Convert minutes to seconds
      if (intervalRef.current) {
        clearInterval(intervalRef.current); // Clear the previous interval
      }
      intervalRef.current = setInterval(() => {
        setTimer(prevTimer => {
          if (prevTimer > 0) {
            return prevTimer - 1; // Decrease the timer by 1 second
          } else {
            clearInterval(intervalRef.current); // Clear the interval when time is up
            return 0;
          }
        });
      }, 1000);
    }
    return () => clearInterval(intervalRef.current); // Cleanup the interval on unmount
  }, [currentStep, recipe]);

  const commands = [
    {
      command: 'next',
      callback: () => handleNextStep()
    },
    {
      command: 'previous',
      callback: () => handlePrevStep()
    },
    {
      command: 'start cooking',
      callback: () => speakInstruction(recipe?.instructions[currentStep])
    }
  ];

  // Destructuring resetTranscript from useSpeechRecognition
  const { resetTranscript } = useSpeechRecognition({ commands });

  // Function to speak the current instruction using speech synthesis
  const speakInstruction = (instruction) => {
    if (!instruction) return;
    synth.cancel(); // Stop any ongoing speech
    const utterance = new SpeechSynthesisUtterance(instruction);
    synth.speak(utterance); // Speak the current instruction
  };

  // Function to go to the next step in the recipe
  const handleNextStep = () => {
    if (currentStep < recipe?.instructions.length - 1) {
      setCurrentStep(currentStep + 1); // Move to the next step
    }
  };

  // Function to go to the previous step in the recipe
  const handlePrevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1); // Move to the previous step
    }
  };

  // Function to start listening for voice commands
  const startListening = () => {
    setIsListening(true);
    resetTranscript(); // Reset the transcript for voice recognition
    SpeechRecognition.startListening({ continuous: true });
    speakInstruction(recipe?.instructions[currentStep]);  // Speak the current instruction
  };

  // Function to stop listening for voice commands
  const stopListening = () => {
    setIsListening(false);
    SpeechRecognition.stopListening();
  };

  // Function to get the corresponding image for the current step
  const getStepImage = (recipeName, stepNumber) => {
    const imageName = `${recipeName}_${stepNumber + 1}.jpg`;
    return images[imageName];
  };

  // Function to calculate the progress of the recipe based on time passed
  const calculateProgress = () => {
    let timePassed = 0;
    for (let i = 0; i < currentStep; i++) {
      timePassed += recipe?.duration[i] * 60; // Convert minutes to seconds
    }
    timePassed += (recipe?.duration[currentStep] * 60 - timer); // Calculate remaining time in seconds
    return Math.round((timePassed / (totalDuration * 60)) * 100); // Calculate progress percentage
  };

  // Function to format the time remaining as MM:SS
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`; // Format minutes and seconds
  };

  if (!recipe) {
    return <div>Loading...</div>; // Display a loading message if the recipe is not yet loaded
  }

  return (
    <div 
      className={styles.stepsMain}
      style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className={styles.stepsContainer}>
        <Link to="/recipes" className={styles.stepsBackLink}>
          &larr; Back to Recipes
        </Link>
        <h1 className={styles.stepsTitle}>Step {currentStep + 1} of {recipe.instructions.length}</h1>
        <div className={styles.stepsGrid}>
          {/* Displaying the image for the current step */}
          <img src={getStepImage(recipe.title, currentStep)} alt={`${recipe.title} step ${currentStep + 1}`} className={styles.stepImage} />
          <div className="flex flex-col justify-center">
            <p className={styles.stepInstruction}>{recipe.instructions[currentStep]}</p>
            <div className={styles.timerContainer}>
              <p className={styles.timerText}>Time remaining on this step: {formatTime(timer)}</p>
              <div className={styles.progressBarContainer}>
                <div className={styles.progressBar} style={{ width: `${calculateProgress()}%` }}></div>
              </div>
              <p className={styles.progressText}>{calculateProgress()}%</p>
            </div>
            <div className={styles.navigationButtonsContainer}>
              {/* Button to go to the previous step */}
              <button
                onClick={handlePrevStep}
                disabled={currentStep === 0}
                className={styles.navigationButton}
              >
                Prev
              </button>
              {/* Button to go to the next step */}
              <button
                onClick={handleNextStep}
                disabled={currentStep === recipe.instructions.length - 1}
                className={styles.navigationButton}
              >
                Next
              </button>
            </div>
            <div className={styles.voiceCommandsContainer}>
              {/* Button to start voice commands */}
              <button
                onClick={startListening}
                className={`${styles.voiceCommandButton} ${isListening ? 'hidden' : ''}`}
                disabled={isListening}
              >
                Start Voice Commands
              </button>
              {/* Button to stop voice commands */}
              <button
                onClick={stopListening}
                className={`${styles.voiceCommandButton} ${isListening ? '' : 'hidden'}`}
                disabled={!isListening}
              >
                Stop Voice Commands
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Steps;
