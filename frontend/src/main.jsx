import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import AppProvider from './context/AppProvider';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <AppProvider>
    <Router>
      <App />
    </Router>
  </AppProvider>,
);
