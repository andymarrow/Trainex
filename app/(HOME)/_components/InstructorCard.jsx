// _components/InstructorCard.js
"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
// Import icons you might use for social links
import { FaTwitter, FaLinkedinIn, FaGithub, FaLink, FaPlus } from 'react-icons/fa';

// Map icon names (strings) to actual components
const socialIconsMap = {
  FaTwitter: FaTwitter,
  FaLinkedinIn: FaLinkedinIn,
  FaGithub: FaGithub,
  FaLink: FaLink,
};

function InstructorCard({ instructor }) {
  const {
    id,
    name,
    role,
    image,
    socialLinks = [], // Default to empty array
    highlightColor = 'blue', // Default highlight color
  } = instructor;

  // Define the color classes for the stroke border based on highlightColor
  // These classes are used for the border color itself
  const strokeColorClass = {
    blue: 'border-blue-500 dark:border-cyan-500',
    red: 'border-red-500 dark:border-red-400',
    // Add more colors if needed
  }[highlightColor] || 'border-blue-500 dark:border-cyan-500';

  // Define the highlight color text class for the role
  const roleColorClass = {
      blue: 'text-blue-600 dark:text-cyan-400',
      red: 'text-red-500 dark:text-red-400',
      // Add more colors if needed
  }[highlightColor] || 'text-blue-600 dark:text-cyan-400';


  return (
    // Root motion div for the card - handles the overall hover state
    <motion.div
      className="relative flex flex-col items-center text-center p-4 group cursor-pointer h-full" // Added h-full to ensure cards fill height in flex container
      whileHover="hover"
      initial="initial"
      // You can add entrance animation variants here too if you want them to animate individually on mount
      // variants={{ initial: { opacity: 0, y: 50 }, animate: { opacity: 1, y: 0 } }}
      // animate="animate"
      // transition={{ duration: 0.5 }}
    >
      {/* Image Container - Relative for absolute children (stroke, social icons) */}
      {/* Increased size for the image circle */}
      <div className="relative w-48 h-48 sm:w-52 sm:h-52 rounded-full overflow-hidden mb-4"> {/* Increased fixed size */}
        <Image
          src={image}
          alt={`${name}'s photo`}
          layout="fill"
          objectFit="cover"
        />

        {/* Animated Circle Stroke Overlay */}
        {/* This motion div creates the animated effect on hover */}
        <motion.div
           className={`absolute inset-[-10px] rounded-full border-2 ${strokeColorClass}`} // Initial styling (border color from prop)
           variants={{
             initial: { opacity: 0.5, scale: 0.95, rotate: 0, borderWidth: 2 }, // Slightly transparent, smaller, thin border initially
             hover: { opacity: 1, scale: 1.05, rotate: 360, borderWidth: 4 }, // Fully opaque, larger, thicker border on hover
           }}
           transition={{ duration: 0.5, ease: "easeOut" }} // Animation transition
           // style={{ borderColor: highlightColor === 'red' ? 'rgba(239, 68, 68, 0.5)' : 'rgba(59, 130, 246, 0.5)' }} // Removed inline style - use Tailwind class + opacity variant
        ></motion.div>


        {/* Animated Social Icons Container */}
        {/* Positioned below the image initially, slides up and fades in on hover */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 flex justify-center space-x-3 bg-white dark:bg-gray-800 py-2 opacity-0 pointer-events-none group-hover:pointer-events-auto rounded-b-full z-10"
          variants={{
            initial: { y: 20, opacity: 0 },
            hover: { y: 0, opacity: 1 },
          }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          {socialLinks.map(link => {
              const IconComponent = socialIconsMap[link.icon];
              if (!IconComponent) return null;

              return (
                <Link href={link.url} key={link.platform} legacyBehavior>
                  <a
                    className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-cyan-400 transition-colors duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${name}'s ${link.platform}`}
                  >
                    <IconComponent className="w-6 h-6" /> {/* Increased icon size slightly */}
                  </a>
                </Link>
              );
          })}
        </motion.div>


      </div>

      {/* Name and Role */}
      <h3 className="font-semibold text-lg text-gray-800 dark:text-white mb-1">{name}</h3>
      {/* Role text with color based on highlightColor */}
      <p className={`text-sm ${roleColorClass}`}> {/* Use the defined color class */}
        {role}
      </p>

    </motion.div>
  );
}

export default InstructorCard;