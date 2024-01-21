import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { DarkModeContextProvided } from './context/darkModeReducer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DarkModeContextProvided>

      <App />
    </DarkModeContextProvided>
  </React.StrictMode>
);


