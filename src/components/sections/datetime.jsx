import React from 'react';
import BoxReveal from '../magicui/box-reveal'

const Datetime = () => {
  return (
    <section className="p-2 sm:py-4 md:py-6 lg:py-8">

     <BoxReveal boxColor={"#0000"} duration={0.5}>
      
     <div className="mt-0 sm:mt-2 md:mt-2 lg:mt-5 varela-round-regular">
   
      <p className="text-center text-lg sm:text-2xl md:text-3xl lg:text-4xl mb-4 md:mb-6">DEC</p>
    
     <div className="flex justify-center items-center space-x-4 sm:space-x-6 md:space-x-8 lg:space-x-10">
       <div className="text-left">
         <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-2">FRIDAY</p>
         <div className="h-0.5 bg-black w-20 sm:w-24 md:w-28 lg:w-32 my-2 md:my-3"></div>
       </div>
       <p className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-yellow-600 drop-shadow-[0_2px_2px_rgba(0,0,0,0.35)] mx-4">20</p>
       <div className="text-right">
         <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-2">01:00 PM</p>
         <div className="h-0.5 bg-black w-20 sm:w-24 md:w-28 lg:w-32 my-2 md:my-3"></div>
       </div>
     </div>
     <p className="text-lg sm:text-2xl md:text-3xl lg:text-4xl mt-4 md:mt-6 tracking-wide">2024</p>

     <p className="text-center text-lg sm:text-xl 
     md:text-lg mt-6 md:mt-6 lg:mt-6 italic font-bold
     drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
     St. Mary Magdalene, Parish Church III,  Amadeo Cavite
     </p>
   </div>

   </BoxReveal>
   </section>
  );
};

export default Datetime;