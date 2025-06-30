import React from 'react';
import { motion } from 'framer-motion';

function DashboardHeader({ userName, overallProgress }) {
  // Animation variants for the header
  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  // Animation variants for the stats line
  const statsVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 0.3, duration: 0.5 } },
  };

  return (
    <motion.div
      className="mb-8 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md"
      initial="hidden"
      animate="visible"
      variants={headerVariants}
    >
      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
        Welcome back,{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">
          {userName}!
        </span>
      </h1>
      <motion.p
        className="text-lg text-gray-600 dark:text-gray-300"
        variants={statsVariants}
      >
        Your overall learning progress:{' '}
        <span className="font-semibold text-blue-600 dark:text-cyan-400">
          {overallProgress}%
        </span>
      </motion.p>
    </motion.div>
  );
}

export default DashboardHeader;