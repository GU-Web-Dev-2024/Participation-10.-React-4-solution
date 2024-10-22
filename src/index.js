import React from 'react';
// Importing React library, which is necessary to create React components and enable JSX functionality.

import ReactDOM from 'react-dom/client';
// Importing the ReactDOM library, specifically the new createRoot API, which is responsible for rendering our React components into the DOM.

import './index.css';
import App from './App';
// Importing the main component (App component) from the 'App.js' file. This is the root component of the React app, which will be rendered inside the "root" element.

const root = ReactDOM.createRoot(document.getElementById('root'));
// Creating a root DOM element using `ReactDOM.createRoot`, where React components will be rendered.
// The `getElementById('root')` function grabs the `<div id="root"></div>` element from the 'public/index.html' file.

root.render(
  <React.StrictMode>
    {/* The App component is rendered inside React's StrictMode, which is a tool for highlighting potential problems in the application. 
        It helps with identifying unsafe lifecycle methods, potential side effects, and other issues. 
        StrictMode doesn't render anything visible to the DOM; it's purely for development. */}
    <App />
  </React.StrictMode>
);
// This renders the root React component (`App`) inside the 'root' div in 'public/index.html'. 
// Any child components of `App` will also be rendered.
// The app is wrapped in `React.StrictMode` to provide helpful warnings and checks in development mode.
