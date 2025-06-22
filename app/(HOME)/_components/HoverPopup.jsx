// _components/HoverPopup.js

import React from 'react';
import Link from 'next/link';
import { FaCheckCircle, FaHeart } from 'react-icons/fa'; // Make sure FaHeart is imported

function HoverPopup({ course, position, onMouseEnter, onMouseLeave }) {
  if (!course || !position) return null; // Don't render if no course or position data

  const {
    id,
    title,
    description, // Use the description array
    currentPrice,
    originalPrice,
    isBestseller,
  } = course;

  // Inline style for positioning the popup
  const popupStyle = {
    position: 'absolute',
    top: `${position.top}px`,
    // Calculate left position to appear to the right of the card
    left: `${position.left}px`,
    width: '300px', // Keep a fixed width for the popup
    zIndex: 50,
    transform: 'translateX(10px)', // Add a small gap between card and popup
    // TODO: Add logic here to position left instead of right if near the right edge
    // Example (simplified - requires window width and popup width measurement):
    // const isNearRightEdge = (position.right + 300 + 10) > window.innerWidth; // 300 is popup width, 10 is gap
    // left: isNearRightEdge ? `${position.left - 300 - 10}px` : `${position.left}px`,
    // transform: isNearRightEdge ? 'translateX(-10px)' : 'translateX(10px)',
  };


  return (
    <div
      style={popupStyle}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 p-4 transition-opacity duration-200 opacity-100"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* Title */}
      <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2 line-clamp-2">
        {title}
      </h3>

      {/* Bestseller/Meta Info (Placeholder for now) */}
      <div className="text-xs text-gray-600 dark:text-gray-400 mb-3">
         {isBestseller && (
            <span className="inline-block bg-yellow-400 dark:bg-yellow-500 text-gray-800 dark:text-gray-100 text-xs font-bold px-1.5 py-0.5 rounded-full mr-2">
              Bestseller
            </span>
         )}
         {/* Add placeholder for 'Updated', 'Total Hours', 'Levels', 'Subtitles' if available */}
         {/* <span className="inline-block">Updated February 2025</span> */}
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
      <div className="flex items-center gap-2"> {/* Adjusted gap slightly for three items */}
        {/* Add to Cart Button */}
        {/* Use flex-grow to make Add to Cart and Learn More share available space */}
        <button className="flex-grow bg-blue-600 dark:bg-cyan-600 text-white font-semibold px-4 py-2 rounded-md hover:bg-blue-700 dark:hover:bg-cyan-700 transition-colors text-sm text-center">
          Add to Cart
        </button>

     

        {/* Wishlist/Like Button */}
        {/* This button is fixed size, doesn't grow with flex-grow */}
        <button
          className="p-2 border rounded-full text-gray-600 hover:text-red-500 transition-colors
                     dark:border-gray-600 dark:text-gray-400 dark:hover:text-red-400
                     hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-cyan-400 focus:ring-opacity-50"
           // TODO: Add actual like/wishlist logic here
           onClick={() => { console.log(`Liked course: ${title}`); /* Add your state update or API call */ }}
           aria-label={`Add ${title} to wishlist`} // Accessibility label
        >
           <FaHeart className="h-5 w-5" /> {/* Use the Heart icon */}
        </button>
      </div>
    </div>
  );
}

export default HoverPopup;