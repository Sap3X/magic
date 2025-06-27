import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import image from "../Images";

const SmoothCoverflowCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef(null);

  // Touch handling state
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  const images = [
    image.img1,
    image.img2,
    image.img3,
    image.img4,
    image.img5,
    image.img6,
    image.img7,
    image.img8,
    image.img9,
    image.img10,
  ];

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    setTimeout(() => setIsTransitioning(false), 100);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
    setTimeout(() => setIsTransitioning(false), 100);
  };

  const goToSlide = (index) => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 800);
  };

  // Touch event handlers
  const handleTouchStart = (e) => {
    if (!isMobile) return;
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
    setIsDragging(true);
    setIsAutoPlaying(false); // Pause autoplay during touch
  };

  const handleTouchMove = (e) => {
    if (!isMobile || !isDragging) return;
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!isMobile || !touchStart || !touchEnd) {
      setIsDragging(false);
      setIsAutoPlaying(true);
      return;
    }

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }

    setIsDragging(false);
    setIsAutoPlaying(true);
  };

  useEffect(() => {
    if (isAutoPlaying && !isTransitioning && !isDragging) {
      const interval = setInterval(nextSlide, 3000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, isTransitioning, currentIndex, isDragging]);

  const getVisibleSlides = () => {
    const slides = [];
    const totalSlides = 7;
    const startIndex = currentIndex - 3;

    for (let i = 0; i < totalSlides; i++) {
      const index = (startIndex + i + images.length) % images.length;
      slides.push({
        src: images[index],
        index: index,
        position: i - 3,
      });
    }
    return slides;
  };

  const getSlideStyle = (position) => {
    const baseTransform = "translate(-50%, -50%)";
    const positionTransforms = {
      "-3": `${baseTransform} translateX(-720px) translateZ(-300px) scale(0.3) rotateY(50deg)`,
      "-2": `${baseTransform} translateX(-480px) translateZ(-200px) scale(0.5) rotateY(40deg)`,
      "-1": `${baseTransform} translateX(-240px) translateZ(-100px) scale(0.75) rotateY(25deg)`,
      0: `${baseTransform} translateX(0px) translateZ(0px) scale(1) rotateY(0deg)`,
      1: `${baseTransform} translateX(240px) translateZ(-100px) scale(0.75) rotateY(-25deg)`,
      2: `${baseTransform} translateX(480px) translateZ(-200px) scale(0.5) rotateY(-40deg)`,
      3: `${baseTransform} translateX(720px) translateZ(-300px) scale(0.3) rotateY(-50deg)`,
    };

    const positionOpacity = {
      "-3": 0.1,
      "-2": 0.4,
      "-1": 0.7,
      0: 1,
      1: 0.7,
      2: 0.4,
      3: 0.1,
    };

    const positionBrightness = {
      "-3": "brightness(0.4)",
      "-2": "brightness(0.6)",
      "-1": "brightness(0.8)",
      0: "brightness(1)",
      1: "brightness(0.8)",
      2: "brightness(0.6)",
      3: "brightness(0.4)",
    };

    return {
      position: "absolute",
      top: "50%",
      left: "50%",
      width: "400px",
      height: "300px",
      borderRadius: "20px",
      overflow: "hidden",
      cursor: isMobile ? "default" : "pointer",
      transition: isDragging
        ? "none"
        : "transform 0.8s ease, opacity 0.8s ease, filter 0.8s ease",
      boxShadow: "0 25px 80px rgba(0,0,0,0.3), 0 10px 30px rgba(0,0,0,0.2)",
      transformOrigin: "center center",
      transformStyle: "preserve-3d",
      backfaceVisibility: "hidden",
      willChange: "transform, opacity, filter",
      transform: positionTransforms[position] || baseTransform,
      opacity: positionOpacity[position] ?? 0,
      zIndex: 100 - Math.abs(position),
      filter: positionBrightness[position] || "brightness(0.3)",
    };
  };

  const getResponsiveSlideStyle = (position) => {
    const baseStyle = getSlideStyle(position);

    if (isMobile) {
      const mobileScale = 0.6;
      return {
        ...baseStyle,
        width: `${400 * mobileScale}px`,
        height: `${300 * mobileScale}px`,
        transform: baseStyle.transform
          .replace(
            /translateX\(([^)]+)\)/g,
            (_, val) => `translateX(${parseFloat(val) * mobileScale}px)`
          )
          .replace(
            /translateZ\(([^)]+)\)/g,
            (_, val) => `translateZ(${parseFloat(val) * mobileScale}px)`
          ),
      };
    }

    return baseStyle;
  };

  return (
    <div className="w-full bg-white flex flex-col items-center justify-center p-4 overflow-hidden">
      <div className="relative w-full max-w-7xl mx-auto">
        <div
          ref={containerRef}
          className="relative h-[300px] md:h-[400px] overflow-hidden"
          style={{ perspective: "1500px" }}
          onMouseEnter={() => !isMobile && setIsAutoPlaying(false)}
          onMouseLeave={() => !isMobile && setIsAutoPlaying(true)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {getVisibleSlides().map((slide) => (
            <div
              key={slide.index}
              style={getResponsiveSlideStyle(slide.position)}
              onClick={() =>
                !isMobile && slide.position !== 0 && goToSlide(slide.index)
              }
              className="group select-none"
            >
              <img
                src={slide.src}
                alt={`Slide ${slide.index + 1}`}
                className={`w-full h-full object-cover transition-transform duration-500 ease-out ${
                  !isMobile ? "group-hover:scale-105" : ""
                }`}
                loading="lazy"
                draggable={false}
              />
              {slide.position !== 0 && !isMobile && (
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
              )}
            </div>
          ))}
        </div>

        {/* Navigation Buttons - Hidden on mobile */}
        {!isMobile && (
          <>
            <button
              onClick={prevSlide}
              disabled={isTransitioning}
              className="absolute left-8 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/30 disabled:opacity-50 backdrop-blur-sm rounded-full p-4 transition-all duration-300 z-20 group"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-4 h-4 sm:w-8 sm:h-8 text-white group-hover:scale-110 transition-transform duration-200" />
            </button>

            <button
              onClick={nextSlide}
              disabled={isTransitioning}
              className="absolute right-8 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/30 disabled:opacity-50 backdrop-blur-sm rounded-full p-4 transition-all duration-300 z-20 group"
              aria-label="Next image"
            >
              <ChevronRight className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-200" />
            </button>
          </>
        )}
      </div>

      {/* Mobile swipe indicator */}
      {isMobile && (
        <div className="mt-4 text-center text-gray-500 text-sm">
          Swipe left or right to navigate
        </div>
      )}
    </div>
  );
};

export default SmoothCoverflowCarousel;
