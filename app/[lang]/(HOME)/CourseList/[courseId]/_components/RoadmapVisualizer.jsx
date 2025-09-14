import React from 'react';
import { FaChevronRight } from 'react-icons/fa';

function RoadmapVisualizer({ steps }) {
  if (!steps || steps.length === 0) return null;

  return (
    <div className="relative flex flex-col items-center py-6">
     
      {steps.map((step, index) => (
        <div
          key={index}
          className={`flex flex-col sm:flex-row items-center w-full mb-8 ${index % 2 === 0 ? 'sm:flex-row-reverse' : ''}`}
        >
          {/* Step Number / Icon */}
          <div className={`w-12 h-12 rounded-full bg-blue-600 dark:bg-cyan-600 text-white flex items-center justify-center font-bold z-10 text-lg flex-shrink-0 ${index % 2 === 0 ? 'sm:ml-6' : 'sm:mr-6'}`}>
            {index + 1}
          </div>

          {/* Step Content */}
          <div className="flex-1 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4 mt-4 sm:mt-0 text-center sm:text-left">
            <p className="text-gray-800 dark:text-white">{step}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RoadmapVisualizer;