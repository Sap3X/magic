import React, { useState, useEffect } from 'react';

const RobotFeaturesDisplay = () => {
  const [hoveredFeature, setHoveredFeature] = useState(null);
  const [animationPhase, setAnimationPhase] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationPhase(prev => (prev + 1) % 8);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    { text: "Toy-based learning", color: "from-red-500 to-red-700" },
    { text: "Real-time learning", color: "from-red-500 to-red-700" },
    { text: "Learn in native language", color: "from-red-500 to-red-700" },
    { text: "Dynamic usage report", color: "from-red-500 to-red-700" },
    { text: "Report generation", color: "from-red-500 to-red-700" },
    { text: "1000+ Interactive speaking", color: "from-red-500 to-red-700" },
    { text: "Visual feedback", color: "from-red-500 to-red-700" },
    { text: "Projector connectivity", color: "from-red-500 to-red-700" }
  ];

  return (
    <div className="min-h-screen bg-blue-50 p-2 md:p-4 lg:p-8 overflow-hidden relative">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-4 h-4 bg-blue-400 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-purple-400 rounded-full animate-bounce opacity-40"></div>
        <div className="absolute bottom-32 left-32 w-8 h-8 bg-pink-400 rounded-full animate-ping opacity-30"></div>
        <div className="absolute bottom-20 right-40 w-5 h-5 bg-cyan-400 rounded-full animate-pulse opacity-50"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Title */}
        <div className="text-center mt-8 md:mt-16 md:mb-16 lg:mt-28">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl lg:-mb-16 text-red-600 font-bold">
              Why Choose Shiksha?
          </h2> 
        </div>

        {/* Desktop Layout - Hexagon Formation */}
        <div className="hidden lg:block">
          <div className="relative w-full h-[700px] flex items-center justify-center">
            {/* Robot in Center */}
            <div className="absolute z-20 transform">
              <RobotCharacter />
            </div>

           
            {features.map((feature, index) => {
              const angle = (index * 45) * (Math.PI / 180); // 8 positions around circle
              const radius = 250;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;
              
              return (
                <div
                  key={index}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 z-10"
                  style={{
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                  }}
                >
                  <HexagonFeature 
                    feature={feature}
                    index={index}
                    isHovered={hoveredFeature === index}
                    onHover={() => setHoveredFeature(index)}
                    onLeave={() => setHoveredFeature(null)}
                    // isHighlighted={animationPhase === index}
                  />
                </div>
              );
            })}

            {/* Connecting Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 5 }}>
              {features.map((_, index) => {
                const angle = (index * 45) * (Math.PI / 180);
                const radius = 280;
                const x1 = 50 + (Math.cos(angle) * radius / 16); // Convert to percentage
                const y1 = 50 + (Math.sin(angle) * radius / 16);
                
                return (
                  <line
                    key={index}
                    x1="50%"
                    y1="50%"
                    x2={`${x1}%`}
                    y2={`${y1}%`}
                    stroke={animationPhase === index ? "#f59e0b" : "#6366f1"}
                    strokeWidth="2"
                    strokeDasharray="5,5"
                    className="transition-all duration-500"
                    opacity={hoveredFeature === index || animationPhase === index ? "0.8" : "0.3"}
                  />
                );
              })}
            </svg>
          </div>
        </div>

        {/* Mobile/Tablet Layout - Circular Formation */}
        <div className="lg:hidden">
          <div className="relative w-full flex items-center justify-center" style={{ height: '400px' }}>
            {/* Robot in Center */}
            <div className="absolute z-20 transform">
              <RobotCharacter isMobile={true} />
            </div>

            {/* Features arranged in circle pattern around robot */}
            {features.map((feature, index) => {
              const angle = (index * 45) * (Math.PI / 180); // 8 positions around circle
              const radius = window.innerWidth < 640 ? 140 : 180; // Smaller radius for mobile
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;
              
              return (
                <div
                  key={index}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 z-10"
                  style={{
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                  }}
                >
                  <HexagonFeature 
                    feature={feature}
                    index={index}
                    isHovered={hoveredFeature === index}
                    onHover={() => setHoveredFeature(index)}
                    onLeave={() => setHoveredFeature(null)}
                    // isHighlighted={animationPhase === index}
                    isMobile={true}
                  />
                </div>
              );
            })}

            {/* Connecting Lines for Mobile */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 5 }}>
              {features.map((_, index) => {
                const angle = (index * 45) * (Math.PI / 180);
                const radius = window.innerWidth < 640 ? 160 : 200;
                const x1 = 50 + (Math.cos(angle) * radius / 8); // Convert to percentage
                const y1 = 50 + (Math.sin(angle) * radius / 8);
                
                return (
                  <line
                    key={index}
                    x1="50%"
                    y1="50%"
                    x2={`${x1}%`}
                    y2={`${y1}%`}
                    stroke={animationPhase === index ? "#f59e0b" : "#6366f1"}
                    strokeWidth="1"
                    strokeDasharray="3,3"
                    className="transition-all duration-500"
                    opacity={hoveredFeature === index || animationPhase === index ? "0.8" : "0.3"}
                  />
                );
              })}
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RobotFeaturesDisplay;

