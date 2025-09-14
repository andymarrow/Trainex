import React from 'react';
import InstructorCard from './InstructorCard';

function CourseInstructorTab({ instructor }) {
  if (!instructor) {
    return (
        <div className="text-gray-600 dark:text-gray-400">
            Instructor details not available.
        </div>
    );
  }

  return (
    <div>
       <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">About the Instructor</h3>
       <InstructorCard instructor={instructor} />
    </div>
  );
}

export default CourseInstructorTab;