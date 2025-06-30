import React from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import Image from "next/image"; // Import Image component

function Hero() {
  return (
    // Use py-12 or py-16 for more consistent vertical padding on section
    <div className="container mx-auto mt-20 lg:mt-12 md:mt-36 px-4 py-8 sm:py-12 dark:text-white"> {/* Adjusted vertical padding */}
      {/* Use responsive items alignment and gap */}
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16"> {/* Slightly reduced default gap */}

        {/* Left Side - Text Content */}
        {/* Responsive width, text alignment */}
        <div className="w-full lg:w-1/2 text-center lg:text-left z-10"> {/* Use lg:w-1/2 for wider split on large screens */}
          {/* Subtitle with icon/line - Responsive alignment */}
          <p className="text-sm font-semibold text-blue-600 dark:text-cyan-400 mb-3 flex items-center justify-center lg:justify-start">
             <span className="inline-block h-0.5 w-8 bg-blue-600 dark:bg-cyan-400 mr-2"></span>
             ONLINE E-LEARNING COURSE
          </p>
          {/* Main Title - Responsive font sizes */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6
                       text-gray-900 dark:text-white">
           <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-blue-600 dark:from-white dark:to-cyan-400">
               Making Your<br className="hidden md:block"/> Future Bright.
           </span>
          </h1>
          {/* Description Paragraph - Responsive text size (optional) */}
          <p className="text-lg dark:text-gray-300 mb-8 text-gray-700">
            Explore a world of knowledge from anywhere. Our platform brings the classroom experience to you, making learning flexible and engaging.
          </p>

          {/* Feature List - Responsive layout and spacing */}
          <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-3 sm:space-y-0 mb-10 justify-center lg:justify-start z-10"> {/* Use lg:justify-start */}
            <div className="flex items-center dark:text-gray-300 text-gray-700">
              <FaCheckCircle className="h-6 w-6 text-green-500 mr-2" />
              Get Certified
            </div>
            <div className="flex items-center dark:text-gray-300 text-gray-700">
              <FaCheckCircle className="h-6 w-6 text-green-500 mr-2" />
              Gain Job-ready Skills
            </div>
             <div className="flex items-center dark:text-gray-300 text-gray-700">
              <FaCheckCircle className="h-6 w-6 text-green-500 mr-2" />
              Great Life
            </div>
          </div>

          {/* Action Buttons - Responsive layout and width */}
          {/* *** MODIFIED BUTTON CONTAINER CLASSES HERE *** */}
          <div className="flex flex-col gap-y-4 sm:flex-row sm:gap-x-4 sm:gap-y-0 justify-center lg:justify-start z-10">
          {/* ********************************************** */}
            <button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl text-lg w-full sm:w-auto animate-pulse-slow focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 dark:focus:ring-cyan-400">
              Get Started →
            </button>
            <button className="bg-gray-800 hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600 text-white font-semibold px-8 py-4 rounded-full transition-colors duration-300 shadow-lg hover:shadow-xl text-lg w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 dark:focus:ring-gray-600">
              Our Courses →
            </button>
          </div>
        </div>

        {/* Right Column: Image Container */}
        <div className="w-full lg:w-1/2 relative mt-10 lg:mt-0">
            <Image
              src={"/images/student-hero.png"}
              alt="Student learning online"
              layout="responsive" // Use responsive layout
              width={600} // Provide intrinsic width for aspect ratio calculation
              height={400} // Provide intrinsic height
              objectFit="contain" // Use contain if the image should not be cropped
              className="w-full h-auto" // Ensure image scales with container
            />
        </div>
      </div>
    </div>
  );
}

export default Hero;