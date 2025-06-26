import React, { useState, useEffect } from 'react';
import hand_section from '../assest/handshake.webp'

const PointsToPonder = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const points = [
    {
      title: "A scalable and customizable teaching aid to support English learning, even in remote corners of the country.",
      // icon: "🌍",
      gradient: "from-blue-500 to-purple-600",

    },
    {
      title: "Integration of technology and AI in current learning and adaptability for future readiness.",
      // icon: "🤖",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      title: "An economical and reliable solution for various gaps in English learning, proven with 100+ students.",
      // icon: "📈",
      gradient: "from-pink-500 to-orange-600"
    }
  ];

  return (
    <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-6 sm:top-10 left-6 sm:left-10 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-24 sm:top-40 right-12 sm:right-20 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-purple-200 rounded-full opacity-20 animate-bounce" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-12 sm:bottom-20 left-1/4 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-pink-200 rounded-full opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-24 sm:bottom-40 right-1/3 w-9 h-9 sm:w-11 sm:h-11 md:w-14 md:h-14 bg-indigo-200 rounded-full opacity-20 animate-bounce" style={{animationDelay: '0.5s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold bg-clip-text text-blue-800 mb-8 sm:mb-12 md:mb-16 text-center font-Montserrat`} >
        Points to Ponder
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
          <div className="space-y-4 sm:space-y-6 md:space-y-8">
            {points.map((point, index) => (
              <div 
                key={index}
                className={`group relative overflow-hidden rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'} ${hoveredIndex === index ? 'scale-105 -rotate-1' : 'hover:scale-102'}`}
                style={{
                  transitionDelay: `${index * 200}ms`,
                  transformOrigin: 'center'
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
               
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                
                <div className="relative bg-white p-4 sm:p-5 md:p-6 border-l-4 border-transparent group-hover:border-indigo-500 transition-all duration-300">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className={`text-2xl sm:text-3xl md:text-4xl transform transition-all duration-300 ${hoveredIndex === index ? 'scale-125 rotate-12' : ''}`}>
                      {point.icon}
                    </div>
                    <h3 className="text-indigo-900 text-base sm:text-lg md:text-xl lg:text-2xl font-bold group-hover:text-indigo-700 transition-colors duration-300 leading-tight">
                      {point.title}
                    </h3>
                  </div>
                  
                  {/* Hover indicator */}
                  <div className={`absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2 text-indigo-500 transition-all duration-300 ${hoveredIndex === index ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}>
                   
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className={`flex justify-center mt-8 lg:mt-0 transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`} style={{transitionDelay: '600ms'}}>
            <div className="relative group">
              <div className="relative">
                <img 
                  src={hand_section}
                  alt="Shiksha Features" 
                   className="w-90 rounded-xl shadow-2xl transform transition-all duration-500  relative z-10"
                  />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PointsToPonder;