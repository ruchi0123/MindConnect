import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';  // This is optional if you want to use global styles
import App from './App';  // Import the App component
import reportWebVitals from './reportWebVitals';

// Render the App component inside the 'root' div element
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
reportWebVitals();
