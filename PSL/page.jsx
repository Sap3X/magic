import { useState, useEffect } from "react";
import Testimonials from "./testimonial.jsx";
import Image from "./Circular";
import Prastuti from "./prastuti.jsx"
import Anubhav from "./anubhav.jsx"
import Pradarshan from "./pradarshan.jsx";
import Compo from "./compo.jsx"
import im1 from "./assets/DSC05363.JPG"
import im2 from "./assets/Hero Image.jpg"
import im3 from "./assets/DSC05407.JPG"
import im4 from "./assets/Prastuti Hero Image 2.jpg"
import im5 from "./assets/feedback.png"
import im6 from "./assets/communication.png"
import im7 from "./assets/location.png"
import im8 from "./assets/monitor.png"
import gen from "./assets/generation-z.png"
import stem from "./assets/stem.png"
import policy from "./assets/policy.png"
import ai from "./assets/artificial-intelligence.png"

export default function ResponsivePSLWebsite() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [, setIsVisible] = useState({});
  const [, setIsScrolled] = useState(false);
 

  // Scroll event listener effect
  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 50);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting,
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll("[id]").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const heroImages = [
    im1,
    im2,
    im3,
    im4
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-amber-50">
      {/* Hero Section */}
      <section
        id="home"
        className="relative flex items-center min-h-[60vh] sm:min-h-[80vh] md:min-h-screen overflow-hidden"
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroImages[currentSlide]}
            className="w-full h-full object-cover opacity-75 transition-all duration-500"
            alt="PSL Hero"
            style={{ minHeight: "300px" }} // fallback for very small screens
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full max-w-2xl mx-auto px-4 sm:px-6 py-12 sm:py-20 text-center">
          <h1 className="text-2xl xs:text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white">
            Transform Your
            <br />
            <span className="text-[#46cbff]">STEM Education</span>
          </h1>
          <p className="mt-4 text-sm xs:text-base sm:text-xl md:text-2xl font-normal leading-relaxed max-w-lg mx-auto text-white">
            The Portable STEM Lab (PSL) transforms any classroom into an
            intuitive STEM learning space with minimal infrastructure.
          </p>
          <div className="flex flex-col xs:flex-row gap-4 sm:gap-6 pt-6 justify-center items-center">
            <button
              className="w-full max-w-xs xs:w-auto xs:max-w-none px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 text-sm sm:text-base md:text-lg font-semibold rounded-lg bg-[#103f91] text-white hover:bg-[#46cbff] transition-all duration-300 shadow-lg"
              onClick={() => {
                document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Discover PSL
            </button>
            <button
              className="w-full max-w-xs xs:w-auto xs:max-w-none px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 text-sm sm:text-base md:text-lg font-semibold rounded-lg border-2 border-white text-white hover:bg-white hover:text-[#103f91] transition-all duration-300"
              onClick={() => {
                document.querySelector('section.bg-gray-100')?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gray-100">
        <div className="container mx-auto px-2 sm:px-4">
          <div className="max-w-6xl mx-auto px-0 sm:px-4 lg:px-8">
            <div className="relative bg-gray-800 rounded-lg overflow-hidden shadow-lg">
              <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                <video
                  className="absolute top-0 left-0 w-full h-full object-cover"
                  controls
                  poster="https://via.placeholder.com/800x450/333/fff?text=Video+Thumbnail"
                >
                  <source src="your-video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 sm:py-20 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-center">
            <div>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-[#103f91] mb-4 sm:mb-8">
                What is PSL?
              </h2>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-8">
                The Portable STEM Lab (PSL) is a compact, self-sufficient lab
                that transforms any classroom into an intuitive STEM learning
                space with minimal infrastructure or trained instructors. It has
                the unique ability to convert any classroom into a hands-on STEM
                lab instantly.
              </p>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-8">
                PSL bridges the resource gap, providing accessible, quality STEM
                education to every student.
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#103f91]/20 to-[#46cbff]/20 rounded-3xl transform rotate-3"></div>
              <img
                src={heroImages[1]}
                className="relative w-full h-56 sm:h-80 md:h-96 object-cover rounded-3xl shadow-lg"
                alt="PSL Demo"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3 Function */}
      <Compo/>

      {/* Why Now Section */}
      <section className="py-10 sm:py-20 bg-gradient-to-br from-[#103f91] to-[#46cbff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-8">
              Why PSL?
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
            {[
              {
                img:gen,
                text: "Gen Z Digital Readiness",
              },
              {
                img:stem,
                text: "STEM in Remote Schools",
              },
              {
                img:policy,
                text: "NEP Focus Experiential Learning",
              },
              {
                img:ai,
                text: "Grassroots STEM & AI Education",
              },
            ].map((reason, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:bg-white/20 transition-all duration-300 group-hover:transform group-hover:scale-105 w-full h-48 sm:h-52 md:h-56 flex flex-col items-center justify-center">
                  <img
                    src={reason.img}
                    className="w-18 h-18 sm:w-20 sm:h-20 md:w-24 md:h-24 mx-auto mb-3 sm:mb-4  rounded-lg sm:rounded-xl bg-white/75"
                    alt={reason.text}
                  />
                  <p className="text-sm sm:text-base md:text-lg font-medium text-white text-center px-2">
                    {reason.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-10 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-[#103f91]">
              Our Products
            </h2>
          </div>
          <section>
            <Prastuti/>
          </section>
          <section>
            <Anubhav/>
          </section>
          <Pradarshan/>
        </div>
      </section>

      {/* Visit Us Today Section */}
      <section className="py-10 sm:py-20 bg-gradient-to-b from-slate-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-[#103f91]">
              Visit Us Today
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                img: im5,
                title: "250+ Activities",
                subtitle: "Hands-on Learning",
              },
              {
                img: im6,
                title: "Leaderboard",
                subtitle: "Engaging Competition",
              },
              {
                img: im7,
                title: "No Infrastructure",
                subtitle: "Instant Setup",
              },
              {
                img:im8 ,
                title: "Video Tutorials With AI",
                subtitle: "Free Support",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <img
                  src={item.img}
                  className="w-24 h-24 mx-auto mb-4 object-cover group-hover:scale-110 transition-transform duration-300"
                  alt={item.title}
                />
                <h3 className="text-xl font-bold text-[#103f91] mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600}">{item.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Glimpse Section */}
      <section className="py-10 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-[#103f91] mb-6 sm:mb-12">
            GLIMPSE OF PSL
          </h2>
          <div className="relative">
            <img
              src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/HDPIFvXrWe/fg0hxg2r_expires_30_days.png"
              className="w-full max-w-2xl sm:max-w-4xl mx-auto rounded-3xl object-cover shadow-2xl  transition-transform duration-500"
              alt="PSL Glimpse"
            />
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section
        id="gallery"
        className="pb-10 sm:pb-20 bg-gradient-to-b from-slate-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-center text-[#103f91] ">
            Gallery
          </h2>
        </div>
        <Image />
      </section>
      <Testimonials/>

      {/* Call to Action Section */}
      <section
        id="contact"
        className="py-10 sm:py-20 bg-gradient-to-br from-[#103f91] to-[#46cbff]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-12 items-center">
            <div className="text-white space-y-6 sm:space-y-8">
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold leading-tight">
                Ready to Transform Your Classroom?
              </h2>
              <p className="text-base sm:text-xl font-light leading-relaxed">
                Transform the way STEM, AI, and Robotics are taught. Contact us
                to bring PSL to your school today!
              </p>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                <button className="w-full max-w-xs sm:w-auto sm:max-w-none px-4 sm:px-8 py-2 sm:py-4 text-sm sm:text-lg font-semibold rounded-lg bg-white text-[#103f91] hover:bg-amber-100 hover:scale-105 transition-all duration-300 shadow-lg">
                  Order Now
                </button>
                <button className="w-full max-w-xs sm:w-auto sm:max-w-none px-4 sm:px-8 py-2 sm:py-4 text-sm sm:text-lg font-semibold rounded-lg border-2 border-white text-white hover:bg-white hover:text-[#103f91] transition-all duration-300">
                  Contact Us
                </button>
              </div>
            </div>
            <div className="text-center">
              <div className="relative">
                <div className="absolute inset-0 bg-white/20 rounded-3xl transform rotate-3"></div>
                <img
                  src={heroImages[0]}
                  className="relative w-full max-w-xs sm:max-w-md mx-auto rounded-3xl object-cover shadow-2xl hover:scale-105 transition-transform duration-500"
                  alt="Contact PSL"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
