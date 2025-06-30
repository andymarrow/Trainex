import React from 'react';
import { motion } from 'framer-motion';

// Icons
import { HiOutlineAcademicCap, HiOutlineCheckCircle, HiOutlineCurrencyDollar, HiOutlineClock } from 'react-icons/hi';

// Map of icon types to actual icon components
const iconMap = {
  enrolled: HiOutlineAcademicCap,
  completed: HiOutlineCheckCircle,
  certificates: HiOutlineAcademicCap, // Using cap for certificates too, adjust if you have a specific icon
  hours: HiOutlineClock, // Using clock for hours
  paid: HiOutlineCurrencyDollar, // Using dollar for paid amount
};

function StatCard({ title, value, type, icon: Icon }) {
  // Animation variants for individual cards
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
  };

  // We will remove the full gradient background from the main div.
  // The background will be the default card background (white/dark:gray-800).
  // The text color for the title will also be default (gray-900/dark:gray-100).

  // The accent color (gradient) will be applied to the VALUE text.
  const valueTextClasses = "text-2xl font-bold mt-1 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500";

  // The accent color (solid) will be applied to the Icon.
  const iconClasses = "text-4xl text-blue-600 dark:text-cyan-400"; // Solid accent color for icon


  return (
    <motion.div
      className="p-6 rounded-lg shadow-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 flex items-center justify-between transition-all duration-300 ease-in-out" // Added neutral background and default text colors
      variants={cardVariants}
      whileHover={{ scale: 1.02, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }} // Subtle hover scale and shadow increase
    >
      <div>
        <p className="text-sm font-medium opacity-90 text-gray-600 dark:text-gray-300">{title}</p> {/* Title text color */}
        <p className={valueTextClasses}> {/* Applied gradient classes here */}
          {type === 'paid' && '$'} {/* Add dollar sign for payment */}
          {value}
          {type === 'hours' && ' hrs'} {/* Add hrs for hours */}
          {/* Percentage for progress should ideally be added to the value directly if it's a progress stat */}
           {/* Note: overallProgressAverage is used in the Header, individual courses have progress on their cards */}
           {/* If you add a stat for 'Average Progress', add '%' here */}
        </p>
      </div>
       {Icon && (
         <div className={iconClasses}> {/* Applied solid accent color classes here */}
           <Icon />
         </div>
       )}
    </motion.div>
  );
}


function StatsGrid({ stats }) {
  // Animation variants for the grid container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Stagger children animations
      },
    },
  };

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {stats.map((stat, index) => (
        // Pass type explicitly if needed for conditional rendering within StatCard (like adding $)
        <StatCard key={index} title={stat.title} value={stat.value} type={stat.type} icon={iconMap[stat.type]} />
      ))}
    </motion.div>
  );
}

export default StatsGrid;