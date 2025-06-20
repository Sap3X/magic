import React, { useState } from "react";
import { BiChevronRight } from "react-icons/bi";
import { BiChevronLeft } from "react-icons/bi";

const ImageCarousel = () => {
  // Array of images - using the provided image multiple times as requested
  const images = [
    "https://w.wallhaven.cc/full/1q/wallhaven-1q83qg.jpg",
    "https://w.wallhaven.cc/full/zp/wallhaven-zpxjjo.jpg",
    "https://w.wallhaven.cc/full/1q/wallhaven-1q83qg.jpg",
    "https://w.wallhaven.cc/full/po/wallhaven-po2d69.png",
    "https://w.wallhaven.cc/full/1q/wallhaven-1q83qg.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const getPrevIndex = () => {
    return currentIndex === 0 ? images.length - 1 : currentIndex - 1;
  };

  const getNextIndex = () => {
    return currentIndex === images.length - 1 ? 0 : currentIndex + 1;
  };

  return (
    <div className="flex justify-center">
      <div
        className="flex items-center bg-[#D9D9D9] my-8 sm:my-16 mx-16 max-w-[1200px] rounded-3xl sm:rounded-[59px]"
        style={{
          boxShadow: "0px 4px 4px #00000040",
        }}
      >
        <button
          onClick={goToPrevious}
          className="w-32 h-auto ml-4 p-2 cursor-pointer"
        >
          <BiChevronLeft className="w-6 md:w-20 h-full" />
        </button>

        <div className="flex flex-col items-center justify-center relative py-6 md:py-24">
          {/* Main center image */}
          <img
            src={images[currentIndex]}
            alt={`Image ${currentIndex + 1}`}
            className="w-2/3 h-auto object-cover z-10 rounded-lg transition-opacity duration-300"
          />

          {/* Right side image (next image) */}
          <img
            src={images[getNextIndex()]}
            alt={`Next image`}
            className="w-[30%] h-auto absolute object-cover right-8 rounded-lg opacity-70 hover:opacity-90 transition-opacity cursor-pointer"
            onClick={goToNext}
          />

          {/* Left side image (previous image) */}
          <img
            src={images[getPrevIndex()]}
            alt={`Previous image`}
            className="w-[30%] h-auto absolute object-cover left-8 rounded-lg opacity-70 hover:opacity-90 transition-opacity cursor-pointer"
            onClick={goToPrevious}
          />
        </div>

        <button
          onClick={goToNext}
          className="w-32 h-auto mr-4 p-2 cursor-pointer"
        >
          <BiChevronRight className="w-6 md:w-20 h-full" />
        </button>
      </div>
    </div>
  );
};

export default ImageCarousel;
