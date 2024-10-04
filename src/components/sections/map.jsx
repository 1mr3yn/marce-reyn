import React from 'react';
import mapPin from '../../assets/map.png';

const Map = () => {
  return (
    <section className="flex flex-wrap">
      <div className="flex-1 pr-5 min-w-[300px]">
        {/* Space for the map QA code */}
      </div>
      <div className="flex-1 overflow-hidden">
        <img src={mapPin} alt="Map" className="w-full h-full" />
      </div>
    </section>
  );
};

export default Map;