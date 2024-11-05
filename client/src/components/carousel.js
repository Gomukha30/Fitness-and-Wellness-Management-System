import React, { useState, useEffect } from "react";
import slide1 from "../assets/slide1.png";
import slide2 from "../assets/slide2.png";
import slide3 from "../assets/slide3.png";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [slide1, slide2, slide3];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div className="w-full h-[680px] m-2 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden rounded-lg">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute w-full overflow-hidden h-full transform transition-transform duration-500 ${
              index === currentSlide ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <img
              src={slide}
              alt={`slide-${index}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full focus:outline-none ${
              index === currentSlide ? "bg-blue-500" : "bg-gray-300"
            }`}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>
      <button
        type="button"
        onClick={prevSlide}
        className="absolute top-1/2 left-0 z-10 transform -translate-y-1/2 -translate-x-8 bg-white/30 rounded-full p-2 cursor-pointer focus:outline-none"
      >
        &lt;
      </button>
      <button
        type="button"
        onClick={nextSlide}
        className="absolute top-1/2 right-0 z-10 transform -translate-y-1/2 translate-x-8 bg-white/30 rounded-full p-2 cursor-pointer focus:outline-none"
      >
        &gt;
      </button>
    </div>
  );
};

export default Carousel;

