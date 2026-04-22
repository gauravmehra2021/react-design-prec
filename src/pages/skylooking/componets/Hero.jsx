import React from "react";
import skybg from "../../../../public/images/skybg.png";

const Hero = () => {
  return (
    <div className="w-full">
      <div
        className="relative h-48 sm:h-56 md:h-64 rounded-2xl overflow-hidden flex items-center justify-center bg-[#25253f]"
        style={{ backgroundImage: `url(${skybg})`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        {/* Overlay (for better readability) */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-4xl px-4 flex items-center justify-between text-white">
          
          {/* Left */}
          <div>
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold">
              Berlin, Germany
            </h2>
            <p className="text-sm sm:text-base text-gray-200">
              Monday, Aug 5, 2025
            </p>
          </div>

          {/* Right */}
          <div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
              20%
            </h1>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;