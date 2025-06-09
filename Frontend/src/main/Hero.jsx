import React from "react";

function Hero() {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-blue-700 min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center text-white max-w-2xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Revolutionize Your Hair Health Journey
        </h1>
        <p className="text-sm md:text-base mb-6">
          AI-powered diagnostics, expert consultations, and a supportive
          community all in one platform to help you achieve your best hair
          health.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-blue-700 px-5 py-2 rounded-md font-semibold hover:bg-gray-100 transition">
            Watch Demo
          </button>
          <button className="border border-white px-5 py-2 rounded-md font-semibold hover:bg-white hover:text-blue-700 transition">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
