import React from 'react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      role: "Computer Science Student",
      image: "https://placehold.co/600x400?text=PS",
      testimonial: "Shiksha has transformed my learning experience. The interactive courses and personalized guidance helped me excel in my studies and land my dream internship."
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      role: "Engineering Graduate",
      image: "https://placehold.co/600x400?text=RK",
      testimonial: "The comprehensive curriculum and expert mentorship at Shiksha gave me the confidence to pursue advanced studies and achieve my career goals."
    },
    {
      id: 3,
      name: "Anita Verma",
      role: "Data Science Enthusiast",
      image: "https://placehold.co/600x400?text=AV",
      testimonial: "Shiksha's innovative approach to education made complex concepts easy to understand. The practical projects helped me build a strong portfolio."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-indigo-700 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-4 md:top-0 md:left-0 w-32 h-32 md:w-96 md:h-96 bg-gradient-to-r from-pink-500 to-orange-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 md:opacity-70 animate-pulse"></div>
        <div className="absolute top-20 right-4 md:top-0 md:right-0 w-40 h-40 md:w-96 md:h-96 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 md:opacity-70 animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-36 h-36 md:w-96 md:h-96 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 md:opacity-70 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-5 md:opacity-10">
        <div className="w-full h-full" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '30px 30px'
        }}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            What people say
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed px-2">
            Discover what our satisfied students have to say about their transformative learning experiences with Shiksha's innovative education platform.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="group bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 hover:bg-white/15 transition-all duration-500 hover:scale-105 hover:shadow-2xl animate-slide-in-up transform hover:-translate-y-2 active:scale-95"
              style={{
                animationDelay: `${index * 0.3}s`
              }}
            >
              {/* Profile Section */}
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="relative">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover border-2 sm:border-3 border-white/30 group-hover:border-white/50 transition-all duration-300 group-hover:rotate-3 group-hover:scale-110"
                  />
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 sm:w-6 sm:h-6 bg-green-400 rounded-full border-2 border-white flex items-center justify-center animate-pulse">
                    <div className="w-1 h-1 sm:w-2 sm:h-2 bg-white rounded-full"></div>
                  </div>
                </div>
                <div className="ml-3 sm:ml-4">
                  <h3 className="text-white font-semibold text-base sm:text-lg group-hover:text-blue-100 transition-colors duration-300">
                    {testimonial.name}
                  </h3>
                  <p className="text-blue-200 text-xs sm:text-sm mt-1">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              {/* Testimonial Text */}
              <div className="relative mb-4 sm:mb-6">
                <div className="absolute -top-1 sm:-top-2 -left-1 sm:-left-2 text-2xl sm:text-4xl text-blue-300/30 font-serif animate-float">
                  "
                </div>
                <p className="text-white/90 leading-relaxed text-sm sm:text-base lg:text-lg pl-2 sm:pl-4 group-hover:text-white transition-colors duration-300">
                  {testimonial.testimonial}
                </p>
                <div className="absolute -bottom-2 sm:-bottom-4 -right-1 sm:-right-2 text-2xl sm:text-4xl text-blue-300/30 font-serif animate-float animation-delay-1000">
                  "
                </div>
              </div>

              {/* Rating Stars */}
              <div className="flex items-center pt-3 sm:pt-4 border-t border-white/10">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current transform transition-transform duration-300 hover:scale-125 animate-twinkle"
                      viewBox="0 0 20 20"
                      style={{
                        animationDelay: `${i * 0.1}s`
                      }}
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="ml-2 text-xs sm:text-sm text-blue-200 group-hover:text-white transition-colors duration-300">5.0</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced Floating Elements */}
      <div className="absolute top-1/4 left-2 sm:left-8 w-1 h-1 sm:w-2 sm:h-2 bg-white/40 rounded-full animate-ping"></div>
      <div className="absolute top-1/3 right-4 sm:right-12 w-2 h-2 sm:w-3 sm:h-3 bg-blue-300/40 rounded-full animate-pulse"></div>
      <div className="absolute bottom-1/4 left-1/4 w-1 h-1 bg-pink-300/40 rounded-full animate-ping animation-delay-1000"></div>
      <div className="absolute bottom-1/3 right-1/4 w-1 h-1 sm:w-2 sm:h-2 bg-green-300/40 rounded-full animate-pulse animation-delay-2000"></div>
      <div className="absolute top-3/4 left-1/3 w-1 h-1 bg-yellow-300/40 rounded-full animate-bounce animation-delay-3000"></div>
      <div className="absolute top-1/6 right-1/3 w-1 h-1 sm:w-2 sm:h-2 bg-purple-300/40 rounded-full animate-ping animation-delay-4000"></div>

      <style jsx>{`
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-3000 {
          animation-delay: 3s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(50px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        @keyframes twinkle {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out forwards;
        }
        
        .animate-slide-in-up {
          animation: slideInUp 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-twinkle {
          animation: twinkle 2s ease-in-out infinite;
        }
        
        /* Mobile specific animations */
        @media (max-width: 640px) {
          .animate-slide-in-up {
            animation-duration: 0.6s;
          }
          
          @keyframes slideInUp {
            from {
              opacity: 0;
              transform: translateY(30px) scale(0.95);
            }
            to {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }
        }
        
        /* Tablet specific optimizations */
        @media (min-width: 641px) and (max-width: 1024px) {
          .grid > div:nth-child(odd) {
            animation-delay: 0.2s;
          }
          .grid > div:nth-child(even) {
            animation-delay: 0.4s;
          }
        }
        
        /* Touch device optimizations */
        @media (hover: none) and (pointer: coarse) {
          .group:hover {
            transform: scale(1.02) !important;
          }
          
          .group-hover\\:scale-110 {
            transform: scale(1.05) !important;
          }
        }
      `}</style>
    </div>
  );
};

export default TestimonialsSection;