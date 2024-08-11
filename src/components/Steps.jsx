import React, { useEffect, useState, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import recipesData from '../assets/recipes.json';
// Importing SpeechRecognition for handling voice commands
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';


// Function to dynamically import all the images of a specified recipe
const importAll = (r) => {
  let images = {};
  r.keys().forEach((item, index) => {
    images[item.replace('./', '')] = r(item);
  });
  return images;
};

const images = importAll(require.context('../assets/Steps_images', false, /\.(png|jpe?g|svg)$/));

// Defining the Steps component which handles the step-by-step cooking instructions
function Steps() {
  const { name } = useParams(); // Extracting the recipe name from the URL parameters
  const [recipe, setRecipe] = useState(null);  // State to hold the detailed recipe information
  const [currentStep, setCurrentStep] = useState(0); // State to hold the current step index
  const [timer, setTimer] = useState(0); // State to hold the timer value for the current step
  const [totalDuration, setTotalDuration] = useState(0); // State to hold the total duration of all steps
  const [elapsedTime, setElapsedTime] = useState(0);   // State to hold the elapsed time
  const [isListening, setIsListening] = useState(false); // State to indicate if the voice command is listening
  const intervalRef = useRef(null); // Reference to store the interval ID for the timer
  const synth = window.speechSynthesis;   // Getting the speech synthesis interface

  // useEffect hook to fetch recipe data from the local JSON file for a specified recipe
  useEffect(() => {
    const foundRecipe = Object.values(recipesData.recipes).find(r => r.title === name);
    setRecipe(foundRecipe);
    const totalTime = foundRecipe.duration.reduce((acc, time) => acc + time, 0);
    setTotalDuration(totalTime);
    setTimer(foundRecipe.duration[0]);
    console.log('Recipe fetched:', foundRecipe);
  }, [name]);

  useEffect(() => {
    if (recipe) {
      setTimer(recipe.duration[currentStep]);
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      intervalRef.current = setInterval(() => {
        setTimer(prevTimer => {
          if (prevTimer > 0) {
            setElapsedTime(prevElapsedTime => prevElapsedTime + 1);
            return prevTimer - 1;
          } else {
            clearInterval(intervalRef.current);
            return 0;
          }
        });
      }, 1000);
    }
    return () => clearInterval(intervalRef.current);
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
      callback: () => speakInstruction(recipe.instructions[currentStep])
    }
  ];

  const { resetTranscript } = useSpeechRecognition({ commands });

  const speakInstruction = (instruction) => {
    synth.cancel();
    const utterance = new SpeechSynthesisUtterance(instruction);
    synth.speak(utterance);
  };

  const handleNextStep = () => {
    if (currentStep < recipe.instructions.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const startListening = () => {
    setIsListening(true);
    resetTranscript();
    SpeechRecognition.startListening({ continuous: true });
    speakInstruction(recipe.instructions[currentStep]);
  };

  const stopListening = () => {
    setIsListening(false);
    SpeechRecognition.stopListening();
  };

  const getStepImage = (recipeName, stepNumber) => {
    const imageName = `${recipeName}_${stepNumber + 1}.jpg`;
    return images[imageName];
  };

  const calculateProgress = () => {
    let timePassed = 0;
    for (let i = 0; i < currentStep; i++) {
      timePassed += recipe.duration[i];
    }
    timePassed += (recipe.duration[currentStep] - timer);
    return Math.round((timePassed / totalDuration) * 100);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  };

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-200 font-tenor-sans min-h-screen flex flex-col items-center py-20 px-4 md:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6 dark:bg-gray-800">
        <Link to="/recipes" className="text-blue-500 hover:underline mb-4 inline-block">
          &larr; Back to Recipes
        </Link>
        <h1 className="text-4xl font-bold mb-4">Step {currentStep + 1} of {recipe.instructions.length}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <img src={getStepImage(recipe.title, currentStep)} alt={`${recipe.title} step ${currentStep + 1}`} className="w-full h-auto rounded-lg shadow-md" />
          <div className="flex flex-col justify-center">
            <p className="text-xl mb-4">{recipe.instructions[currentStep]}</p>
            <div className="mb-4">
              <p className="text-lg font-semibold">Time remaining on this step: {formatTime(timer)}</p>
              <div className="w-full bg-gray-300 rounded-full h-6 overflow-hidden">
                <div className="bg-green-500 h-full rounded-full" style={{ width: `${calculateProgress()}%` }}></div>
              </div>
              <p className="text-lg font-semibold">{calculateProgress()}%</p>
            </div>
            <div className="flex justify-between">
              <button
                onClick={handlePrevStep}
                disabled={currentStep === 0}
                className="bg-blue-500 text-white px-6 py-2 mt-4 rounded-full shadow hover:bg-blue-700 transition duration-300 disabled:opacity-50"
              >
                Prev
              </button>
              <button
                onClick={handleNextStep}
                disabled={currentStep === recipe.instructions.length - 1}
                className="bg-blue-500 text-white px-6 py-2 mt-4 rounded-full shadow hover:bg-blue-700 transition duration-300 disabled:opacity-50"
              >
                Next
              </button>
            </div>
            <div className="mt-4 flex justify-center">
            <button
                onClick={startListening}
                className={`bg-gray-500 text-white px-6 py-2 mt-4 rounded-full hover:bg-blue-200 transition duration-300 w-full ${isListening ? 'hidden' : ''}`}
                disabled={isListening}
              >
                Start Voice Commands
              </button>
              <button
                onClick={stopListening}
                className={`bg-gray-500 text-white px-6 py-2 mt-4 rounded-full hover:bg-red-200 transition duration-300 w-full ${isListening ? '' : 'hidden'}`}
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
