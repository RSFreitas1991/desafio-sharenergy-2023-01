import React from 'react';
import { HiOutlineUser } from 'react-icons/hi';

function Header() {
  const USERNAME = 'João';
  const WELLCOMEPHRASE = `Olá, ${USERNAME}`;
  return (
    <div className="w-full">
      <div className="flex justify-end p-2">
        <span
          className="m-1 font-bold"
        >
          {WELLCOMEPHRASE}
        </span>
        <span className="flex items-center">
          <HiOutlineUser
            className="bg-auto h-8 w-8"
          />
        </span>
      </div>
      <nav
        className="bg-sharenergy-green text-white font-sans
          font-bold flex justify-evenly items-center h-11"
      >
        <span
          className="border-2 p-1 rounded"
        >
          USUÁRIOS
        </span>
        <span
          className="border-2 p-1 rounded"
        >
          STATUS CODE HTTP
        </span>
        <span
          className="border-2 p-1 rounded"
        >
          CLIENTES
        </span>
      </nav>
    </div>

  );
}

export default Header;
