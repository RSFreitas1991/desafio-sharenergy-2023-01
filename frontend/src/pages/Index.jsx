import React from 'react';
import FetchAndSearch from '../components/FetchAndSearch';
import Header from '../components/Header';
import UsersList from '../components/UsersList';

function Index() {
  return (
    <div>
      <Header />
      <FetchAndSearch />
      <UsersList />
    </div>
  );
}

export default Index;
