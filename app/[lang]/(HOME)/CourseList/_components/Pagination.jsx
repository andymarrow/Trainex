// app/courselist/_components/Pagination.js
import React from 'react';
import { motion } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

function Pagination({ currentPage, totalPages, onPageChange }) {

  // Don't render if there's only one page
  if (totalPages <= 1) {
    return null;
  }

  // Function to generate the range of pages to display
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxPagesToShow = 5; // How many page numbers to display at once (including ellipsis potential)
    const boundaryPages = 1; // Pages always shown at the start and end

    if (totalPages <= maxPagesToShow) {
      // Show all pages if total pages are within limit
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      // Handle ellipsis
      const startEllipsis = currentPage > boundaryPages + 1;
      const endEllipsis = currentPage < totalPages - boundaryPages;

      // Add start pages
      for (let i = 1; i <= boundaryPages; i++) {
        pageNumbers.push(i);
      }

      // Add start ellipsis
      if (startEllipsis) {
        pageNumbers.push('...');
      }

      // Add pages around the current page
      const startPage = Math.max(boundaryPages + 1, currentPage - Math.floor((maxPagesToShow - 2 * boundaryPages - (startEllipsis ? 1 : 0) - (endEllipsis ? 1 : 0)) / 2));
      const endPage = Math.min(totalPages - boundaryPages, currentPage + Math.ceil((maxPagesToShow - 2 * boundaryPages - (startEllipsis ? 1 : 0) - (endEllipsis ? 1 : 0)) / 2));

      for (let i = startPage; i <= endPage; i++) {
          // Only add if not already added
          if (!pageNumbers.includes(i)) {
             pageNumbers.push(i);
          }
      }


       // Add end ellipsis
      if (endEllipsis) {
          // Only add if the last number added is not the one before the boundary pages
           if(pageNumbers[pageNumbers.length - 1] < totalPages - boundaryPages) {
               pageNumbers.push('...');
           }
      }


      // Add end pages
      for (let i = totalPages - boundaryPages + 1; i <= totalPages; i++) {
         if (!pageNumbers.includes(i)) {
            pageNumbers.push(i);
         }
      }

      // Filter out duplicates just in case the logic overlaps
      return Array.from(new Set(pageNumbers));

    }

     return pageNumbers;
  };


  const pageNumbers = getPageNumbers();

  return (
    <div className="flex justify-center items-center space-x-2 mt-8">
      {/* Previous Button */}
      <motion.button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`p-2 rounded-md transition-colors flex items-center justify-center
                   ${currentPage === 1
                       ? 'text-gray-400 dark:text-gray-600 cursor-not-allowed'
                       : 'text-blue-600 hover:bg-blue-100 dark:text-cyan-500 dark:hover:bg-gray-700'
                   }`}
        whileTap={{ scale: currentPage === 1 ? 1 : 0.95 }}
      >
        <FaChevronLeft className="w-4 h-4" />
        <span className="sr-only">Previous Page</span> {/* Accessibility */}
      </motion.button>

      {/* Page Numbers */}
      {pageNumbers.map((number, index) => (
        number === '...' ? (
          <span key={index} className="px-3 py-2 text-gray-600 dark:text-gray-400">...</span>
        ) : (
          <motion.button
            key={number}
            onClick={() => onPageChange(number)}
            className={`px-4 py-2 rounded-md text-sm font-semibold transition-colors
                       ${currentPage === number
                           ? 'bg-blue-600 text-white dark:bg-cyan-600 dark:text-gray-100'
                           : 'text-gray-700 hover:bg-blue-100 dark:text-gray-300 dark:hover:bg-gray-700'
                       }`}
             whileTap={{ scale: currentPage === number ? 1 : 0.95 }}
          >
            {number}
          </motion.button>
        )
      ))}

      {/* Next Button */}
      <motion.button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`p-2 rounded-md transition-colors flex items-center justify-center
                   ${currentPage === totalPages
                       ? 'text-gray-400 dark:text-gray-600 cursor-not-allowed'
                       : 'text-blue-600 hover:bg-blue-100 dark:text-cyan-500 dark:hover:bg-gray-700'
                   }`}
         whileTap={{ scale: currentPage === totalPages ? 1 : 0.95 }}
      >
        <FaChevronRight className="w-4 h-4" />
        <span className="sr-only">Next Page</span> {/* Accessibility */}
      </motion.button>
    </div>
  );
}

export default Pagination;