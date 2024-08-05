import logo from '../assets/images/logo.png';
import background from '../assets/images/background.jpg';

// Defining the Home component which represents the home page of the application
function Home() {
  return (
    <main
      className="bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-200 font-tenor-sans min-h-screen flex flex-col items-center py-20 px-4 md:px-8 flex-grow: 1" >
      <div
        className="bg-cover bg-center shadow-lg rounded-lg overflow-hidden justify-center items-center w-full min-h-screen flex flex-col"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="container mx-auto flex flex-col md:flex-row items-center md:items-start justify-center mb-8">
          <div className="md:w-1/2 text-center md:text-left mb-4 md:mb-0">
            <img
              src={logo}
              alt="CookMate Logo"
              className="w-64 md:w-96 mx-auto md:mx-0" 
            />
          </div>
          <div className="md:w-1/2 md:ml-8 bg-white bg-opacity-75 p-8 rounded-lg shadow-md text-center max-w-xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold gradient-text font-tenor-sans">WELCOME TO COOKMATE!</h1>
            <p className="mt-4 leading-relaxed text-gray-800 dark:text-gray-200">
              Discover a world of culinary inspiration with our diverse collection of recipes and detailed preparation instructions.<br />
              Enhance your cooking experience with our Interactive Cooking Assistant, which features step-by-step guides, timer integration, and voice commands.<br />
              Cook, share, and enjoy your culinary journey with CookMate!
            </p>
            <br />
            <div className="mt-4 flex justify-center">
              <a href="/recipes" className="bg-gray-500 text-white px-6 py-2 mt-4 rounded-full hover:bg-blue-200 transition duration-300 w-full">
                Start your culinary experience
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
