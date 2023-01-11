import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Index from './pages/Index';
import Login from './pages/Login';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div>
      <Routes>
        <Route
          exact
          path="/"
          element={ <Login /> }
        />
        <Route
          path="/index"
          element={ <Index /> }
        />
        <Route element={ <NotFound /> } />
      </Routes>
    </div>
  );
}

export default App;
