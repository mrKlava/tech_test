import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import './index.scss';
import { ResultContextProvider } from './resultContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ResultContextProvider>
      <App />
    </ResultContextProvider>
  </React.StrictMode>
);