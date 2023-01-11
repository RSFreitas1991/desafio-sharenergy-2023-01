import React from 'react';

function Header() {
  const USERNAME = 'João';
  const WELLCOMEPHRASE = `Olá, ${USERNAME}`;
  return (
    <div className="w-full">
      <span
        className="flex justify-end m-1 font-bold"
      >
        {WELLCOMEPHRASE}
      </span>
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
