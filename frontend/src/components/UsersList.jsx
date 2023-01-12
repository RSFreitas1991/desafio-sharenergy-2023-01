import axios from 'axios';
import { React, useContext, useEffect, useState } from 'react';
import AppContext from '../context/AppContext';

function UsersList() {
  const DEFAULT_NUMBER_OF_USERS = 12;
  const DEFAULT_USERS_PER_PAGE = 12;
  const [usersArrayShow, setUsersArrayShow] = useState();
  const [pages, setPages] = useState();
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(DEFAULT_USERS_PER_PAGE);
  const contextAPI = useContext(AppContext);
  const {
    usersPerPage,
    usersFetched,
    users,
    setUsers,
    usersArray,
    setUsersArray,
  } = contextAPI;
  useEffect(() => {
    const fetchUsers = async () => {
      let totalFetch = DEFAULT_NUMBER_OF_USERS;
      if (usersFetched) totalFetch = usersFetched;
      try {
        const response = await axios.get(`https://randomuser.me/api/?results=${totalFetch}`);
        const data = await response.data.results;
        setUsers(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUsers();
  }, [usersFetched, setUsers]);

  useEffect(() => {
    if (users) {
      const array = users.map((index) => (
        <div
          key={ users.indexOf(index) }
          className="flex flex-col w-72 items-center bg-sharenergy-green
            text-white font-sans rounded-lg p-2 m-4 cursor-pointer"
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
  }, [users, usersFetched, setUsersArray]);

  useEffect(() => {
    if (usersArray) {
      const tempShowUsersArray = [];
      const showUsersCard = () => {
        for (let index = start;
          index < end; index += 1) {
          tempShowUsersArray.push(usersArray[index]);
        }
      };
      showUsersCard();
      setUsersArrayShow(tempShowUsersArray);
    }
  }, [usersArray, usersPerPage, start, end]);

  useEffect(() => {
    let totalFetch = DEFAULT_NUMBER_OF_USERS;
    if (usersFetched) totalFetch = usersFetched;
    let defaultUsersPerPage = DEFAULT_USERS_PER_PAGE;
    if (usersPerPage) defaultUsersPerPage = usersPerPage;
    const NUMBER_OF_PAGES = Math.ceil(totalFetch / defaultUsersPerPage);
    const listOfPages = [];
    for (let index = 1; index <= NUMBER_OF_PAGES; index += 1) {
      listOfPages.push(
        <button
          type="button"
          key={ index }
          className="bg-sharenergy-green cursor-pointer rounded
            max-w-xs p-1 text-white font-sans hover:bg-blue-300
            hover:text-black font-bold"
          onClick={ () => {
            setStart((index - 1) * defaultUsersPerPage);
            setEnd(index * defaultUsersPerPage);
          } }
        >
          {index}
        </button>,
      );
    }
    setPages(listOfPages);
  }, [usersFetched, usersPerPage]);

  return (
    <div>
      {usersArrayShow
        && (
          <div className="p-2 flex flex-wrap justify-center">
            {usersArrayShow}
          </div>
        )}
      {pages
        && (
          <div className="p-2 flex flex-wrap justify-center">
            {pages}
          </div>
        )}
    </div>
  );
}

export default UsersList;
