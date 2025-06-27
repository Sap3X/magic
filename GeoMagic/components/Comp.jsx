import React from "react";
import image from "../Images";

// Sample product data
const products = [
  {
    id: 1,
    name: "GeoMagic Pro Kit",
    subtitle: "(Instructor Edition)",
    description:
      "This dynamic tool is designed for instructors and teachers, equipping them with the resources they need to deliver engaging geometry lessons to their students. GeoMagic Pro facilitates effective teaching and ensures that educators have the right tools to make geometry an exciting learning experience.",
    image: image.pro_kit,
    specs: [[""], [""]],
    gradient: "from-purple-400 via-pink-500 to-red-500",
  },
  {
    id: 2,
    name: "GeoMagic Circle",
    subtitle: "Edition",
    description:
      "Empower your students to dive into circular geometry with our hands-on kit and engaging tutorials. Foster a deep understanding of circular concepts and inspire learning. Let's embark on this educational adventure together.",
    image: image.circle,
    specs: [
      [
        "Primary Circle - 1",
        "Secondary Large Circle - 1",
        "Secondary Small Circle - 1",
        "Primary Strip - 7",
        "Small Primary Strip - 4",
        "Secondary Strip - 5",
      ],
      [
        "Protractor - 10",
        "External Point Piece - 4",
        "Nuts & Bolts - 15 Sets",
        "Instruction Manual - 1",
        "Spacers - 10",
      ],
    ],
    gradient: "from-blue-400 via-cyan-500 to-teal-500",
  },
  {
    id: 3,
    name: "GeoMagic Basic",
    subtitle: "Edition",
    description:
      "Your Guide to Line Geometry. Explore the world of lines through hands-on activities and engaging tutorials. Master the essentials of geometry today.",
    image: image.basic,
    specs: [
      ["Strips - 10", "Protractor - 10", "Nuts & Bolts - 15 Sets"],
      ["Instruction Manual - 1", "Spacers - 10"],
    ],
    gradient: "from-green-400 via-emerald-500 to-cyan-500",
  },
  {
    id: 4,
    name: "GeoMagic Mini",
    subtitle: "(Student Edition)",
    description:
      "The Ultimate Geometry Experience for Students! GeoMagic Mini is an engaging kit that brings geometry to life with hands-on activities and critical thinking challenges. Unleash the magic of geometry with us.",
    image: image.mini,
    specs: [[""], [""]],
    gradient: "from-yellow-400 via-orange-500 to-red-500",
  },
  {
    id: 5,
    name: "GeoMagic Circle",
    subtitle: "Edition Mini",
    description:
      "Explore circular geometry like never before with GeoMagic Mini! Our hands-on kit and captivating tutorials are your ticket to mastering circular concepts. Prepare to set sail on an exciting educational journey that will ignite your passion for learning.",
    image: image.circle_mini,
    specs: [
      [
        "Primary Circle - 1",
        "Secondary Large Circle - 1",
        "Secondary Small Circle - 1",
        "Primary Strip - 7",
        "Small Primary Strip - 4",
        "Secondary Strip - 5",
      ],
      [
        "Protractor - 10",
        "External Point Piece - 4",
        "Nuts & Bolts - 15 Sets",
        "Instruction Manual - 1",
        "Spacers - 10",
      ],
    ],
    gradient: "from-indigo-400 via-purple-500 to-pink-500",
  },
  {
    id: 6,
    name: "GeoMagic Basic",
    subtitle: "Edition Mini",
    description:
      "Your Path to Line Geometry Mastery! Delve into the fascinating realm of lines with our interactive activities and engaging tutorials. This is your chance to become a geometry expert. Begin your geometric journey now!",
    image: image.basic_mini,
    specs: [
      ["Strips - 10", "Protractor - 10", "Nuts & Bolts - 15 Sets"],
      ["Instruction Manual - 1", "Spacers - 10"],
    ],
    gradient: "from-rose-400 via-red-500 to-orange-500",
  },
];

// Decorative shapes with placeholder images (you can replace with actual imports)
const decorativeShapes = [
  {
    type: "star",
    image: image.star,
    size: "w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24",
  },
  {
    type: "circle",
    image: image.circle1,
    size: "w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20",
  },
  {
    type: "triangle",
    image: image.poly,
    size: "w-14 h-14 sm:w-18 sm:h-18 lg:w-22 lg:h-22",
  },
  {
    type: "circle2",
    image: image.circle2,
    size: "w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20",
  },
];

