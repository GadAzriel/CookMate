import logo from '../assets/images/logo.png';
import background from '../assets/images/background.jpg';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <main className="bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-200 font-tenor-sans min-h-screen flex flex-col items-center py-10 px-4 md:px-8">
      <div className="container-custom mx-auto px-8 py-8 text-center card-custom shadow-lg bg-cover" style={{backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '800px', maxWidth: '1400px'}}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center justify-center w-full">
    <div className="flex justify-center md:justify-center">
      <img src={logo} alt="CookMate Logo" className="w-2/3 h-auto rounded-lg"/>
    </div>
    <div className="flex flex-col justify-center">
      <div className="card-custom shadow-lg text-center md:text-center p-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 drop-shadow-lg">
          WELCOME TO COOKMATE!
        </h1>
        <p className="mt-2 text-md md:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          Discover a world of culinary inspiration with our diverse collection of recipes and detailed preparation instructions.
          Enhance your cooking experience with our Interactive Cooking Assistant, featuring step-by-step guides, timer integration, and voice commands.
          Cook, share, and enjoy your culinary journey with CookMate!
        </p>
        <div className="mt-4 flex justify-center">
          <Link to="/recipes" className="bg-yellow-500 text-gray-900 font-bold px-6 py-2 rounded-full shadow-lg hover:bg-yellow-600 transition duration-300">
            Start your culinary experience
          </Link>
        </div>
      </div>
    </div>
  </div>
</div>
     
    </main>
  );
}

export default Home;
