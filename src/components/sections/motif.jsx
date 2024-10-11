// src/components/Footer.jsx
import React from 'react';

const Motif = () => {
  return (
    <section
      className="py-5"
      style={{
        background: 'linear-gradient(180deg,  #D1D5DB, #F3F4F6)'
      }}
    >
      <div className="container mx-auto text-center">

        <h2 className="text-3xl font-bold text-center mb-2">
          WEDDING ATTIRE
        </h2>

        <p className="pb-2 text-base sm:text-lg">
          Dress Code: <i className=""> Formal </i>
        </p>

        <div className="flex justify-center space-x-2 sm:space-x-4">
          <div className="w-10 h-10 sm:w-10 sm:h-10 rounded-full"
            style={{ backgroundColor: '#4B5320' }}
            title="Dark Olive Green"></div> {/* RGB(75, 83, 32) */}
          <div className="w-10 h-10 sm:w-10 sm:h-10 rounded-full"
            style={{ backgroundColor: '#1C5D8E' }}
            title="Teal"></div> {/* RGB(28, 93, 142) */}
          <div className="w-10 h-10 sm:w-10 sm:h-10 rounded-full"
            style={{ backgroundColor: '#C3B091' }}
            title="Light Brown"></div> {/* RGB(195, 176, 145) */}
          <div className="w-10 h-10 sm:w-10 sm:h-10 rounded-full"
            style={{ backgroundColor: '#DAB600' }}
            title="Gold"></div> {/* RGB(218, 182, 0) */}
          <div className="w-10 h-10 sm:w-10 sm:h-10 rounded-full"
            style={{ backgroundColor: '#257F91' }}
            title="Dark Cyan"></div> {/* RGB(37, 127, 145) */}
        </div>

        <p className="text-base sm:text-lg my-4 varela-round-regular">
          We kindly encourage our guests to wear these colors for our special day
        </p>
      </div>
    </section>
  );
};

export default Motif;