// components/CourseCard.js
"use client"

import React, { useRef } from 'react';
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';

// Add 'onClick' to the props
function CourseCard({ course, onMouseEnter, onMouseLeave, onClick }) {
  const cardRef = useRef(null);

  const {
    id,
    title,
    instructor,
    rating,
    reviews,
    currentPrice,
    originalPrice,
    thumbnail,
    isBestseller,
  } = course;

  const renderStars = (rating) => {
    const filledStars = Math.round(rating);
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < filledStars) {
        stars.push(<FaStar key={i} className="text-yellow-500 dark:text-yellow-400 w-4 h-4" />);
      } else {
        stars.push(<FaStar key={i} className="text-gray-300 dark:text-gray-600 w-4 h-4" />);
      }
    }
    return stars;
  };

  // When mouse enters, call parent handler and pass the card element
  const handleMouseEnter = () => {
    if (onMouseEnter && cardRef.current) {
      onMouseEnter(course, cardRef.current);
    }
  };

  // When mouse leaves, call parent handler
  const handleMouseLeave = () => {
    if (onMouseLeave) {
      onMouseLeave();
    }
  };

  // Handle click on the card
  const handleCardClick = () => {
      if (onClick) {
          onClick(course.id); // Call the passed-down onClick handler with the course ID
      }
      // Optional: Clear hover state immediately on click
      // if (onMouseLeave) {
      //     onMouseLeave();
      // }
  };


  return (
  <div
      ref={cardRef}
      className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden
                 shadow-sm hover:shadow-lg dark:shadow-none dark:hover:shadow-lg
                 transition-all duration-200 ease-in-out
                 flex flex-col bg-white dark:bg-gray-800
                 hover:-translate-y-1 focus:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-cyan-400 focus:ring-opacity-50 cursor-pointer" // Added cursor-pointer
      onMouseEnter={handleMouseEnter} // Attach handlers
      onMouseLeave={handleMouseLeave}
      onClick={handleCardClick} // Attach click handler
      role="button" // Indicate that this div is interactive for accessibility
      tabIndex="0" // Make it focusable for keyboard navigation
    >
      {/* Course Thumbnail */}
      <div className="relative w-full h-48 sm:h-56 md:h-48 lg:h-56 overflow-hidden">
        <Image
          src={thumbnail}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 hover:scale-105"
        />
         {/* Bestseller Badge */}
        {isBestseller && (
          <span className="absolute top-2 left-2 bg-yellow-400 dark:bg-yellow-500 text-gray-800 dark:text-gray-100 text-xs font-bold px-2 py-0.5 rounded-full z-10 shadow-md">
            Bestseller
          </span>
        )}
      </div>

      {/* Course Details */}
      <div className="p-4 flex-grow flex flex-col">
        <h3 className="font-semibold text-lg text-gray-800 dark:text-white mb-2 line-clamp-2">
          {title}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-1">
          {instructor}
        </p>

        {/* Rating and Reviews */}
        <div className="flex items-center text-sm text-gray-700 dark:text-gray-300 mb-3">
          <div className="flex items-center mr-2">
             {renderStars(rating)}
          </div>
          <span className="font-bold text-yellow-600 dark:text-yellow-400 mr-1">{rating.toFixed(1)}</span>
          <span className="text-xs text-gray-500 dark:text-gray-400">({reviews.toLocaleString()})</span>
        </div>

        {/* Price */}
        <div className="flex items-center mt-auto">
          <span className="font-bold text-lg text-gray-900 dark:text-white mr-3">${currentPrice.toFixed(2)}</span>
          {originalPrice > currentPrice && (
            <span className="text-sm text-gray-500 dark:text-gray-400 line-through">${originalPrice.toFixed(2)}</span>
          )}
        </div>
      </div>
    </div>
  );
}

export default CourseCard;