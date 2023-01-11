import React, { useState } from 'react';

function Login() {
  const [username, setUsername] = useState();
  const [submitButton] = useState(false);

  const handleChange = (target) => {
    const { name, value } = target.target;
    setUsername(target.value);
    console.log(name, value);
  };

  return (
    <div className="h-screen flex justify-center md:items-center">
      <div
        className="bg-sharenergy-green rounded-md
        w-full h-1/3 flex flex-col items-center justify-center md:flex-wrap md:max-w-sm"
      >
        <h2 className="login-title">SISTEMA DE GESTÃO DE CLIENTES</h2>
        <fieldset className="flex flex-col">
          <input
            type="text"
            name="username"
            onChange={ handleChange }
            value={ username }
            className="border-2 border-black rounded-md m-2 max-w-xs p-1"
            placeholder="Nome de usuário"
            required
          />
          <input
            type="password"
            name="password"
            onChange={ handleChange }
            className="border-2 border-black rounded-md m-2 max-w-xs p-1"
            placeholder="Senha"
          />
          <button
            type="button"
            onClick={ () => console.log('teste') }
            disabled={ submitButton }
            className="border-2 rounded-md border-black
            m-2 max-w-xs p-1 text-white"
          >
            LOGIN
          </button>
        </fieldset>
      </div>
    </div>
  );
}

export default Login;
