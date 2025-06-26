import React from 'react';
import img1 from '../assest/image9.webp';
import img2 from '../assest/image2.webp';
import img3 from '../assest/image11.webp';
import img4 from '../assest/image4.webp';
import img5 from '../assest/image5.webp';
import img6 from '../assest/image6.webp';
import img7 from '../assest/image3.webp';
import img8 from '../assest/image8.webp';

const InfiniteGallery = () => {
  const galleryItems = [
    { 
      id: 1, 
      title: "Mountain Vista", 
      color: "bg-gradient-to-br from-blue-400 to-purple-600",
      image: img1
    },
    { 
      id: 2, 
      title: "Ocean Waves", 
      color: "bg-gradient-to-br from-cyan-400 to-blue-600",
      image: img2
    },
    { 
      id: 3, 
      title: "Forest Path", 
      color: "bg-gradient-to-br from-green-400 to-emerald-600",
      image: img3
    },
    { 
      id: 4, 
      title: "Desert Sunset", 
      color: "bg-gradient-to-br from-orange-400 to-red-600",
      image: img4
    },
    { 
      id: 5, 
      title: "City Lights", 
      color: "bg-gradient-to-br from-purple-400 to-pink-600",
      image: img5
    },
    { 
      id: 6, 
      title: "Aurora Sky", 
      color: "bg-gradient-to-br from-indigo-400 to-cyan-600",
      image: img6
    },
    { 
      id: 7, 
      title: "Golden Fields", 
      color: "bg-gradient-to-br from-yellow-400 to-orange-600",
      image: img7
    },
    { 
      id: 8, 
      title: "Misty Lake", 
      color: "bg-gradient-to-br from-teal-400 to-blue-600",
      image: img8
    }
  ];

  return (
    <div className="w-full overflow-hidden bg-white py-12">
      <div className="mb-8 text-center">
        <h2 className="text-4xl font-bold text-red-700 mb-2">Shiksha Gallery</h2>
      </div>

      <div className="relative">
        <div className="w-full overflow-hidden">
          <div className="flex w-max py-4 animate-infinite-scroll">
            {[...galleryItems, ...galleryItems].map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                className={`flex-shrink-0 w-80 h-64 mx-4 rounded-2xl overflow-hidden
                shadow-2xl transform hover:scale-105 transition-transform duration-300
                relative group cursor-pointer`}
              >
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:from-black/40 transition-all duration-300"></div>
                <div className="absolute top-4 right-4 w-8 h-8 border-2 border-white border-opacity-50 rounded-full backdrop-blur-sm bg-white/10"></div>
                <div className="absolute bottom-4 left-4 w-4 h-4 bg-white bg-opacity-30 rounded-full"></div>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-slate-200 to-transparent hidden sm:block pointer-events-none z-10"></div>
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-slate-200 to-transparent hidden sm:block pointer-events-none z-10"></div>
      </div>

      {/* Custom animation */}
      <style jsx>{`
        @keyframes infinite-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-infinite-scroll {
          animation: infinite-scroll 40s linear infinite;
        }

        .animate-infinite-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default InfiniteGallery;