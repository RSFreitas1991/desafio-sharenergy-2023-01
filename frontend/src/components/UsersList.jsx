import axios from 'axios';
import { React, useEffect, useState } from 'react';

function UsersList() {
  const NUMBER_OF_USERS = 12;
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
  }, [users]);

  useEffect(() => {
    if (!usersArray && users) {
      console.log(users);
      const array = users.map((index) => (
        <div
          key={ users.indexOf(index) }
          className="flex flex-col w-72 items-center bg-sharenergy-green
            text-white font-sans rounded-lg p-2 m-4"
        >
          <img
            alt={ index.name.fist }
            src={ index.picture.large }
            className="rounded-md"
          />
          <h1 className="font-bold underline underline-offset-2">Nome</h1>
          <h2>{`${index.name.title}. ${index.name.first} ${index.name.last}`}</h2>
          <h1 className="font-bold underline underline-offset-2">Email</h1>
          <h1>{`${index.email}`}</h1>
          <h1 className="font-bold underline underline-offset-2">Username</h1>
          <h1>{`${index.login.username}`}</h1>
          <h1 className="font-bold underline underline-offset-2">Idade</h1>
          <h1>{`${index.dob.age}`}</h1>
        </div>));
      setUsersArray(array);
    }
  }, [users, usersArray]);
  return (
    <div>
      {usersArray
        && (
          <div className="p-2 flex flex-wrap justify-center">
            {usersArray}
          </div>
        )}
    </div>
  );
}

export default UsersList;
