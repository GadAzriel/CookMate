import React from 'react'; // Importing React to use JSX
import ReactDOM from 'react-dom/client'; // Importing ReactDOM for rendering components
import './index.css'; // Importing the main CSS file for global styles
import App from './App'; // Importing the main App component
import "slick-carousel/slick/slick.css"; // Importing slick carousel base styles
import "slick-carousel/slick/slick-theme.css"; // Importing slick carousel theme styles

// Creating a root element to render the React app
const root = ReactDOM.createRoot(document.getElementById('root'));
// Rendering the App component inside <React.StrictMode> for highlighting potential issues
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

