import React from "react";
import ProductShowcase from "./components/Comp";
import Bg from "./asset/hero_section.webp";
import Image from "./components/Circular";
import Logo from "./asset/Geomagic-Logo.png";
import TeamSection from "./components/Testimonial";
import image from "./Images";
import './Animation.css';
import AutoShow from "./aim";

export default function Magic() {
  return (
    <>
      <div className="">
        <div className="min-h-screen relative overflow-hidden">
          {/* Desktop View */}
          <div className="hidden md:block">
            {/* Background with dark overlay */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `linear-gradient(135deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.5) 50%, rgba(0, 0, 0, 0.8) 100%), url(${Bg})`,
              }}
            />

            {/* Subtle texture overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-800/20 via-transparent to-slate-900/20" />

            {/* Content Container */}
            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 md:px-8">
              {/* Logo Section */}
              <div className="flex flex-col items-center mb-2 md:mb-3">
                <div className="relative">
                  <img
                    src={Logo}
                    className="w-[30rem] h-24 md:w-[60rem] md:h-32 object-contain drop-shadow-2xl"
                    alt="GeoMagic Logo"
                  />
                </div>
              </div>

              {/* Main Content */}
              <div className="text-center max-w-4xl mx-auto">
                {/* Subtitle */}
                <div className="mb-8 md:mb-16">
                  <p className="text-white/90 text-sm md:text-base lg:text-lg font-medium tracking-wide uppercase mb-2">
                    Experiential Geometry Learning
                  </p>
                  <p className="text-white text-xs md:text-sm lg:text-base font-light tracking-wider uppercase">
                    Integrated with 1 - 10th Grade Curriculum
                  </p>
                </div>

                {/* Main Heading */}
                <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 leading-tight drop-shadow-lg">
                  GeoMagic Where Geometry
                  <br />
                  <span className="bg-clip-text text-white">
                    Comes to Life!
                  </span>
                </h1>

                {/* Description */}
                <p className="text-gray-100/90 text-lg md:text-xl lg:text-2xl font-light leading-relaxed mb-4 md:mb-6 max-w-3xl mx-auto drop-shadow-md">
                  Build shapes, explore angles, and dive into trigonometry with
                  hands-on parts, a guidebook, and quick video lessons.
                </p>

                {/* Tagline */}
                <p className="text-white text-xl md:text-2xl lg:text-3xl font-semibold mb-8 md:mb-12 drop-shadow-lg">
                  Fun. Simple. <span className="text-yellow-300">Magical.</span>
                </p>
              </div>
            </div>
          </div>

          {/* Mobile View */}
          <div className="block md:hidden">
            {/* Hero Image Section */}
            <div className="relative h-[60vh] overflow-hidden">
              <img
                src={Bg}
                alt="GeoMagic Hero"
                className="w-full h-full object-cover object-center"
              />

              {/* Gradient overlay at bottom of image */}
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-green-400 via-green-400/80 to-transparent" />
            </div>

            {/* Content Section with matching gradient background */}
            <div className="relative bg-gradient-to-b from-green-400 via-yellow-400 to-yellow-500 min-h-[40vh] px-4 py-8">
              {/* Logo Section */}
              <div className="flex flex-col items-center mb-0.5">
                <div className="relative">
                  <img
                    src={Logo}
                    className="w-[30rem] h-24 md:w-[60rem] md:h-32 object-contain drop-shadow-2xl"
                    alt="GeoMagic Logo"
                  />
                </div>
              </div>

              {/* Main Content */}
              <div className="text-center max-w-lg mx-auto">
                {/* Subtitle */}
                <div className="mb-8">
                  <p className="text-white/90 text-xs font-medium tracking-wide uppercase mb-1">
                    Experiential Geometry Learning
                  </p>
                  <p className="text-white/80 text-sm font-light tracking-wider uppercase">
                    Integrated with 1 - 10th Grade Curriculum
                  </p>
                </div>

                {/* Main Heading */}
                <h1 className="text-white text-2xl font-bold mb-4 leading-tight drop-shadow-lg">
                  GeoMagic Where Geometry
                  <br />
                  <span className="bg-clip-text text-white">
                    Comes to Life!
                  </span>
                </h1>

                {/* Description */}
                <p className="text-purple-100/90 text-sm font-medium leading-relaxed mb-3 drop-shadow-md">
                  Build shapes, explore angles, and dive into trigonometry with
                  hands-on parts, a guidebook, and quick video lessons.
                </p>

                {/* Tagline */}
                <p className="text-white text-lg font-semibold mb-6 drop-shadow-lg">
                  Fun. Simple. <span className="text-yellow-300">Magical.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <AutoShow>
        <div className="flex flex-col items-center justify-center my-12 px-4 md:px-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6 text-black">
            Watch GeoMagic in Action
          </h2>
          <div className="relative w-full max-w-3xl aspect-video rounded-2xl shadow-lg bg-black overflow-visible autoshow">
  
            <div className="absolute -top-2 -left-4 md:-top-8 md:-left-8 w-16 h-16 md:w-24 md:h-24">
                <img src={image.vid_shape} alt="shapes" className="w-full h-full rotate-12"></img>
              </div>
              <div className="absolute -bottom-2 -right-2 md:-bottom-4 md:-right-4 lg:-bottom-8 lg:-right-8 w-12 h-12 md:w-24 md:h-24">
                <img src={image.vid_shape} alt="shapes" className="w-full h-full rotate-[24deg]"></img>
              </div>
            <video
              src="/videos/haha.mp4"
              controls
              loop
              className="w-full h-full object-cover rounded-2xl "
              // poster="/videos/geomagic-poster.jpg"
            >
              Sorry, your browser doesn't support embedded videos.
            </video>
          </div>
        </div>
        </AutoShow>
        <AutoShow>
        {/* The section below is the "Why Geomagic?" section */}
        <div className="flex flex-col items-center mb-16 px-4 md:px-8 lg:px-16 pt-6 autoshow">
          {/* Main heading */}
          <h1 className="text-black text-3xl md:text-4xl lg:text-6xl font-bold text-center max-w-md md:max-w-lg lg:max-w-xl mb-4 lg:mb-6 ">
            WHY GEOMAGIC?
          </h1>

          {/* Subtitle */}
          <p className="text-black text-lg md:text-xl lg:text-2xl text-center max-w-2xl md:max-w-4xl lg:max-w-5xl mb-8 md:mb-12 lg:mb-14 leading-relaxed">
            Our key to experiential geometry. Dive into hands-on learning with
            our kit and video tutorials, igniting curiosity and creativity.
            Explore the magic of geometry today!
          </p>

          {/* Icons container */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8 w-full max-w-6xl mb-4 md:mb-6 text-center">
            <div className="flex justify-center flex-col items-center">
              <div
                className="w-20 h-20 m-2 md:w-32 md:h-32 lg:w-36 lg:h-36 rounded-full bg-slate-200"
                style={{
                  boxShadow: "0px 3px 5px grey",
                }}
              >
                <img src={image.icon_1} className="p-4 md:p-8" alt="Experiential Hands On" />
              </div>
              <span className="text-black text-sm md:text-lg lg:text-xl font-medium leading-tight">
                Experiential
                <br />
                Hands On
              </span>
              <span></span>
            </div>
            <div className="flex justify-center flex-col items-center">
              <div
                className="w-20 h-20 m-2 md:w-32 md:h-32 lg:w-36 lg:h-36 rounded-full bg-slate-200"
                style={{
                  boxShadow: "0px 3px 5px grey",
                }}
              >
                <img src={image.icon_2} className="p-4 md:p-8" alt="Fun & Engaging" />
              </div>
              <span className="text-black text-sm md:text-lg lg:text-xl font-medium leading-tight">
                Fun &<br />
                Engaging
              </span>
            </div>
            <div className="flex justify-center flex-col items-center">
              <div
                className="w-20 h-20 m-2 md:w-32 md:h-32 lg:w-36 lg:h-36 rounded-full bg-slate-200"
                style={{
                  boxShadow: "0px 3px 5px grey",
                }}
              >
                <img src={image.icon_3} className="p-4 md:p-8" alt="Self Directed" />
              </div>
              <span className="text-black text-sm md:text-lg lg:text-xl font-medium leading-tight">
                Self Directed
                <br />
                Learning
              </span>
            </div>
            <div className="flex justify-center flex-col items-center">
              <div
                className="w-20 h-20 m-2 md:w-32 md:h-32 lg:w-36 lg:h-36 rounded-full bg-slate-200"
                style={{
                  boxShadow: "0px 3px 5px grey",
                }}
              >
                <img src={image.icon_4} className="p-4 md:p-8" alt="Curriculum Integrated"/>
              </div>
              <span className="text-black text-sm md:text-lg lg:text-xl font-medium leading-tight">
                Curriculum
                <br />
                Integrated
              </span>
            </div>
            <div className="flex items-center flex-col col-span-2 md:col-span-1">
              <div
                className="w-20 h-20 m-2 md:w-32 md:h-32 lg:w-36 lg:h-36 rounded-full bg-slate-200"
                style={{
                  boxShadow: "0px 3px 5px grey",
                }}
              >
                <img src={image.icon_5} className="p-2" alt="500+ Geometry"/>
              </div>
              <span className="text-black text-sm md:text-lg lg:text-xl font-medium leading-tight">
                500+ Geometry
                <br />
                Concepts
              </span>
            </div>
          </div>
        </div>
        </AutoShow>
        {/* Product Contain */}
        <ProductShowcase />
        {/* { Gallery Section } */}
        <Image />
        {/* <TestimonialCarousel/> */}
        <TeamSection />
       <div className="w-full max-w-7xl mx-auto p-4 md:p-6 autoshow">
      <div className="relative bg-gradient-to-r from-green-600 via-green-400 to-yellow-500 rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl">
        {/* Background geometric shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-4 right-8 md:top-8 md:right-16 w-16 h-16 md:w-32 md:h-32 border-4 border-yellow-400 rotate-45 opacity-30"></div>
          <div className="absolute bottom-4 left-8 md:bottom-8 md:left-16 w-12 h-12 md:w-24 md:h-24 border-3 border-orange-400 rotate-12 opacity-40"></div>
          <div className="absolute top-1/2 left-1/4 w-8 h-8 md:w-16 md:h-16 bg-red-400 rounded-full opacity-20"></div>
        </div>
        
        <div className="relative flex flex-col md:flex-row items-center justify-between p-6 md:p-12 lg:p-16">
          {/* Left content */}
          <div className="flex-1 text-white mb-6 md:mb-0 md:pr-8 text-center md:text-left">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-6 leading-tight">
              Curious how GeoMagic works?
            </h1>
            <p className="text-sm md:text-lg lg:text-xl mb-6 md:mb-8 opacity-90 leading-relaxed max-w-md md:max-w-lg">
              See it in action and uncover the clever ways it brings geometry to life.
              <br className="hidden md:block" />
              Discover how fun—and surprising—geometry can be!
            </p>
            <button className="bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-6 py-3 md:px-8 md:py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg text-sm md:text-base">
              <span className="flex items-center justify-center">
                Order Now
              </span>
            </button>
          </div>
          
          {/* Right image section */}
          <div className="flex-1 relative max-w-sm md:max-w-md lg:max-w-lg">
            <div className="relative bg-white bg-opacity-10 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 shadow-xl">
              {/* Geometric overlay elements */}
              <div className="absolute -top-2 -right-2 md:-top-4 md:-right-4 w-16 h-16 md:w-24 md:h-24">
                <div className="w-full h-full border-4 border-yellow-400 rotate-45"></div>
              </div>
              <div className="absolute -bottom-2 -left-2 md:-bottom-4 md:-left-4 w-12 h-12 md:w-16 md:h-16">
                <div className="w-full h-full bg-orange-400 rounded-full opacity-80"></div>
              </div>
              
              <img src={image.contact} alt="contact us" className="rounded-xl"/>
            </div>
          </div>
        </div>
        
        {/* Additional decorative elements */}
        <div className="absolute top-1/4 right-1/4 w-2 h-2 md:w-4 md:h-4 bg-yellow-400 rounded-full opacity-60"></div>
        <div className="absolute bottom-1/3 left-1/3 w-1 h-8 md:w-2 md:h-16 bg-orange-400 rounded-full opacity-50 transform rotate-45"></div>
      </div>
    </div>
      </div>
    </>
  );
}

// export default Home;
