import React from 'react';
import { FaSearch } from 'react-icons/fa';

function BlogSearch({ searchTerm, onSearchChange }) {
  return (
    <div className="relative flex-grow"> {/* flex-grow allows it to take space */}
      <input
        type="text"
        placeholder="Search posts..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white dark:focus:ring-cyan-500 transition-colors"
      />
      <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500" />
    </div>
  );
}

export default BlogSearch;