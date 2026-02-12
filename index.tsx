
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

console.log("Obsession GYM: Starting initialization...");

const rootElement = document.getElementById('root');

if (rootElement) {
  try {
    const root = ReactDOM.createRoot(rootElement);
    // Using React.createElement to minimize syntax complexity in the root module
    root.render(
      React.createElement(React.StrictMode, null, 
        React.createElement(App)
      )
    );
    console.log("Obsession GYM: Application mounted.");
  } catch (err) {
    console.error("Obsession GYM: Mount failed", err);
  }
} else {
  console.error("Obsession GYM: Could not find root element.");
}
