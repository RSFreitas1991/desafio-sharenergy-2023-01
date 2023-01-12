import PropTypes from 'prop-types';
import React, { useMemo, useState } from 'react';
import AppContext from './AppContext';

export default function AppProvider({ children }) {
  const [usersPerPage, setUsersPerPage] = useState();
  const [usersFetched, setUsersFetched] = useState();
  const [users, setUsers] = useState();
  const [usersArray, setUsersArray] = useState();

  const contextAPI = useMemo(() => ({
    usersPerPage,
    setUsersPerPage,
    usersFetched,
    setUsersFetched,
    users,
    setUsers,
    usersArray,
    setUsersArray,
  }), [usersPerPage, usersFetched, users, usersArray]);

  return (
    <AppContext.Provider value={ contextAPI }>
      { children }
    </AppContext.Provider>
  );
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
