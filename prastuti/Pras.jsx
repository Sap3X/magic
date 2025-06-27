import React from "react";
import Gallery from "./components/Gallery.jsx";
import Testimonials from "./components/testimonials.jsx";

export default function Prastuti() {
  return (
    <div className="bg-white min-h-screen">
      {/* Container with proper spacing */}
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        {/* Hero Section */}
        <div
          className="relative mb-10 min-h-screen w-full overflow-hidden rounded-xl"
          style={{
            background: "linear-gradient(135deg, #3186e7 0%, #1a5bb8 100%)",
          }}
        >
          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 right-0 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-white/5 rounded-full transform translate-x-16 sm:translate-x-24 lg:translate-x-32 -translate-y-8 sm:-translate-y-12 lg:-translate-y-16"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 bg-white/3 rounded-full transform -translate-x-12 sm:-translate-x-16 lg:-translate-x-20 translate-y-12 sm:translate-y-16 lg:translate-y-20"></div>
          </div>

          {/* Main Hero Content */}
          <div className="relative z-10 min-h-screen w-full flex items-center px-4 sm:px-6 lg:px-8 xl:px-12 py-16 lg:py-0">
            <div className="w-full max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
                {/* Left Content */}
                <div className="text-center lg:text-left order-1 lg:order-1">
                  <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold leading-tight mb-4">
                    PRASTUTI
                  </h1>
                  <h2 className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-6">
                    "Teach beyond the textbooks"
                  </h2>
                  <p className="text-white/90 text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
                    Revolutionary chapter-wise demonstration kit designed for
                    Grades 8, 9 & 10. Transform your classroom into an
                    interactive learning environment with hands-on activities
                    that make complex concepts simple.
                  </p>
                </div>

                {/* Right Image */}
                <div className="flex justify-center lg:justify-end order-2 lg:order-2">
                  <div className="relative transform hover:scale-105 transition-transform duration-700 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
                    <img
                      src="/mainimage.webp"
                      alt="Main Image"
                      className="w-full h-auto object-contain drop-shadow-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* About Section */}
        <section className="py-12 sm:py-16 lg:py-20 xl:py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 rounded-xl mb-10">
          <div className="px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
              {/* Left Image */}
              <div className="relative group">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl transform group-hover:scale-105 transition-all duration-700">
                  <img
                    src="/prasmain (1).webp"
                    alt="Prastuti Demonstration"
                    className="w-full h-auto object-cover rounded-xl"
                  />
                </div>

                {/* Floating badges */}
                <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-2 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-bold shadow-lg">
                  NCERT Aligned
                </div>
                <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 bg-gradient-to-r from-green-400 to-emerald-500 text-white px-2 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-bold shadow-lg">
                  Grade 8-10
                </div>
              </div>

              {/* Right Content */}
              <div className="space-y-6 lg:space-y-8">
                <div className="relative">
                  <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                    What is Prastuti?
                  </h2>
                  <div className="absolute -bottom-2 left-0 w-24 sm:w-32 h-1 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"></div>
                </div>

                <div className="space-y-4 lg:space-y-6">
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-xl">
                    <p className="text-gray-800 text-base sm:text-lg leading-relaxed">
                      <span className="font-bold text-blue-700">Prastuti</span>{" "}
                      is a revolutionary chapter-wise demonstration kit
                      specifically designed for
                      <span className="font-semibold">
                        {" "}
                        Grades 8, 9 & 10 Science and Math
                      </span>
                      , perfectly aligned with the{" "}
                      <span className="font-semibold">NCERT curriculum</span>.
                    </p>
                  </div>

                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-xl">
                    <p className="text-gray-800 text-base sm:text-lg leading-relaxed">
                      It empowers teachers to effortlessly conduct
                      <span className="font-bold">
                        {" "}
                        hands-on activities
                      </span>{" "}
                      directly in the classroom, transforming lessons into{" "}
                      <span className="font-semibold">
                        interactive, visual, and engaging experiences
                      </span>
                      that help students grasp complex concepts with ease.
                    </p>
                  </div>

                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-xl">
                    <p className="text-gray-800 text-base sm:text-lg leading-relaxed">
                      <span className="font-bold">
                        No separate lab required!
                      </span>
                      No technical expertise needed! Prastuti brings the
                      laboratory experience
                      <span className="font-semibold">
                        {" "}
                        directly into your classroom
                      </span>
                      , making quality education accessible to every student.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section className="py-12 sm:py-16 bg-gray-100 rounded-xl mb-10">
          <div className="px-4 sm:px-6 max-w-6xl mx-auto">
            <div className="bg-gradient-to-b from-gray-300 to-gray-600 rounded-xl h-64 sm:h-80 lg:h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 sm:w-10 sm:h-10 text-gray-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="text-white text-lg sm:text-xl font-semibold">
                  Demo Video Coming Soon
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 sm:py-16 lg:py-20 xl:py-24 bg-gradient-to-b from-blue-800 to-blue-600 rounded-xl mb-10">
          <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-center mb-12 lg:mb-16">
              WHY CHOOSE US?
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 lg:gap-8">
              {[
                {
                  icon: "/briefcase - Copy (1)_white.webp",
                  title: ["Compact and", "portable design"],
                },
                {
                  icon: "/online-video - Copy (1)_white.webp",
                  title: ["Free teacher training", "video support"],
                },
                {
                  icon: "/training (1)_white.webp",
                  title: ["Chapter wise maths and", "science kit"],
                },
                {
                  icon: "/classroom (1)_white.webp",
                  title: ["Brings the lab into", "the classroom"],
                },
                {
                  icon: "/enrichment (1)_white.webp",
                  title: ["Enhances teaching", "methods"],
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className={`text-center group cursor-pointer ${
                    index === 4
                      ? "sm:col-span-2 sm:justify-self-center lg:col-span-1 lg:justify-self-auto xl:col-span-1"
                      : ""
                  }`}
                >
                  <div className="mb-4 lg:mb-6 flex justify-center">
                    <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-all duration-300">
                      <img
                        src={feature.icon}
                        alt={feature.title.join(" ")}
                        className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 object-contain filter group-hover:brightness-110 transition-all duration-300"
                      />
                    </div>
                  </div>
                  <p className="text-white text-base sm:text-lg font-bold leading-tight group-hover:text-yellow-300 transition-all duration-300">
                    <span className="block">{feature.title[0]}</span>
                    <span className="block">{feature.title[1]}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section id="products" className="py-8 lg:py-12 mb-10">
          <Gallery />
        </section>

        {/* Testimonials Section */}
        <div className="mb-10">
          <Testimonials />
        </div>

        {/* Contact Section */}
        <section
          id="contact"
          className="py-12 sm:py-16 lg:py-20 xl:py-24 bg-gradient-to-r from-blue-800 to-blue-600 rounded-xl"
        >
          <div className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
            <div className="text-center">
              <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 lg:mb-8 leading-tight">
                Ready to Empower Your Classroom?
              </h2>
              <p className="text-white text-base sm:text-lg lg:text-xl xl:text-2xl mb-8 lg:mb-12 leading-relaxed max-w-3xl mx-auto">
                Transform the way STEM, AI, and Robotics are taught. Contact us
                to bring Prastuti to your school today!
              </p>
              <button
                className="inline-flex items-center bg-yellow-400 hover:bg-yellow-300 text-black text-sm sm:text-base md:text-lg lg:text-xl font-bold py-3 px-6 sm:py-4 sm:px-8 lg:py-5 lg:px-10 rounded-md transition-all duration-300 transform hover:scale-105 shadow-lg"
                onClick={() => alert("Contact form coming soon!")}
              >
                Order Now
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
