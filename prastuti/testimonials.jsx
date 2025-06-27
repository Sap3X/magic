import React, { useState, useEffect } from 'react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const testimonials = [
    {
      id: 1,
      name: "Rahul Bhandari",
      title: "Director, Nitte University",
      image:null,
      initials: "RB",
      gradient: "from-blue-400 to-blue-600",
      text: "Prastuti has revolutionized our science teaching methodology. The complete kits are so neatly customized to suit NCERT curriculum needs.",
      rating: 5
    },
    {
      id: 2,
      name: "Priya Sharma",
      title: "Science Teacher",
      image: null,
      initials: "PS",
      gradient: "from-blue-400 to-blue-600",
      text: "The students are more interested and principles clearer than ever before. The practical activities give meaning to abstract concepts.",
      rating: 5
    },
    {
      id: 3,
      name: "Arjun Kumar",
      title: "Principal, Modern School",
      image: null,
      initials: "AK",
      gradient: "from-green-400 to-green-600",
      text: "No separate lab required! Prastuti brings laboratory experience directly into classrooms, making quality education accessible.",
      rating: 5
    },
    {
      id: 4,
      name: "Sunita Mishra",
      title: "Mathematics Teacher",
      image: null,
      initials: "SM",
      gradient: "from-purple-400 to-purple-600",
      text: "The chapter-by-chapter demonstration kits have transformed the way we instruct complicated mathematical theories to students.",
      rating: 5
    },
    {
      id: 5,
      name: "Dr. Vikash Singh",
      title: "HOD Science Department",
      image: null,
      initials: "VS",
      gradient: "from-red-400 to-red-600",
      text: "High-quality materials and thorough teacher guidance. Our students attainment is greatly improved.",
      rating: 5
    },
    {
      id: 6,
      name: "Meera Patel",
      title: "Physics Teacher",
      image: null,
      initials: "MP",
      gradient: "from-indigo-400 to-indigo-600",
      text: "The demonstrations are very helpful in making students grasp sophisticated physics concepts effortlessly. Highly recommended!",
      rating: 5
    }
  ];

  // Calculate how many cards to show based on screen size
  const getCardsPerView = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1024) return 3; // lg screens - 3 cards
      if (window.innerWidth >= 768) return 2;  // md screens - 2 cards
      return 1; // sm screens - 1 card
    }
    return 3; // default
  };

  const [cardsPerView, setCardsPerView] = useState(getCardsPerView());

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setCardsPerView(getCardsPerView());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.ceil(testimonials.length / cardsPerView) - 1;

  // Create duplicated testimonials for infinite scroll
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  // Auto-play functionality with infinite scroll
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setIsTransitioning(true);
      setCurrentIndex(prev => prev + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  // Handle infinite scroll reset
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(0);
      }, 500); // Match the transition duration
    }
  }, [currentIndex, maxIndex]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setIsTransitioning(true);
    if (currentIndex <= 0) {
      setCurrentIndex(maxIndex);
    } else {
      setCurrentIndex(prev => prev - 1);
    }
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setIsTransitioning(true);
    setCurrentIndex(prev => prev + 1);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToSlide = (index) => {
    setIsAutoPlaying(false);
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const renderTestimonialCard = (testimonial, index) => (
    <div key={`${testimonial.id}-${index}`} className="bg-white rounded-2xl p-4 md:p-6 lg:p-6 transition-shadow duration-300 flex-shrink-0 mx-auto min-h-[400px] md:min-h-[420px] lg:min-h-[400px] flex flex-col">
      <div className="relative mb-4 lg:mb-5 flex-shrink-0">

        {/* Blue gradient semi-circle */}
        <div className="w-20 h-10 md:w-24 md:h-12 lg:w-20 lg:h-10 mx-auto rounded-t-full" style={{ background: 'linear-gradient(135deg, #3186e7 0%, #1a5bb8 100%)' }}></div>
        {/* Profile Image */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2">
         {testimonial.image ? (
  <img
    src={testimonial.image}
    alt={testimonial.name}
    className="w-16 h-16 md:w-20 md:h-20 lg:w-16 lg:h-16 rounded-full object-cover border-4 border-white shadow-lg"
  />
) : (
  <img
    src={`https://placehold.co/100x100?text=${testimonial.initials}`}
    alt={testimonial.name}
    className="w-16 h-16 md:w-20 md:h-20 lg:w-16 lg:h-16 rounded-full object-cover border-4 border-white shadow-lg"
  />
)}

        </div>
      </div>
      
      <div className="text-center pt-3 lg:pt-4 flex-1 flex flex-col">
        <h3 className="text-blue-800 text-base md:text-lg lg:text-base font-bold mb-1 flex-shrink-0">{testimonial.name}</h3>
        <p className="text-gray-500 text-xs md:text-sm lg:text-xs mb-3 md:mb-4 lg:mb-3 flex-shrink-0">{testimonial.title}</p>
        
        <div className="flex-1 flex items-center justify-center">
          <p className="text-gray-700 text-sm md:text-base lg:text-sm leading-relaxed mb-4 md:mb-6 lg:mb-4">
            "{testimonial.text}"
          </p>
        </div>
        
        {/* Star Rating */}
        <div className="flex justify-center space-x-1 flex-shrink-0">
          {[...Array(testimonial.rating)].map((_, i) => (
            <svg key={i} className="w-4 h-4 md:w-5 md:h-5 lg:w-4 lg:h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-50 via-sky-50 to-cyan-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-blue-600 text-lg font-semibold mb-2 tracking-wider uppercase">
            TESTIMONIALS
          </p>
          <h2 className="text-blue-800 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold">
            What Our Clients Say
          </h2>
        </div>
        
       <div className="relative max-w-7xl mx-auto">
         {/* Left Arrow - Always outside container */}
          <button 
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow-lg p-2 sm:p-3 hover:bg-gray-50 transition-colors group
                       -translate-x-4 sm:-translate-x-6 md:-translate-x-8 lg:-translate-x-8"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 group-hover:text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          {/* Right Arrow - Always outside container */}
          <button 
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow-lg p-2 sm:p-3 hover:bg-gray-50 transition-colors group
                       translate-x-4 sm:translate-x-6 md:translate-x-8 lg:translate-x-8"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 group-hover:text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Testimonials Container */}
         <div className="overflow-hidden">
            <div 
              className={`flex ${isTransitioning ? 'transition-transform duration-500 ease-in-out' : ''}`}
              style={{ 
                transform: `translateX(-${currentIndex * (100 / Math.ceil(duplicatedTestimonials.length / cardsPerView))}%)`,
                width: `${Math.ceil(duplicatedTestimonials.length / cardsPerView) * 100}%`
              }}
            >
              {Array.from({ length: Math.ceil(duplicatedTestimonials.length / cardsPerView) }, (_, slideIndex) => (
                <div 
                  key={slideIndex}
                  className="flex-shrink-0"
                  style={{ width: `${100 / Math.ceil(duplicatedTestimonials.length / cardsPerView)}%` }}
                >
                  <div className={`grid gap-6 md:gap-6 lg:gap-6 ${
                    cardsPerView === 1 ? 'grid-cols-1' : 
                    cardsPerView === 2 ? 'grid-cols-2' : 
                    'grid-cols-3'
                  }`}>
                    {duplicatedTestimonials
                      .slice(slideIndex * cardsPerView, (slideIndex + 1) * cardsPerView)
                      .map((testimonial, index) => renderTestimonialCard(testimonial, slideIndex * cardsPerView + index))
                    }
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: maxIndex + 1 }, (_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  (currentIndex % (maxIndex + 1)) === index 
                    ? 'bg-blue-600 scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;