import React from "react";
import Star from "../asset/star-3.png";
import Circle1 from "../asset/ellipse-4.png";
import Circle2 from "../asset/ellipse-6.png";
import Poly from "../asset/polygon-5.png";
import Yellow_Bg from "../asset/9833793-27047-picsart-backgroundremover-1.png";

// Sample product data
const products = [
  {
    id: 1,
    name: "GeoMagic Pro Kit",
    subtitle: "(Instructor Edition)",
    description:
      "Your comprehensive guide to advanced geometry. Explore complex geometric concepts through professional-grade tools and detailed tutorials. Perfect for educators and advanced learners.",
    image:
      "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=500&h=400&fit=crop",
    specs: [
      [
        "Professional Strips - 15",
        "Digital Protractor - 5",
        "Premium Nuts & Bolts - 25 Sets",
      ],
      ["Instructor Manual - 1", "Advanced Spacers - 20", "Teaching Guide - 1"],
    ],
    gradient: "from-purple-400 via-pink-500 to-red-500",
  },
  {
    id: 2,
    name: "GeoMagic Circle",
    subtitle: "Edition",
    description:
      "Master the art of circular geometry with precision tools designed for exploring curves, arcs, and rotational concepts. Unlock the secrets of perfect circles.",
    image:
      "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=500&h=400&fit=crop",
    specs: [
      ["Circle Strips - 12", "Angle Protractor - 8", "Pivot Bolts - 20 Sets"],
      ["Circle Manual - 1", "Radius Spacers - 15", "Compass Tool - 3"],
    ],
    gradient: "from-blue-400 via-cyan-500 to-teal-500",
  },
  {
    id: 3,
    name: "GeoMagic Basic",
    subtitle: "Edition",
    description:
      "Perfect starting point for geometry exploration. Learn fundamental concepts through interactive activities and step-by-step guidance. Ideal for beginners.",
    image:
      "https://images.unsplash.com/photo-1596495577886-d920f1fb7238?w=500&h=400&fit=crop",
    specs: [
      [
        "Basic Strips - 8",
        "Standard Protractor - 5",
        "Starter Nuts & Bolts - 10 Sets",
      ],
      ["Beginner Manual - 1", "Basic Spacers - 8", "Quick Guide - 1"],
    ],
    gradient: "from-green-400 via-emerald-500 to-cyan-500",
  },
  {
    id: 4,
    name: "GeoMagic Mini",
    subtitle: "(Student Edition)",
    description:
      "Compact geometry kit designed for students. Portable and practical tools that make learning geometry fun and accessible anywhere you go.",
    image:
      "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=500&h=400&fit=crop",
    specs: [
      ["Mini Strips - 6", "Pocket Protractor - 3", "Mini Bolts - 8 Sets"],
      ["Student Guide - 1", "Compact Spacers - 6", "Sticker Set - 1"],
    ],
    gradient: "from-yellow-400 via-orange-500 to-red-500",
  },
  {
    id: 5,
    name: "GeoMagic Advanced",
    subtitle: "Pro Series",
    description:
      "Professional-grade geometry toolkit for advanced mathematical exploration. Features precision instruments and comprehensive learning materials.",
    image:
      "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=500&h=400&fit=crop",
    specs: [
      [
        "Precision Strips - 20",
        "Digital Protractor - 10",
        "Pro Bolts - 30 Sets",
      ],
      ["Advanced Manual - 2", "Precision Spacers - 25", "Formula Cards - 1"],
    ],
    gradient: "from-indigo-400 via-purple-500 to-pink-500",
  },
  {
    id: 6,
    name: "GeoMagic Deluxe",
    subtitle: "Complete Set",
    description:
      "The ultimate geometry learning experience. Everything you need to master geometric principles from basic shapes to complex theorems and proofs.",
    image:
      "https://images.unsplash.com/photo-1607706189992-eae578626c86?w=500&h=400&fit=crop",
    specs: [
      ["Deluxe Strips - 25", "Multi-Protractor - 12", "Deluxe Bolts - 40 Sets"],
      ["Complete Manual - 3", "Variable Spacers - 30", "Workbook - 2"],
    ],
    gradient: "from-rose-400 via-red-500 to-orange-500",
  },
];

// Decorative shapes with placeholder images (you can replace with actual imports)
const decorativeShapes = [
  {
    type: "star",
    image: Star,
    size: "w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24",
  },
  {
    type: "circle",
    image: Circle1,
    size: "w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20",
  },
  {
    type: "triangle",
    image: Poly,
    size: "w-14 h-14 sm:w-18 sm:h-18 lg:w-22 lg:h-22",
  },
  {
    type: "circle2",
    image: Circle2,
    size: "w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20",
  },
];

