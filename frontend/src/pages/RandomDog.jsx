import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../components/Header';

function RandomDog() {
  const [dogLink, setDogLink] = useState();

  const getDogImg = async () => {
    try {
      const response = await axios.get('https://random.dog/woof');
      const data = await response.data;
      setDogLink(`https://random.dog/${data}`);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDogImg();
  }, []);

  return (
    <div>
      <Header />
      <div className="min-h-fit max-h-screen flex justify-center mt-2">
        <div
          className="bg-sharenergy-green rounded-md
          w-full h-1/3 flex flex-col items-center justify-center md:flex-wrap md:max-w-sm"
        >
          <img id="dogIMG" alt="Random Dog Img" src={ dogLink } className="" />
          <fieldset className="flex flex-col">
            <button
              type="button"
              onClick={ () => getDogImg() }
              className="border-2 rounded-md border-black cursor-pointer
              m-2 max-w-xs p-1 text-white font-sans hover:bg-blue-300 hover:text-black"
            >
              Nova Imagem
            </button>
          </fieldset>
        </div>
      </div>
    </div>
  );
}

export default RandomDog;