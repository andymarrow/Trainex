"use client"; // Mark this component as a client component

import React from 'react';
import { FaGraduationCap, FaCheck, FaArrowRight, FaInfoCircle } from 'react-icons/fa'; // Importing icons
import { motion } from 'framer-motion'; // Import motion for animations

function Aboutus() {

  // Framer Motion variants for animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Delay between children's animation
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

   const imageVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

   const textVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };


  return (
    // Section container with padding, background, and overflow hidden for absolute elements
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Left Column: Images and Experience Circle */}
        {/* Added a fixed height container for absolute positioning context */}
        <motion.div
           className="relative h-[400px] sm:h-[500px] md:h-[450px] lg:h-[550px]"
           variants={imageVariants}
           initial="hidden"
           whileInView="visible" // Animate when component comes into view
           viewport={{ once: true, amount: 0.3 }} // Trigger animation once when 30% of the element is visible
        >
          {/* Main Image - Positioned top-left */}
          <img
            src="/images/happystudent3.png" // Replace with your actual main image path
            alt="Students collaborating on a laptop"
            className="absolute top-0 left-0 w-[85%] h-[85%] object-cover rounded-lg shadow-xl"
          />
          {/* Overlapping Image - Positioned bottom-right */}
          <img
            src="/images/happystudent4.png" // Replace with your actual overlapping image path
            alt="Another group of students discussing"
            className="absolute bottom-0 right-0 w-[60%] h-[60%] object-cover rounded-lg shadow-xl border-4 border-white dark:border-gray-900" // Border for separation
          />
          {/* Experience Circle - Positioned relative to the container */}
          <div className="absolute top-[70%] left-[70%] w-32 h-32 sm:w-40 sm:h-40 bg-blue-600 text-white rounded-full flex flex-col items-center justify-center text-center text-sm sm:text-md font-bold shadow-xl border-4 border-white dark:border-gray-900 transform translate-x-[-50%] translate-y-[-50%]">
            <FaGraduationCap className="text-3xl sm:text-4xl mb-1" /> {/* Icon */}
            <span>24+</span> {/* Years Text */}
            <span>Years</span>
            <span>Experience</span>
          </div>
        </motion.div>

        {/* Right Column: Text Content */}
        <motion.div
           variants={textVariants}
           initial="hidden"
           whileInView="visible" // Animate when component comes into view
           viewport={{ once: true, amount: 0.3 }} // Trigger animation once when 30% of the element is visible
        >
          {/* Small Title / Subheading */}
          <p className="flex items-center text-sm font-semibold text-blue-600 dark:text-cyan-400 uppercase mb-2">
            <FaInfoCircle className="mr-2 text-base" /> Get to Know About Us
          </p>

          {/* Main Headline */}
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-800 dark:text-white leading-tight mb-6">
            Empowering Your Future Through Expert-Led Learning
          </h2>

          {/* Descriptive Paragraph */}
          <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg">
            We are dedicated to providing high-quality, accessible online education that equips you with the skills and knowledge needed to thrive in today's dynamic world. With over 24 years of experience in educational excellence, we partner with industry leaders and expert instructors to bring you relevant, engaging, and impactful learning experiences designed for real-world success.
          </p>

          {/* Key Benefits / Features List */}
          <motion.ul
             className="space-y-3 mb-8"
             variants={containerVariants} // Apply container variants to the ul
             initial="hidden"
             whileInView="visible" // Animate list items when container is in view
             viewport={{ once: true, amount: 0.3 }}
          >
            <motion.li className="flex items-start text-gray-700 dark:text-gray-300" variants={itemVariants}>
              <FaCheck className="mr-2 mt-1 text-blue-500 dark:text-cyan-400 flex-shrink-0" /> Access a vast library of courses across diverse fields.
            </motion.li>
            <motion.li className="flex items-start text-gray-700 dark:text-gray-300" variants={itemVariants}>
              <FaCheck className="mr-2 mt-1 text-blue-500 dark:text-cyan-400 flex-shrink-0" /> Learn from seasoned professionals and subject matter experts.
            </motion.li>
            <motion.li className="flex items-start text-gray-700 dark:text-gray-300" variants={itemVariants}>
              <FaCheck className="mr-2 mt-1 text-blue-500 dark:text-cyan-400 flex-shrink-0" /> Flexible learning options to fit your busy lifestyle.
            </motion.li>
            <motion.li className="flex items-start text-gray-700 dark:text-gray-300" variants={itemVariants}>
              <FaCheck className="mr-2 mt-1 text-blue-500 dark:text-cyan-400 flex-shrink-0" /> Gain practical, job-ready skills demanded by top companies.
            </motion.li>
          </motion.ul>

         
        </motion.div>

      </div>

       <div className="mt-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Left Column: Images and Experience Circle */}
        {/* Added a fixed height container for absolute positioning context */}
        {/* Right Column: Text Content */}
       <motion.div
           variants={textVariants}
           initial="hidden"
           whileInView="visible" // Animate when component comes into view
           viewport={{ once: true, amount: 0.3 }} // Trigger animation once when 30% of the element is visible
        >
         

          {/* Main Headline - Changed Text */}
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-800 dark:text-white leading-tight mb-6">
            Unlock Your Potential with World-Class Online Education
          </h2>

          {/* Descriptive Paragraph - Changed Text */}
          <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg">
            Leveraging over two decades of dedicated experience in educational innovation, our platform is built to empower individuals like you. We provide a curated selection of high-quality online courses, developed and taught by industry experts, ensuring you gain practical, relevant skills that open doors to new opportunities and professional growth.
          </p>

          {/* Key Benefits / Features List - Changed Text */}
          <motion.ul
             className="space-y-3 mb-8"
             variants={containerVariants} // Apply container variants to the ul
             initial="hidden"
             whileInView="visible" // Animate list items when container is in view
             viewport={{ once: true, amount: 0.3 }}
          >
            <motion.li className="flex items-start text-gray-700 dark:text-gray-300" variants={itemVariants}>
              <FaCheck className="mr-2 mt-1 text-blue-500 dark:text-cyan-400 flex-shrink-0" /> Access a comprehensive catalog of over 100k+ courses.
            </motion.li>
            <motion.li className="flex items-start text-gray-700 dark:text-gray-300" variants={itemVariants}>
              <FaCheck className="mr-2 mt-1 text-blue-500 dark:text-cyan-400 flex-shrink-0" /> Learn directly from experienced industry professionals.
            </motion.li>
            <motion.li className="flex items-start text-gray-700 dark:text-gray-300" variants={itemVariants}>
              <FaCheck className="mr-2 mt-1 text-blue-500 dark:text-cyan-400 flex-shrink-0" /> Enjoy flexible, on-demand learning at your own pace.
            </motion.li>
            <motion.li className="flex items-start text-gray-700 dark:text-gray-300" variants={itemVariants}>
              <FaCheck className="mr-2 mt-1 text-blue-500 dark:text-cyan-400 flex-shrink-0" /> Acquire highly sought-after skills for career advancement.
            </motion.li>
          </motion.ul>

          {/* Call to Action Button - Changed Text */}
          <motion.button
             className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold rounded-md transition-colors duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 dark:focus:ring-cyan-400"
             whileHover={{ scale: 1.05 }} // Simple hover animation
             whileTap={{ scale: 0.98 }} // Simple tap animation
             variants={itemVariants} // Apply item variant for initial animation
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true, amount: 0.3 }}
          >
            Discover More <FaArrowRight className="ml-2 text-sm" />
          </motion.button>
        </motion.div>

        <motion.div
           className="relative h-[400px] sm:h-[500px] md:h-[450px] lg:h-[550px]"
           variants={imageVariants}
           initial="hidden"
           whileInView="visible" // Animate when component comes into view
           viewport={{ once: true, amount: 0.3 }} // Trigger animation once when 30% of the element is visible
        >
          {/* Main Image - Positioned top-left */}
          <img
            src="/images/happystudent1.png" // Replace with your actual main image path
            alt="Students collaborating on a laptop"
            className="absolute top-0 right-0 w-[85%] h-[85%] object-cover rounded-lg shadow-xl"
          />
          {/* Overlapping Image - Positioned bottom-right */}
          <img
            src="/images/happystudent6.png" // Replace with your actual overlapping image path
            alt="Another group of students discussing"
            className="absolute bottom-0 left-0 w-[60%] h-[60%] object-cover rounded-lg shadow-xl border-4 border-white dark:border-gray-900" // Border for separation
          />
          {/* Experience Circle - Positioned relative to the container */}
          <div className="absolute top-[70%] right-[70%] w-32 h-32 sm:w-40 sm:h-40 bg-blue-600 text-white rounded-full flex flex-col items-center justify-center text-center text-sm sm:text-md font-bold shadow-xl border-4 border-white dark:border-gray-900 transform translate-x-[-50%] translate-y-[-50%]">
            <FaGraduationCap className="text-3xl sm:text-4xl mb-1" /> {/* Icon */}
            <span>24+</span> {/* Years Text */}
            <span>Years</span>
            <span>Experience</span>
          </div>
        </motion.div>

        

      </div>
    </section>
  );
}

export default Aboutus;