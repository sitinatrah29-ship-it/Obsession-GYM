import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  // Using React.createElement instead of JSX here avoids syntax errors 
  // if the entry script is loaded directly by the browser.
  root.render(
    React.createElement(React.StrictMode, null, 
      React.createElement(App)
    )
  );
} else {
  console.error("Root element not found. The app could not be mounted.");
}