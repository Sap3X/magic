import React, { useState, useEffect } from "react";
import hero_section from "../assest/hero.webp";

const UnifiedShikshaHero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-500 to-red-400">
      {/* Dynamic Animated Background */}
      <div
        className="absolute inset-0 opacity-40 transition-all duration-1000"
        style={{
          background: `
            radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
              rgba(99, 102, 241, 0.3) 0%, 
              rgba(59, 130, 246, 0.2) 25%, 
              rgba(147, 51, 234, 0.15) 50%, 
              transparent 70%
            )
          `,
        }}
      />

      {/* Animated Mesh Background */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 via-purple-600/20 to-pink-600/20"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, rgba(255, 119, 198, 0.3) 0%, transparent 50%)
            `,
            animation: "meshMove 10s ease-in-out infinite alternate",
          }}
        />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen py-8 sm:py-12 lg:py-0">
          {/* Left Side - Content */}
          <div className="flex-1 text-center lg:text-left mb-8 sm:mb-12 lg:mb-0 lg:pr-12">
            {/* Main Title with Advanced Animations */}
            <div
              className={`transform transition-all duration-1500 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-20 opacity-0"
              }`}
            >
              <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-4 sm:mb-6 leading-tight">
                <span className="inline-block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent hover:scale-100 transition-transform duration-400 cursor-default">
                  <span
                    className="animate-pulse"
                    style={{ animationDuration: "2s" }}
                  >
                    S
                  </span>
                  <span
                    className="animate-pulse"
                    style={{ animationDuration: "2s", animationDelay: "0.1s" }}
                  >
                    H
                  </span>
                  <span
                    className="animate-pulse"
                    style={{ animationDuration: "2s", animationDelay: "0.2s" }}
                  >
                    I
                  </span>
                  <span
                    className="animate-pulse"
                    style={{ animationDuration: "2s", animationDelay: "0.3s" }}
                  >
                    K
                  </span>
                  <span
                    className="animate-pulse"
                    style={{ animationDuration: "2s", animationDelay: "0.4s" }}
                  >
                    S
                  </span>
                  <span
                    className="animate-pulse"
                    style={{ animationDuration: "2s", animationDelay: "0.5s" }}
                  >
                    H
                  </span>
                  <span
                    className="animate-pulse"
                    style={{ animationDuration: "2s", animationDelay: "0.6s" }}
                  >
                    A
                  </span>
                </span>
                <span
                  className="block xs:inline-block bg-gradient-to-r from-blue-900 to-red-700 bg-clip-text text-transparent hover:scale-100 transition-transform duration-500 cursor-default animate-bounce font-Conthrax mt-2 xs:mt-0"
                  style={{ animationDuration: "3s" }}
                >
                  SHIKSHA 2.0
                </span>
              </h1>
            </div>

            {/* Subtitle with Typewriter Effect */}
            <div
              className={`transform transition-all duration-1500 delay-700 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-20 opacity-0"
              }`}
            >
              <div className="relative mb-6 sm:mb-8">
                <p className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-slate-200 leading-relaxed">
                  <span className="inline-block text-blue-900 text-xl xs:text-2xl sm:text-3xl md:text-4xl animate-pulse">
                    "
                  </span>
                  <span className="bg-white bg-clip-text text-transparent hover:from-white hover:to-slate-100 transition-all duration-300">
                    The Gen 2 Spoken English Teaching Robot
                  </span>
                  <span className="inline-block text-blue-900 text-xl xs:text-2xl sm:text-3xl md:text-4xl animate-pulse">
                    "
                  </span>
                </p>

                {/* Dynamic Underline */}
                <div
                  className="mt-3 sm:mt-4 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent rounded-full transform origin-center animate-pulse"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, #60a5fa, #a855f7, #ec4899, transparent)",
                    backgroundSize: "200% 100%",
                    animation: "shimmer 3s ease-in-out infinite",
                  }}
                />
              </div>
            </div>

            {/* Enhanced Feature Pills */}
            <div
              className={`transform transition-all duration-1500 delay-1000 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-20 opacity-0"
              }`}
            ></div>
          </div>

          {/* Right Side - Robot with Enhanced Visuals */}
          <div className="flex-1 flex justify-center lg:justify-end relative">
            <div
              className={`relative transform transition-all duration-2000 delay-500 ${
                isVisible
                  ? "translate-y-0 opacity-100 scale-100"
                  : "translate-y-32 opacity-0 scale-75"
              }`}
            >
              {/* Orbital Rings */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="w-72 h-72 xs:w-80 xs:h-80 sm:w-96 sm:h-96 md:w-[28rem] md:h-[28rem] lg:w-[32rem] lg:h-[32rem] border border-blue-400/20 rounded-full animate-spin opacity-60"
                  style={{ animationDuration: "20s" }}
                />
                <div
                  className="absolute w-64 h-64 xs:w-72 xs:h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[26rem] lg:h-[26rem] border border-purple-400/20 rounded-full animate-spin opacity-40"
                  style={{
                    animationDuration: "15s",
                    animationDirection: "reverse",
                  }}
                />
                <div
                  className="absolute w-56 h-56 xs:w-64 xs:h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 border border-pink-400/20 rounded-full animate-spin opacity-30"
                  style={{ animationDuration: "25s" }}
                />
              </div>

              {/* Robot Container */}
              <div className="relative group cursor-pointer z-20">
                <img
                  src={hero_section}
                  alt="Shiksha Robot"
                  className="w-48 xs:w-56 sm:w-64 md:w-80 lg:w-96 xl:w-[26rem] 2xl:w-[30rem] h-auto object-contain transform group-hover:scale-110 transition-all duration-700 hover:rotate-3"
                  style={{
                    filter: "drop-shadow(0 25px 50px rgba(99, 102, 241, 0.4))",
                    animation: "robotFloat 6s ease-in-out infinite",
                  }}
                />

                {/* Interactive Glow */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-500/30 via-purple-500/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 blur-2xl scale-110" />
              </div>

              {/* Floating Tech Elements */}
              <div
                className="absolute -top-4 -left-4 xs:-top-6 xs:-left-6 sm:-top-8 sm:-left-8 w-10 h-10 xs:w-12 xs:h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center text-white text-lg xs:text-xl sm:text-2xl shadow-lg animate-bounce z-30"
                style={{ animationDelay: "0.5s", animationDuration: "3s" }}
              >
                🤖
              </div>
              <div
                className="absolute -bottom-4 -right-4 xs:-bottom-6 xs:-right-6 sm:-bottom-8 sm:-right-8 w-10 h-10 xs:w-12 xs:h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center text-white text-lg xs:text-xl sm:text-2xl shadow-lg animate-bounce z-30"
                style={{ animationDelay: "1s", animationDuration: "3s" }}
              >
                ⚙️
              </div>
              <div className="absolute top-1/3 -right-6 xs:-right-8 sm:-right-10 md:-right-12 w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-white text-sm xs:text-base sm:text-lg md:text-xl shadow-lg animate-pulse z-30">
                ⚡
              </div>
              <div
                className="absolute top-2/3 -left-6 xs:-left-8 sm:-left-10 md:-left-12 w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center text-white text-sm xs:text-base sm:text-lg md:text-xl shadow-lg animate-bounce z-30"
                style={{ animationDelay: "1.5s", animationDuration: "3s" }}
              >
                🚀
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }

        @keyframes robotFloat {
          0%,
          100% {
            transform: translateY(0px) rotateX(0deg);
          }
          25% {
            transform: translateY(-15px) rotateX(2deg);
          }
          50% {
            transform: translateY(-25px) rotateX(0deg);
          }
          75% {
            transform: translateY(-10px) rotateX(-2deg);
          }
        }

        @keyframes meshMove {
          0% {
            transform: translate(0, 0) rotate(0deg);
          }
          100% {
            transform: translate(50px, 30px) rotate(2deg);
          }
        }

        /* Custom breakpoints for better responsiveness */
        @media (max-width: 475px) {
          .xs\:text-4xl {
            font-size: 2.25rem;
            line-height: 2.5rem;
          }
          .xs\:text-lg {
            font-size: 1.125rem;
            line-height: 1.75rem;
          }
          .xs\:text-2xl {
            font-size: 1.5rem;
            line-height: 2rem;
          }
          .xs\:px-8 {
            padding-left: 2rem;
            padding-right: 2rem;
          }
          .xs\:py-4 {
            padding-top: 1rem;
            padding-bottom: 1rem;
          }
          .xs\:text-lg {
            font-size: 1.125rem;
            line-height: 1.75rem;
          }
          .xs\:w-56 {
            width: 14rem;
          }
          .xs\:w-12 {
            width: 3rem;
          }
          .xs\:h-12 {
            height: 3rem;
          }
          .xs\:w-10 {
            width: 2.5rem;
          }
          .xs\:h-10 {
            height: 2.5rem;
          }
          .xs\:text-xl {
            font-size: 1.25rem;
            line-height: 1.75rem;
          }
          .xs\:text-base {
            font-size: 1rem;
            line-height: 1.5rem;
          }
          .xs\:flex-row {
            flex-direction: row;
          }
          .xs\:inline-block {
            display: inline-block;
          }
          .xs\:mt-0 {
            margin-top: 0px;
          }
          .xs\:w-72 {
            width: 18rem;
          }
          .xs\:h-72 {
            height: 18rem;
          }
          .xs\:w-80 {
            width: 20rem;
          }
          .xs\:h-80 {
            height: 20rem;
          }
          .xs\:w-64 {
            width: 16rem;
          }
          .xs\:h-64 {
            height: 16rem;
          }
          .xs\:-top-6 {
            top: -1.5rem;
          }
          .xs\:-left-6 {
            left: -1.5rem;
          }
          .xs\:-bottom-6 {
            bottom: -1.5rem;
          }
          .xs\:-right-6 {
            right: -1.5rem;
          }
          .xs\:-right-8 {
            right: -2rem;
          }
          .xs\:-left-8 {
            left: -2rem;
          }
        }
      `}</style>
    </section>
  );
};
export default UnifiedShikshaHero;
