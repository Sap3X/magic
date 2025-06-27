import React, { useState, useEffect, useRef } from "react";
import {
  Menu,
  X,
  Phone,
  MapPin,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import img1 from "./assets/Anubhav_Kit-removebg-preview.webp";
import img8 from "./assets/DSC05306.webp";
import img4 from "./assets/DSC05299.webp";
import img5 from "./assets/DSC05347.webp";
import TestimonialSlider from "./testimonnial";
// import SmoothCoverflowCarousel from './Gallery';
import AnubhavSection from "./trigerred";

import SmoothCoverflowCarousel from "./Gallery";
const PartnerCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [counters, setCounters] = useState({
    partners: 0,
    projects: 0,
    countries: 0,
  });
  const [hasAnimated, setHasAnimated] = useState(false);
  const statsRef = useRef(null);
  const carouselRef = useRef(null);

  // Dummy partner data with placeholder images
  const partners = [
    {
      id: 1,
      name: "AIM Innovation",
      logo: "https://placehold.co/453x168/FFD700/000000?text=AIM+Innovation",
    },
    {
      id: 2,
      name: "RV University",
      logo: "https://placehold.co/453x168/4169E1/FFFFFF?text=RV+University",
    },
    {
      id: 3,
      name: "NITTE University",
      logo: "https://placehold.co/453x168/1E40AF/FFFFFF?text=NITTE+University",
    },
    {
      id: 4,
      name: "Tech Corp",
      logo: "https://placehold.co/453x168/059669/FFFFFF?text=Tech+Corp",
    },
    {
      id: 5,
      name: "Innovation Hub",
      logo: "https://placehold.co/453x168/DC2626/FFFFFF?text=Innovation+Hub",
    },
    {
      id: 6,
      name: "Future Labs",
      logo: "https://placehold.co/453x168/7C3AED/FFFFFF?text=Future+Labs",
    },
    {
      id: 7,
      name: "Global Partners",
      logo: "https://placehold.co/453x168/EA580C/FFFFFF?text=Global+Partners",
    },
    {
      id: 8,
      name: "Smart Solutions",
      logo: "https://placehold.co/453x168/0891B2/FFFFFF?text=Smart+Solutions",
    },
  ];

  const partnersPerView = 3;

  // Create extended array for seamless infinite scroll
  const extendedPartners = [
    ...partners.slice(-partnersPerView),
    ...partners,
    ...partners,
    ...partners.slice(0, partnersPerView),
  ];

  const initialIndex = partnersPerView;

  // Counter animation function
  const animateCounter = (target, setter, duration = 2000) => {
    let start = 0;
    const increment = target / (duration / 16);

    const animate = () => {
      start += increment;
      if (start < target) {
        setter(Math.floor(start));
        requestAnimationFrame(animate);
      } else {
        setter(target);
      }
    };
    animate();
  };

  // Initialize position
  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, []);

  // Intersection Observer for counter animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animateCounter(50, (val) =>
              setCounters((prev) => ({ ...prev, partners: val }))
            );
            setTimeout(
              () =>
                animateCounter(100, (val) =>
                  setCounters((prev) => ({ ...prev, projects: val }))
                ),
              200
            );
            setTimeout(
              () =>
                animateCounter(25, (val) =>
                  setCounters((prev) => ({ ...prev, countries: val }))
                ),
              400
            );
          }
        });
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const handleNext = () => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);

    setTimeout(() => {
      setCurrentIndex((prev) => {
        if (prev >= initialIndex + partners.length) {
          if (carouselRef.current) {
            carouselRef.current.style.transition = "none";
            setTimeout(() => {
              if (carouselRef.current) {
                carouselRef.current.style.transition =
                  "transform 0.5s ease-in-out";
              }
            }, 50);
          }
          return initialIndex;
        }
        return prev;
      });
      setIsTransitioning(false);
    }, 500);
  };

  const handlePrev = () => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);

    setTimeout(() => {
      setCurrentIndex((prev) => {
        if (prev < initialIndex) {
          if (carouselRef.current) {
            carouselRef.current.style.transition = "none";
            setTimeout(() => {
              if (carouselRef.current) {
                carouselRef.current.style.transition =
                  "transform 0.5s ease-in-out";
              }
            }, 50);
          }
          return initialIndex + partners.length - 1;
        }
        return prev;
      });
      setIsTransitioning(false);
    }, 500);
  };

  const getDotIndex = () => {
    return (currentIndex - initialIndex + partners.length) % partners.length;
  };

  return (
    <div className="w-full max-w-7xl mt-11 mx-auto py-8 px-4 lg:py-16">
      <div className="text-center mb-8 lg:mb-12">
        <h2 className="text-2xl md:text-4xl font-bold text-[black] mb-4">
          Our Partners
        </h2>
        <p className="text-base lg:text-lg text-gray-600 max-w-2xl mx-auto">
          We collaborate with leading organizations to drive innovation and
          create meaningful impact
        </p>
      </div>

      <div className="relative px-2 lg:px-8">
        <div className="flex items-center justify-center gap-2 lg:gap-8">
          <button
            onClick={handlePrev}
            disabled={isTransitioning}
            className="p-2 lg:p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-gray-50 group disabled:opacity-50"
            aria-label="Previous partners"
          >
            <ChevronLeft className="w-4 h-4 lg:w-6 lg:h-6 text-gray-600 group-hover:text-gray-900" />
          </button>

          <div className="flex-1 overflow-hidden">
            <div
              ref={carouselRef}
              className="flex items-center justify-center gap-2 lg:gap-8 transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (280 + 16)}px)`,
                width: `${extendedPartners.length * (280 + 16)}px`,
                marginLeft: `calc(50% - ${
                  (partnersPerView * (280 + 16)) / 2
                }px)`,
              }}
            >
              {extendedPartners.map((partner, index) => (
                <div
                  key={`${partner.id}-${index}`}
                  className="flex-shrink-0 w-64 lg:w-80 h-32 lg:h-48 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-4 lg:p-6 flex items-center justify-center group cursor-pointer"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={handleNext}
            disabled={isTransitioning}
            className="p-2 lg:p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-gray-50 group disabled:opacity-50"
            aria-label="Next partners"
          >
            <ChevronRight className="w-4 h-4 lg:w-6 lg:h-6 text-gray-600 group-hover:text-gray-900" />
          </button>
        </div>

        <div className="flex justify-center mt-6 lg:mt-8 gap-2">
          {partners.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (!isTransitioning) {
                  setCurrentIndex(initialIndex + index);
                }
              }}
              className={`w-2 h-2 lg:w-3 lg:h-3 rounded-full transition-all duration-300 ${
                index === getDotIndex()
                  ? "bg-blue-600 scale-110"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <div
        ref={statsRef}
        className="mt-12 lg:mt-16 grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8 text-center"
      >
        <div className="bg-white rounded-lg p-4 lg:p-6 shadow-md transform hover:scale-105 transition-transform duration-300">
          <div className="text-2xl lg:text-3xl font-bold text-blue-600 mb-2">
            {counters.partners}+
          </div>
          <div className="text-gray-600 text-sm lg:text-base">
            Strategic Partners
          </div>
        </div>
        <div className="bg-white rounded-lg p-4 lg:p-6 shadow-md transform hover:scale-105 transition-transform duration-300">
          <div className="text-2xl lg:text-3xl font-bold text-green-600 mb-2">
            {counters.projects}+
          </div>
          <div className="text-gray-600 text-sm lg:text-base">
            Collaborative Projects
          </div>
        </div>
        <div className="bg-white rounded-lg p-4 lg:p-6 shadow-md transform hover:scale-105 transition-transform duration-300">
          <div className="text-2xl lg:text-3xl font-bold text-purple-600 mb-2">
            {counters.countries}
          </div>
          <div className="text-gray-600 text-sm lg:text-base">
            Countries Reached
          </div>
        </div>
      </div>
    </div>
  );
};

const AnubhavWebsite = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedBox, setSelectedBox] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // Trigger animations on component mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleBox1Click = () => {
    setSelectedBox("box1");
  };

  const handleBox2Click = () => {
    setSelectedBox("box2");
  };

  // Content for each box
  const getBoxContent = () => {
    switch (selectedBox) {
      case "box1":
        return {
          title: "Robotics & AI Learning Kit",
          content:
            "Discover the world of robotics and artificial intelligence with our comprehensive Box-1 kit. This package includes programmable robots, sensors, actuators, and step-by-step tutorials designed to teach fundamental concepts of robotics, programming, and AI. Perfect for students aged 10-16 to develop problem-solving skills and computational thinking.",
        };
      case "box2":
        return {
          title: "STEM Exploration Kit",
          content:
            "Unleash creativity with our advanced STEM exploration kit in Box-2. This collection features electronic components, circuit boards, motors, and innovative building materials. Students will learn electronics, engineering principles, and hands-on construction while building real-world projects that demonstrate scientific concepts in action.",
        };
      default:
        return {
          title: "Complete Learning Solution",
          content:
            "Transform the way STEM, AI, and Robotics are taught with our comprehensive Anubhav Kits. Designed for hands-on learning and innovation.",
        };
    }
  };

  const currentContent = getBoxContent();

  return (
    <div className="min-h-screen bg-gray-200">
      {/* CSS for animations */}
      <style>{`
        @keyframes slideInLeft {
          0% {
            transform: translateX(-100px);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }
        
        @keyframes slideInRight {
          0% {
            transform: translateX(100px);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }
        
        @keyframes slideInUp {
          0% {
            transform: translateY(50px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        @keyframes fadeInScale {
          0% {
            transform: scale(0.8);
            opacity: 0;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0);}
          50% { transform: translateY(-12px);}
        }
        
        .animate-slide-in-left {
          animation: slideInLeft 1s ease-out forwards;
        }
        
        .animate-slide-in-right {
          animation: slideInRight 1s ease-out forwards;
        }
        
        .animate-slide-in-up {
          animation: slideInUp 1s ease-out forwards;
        }
        
        .animate-fade-in-scale {
          animation: fadeInScale 1.2s ease-out forwards;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 3s infinite;
        }
        
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
        
        .animation-delay-600 {
          animation-delay: 0.6s;
        }
        
        .animation-delay-800 {
          animation-delay: 0.8s;
        }
        
        .animation-delay-1000 {
          animation-delay: 1s;
        }
      `}</style>

      {/* Hero Section with Clay Mask Inspired Design */}
      <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-400 via-gray-300 to-gray-200">
        {/* Crack patterns */}
        <div className="absolute inset-0 opacity-30">
          <svg
            className="absolute top-10 left-20 w-32 h-40 rotate-12"
            viewBox="0 0 100 120"
            fill="none"
          >
            <path
              d="M10 10 Q30 20 25 40 T50 60 Q60 80 45 100"
              stroke="currentColor"
              strokeWidth="2"
              className="text-gray-600"
            />
          </svg>
          <svg
            className="absolute top-32 right-32 w-24 h-32 -rotate-45"
            viewBox="0 0 80 100"
            fill="none"
          >
            <path
              d="M5 5 Q20 15 15 30 T40 50 Q50 70 35 85"
              stroke="currentColor"
              strokeWidth="2"
              className="text-gray-600"
            />
          </svg>
          <svg
            className="absolute bottom-40 left-40 w-28 h-36 rotate-45"
            viewBox="0 0 90 110"
            fill="none"
          >
            <path
              d="M8 8 Q25 18 20 35 T45 55 Q55 75 40 90"
              stroke="currentColor"
              strokeWidth="2"
              className="text-gray-600"
            />
          </svg>
          <svg
            className="absolute bottom-20 right-20 w-20 h-28 -rotate-12"
            viewBox="0 0 70 90"
            fill="none"
          >
            <path
              d="M6 6 Q18 12 16 25 T35 45 Q42 60 30 75"
              stroke="currentColor"
              strokeWidth="2"
              className="text-gray-600"
            />
          </svg>
        </div>

        {/* Main content container */}
        <div className="relative z-10 flex items-center justify-center min-h-[70vh] pt-32 pb-8 px-2 sm:px-4 lg:px-8 mb-24">
          <div className="grid lg:grid-cols-2 items-center max-w-7xl mx-auto gap-8">
            {/* Left side - Product showcase */}
            <div
              className={`
                flex justify-center order-2 lg:order-1 opacity-0
                ${isLoaded ? "animate-slide-in-left" : ""}
                mt-8 sm:mt-0
              `}
            >
              <div className="relative">
                {/* Product image with glow effect */}
                <div className="relative bg-gradient-to-br from-[#FFA500] to-[#FF8C00] p-4 sm:p-8 rounded-3xl shadow-2xl transform hover:rotate-2 transition-transform duration-500">
                  <img
                    src={img1}
                    alt="Anubhav Kit"
                    className="
                      w-72 h-96
                      sm:w-64 sm:h-80
                      md:w-80 md:h-96
                      lg:w-[28rem] lg:h-[34rem]
                      object-cover rounded-2xl shadow-lg
                      transition-all duration-300
                    "
                  />
                  {/* Glow effect */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-[#FFA500]/20 to-[#FF8C00]/20 blur-xl rounded-3xl -z-10"></div>
                </div>
                {/* Floating elements around product */}
                <div className="absolute -top-6 -left-6 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center shadow-lg animate-bounce">
                  <span className="text-[#FFA500] font-bold text-xs sm:text-sm">
                    AI
                  </span>
                </div>
                <div className="absolute -bottom-4 -right-4 w-12 h-12 sm:w-16 sm:h-16 bg-[#FFA500] rounded-full flex items-center justify-center shadow-lg animate-pulse">
                  <span className="text-white font-bold text-[10px] sm:text-xs">
                    STEM
                  </span>
                </div>
              </div>
            </div>
            {/* Right side - Text content */}
            <div className="text-center lg:text-left order-1 lg:order-2">
              <h1
                className={`
                  text-6xl
                  sm:text-6xl
                  md:text-7xl
                  lg:text-8xl
                  xl:text-9xl
                  font-black font-['Montserrat'] tracking-tight mb-6 leading-tight break-words opacity-0
                  ${isLoaded ? "animate-slide-in-right" : ""}
                `}
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFA500] to-[#FF8C00]">
                  ANUBHAV
                </span>
              </h1>
              <div
                className={`text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold font-['Inter'] mb-8 text-gray-700 opacity-0 ${
                  isLoaded ? "animate-slide-in-right animation-delay-200" : ""
                }`}
              >
                <span className="block">Together Let us</span>
                <span className="block">Innovate Create Learn</span>
              </div>
              <p
                className={`text-gray-600 text-base sm:text-lg md:text-xl lg:text-2xl font-medium max-w-lg mx-auto lg:mx-0 mb-8 opacity-0 ${
                  isLoaded ? "animate-slide-in-up animation-delay-400" : ""
                }`}
              >
                Transform education with hands-on STEM, AI, and Robotics
                learning experiences that inspire the next generation of
                innovators.
              </p>
              {/* CTA Buttons */}
              <div
                className={`
                  flex flex-col sm:flex-row gap-4
                  ${isLoaded ? "animate-fade-in-scale animation-delay-600" : ""}
                  opacity-0
                  justify-center
                  items-center
                  lg:justify-start lg:items-start
                `}
              >
                <button
                  className="
                    bg-[#FFA500] hover:bg-[#FF8C00] text-white
                    px-8 py-4
                    text-lg
                    sm:text-xl
                    rounded-full font-semibold
                    transition-all duration-300 transform hover:scale-105 shadow-lg
                    max-w-xs
                  "
                  style={{
                    width: "auto",
                  }}
                >
                  Explore Kits
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Video Section - seamlessly blended with hero */}
        <section
          className={`
            relative
            mt-10 mb-10
            sm:mt-40 sm:mb-40
            pt-2 pb-2
            sm:pt-0 sm:pb-0
            md:pt-0 md:pb-0
            lg:pt-0 lg:pb-0
            overflow-hidden
            opacity-0
            ${isLoaded ? "animate-slide-in-up animation-delay-800" : ""}
          `}
        >
          {/* Video Content */}
          <div className="relative z-10 container mx-auto px-2 sm:px-4">
            <div className="max-w-6xl mx-auto px-0 sm:px-4 lg:px-8">
              <div className="relative bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                <div
                  className="relative w-full"
                  style={{ paddingBottom: "56.25%" }}
                >
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/zxt8Dy7iaRc"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>
        <AnubhavSection />
        {/* Product Kits Section */}
        <section className="py-16 sm:py-24 lg:py-32 px-2 sm:px-6 lg:px-24 bg-gradient-to-br from-gray-400 via-gray-300 to-gray-200">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 lg:mb-20">
              <h2 className="text-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold font-['Nunito_Sans'] mb-6 tracking-tight">
                ANUBHAV KITS
              </h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Product Image */}
              <div className="order-2 lg:order-1 flex justify-center">
                <div className="relative group w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl h-72 sm:h-96 md:h-[32rem] lg:h-[36rem] flex items-center justify-center">
                  {/* Remove orange gradient glow, keep only white outline and add slow bounce */}
                  <div className="absolute inset-0 pointer-events-none" />
                  {/* Subtle floating orbs */}
                  <div className="absolute -top-6 -left-6 w-16 h-16 bg-[#FFA500]/20 rounded-full blur-2xl animate-pulse pointer-events-none"></div>
                  <div className="absolute bottom-0 right-0 w-24 h-24 bg-[#FF8C00]/20 rounded-full blur-2xl animate-pulse pointer-events-none"></div>
                  {/* Main image with white border, shadow, and smooth transition */}
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/60 group-hover:scale-105 group-hover:shadow-[0_8px_40px_0_rgba(255,168,0,0.15)] transition-all duration-150 animate-bounce-slow">
                    <img
                      key={selectedBox}
                      className="w-full h-72 sm:h-96 md:h-[32rem] lg:h-[36rem] object-cover rounded-3xl transition-all duration-300 ease-in-out"
                      src={
                        selectedBox === "box2"
                          ? img4
                          : selectedBox === "box1"
                          ? img5
                          : img1
                      }
                      alt="Anubhav Kit"
                      style={{ opacity: 1, animation: "fadein 0.35s" }}
                    />
                  </div>
                  <style>{`
              @keyframes fadein {
                from { opacity: 0; }
                to { opacity: 1; }
              }
            `}</style>
                  {/* Floating badge */}
                  <div className="absolute top-4 right-4 bg-gradient-to-br from-[#FFA500] to-[#FF8C00] text-white px-4 py-2 rounded-full shadow-lg text-xs sm:text-sm font-bold tracking-wide animate-bounce">
                    New!
                  </div>
                </div>
              </div>
              {/* Product Info */}
              <div className="order-1 lg:order-2 space-y-10">
                {/* Make buttons inline and smaller on mobile */}
                <div className="flex flex-row gap-3 sm:gap-6">
                  <button
                    onClick={handleBox1Click}
                    className={`
                ${
                  selectedBox === "box1"
                    ? "bg-[#FFA500] ring-4 ring-[#FFA500]/30 shadow-2xl scale-105"
                    : "bg-[#FFB84D] hover:bg-[#FFA500] shadow-lg hover:shadow-xl"
                }
                rounded-3xl
                px-4 py-4
                sm:px-10 sm:py-8
                flex-1
                transition-all duration-200 ease-out cursor-pointer transform hover:scale-105 relative overflow-hidden group
                text-xs sm:text-base
                min-w-0
              `}
                    style={{ maxWidth: "100%" }}
                  >
                    <div className="relative z-10">
                      <h3 className="text-white text-base sm:text-2xl md:text-3xl lg:text-4xl font-extrabold font-['Nunito_Sans'] tracking-wider text-center drop-shadow-lg">
                        Box-1
                      </h3>
                      <p className="text-white/80 text-xs sm:text-base md:text-lg mt-1 sm:mt-3 font-medium">
                        Robotics & AI
                      </p>
                    </div>
                  </button>
                  <button
                    onClick={handleBox2Click}
                    className={`
                ${
                  selectedBox === "box2"
                    ? "bg-[#FFA500] ring-4 ring-[#FFA500]/30 shadow-2xl scale-105"
                    : "bg-[#FFB84D] hover:bg-[#FFA500] shadow-lg hover:shadow-xl"
                }
                rounded-3xl
                px-4 py-4
                sm:px-10 sm:py-8
                flex-1
                transition-all duration-200 ease-out cursor-pointer transform hover:scale-105 relative overflow-hidden group
                text-xs sm:text-base
                min-w-0
              `}
                    style={{ maxWidth: "100%" }}
                  >
                    <div className="relative z-10">
                      <h3 className="text-white text-base sm:text-2xl md:text-3xl lg:text-4xl font-extrabold font-['Nunito_Sans'] tracking-wider text-center drop-shadow-lg">
                        Box-2
                      </h3>
                      <p className="text-white/80 text-xs sm:text-base md:text-lg mt-1 sm:mt-3 font-medium">
                        STEM Explorer
                      </p>
                    </div>
                  </button>
                </div>
                <div
                  className={`
              bg-white rounded-3xl p-8 lg:p-12 shadow-2xl transition-all duration-200 ease-out transform hover:shadow-3xl border border-gray-100 relative overflow-hidden
              ${selectedBox ? "scale-105" : ""}
              animate-bounce-slow
            `}
                  style={{
                    minHeight: selectedBox ? "370px" : "340px",
                    boxShadow: selectedBox
                      ? "0 8px 40px 0 rgba(255,168,0,0.10), 0 2px 8px 0 rgba(0,0,0,0.06)"
                      : undefined,
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-amber-50 opacity-50"></div>
                  <div className="relative z-10">
                    <div className="flex items-center mb-6">
                      <div className="w-4 h-4 bg-[#FFA500] rounded-full mr-4 animate-pulse"></div>
                      <h4 className="text-[#FFA500] text-2xl md:text-3xl lg:text-4xl font-bold font-['Montserrat']">
                        {currentContent.title}
                      </h4>
                    </div>
                    <p className="text-gray-700 text-lg lg:text-xl font-medium font-['Nunito_Sans'] leading-relaxed transition-all duration-200 ease-out">
                      {currentContent.content}
                    </p>
                    <div className="mt-8 flex gap-3">
                      <div
                        className={`h-2 flex-1 rounded-full transition-all duration-200 ${
                          selectedBox === "box1"
                            ? "bg-[#FFA500]"
                            : "bg-gray-200"
                        }`}
                      ></div>
                      <div
                        className={`h-2 flex-1 rounded-full transition-all duration-200 ${
                          selectedBox === "box2"
                            ? "bg-[#FFA500]"
                            : "bg-gray-200"
                        }`}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Features Section */}
        <section className="relative py-12 lg:py-24 px-2 sm:px-4 lg:px-8 bg-gradient-to-br from-gray-400 via-gray-300 to-gray-200">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8 lg:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-800 mb-4 lg:mb-6 font-['Montserrat']">
                Why Choose{" "}
                <span className="text-[#ff8d00] font-extrabold drop-shadow-sm">
                  ANUBHAV
                </span>
                ?
              </h2>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto">
                Discover the revolutionary features that make our kits the
                perfect choice for modern education
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12 lg:mb-20">
              {/* Interactive Feature Cards */}
              <div className="group relative bg-white rounded-2xl lg:rounded-3xl p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl lg:rounded-2xl flex items-center justify-center mb-4 lg:mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    <svg
                      className="w-8 h-8 lg:w-10 lg:h-10 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.89 1 3 1.89 3 3V19C3 20.1 3.89 21 5 21H11V19H5V3H13V9H21ZM17 13L22 18L17 23V20H13V16H17V13Z" />
                    </svg>
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-2 lg:mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    Hands-On Learning
                  </h3>
                  <p className="text-gray-600 text-sm lg:text-base leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    Interactive experiments and projects that bring theoretical
                    concepts to life through practical application
                  </p>
                </div>
                <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-blue-500/5 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
              </div>

              <div className="group relative bg-white rounded-2xl lg:rounded-3xl p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-xl lg:rounded-2xl flex items-center justify-center mb-4 lg:mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    <svg
                      className="w-8 h-8 lg:w-10 lg:h-10 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2M12 8.5L11.5 10.5L9.5 11L11.5 11.5L12 13.5L12.5 11.5L14.5 11L12.5 10.5L12 8.5Z" />
                    </svg>
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-2 lg:mb-3 group-hover:text-green-600 transition-colors duration-300">
                    AI & Robotics
                  </h3>
                  <p className="text-gray-600 text-sm lg:text-base leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    Cutting-edge technology components that introduce students
                    to the future of artificial intelligence and robotics
                  </p>
                </div>
                <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-green-500/5 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
              </div>

              <div className="group relative bg-white rounded-2xl lg:rounded-3xl p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer overflow-hidden md:col-span-2 lg:col-span-1">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl lg:rounded-2xl flex items-center justify-center mb-4 lg:mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    <svg
                      className="w-8 h-8 lg:w-10 lg:h-10 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 3L1 9L12 15L21 10.09V17H23V9M5 13.18V17.18L12 21L19 17.18V13.18L12 17L5 13.18Z" />
                    </svg>
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-2 lg:mb-3 group-hover:text-purple-600 transition-colors duration-300">
                    Curriculum Aligned
                  </h3>
                  <p className="text-gray-600 text-sm lg:text-base leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    Perfectly designed to complement existing STEM curricula
                    while enhancing teaching methodologies
                  </p>
                </div>
                <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-purple-500/5 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
              </div>
            </div>

            {/* Interactive Stats Counter */}
            <div className="bg-white rounded-2xl lg:rounded-3xl p-6 lg:p-12 shadow-xl mb-12 lg:mb-20">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 text-center">
                <div className="group cursor-pointer">
                  <div className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#FFA500] mb-2 transform group-hover:scale-110 transition-transform duration-300">
                    50+
                  </div>
                  <div className="text-gray-600 text-sm lg:text-base xl:text-lg font-medium group-hover:text-gray-800 transition-colors duration-300">
                    Partner Schools
                  </div>
                  <div className="w-12 lg:w-16 h-1 bg-[#FFA500] mx-auto mt-2 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                </div>
                <div className="group cursor-pointer">
                  <div className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#FFA500] mb-2 transform group-hover:scale-110 transition-transform duration-300">
                    1000+
                  </div>
                  <div className="text-gray-600 text-sm lg:text-base xl:text-lg font-medium group-hover:text-gray-800 transition-colors duration-300">
                    Students Reached
                  </div>
                  <div className="w-12 lg:w-16 h-1 bg-[#FFA500] mx-auto mt-2 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                </div>
                <div className="group cursor-pointer">
                  <div className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#FFA500] mb-2 transform group-hover:scale-110 transition-transform duration-300">
                    25
                  </div>
                  <div className="text-gray-600 text-sm lg:text-base xl:text-lg font-medium group-hover:text-gray-800 transition-colors duration-300">
                    Countries
                  </div>
                  <div className="w-12 lg:w-16 h-1 bg-[#FFA500] mx-auto mt-2 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                </div>
                <div className="group cursor-pointer">
                  <div className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#FFA500] mb-2 transform group-hover:scale-110 transition-transform duration-300">
                    95%
                  </div>
                  <div className="text-gray-600 text-sm lg:text-base xl:text-lg font-medium group-hover:text-gray-800 transition-colors duration-300">
                    Satisfaction Rate
                  </div>
                  <div className="w-12 lg:w-16 h-1 bg-[#FFA500] mx-auto mt-2 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                </div>
              </div>
            </div>

            {/* Interactive Timeline */}
            <div className="bg-gradient-to-r from-[#FFA500] to-[#FF8C00] rounded-2xl lg:rounded-3xl p-6 lg:p-12 text-white">
              <div className="text-center mb-8 lg:mb-12">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
                  Your Learning Journey
                </h3>
                <p className="text-lg lg:text-xl opacity-90">
                  From unboxing to mastering advanced concepts
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                <div className="group text-center cursor-pointer">
                  <div className="w-16 h-16 lg:w-20 lg:h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 lg:mb-6 transform group-hover:scale-110 group-hover:bg-white/30 transition-all duration-500">
                    <div className="text-2xl lg:text-3xl font-bold">1</div>
                  </div>
                  <h4 className="text-lg lg:text-xl font-semibold mb-2 lg:mb-3">
                    Unbox & Explore
                  </h4>
                  <p className="text-sm lg:text-base opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                    Start with guided tutorials and basic component
                    familiarization
                  </p>
                </div>

                <div className="group text-center cursor-pointer">
                  <div className="w-16 h-16 lg:w-20 lg:h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 lg:mb-6 transform group-hover:scale-110 group-hover:bg-white/30 transition-all duration-500">
                    <div className="text-2xl lg:text-3xl font-bold">2</div>
                  </div>
                  <h4 className="text-lg lg:text-xl font-semibold mb-2 lg:mb-3">
                    Build & Create
                  </h4>
                  <p className="text-sm lg:text-base opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                    Construct projects while learning core STEM principles
                  </p>
                </div>

                <div className="group text-center cursor-pointer">
                  <div className="w-16 h-16 lg:w-20 lg:h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 lg:mb-6 transform group-hover:scale-110 group-hover:bg-white/30 transition-all duration-500">
                    <div className="text-2xl lg:text-3xl font-bold">3</div>
                  </div>
                  <h4 className="text-lg lg:text-xl font-semibold mb-2 lg:mb-3">
                    Innovate & Share
                  </h4>
                  <p className="text-sm lg:text-base opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                    Design original solutions and showcase your innovations
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <SmoothCoverflowCarousel />
      <TestimonialSlider />

      {/* CTA Section */}
      <section className="py-12 lg:py-24 bg-gradient-to-r from-orange-500 to-amber-500">
        <div className="max-w-7xl mx-auto px-4 lg:px-20 text-center">
          <h2 className="text-white text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold font-['Montserrat'] mb-4 lg:mb-8">
            Ready to Empower Your Classroom?
          </h2>
          <p className="text-white text-lg md:text-2xl lg:text-3xl xl:text-4xl font-semibold font-['Nunito_Sans'] mb-6 lg:mb-12 max-w-4xl mx-auto">
            Transform the way STEM, AI, and Robotics are taught. Contact us to
            bring Anubhav to your school today!
          </p>
          <button className="bg-yellow-400 hover:bg-yellow-300 text-white px-6 lg:px-8 py-3 lg:py-4 rounded-full text-lg lg:text-xl font-medium font-['Nunito_Sans'] border-2  transform hover:scale-105 transition-all duration-200 shadow-lg">
            Order Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default AnubhavWebsite;
