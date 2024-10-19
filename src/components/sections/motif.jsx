import React from 'react';

const Motif = () => {
  return (
    <section
      className="py-10"
      style={{
        background: 'linear-gradient(180deg,  #D1D5DB, #F3F4F6)'
      }}
    >
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-center mb-2">
          WEDDING ATTIRE
        </h2>

        <p className="text-base sm:text-lg mt-4 mb-2 varela-round-regular">
          We kindly encourage our guests to wear these colors for our special day
        </p>
        <div className="flex justify-center space-x-1 sm:space-x-2">
          <div className="w-14 h-14 sm:w-14 sm:h-14 rounded-full"
            style={{ backgroundColor: '#4B5320' }}
            title="Dark Olive Green"></div> {/* RGB(75, 83, 32) */}
          <div className="w-14 h-14 sm:w-14 sm:h-14 rounded-full"
            style={{ backgroundColor: '#1C5D8E' }}
            title="Teal"></div> {/* RGB(28, 93, 142) */}
          <div className="w-14 h-14 sm:w-14 sm:h-14 rounded-full"
            style={{ backgroundColor: '#C3B091' }}
            title="Light Brown"></div> {/* RGB(195, 176, 145) */}
          <div className="w-14 h-14 sm:w-14 sm:h-14 rounded-full"
            style={{ backgroundColor: '#DAB600' }}
            title="Gold"></div> {/* RGB(218, 182, 0) */}
          <div className="w-14 h-14 sm:w-14 sm:h-14 rounded-full"
            style={{ backgroundColor: '#257F91' }}
            title="Dark Cyan"></div> {/* RGB(37, 127, 145) */}
        </div>

      
          <div className="text-center mt-6">
            <p className="font-medium italic"> Principal Sponsors </p>
            <p className='font-bold'> Traditional or Modern Barong  / Suit </p>
            <p className='font-bold'> Long Gown / Evening Cocktail Dress </p>
          </div>
          
          <div className="text-center mt-4">
            <p className='font-medium italic'> Guest </p>
            <p className='font-bold'> Semi-Formal </p>
          </div>

      </div>
    </section>
  );
};

export default Motif;
