import React from 'react';
import { FaFilter } from 'react-icons/fa';

function BlogFilters({ selectedCategory, onFilterChange, categories }) {
  return (
    <div className="relative">
      <select
        value={selectedCategory}
        onChange={(e) => onFilterChange(e.target.value)}
        className="block w-full px-4 py-2 pl-8 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white dark:focus:ring-cyan-500 transition-colors pr-8" // Added pr-8 for arrow space
      >
        <option value="">All Categories</option>
        {categories.map(category => (
          <option key={category} value={category}>{category}</option>
        ))}
      </select>
       <FaFilter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 pointer-events-none" /> {/* Icon */}
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 dark:text-gray-300">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div> {/* Custom arrow */}
    </div>
  );
}

export default BlogFilters;