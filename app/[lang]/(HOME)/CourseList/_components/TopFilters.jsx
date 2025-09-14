// app/courselist/_components/TopFilters.js
"use client";
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaSort } from 'react-icons/fa';

function TopFilters({ categories, selectedCategory, onCategorySelect, sortOptions, selectedSort, onSortChange, totalCourses }) {
    const [showSortDropdown, setShowSortDropdown] = useState(false);
    const [isLargeScreen, setIsLargeScreen] = useState(false);
    const sortButtonRef = React.useRef(null); // Ref for dropdown positioning

    // Find the label for the currently selected sort option
    const currentSortLabel = sortOptions.find(opt => opt.value === selectedSort)?.label || 'Sort By';

    // Click outside handler for dropdown
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (sortButtonRef.current && !sortButtonRef.current.contains(event.target)) {
                setShowSortDropdown(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [sortButtonRef]);

    // Effect to track screen size for responsive layout and popup display
    useEffect(() => {
        const handleResize = () => {
            const isLarge = window.innerWidth >= 1024; // Tailwind 'lg' breakpoint
            setIsLargeScreen(isLarge);
        };

        handleResize(); // Set initial state
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
            // Removed popupTimerRef cleanup as it wasn't used in the provided snippet
        };
    }, []); // Depend on [] so it runs once on mount and cleans up on unmount

    return (
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
            {/* Course Count */}
              

                <div className="flex-shrink-0 mb-4 md:mb-0">
                    <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300">
                        Showing <span className="text-blue-600 dark:text-cyan-400">{totalCourses}</span> Course{totalCourses !== 1 ? 's' : ''}
                    </h3>
                </div>
                

          

            {/* Categories (Horizontal Scroll on Small Screens) */}
            {/* Added pr-4 (padding-right) to the container for the "sliver" effect */}
         
              {/*  <div className="flex overflow-x-auto max-w-full hide-scrollbar py-2 md:py-0 pr-4 space-x-3"> 
                    {categories.map(category => (
                        <motion.button
                            key={category}
                            onClick={() => onCategorySelect(category)}
                            className={`flex-shrink-0 mr-3 last:mr-0 px-5 py-2 rounded-full text-sm font-semibold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 dark:focus:ring-cyan-400 whitespace-nowrap
                                       ${selectedCategory === category
                                        ? 'bg-blue-600 text-white dark:bg-cyan-600 dark:text-gray-100 shadow-md'
                                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
                                        }`}
                            whileTap={{ scale: 0.95 }}
                        >
                            {category}
                        </motion.button>
                    ))}
                </div>
           

              {/* Sort Dropdown */}
                <div className="relative flex-shrink-0 z-10" ref={sortButtonRef}> {/* Added z-index */}
                    <button
                        onClick={() => setShowSortDropdown(!showSortDropdown)}
                        className="flex items-center px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 dark:focus:ring-cyan-400 text-sm"
                    >
                        <FaSort className="mr-2" />
                        {currentSortLabel}
                        <FaChevronDown className={`ml-2 transition-transform ${showSortDropdown ? 'rotate-180' : 'rotate-0'}`} />
                    </button>

                    <AnimatePresence>
                        {showSortDropdown && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 10 }}
                                transition={{ duration: 0.2 }}
                                className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 ring-1 ring-black ring-opacity-5 focus:outline-none"
                            >
                                {sortOptions.map(option => (
                                    <button
                                        key={option.value}
                                        onClick={() => { onSortChange(option.value); setShowSortDropdown(false); }}
                                        className={`block w-full text-left px-4 py-2 text-sm ${
                                            selectedSort === option.value
                                                ? 'bg-blue-100 text-blue-800 dark:bg-cyan-900 dark:text-cyan-200 font-semibold'
                                                : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'
                                        }`}
                                    >
                                        {option.label}
                                    </button>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

        </div>
    );
}

export default TopFilters;