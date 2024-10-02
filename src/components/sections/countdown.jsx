import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();
      let timeLeft = {};

      if (difference > 0) {
        timeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        };
      }

      return timeLeft;
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const padWithZero = (num) => String(num).padStart(2, '0');

  return (
    <section className="bg-gray-200 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-center mb-4 text-gray-800">
        Days until we say <span className='italic'>"I do"</span>
         </h2>
        <div className="flex justify-center space-x-2 sm:space-x-4 md:space-x-6">
          {['days', 'hours', 'minutes', 'seconds'].map((interval) => (
            <div key={interval} className="text-center">
              <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold animate-pulse">
                {padWithZero(timeLeft[interval] || 0)}
              </p>
              <p className="text-xs sm:text-sm md:text-base">{interval}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CountdownTimer;