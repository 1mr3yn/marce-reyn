import React from 'react';
import SparklesText from '../magicui/sparkles-text';
import mrChibiImage from '../../assets/chibi-wedding.png';
import WordFadeIn from '../magicui/word-fade-in';
import Datetime from './datetime';
import { CoolMode } from '../magicui/cool-mode';
import sunflowerImage from '../../assets/sunflower.png';

import sunflowerBg from '../../assets/sunflower-bg.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen p-10 md:p-20">
      <div
        className="absolute inset-0 bg-left bg-no-repeat bg-auto sm:bg-cover opacity-50 z-0"
        style={{ backgroundImage: `url(${sunflowerBg})` }}
      ></div>
      <div className="relative z-10 flex flex-col justify-center items-center text-center h-full">
        <div className="flex flex-col md:flex-row items-center justify-center">

          <div className="">

            <SparklesText
              text="Marce & Reyn"
              className="
              font-allura font-bold
              text-5xl sm:text-8xl md:text-8xl lg:text-8xl
              tracking-wider text-yellow-700 drop-shadow-[0_1px_1px_rgba(0,0,0,0.30)]"
            />


            <WordFadeIn
              words="Join us for the adventure of a lifetime"
              className="varela-round-regular text-4lg
              sm:text-lg italic md:text-xl md:mt-5 text-gray-800 tracking-wide
              lg:text-4xl "
            />

          </div>

          <div className="">

            <CoolMode
              options={{
                particle: sunflowerImage,
                particleSize: 10,
                particleColor: '#FFD700',
                particleSpeed: 0.1,
                particleDensity: 100,
                particleOpacity: 0.5,
                particleAlpha: 0.7
              }}>
              <img
                src={mrChibiImage}
                alt="Marce and Reyn"
                className="w-70 sm:w-80 md:w-90 lg:w-90 h-auto 
                            drop-shadow-lg 
                            animate-float, cursor-pointer" 
              />
            </CoolMode>

          </div>
        </div>

          <Datetime />

      </div>
    </section>
  );
};

export default Hero;
