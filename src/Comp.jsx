import React from "react";
import PicsartBackgroundremover1 from "./asset/9833793-27047-picsart-backgroundremover-1.png";
import ellipse4 from "./asset/ellipse-4.png"; // Blue circle
import ellipse6 from "./asset/ellipse-6.png"; // Blue circle with segment
import polygon5 from "./asset/polygon-5.png"; // Yellow triangle
import screenshot20250604153803Photoroom from "./asset/screenshot-2025-06-04-153803-photoroom.png"; // Geometry kit
import star3 from "./asset/star-3.png"; // Green star

export default function Frame() {
  return (
    <div className="bg-transparent flex justify-center w-full p-2 sm:p-4 lg:p-6">
      <div className="w-full max-w-7xl">
        <div className="relative">
          {/* Main container */}
          <div className="relative w-full bg-[#d9d9d9] rounded-3xl lg:rounded-[59px] shadow-lg overflow-hidden min-h-[80vh] sm:min-h-[70vh] lg:min-h-[60vh]">
            {/* Decorative geometric shapes - responsive positioning */}
            {/* Green star - top right */}
            <img
              className="absolute w-32 hidden sm:block sm:right-8 sm:top-10"
              alt="Star"
              src={star3}
            />

            {/* Blue circle - top center */}
            <img
              className="absolute w-32 hidden sm:block sm:left-12 sm:bottom-24"
              alt="Ellipse"
              src={ellipse6}
            />

            {/* Yellow triangle - bottom left */}
            <img
              className="absolute w-32 hidden sm:block sm:right-1/4 sm:top-36"
              alt="Polygon"
              src={polygon5}
            />

            {/* Blue circle segment - bottom right */}
            <img
              className="absolute w-32 hidden sm:block sm:right-1/3 sm:bottom-12"
              alt="Ellipse"
              src={ellipse4}
            />

            {/* Main content area */}
            <div className="relative h-full flex flex-col lg:flex-row">
              {/* Left side - Product image */}
              <div className="flex-1 relative p-4 sm:p-6 lg:p-8 xl:p-12">
                {/* Background gradient for product */}
                <div className="absolute inset-4 sm:inset-6 lg:inset-8 xl:inset-12 bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 rounded-2xl xl:rounded-[30px] opacity-90 z-10" />

                {/* Product image */}
                <div className="relative z-20 h-full flex items-center justify-center">
                  <img
                    className="w-full h-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl 2xl:max-w-none object-contain"
                    alt="Geometry Kit"
                    src={screenshot20250604153803Photoroom}
                  />
                </div>
              </div>

              {/* Right side - Content */}
              <div className="flex-1 relative p-4 sm:p-6 lg:p-8 xl:p-12 flex flex-col justify-center">
                {/* Logo/Brand image */}
                <div className="mb-6 lg:mb-8 xl:mb-12">
                  <img
                    className="w-full h-auto max-w-xs sm:max-w-sm lg:max-w-md xl:max-w-lg 2xl:max-w-[777px] mx-auto lg:mx-0"
                    alt="Geo Magic Logo"
                    src={PicsartBackgroundremover1}
                  />
                </div>

                {/* Main description */}
                <div className="mb-6 lg:mb-8 xl:mb-12">
                  <p className="text-black text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-semibold leading-relaxed text-center lg:text-left xl:text-justify font-['Nunito_Sans'] max-w-2xl lg:max-w-none">
                    Your Guide to Line Geometry. Explore the world of lines
                    through hands-on activities and engaging tutorials. Master
                    the essentials of geometry today.
                  </p>
                </div>

                {/* Product specifications */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 xl:gap-12">
                  <div className="space-y-1 sm:space-y-2">
                    <p className="text-black text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-semibold leading-relaxed text-center sm:text-left font-['Nunito_Sans']">
                      Strips - 10
                      <br />
                      Protractor - 10
                      <br />
                      Nuts &amp; Bolts - 15 Sets
                    </p>
                  </div>

                  <div className="space-y-1 sm:space-y-2">
                    <p className="text-black text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-semibold leading-relaxed text-center sm:text-left font-['Nunito_Sans']">
                      Instruction Manual - 1<br />
                      Spacers - 10
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
