import React, { useEffect, useState } from 'react';

const Gallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Dynamically import images from the assets/gallery folder
    const importImages = async () => {
      const imageModules = import.meta.glob('../../assets/gallery/*.{png,jpg,jpeg,svg}');
      const imagePromises = Object.keys(imageModules).map(async (key) => {
        const image = await imageModules[key](); // Call the function to get the URL
        return { src: image.default, name: key }; // Store both the URL and the filename
      });

      const resolvedImages = await Promise.all(imagePromises);
      // Sort images by filename
      const sortedImages = resolvedImages.sort((a, b) => a.name.localeCompare(b.name));
      setImages(sortedImages);
    };

    importImages();
  }, []);

  return (
    <section className="py-5 bg-gradient-to-b from-gray-300 to-gray-200">
      <div className="container mx-auto">
        <div className="grid grid-cols-4 gap-1 sm:gap-1">
          {images.map((image, index) => (
            <img
              key={index}
              src={image.src}
              className="w-full h-20 md:h-60 lg:h-65 
              object-cover rounded 
              transition-transform 
              duration-200 
              transform hover:scale-105"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;