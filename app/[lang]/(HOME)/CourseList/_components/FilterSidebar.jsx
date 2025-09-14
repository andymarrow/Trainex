// app/courselist/_components/FilterSidebar.js
import React from 'react';
import { motion } from 'framer-motion';
import { FaTimes, FaChevronDown, FaStar } from 'react-icons/fa'; // Import icons

function FilterSidebar({ filters, onFilterChange, categories, levels, priceOptions, onClose }) {

    const renderRatingStars = (minRating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <FaStar
                    key={i}
                    className={`w-4 h-4 inline-block transition-colors ${
                        i <= minRating ? 'text-yellow-500 dark:text-yellow-400' : 'text-gray-300 dark:text-gray-600'
                    }`}
                />
            );
        }
        return stars;
    };


  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex justify-between items-center mb-6 lg:hidden">
         <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Filters</h3>
         <button
             onClick={onClose}
             className="p-2 rounded-full text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
             aria-label="Close Filters"
         >
            <FaTimes className="h-5 w-5" />
         </button>
      </div>

      {/* Filter Section: Categories */}
      <div className="mb-6 pb-4 border-b border-gray-200 dark:border-gray-700">
          <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3 text-center">Category</h4>
          <div className="flex flex-col space-y-2">
              {categories.map(category => (
                  <button
                      key={category}
                      onClick={() => onFilterChange('category', category)}
                      className={`text-left px-3 py-2 rounded-md transition-colors
                                 ${filters.category === category
                                     ? 'bg-blue-100 text-blue-800 dark:bg-cyan-900 dark:text-cyan-200 font-semibold'
                                     : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'
                                 }`}
                  >
                      {category}
                  </button>
              ))}
          </div>
      </div>

       {/* Filter Section: Level */}
       {levels.length > 1 && ( // Only show if there's more than just "All Levels"
           <div className="mb-6 pb-4 border-b border-gray-200 dark:border-gray-700">
               <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3 text-center">Level</h4>
               <div className="flex flex-col space-y-2">
                   {levels.map(level => (
                       <button
                           key={level}
                           onClick={() => onFilterChange('level', level)}
                           className={`text-left px-3 py-2 rounded-md transition-colors
                                      ${filters.level === level
                                          ? 'bg-blue-100 text-blue-800 dark:bg-cyan-900 dark:text-cyan-200 font-semibold'
                                          : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'
                                      }`}
                       >
                           {level}
                       </button>
                   ))}
               </div>
           </div>
       )}


       {/* Filter Section: Price */}
        <div className="mb-6 pb-4 border-b border-gray-200 dark:border-gray-700">
            <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3 text-center">Price</h4>
            <div className="flex flex-col space-y-2">
                {priceOptions.map(priceOpt => (
                    <button
                        key={priceOpt}
                        onClick={() => onFilterChange('price', priceOpt)}
                        className={`text-left px-3 py-2 rounded-md transition-colors
                                   ${filters.price === priceOpt
                                       ? 'bg-blue-100 text-blue-800 dark:bg-cyan-900 dark:text-cyan-200 font-semibold'
                                       : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'
                                   }`}
                    >
                        {priceOpt}
                    </button>
                ))}
            </div>
        </div>

       {/* Filter Section: Rating */}
        <div className="mb-6 pb-4 border-b border-gray-200 dark:border-gray-700">
            <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">Minimum Rating</h4>
            <div className="flex flex-col space-y-2">
                {[0, 4, 4.5].map(minRating => ( // Example minimum ratings: Any, 4+, 4.5+
                    <button
                        key={minRating}
                        onClick={() => onFilterChange('rating', minRating)}
                        className={`text-left px-3 py-2 rounded-md transition-colors flex items-center
                                   ${filters.rating === minRating
                                       ? 'bg-blue-100 text-blue-800 dark:bg-cyan-900 dark:text-cyan-200 font-semibold'
                                       : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'
                                   }`}
                    >
                         {minRating === 0 ? (
                            'Any Rating'
                         ) : (
                             <>
                                {renderRatingStars(minRating === 4.5 ? 5 : minRating)}
                                 <span className="ml-2">{minRating}+</span>
                             </>
                         )}
                    </button>
                ))}
            </div>
        </div>

      {/* Add more filter sections here (e.g., Duration, Topics, Language) */}
      {/* Example:
        <div className="mb-6">
             <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">Duration</h4>
             ... duration filter options ...
        </div>
      */}

    </div>
  );
}

export default FilterSidebar;