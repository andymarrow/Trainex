"use client";

import React, { useState, useRef, useEffect } from 'react'; 
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

// Import your sample data and CourseCard
import { sampleCourses } from '@/lib/constants'; 
import CourseCard from '@/app/(HOME)/_components/CourseCard';  
import HoverPopup from '@/app/(HOME)/_components/HoverPopup'; 

function RelatedCoursesSection({ currentCourse, limit = 4 }) {
  const router = useRouter();
  const sectionRef = useRef(null); 

  // State for hover popup
  const [hoveredCourse, setHoveredCourse] = useState(null);

  const [popupPosition, setPopupPosition] = useState(null);
  const popupTimerRef = useRef(null);

  // State for responsive layout (used for popup display)
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  // Effect to track screen size for responsive popup display
  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    handleResize(); 
    window.addEventListener('resize', handleResize);

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
      if (popupTimerRef.current) {
        clearTimeout(popupTimerRef.current);
      }
    };
  }, []);


  if (!currentCourse) {
    return null;
  }

  // Find related courses: same category, exclude the current course
  const relatedCourses = sampleCourses
    .filter(course =>
      course.category === currentCourse.category && 
      course.id !== currentCourse.id 
    )
    .slice(0, limit);

  if (relatedCourses.length === 0) {
    return null;
  }

   // Handler for navigating from a related CourseCard
  const handleNavigateToCourse = (courseId) => {
      // Clear hover state before navigating
      setHoveredCourse(null);
      setPopupPosition(null);
      if (popupTimerRef.current) {
          clearTimeout(popupTimerRef.current);
      }
      router.push(`/CourseList/${courseId}`); 
  };


   // --- Hover Popup Logic (Using Absolute Positioning) ---
   const handleMouseEnterCard = (course, cardElement) => {
     // Only show popup on large screens
     if (!isLargeScreen || !sectionRef.current) return; 

     const rect = cardElement.getBoundingClientRect();
     // Get the position of the section relative to the viewport
     const sectionRect = sectionRef.current.getBoundingClientRect();

     // Calculate position relative to the section's top-left corner
     // top: distance from top of section to top of card
     // left: distance from left of section to right of card
     const topRelativeToSection = rect.top - sectionRect.top;
     const leftRelativeToSection = rect.right - sectionRect.left;

     if (popupTimerRef.current) {
       clearTimeout(popupTimerRef.current);
     }

     popupTimerRef.current = setTimeout(() => {
       setHoveredCourse(course);
       // Store the calculated position relative to the section
       setPopupPosition({ top: topRelativeToSection, left: leftRelativeToSection });
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
   };

   // Re-use handleMouseLeave for leaving the popup
   const handleMouseLeavePopup = handleMouseLeave;
   // --- End Hover Popup Logic ---

   // Find the course data for the hovered course object
   const activeCourseData = sampleCourses.find(c => c.id === hoveredCourse?.id);


   // Framer Motion Variants (can reuse from CourseListPage)
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


  return (
    // Add position: relative here for absolute children positioning
    <div className="mt-16 border-t border-gray-200 dark:border-gray-700 pt-12 relative" ref={sectionRef}> {/* Added relative and ref */}
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
        Related Courses
      </h2>

      {/* Grid of Related Courses */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-6 lg:gap-8"
         variants={containerVariants}
         initial="hidden"
         animate="visible"
         key={currentCourse.id} 
      >
        {relatedCourses.map(course => (
          <motion.div
             key={course.id}
             variants={itemVariants}
             layout // Maintain layout animations
          >
            <CourseCard
              course={course}
              onMouseEnter={handleMouseEnterCard}
              onMouseLeave={handleMouseLeave}
              onClick={handleNavigateToCourse} 
            />
          </motion.div>
        ))}
      </motion.div>

       {/* Render the Hover Popup - Positioned ABSOLUTELY relative to this section */}
       {activeCourseData && popupPosition && isLargeScreen && (
         <div
            style={{
                position: 'absolute', 
                top: `${popupPosition.top}px`, 
                left: `${popupPosition.left}px`,
                transform: 'translateX(10px)',
                zIndex: 50,
            }}
          
            onMouseEnter={handleMouseEnterPopup}
            onMouseLeave={handleMouseLeavePopup}
         >
            {/* The HoverPopup content itself */}
            <HoverPopup
              course={activeCourseData}
            />
         </div>
       )}

    </div>
  );
}

export default RelatedCoursesSection;