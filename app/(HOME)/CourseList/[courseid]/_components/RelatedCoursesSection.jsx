// components/RelatedCoursesSection.js
"use client";

import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

// Import your sample data and CourseCard
import { sampleCourses } from '@/lib/constants'; // Adjust path if needed
import CourseCard from '@/app/(HOME)/_components/CourseCard'; // Adjust path if needed (assuming in components/)
import HoverPopup from '@/app/(HOME)/_components/HoverPopup'; // Import HoverPopup

function RelatedCoursesSection({ currentCourse, limit = 4 }) {
  const router = useRouter();
  const sectionRef = useRef(null); // Ref for the main section div

  // State for hover popup
  const [hoveredCourse, setHoveredCourse] = useState(null);
  // popupPosition now stores { top, left, transform } relative to section
  const [popupPosition, setPopupPosition] = useState(null);
  const popupTimerRef = useRef(null);

  // State for responsive layout (used for popup display)
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  // Effect to track screen size for responsive popup display
  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    handleResize(); // Set initial state
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
      course.category === currentCourse.category && // Same category
      course.id !== currentCourse.id // Not the current course
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


   // --- Hover Popup Logic (Adjusted Positioning) ---
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
     let transform = 'translateX(10px)'; // Default to right

     // Check available space to the right of the card relative to the section
     const spaceRightOfCardInSection = sectionRect.right - rect.right;

     if (spaceRightOfCardInSection >= popupWidth + gap) {
       // Enough space on the right, position to the right
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
         key={currentCourse.id} // Use course ID as key to re-trigger animation when navigating between detail pages
      >
        {relatedCourses.map(course => (
          <motion.div
             key={course.id}
             variants={itemVariants}
             layout // Maintain layout animations
          >
            <CourseCard
              course={course}
              // Pass hover handlers
              onMouseEnter={handleMouseEnterCard}
              onMouseLeave={handleMouseLeave}
              onClick={handleNavigateToCourse} // Pass navigation handler
            />
          </motion.div>
        ))}
      </motion.div>

       {/* Render the Hover Popup - Positioned ABSOLUTELY relative to this section */}
       {/* Ensure activeCourseData exists for popup content */}
       {activeCourseData && popupPosition && isLargeScreen && (
         // This div acts as the positioned container for the popup content
         <div
            style={{
                position: 'absolute', // Use absolute positioning relative to the parent section
                top: `${popupPosition.top}px`, // Use top relative to section's top
                left: `${popupPosition.left}px`, // Use left relative to section's left
                transform: popupPosition.transform, // Apply the calculated transform
                zIndex: 50, // Ensure it's above other content
            }}
            // Attach mouse events to this wrapper div
            onMouseEnter={handleMouseEnterPopup}
            onMouseLeave={handleMouseLeavePopup}
         >
            {/* The HoverPopup content itself */}
            <HoverPopup
              course={activeCourseData}
              // No need to pass position prop or mouse handlers to HoverPopup itself
            />
         </div>
       )}

    </div>
  );
}

export default RelatedCoursesSection;