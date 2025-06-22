import React from "react";
import ProductShowcase from "./components/Comp";
import Bg from "./asset/hero_section.webp";
import ImageCarousel from "./components/Images";
import Image from "./components/Circular";
import Logo from "./asset/Geomagic-Logo.png";
import TeamSection from "./components/Testimonial";
import image from "./Images";

export default function Magic() {
  return (
    <>
      <div className="min-h-screen">
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
        <div className="flex flex-col items-center justify-center my-12 px-4 md:px-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6 text-black">
            Watch GeoMagic in Action
          </h2>
          <div className="w-full max-w-3xl aspect-video rounded-2xl overflow-hidden shadow-lg bg-black">
            <video
              src="/videos/haha.mp4"
              controls loop 
              className="w-full h-full object-cover"
              // poster="/videos/geomagic-poster.jpg"
            >
              Sorry, your browser doesn't support embedded videos.
            </video>
          </div>
        </div>
        {/* The section below is the "Why Geomagic?" section */}
        <div className="flex flex-col items-center mb-16 px-4 md:px-8 lg:px-16 pt-6">
          {/* Main heading */}
          <h1 className="text-black text-3xl md:text-4xl lg:text-6xl font-bold text-center max-w-md md:max-w-lg lg:max-w-xl mb-4 lg:mb-6">
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
              <img
                src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Nyc055gPs1/1b7g2yvi_expires_30_days.png"
                alt="Experiential Hands On"
                className="w-20 h-20 md:w-32 md:h-32 lg:w-36 lg:h-36 object-cover"
              />
              <span className="text-black text-sm md:text-lg lg:text-xl font-medium leading-tight">
                Experiential
                <br />
                Hands On
              </span>
              <span></span>
            </div>
            <div className="flex justify-center flex-col items-center">
              <img
                src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Nyc055gPs1/pxoes96x_expires_30_days.png"
                alt="Fun & Engaging"
                className="w-20 h-20 md:w-32 md:h-32 lg:w-36 lg:h-36 object-cover"
              />
              <span className="text-black text-sm md:text-lg lg:text-xl font-medium leading-tight">
                Fun &<br />
                Engaging
              </span>
            </div>
            <div className="flex justify-center flex-col items-center">
              <img
                src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Nyc055gPs1/wt52qs7t_expires_30_days.png"
                alt="Self Directed Learning"
                className="w-20 h-20 md:w-32 md:h-32 lg:w-36 lg:h-36 object-cover"
              />
              <span className="text-black text-sm md:text-lg lg:text-xl font-medium leading-tight">
                Self Directed
                <br />
                Learning
              </span>
            </div>
            <div className="flex justify-center flex-col items-center">
              <img
                src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Nyc055gPs1/wqbx092j_expires_30_days.png"
                alt="Curriculum Integrated"
                className="w-20 h-20 md:w-32 md:h-32 lg:w-36 lg:h-36 object-cover"
              />
              <span className="text-black text-sm md:text-lg lg:text-xl font-medium leading-tight">
                Curriculum
                <br />
                Integrated
              </span>
            </div>
            <div className="flex items-center flex-col col-span-2 md:col-span-1">
              <div className="w-20 h-20 md:w-32 md:h-32 lg:w-36 lg:h-36 rounded-full bg-slate-200" style={{
                boxShadow: "0px 3px 5px grey",
              }}>
                <img src={image.icon_5} className="p-2" alt="500+ icon"/>
              </div>
              {/* <img
                src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Nyc055gPs1/egne4ix8_expires_30_days.png"
                alt="500+ Geometry Concepts"
                className="w-20 h-20 md:w-32 md:h-32 lg:w-36 lg:h-36 object-cover"
              /> */}
              <span className="text-black text-sm md:text-lg lg:text-xl font-medium leading-tight">
                500+ Geometry
                <br />
                Concepts
              </span>
            </div>
          </div>
        </div>
        {/* Product Contain */}
        <ProductShowcase />
        {/* <div className="relative text-center mt-10"> */}
        {/* Bulb gradient overlay */}
        {/* <div
    className="absolute left-1/2 top-0 -translate-x-1/2 z-0 pointer-events-none"
    style={{
      width: "100vw",
      height: "100vh",
      background: "radial-gradient(ellipse at center top, #fde047 0%, #22c55e 40%, transparent 60%)",
      opacity: 0.7,
      // filter: "blur(8px)",
    }}
  /> */}
        {/* <span className="relative z-10  md:text-3xl">Sweet Moments</span> */}

        {/* </div> */}
        <Image />
        {/* <TestimonialCarousel/> */}
        <TeamSection />
      </div>
    </>
  );
}

// export default Home;
