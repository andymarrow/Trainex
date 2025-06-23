"use client";

import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

// Import your components (Adjust paths if necessary)
import CourseCard from '../_components/CourseCard'; // Corrected path assuming /components at root
import HoverPopup from '../_components/HoverPopup'; // Corrected path assuming /components at root


import { sampleCourses } from '@/lib/constants';
import { FaFilter, FaTimes, FaChevronDown, FaBookOpen, FaSort } from 'react-icons/fa';

// Import the new filter/pagination components
import FilterSidebar from './_components/FilterSidebar';
import TopFilters from './_components/TopFilters';
import Pagination from './_components/Pagination';


const ITEMS_PER_PAGE = 12;

// Helper function to simulate getting unique filter values (e.g., levels, instructors)
const getUniqueFilterValues = (courses, key) => {
  const values = courses
    .map(course => course[key])
    .filter(value => value !== undefined && value !== null);

  const flattenedValues = values.reduce((acc, val) => {
      if (Array.isArray(val)) {
          return acc.concat(val);
      }
      return acc.concat(val);
  }, []);

  return Array.from(new Set(flattenedValues)).filter(Boolean).sort();
};


function CourseListPage() {
  const router = useRouter();

  // --- State Management ---
  const [filters, setFilters] = useState({
    category: 'All Categories',
    level: 'All Levels',
    price: 'All Prices',
    rating: 0,
  });
  const [sortBy, setSortBy] = useState('default');

  const [currentPage, setCurrentPage] = useState(1);

  // State for hover popup
  const [hoveredCourse, setHoveredCourse] = useState(null);
  // popupPosition now stores { top, left, transform } relative to section
  const [popupPosition, setPopupPosition] = useState(null);
  const popupTimerRef = useRef(null);
  const sectionRef = useRef(null); // Ref for the main section, needed for absolute positioning context

  // State for responsive layout
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [showLeftFilter, setShowLeftFilter] = useState(false);

  // --- Data Processing: Filtering, Sorting, Pagination ---

  const uniqueCategories = getUniqueFilterValues(sampleCourses, 'category');
  const categories = ['All Categories', ...uniqueCategories];

  const uniqueLevels = getUniqueFilterValues(sampleCourses, 'level');
  const levels = ['All Levels', ...uniqueLevels];

  const priceOptions = [
      'All Prices',
      'Free',
      'Paid',
  ];

  const sortOptions = [
    { value: 'default', label: 'Default (Recommended)' },
    { value: 'price-asc', label: 'Price: Low to High' },
    { value: 'price-desc', label: 'Price: High to Low' },
    { value: 'rating-desc', label: 'Rating: High to Low' },
    { value: 'rating-asc', label: 'Rating: Low to High' },
  ];


  // Filter courses based on current filters state
  const filteredCourses = sampleCourses.filter(course => {
    const { category, level, price, rating } = filters;

    if (category !== 'All Categories' && course.category !== category) {
      return false;
    }
    if (level !== 'All Levels' && course.level !== level) {
       return false;
    }
    if (price === 'Free' && course.currentPrice > 0) {
       return false;
    }
    if (price === 'Paid' && course.currentPrice === 0) {
        return false;
    }
    if (course.rating < rating) {
        return false;
    }

    return true;
  });

  // Sort filtered courses
  const sortedCourses = [...filteredCourses].sort((a, b) => {
    switch (sortBy) {
      case 'price-asc': return a.currentPrice - b.currentPrice;
      case 'price-desc': return b.currentPrice - a.currentPrice;
      case 'rating-desc': return b.rating - a.rating;
      case 'rating-asc': return a.rating - b.rating;
      case 'default': return 0;
      default: return 0;
    }
  });

  // Pagination: Calculate total pages and slice the sorted data
  const totalCourses = sortedCourses.length;
  const totalPages = Math.ceil(totalCourses / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const coursesForCurrentPage = sortedCourses.slice(startIndex, endIndex);


  // --- Effects and Handlers ---

  // Effect to track screen size for responsive layout and popup display
  useEffect(() => {
    const handleResize = () => {
      const isLarge = window.innerWidth >= 1024; // Tailwind 'lg' breakpoint
      setIsLargeScreen(isLarge);
      // If resizing to large screen while sidebar is open, close it
      if (isLarge && showLeftFilter) {
         setShowLeftFilter(false);
      }
    };

    handleResize(); // Set initial state
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      if (popupTimerRef.current) {
        clearTimeout(popupTimerRef.current);
      }
    };
  }, [showLeftFilter]);

  // Effect to reset page and clear hover state when filters or sort order changes
  useEffect(() => {
    setCurrentPage(1);
    setHoveredCourse(null);
    setPopupPosition(null);
    if (popupTimerRef.current) {
      clearTimeout(popupTimerRef.current);
    }
  }, [filters, sortBy]);


  const handleFilterChange = (filterType, value) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      [filterType]: value,
    }));
    // Close the sidebar on medium/small screens after selecting a filter
    if (!isLargeScreen) {
        setShowLeftFilter(false);
    }
  };

  const handleSortChange = (value) => {
    setSortBy(value);
  };

  // --- Navigation Handler ---
  const handleNavigateToCourse = (courseId) => {
    // Clear hover state before navigating
    setHoveredCourse(null);
    setPopupPosition(null);
    if (popupTimerRef.current) {
        clearTimeout(popupTimerRef.current);
    }
    router.push(`/CourseList/${courseId}`); // Using lowercase 'CourseList'
  };
  // --- End Navigation Handler ---


  // --- Hover Popup Logic (Adjusted Positioning) ---
  const handleMouseEnterCard = (course, cardElement) => {
    if (!isLargeScreen) return; // Only show popup on large screens

    const rect = cardElement.getBoundingClientRect();
    const sectionRect = sectionRef.current ? sectionRef.current.getBoundingClientRect() : { top: 0, left: 0 }; // Get section position

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
     // Let's just ensure it doesn't go off top for simplicity here.


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
     if (!isLargeScreen || !hoveredCourse) return;

     if (popupTimerRef.current) {
        clearTimeout(popupTimerRef.current);
     }
  };

  const handleMouseLeavePopup = handleMouseLeave;
  // --- End Hover Popup Logic ---

  const activeCourseData = sampleCourses.find(c => c.id === hoveredCourse?.id);


  // Framer Motion Variants for Grid Items
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  // Variants for the Filter Sidebar overlay animation
  const sidebarVariants = {
      hidden: { x: '-100%' },
      visible: { x: '0%', transition: { duration: 0.3, ease: 'easeOut' } },
      exit: { x: '-100%', transition: { duration: 0.3, ease: 'easeIn' } },
  };


  return (
    // section has position: relative
    <section className="py-12 bg-gray-50 dark:bg-transparent min-h-screen relative" ref={sectionRef}>

      {/* Mobile/Medium Filter Toggle Button (Visible below lg breakpoint) */}
      {!isLargeScreen && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 flex justify-between items-center lg:hidden">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white">All Courses</h2>
              <button
                  onClick={() => setShowLeftFilter(true)}
                  className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 dark:bg-cyan-600 dark:hover:bg-cyan-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 dark:focus:ring-cyan-400 text-sm"
                  aria-label="Show Filters"
              >
                  <FaFilter className="mr-2" />
                  Filters
              </button>
          </div>
      )}


      {/* Main Layout Container: Sidebar + Main Content */}
      <div className="flex flex-col lg:flex-row gap-8">

        {/* Left Filter Sidebar (Conditional visibility and overlay below lg) */}
         <AnimatePresence>
            {(isLargeScreen || showLeftFilter) && (
                <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={sidebarVariants}
                    className={`
                        fixed inset-0 z-50 bg-white dark:bg-gray-900 overflow-y-auto p-6 flex flex-col
                        lg:static lg:inset-auto lg:z-auto lg:w-1/4 xl:w-1/5 lg:flex-shrink-0 lg:transform-none lg:overflow-y-visible lg:pl-10 lg:bg-transparent lg:dark:bg-transparent lg:flex
                        transition-transform duration-300 ease-in-out
                        ${!isLargeScreen && showLeftFilter ? 'translate-x-0' : '-translate-x-full'}
                        lg:border-r lg:border-gray-200 dark:lg:border-gray-700
                    `}
                >
                     <FilterSidebar
                        filters={filters}
                        onFilterChange={handleFilterChange}
                        categories={categories}
                        levels={levels}
                        priceOptions={priceOptions}
                        onClose={() => setShowLeftFilter(false)}
                    />
                </motion.div>
            )}
        </AnimatePresence>

         {/* Backdrop for mobile/medium filter sidebar */}
        <AnimatePresence>
            {!isLargeScreen && showLeftFilter && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.5 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black z-40"
                    onClick={() => setShowLeftFilter(false)} // Close sidebar when clicking backdrop
                />
            )}
        </AnimatePresence>


        {/* Main Content Area (Top Filters, Course Grid, Pagination) */}
        <div className="flex-1">
           <div className=" px-4 sm:px-6 lg:px-8">

              {/* Top Filter/Sort Area (Visible on large screens) */}
              {/* Use responsive display classes: hidden below md, flex from md up */}
               <div className=" mb-8 hidden lg:flex flex-col md:flex-row md:items-center justify-between gap-4"> {/* Corrected md:flex from md:flex */}
                   <TopFilters
                       categories={categories}
                       selectedCategory={filters.category}
                       onCategorySelect={(category) => handleFilterChange('category', category)}
                       sortOptions={sortOptions}
                       selectedSort={sortBy}
                       onSortChange={handleSortChange}
                       totalCourses={totalCourses}
                   />
               </div>


              {/* Course Grid */}
               {totalCourses > 0 ? (
                    <motion.div
                      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 md:gap-6 lg:gap-8 mb-12"
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      {coursesForCurrentPage.map(course => (
                        <motion.div
                          key={course.id}
                          variants={itemVariants}
                          layout
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
                ) : (
                     // No Results Message
                     <motion.div
                         initial={{ opacity: 0, y: 20 }}
                         animate={{ opacity: 1, y: 0 }}
                         className="flex justify-center items-center w-full text-center text-gray-600 dark:text-gray-400 text-lg min-h-[300px]"
                     >
                       <p>No courses found matching your criteria.</p>
                     </motion.div>
                )}


              {/* Pagination */}
               {totalPages > 1 && (
                  <Pagination
                     currentPage={currentPage}
                     totalPages={totalPages}
                     onPageChange={setCurrentPage}
                  />
               )}

           </div>

        </div>


        {/* Render the Hover Popup - Positioned ABSOLUTELY relative to the parent section */}
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

export default CourseListPage;