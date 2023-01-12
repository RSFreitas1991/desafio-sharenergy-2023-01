import axios from 'axios';
import { React, useEffect, useState } from 'react';

function UsersList() {
  const NUMBER_OF_USERS = 10;
  const [users, setUsers] = useState();
  const [usersArray, setUsersArray] = useState();
  useEffect(() => {
    if (!users) {
      const fetchUsers = async () => {
        try {
          const response = await axios.get(`https://randomuser.me/api/?results=${NUMBER_OF_USERS}`);
          const data = await response.data.results;
          setUsers(data);
        } catch (error) {
          console.log(error);
        }
      };
      fetchUsers();
    }
    console.log('executei o useEffect do fetch');
  }, [users]);

  useEffect(() => {
    if (!usersArray && users) {
      console.log(users);
      const array = users.map((index) => (
        <div key={ users.indexOf(index) }>
          <h1>{index.name.first}</h1>
        </div>));
      setUsersArray(array);
    }
    console.log('executei o useEffect do array');
  }, [users, usersArray]);
  return (
    <div>
      <h1>TESTE</h1>
      {usersArray
        && (
          <div>
            {usersArray}
          </div>
        )}
    </div>
  );
}

export default UsersList;
