import React from "react";
import img1 from "../assets/2.webp";
import img2 from "../assets/27cddea8-81b9-46b4-9521-03bd1334001f.webp";
import img3 from "../assets/DSC05363.webp";
import img4 from "../assets/DSC05402.webp";
import img5 from "../assets/Prastuti Hero Image.webp";
import img6 from "../assets/Prastuti Hero Image 2.webp";
import img7 from "../assets/Untitled-4.webp";
import img8 from "../assets/WhatsApp Image 2025-04-23 at 6.20.30 PM.webp";

const Gallery = () => {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8];
  const duplicatedImages = [...images, ...images];

  return (
    <div className="w-full py-12 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Our Products Gallery
        </h2>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex gap-6 animate-scroll"
              style={{
                width: `${duplicatedImages.length * 320}px`,
              }}
            >
              {duplicatedImages.map((image, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-80 h-64 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <img
                    src={image}
                    alt={`Gallery image ${(index % images.length) + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(
              -${images.length * 320 + images.length * 24}px
            );
          }
        }

        .animate-scroll {
          animation: scroll 40s linear infinite;
          will-change: transform;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default Gallery;
