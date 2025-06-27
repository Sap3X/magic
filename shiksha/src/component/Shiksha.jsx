import React, { useState } from "react";
import UnifiedShikshaHero from "./hero";
import RobotFeaturesDisplay from "./robot";
import PointsToPonder from "./sir";
import TestimonialsSection from "./testi";
import Syllabus from "./Syllabus";
import InfiniteGallery from "./gallery";
import side_section from "../assest/side.webp";
import side2_section from "../assest/side2.webp";
import button_section from "../assest/button.webp";

const ShikshaWebsite = () => {
  const [hoveredRobot, setHoveredRobot] = useState(null);

  const robotFeatures = {
    robot1: [
      "Real-time learning analytics",
      "Toy-based learning",
      "1000+ interactive speaking charts",
      "Dynamic usage report generation",
    ],
    robot2: [
      "Visual and auditory feedback",
      "Projector connectivity",
      "Learning in native language",
      "Report generation",
    ],
  };

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Hero Section */}

      <UnifiedShikshaHero />
      {/* Robot Video Section */}
      <section className="py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-pink-400 to-blue-400 rounded-3xl shadow-lg p-4 xs:p-6 sm:p-8 lg:p-16 lg:mb-16 mt-16 flex flex-col items-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6 text-blue-900">
              Watch Shiksha
            </h2>
            <div className="relative w-full max-w-3xl aspect-video rounded-2xl shadow-lg bg-black overflow-visible">
              <div className="absolute -top-2 -left-4 md:-top-8 md:-left-8 w-16 h-16 md:w-24 md:h-24"></div>
              <div className="absolute -bottom-2 -right-2 md:-bottom-4 md:-right-4 lg:-bottom-8 lg:-right-8 w-12 h-12 md:w-24 md:h-24"></div>
              <video
                src="/videos/haha.mp4"
                controls
                loop
                className="w-full h-full object-cover rounded-2xl "
              >
                Sorry, your browser doesn't support embedded videos.
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* What is Shiksha Section */}

      <section className="py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-blue-300 to-pink-200 rounded-3xl shadow-lg p-4 xs:p-6 sm:p-8 lg:p-16 lg:mb-16">
            <div className="grid lg:grid-cols-2 gap-6 xs:gap-8 lg:gap-0 items-center">
              <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
                <img
                  src={side_section}
                  alt="Shiksha Robot Features"
                  className="w-48 xs:w-56 sm:w-64 md:w-80 lg:w-96 xl:w-[26rem] 2xl:w-[30rem] h-auto object-contain transform group-hover:scale-110 transition-all duration-700 hover:rotate-3"
                  style={{
                    filter: "drop-shadow(0 25px 50px rgba(99, 102, 241, 0.4))",
                    animation: "robotFloat 6s ease-in-out infinite",
                  }}
                />
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-indigo-900 text-center lg:text-center mb-6 xs:mb-8 pb-8 bg-gradient-to-r from-red-400 via-pink-700 bg-clip-text font-Montserrat">
                  What is Shiksha?
                </h2>
                <p className="text-justify text-red-700 text-base xs:text-lg sm:text-xl lg:text-2xl font-normal font:family-montserrat leading-relaxed">
                  Shiksha is an advanced educational robot transforming
                  classrooms into engaging spaces using cutting-edge technology.
                  It emphasizes interactive and playful learning, aiming to
                  ignite children's enjoyment and extend education beyond
                  traditional methods, fostering a dynamic and captivating
                  approach to learning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*why choose shiksha section */}

      <RobotFeaturesDisplay />

      {/* Points to Ponder Section */}

      <PointsToPonder />

      {/* Features Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 mb-20 relative overflow-hidden bg-gradient-to-br from-slate-500 via-blue-400 to-indigo-600 ">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-gradient-to-r from-yellow-400 to-red-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-72 h-72 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Enhanced Title with Gradient Animation */}
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-Montserrat font-bold text-red-700  mb-4">
              Features of Shiksha
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-red-500 to-purple-500 mx-auto rounded-full"></div>
          </div>

          <div className="relative">
            {/* Creative Feature Cards Grid */}
            <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
              {/* Enhanced Robot 1 */}
              <div
                className="relative group cursor-pointer perspective-1000"
                onMouseEnter={() => setHoveredRobot("robot1")}
                onMouseLeave={() => setHoveredRobot(null)}
              >
                <div className="relative transform-gpu transition-all duration-700 hover:rotate-y-12 hover:rotate-x-6 preserve-3d">
                  {/* Main Card with Glassmorphism Effect */}
                  <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 hover:scale-105 group-hover:bg-white/20">
                    {/* Floating Robot Image */}
                    <div className="flex justify-center mb-6 relative">
                      <div className="relative">
                        <img
                          src={side_section}
                          alt="Feature Robot 1"
                          className="mx-auto w-32 h-32 sm:w-40 sm:h-40  group-hover:scale-110  animate-spin-continuous"
                        />
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-md animate-spin-slow"></div>

                        {/* Glowing Ring Effect */}
                      </div>
                    </div>
                    <div className="text-blue-900 text-center font-normal text-sm">
                      Click me{" "}
                    </div>

                    {/* Animated Feature Overlay */}
                    <div
                      className={`absolute inset-0 rounded-3xl transition-all duration-700 transform ${
                        hoveredRobot === "robot1"
                          ? "bg-gradient-to-br from-purple-900/95 via-indigo-900/95 to-blue-900/95 scale-100 opacity-100"
                          : "bg-gradient-to-br from-purple-900/0 via-indigo-900/0 to-blue-900/0 scale-95 opacity-0"
                      }`}
                    >
                      <div className="p-8 flex flex-col justify-center h-full">
                        {/* Glowing Title */}
                        <h3 className="text-white text-2xl font-bold mb-6 text-center relative">
                          <span className="relative z-10">Key Features</span>
                          <div className="absolute inset-0 blur-sm bg-white/20 rounded-lg"></div>
                        </h3>

                        {/* Animated Feature List */}
                        <div className="space-y-4">
                          {robotFeatures.robot1.map((feature, index) => (
                            <div
                              key={index}
                              className="flex items-center text-white transform transition-all duration-300"
                              style={{
                                transitionDelay: `${index * 100}ms`,
                                transform:
                                  hoveredRobot === "robot1"
                                    ? "translateX(0)"
                                    : "translateX(-20px)",
                                opacity: hoveredRobot === "robot1" ? 1 : 0,
                              }}
                            >
                              <div className="w-3 h-3 bg-gradient-to-r from-pink-400 to-red-400 rounded-full mr-4 shadow-lg shadow-pink-400/50 animate-pulse"></div>
                              <span className="text-sm sm:text-base font-medium">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating Particles Effect */}
                  <div className="absolute -inset-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-0 left-0 w-2 h-2 bg-purple-400 rounded-full animate-bounce delay-0"></div>
                    <div className="absolute top-0 right-0 w-1 h-1 bg-pink-400 rounded-full animate-bounce delay-300"></div>
                    <div className="absolute bottom-0 left-0 w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce delay-600"></div>
                    <div className="absolute bottom-0 right-0 w-2 h-2 bg-red-400 rounded-full animate-bounce delay-900"></div>
                  </div>
                </div>
              </div>

              {/* Enhanced Robot 2 */}
              <div
                className="relative group cursor-pointer perspective-1000"
                onMouseEnter={() => setHoveredRobot("robot2")}
                onMouseLeave={() => setHoveredRobot(null)}
              >
                <div className="relative transform-gpu transition-all duration-700 hover:rotate-y-12 hover:rotate-x-6 preserve-3d">
                  {/* Main Card with Glassmorphism Effect */}
                  <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 hover:scale-105 group-hover:bg-white/20">
                    {/* Floating Robot Image */}
                    <div className="flex justify-center mb-6 relative">
                      <div className="relative">
                        <img
                          src={side2_section}
                          alt="Feature Robot 2"
                          className="mx-auto w-32 h-32 sm:w-40 sm:h-40 group-hover:scale-110 animate-spin-continuous"
                        />
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-md animate-spin-slow"></div>
                        {/* Glowing Ring Effect */}
                      </div>
                    </div>
                    <div className="text-blue-900 text-center font-normal text-sm">
                      Click me{" "}
                    </div>

                    {/* Animated Feature Overlay */}
                    <div
                      className={`absolute inset-0 rounded-3xl transition-all duration-700 transform ${
                        hoveredRobot === "robot2"
                          ? "bg-gradient-to-br from-blue-900/95 via-cyan-900/95 to-teal-900/95 scale-100 opacity-100"
                          : "bg-gradient-to-br from-blue-900/0 via-cyan-900/0 to-teal-900/0 scale-95 opacity-0"
                      }`}
                    >
                      <div className="p-8 flex flex-col justify-center h-full">
                        {/* Glowing Title */}
                        <h3 className="text-white text-2xl font-bold mb-6 text-center relative">
                          <span className="relative z-10">Key Features</span>
                          <div className="absolute inset-0 blur-sm bg-white/20 rounded-lg"></div>
                        </h3>

                        {/* Animated Feature List */}
                        <div className="space-y-4">
                          {robotFeatures.robot2.map((feature, index) => (
                            <div
                              key={index}
                              className="flex items-center text-white transform transition-all duration-300"
                              style={{
                                transitionDelay: `${index * 100}ms`,
                                transform:
                                  hoveredRobot === "robot2"
                                    ? "translateX(0)"
                                    : "translateX(-20px)",
                                opacity: hoveredRobot === "robot2" ? 1 : 0,
                              }}
                            >
                              <div className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mr-4 shadow-lg shadow-cyan-400/50 animate-pulse"></div>
                              <span className="text-sm sm:text-base font-medium">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating Particles Effect */}
                  <div className="absolute -inset-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-0 left-0 w-2 h-2 bg-cyan-400 rounded-full animate-bounce delay-0"></div>
                    <div className="absolute top-0 right-0 w-1 h-1 bg-blue-400 rounded-full animate-bounce delay-300"></div>
                    <div className="absolute bottom-0 left-0 w-1.5 h-1.5 bg-teal-400 rounded-full animate-bounce delay-600"></div>
                    <div className="absolute bottom-0 right-0 w-2 h-2 bg-indigo-400 rounded-full animate-bounce delay-900"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          .perspective-1000 {
            perspective: 1000px;
          }
          .preserve-3d {
            transform-style: preserve-3d;
          }
          .rotate-y-12 {
            transform: rotateY(12deg);
          }
          .rotate-x-6 {
            transform: rotateX(6deg);
          }
          @keyframes spin-slow {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
          @keyframes float {
            0% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-15px);
            }
            100% {
              transform: translateY(0px);
            }
          }
          .animate-spin-slow {
            animation: spin-slow 8s linear infinite;
          }
          .animate-spin-continuous {
            animation: float 3s ease-in-out infinite;
          }
        `}</style>
      </section>

      {/* Syllabus Section */}
      <Syllabus />
      {/* Infinite Gallery Section */}
      <InfiniteGallery />
      {/* Testimonials Section */}
      <TestimonialsSection />
      {/* Contact Us Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8  ">
        <div className="max-w-7xl mx-auto z-10 bg-gradient-to-r from-indigo-900 to-blue-500 relative rounded-3xl shadow-lg p-8 lg:p-16">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-8">
                Ready to Empower Your Classroom with Shiksha Robot?
              </h2>
              <p className="text-white text-base sm:text-lg lg:text-xl font-semibold leading-relaxed text-center px-4 max-w-screen-sm mx-auto mb-8">
                Shiksha: The Gen 2 Spoken English Teaching robot to your school!
              </p>

              <button className="bg-yellow-400 text-black px-8 py-4 rounded-md text-xl font-medium hover:bg-yellow-300 transition-colors duration-300 flex items-center justify-center mx-auto lg:mx-0">
                <span className="mr-3">📞</span>
                Contact us
              </button>
            </div>

            <div className="flex justify-center opacity-70">
              <img
                src={button_section}
                alt="Contact Us"
                className="w-80% rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1 h-64 bg-white hidden lg:block"></div>
      </section>
    </div>
  );
};
export default ShikshaWebsite;
