"use client";

import React from 'react';
import { FaStar, FaUsers, FaHourglassHalf, FaMoneyBillWave, FaBookmark } from 'react-icons/fa'; 
import { motion } from 'framer-motion';

function CourseSummaryCard({ course }) {
  if (!course) return null;

  const {
    rating,
    reviews,
    currentPrice,
    originalPrice,
    hoursSpent, 
    level, 
  } = course;

  // Render rating stars (can reuse logic or component from CourseCard/DetailPage)
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

  // Example handler for buy/add to cart (implement the actual logic)
  const handleBuyNow = () => {
      console.log(`Buying course: ${course.title}`);
      // Implement the buy/checkout logic
  };

  const handleAddToCart = () => {
      console.log(`Adding course to cart: ${course.title}`);
      // Implement the add to cart logic
  };

  return (
    <div className="lg:sticky lg:top-24 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 p-6 w-full">

      {/* Price */}
      <div className="flex items-center mb-6 border-b border-gray-200 dark:border-gray-700 pb-4">
          <span className="font-bold text-3xl text-gray-900 dark:text-white mr-3">${currentPrice.toFixed(2)}</span>
          {originalPrice > currentPrice && (
            <span className="text-lg text-gray-500 dark:text-gray-400 line-through">${originalPrice.toFixed(2)}</span>
          )}
      </div>

      {/* Key Info List */}
      <div className="space-y-4 mb-6">
          <div className="flex items-center text-gray-700 dark:text-gray-300">
              <FaHourglassHalf className="mr-3 text-blue-600 dark:text-cyan-400 h-5 w-5 flex-shrink-0" />
              <span><span className="font-semibold">{hoursSpent} Total Hours</span> (Approx.)</span>
          </div>
           <div className="flex items-center text-gray-700 dark:text-gray-300">
              <FaStar className="mr-3 text-yellow-500 dark:text-yellow-400 h-5 w-5 flex-shrink-0" />
               <span className="font-semibold mr-1">{rating.toFixed(1)} Rating</span> ({reviews.toLocaleString()} reviews)
          </div>
           <div className="flex items-center text-gray-700 dark:text-gray-300">
              <FaMoneyBillWave className="mr-3 text-green-600 dark:text-green-400 h-5 w-5 flex-shrink-0" />
               <span>Price: <span className="font-semibold">{currentPrice === 0 ? 'Free' : 'Paid'}</span></span>
          </div>
           <div className="flex items-center text-gray-700 dark:text-gray-300">
              <FaUsers className="mr-3 text-purple-600 dark:text-purple-400 h-5 w-5 flex-shrink-0" />
               <span>Level: <span className="font-semibold">{level}</span></span>
          </div>
           <div className="flex items-center text-gray-700 dark:text-gray-300"><FaBookmark /> <span className='pl-2'>Certificate Included</span></div>
      </div>


      {/* Action Buttons */}
      <div className="flex flex-col space-y-4">
          <motion.button
              onClick={handleBuyNow}
               className="w-full px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold rounded-md transition-all duration-300 shadow-lg hover:shadow-xl text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 dark:focus:ring-cyan-400"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
          >
              Buy Now
          </motion.button>

           <motion.button
              onClick={handleAddToCart}
              className="w-full px-8 py-3 bg-gray-200 text-gray-800 font-semibold rounded-md hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 transition-colors text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 dark:focus:ring-cyan-400"
               whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
          >
              Add to Cart
          </motion.button>
      </div>
    </div>
  );
}

export default CourseSummaryCard;