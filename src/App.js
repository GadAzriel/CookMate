import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Recipes from './components/Recipes';
import RecipeDetail from './components/RecipeDetail';
import Steps from './components/Steps';
import Footer from './components/Footer';
import Header from './components/Header';
import About from './pages/About';
import recipes from './assets/recipes.json';

// Main App component that defines the structure and routing of the application
function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow pt-16"> {/* Add padding to prevent content overlap with the fixed header */}
          <Routes>
          <Route path="/" element={<Home />} />
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/recipes/:id" element={<RecipeDetail recipes={recipes} />} />
            <Route path='/recipes/:name/steps' element={<Steps />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
