import React, { useContext, useState } from 'react';
import AppContext from '../context/AppContext';

function FetchAndSearch() {
  const contextAPI = useContext(AppContext);
  const [tempUsersPerPage, setTempUsersPerPage] = useState();
  const [tempUsersFetch, setTempUsersFetch] = useState();
  const {
    setUsersPerPage,
    setUsersFetched,
  } = contextAPI;
  const handleChange = (target) => {
    const { name, value } = target.target;
    if (name === 'usersFetch') {
      setTempUsersFetch(value);
    } else {
      setTempUsersPerPage(value);
    }
  };
  return (
    <nav className="md:flex md:justify-center">
      <fieldset className="flex">
        <div>
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
              m-2 max-w-xs p-1 text-white font-sans hover:bg-blue-300
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
          <select className="h-7">
            <option value="Nome">Nome</option>
            <option value="Email">Email</option>
            <option value="Username">Username</option>
          </select>
          <input
            type="text"
            placeholder="Buscar por?"
            className="border-2 border-black rounded-md m-2 w-40 hover:scale-110"
          />
        </fieldset>
        <button
          type="button"
          className="bg-sharenergy-green rounded-md cursor-pointer
              m-2 max-w-xs p-1 text-white font-sans hover:bg-blue-300
              hover:text-black font-bold"
        >
          Buscar
        </button>
      </div>
    </nav>
  );
}

export default FetchAndSearch;
