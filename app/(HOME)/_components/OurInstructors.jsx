// _components/OurInstructors.js
"use client";

import React from 'react'; // Removed useRef as Swiper manages refs internally
import InstructorCard from './InstructorCard';
import { sampleInstructors } from '@/lib/constants';
import { FaChalkboardTeacher } from 'react-icons/fa'; // Removed Chevron icons as Swiper provides them
import { motion } from 'framer-motion';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
// You will likely need to import these globally in your layout or a dedicated CSS file
// For simplicity here, we import them directly, but consider global import for production
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'; // If you use autoplay

// Import required modules
import { Navigation, Pagination, Autoplay } from 'swiper/modules';


function OurInstructors() {

  // --- Framer Motion Variants ---
  // Keeping this to animate the cards as they appear in the viewport
  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  // --- Removed Manual Scroll/Navigation Logic ---
  // Swiper handles this internally

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-transparent relative">
      <div className="max-w-7xl mx-auto">

        {/* Section Titles */}
        <div className="text-center mb-12">
          <p className="flex items-center justify-center text-sm font-semibold text-blue-600 dark:text-cyan-400 uppercase mb-2">
             <FaChalkboardTeacher className="h-5 w-5 mr-2" />
             Our Instructor
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-800 dark:text-white leading-tight">
            Meet Our Expert Instructor
          </h2>
        </div>

        {/* Instructors Swiper Carousel Container */}
        {/* Add a class here for potential custom styling of Swiper elements like arrows/dots */}
        <div className="relative swiper-instructors-container"> {/* Added class */}
            <Swiper
                // Install modules
                modules={[Navigation, Pagination, Autoplay]}
                // Configure Swiper behavior
                spaceBetween={30} // Gap between slides (adjust as needed)
                loop={true} // Enable looping (optional)
                autoplay={{ // Optional: Enable autoplay
                  delay: 5000, // Delay in ms between transitions
                  disableOnInteraction: false, // Keep autoplaying even after user interaction
                }}
                navigation // Enable navigation arrows
                pagination={{ clickable: true }} // Enable clickable pagination dots
                // Responsive breakpoints
                breakpoints={{
                  320: { // At >= 320px
                    slidesPerView: 1.1, // Show slightly more than 1 card
                    spaceBetween: 15,
                  },
                  640: { // At >= sm breakpoint (640px)
                    slidesPerView: 2.1, // Show slightly more than 2 cards
                    spaceBetween: 20,
                  },
                  768: { // At >= md breakpoint (768px)
                    slidesPerView: 2.5, // Show slightly more than 2.5 cards
                    spaceBetween: 25,
                  },
                  1024: { // At >= lg breakpoint (1024px)
                    slidesPerView: 3, // Show 3 cards
                    spaceBetween: 30,
                  },
                   1280: { // At >= xl breakpoint (1280px) - adjust if needed
                    slidesPerView: 3,
                    spaceBetween: 30,
                  },
                }}
                // Added className for potential custom styling of the Swiper instance itself
                className="mySwiper"
            >
              {sampleInstructors.map(instructor => (
                <SwiperSlide key={instructor.id}>
                  {/*
                    Wrap InstructorCard in motion.div to keep whileInView animation.
                    Remove fixed width classes (w-[...]) and flex-none from this div.
                    SwiperSlide manages the width based on slidesPerView.
                  */}
                  <motion.div
                     variants={itemVariants}
                     initial="hidden"
                     whileInView="visible"
                     // Adjust amount based on how much of the card needs to be visible
                     // before the animation triggers
                     viewport={{ once: true, amount: 0.4 }}
                     className="h-full" // Ensure the motion div takes full height of the slide
                  >
                    <InstructorCard instructor={instructor} />
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* --- Removed Navigation Arrows --- Swiper provides them */}

        </div>


         {/* View All Button - Keep this */}
         <div className="mt-12 text-center">
              <button className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 dark:focus:ring-cyan-400">
                View All Instructors →
              </button>
            </div>


      </div>
    </section>
  );
}

export default OurInstructors;