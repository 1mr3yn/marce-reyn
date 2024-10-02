import React from 'react';
import seco from '../../assets/seco.jpg';

const Gifts = () => {
  return (
    <section 
      className="bg-gray-200 py-16 min-h-screen bg-center bg-cover relative"
      style={{ backgroundImage: `url(${seco})` }}>
      <div className="absolute inset-0 bg-black opacity-50 backdrop-filter backdrop-blur-md"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-center mb-4 text-white">GIFTS</h2>
        <p className="text-base sm:text-lg text-center mb-8 max-w-2xl mx-auto text-white font-sans leading-relaxed">
          Your presence is the greatest gift we could ask for. 
          However, if you'd like to give us a tangible token of your love, 
          we'd be grateful for a contribution towards our future together.
        </p>
      </div>
    </section>

    
  );
};

export default Gifts;