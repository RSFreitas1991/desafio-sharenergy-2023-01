import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HiOutlineUser } from 'react-icons/hi';

function Header() {
  const USERNAME = 'João';
  const WELLCOMEPHRASE = `Olá, ${USERNAME}`;
  const navigate = useNavigate();
  return (
    <div className="w-full text-xs md:text-base">
      <div className="flex justify-end items-center p-2 mx-2">
        <span
          className="m-1 font-bold"
        >
          {WELLCOMEPHRASE}
        </span>
        <span className="flex items-center cursor-pointer">
          <HiOutlineUser
            className="bg-auto h-8 w-8"
          />
        </span>
      </div>
      <nav
        className="bg-sharenergy-green text-white font-sans
          font-bold flex justify-evenly items-center h-11"
      >
        <button
          type="button"
          className="border-2 p-1 rounded"
          onClick={ () => navigate('/Users') }
        >
          USUÁRIOS
        </button>
        <button
          type="button"
          className="border-2 p-1 rounded"
          onClick={ () => navigate('/HttpCat') }
        >
          HTTP CAT
        </button>
        <button
          type="button"
          className="border-2 p-1 rounded"
          onClick={ () => navigate('/RandomDog') }
        >
          RANDOM DOG
        </button>
        <button
          type="button"
          className="border-2 p-1 rounded"
        >
          CLIENTES
        </button>
      </nav>
    </div>

  );
}

export default Header;
