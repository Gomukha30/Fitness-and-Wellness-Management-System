import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import gallery3 from "./assets/gallery3.avif";
import gallery1 from "./assets/gallery1.avif";
import gallery5 from "./assets/gallery5.jpeg";
import article3 from "./assets/article3.avif";

const Gallery = () => {
  return (
    <>
      <Navbar />
      <div className="grid grid-cols-4 gap-4 p-4">
        <img
          src={gallery3}
          alt={gallery3}
          className="w-full h-auto object-cover mb-4 rounded-md"
        />
        <img
          src={gallery5}
          alt={gallery5}
          className="w-full h-auto object-cover mb-4 rounded-md"
        />
        <img
          src={gallery1}
          alt={gallery1}
          className="w-full h-auto object-cover mb-4 rounded-md"
        />
        <img
          src={article3}
          alt={article3}
          className="w-full h-auto object-cover mb-4 rounded-md"
        />
        <img
          src={gallery5}
          alt={gallery5}
          className="w-full h-auto object-cover mb-4 rounded-md"
        />
        <img
          src={gallery3}
          alt={gallery3}
          className="w-full h-auto object-cover mb-4 rounded-md"
        />
        <img
          src={article3}
          alt={article3}
          className="w-full h-auto object-cover mb-4 rounded-md"
        />
        <img
          src={gallery1}
          alt={gallery1}
          className="w-full h-auto object-cover mb-4 rounded-md"
        />
        <img
          src={gallery3}
          alt={gallery3}
          className="w-full h-auto object-cover mb-4 rounded-md"
        />
        <img
          src={gallery5}
          alt={gallery5}
          className="w-full h-auto object-cover mb-4 rounded-md"
        />
        <img
          src={gallery1}
          alt={gallery1}
          className="w-full h-auto object-cover mb-4 rounded-md"
        />
        <img
          src={article3}
          alt={article3}
          className="w-full h-auto object-cover mb-4 rounded-md"
        />
        <img
          src={gallery5}
          alt={gallery5}
          className="w-full h-auto object-cover mb-4 rounded-md"
        />
        <img
          src={gallery3}
          alt={gallery3}
          className="w-full h-auto object-cover mb-4 rounded-md"
        />
        <img
          src={article3}
          alt={article3}
          className="w-full h-auto object-cover mb-4 rounded-md"
        />
        <img
          src={gallery1}
          alt={gallery1}
          className="w-full h-auto object-cover mb-4 rounded-md"
        />
      </div>
      <Footer />
    </>
  );
};

export default Gallery;
