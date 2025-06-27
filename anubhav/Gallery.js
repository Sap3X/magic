import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import img1 from "./assets/DSC05306.webp";
import img2 from "./assets/DSC05299.webp";
import img3 from "./assets/DSC05347.webp";
import img4 from "./assets/DSC05351.webp";
import img5 from "./assets/Anubhav_Kit-removebg-preview.webp";
import img6 from "./assets/DSC05306.webp";
import img7 from "./assets/DSC05299.webp";
import img8 from "./assets/DSC05347.webp";

const SmoothCoverflowCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [gallerySize, setGallerySize] = useState({ width: 400, height: 280 });
  const containerRef = useRef(null);

  const images = [img1, img2, img3, img4, img5, img6, img7, img8];

  // Responsive sizes for gallery boxes
  const getGalleryBoxSize = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth >= 1536) return { width: 700, height: 500 }; // 2xl
      if (window.innerWidth >= 1280) return { width: 600, height: 420 }; // xl
      if (window.innerWidth >= 1024) return { width: 500, height: 350 }; // lg
      if (window.innerWidth >= 768) return { width: 400, height: 280 }; // md
      // For mobile: make images smaller and more compact
      const mobileWidth = Math.max(180, window.innerWidth - 48); // 24px padding each side, min 180px
      const mobileHeight = Math.floor(mobileWidth * 0.56); // 16:9 ratio, but smaller
      return { width: mobileWidth, height: mobileHeight };
    }
    return { width: 400, height: 280 };
  };

  // Update gallery size on resize
  useEffect(() => {
    const handleResize = () => setGallerySize(getGalleryBoxSize());
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto play
  useEffect(() => {
    if (isAutoPlaying && !isTransitioning) {
      const interval = setInterval(() => {
        setIsTransitioning(true);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setTimeout(() => setIsTransitioning(false), 800);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, isTransitioning, currentIndex, images.length]);

  // Slide logic
  const getSlideStyle = (position) => {
    const { width, height } = gallerySize;
    const baseTransform = "translate(-50%, -50%)";
    // On mobile, reduce the spread and depth for a more compact look
    const isMobile = width < 400;
    const xUnit = isMobile ? width * 0.45 : width * 0.6;
    const zUnit = isMobile ? -height * 0.18 : -height * 0.33;
    const scaleUnit = width / 700;

    const positionTransforms = {
      "-2": `${baseTransform} translateX(${-2 * xUnit}px) translateZ(${
        2 * zUnit
      }px) scale(${isMobile ? 0.6 : 0.5}) rotateY(30deg)`,
      "-1": `${baseTransform} translateX(${-1 * xUnit}px) translateZ(${
        1 * zUnit
      }px) scale(${isMobile ? 0.8 : 0.75}) rotateY(15deg)`,
      0: `${baseTransform} translateX(0px) translateZ(0px) scale(1) rotateY(0deg)`,
      1: `${baseTransform} translateX(${1 * xUnit}px) translateZ(${
        1 * zUnit
      }px) scale(${isMobile ? 0.8 : 0.75}) rotateY(-15deg)`,
      2: `${baseTransform} translateX(${2 * xUnit}px) translateZ(${
        2 * zUnit
      }px) scale(${isMobile ? 0.6 : 0.5}) rotateY(-30deg)`,
    };

    const positionOpacity = {
      "-2": 0.2,
      "-1": 0.7,
      0: 1,
      1: 0.7,
      2: 0.2,
    };

    const positionBrightness = {
      "-2": "brightness(0.6)",
      "-1": "brightness(0.8)",
      0: "brightness(1)",
      1: "brightness(0.8)",
      2: "brightness(0.6)",
    };

    return {
      position: "absolute",
      top: "50%",
      left: "50%",
      width: `${width}px`,
      height: `${height}px`,
      borderRadius: "16px",
      overflow: "hidden",
      cursor: "pointer",
      transition:
        "transform 0.8s cubic-bezier(0.23, 1, 0.32, 1), opacity 0.8s, filter 0.8s",
      boxShadow: "0 10px 40px rgba(0,0,0,0.18), 0 2px 8px rgba(0,0,0,0.10)",
      transformOrigin: "center center",
      transformStyle: "preserve-3d",
      backfaceVisibility: "hidden",
      willChange: "transform, opacity, filter",
      transform: positionTransforms[position] || baseTransform,
      opacity: positionOpacity[position] ?? 0,
      zIndex: 100 - Math.abs(position),
      filter: positionBrightness[position] || "brightness(0.3)",
      pointerEvents: position === "0" ? "auto" : "auto",
    };
  };

  // Only show 5 slides on mobile, 7 on desktop
  const getVisibleSlides = () => {
    const total = images.length;
    const isMobile = gallerySize.width < 400;
    const range = isMobile ? 2 : 3;
    const slides = [];
    for (let offset = -range; offset <= range; offset++) {
      let index = (currentIndex + offset + total) % total;
      slides.push({
        index,
        src: images[index],
        position: offset.toString(),
      });
    }
    return slides;
  };

  const goToSlide = (index) => {
    if (!isTransitioning && index !== currentIndex) {
      setIsTransitioning(true);
      setCurrentIndex(index);
      setTimeout(() => setIsTransitioning(false), 800);
    }
  };

  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
      setTimeout(() => setIsTransitioning(false), 800);
    }
  };

  const nextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prev) => (prev + 1) % images.length);
      setTimeout(() => setIsTransitioning(false), 800);
    }
  };

  return (
    <div className="w-full bg-gradient-to-br from-gray-400 via-gray-300 to-gray-200 flex flex-col items-center justify-center py-4 px-2 sm:px-4">
      <div className="relative w-full max-w-7xl mx-auto">
        <div
          ref={containerRef}
          className="relative overflow-hidden "
          style={{
            height: `${gallerySize.height + 20}px`,
            perspective: "1200px",
            touchAction: "pan-y",
          }}
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {getVisibleSlides().map((slide) => (
            <div
              key={slide.index}
              style={getSlideStyle(slide.position)}
              onClick={() => slide.position !== "0" && goToSlide(slide.index)}
              className="group select-none"
            >
              <img
                src={slide.src}
                alt={`Slide ${slide.index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                loading="lazy"
                draggable={false}
              />
              {slide.position !== "0" && (
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
              )}
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          disabled={isTransitioning}
          className="absolute left-2 sm:left-8 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/30 disabled:opacity-50 backdrop-blur-sm rounded-full p-2 sm:p-4 transition-all duration-300 z-20 group"
          aria-label="Previous image"
          style={{ touchAction: "manipulation" }}
        >
          <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8 text-white group-hover:scale-110 transition-transform duration-200" />
        </button>

        <button
          onClick={nextSlide}
          disabled={isTransitioning}
          className="absolute right-2 sm:right-8 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/30 disabled:opacity-50 backdrop-blur-sm rounded-full p-2 sm:p-4 transition-all duration-300 z-20 group"
          aria-label="Next image"
          style={{ touchAction: "manipulation" }}
        >
          <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8 text-white group-hover:scale-110 transition-transform duration-200" />
        </button>
      </div>

      {/* Indicators */}
      <div className="flex space-x-2 sm:space-x-3 mt-6 sm:mt-8">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            disabled={isTransitioning}
            className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-500 ${
              index === currentIndex
                ? "bg-gray-800 scale-125"
                : "bg-gray-400 hover:bg-gray-600 hover:scale-110"
            }`}
            aria-label={`Go to slide ${index + 1}`}
            style={{ touchAction: "manipulation" }}
          />
        ))}
      </div>
    </div>
  );
};

export default SmoothCoverflowCarousel;
