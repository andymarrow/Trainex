"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Import tab content components
import CourseDescriptionTab from './CourseDescriptionTab';
import CourseInstructorTab from './CourseInstructorTab'; 
import CourseContentTab from './CourseContentTab';

function CourseTabs({ course, instructor }) {
  const [activeTab, setActiveTab] = useState('description');

  const tabs = [
    { id: 'description', label: 'Description' },
    { id: 'instructor', label: 'Instructor' },
    { id: 'content', label: 'Content' },
  ];

   // Variants for tab content animation
   const contentVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
      exit: { opacity: 0, y: 20, transition: { duration: 0.3, ease: "easeIn" } },
   };


  return (
    <div>
      {/* Tab Navigation */}
      <div className="flex border-b border-gray-200 dark:border-gray-700 mb-6 overflow-x-auto hide-scrollbar">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-3 text-sm sm:text-base font-semibold focus:outline-none transition-colors whitespace-nowrap
                       ${activeTab === tab.id
                         ? 'text-blue-600 dark:text-cyan-400 border-b-2 border-blue-600 dark:border-cyan-400'
                         : 'text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 border-b-2 border-transparent'
                       }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {/* Use AnimatePresence for exit animations */}
      <AnimatePresence mode='wait'> 
        <motion.div
            key={activeTab} // Key changes based on active tab to trigger animation
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="py-4" 
        >
          {activeTab === 'description' && <CourseDescriptionTab course={course} />}
          {activeTab === 'instructor' && <CourseInstructorTab instructor={instructor} />}
          {activeTab === 'content' && <CourseContentTab course={course} />}
        </motion.div>
      </AnimatePresence>

    

    </div>
  );
}

export default CourseTabs;