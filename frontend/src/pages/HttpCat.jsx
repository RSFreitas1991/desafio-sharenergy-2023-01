import React, { useState } from 'react';
import Header from '../components/Header';

function HttpCat() {
  const [statusCode, setStatusCode] = useState();
  const [catLink, setCatLink] = useState();

  const handleChange = (target) => {
    const { value } = target.target;
    setStatusCode(value);
  };

  const getCatImg = async () => {
    try {
      setCatLink(`https://http.cat/${statusCode}.jpg`);
      const imgTag = document.getElementById('catImg');
      imgTag.classList.remove('hidden');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Header />
      <div className="min-h-fit flex justify-center mt-2">
        <div
          className="bg-sharenergy-green rounded-md
          w-full h-1/3 flex flex-col items-center justify-center md:flex-wrap md:max-w-sm"
        >
          <h2 className="text-white font-sans font-bold m-4">
            Digite um status HTTP qualquer e receba uma imagem de um gatinho
          </h2>
          <img id="catImg" alt="cat img status http" src={ catLink } className="hidden" />
          <fieldset className="flex flex-col">
            <input
              type="text"
              name="username"
              onChange={ handleChange }
              value={ statusCode || '' }
              className="border-2 border-black rounded-md m-2 max-w-xs
                p-1 hover:scale-110"
              placeholder="Status HTTP"
              required
            />
            <button
              type="button"
              onClick={ () => getCatImg() }
              className="border-2 rounded-md border-black cursor-pointer
              m-2 max-w-xs p-1 text-white font-sans hover:bg-blue-300 hover:text-black"
            >
              ENVIAR
            </button>
          </fieldset>
        </div>
      </div>
    </div>
  );
}

export default HttpCat;
