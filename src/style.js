// style.js

const styles = {
    // Styles for Home Component
    homeContainer: "min-h-screen bg-cover bg-center flex items-center justify-center",
    overlayContainer: "bg-black bg-opacity-50 min-h-screen flex items-center justify-center w-full px-4 sm:px-8",
    contentContainer: "text-center px-4 py-8 bg-white dark:bg-gray-900 bg-opacity-70 backdrop-blur-md rounded-xl shadow-lg max-w-full sm:max-w-2xl mx-auto",
    logoImage: "mx-auto mb-6 w-24 h-24 sm:w-40 sm:h-40 animate-bounce",
    title: "text-3xl sm:text-5xl font-bold text-gray-900 dark:text-white drop-shadow-lg",
    description: "mt-4 text-sm sm:text-lg text-gray-700 dark:text-gray-300 drop-shadow-lg",
    button: "mt-6 sm:mt-8 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-500 to-green-400 text-white rounded-full text-base sm:text-lg font-semibold hover:bg-gradient-to-l hover:from-green-400 hover:to-blue-500 transition-all duration-300 transform hover:scale-105",
  
    // Styles for About Component
    aboutMain: "min-h-screen p-4 md:p-8 dark:bg-gray-900 dark:text-white",
    aboutContainer: "max-w-4xl mx-auto bg-white bg-opacity-70 backdrop-blur-md rounded-lg shadow-lg p-8 dark:bg-gray-800 dark:bg-opacity-70",
    aboutLink: "text-blue-500 hover:underline mb-4 inline-block",
    aboutTitle: "text-4xl font-bold text-center mb-8",
    aboutTextContainer: "flex-1 text-center md:text-left mb-10 md:mb-0 md:pr-8",
    aboutSubTitle: "text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4",
    aboutText: "mt-4 text-lg leading-relaxed text-gray-800 dark:text-gray-200",
    teamContainer: "flex-1",
    teamTitle: "text-2xl font-bold text-blue-600 dark:text-blue-400 text-center mb-8",
    teamGrid: "grid grid-cols-1 sm:grid-cols-2 gap-8",
    teamMember: "team-member flex flex-col items-center mb-8",
    memberImage: "w-48 h-48 object-cover rounded-full mb-2 shadow-lg hover:scale-105 transition-transform duration-300",
    memberName: "font-semibold text-lg text-gray-800 dark:text-gray-200",
    thankYou: "text-2xl font-bold text-center text-green-800 dark:text-green-300 mt-8",
  
    // Styles for Header Component
    header: "bg-white shadow-md fixed w-full z-10 dark:bg-gray-900",
    headerContainer: "container mx-auto flex justify-between items-center py-4 px-4 md:px-8",
    headerLogoContainer: "flex items-center cursor-pointer",
    headerLogoImage: "w-12 h-12 mr-2 rounded-full",
    headerTitle: "text-xl font-bold text-gray-800 dark:text-white",
    navLinksContainer: "hidden md:flex space-x-6 items-center",
    navLink: "text-gray-800 hover:text-blue-500 dark:text-white font-bold transition-colors",
    darkModeButton: "text-gray-800 dark:text-white bg-gray-200 dark:bg-gray-700 p-2 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition duration-300",
    mobileMenuButtonContainer: "md:hidden flex items-center",
    mobileMenuButton: "text-gray-800 hover:text-blue-500 dark:text-white text-2xl",
    mobileMenuContainer: "md:hidden bg-white dark:bg-gray-900 shadow-md flex flex-col items-start space-y-2 py-2 px-4",
    mobileNavLink: "text-gray-800 hover:text-blue-500 dark:text-white font-bold w-full text-left",
    mobileDarkModeButton: "text-gray-800 dark:text-white bg-gray-200 dark:bg-gray-700 p-2 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition duration-300 w-full",
  
    // Styles for Footer Component
    footer: "bg-gray-800 text-white p-4 mt-8",
    footerText: "text-center",
  
    // Styles for Recipes Component
    recipesMain: "min-h-screen p-4 md:p-8 dark:bg-gray-900 dark:text-white",
    recipesContainer: "bg-white dark:bg-gray-900 bg-opacity-70 backdrop-blur-md rounded-xl shadow-lg max-w-full lg:max-w-6xl xl:max-w-7xl mx-auto max-h-full lg:max-h-[70vh] xl:max-h-[80vh]",
    recipesTitle: "text-5xl font-bold text-center mb-12 text-green-600 dark:text-green-400",
    recipeCard: "p-4",
    recipeLink: "group relative block bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 dark:bg-gray-800",
    recipeImageContainer: "relative overflow-hidden",
    recipeImage: "w-full h-72 object-cover transform transition-transform duration-500 group-hover:scale-110",
    recipeOverlay: "absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-75 dark:opacity-50",
    recipeInfoContainer: "p-4 absolute bottom-0 left-0 right-0 z-20 bg-black bg-opacity-50 dark:bg-gray-900 dark:bg-opacity-75",
    recipeTitle: "text-2xl font-bold text-white",
    recipeDetailsContainer: "flex items-center mt-2",
    recipeDifficultyBadge: "inline-block px-3 py-1 text-sm font-semibold text-white rounded-full",
    recipeAllergiesText: "ml-2 text-gray-300",
  
    // Styles for RecipeDetail Component
    recipeDetailMain: "min-h-screen p-4 md:p-8 dark:bg-gray-900 dark:text-white",
    recipeDetailContainer: "max-w-3xl mx-auto bg-white dark:bg-gray-900 bg-opacity-70 backdrop-blur-md rounded-lg shadow-md p-6 dark:bg-gray-800",
    backLink: "text-blue-500 hover:underline mb-4 inline-block",
    recipeDetailTitle: "text-4xl font-bold mb-4",
    videoSection: "mb-4",
    video: "w-full max-w-lg mx-auto aspect-video rounded-lg shadow-md",
    servingsLabel: "block mb-4",
    servingsInput: "ml-2 p-2 border border-gray-400 rounded w-20 dark:bg-gray-700 dark:border-gray-600",
    ingredientsTitle: "text-2xl font-semibold mb-4",
    ingredientsList: "list-disc list-inside mb-4",
    instructionsTitle: "text-2xl font-semibold mb-4",
    instructionsList: "list-decimal list-inside mb-4",
    instructionItem: "mb-4",
    instructionDuration: "text-sm text-gray-500",
    interactiveCookingButton: "bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 block text-center",
  
    // Styles for Steps Component
    stepsMain: "min-h-screen p-4 md:p-8 dark:bg-gray-900 dark:text-white",
    stepsContainer: "max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6 dark:bg-gray-800 bg-opacity-70 backdrop-blur-md",
    stepsBackLink: "text-blue-500 hover:underline mb-4 inline-block",
    stepsTitle: "text-4xl font-bold mb-4",
    stepsGrid: "grid grid-cols-1 md:grid-cols-2 gap-8",
    stepImage: "w-full h-auto rounded-lg shadow-md",
    stepInstruction: "text-xl mb-4",
    timerContainer: "mb-4",
    timerText: "text-lg font-semibold",
    progressBarContainer: "w-full bg-gray-300 rounded-full h-6 overflow-hidden dark:bg-gray-700",
    progressBar: "bg-green-500 h-full rounded-full",
    progressText: "text-lg font-semibold",
    navigationButtonsContainer: "flex justify-between",
    navigationButton: "bg-blue-500 text-white px-6 py-2 mt-4 rounded-full shadow hover:bg-blue-700 transition duration-300 disabled:opacity-50",
    voiceCommandsContainer: "mt-4 flex justify-center",
    voiceCommandButton: "bg-gray-500 text-white px-6 py-2 mt-4 rounded-full hover:bg-blue-200 transition duration-300 w-full",
  };
  
  export default styles;
  