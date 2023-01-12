import React, { useContext, useState } from 'react';
import AppContext from '../context/AppContext';

function FetchAndSearch() {
  const contextAPI = useContext(AppContext);
  const [tempUsersPerPage, setTempUsersPerPage] = useState();
  const [tempUsersFetch, setTempUsersFetch] = useState();
  const {
    setUsersPerPage,
    setUsersFetched,
    users,
    setUsers,
  } = contextAPI;
  const handleChange = (target) => {
    const { name, value } = target.target;
    if (name === 'usersFetch') {
      setTempUsersFetch(value);
    } else {
      setTempUsersPerPage(value);
    }
  };
  const search = () => {
    const { value } = document.getElementById('attributes');
    const term = document.getElementById('searchAttribute').value;
    switch (value) {
    case 'name': {
      const usersFiltered = users.filter((s) => s.name.first.includes(term)
            || s.name.last.includes(term));
      setUsers(usersFiltered);
      break;
    }
    case 'email': {
      const usersFiltered = users.filter((s) => s.email.includes(term));
      setUsers(usersFiltered);
      break;
    }
    case 'username': {
      const usersFiltered = users.filter((s) => s.login.username.includes(term));
      setUsers(usersFiltered);
      break;
    }
    default:
      break;
    }
  };
  return (
    <nav className="flex flex-col items-center md:flex md:justify-center">
      <fieldset className="flex">
        <div className="md:flex md:items-center">
          <input
            type="number"
            name="usersFetch"
            placeholder="Numero de usuários"
            onChange={ handleChange }
            value={ tempUsersFetch || '' }
            className="border-2 border-black rounded-md m-2 w-40 hover:scale-110"
          />
          <input
            type="number"
            name="usersPerPage"
            placeholder="Usuários por página"
            onChange={ handleChange }
            value={ tempUsersPerPage || '' }
            className="border-2 border-black rounded-md m-2 w-40 hover:scale-110"
          />
        </div>
        <button
          type="button"
          className="bg-sharenergy-green rounded-md cursor-pointer
              m-2 p-1 text-white font-sans hover:bg-blue-300
              hover:text-black font-bold"
          onClick={ () => {
            setUsersFetched(tempUsersFetch);
            setUsersPerPage(tempUsersPerPage);
          } }
        >
          Atualizar
        </button>
      </fieldset>
      <div className="flex">
        <fieldset className="flex items-center">
          <select name="attributes" id="attributes" className="h-7 m-2">
            <option value="name">Nome</option>
            <option value="email">Email</option>
            <option value="username">Username</option>
          </select>
          <input
            type="text"
            id="searchAttribute"
            placeholder="Termo de busca"
            className="border-2 border-black rounded-md m-2 w-40 hover:scale-110"
          />
        </fieldset>
        <button
          type="button"
          className="bg-sharenergy-green rounded-md cursor-pointer
              m-2 max-w-xs p-1 text-white font-sans hover:bg-blue-300
              hover:text-black font-bold"
          onClick={ () => search() }
        >
          Buscar
        </button>
      </div>
    </nav>
  );
}

export default FetchAndSearch;
