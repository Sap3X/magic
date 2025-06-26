import React, { useState, useEffect } from "react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Narayana Shenoy",
      role: "Head Master",
      company: "Srimad Bhuvanendra High School, Karkala",
      image: "https://placehold.co/80x80/4F46E5/FFFFFF?text=NS",
      testimonial:
        "Thanks to the PSL and its hands-on approach, our classrooms are now filled with curiosity, innovation, and excitement for STEM learning.",
      rating: 5,
    },
    {
      id: 2,
      name: "Tanishka",
      role: "Student of 9th grade",
      company: "NITK English Medium School",
      image: "https://placehold.co/80x80/EC4899/FFFFFF?text=T",
      testimonial:
        "PSL has helped me understand STEM concepts in a fun way. Building models and experimenting with different ideas has made learning exciting. I look forward to every session with PSL!",
      rating: 5,
    },
    {
      id: 3,
      name: "Kamakshi Rao",
      role: "Teacher",
      company: "Local School",
      image: "https://placehold.co/80x80/10B981/FFFFFF?text=KR",
      testimonial:
        "Shiksha Robot has transformed the way my students learn English! It makes practice engaging and interactive, helping them build confidence in speaking. The guided conversations and pronunciation support are very useful.",
      rating: 5,
    },
    {
      id: 4,
      name: "Adarsh Hegde",
      role: "Student of 7th grade",
      company: "Local School",
      image: "https://placehold.co/80x80/F59E0B/FFFFFF?text=AH",
      testimonial:
        "I used to feel shy about speaking English, but Shiksha has helped me practice without hesitation. The interactive lessons and real-time feedback make learning easy and enjoyable.",
      rating: 5,
    },
    {
      id: 5,
      name: "Ananya Shetty",
      role: "Student of 6th grade",
      company: "Premier Industries",
      image: "https://placehold.co/80x80/EF4444/FFFFFF?text=AS",
      testimonial:
        "I love using Shiksha! It feels like talking to a real person. I have improved my vocabulary and can now introduce myself fluently in English. Learning with the robot is so much fun!",
      rating: 5,
    },
  ];

  // Create extended array with first item duplicated at the end for seamless loop
  const extendedTestimonials = [...testimonials, testimonials[0]];

  // Auto-advance testimonials every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // Handle seamless loop transition
  useEffect(() => {
    if (currentIndex === testimonials.length) {
      // We're at the duplicate first item
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(0);
        setTimeout(() => {
          setIsTransitioning(true);
        }, 50);
      }, 1000); // Wait for transition to complete
    }
  }, [currentIndex, testimonials.length]);

  const nextTestimonial = () => {
    if (currentIndex < testimonials.length) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const prevTestimonial = () => {
    if (currentIndex === 0) {
      setIsTransitioning(false);
      setCurrentIndex(testimonials.length);
      setTimeout(() => {
        setIsTransitioning(true);
        setCurrentIndex(testimonials.length - 1);
      }, 50);
    } else {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const goToTestimonial = (index) => {
    setIsTransitioning(true);
    setCurrentIndex(index);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-5 lg:h-5 xl:w-5 xl:h-5 ${
          i < rating ? "text-yellow-400" : "text-gray-300"
        }`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 py-8 sm:py-10 md:py-12 lg:py-14 xl:py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-14">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-2 sm:mb-3 md:mb-4 lg:mb-5 px-2">
          What People Say
        </h2>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-xs sm:max-w-md md:max-w-xl lg:max-w-2xl xl:max-w-3xl mx-auto px-2">
          Hear from our amazing community of learners and educators
        </p>
      </div>

      <div className="flex items-center justify-center">
        {/* Previous Button */}
        <button
          onClick={prevTestimonial}
          className="group hidden sm:flex items-center justify-center bg-white hover:bg-blue-50 border border-gray-200 rounded-full p-2 sm:p-3 md:p-3 lg:p-4 xl:p-4 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 mr-2 sm:mr-3 md:mr-4 lg:mr-6 xl:mr-8"
          aria-label="Previous testimonial"
        >
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5 lg:w-6 lg:h-6 text-gray-600 group-hover:text-blue-600 transition-colors"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <div className="w-full max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-3xl xl:max-w-4xl">
          <div className="overflow-hidden">
            <div
              className={`flex ${
                isTransitioning
                  ? "transition-transform duration-1000 ease-in-out"
                  : ""
              }`}
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {extendedTestimonials.map((testimonial, index) => (
                <div
                  key={`${testimonial.id}-${index}`}
                  className="w-full flex-shrink-0 px-1 sm:px-2"
                >
                  <div className="bg-white p-4 sm:p-5 md:p-6 lg:p-8 xl:p-10 rounded-2xl sm:rounded-2xl md:rounded-3xl lg:rounded-3xl transform transition-all duration-300 margin:2rem">
                    <div className="flex flex-col items-center text-center space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6">
                      {/* Profile Image */}
                      <div className="relative">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 lg:w-22 lg:h-22 xl:w-24 xl:h-24 rounded-full object-cover shadow-lg ring-2 sm:ring-3 md:ring-4 lg:ring-4 ring-blue-100"
                          loading="lazy"
                        />
                        <div className="absolute -bottom-1 -right-1 sm:-bottom-1 sm:-right-1 md:-bottom-2 md:-right-2 lg:-bottom-2 lg:-right-2 bg-blue-500 rounded-full p-1 sm:p-1 md:p-2 lg:p-2">
                          <svg
                            className="w-3 h-3 sm:w-3 sm:h-3 md:w-4 md:h-4 lg:w-4 lg:h-4 text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      </div>

                      {/* Name and Role */}
                      <div className="space-y-1 sm:space-y-1 md:space-y-2 lg:space-y-2">
                        <h3 className="text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-2xl font-bold text-gray-800 leading-tight">
                          {testimonial.name}
                        </h3>
                        <p className="text-blue-600 font-semibold text-xs sm:text-sm md:text-sm lg:text-base xl:text-base">
                          {testimonial.role}
                        </p>
                        {testimonial.company && (
                          <p className="text-gray-500 text-xs sm:text-xs md:text-sm lg:text-sm xl:text-sm leading-snug">
                            {testimonial.company}
                          </p>
                        )}
                        <div className="flex justify-center space-x-1 py-1 sm:py-1 md:py-2 lg:py-2">
                          {renderStars(testimonial.rating)}
                        </div>
                      </div>

                      {/* Testimonial Text */}
                      <blockquote className="text-gray-700 leading-relaxed text-sm sm:text-sm md:text-base lg:text-lg xl:text-lg italic max-w-full sm:max-w-sm md:max-w-lg lg:max-w-2xl xl:max-w-2xl px-2 md:px-4 lg:px-6">
                        "{testimonial.testimonial}"
                      </blockquote>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Next Button */}
        <button
          onClick={nextTestimonial}
          className="group hidden sm:flex items-center justify-center bg-white hover:bg-blue-50 border border-gray-200 rounded-full p-2 sm:p-3 md:p-3 lg:p-4 xl:p-4 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 ml-2 sm:ml-3 md:ml-4 lg:ml-6 xl:ml-8"
          aria-label="Next testimonial"
        >
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5 lg:w-6 lg:h-6 text-gray-600 group-hover:text-blue-600 transition-colors"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>



      {/* Pagination Dots */}
      <div className="flex justify-center space-x-2 sm:space-x-2 md:space-x-3 lg:space-x-3 xl:space-x-3 mt-6 sm:mt-7 md:mt-8 lg:mt-9 xl:mt-10">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToTestimonial(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 md:w-3 md:h-3 lg:w-4 lg:h-4 xl:w-4 xl:h-4 rounded-full transition-all duration-300 ${
              currentIndex === index ||
              (currentIndex === testimonials.length && index === 0)
                ? "bg-blue-600 scale-125 shadow-lg"
                : "bg-gray-300 hover:bg-gray-400 active:scale-110"
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>

      {/* Swipe indicator for mobile */}
      <div className="sm:hidden text-center mt-4">
        <p className="text-xs text-gray-500">Swipe or use buttons to navigate</p>
      </div>
    </section>
  );
};

export default Testimonials;