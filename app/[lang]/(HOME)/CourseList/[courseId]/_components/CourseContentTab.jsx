import React from 'react';
import SectionAccordion from './SectionAccordion'; 

function CourseContentTab({ course }) {
  if (!course || !course.sections || course.sections.length === 0) {
    return (
        <div className="text-gray-600 dark:text-gray-400">
            Course content outline not available.
        </div>
    );
  }

  return (
    <div className="space-y-4">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Course Content</h3>
        {course.sections.map((section, index) => (
            <SectionAccordion key={index} section={section} />
        ))}
    </div>
  );
}

export default CourseContentTab;