// Fixed positions for shapes for each product
const productShapePositions = [
  // Product 1 (image left) - shapes around content and image
  [
    {
      shapeIndex: 0,
      position: "top-4 right-4 sm:top-8 sm:right-8 lg:top-12 lg:right-12",
      rotation: "15deg",
    },
    {
      shapeIndex: 1,
      position: "bottom-6 left-4 sm:bottom-8 sm:left-6 lg:bottom-12 lg:left-8",
      rotation: "0deg",
    },
    {
      shapeIndex: 2,
      position: "top-1/3 right-1/4 sm:top-1/2 sm:right-1/3 lg:right-1/2",
      rotation: "-20deg",
    },
    {
      shapeIndex: 3,
      position: "bottom-1/4 right-8 sm:right-12 lg:right-16",
      rotation: "45deg",
    },
  ],
  // Product 2 (image right) - shapes around content and image
  [
    {
      shapeIndex: 0,
      position: "top-4 left-4 sm:top-8 sm:left-8 lg:top-12 lg:left-12",
      rotation: "-15deg",
    },
    {
      shapeIndex: 1,
      position:
        "bottom-6 right-4 sm:bottom-8 sm:right-6 lg:bottom-12 lg:right-8",
      rotation: "30deg",
    },
    {
      shapeIndex: 2,
      position: "top-1/3 left-1/4 sm:left-1/3 lg:left-1/4",
      rotation: "20deg",
    },
    {
      shapeIndex: 3,
      position: "bottom-1/4 left-8 sm:left-12 lg:left-16",
      rotation: "-45deg",
    },
  ],
  // Product 3 (image left) - different arrangement
  [
    {
      shapeIndex: 1,
      position: "top-6 right-6 sm:top-10 sm:right-10 lg:top-14 lg:right-14",
      rotation: "25deg",
    },
    {
      shapeIndex: 3,
      position: "bottom-4 left-6 sm:bottom-6 sm:left-8 lg:bottom-8 lg:left-10",
      rotation: "0deg",
    },
    {
      shapeIndex: 0,
      position: "top-1/2 right-1/3 sm:right-2/5 lg:right-1/3",
      rotation: "-30deg",
    },
    {
      shapeIndex: 2,
      position: "bottom-1/3 right-4 sm:right-8 lg:right-12",
      rotation: "60deg",
    },
  ],
  // Product 4 (image right) - different arrangement
  [
    {
      shapeIndex: 2,
      position: "top-6 left-6 sm:top-10 sm:left-10 lg:top-14 lg:left-14",
      rotation: "-25deg",
    },
    {
      shapeIndex: 0,
      position:
        "bottom-4 right-6 sm:bottom-6 sm:right-8 lg:bottom-8 lg:right-10",
      rotation: "15deg",
    },
    {
      shapeIndex: 1,
      position: "top-1/2 left-1/3 sm:left-2/5 lg:left-1/3",
      rotation: "30deg",
    },
    {
      shapeIndex: 3,
      position: "bottom-1/3 left-4 sm:left-8 lg:left-12",
      rotation: "-60deg",
    },
  ],
  // Product 5 (image left) - another variation
  [
    {
      shapeIndex: 3,
      position: "top-8 right-8 sm:top-12 sm:right-12 lg:top-16 lg:right-16",
      rotation: "10deg",
    },
    {
      shapeIndex: 2,
      position:
        "bottom-8 left-8 sm:bottom-10 sm:left-10 lg:bottom-12 lg:left-12",
      rotation: "-45deg",
    },
    {
      shapeIndex: 0,
      position: "top-2/5 right-1/4 sm:right-1/3 lg:right-1/4",
      rotation: "35deg",
    },
    {
      shapeIndex: 1,
      position: "bottom-1/5 right-12 sm:right-16 lg:right-20",
      rotation: "0deg",
    },
  ],
  // Product 6 (image right) - final variation
  [
    {
      shapeIndex: 1,
      position: "top-8 left-8 sm:top-12 sm:left-12 lg:top-16 lg:left-16",
      rotation: "-10deg",
    },
    {
      shapeIndex: 0,
      position:
        "bottom-8 right-8 sm:bottom-10 sm:right-10 lg:bottom-12 lg:right-12",
      rotation: "45deg",
    },
    {
      shapeIndex: 3,
      position: "top-2/5 left-1/4 sm:left-1/3 lg:left-1/4",
      rotation: "-35deg",
    },
    {
      shapeIndex: 2,
      position: "bottom-1/5 left-12 sm:left-16 lg:left-20",
      rotation: "25deg",
    },
  ],
];

