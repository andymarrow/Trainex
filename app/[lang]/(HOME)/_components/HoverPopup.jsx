// components/HoverPopup.js
"use client";

import React from 'react';
import Link from 'next/link'; // Import Link
import { FaCheckCircle, FaHeart } from 'react-icons/fa';

// HoverPopup doesn't need position prop or mouse handlers anymore as parent handles positioning
function HoverPopup({ course }) { // Removed position, onMouseEnter, onMouseLeave props
  if (!course) return null;

  const {
    id,
    title,
    description,
    currentPrice,
    originalPrice,
    isBestseller,
  } = course;


  return (
    // This div is now the content *inside* the absolutely positioned wrapper in CourseListPage
    // It handles its own appearance styling (background, border, shadow, padding)
    // And potentially width/zIndex if not set on the parent wrapper
    <div
      className="bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 p-4 transition-opacity duration-200 opacity-100"
      // Mouse events are handled by the wrapper div in CourseListPage
      style={{ width: '300px' }} // Explicitly set width here for the popup content
    >
      {/* Title - Make it a Link for navigation */}
      <Link href={`/CourseList/${id}`} className="block focus:outline-none focus:underline">
          <h3 className="font-bold text-lg text-blue-600 hover:text-blue-700 dark:text-cyan-400 dark:hover:text-cyan-500 transition-colors mb-2 line-clamp-2">
              {title}
          </h3>
      </Link>


      {/* Bestseller/Meta Info */}
      <div className="text-xs text-gray-600 dark:text-gray-400 mb-3">
         {isBestseller && (
            <span className="inline-block bg-yellow-400 dark:bg-yellow-500 text-gray-800 dark:text-gray-100 text-xs font-bold px-1.5 py-0.5 rounded-full mr-2">
              Bestseller
            </span>
         )}
      </div>

      {/* Description Points */}
      <ul className="text-sm text-gray-700 dark:text-gray-300 mb-4 space-y-1">
        {description && description.map((point, index) => (
          <li key={index} className="flex items-start">
            <FaCheckCircle className="h-4 w-4 text-green-500 dark:text-green-400 mr-2 flex-shrink-0 mt-0.5" />
            <span>{point}</span>
          </li>
        ))}
      </ul>

      {/* Price */}
       <div className="flex items-center mb-4">
          <span className="font-bold text-xl text-gray-900 dark:text-white mr-3">${currentPrice.toFixed(2)}</span>
          {originalPrice > currentPrice && (
            <span className="text-sm text-gray-500 dark:text-gray-400 line-through">${originalPrice.toFixed(2)}</span>
          )}
        </div>


      {/* Buttons - Use flex and gap */}
      <div className="flex items-center gap-2 flex-shrink-0">
        {/* Add to Cart Button */}
        <button className="flex-grow bg-blue-600 dark:bg-cyan-600 text-white font-semibold px-4 py-2 rounded-md hover:bg-blue-700 dark:hover:bg-cyan-700 transition-colors text-sm text-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 dark:focus:ring-cyan-400">
          Add to Cart
        </button>

        {/* Learn More Button - Use Link for navigation */}
         <Link href={`/CourseList/${id}`} className="flex-grow">
            <button className="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 font-semibold px-4 py-2 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors text-sm text-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 dark:focus:ring-cyan-400">
                Learn More
            </button>
         </Link>

        {/* Wishlist/Like Button */}
        <button
          className="p-2 border rounded-full text-gray-600 hover:text-red-500 transition-colors
                     dark:border-gray-600 dark:text-gray-400 dark:hover:text-red-400
                     hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-cyan-400 focus:ring-opacity-50 flex-shrink-0"
           onClick={() => { console.log(`Liked course: ${title}`); /* Add your state update or API call */ }}
           aria-label={`Add ${title} to wishlist`}
        >
           <FaHeart className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}

export default HoverPopup;