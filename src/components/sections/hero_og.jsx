import React from 'react';
import SparklesText from '../magicui/sparkles-text';
import mrChibiImage from '../../assets/chibi-wedding.png';
import WordFadeIn from '../magicui/word-fade-in';


const Hero = () => {
  return (
    <section className="relative flex items-center justify-center min-h-screen pt-10 px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <div className="flex gap-2 text-[20vw] items-center justify-center">

          <SparklesText
            text="Reyn"
            className="font-lovely-home"
          />

          <SparklesText
            text="Marce"
            className="font-lovely-home"
          />

        </div>


          <img src={mrChibiImage} alt="Marce and Reyn"
            className="mx-auto w-40 sm:w-52 md:w-64 lg:w-80 h-auto mt-4 sm:mt-6" />


        <WordFadeIn words="Join us for the adventure of a lifetime"
          className="font-lovely-home italic text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mt-4 sm:mt-6" />
        {/* Date and Time Display */}
        <div className="mt-8 sm:mt-10 md:mt-12 lg:mt-16 font-serif">
          <p className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl mb-3 md:mb-4">DEC</p>
          <div className="flex justify-center items-center space-x-3 sm:space-x-4 md:space-x-5 lg:space-x-6">
            <div className="text-left">
              <p className="text-lg sm:text-xl md:text-xl lg:text-2xl">FRIDAY</p>
              <div className="h-0.5 bg-black w-20 sm:w-24 md:w-24 lg:w-28 my-1 md:my-2"></div>
            </div>
            <p className="text-5xl sm:text-6xl md:text-6xl lg:text-7xl font-bold text-yellow-600 drop-shadow-[0_2px_2px_rgba(0,0,0,0.35)]">20</p>
            <div className="text-right">
              <p className="text-lg sm:text-xl md:text-xl lg:text-2xl">01:00 PM</p>
              <div className="h-0.5 bg-black w-20 sm:w-24 md:w-24 lg:w-28 my-1 md:my-2"></div>
            </div>
          </div>
          <p className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl mt-3 md:mt-4">2024</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
