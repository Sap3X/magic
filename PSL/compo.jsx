import { useState } from "react";
import { Monitor, BookOpen, Star } from "lucide-react";
import im1 from "./assets/Prastuti Hero Image 2.jpg"
import im2 from "./assets/anu.jpg"
import im3 from "./assets/pradarshan.jpg"

const components = [
  {
    title: "Prastuti",
    subtitle: "Teacher's Toolkit",
    image: im1,
    description:
      "Chapter-wise teacher kits with interactive models, experiments, and video tutorials for easy science and math demonstrations for classes 8, 9 & 10.",
    bg: "from-blue-100 to-blue-300",
    ring: "ring-blue-400",
    button: "bg-gradient-to-r from-blue-800 to-blue-600",
    icon: <Monitor className="w-4 h-4 mr-2" />,
  },
  {
    title: "Anubhav",
    subtitle: "Student Experience",
    image: im2,
    description:
      "Student kits with age-appropriate activities and guided videos for learning STEM, AI, and robotics.",
    bg: "from-orange-100 to-orange-300",
    ring: "ring-orange-300",
    button: "bg-gradient-to-r from-orange-700 to-orange-500",
    icon: <BookOpen className="w-4 h-4 mr-2" />,
  },
  {
    title: "Pradarshan",
    subtitle: "Innovation Showcase",
    image: im3,
    description:
      "A display and exhibition module for showcasing student innovations and fostering creativity.",
    bg: "from-yellow-100 to-yellow-300",
    ring: "ring-yellow-300",
    button: "bg-gradient-to-r from-yellow-500 to-yellow-600 text-black",
    icon: <Star className="w-4 h-4 mr-2" />,
  },
];

export default function ImprovedCompo() {
  const [hoveredImage, setHoveredImage] = useState(null);
  const isDesktop = typeof window !== "undefined" && window.innerWidth >= 1024;

  return (
    <section>
      <div className="my-10 sm:my-20">
        <div className="bg-blue-800 text-white rounded-2xl p-4 sm:p-6 text-center font-bold text-2xl sm:text-3xl mb-6 w-full max-w-2xl mx-auto shadow-xl">
          3 Main Components of Portable STEM Lab
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center p-4 sm:p-8 gap-8 rounded-2xl">
          {components.map((component, index) => {
            const showPopover = hoveredImage === index;

            return (
              <div
                key={index}
                className={`relative group cursor-pointer transition-transform duration-300 hover:scale-105 flex flex-col items-center bg-gradient-to-br ${component.bg} rounded-2xl p-5 shadow-lg ring-2 ${component.ring}`}
                onMouseEnter={() => isDesktop && setHoveredImage(index)}
                onMouseLeave={() => isDesktop && setHoveredImage(null)}
                onClick={() => !isDesktop && setHoveredImage(hoveredImage === index ? null : index)}
              >
                <div className="relative overflow-hidden rounded-xl shadow-xl border border-white/30">
                  <img
                    src={component.image}
                    alt={component.title}
                    className={`w-40 sm:w-56 h-48 sm:h-72 object-cover transition duration-700 ease-in-out rounded-xl ${
                      hoveredImage === index
                        ? "scale-110 brightness-110 shadow-2xl"
                        : hoveredImage !== null
                        ? "opacity-60 scale-98"
                        : "opacity-100 scale-100"
                    }`}
                  />
                  <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-gradient-to-r from-[#2563eb] to-[#60a5fa] shadow-lg animate-ping" />
                </div>

                {showPopover && (
                  <div className="mt-4 w-full transition-all duration-500 ease-in-out transform animate-slide-in-from-bottom bg-white/90 rounded-xl shadow-inner p-4 text-center backdrop-blur-md border border-white/30">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {component.title}
                      <span className="inline-block w-2 h-2 ml-2 rounded-full bg-[#2563eb] animate-pulse"></span>
                    </h3>
                    {component.subtitle && (
                      <p className="text-xs text-gray-600 italic mb-2">{component.subtitle}</p>
                    )}
                    <p className="text-sm text-gray-800 leading-relaxed font-medium">
                      {component.description}
                    </p>
                  </div>
                )}

                <button
                  className={`lg:hidden mt-3 px-4 py-2 text-xs font-semibold rounded-lg flex items-center justify-center transition ${
                    component.button
                  } text-white hover:opacity-90`}
                  type="button"
                >
                  {component.icon}
                  {showPopover ? "Hide Info" : "Show Info"}
                </button>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-6 text-blue-700 text-xs sm:text-sm">
          <span className="inline-flex items-center gap-1 bg-white/70 px-3 py-1 rounded-full shadow">
            <svg className="w-4 h-4 text-blue-400 animate-bounce" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
            Hover or tap each component to learn more
          </span>
        </div>
      </div>
    </section>
  );
}

// Tailwind animation class (add this to global styles if using Tailwind CSS)
// @keyframes slide-in-from-bottom {
//   0% {
//     opacity: 0;
//     transform: translateY(20px);
//   }
//   100% {
//     opacity: 1;
//     transform: translateY(0);
//   }
// }
// .animate-slide-in-from-bottom {
//   animation: slide-in-from-bottom 0.5s ease-out forwards;
// }