const HexagonFeature = ({ feature, index, isHovered, onHover, onLeave, isHighlighted, isMobile = false }) => {
  const size = isMobile ? 'w-20 h-20 sm:w-24 sm:h-24' : 'w-36 h-36';
  const textSize = isMobile ? 'text-xs sm:text-sm' : 'text-sm';
  const padding = isMobile ? 'p-2 sm:p-3' : 'p-6';

  return (
    <div 
      className="relative group cursor-pointer transform transition-all duration-300 hover:scale-110"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      {/* Glow Effect */}
      <div className={`absolute inset-0 rounded-full blur-xl transition-all duration-500 ${
        isHovered || isHighlighted ? 'opacity-60 scale-125' : 'opacity-0 scale-100'
      }`}>
        <div className={`w-full h-full bg-gradient-to-r ${feature.color} rounded-full`}></div>
      </div>

      {/* Hexagon Shape */}
      <div className={`${size} relative transform transition-all duration-500 ${
        isHovered ? 'rotate-12 scale-105' : 'rotate-0 scale-100'
      } ${isHighlighted ? 'animate-pulse' : ''}`} 
           style={{
             clipPath: 'polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)'
           }}>
        
        {/* Outer Gradient Border */}
        <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} transition-all duration-500`} 
             style={{
               clipPath: 'polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)'
             }}>
          
          {/* Inner Content */}
          <div className={`absolute ${isMobile ? 'inset-1' : 'inset-2'} bg-blue-700 flex flex-col items-center justify-center ${padding} transition-all duration-300`} 
               style={{
                 clipPath: 'polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)'
               }}>
            
            {/* Text */}
            <span className={`text-white font-bold text-center text-[0.5rem] sm:text-sm  leading-tight transition-all duration-300 ${
              isHovered ? 'text-cyan-300' : 'text-white'
            }`}>
              {feature.text}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const RobotCharacter = ({ isMobile = false }) => {
  const [isWaving, setIsWaving] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsWaving(true);
      setTimeout(() => setIsWaving(false), 1000);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const containerSize = isMobile ? 'w-32 h-32 sm:w-40 sm:h-40' : 'w-80 h-80';
  const bubblePosition = isMobile ? '-top-8 sm:-top-12' : '-top-16';
  const bubbleText = isMobile ? 'text-xs sm:text-sm' : 'text-sm';

  return (
    <div className="relative group">
      {/* Glow effect behind robot */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-300 via-purple-400 to-pink-400 rounded-full blur-2xl opacity-30 scale-110 animate-pulse"></div>
      
      {/* Robot container */}
      <div className={`relative ${containerSize} flex items-center justify-center transition-all duration-300`}>
        <img 
          src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/9w1KRIs84F/a83zr8d6_expires_30_days.png"
          alt="Educational Robot"
          className="max-w-full max-h-full object-contain drop-shadow-2xl transition-all duration-300 group-hover:scale-105"
        />
        
        {/* Floating elements around robot - scaled for mobile */}
        <div className={`absolute ${isMobile ? 'top-2 left-2 w-3 h-3' : 'top-8 left-8 w-6 h-6'} bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-bounce opacity-80`}></div>
        <div className={`absolute ${isMobile ? 'top-3 right-3 w-2 h-2' : 'top-12 right-12 w-4 h-4'} bg-gradient-to-r from-green-400 to-blue-500 rounded-full animate-pulse opacity-70`}></div>
        <div className={`absolute ${isMobile ? 'bottom-4 left-4 w-2.5 h-2.5' : 'bottom-16 left-16 w-5 h-5'} bg-gradient-to-r from-purple-400 to-pink-500 rounded-full animate-ping opacity-60`}></div>
        <div className={`absolute ${isMobile ? 'bottom-5 right-2 w-2 h-2' : 'bottom-20 right-8 w-3 h-3'} bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-bounce opacity-75`}></div>
      </div>

      {/* Speech bubble */}
      <div className={`absolute ${bubblePosition} left-1/2 transform -translate-x-1/2 bg-white rounded-2xl px-2 py-1 sm:px-4 sm:py-2 shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300`}>
        <p className={`text-gray-800 font-semibold ${bubbleText} whitespace-nowrap`}>Ready to learn with SHIKSHA! 🚀</p>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 sm:w-3 sm:h-3 bg-white"></div>
      </div>
    </div>
  );
};