import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Users from './pages/Users';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import HttpCat from './pages/HttpCat';

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
          path="/Users"
          element={ <Users /> }
        />
        <Route
          path="/HttpCat"
          element={ <HttpCat /> }
        />
        <Route element={ <NotFound /> } />
      </Routes>
    </div>
  );
}

export default App;
