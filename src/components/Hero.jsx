import React from "react";

import { openai } from "../assets";


const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-center items-center w-full mb-10 pt-3'>
        <img src={openai} alt='sumz_logo' className='w-10 object-contain' />

        {/* <button
          type='button'
          onClick={() =>
            window.open("https://github.com/TidbitsJS/Summize", "_blank")
          }
          className='black_btn'
        >
          GitHub
        </button> */}
      </nav>

      <h1 className='head_text'>
        Резюмировать статьи с помощью <br className='max-md:hidden' />
        <span className='orange_gradient '>OpenAI GPT-4</span>
      </h1>
      <h2 className='desc'>
        Упростите свое чтение с помощью Summize, обобщающего редактора статей с открытым исходным кодом, который превращает объемные статьи в четкие и краткие резюме.
      </h2>
    </header>
  );
};

export default Hero;
