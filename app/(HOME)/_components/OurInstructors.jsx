"use client";

import React from 'react';
import { FaMusic, FaArrowRight, FaTwitter, FaLinkedinIn, FaGithub, FaLink } from 'react-icons/fa'; // Assuming FaMusic is the icon from the image
import { motion } from 'framer-motion';
import Link from 'next/link';

import { sampleInstructors } from '@/lib/constants'; // Import your instructor data

// Helper function to get the correct social icon component
const getSocialIcon = (iconName) => {
  switch (iconName) {
    case 'FaTwitter': return FaTwitter;
    case 'FaLinkedinIn': return FaLinkedinIn;
    case 'FaGithub': return FaGithub;
    case 'FaLink': return FaLink; // For website link
    default: return null;
  }
};

function OurInstructors() {

  // Decide how many instructors to feature in this section
  const featuredInstructors = sampleInstructors.slice(0, 4); // Let's feature the first 4

  // Framer Motion variants for animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Stagger the animation of each instructor item
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 80, scale: 0.8 }, // Start smaller, lower, and invisible
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: "easeOut" } }, // End at original size/position and visible
  };

   // Variants for the "View All" button
  const buttonVariants = {
     hidden: { opacity: 0, y: 30 },
     visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", delay: featuredInstructors.length * 0.2 + 0.3 } } // Delay after instructor items finish
  }


  return (
    // Section with a deep dark background for the "Our Instructors" feel
    <section className="py-16 px-4 sm:px-6 lg:px-8  dark:bg-gray-950 text-white dark:text-white overflow-hidden"> {/* Using a very dark gray for the background */}
      <div className="max-w-7xl mx-auto text-center">

        {/* Section Title */}
        <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="flex items-center justify-center text-sm font-semibold text-cyan-400 uppercase mb-2"> {/* Using cyan for the highlight */}
            <FaMusic className="h-5 w-5 mr-2" /> Our Instructors
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-12">
            Meet Our Expert Instructors
          </h2>
        </motion.div>

        {/* Instructors Display - Centered and slightly overlapping */}
        <motion.div
          className="flex justify-center items-end flex-wrap gap-x-8 sm:gap-x-12 md:gap-x-16 lg:gap-x-20 xl:gap-x-24 mb-16" // Use flexbox to center and space items
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }} // Trigger when a bit of the container is visible
        >
          {featuredInstructors.map((instructor, index) => (
            <motion.div
              key={instructor.id}
              variants={itemVariants} // Apply animation to each item
              // Apply transforms or margins for staggering/overlap - adjust these values as needed
              // flex-shrink-0 prevents items from shrinking on wrap
              className={`flex flex-col items-center flex-shrink-0
                         ${index === 1 || index === 3 ? 'transform translate-y-8 md:translate-y-12' : ''} // Example: Shift every 2nd/4th instructor down
                         ${index === 0 ? 'lg:-translate-x-8' : ''} // Example: Shift first instructor left
                         ${index === featuredInstructors.length - 1 ? 'lg:translate-x-8' : ''} // Example: Shift last instructor right
                       `}
            >
              {/* Instructor Image */}
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 mb-4">
                 {/* Optional: Add a subtle ring or border */}
                 <div className="absolute inset-0 rounded-full border-4 border-cyan-500 dark:border-cyan-400 opacity-70 group-hover:opacity-100 transition-opacity duration-300 z-0"></div> {/* Border/Ring */}
                <img
                  src={instructor.image}
                  alt={instructor.name}
                  className="w-full h-full object-cover rounded-full relative z-10 shadow-xl transition-transform duration-300 ease-in-out hover:scale-105" // Hover effect
                />
              </div>

              {/* Instructor Info */}
              <div className="text-center">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">{instructor.name}</h3> {/* Always white text on this dark background */}
                <p className="text-sm sm:text-base text-gray-400 dark:text-gray-400 mb-3">{instructor.role}</p> {/* Lighter gray for role */}

                 {/* Social Links */}
                <div className="flex justify-center space-x-3 text-gray-500 dark:text-gray-500">
                   {instructor.socialLinks && instructor.socialLinks.map((link, linkIndex) => {
                      const IconComponent = getSocialIcon(link.icon);
                      if (!IconComponent) return null; // Don't render if icon is invalid

                      return (
                         <a
                            key={linkIndex}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-cyan-400 transition-colors duration-200" // Hover color
                         >
                            <IconComponent className="h-5 w-5" /> {/* Size of icons */}
                         </a>
                      );
                   })}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* "View All Instructors" Button */}
        <motion.div
           className="mt-10 text-center"
           variants={buttonVariants}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, amount: 0.3 }}
        >
          <Link href="/instructorslist"> {/* Link to your full instructors list page */}
              <span className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 dark:focus:ring-cyan-400 cursor-pointer">
                View All Instructors →
              </span>
           </Link>
        </motion.div>

      </div>
    </section>
  );
}

export default OurInstructors;