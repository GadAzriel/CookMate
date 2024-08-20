# [CookMate - Interactive Cooking Website](https://cook-mate-kappa.vercel.app/)

![CookMate Logo](./public/Logo.jpg)

**CookMate** is an interactive web application designed to make cooking a seamless and enjoyable experience. Users can browse through a variety of recipes, get detailed instructions for preparing dishes, and engage in a step-by-step cooking guide with the **Interactive Cooking Assistant**.

## Key Features

- **Recipe Browsing**: Explore a curated list of recipes on the homepage, complete with beautiful images and detailed descriptions.
- **Detailed Instructions**: Each recipe includes comprehensive preparation steps, ingredient lists, and serving adjustments.
- **Interactive Cooking Guide**: The **Interactive Cooking** feature guides users through the cooking process with a visual progress bar, real-time instructions, and voice command support.
- **Responsive Design**: Optimized for various device sizes, ensuring a consistent user experience across desktops, tablets, and mobile devices.
- **Accessibility**: Navigation controls and UI elements are designed to be accessible and user-friendly, providing a smooth experience for all users.

## Technologies Used

- **React**: A JavaScript library for building user interfaces with a component-based architecture.
- **Tailwind CSS**: A utility-first CSS framework used for styling the application.
- **React Router**: A standard library for routing in React, allowing seamless navigation between different components.
- **Backend**: Next.js
- **Database**: MongoDB
- **Deployment**: Vercel


## Components

- **`App.jsx`**: The root component that renders the entire application and sets up routing.
- **`Header.jsx`**: Displays the site's header, including the brand logo, navigation links, and a toggle for dark mode.
- **`Footer.jsx`**: Renders the website's footer with copyright information and links to other pages.
- **`Recipes.jsx`**: Lists all recipes in a visually appealing carousel layout, allowing users to browse and select recipes.
- **`RecipeDetail.jsx`**: Provides detailed information about the selected recipe, including ingredients, instructions, and a video tutorial.
- **`Steps.jsx`**: Offers an interactive cooking session for the chosen recipe with voice command integration and step-by-step guidance.

## Pages

- **`Home.jsx`**: The landing page that introduces CookMate, featuring the brand’s message and a call-to-action to explore recipes.
- **`About.jsx`**: Provides information about CookMate, its mission, and the team behind the project.

## Setup and Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/GadAzriel/CookMate.git
2. Navigate to the project directory:
   ```bash
   cd cookmate
3. Install the dependencies:
   ```bash
   npm install
   npm install -D tailwindcss
   npx tailwindcss init
4. Run the application
   ```bash
   npm start
This will launch the CookMate website on localhost:3000.

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

Project Link: [ https://github.com/GadAzriel/CookMate]( https://github.com/GadAzriel/CookMate)  

## Deploymnet
The app is deployed using Vercel right here: 

## Backend
We used NextJS with MongoDB For the backend part, you can see the backend repository here: https://backendcookmate-5llw.vercel.app/

## Acknowledgments

### All contributors who participated in this project:

- Gad Azriel
- Almog Elbaz
- Tomer Ben-Lulu
- Yotam Gilad



