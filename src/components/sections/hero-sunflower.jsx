import React from 'react';
import sunflowerBg from '../../assets/sunflower-bg.jpg';
import mrChibiImage from '../../assets/chibi-wedding.png';

const HeroSunflower = () => {
  return (

    <section
      style={{ backgroundImage: `url(${sunflowerBg})` }}
      className="
       bg-cover bg-bottom bg-no-repeat bg-auto
       relative justify-center 
      items-center text-center 
    min-h-screen p-10 md:p-20">

      <img
        src={mrChibiImage}
        alt="Marce and Reyn"
        className="w-56 sm:w-64 md:w-72 lg:w-80 h-auto 
                          drop-shadow-lg 
                          animate-float" // Using drop-shadow instead of box-shadow
      />

    </section>
  );
};

export default HeroSunflower;