function ProductCard({ product, index }) {
  const isEven = index % 2 === 0;
  const shapePositions = productShapePositions[index] || [];

  return (
    <div className="relative w-full bg-[#d9d9d9] rounded-3xl lg:rounded-[59px] shadow-lg overflow-hidden h-auto">
      {/* Decorative shapes with fixed positions */}
      {shapePositions.map((shapeConfig, idx) => {
        const shape = decorativeShapes[shapeConfig.shapeIndex];
        return (
          <img
            key={idx}
            className={`absolute ${shapeConfig.position} ${shape.size} hidden sm:block object-contain z-10`}
            style={{
              transform: `rotate(${shapeConfig.rotation})`,
            }}
            src={shape.image}
            alt={`Decorative ${shape.type}`}
          />
        );
      })}

      {/* Main content area */}
      <div
        className={`relative h-full flex flex-col lg:flex-row ${
          !isEven ? "lg:flex-row-reverse" : ""
        }`}
      >
        {/* Product image side */}
        <div className="flex-1 relative p-4 sm:p-6 lg:p-8 xl:p-12">
          {/* Background gradient for product */}
          <div
            className={`absolute inset-4 sm:inset-6 lg:inset-8 xl:inset-12 bg-gradient-to-r ${product.gradient} rounded-2xl xl:rounded-[30px] opacity-90 z-20`}
          />

          {/* Product image */}
          <div className="relative z-30 h-full flex items-center justify-center">
            <img
              className="w-full h-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg object-contain rounded-lg shadow-lg"
              alt={product.name}
              src={product.image}
            />
          </div>
        </div>

        {/* Content side */}
        <div className="flex-1 relative p-4 sm:p-6 lg:p-8 xl:p-12 flex flex-col justify-center z-30">
          {/* Product title with improved yellow background */}
          <div className="mb-6 lg:mb-8 xl:mb-12 relative flex flex-col justify-center items-center">
            {/* Yellow background image as a banner - improved positioning and sizing */}
            <img
              src={Yellow_Bg}
              alt="background banner"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[280px] md:max-w-[325px] lg:max-w-[800px] xl:max-w-[900px] h-auto min-h-[80px] sm:min-h-[100px] md:min-h-[120px] lg:min-h-[140px] xl:min-h-[160px] object-cover z-[-1]"
            />
            <div className="relative z-10  px-4 sm:px-6 md:px-8 lg:px-12">
              <h2 className="text-black text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-center font-['Nunito_Sans'] leading-tight ">
                {product.name}
              </h2>
              <h3 className="text-black text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold text-center font-['Nunito_Sans'] opacity-80 leading-tight">
                {product.subtitle}
              </h3>
            </div>
          </div>

          {/* Main description */}
          <div className="mb-6 lg:mb-8 xl:mb-12">
            <p className="text-black text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-medium leading-relaxed text-center lg:text-left xl:text-justify font-['Nunito_Sans'] max-w-2xl lg:max-w-none opacity-90">
              {product.description}
            </p>
          </div>

          {/* Product specifications */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:gap-8 xl:gap-12">
            <div className="space-y-1 sm:space-y-2">
              {product.specs[0].map((spec, idx) => (
                <p
                  key={idx}
                  className="text-black text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-semibold leading-relaxed text-center sm:text-left font-['Nunito_Sans']"
                >
                  {spec}
                </p>
              ))}
            </div>

            <div className="space-y-1 sm:space-y-2">
              {product.specs[1].map((spec, idx) => (
                <p
                  key={idx}
                  className="text-black text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-semibold leading-relaxed text-center sm:text-left font-['Nunito_Sans']"
                >
                  {spec}
                </p>
              ))}
            </div>
          </div>
        </div> 
      </div>
    </div>
  );
}

export default function ProductShowcase() {
  return (
    <div className="bg-transparent flex justify-center w-full p-2 sm:p-4 lg:p-6">
      <div className="w-full max-w-7xl space-y-8 lg:space-y-12">
        {/* Display all products vertically */}
        {products.map((product, index) => (
          <ProductCard key={product.id} product={product} index={index} />
        ))}
      </div>
    </div>
  );
}
