import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importing routing components from react-router-dom
import Home from './pages/Home';
import Recipes from './components/Recipes';
import RecipeDetail from './components/RecipeDetail';
import Steps from './components/Steps';
import Footer from './components/Footer';
import Header from './components/Header';
import About from './pages/About';

// Main App component that defines the structure and routing of the application
function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header /> {/* Fixed header at the top of the page */}
        <main className="flex-grow pt-16"> {/* Main content area with padding to prevent overlap with header */}
          <Routes>
            <Route path="/" element={<Home />} /> {/* Route for the Home page */}
            <Route path="/recipes" element={<Recipes />} /> {/* Route for the Recipes page */}
            <Route path="/recipes/:id" element={<RecipeDetail />} /> {/* Route for detailed recipe view */}
            <Route path="/recipes/:name/steps" element={<Steps />} /> {/* Route for the step-by-step guide for a recipe */}
            <Route path="/about" element={<About />} /> {/* Route for the About page */}
          </Routes>
        </main>
        <Footer /> {/* Footer at the bottom of the page */}
      </div>
    </Router>
  );
}

export default App;
