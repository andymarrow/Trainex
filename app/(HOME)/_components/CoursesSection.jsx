"use client";
import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

import CourseCard from './CourseCard';
import HoverPopup from './HoverPopup';
import { sampleCourses } from '@/lib/constants';
import { FaBookOpen } from 'react-icons/fa';

function CoursesSection() {
  const router = useRouter();

  const [hoveredCourse, setHoveredCourse] = useState(null);
  const [popupPosition, setPopupPosition] = useState(null);
  const popupTimerRef = useRef(null);

  const [selectedCategory, setSelectedCategory] = useState('All Categories');


  const [isLargeScreen, setIsLargeScreen] = useState(false);

  const sectionRef = useRef(null);


  // Effect to track screen size for responsive popup display
  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    // Set initial state on mount
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
      if (popupTimerRef.current) {
        clearTimeout(popupTimerRef.current);
      }
    };
  }, []); 
  const uniqueCategories = Array.from(new Set(sampleCourses.map(course => course.category).filter(Boolean))); // Filter out undefined/null categories
  const categories = ['All Categories', ...uniqueCategories];

  // Filter courses based on the selected category
  const filteredCourses = selectedCategory === 'All Categories'
    ? sampleCourses
    : sampleCourses.filter(course => course.category === selectedCategory);


  // --- Hover Popup Logic ---
  const handleMouseEnterCard = (course, cardElement) => {
    if (!isLargeScreen) return;

    const rect = cardElement.getBoundingClientRect();
    const calculatedPosition = { top: rect.top, left: rect.right };

    if (popupTimerRef.current) {
      clearTimeout(popupTimerRef.current);
    }

    popupTimerRef.current = setTimeout(() => {
      setHoveredCourse(course);
      setPopupPosition(calculatedPosition);
    }, 300); // Delay before showing popup
  };

  const handleMouseLeave = () => {
     // Only clear hover state if on a large screen
     if (!isLargeScreen) return;

     if (popupTimerRef.current) {
        clearTimeout(popupTimerRef.current);
     }
     // Delay before hiding popup
     popupTimerRef.current = setTimeout(() => {
       setHoveredCourse(null);
       setPopupPosition(null);
     }, 300);
   };

  const handleMouseEnterPopup = () => {
     // Only relevant if the popup is active and on a large screen
     if (!isLargeScreen || !activeCourse) return;

     if (popupTimerRef.current) {
        clearTimeout(popupTimerRef.current);
     }
  };

  const handleMouseLeavePopup = handleMouseLeave;
  // --- End Hover Popup Logic ---


  // Handler for category button click
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    // Also clear any hover state/popup when changing categories
    setHoveredCourse(null);
    setPopupPosition(null);
    // Clear any pending timeout
    if (popupTimerRef.current) {
       clearTimeout(popupTimerRef.current);
    }
  };


  // Handler for the "View All Courses" button click
  const handleViewAllClick = () => {
    router.push('/courselist');
  };

  // Find the course data for the hovered ID
  const activeCourse = sampleCourses.find(c => c.id === hoveredCourse?.id);

  // Framer Motion Variants for Grid and Items
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        // Stagger children animation by a small amount
        delayChildren: 0.2,
        staggerChildren: 0.1, // Add a 0.1s delay between each child's animation start
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 }, // Start slightly lower and invisible
    visible: { y: 0, opacity: 1 },   // End at original position and visible
  };


  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-transparent relative" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        {/* Section Titles */}
         <div className="text-center mb-12">
                <p className="flex items-center justify-center text-sm font-semibold text-blue-600 dark:text-cyan-400 uppercase mb-2">
                <FaBookOpen className="h-5 w-5 mr-2" />
                Popular Courses
                </p>

                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-800 dark:text-white leading-tight">
                Our Popular Online Courses
                </h2>
        </div>

        <div className="flex justify-center mb-10 flex-wrap gap-3">
          {categories.map(category => (
            <motion.button
              key={category}
              onClick={() => handleCategoryClick(category)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 dark:focus:ring-cyan-400
                         ${selectedCategory === category
                           ? 'bg-blue-600 text-white dark:bg-cyan-600 dark:text-gray-100 shadow-md'
                           : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
                         }`}
               whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button >
          ))}
        </div>


        <motion.div
          className="sm:justify-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-6 lg:gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          key={selectedCategory} 
        >
           {filteredCourses.length > 0 ? (
             filteredCourses.map(course => (
              <motion.div
                 key={course.id}
                 variants={itemVariants}
              >
                <CourseCard
                  course={course}
                  onMouseEnter={handleMouseEnterCard}
                  onMouseLeave={handleMouseLeave}
                />
              </motion.div>
            ))
          ) : (
             <div className="flex justify-center items-center w-full text-center text-gray-600 dark:text-gray-400 text-lg min-h-[200px] col-span-full">
                <p>No courses found in this category.</p>
            </div>
          )}
        </motion.div>

        {/* "View All Courses" */}
        <div className="mt-10 text-center">
          <motion.button
             onClick={handleViewAllClick}
             className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 dark:focus:ring-cyan-400"
             whileHover={{ scale: 1.05 }} 
             whileTap={{ scale: 0.98 }} 
          >
            View All Courses →
          </motion.button>
        </div>


        {/* Render the Hover Popup */}
        {activeCourse && popupPosition && isLargeScreen && (
          <HoverPopup
            course={activeCourse}
            position={popupPosition}
            onMouseEnter={handleMouseEnterPopup}
            onMouseLeave={handleMouseLeavePopup}
          />
        )}

      </div>
    </section>
  );
}

export default CoursesSection;