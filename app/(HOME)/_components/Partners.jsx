"use client";

import React from 'react';
import { FaHandshake, FaArrowRight } from 'react-icons/fa'; // Icon for partners section
import { motion } from 'framer-motion';
import Link from 'next/link'; // Use Next.js Link if logos are clickable

import { latestPartners } from '@/lib/constants'; // Import your partner data

function Partners() {

  // Framer Motion variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const logoContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08, // Smaller stagger for logos
      },
    },
  };

  const logoItemVariants = {
    hidden: { opacity: 0, scale: 0.8 }, // Start smaller and invisible
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }, // Fade in and scale up
  };

  // Variants for the "View All" button (optional)
  const buttonVariants = {
     hidden: { opacity: 0, y: 30 },
     visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", delay: latestPartners.length * 0.08 + 0.3 } } // Delay after logo animation
  }


  return (
    // Section container with padding and background
    <motion.section
        className="py-16 px-4 sm:px-6 lg:px-8  text-gray-800 dark:text-white" // Light gray in light, dark gray in dark
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }} // Trigger animation when 10% is visible
    >
      <div className="max-w-7xl mx-auto text-center">

        {/* Section Title */}
        <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="flex items-center justify-center text-sm font-semibold text-blue-600 dark:text-cyan-400 uppercase mb-2"> {/* Using brand colors */}
            <FaHandshake className="h-5 w-5 mr-2" /> Our Valued Partners
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-12">
            Trusted By Industry Leaders
          </h2>
        </motion.div>

        {/* Logos Grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-items-center items-center" // Responsive grid, center items
          variants={logoContainerVariants} // Apply container variants for stagger
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }} // Trigger animation
        >
          {latestPartners.map(partner => (
            <motion.div
              key={partner.id}
              variants={logoItemVariants} // Apply animation to each logo item
              className="flex items-center justify-center w-full h-24 sm:h-28 p-2" // Fixed size container for logos
            >
              {/* Wrap logo in Link if websiteUrl exists */}
              {partner.websiteUrl ? (
                <Link href={partner.websiteUrl} target="_blank" rel="noopener noreferrer">
                  <img
                    src={partner.logoUrl}
                    alt={partner.name}
                    // Styling for the logo image itself
                    className="max-h-full max-w-full object-contain
                               filter grayscale opacity-60 transition-all duration-300
                               hover:grayscale-0 hover:opacity-100 hover:scale-110
                               dark:filter-none dark:opacity-80 dark:hover:opacity-100" // Grayscale in light, subtle opacity/hover in dark
                  />
                </Link>
              ) : (
                 <img
                    src={partner.logoUrl}
                    alt={partner.name}
                    // Styling for the logo image itself
                    className="max-h-full max-w-full object-contain
                               filter grayscale opacity-60 transition-all duration-300
                               hover:grayscale-0 hover:opacity-100 hover:scale-110
                               dark:filter-none dark:opacity-80 dark:hover:opacity-100" // Grayscale in light, subtle opacity/hover in dark
                  />
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Optional: "View All Partners" Button */}
        {/* Uncomment the block below if you want a button */}
        {/*
        <motion.div
           className="mt-16 text-center"
           variants={buttonVariants}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, amount: 0.3 }}
        >
          <Link href="/partnerslist"> // Link to your full partners list page
              <span className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 dark:focus:ring-cyan-400 cursor-pointer">
                View All Partners →
              </span>
           </Link>
        </motion.div>
        */}

      </div>
    </motion.section>
  );
}

export default Partners;