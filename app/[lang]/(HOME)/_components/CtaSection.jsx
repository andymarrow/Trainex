// _components/CtaSection.js
"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion'; // Import motion

function CtaSection() {
  const avatars = [
    // Added more precise positioning relative to the container
    { src: '/images/happystudent1.png', alt: 'Avatar 1', size: 80, classNames: 'top-[10%] left-[10%] sm:top-[15%] sm:left-[15%]' },
    { src: '/images/happystudent3.png', alt: 'Avatar 2', size: 80, classNames: 'top-[20%] right-[10%] sm:top-[25%] sm:right-[15%]' },
    { src: '/images/happystudent4.png', alt: 'Avatar 3', size: 80, classNames: 'bottom-[10%] left-[30%] sm:bottom-[15%] sm:left-[30%]' },
    { src: '/images/happystudent6.png', alt: 'Avatar 4', size: 80, classNames: 'bottom-[20%] right-[15%] sm:bottom-[25%] sm:right-[20%]' },
    { src: '/images/happystudent7.png', alt: 'Avatar 5', size: 80, classNames: 'top-1/3 left-1/4 sm:top-1/3 sm:left-[22%]' },
    { src: '/images/happystudent1.png', alt: 'Avatar 6', size: 80, classNames: 'top-1/4 right-1/4 sm:top-1/4 sm:right-[22%]' },
    { src: '/images/happystudent3.png', alt: 'Avatar 7', size: 80, classNames: 'bottom-1/4 left-[10%] sm:bottom-1/4 sm:left-[12%]' },
    { src: '/images/happystudent7.png', alt: 'Avatar 8', size: 80, classNames: 'bottom-[30%] right-1/3 sm:bottom-[35%] sm:right-[30%]' },
  ];

  // Animation properties for the abstract shapes
  const blobTransition = {
    duration: 10, 
    repeat: Infinity, 
    repeatType: "mirror", 
    ease: "easeInOut", 
  };

  const blobVariants1 = {
    initial: { x: 0, y: 0, scale: 1 },
    animate: {
      x: [0, 30, -20, 0], 
      y: [0, -50, 20, 0], 
      scale: [1, 1.1, 0.9, 1] 
    },
  };

  const blobVariants2 = {
    initial: { x: 0, y: 0, scale: 1 },
    animate: {
      x: [0, -40, 30, 0],
      y: [0, 30, -40, 0],
      scale: [1, 0.9, 1.2, 1]
    },
  };

    const blobVariants3 = {
      initial: { x: 0, y: 0, scale: 1 },
      animate: {
        x: [0, 50, -30, 0],
        y: [0, -20, 50, 0],
        scale: [1, 1.2, 0.8, 1]
      },
  };


  return (
    // The main section provides overall padding and background
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-transparent flex items-center justify-center min-h-[400px]"> {/* Adjusted background, centering, and min-height */}
      {/* The Card/Box Container */}
      <div className="relative w-full max-w-10xl bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 md:p-10 overflow-hidden"> {/* Added styling for the card */}


          <motion.div
            className="absolute top-[-50px] left-[-50px] w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-20 dark:bg-cyan-500 z-0" // Positioning relative to card, increased size, set z-index
            variants={blobVariants1}
            initial="initial"
            animate="animate"
            transition={{ ...blobTransition, duration: 8 }}
          ></motion.div>
          <motion.div
            className="absolute bottom-[-50px] right-[-50px] w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-20 dark:bg-blue-500 z-0" // Positioning relative to card, increased size, set z-index
            variants={blobVariants2}
            initial="initial"
            animate="animate"
            transition={{ ...blobTransition, duration: 9, delay: 2 }}
          ></motion.div>
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-20 dark:bg-indigo-500 z-0" // Centered relative to card, increased size, set z-index
            variants={blobVariants3}
            initial="initial"
            animate="animate"
            transition={{ ...blobTransition, duration: 7, delay: 4 }}
          ></motion.div>


        {/* Main Content (Text and Button) */}

        <div className="max-w-3xl mx-auto text-center relative z-10">
          {/* Tagline */}
          <p className="text-sm font-semibold text-blue-600 dark:text-cyan-400 uppercase mb-3">
             Ready to Transform?
          </p>

          {/* Main Title */}
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 text-gray-900 dark:text-white">
            Join Our Vibrant Learning Community
          </h2>

          {/* Sub-text */}
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-10">
            Unlock your potential with expert-led courses, hands-on projects, and a supportive global network.
          </p>

          {/* CTA Button */}
          <Link href="/signup" legacyBehavior>
            <a
              className="inline-block px-10 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 dark:focus:ring-cyan-400"
              aria-label="Get started with our courses"
            >
              Get Started →
            </a>
          </Link>

        </div>

        {/* Scattered Avatar Images */}
        <div className="hidden lg:flex absolute inset-0 w-full h-full pointer-events-none z-[5]">
           {avatars.map((avatar, index) => (
             <Image
               key={index}
               src={avatar.src}
               alt={avatar.alt}
               width={avatar.size}
               height={avatar.size}
               className={`rounded-full object-cover shadow-md absolute ${avatar.classNames}`}
             />
           ))}
        </div>
      </div>


    </section>
  );
}

export default CtaSection;