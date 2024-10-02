import React, { useEffect, useRef } from 'react';
import baliBeach from '../../assets/bali-beach.jpg';

const Unplugged = () => {
  const sectionRef = useRef(null);
  const requestRef = useRef(null);
  const previousScrollY = useRef(0);

  const animate = () => {
    const scrollY = window.pageYOffset;
    const section = sectionRef.current;

    if (section && scrollY !== previousScrollY.current) {
      section.style.backgroundPositionY = `${scrollY * 0.5}px`;
      previousScrollY.current = scrollY;
    }

    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative py-16 min-h-screen bg-center bg-cover bg-fixed"
      style={{ backgroundImage: `url(${baliBeach})`, willChange: 'background-position-y' }}
    >
      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-serif font-bold text-center mb-6 text-white">
          UNPLUGGED CEREMONY
        </h2>
        <p className="text-lg sm:text-xl text-center italic mb-8 max-w-3xl mx-auto text-white">
          Please help us unplug and enjoy the moment. We've got photographers on hand to capture the ceremony, 
          so you can savor the experience without worrying about your phone.
        </p>
      </div>
    </section>
  );
};

export default Unplugged;


