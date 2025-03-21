import React from "react";
import video from "../assets/Video/video2.mp4";

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen flex items-end justify-center text-center text-gray-200 overflow-hidden bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover opacity-30"
      >
        <source src={video} type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>

      {/* Hero Content */}
      <div className="z-10 px-6 pb-10 md:pb-16 w-full max-w-[90%] md:max-w-[70%]">
        <h1 className=" font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white drop-shadow-lg">
          Build Smarter. Scale Faster.
        </h1>
        <p className=" font-serif mt-3 text-lg sm:text-xl text-gray-300">
          Unlock the power of seamless digital experiences.
        </p>

        {/* Buttons */}
        <div className="mt-5 flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg rounded-lg shadow-lg transition duration-300">
            Get Started
          </button>
          <button className="px-6 py-3 bg-gray-700 hover:bg-gray-800 text-white font-semibold text-lg rounded-lg shadow-lg transition duration-300">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
