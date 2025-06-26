import React, { useState, useEffect, useRef } from 'react';
import img8 from './assets/DSC05351.webp';

const AnubhavSection = () => {
  const [animationStage, setAnimationStage] = useState(0);
  const sectionRef = useRef(null);

  // Intersection Observer for smooth reveal
  useEffect(() => {
    let timeoutIds = [];
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Staggered animation stages
            timeoutIds.push(setTimeout(() => setAnimationStage(1), 100));
            timeoutIds.push(setTimeout(() => setAnimationStage(2), 400));
            timeoutIds.push(setTimeout(() => setAnimationStage(3), 800));
            timeoutIds.push(setTimeout(() => setAnimationStage(4), 1200));
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '-50px',
      }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      timeoutIds.forEach(clearTimeout);
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-[70vh] py-16 px-4 lg:px-8 bg-gradient-to-br from-gray-300 via-gray-100 to-gray-400 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Main Container */}
        <div
          className={`
            relative transition-all duration-1000 ease-out
            ${animationStage > 0 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
          `}
        >
          {/* Background Blur Card */}
          <div className="relative bg-white/50 backdrop-blur-xl rounded-[2.5rem] shadow-2xl border border-white/20 overflow-hidden">
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-50/30 via-transparent to-orange-100/20 pointer-events-none" />

            <div className="grid lg:grid-cols-5 gap-0 relative z-10">
              {/* Image Column */}
              <div
                className={`
                  lg:col-span-2 relative p-6 flex items-center justify-center
                  transition-all duration-700 ease-out
                  ${animationStage > 0 ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'}
                `}
              >
                <div className="relative group">
                  {/* Floating Orb Background */}
                  <div className="absolute -inset-4 bg-gradient-to-br from-orange-400/20 to-amber-500/20 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-700" />
                  {/* Image Container */}
                  <div className="relative overflow-hidden rounded-3xl shadow-2xl transition-all duration-700 group-hover:scale-[1.02] group-hover:shadow-3xl">
                    <img
                      className="w-full max-w-sm h-72 md:h-96 lg:h-[500px] object-cover"
                      src={img8}
                      alt="Anubhav"
                      draggable={false}
                    />
                    {/* Image Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-orange-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  {/* Floating Elements */}
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-orange-400 rounded-full animate-pulse" />
                  <div
                    className="absolute -bottom-3 -left-3 w-6 h-6 bg-amber-300 rounded-full animate-bounce"
                    style={{ animationDelay: '1s' }}
                  />
                </div>
              </div>

              {/* Content Column */}
              <div className="lg:col-span-3 flex flex-col justify-center p-6 md:p-10 lg:p-14">
                {/* Header Section */}
                <div
                  className={`
                    text-center mb-8 transition-all duration-700 ease-out delay-100
                    ${animationStage > 1 ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}
                  `}
                >
                  <div className="relative inline-block">
                    {/* Title */}
                    <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black font-['SF_Pro_Display'] tracking-tight mb-2 leading-none">
                      ANUBHAV
                    </h2>
                    {/* Animated Underline */}
                    <div
                      className="absolute left-1/2 -translate-x-1/2 w-32 sm:w-48 h-1 bg-gradient-to-r from-orange-400 to-amber-500 rounded-full transition-all duration-700 delay-300"
                      style={{
                        bottom: '-8px', // bring line closer to heading
                        width: animationStage > 2 ? '60%' : '0%',
                        transitionProperty: 'width',
                      }}
                    />
                  </div>
                  <div className="h-8"></div>
                  {/* Subtitle */}
                  <div className="flex items-center justify-center space-x-2 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800">
                    <span className="transform transition-all duration-500 hover:scale-110">Innovate</span>
                    <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" />
                    <span className="transform transition-all duration-500 hover:scale-110">Create</span>
                    <div
                      className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"
                      style={{ animationDelay: '0.5s' }}
                    />
                    <span className="transform transition-all duration-500 hover:scale-110">Learn</span>
                  </div>
                </div>

                {/* Description */}
                <div
                  className={`
                    mb-12 transition-all duration-700 ease-out delay-200
                    ${animationStage > 2 ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}
                  `}
                >
                  <p className="text-gray-700 text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium leading-relaxed text-center">
                    Anubhav empowers students and educators with hands-on STEM, AI, and Robotics experiences. Our kits are designed to spark curiosity, foster creativity, and build real-world problem-solving skills—making learning engaging, practical, and future-ready for every classroom.
                  </p>
                </div>

                {/* Feature Icons Grid */}
                <div
                  className={`
                    grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 transition-all duration-700 ease-out delay-300
                    ${animationStage > 3 ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}
                  `}
                >
                  {/* Applied Physics */}
                  <FeatureCard
                    icon={
                      // Thinner Atom SVG for Applied Physics
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="2.5" fill="currentColor"/>
                        <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="currentColor"/>
                        <ellipse cx="12" cy="12" rx="3.5" ry="9" stroke="currentColor" transform="rotate(60 12 12)"/>
                        <ellipse cx="12" cy="12" rx="3.5" ry="9" stroke="currentColor" transform="rotate(120 12 12)"/>
                      </svg>
                    }
                    label="Applied Physics"
                  />
                  {/* Create and Innovate */}
                  <FeatureCard
                    icon={
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12,2A3,3 0 0,1 15,5V11A3,3 0 0,1 12,14A3,3 0 0,1 9,11V5A3,3 0 0,1 12,2M19,11C19,14.53 16.39,17.44 13,17.93V21H11V17.93C7.61,17.44 5,14.53 5,11H7A5,5 0 0,0 12,16A5,5 0 0,0 17,11H19Z" />
                      </svg>
                    }
                    label="Create and Innovate"
                    delay="100ms"
                  />
                  {/* Enhances Teaching */}
                  <FeatureCard
                    icon={
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12,3L1,9L12,15L21,10.09V17H23V9M5,13.18V17.18L12,21L19,17.18V13.18L12,17L5,13.18Z" />
                      </svg>
                    }
                    label="Enhances Teaching"
                    delay="200ms"
                  />
                  {/* Problem Solving */}
                  <FeatureCard
                    icon={
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M21,9V7L15,1H5C3.89,1 3,1.89 3,3V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V9M19,19H5V3H14V9H19V19Z" />
                      </svg>
                    }
                    label="Problem Solving"
                    delay="300ms"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Floating Decorative Elements */}
          <div className="absolute top-10 right-10 w-20 h-20 bg-gradient-to-br from-orange-300/20 to-amber-400/20 rounded-full blur-xl animate-pulse" />
          <div
            className="absolute bottom-10 left-10 w-32 h-32 bg-gradient-to-br from-amber-300/10 to-orange-400/10 rounded-full blur-2xl animate-pulse"
            style={{ animationDelay: '2s' }}
          />
        </div>
      </div>
    </section>
  );
};

// FeatureCard component for DRYness and smooth delay
function FeatureCard({ icon, label, delay = "0ms" }) {
  return (
    <div
      className="group cursor-pointer transform transition-all duration-500 hover:scale-105"
      style={{ transitionDelay: delay }}
    >
      <div className="relative h-full flex flex-col">
        {/* Floating Background */}
        <div className="absolute -inset-2 bg-gradient-to-br from-orange-400/20 to-amber-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
        {/* Icon Container */}
        <div className="relative bg-white/60 backdrop-blur-lg rounded-2xl p-6 border border-white/30 shadow-lg group-hover:shadow-2xl transition-all duration-500 flex flex-col h-full">
          <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-orange-400 to-amber-500 rounded-xl flex items-center justify-center transform transition-all duration-500 group-hover:rotate-6 group-hover:scale-110">
            {icon}
          </div>
          <h3 className="text-gray-800 text-sm md:text-base lg:text-lg font-bold text-center group-hover:text-orange-600 transition-colors duration-300">
            {label}
          </h3>
        </div>
      </div>
    </div>
  );
}

export default AnubhavSection;