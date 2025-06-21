import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Lena Pearce",
      position: "Senior Developer",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      testimonial: "Working with this team has been an incredible experience. Their attention to detail and commitment to excellence is unmatched.",
      bgColor: "bg-blue-500",
      rating: 5
    },
    {
      id: 2,
      name: "Sophia Bach",
      position: "Product Manager",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      testimonial: "The innovative solutions and professional approach have transformed our business processes completely. Highly recommend their services.",
      bgColor: "bg-green-500",
      rating: 5,
      featured: true
    },
    {
      id: 3,
      name: "Arielle Copper",
      position: "Marketing Director",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      testimonial: "Outstanding results and exceptional customer service. They delivered beyond our expectations and helped us achieve our goals.",
      bgColor: "bg-teal-500",
      rating: 5
    },
    {
      id: 4,
      name: "Marcus Johnson",
      position: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      testimonial: "Their expertise and dedication have been instrumental in our company's growth. A truly professional and reliable partner.",
      bgColor: "bg-purple-500",
      rating: 5
    },
    {
      id: 5,
      name: "Elena Rodriguez",
      position: "UX Designer",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
      testimonial: "Creative solutions and seamless execution. They understand our vision and consistently deliver high-quality work.",
      bgColor: "bg-pink-500",
      rating: 5
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying]);

  const getVisibleTestimonials = () => {
    const result = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length;
      result.push({ ...testimonials[index], displayIndex: i });
    }
    return result;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 bg-gray-50">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">OUR TEAM</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Meet the talented individuals who make our success possible. Each team member brings unique expertise and dedication to delivering exceptional results.
        </p>
      </div>

      {/* Carousel Container */}
      <div 
        className="relative overflow-hidden"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        <div className="flex justify-center items-center min-h-[400px]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
            {getVisibleTestimonials().map((testimonial, index) => (
              <div
                key={`${testimonial.id}-${currentIndex}`}
                className={`relative transform transition-all duration-700 ease-in-out ${
                  index === 1 ? 'scale-105 z-10' : 'scale-95 z-0'
                }`}
              >
                {/* Background Decorative Shape */}
                <div className={`absolute -top-4 -right-4 w-24 h-24 ${testimonial.bgColor} rounded-full opacity-20 transform rotate-45`}></div>
                <div className={`absolute -bottom-4 -left-4 w-16 h-16 ${testimonial.bgColor} rounded-full opacity-30`}></div>
                
                {/* Card */}
                <div className="bg-white rounded-2xl shadow-xl p-8 relative overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                  {/* Featured Badge */}
                  {testimonial.featured && (
                    <div className="absolute top-4 right-4">
                      <Star className="w-6 h-6 text-yellow-400 fill-current" />
                    </div>
                  )}
                  
                  {/* Profile Image */}
                  <div className="flex justify-center mb-6">
                    <div className="relative">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
                      />
                      <div className={`absolute -bottom-2 -right-2 w-6 h-6 ${testimonial.bgColor} rounded-full border-2 border-white`}></div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{testimonial.name}</h3>
                    <p className="text-gray-500 text-sm mb-4 italic">{testimonial.position}</p>
                    
                    {/* Rating */}
                    <div className="flex justify-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    
                    {/* Testimonial Text */}
                    <p className="text-gray-600 leading-relaxed text-sm">
                      "{testimonial.testimonial}"
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors duration-200 z-20"
        >
          <ChevronLeft className="w-6 h-6 text-gray-600" />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors duration-200 z-20"
        >
          <ChevronRight className="w-6 h-6 text-gray-600" />
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-8 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-blue-500 w-8' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>

      {/* Auto-play indicator */}
      <div className="flex justify-center mt-4">
        <button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className="text-sm text-gray-500 hover:text-gray-700 transition-colors duration-200"
        >
          {isAutoPlaying ? 'Auto-playing' : 'Paused'} • Click to {isAutoPlaying ? 'pause' : 'resume'}
        </button>
      </div>
    </div>
  );
};

export default TestimonialCarousel;