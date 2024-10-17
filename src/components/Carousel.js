import React, { useState } from "react";
import "../styles/Carousel.scss";


const ImageCarousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="image-carousel">
      <img src={images[currentImageIndex]} alt={`Apartment ${currentImageIndex + 1}`} />
      { images.length > 1 && (
        <>
      <button className="prev-button" onClick={prevImage}>❮</button>
      <button className="next-button" onClick={nextImage}>❯</button>
      </>
      )}
    </div>
  );
};

export default ImageCarousel;
