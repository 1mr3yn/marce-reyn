import React from 'react';
import { Clock, MapPin, Church, Music, Tent } from 'lucide-react';
import churchImage from '../../assets/church.jpg';
import venueImage from '../../assets/venue.jpg';
import afterPartyImage from '../../assets/after-party.jpg';

const TimelineItem = ({ time, event, location, icon: Icon, image, isLeft }) => (
  <div className="transition-all duration-300 ease-in-out transform 
  hover:scale-105 hover:shadow-lg rounded-lg mb-8 pb-8 border-yellow-600 px-4">
    <div className={`flex flex-col md:flex-row items-center ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
      <div className={`w-full md:w-1/2 ${isLeft ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'} mb-4 md:mb-0`}>
        <div className={`flex items-center ${isLeft ? 'md:justify-end' : 'md:justify-start'} mb-2`}>
          <Icon className={`w-6 h-6 ${isLeft ? 'md:mr-2' : 'md:ml-2'} text-yellow-600`} />
          <h3 className="text-xl font-bold uppercase mx-2"> {time} <span className='text-gray-700'>{event}</span></h3>
        </div>
        {/* <p className="text-sm text-gray-600 mb-1">{time}</p> */}
        <div className={`flex items-center text-sm text-gray-600 ${isLeft ? 'md:justify-end' : 'md:justify-start'}`}>
          <MapPin className="w-4 h-4 mr-1" />
          <p>{location}</p>
        </div>
      </div>
      <div className="w-full md:w-1/2">
        <img src={image} alt={event} className="w-full max-w-sm h-auto object-cover rounded-lg mx-auto" />
      </div>
    </div>
  </div>
);

const Timeline = () => {
  const events = [
    {
      time: "1:00 PM",
      event: "Ceremony",
      location: "Saint Mary Magdalene Parish, Amadeo, Cavite",
      icon: Church,
      image: churchImage
    },
    {
      time: "", //"3:00 PM",
      event: "Reception",
      location: "Leanels Garden, Kaybagal North, Tagaytay City",
      icon: Tent,
      image: venueImage
    },
    {
      time: "", //"6:00 PM",
      event: "After Party",
      location: "Leanels Garden, Kaybagal North, Tagaytay City",
      icon: Music,
      image: afterPartyImage
    },
  ];

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-serif font-bold text-center mb-2">OUR WEDDING DAY</h2>
        <p className="text-center italic mb-12">here's how it's gonna go down</p>
        <div className="max-w-4xl mx-auto">
          {events.map((event, index) => (
            <TimelineItem
              key={index}
              time={event.time}
              event={event.event}
              location={event.location}
              icon={event.icon}
              image={event.image}
              isLeft={index % 2 === 0}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Timeline;
