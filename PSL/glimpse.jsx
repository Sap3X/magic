import React from "react";

// Glimpse Section
export default function Glimpse() {
  return (
    <section className="py-10 sm:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-[#103f91] mb-6 sm:mb-12">
          GLIMPSE OF PSL
        </h2>
        <div className="relative">
          <img
            src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/HDPIFvXrWe/fg0hxg2r_expires_30_days.png"
            className="w-full max-w-2xl sm:max-w-4xl mx-auto rounded-3xl object-cover shadow-2xl transition-transform duration-500"
            alt="PSL Glimpse"
          />
        </div>
      </div>
    </section>
  );
}