import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

console.log("Obsession GYM: App boot sequence initiated.");

const container = document.getElementById('root');

if (container) {
  try {
    const root = ReactDOM.createRoot(container);
    // Using React.createElement to avoid any potential JSX parser issues in the entry file
    root.render(
      React.createElement(React.StrictMode, null, 
        React.createElement(App)
      )
    );
    console.log("Obsession GYM: Successfully mounted.");
  } catch (error) {
    console.error("Obsession GYM: Critical mount error:", error);
  }
} else {
  console.error("Obsession GYM: DOM root element not found.");
}