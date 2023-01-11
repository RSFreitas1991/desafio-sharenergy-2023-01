import React, { useState } from 'react';

function Login() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [remember, setRemember] = useState(false);
  const [submitButton] = useState(true);

  const handleChange = (target) => {
    const { name, value } = target.target;
    if (name === 'username') {
      setUsername(value);
    } else {
      setPassword(value);
    }
  };

  return (
    <div className="h-screen flex justify-center md:items-center">
      <div
        className="bg-sharenergy-green rounded-md
        w-full h-1/3 flex flex-col items-center justify-center md:flex-wrap md:max-w-sm"
      >
        <h2 className="text-white font-sans font-bold mb-4">
          SISTEMA DE GESTÃO DE CLIENTES
        </h2>
        <fieldset className="flex flex-col">
          <input
            type="text"
            name="username"
            onChange={ handleChange }
            value={ username || '' }
            className="border-2 border-black rounded-md m-2 max-w-xs p-1 hover:scale-110"
            placeholder="Nome de usuário"
            required
          />
          <input
            type="password"
            name="password"
            onChange={ handleChange }
            value={ password || '' }
            className="border-2 border-black rounded-md m-2 max-w-xs p-1 hover:scale-110"
            placeholder="Senha"
          />
          <button
            type="button"
            onClick={ () => console.log('teste') }
            disabled={ submitButton }
            className="border-2 rounded-md border-black
            m-2 max-w-xs p-1 text-white font-sans hover:bg-blue-300 hover:text-black"
          >
            LOGIN
          </button>
          <label
            htmlFor="remember me"
            className="text-white"
          >
            <input
              type="checkbox"
              id="remember me"
              name="remember me"
              value="Yes"
              className="mx-1"
              onChange={ (event) => (
                event.target.checked ? setRemember(true) : setRemember(false)) }
            />
            Mantenha-me conectado
          </label>
        </fieldset>
      </div>
    </div>
  );
}

export default Login;
