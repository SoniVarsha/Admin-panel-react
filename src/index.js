import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './index.css';
// import Greeting from './greeting';
// import App from './App';
// import App from "./ninthaugustex"
// import App from './sevenaugustapp';
//  import App from "./App"
// import App from "./tenthaugustapp"
// import App from "./elevenapppre"
// import App from "./elevenapp"
import App from "./twelthaugustapp"



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <App />
    // </React.StrictMode>
  );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
