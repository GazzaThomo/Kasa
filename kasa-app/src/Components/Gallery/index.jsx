import React, { useState } from "react";
import arrowBack from "../../assets/arrow-back.svg";
import arrowForward from "../../assets/arrow-forward.svg";

function Gallery({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  console.log(pictures);

  //neat trick here, use modulo to get back to the first image
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % pictures.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + pictures.length) % pictures.length
    );
  };

  return (
    <div className="gallery">
      {pictures.length > 1 && (
        <button onClick={prevImage} className="gallery-button prev">
          <img src={arrowBack} alt="Previous" />
        </button>
      )}
      <div className="image-container">
        <img src={pictures[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
        {pictures.length > 1 && (
          <div className="image-counter">{`${currentIndex + 1} / ${
            pictures.length
          }`}</div>
        )}
      </div>
      {pictures.length > 1 && (
        <button onClick={nextImage} className="gallery-button next">
          <img src={arrowForward} alt="Next" />
        </button>
      )}
    </div>
  );
}

export default Gallery;
