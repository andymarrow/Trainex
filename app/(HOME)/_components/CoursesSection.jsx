// app/_components/CoursesSection.js (Assuming this path based on your imports)
"use client";
import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

import CourseCard from './CourseCard';
import HoverPopup from './HoverPopup'; // Make sure this path is correct
import { sampleCourses } from '@/lib/constants'; // Make sure this path is correct
import { FaBookOpen } from 'react-icons/fa';

function CoursesSection() {
  const router = useRouter();

  const [hoveredCourse, setHoveredCourse] = useState(null);
  // popupPosition will now store { top, left, transform } relative to the section
  const [popupPosition, setPopupPosition] = useState(null);
  const popupTimerRef = useRef(null);

  const [selectedCategory, setSelectedCategory] = useState('All Categories');

  const [isLargeScreen, setIsLargeScreen] = useState(false);

  const sectionRef = useRef(null); // Ref for the main section, needed for absolute positioning context

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

  const uniqueCategories = Array.from(new Set(sampleCourses.map(course => course.category).filter(Boolean)));
  const categories = ['All Categories', ...uniqueCategories];

  // Filter courses based on the selected category
  const filteredCourses = selectedCategory === 'All Categories'
    ? sampleCourses
    : sampleCourses.filter(course => course.category === selectedCategory);

  // --- Hover Popup Logic (Using Absolute Positioning & Smart Placement) ---
  const handleMouseEnterCard = (course, cardElement) => {
    // Only show popup on large screens
    if (!isLargeScreen || !sectionRef.current) return; // Ensure sectionRef is available

    const rect = cardElement.getBoundingClientRect();
    // Get the position of the section relative to the viewport
    const sectionRect = sectionRef.current.getBoundingClientRect();

    const popupWidth = 300; // Needs to match the width set in HoverPopup or its wrapper
    const gap = 10; // Gap between card and popup

    let topRelativeToSection = rect.top - sectionRect.top;
    let leftRelativeToSection;
    let transform = 'translateX(10px)'; // Default to position right with a gap

    // Check available space to the right of the card relative to the *viewport*
    // This is a simpler check than relative to the section if the section is not full width
    // Let's use viewport width for the check to be more robust against different parent containers
    const spaceRightOfCardInViewport = window.innerWidth - rect.right;


    if (spaceRightOfCardInViewport >= popupWidth + gap) {
      // Enough space on the right (relative to viewport), position to the right relative to section
      leftRelativeToSection = rect.right - sectionRect.left;
      transform = 'translateX(10px)';
    } else {
      // Not enough space on the right, position to the left
      leftRelativeToSection = rect.left - sectionRect.left - popupWidth - gap;
      transform = 'translateX(-10px)';

      // Optional: Prevent popup from going off the left edge of the section
      if (leftRelativeToSection < 0) {
          leftRelativeToSection = 0; // Stick to the left edge of the section
          transform = 'translateX(0)'; // No transform needed if against the edge
      }
    }

     // Optional: Ensure popup doesn't go off the top edge of the section
     if (topRelativeToSection < 0) {
         topRelativeToSection = 0; // Stick to the top edge of the section
     }
     // Optional: Ensure popup doesn't go off the bottom edge of the section
     // This is more complex as popup height is dynamic. A simple fix is to limit top or let it scroll.


    if (popupTimerRef.current) {
      clearTimeout(popupTimerRef.current);
    }

    popupTimerRef.current = setTimeout(() => {
      setHoveredCourse(course);
      // Store the calculated position including the transform value
      setPopupPosition({ top: topRelativeToSection, left: leftRelativeToSection, transform });
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

   // Keep the popup open when the mouse moves from the card onto the popup itself
  const handleMouseEnterPopup = () => {
     // Only relevant if the popup is active and on a large screen
     if (!isLargeScreen || !hoveredCourse) return;

     if (popupTimerRef.current) {
        clearTimeout(popupTimerRef.current);
     }
     // No need to set state, just prevent the timer from hiding the popup
  };

  // Re-use handleMouseLeave for leaving the popup
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
    // Clear hover state before navigating
    setHoveredCourse(null);
    setPopupPosition(null);
    if (popupTimerRef.current) {
        clearTimeout(popupTimerRef.current);
    }
    router.push('/courselist'); // Use lowercase 'courselist'
  };

  // Find the course data for the hovered course object
  const activeCourseData = sampleCourses.find(c => c.id === hoveredCourse?.id);

  // Framer Motion Variants for Grid and Items
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  // Handler for navigating from CourseCard
  const handleNavigateFromCard = (courseId) => {
      // Clear hover state before navigating
      setHoveredCourse(null);
      setPopupPosition(null);
      if (popupTimerRef.current) {
          clearTimeout(popupTimerRef.current);
      }
      router.push(`/courselist/${courseId}`); // Use lowercase 'courselist'
  };


  return (
    // section has position: relative
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
                  onClick={handleNavigateFromCard} // Add onClick for navigation
                />
              </motion.div>
            ))
          ) : (
             <div className="flex justify-center items-center w-full text-center text-gray-600 dark:text-gray-400 text-lg min-h-[200px] col-span-full">
                <p>No courses found in this category.</p>
            </div>
          )}
        </motion.div>

        {/* "View All Courses" Button */}
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


        {/* Render the Hover Popup - Positioned ABSOLUTELY relative to the parent section */}
        {/* Ensure activeCourseData exists for popup content */}
        {activeCourseData && popupPosition && isLargeScreen && (
          // This div acts as the positioned container for the popup content
          <div
             style={{
                 position: 'absolute', // Use absolute positioning relative to the parent section
                 top: `${popupPosition.top}px`, // Use top relative to section's top
                 left: `${popupPosition.left}px`, // Use left relative to section's left
                 transform: popupPosition.transform, // Apply the calculated transform
                 zIndex: 50,
             }}
             onMouseEnter={handleMouseEnterPopup} // Pass hover events to keep popup open
             onMouseLeave={handleMouseLeavePopup}
          >
             {/* The HoverPopup content itself */}
             <HoverPopup
               course={activeCourseData}
               // No need to pass position prop or mouse handlers to HoverPopup itself anymore
             />
          </div>
        )}

      </div>
    </section>
  );
}

export default CoursesSection;