// Fixed positions for shapes for each product
const productShapePositions = [
  // Product 1 (image left) - shapes around content and image
  [
    {
      shapeIndex: 0,
      position: "top-4 right-4 ",
      rotation: "15deg",
    },
    {
      shapeIndex: 1,
      position: "bottom-6 left-4 ",
      rotation: "0deg",
    },
    {
      shapeIndex: 2,
      position: "top-1/3 right-1/2 ",
      rotation: "-20deg",
    },
    {
      shapeIndex: 3,
      position: "bottom-[10%] right-8 ",
      rotation: "45deg",
    },
  ],
  // Product 2 (image right) - shapes around content and image
  [
    {
      shapeIndex: 0,
      position: "top-4 left-4 ",
      rotation: "-15deg",
    },
    {
      shapeIndex: 1,
      position: "bottom-6 right-4 ",
      rotation: "30deg",
    },
    {
      shapeIndex: 2,
      position: "top-1/3 left-1/2 ",
      rotation: "20deg",
    },
    {
      shapeIndex: 3,
      position: "bottom-1/4 left-[25%] ",
      rotation: "-45deg",
    },
  ],
  // Product 3 (image left) - different arrangement
  [
    {
      shapeIndex: 0,
      position: "top-6 right-6 ",
      rotation: "25deg",
    },
    {
      shapeIndex: 1,
      position: "bottom-4 left-6 ",
      rotation: "0deg",
    },
    {
      shapeIndex: 2,
      position: "top-1/2 right-1/2 ",
      rotation: "-30deg",
    },
    {
      shapeIndex: 3,
      position: "bottom-36 right-4 ",
      rotation: "60deg",
    },
  ],
  // Product 4 (image right) - different arrangement
  [
    {
      shapeIndex: 0,
      position: "top-6 left-6 ",
      rotation: "-25deg",
    },
    {
      shapeIndex: 1,
      position: "bottom-4 right-6 ",
      rotation: "15deg",
    },
    {
      shapeIndex: 2,
      position: "top-3/4 left-[20%] ",
      rotation: "30deg",
    },
    {
      shapeIndex: 3,
      position: "bottom-1/3 left-1/2 ",
      rotation: "-60deg",
    },
  ],
  // Product 5 (image left) - another variation
  [
    {
      shapeIndex: 0,
      position: "top-8 right-8 ",
      rotation: "10deg",
    },
    {
      //pie
      shapeIndex: 1,
      position: "bottom-8 left-8 ",
      rotation: "-45deg",
    },
    {
      shapeIndex: 2,
      position: "top-3/4 right-1/4 ",
      rotation: "35deg",
    },
    {
      //c-shape
      shapeIndex: 3,
      position: "top-9 right-3/4 ",
      rotation: "0deg",
    },
  ],
  // Product 6 (image right) - final variation
  [
    {
      //pie
      shapeIndex: 1,
      position: "top-8 left-8 ",
      rotation: "-10deg",
    },
    {
      //c-shape
      shapeIndex: 0,
      position: "bottom-1/2 right-8 ",
      rotation: "45deg",
    },
    {
      //triangle
      shapeIndex: 3,
      position: "top-[65%] left-1/2 ",
      rotation: "-35deg",
    },
    {
      //pie
      shapeIndex: 2,
      position: "bottom-10 left-12 ",
      rotation: "25deg",
    },
  ],
];

function ProductCard({ product, index }) {
  const isEven = index % 2 === 0;
  const numbfour = index === 4;
  const numbfive = index === 5;
  const shapePositions = productShapePositions[index] || [];

  return (
    <div className="relative w-full bg-[#d9d9d9] rounded-3xl lg:rounded-[59px] shadow-lg overflow-hidden h-auto">
      {/* Decorative shapes with fixed positions */}
      {shapePositions.map((shapeConfig, idx) => {
        const shape = decorativeShapes[shapeConfig.shapeIndex];
        return (
          <img
            key={idx}
            className={`absolute ${shapeConfig.position} ${shape.size} hidden lg:block object-contain z-10`}
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
        <div className="flex-1 relative px-4 pt-4 sm:px-6 sm:pt-6 lg:p-8 xl:p-12">
          {/* Background gradient for product */}
          <div
            className={`absolute h-2/3 my-auto w-2/3 mx-auto inset-4 sm:inset-6 lg:inset-8 bg-gradient-to-r ${product.gradient} rounded-2xl xl:rounded-[30px] opacity-90 z-20`}
          />

          {/* Product image */}
          <div className="relative z-30 h-full flex items-center justify-center">
            <img
              className={`w-full h-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg object-contain ${
                numbfour ? "rotate-12" : ""
              } ${numbfive ? "rotate-12" : ""}`}
              alt={product.name}
              src={product.image}
            />
          </div>
        </div>

        {/* Content side */}
        <div className="flex-1 relative px-4 pb-4 sm:px-6 sm:pb-6 lg:p-8 xl:p-12 flex flex-col justify-center z-30">
          {/* Product title with improved yellow background */}
          <div className="mt-6 lg:mt-8 xl:mt-10 relative flex flex-col justify-center items-center">
            {/* Yellow background image as a banner - improved positioning and sizing */}
            <img
              src={image.title_bg}
              alt="background banner"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[280px] md:max-w-[325px] lg:max-w-[800px] xl:max-w-[900px] h-auto min-h-[80px] sm:min-h-[100px] md:min-h-[120px] lg:min-h-[140px] xl:min-h-[160px] object-cover z-[-1]"
            />
            <div className="relative z-10  px-4 sm:px-6 md:px-8 lg:px-8">
              <h2 className="text-black text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-center font-mont leading-tight ">
                {product.name}
              </h2>
              <h3 className="text-black text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold text-center font-['Nunito_Sans'] opacity-80 leading-tight">
                {product.subtitle}
              </h3>
            </div>
          </div>

          {/* Main description */}
          <div className="mt-8 mx-auto mb-6 lg:mt-12 xl:mt-16">
            <p className="text-black text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-medium leading-relaxed text-justify lg:text-left xl:text-justify font-nunito lg:max-w-none opacity-90">
              {product.description}
            </p>
          </div>

          {/* Product specifications */}
          <div className="grid grid-cols-2 gap-11  sm:gap-6 lg:gap-8 xl:gap-12">
            <div className="space-y-1 sm:space-y-2">
              {product.specs[0].map((spec, idx) => (
                <p
                  key={idx}
                  className="text-black text-xs sm:text-base md:text-base font-medium leading-relaxed text-left font-['Nunito_Sans']"
                >
                  {spec}
                </p>
              ))}
            </div>

            <div className="space-y-1 sm:space-y-2">
              {product.specs[1].map((spec, idx) => (
                <p
                  key={idx}
                  className="text-black text-xs sm:text-base md:text-base font-medium leading-relaxed text-left font-['Nunito_Sans']"
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
