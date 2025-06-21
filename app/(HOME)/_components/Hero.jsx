import React from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { FiArrowDownLeft, FiLink } from "react-icons/fi";

function Hero() {
  return (
    <div className="container mx-auto mt-20 lg:mt-12 md:mt-36 px-4 py-4 lg:py-7  dark:text-white">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
    
        {/* Left Side - Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left z-10"> 
          <p className="text-sm font-semibold text-blue-600 dark:text-cyan-400 mb-3 flex items-center justify-center md:justify-start">
             <span className="inline-block h-0.5 w-8 bg-blue-600 dark:bg-cyan-400 mr-2"></span>
             ONLINE E-LEARNING COURSE
          </p>
          {/* Applied gradient text classes */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6
                       text-transparent bg-clip-text bg-gradient-to-r
                       from-gray-900 to-blue-600 dark:from-white dark:to-cyan-400">
            Online Education <br className="hidden md:block"/> Feels Like Real Classroom
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
            Explore a world of knowledge from anywhere. Our platform brings the classroom experience to you, making learning flexible and engaging.
          </p>

          {/* Feature List */}
          <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-3 sm:space-y-0 mb-10 justify-center md:justify-start z-10"> {/* Added z-10 */}
            <div className="flex items-center text-gray-700 dark:text-gray-300">
              <FaCheckCircle className="h-6 w-6 text-green-500 mr-2" />
              Get Certified
            </div>
            <div className="flex items-center text-gray-700 dark:text-gray-300">
              <FaTimesCircle className="h-6 w-6 text-red-500 mr-2" />
              Gain Job-ready Skills
            </div>
             <div className="flex items-center text-gray-700 dark:text-gray-300">
              <FaCheckCircle className="h-6 w-6 text-green-500 mr-2" />
              Great Life
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start z-10"> 
            <button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl text-lg w-full sm:w-auto animate-pulse-slow">
              Get Started →
            </button>
            <button className="bg-gray-800 hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600 text-white font-semibold px-8 py-4 rounded-full transition-colors duration-300 shadow-lg hover:shadow-xl text-lg w-full sm:w-auto">
              Our Courses →
            </button>
          </div>
        </div>

        {/* Right Column: Image Collage */}
        <div className="w-full relative mt-10 lg:mt-0 h-[450px] sm:h-[500px] lg:h-auto">
          <div className="w-full z-10 transform -translate-x-4 sm:-translate-x-8 -translate-y-4">
            <img
              src={"/images/student-hero.png"} 
              alt="Student learning online"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
