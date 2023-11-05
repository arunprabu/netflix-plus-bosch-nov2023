import React from 'react'; // official react core library
import ReactDOM from 'react-dom/client'; // react-dom package -- for dom updates
import './index.css';
import App from './App'; // App component is imported
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
