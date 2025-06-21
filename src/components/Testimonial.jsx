import React, { useState, useEffect } from 'react';
import { BiChevronRight } from "react-icons/bi";
import { BiChevronLeft } from "react-icons/bi";

const TestimonialSlider = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Marketing Director",
      testimonial: "Working with this team has been absolutely incredible. Their attention to detail and creative approach transformed our brand completely.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
      bgColor: "bg-blue-400"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "CEO & Founder",
      testimonial: "The results exceeded our expectations. Professional, reliable, and delivered exactly what we needed to scale our business to the next level.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
      bgColor: "bg-green-400"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Product Manager",
      testimonial: "Innovation at its finest! They brought fresh ideas and technical expertise that helped us launch our product ahead of schedule.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
      bgColor: "bg-teal-400"
    },
    {
      id: 4,
      name: "David Park",
      role: "Tech Lead",
      testimonial: "Outstanding collaboration and communication throughout the entire project. They understood our vision perfectly and made it reality.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
      bgColor: "bg-purple-400"
    },
    {
      id: 5,
      name: "Lisa Thompson",
      role: "Operations Director",
      testimonial: "Exceptional service from start to finish. Their strategic approach and execution capabilities are truly world-class.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80",
      bgColor: "bg-pink-400"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [pauseTimer, setPauseTimer] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      const newIndex = currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1;
      changeTestimonial(newIndex);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlay,pauseTimer, currentIndex, testimonials.length]);

  // Handle pause after user interaction
  useEffect(() => {
    if (pauseTimer) {
      clearTimeout(pauseTimer);
    }

    if (!isAutoPlay) {
      const timer = setTimeout(() => {
        setIsAutoPlay(true);
      }, 5000);
      setPauseTimer(timer);
    }

    return () => {
      if (pauseTimer) {
        clearTimeout(pauseTimer);
      }
    };
  }, [isAutoPlay]);

  const changeTestimonial = (newIndex) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setIsTransitioning(false);
    }, 150);
  };

  const goToPrevious = () => {
    setIsAutoPlay(false);
    const newIndex = currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1;
    changeTestimonial(newIndex);
  };

  const goToNext = () => {
    setIsAutoPlay(false);
    const newIndex = currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1;
    changeTestimonial(newIndex);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            CLIENT TESTIMONIALS
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear what our valued clients have to say about their experience working with us and the results we've delivered together.
          </p>
        </div>

        {/* Testimonial Slider Container */}
        <div className="relative flex items-center justify-center">
          {/* Left Arrow */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 z-10 p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Previous testimonial"
          >
            <BiChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          {/* Testimonial Card */}
          <div className="relative w-full max-w-md mx-16">
            {/* Background colored shape */}
            <div className={`absolute inset-0 ${currentTestimonial.bgColor} rounded-3xl transform rotate-3 scale-105 opacity-20 transition-all duration-500 ease-in-out ${
              isTransitioning ? 'scale-95 opacity-10' : ''
            }`}></div>
            
            {/* Main card */}
            <div className={`relative bg-white rounded-3xl shadow-xl p-8 pt-16 text-center transition-all duration-300 ease-in-out ${
              isTransitioning ? 'opacity-0 transform scale-95 translate-y-4' : 'opacity-100 transform scale-100 translate-y-0'
            }`}>
              {/* Profile image */}
              <div className={`absolute -top-10 left-1/2 transform -translate-x-1/2 transition-all duration-300 ease-in-out ${
                isTransitioning ? 'opacity-0 scale-75' : 'opacity-100 scale-100'
              }`}>
                <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <img
                    src={currentTestimonial.image}
                    alt={currentTestimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div className={`space-y-4 transition-all duration-300 delay-75 ease-in-out ${
                isTransitioning ? 'opacity-0 transform translate-y-4' : 'opacity-100 transform translate-y-0'
              }`}>
                <h3 className="text-xl font-semibold text-gray-800">
                  {currentTestimonial.name}
                </h3>
                <p className="text-gray-500 italic">
                  {currentTestimonial.role}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  "{currentTestimonial.testimonial}"
                </p>
              </div>
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={goToNext}
            className="absolute right-0 z-10 p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Next testimonial"
          >
            <BiChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Dots indicator */}
        {/* <div className="flex justify-center mt-12 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsAutoPlay(false);
                changeTestimonial(index);
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none ${
                index === currentIndex
                  ? 'bg-blue-500 scale-125'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default TestimonialSlider;