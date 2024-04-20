import React from 'react';
import ReactDOM from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import App from './App';
import { DarkModeContextProvided } from './context/darkModeReducer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DarkModeContextProvided>

      <App />
      <ToastContainer />
    </DarkModeContextProvided>
  </React.StrictMode>
);


