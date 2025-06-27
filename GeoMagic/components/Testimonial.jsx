import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TeamSection = () => {
  const [currentSlide, setCurrentSlide] = useState(1); // Start at 1 instead of 0
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const teamMembers = [
    {
      id: 1,
      name: "Anika R",
      position: "Class 9",
      image: "https://placehold.co/600x400?text=AR",
      description:
        "Geo-Magic altered my perspective on geometry! Lines and angles were just dull book illustrations prior to this. I now construct them and observe their operation. The video lessons are really simple to follow.",
      bgColor: "bg-blue-500",
      bgPosition: "left",
    },
    {
      id: 2,
      name: "Rahil L",
      position: "Class 10",
      image: "https://placehold.co/600x400?text=RL",
      description:
        "Trigonometry has always been difficult for me, but the Geo-Magic kit made it easier for me to see it clearly. Learning became enjoyable thanks to the models, and the QR videos provided excellent explanations of each step. I heartily recommend this to anyone who struggles with maths!",
      bgColor: "bg-green-500",
      bgPosition: "center",
      featured: true,
    },
    {
      id: 3,
      name: "Sanya D",
      position: "Class 8",
      image: "https://placehold.co/600x400?text=SD",
      description:
        "My geometry homework was so much easier after using Geo-Magic! I enjoyed constructing the shapes and at last comprehending the concepts presented in the textbook. It's entertaining, imaginative, and it also helped me raise my grades!",
      bgColor: "bg-teal-500",
      bgPosition: "right",
    },
  ];

  // Create extended array with duplicates for infinite effect
  const extendedMembers = [
    teamMembers[teamMembers.length - 1], // Last item at the beginning
    ...teamMembers,
    teamMembers[0], // First item at the end
  ];

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        nextSlide();
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying]);

  // Handle transition end for infinite loop
  useEffect(() => {
    if (isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        if (currentSlide === 0) {
          setCurrentSlide(teamMembers.length);
        } else if (currentSlide === teamMembers.length + 1) {
          setCurrentSlide(1);
        }
      }, 500); // Match the transition duration
      return () => clearTimeout(timer);
    }
  }, [currentSlide, isTransitioning, teamMembers.length]);

  const nextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => prev + 1);
      setIsAutoPlaying(false);
    }
  };

  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => prev - 1);
      setIsAutoPlaying(false);
    }
  };

  return (
    <div className=" bg-gray-50 pt-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Experiences with Geomagic
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Find out how Geomagic is changing math for the better. Learn from
            the teachers and learners who have experienced engaging, hands-on,
            meaningful interaction with math through Geomagic's approach.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          {/* Carousel Track */}
          <div className="overflow-hidden rounded-3xl">
            <div
              className={`flex ${
                isTransitioning
                  ? "transition-transform duration-500 ease-in-out"
                  : ""
              }`}
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {extendedMembers.map((member, index) => (
                <div
                  key={`${member.id}-${index}`}
                  className="w-full flex-shrink-0 px-8 py-8"
                >
                  <div className="relative group max-w-md mx-auto">
                    {/* Background Decorative Element */}
                    <div
                      className={`absolute inset-0 ${member.bgColor} rounded-3xl transform rotate-3 scale-95 opacity-20 group-hover:rotate-6 group-hover:scale-100 transition-all duration-300`}
                    ></div>
                    <div
                      className={`absolute inset-0 ${member.bgColor} rounded-3xl transform rotate-3 scale-95 opacity-20 group-hover:rotate-6 group-hover:scale-100 transition-all duration-300`}
                    ></div>

                    {/* Main Card */}
                    <div
                      className={`relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                        member.featured ? "lg:scale-105" : ""
                      }`}
                    >
                      {/* Profile Image */}
                      <div className="flex justify-center mb-6">
                        <div className="relative">
                          <img
                            className="w-20 h-20 rounded-full border-4 border-slate-600 object-cover shadow-lg"
                            src={member.image}
                            alt=""
                          />
                          <div
                            className={`absolute -top-2 -right-2 w-6 h-6 ${member.bgColor} rounded-full`}
                          ></div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="text-center">
                        <h3 className="text-xl font-bold text-gray-800 mb-2">
                          {member.name}
                        </h3>
                        <p className="text-gray-500 italic mb-4 text-sm">
                          {member.position}
                        </p>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {member.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
