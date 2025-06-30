// app/(StudentDashboard)/trainex-dashboard/_components/courses/EnrolledCoursesList.jsx
import React from 'react';
import { motion } from 'framer-motion';

// Import the individual course card component
import EnrolledCourseCard from './EnrolledCourseCard'; // We'll create this next


function EnrolledCoursesList({ courses }) {
  // Animation variants for the list container
   const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Stagger children animations
        delayChildren: 0.2 // Optional delay after parent animates
      },
    },
  };

  return (
    <motion.div
      // Changed from space-y-6 to a responsive grid layout
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" // 1 column on small, 2 on medium, 3 on large, with 6 units of gap
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {courses.length > 0 ? (
        courses.map(({ courseEnrollment, courseDetails }) => (
          <EnrolledCourseCard
            key={courseDetails.id} // Use course ID as key
            courseEnrollment={courseEnrollment}
            courseDetails={courseDetails}
          />
        ))
      ) : (
         // This text might need adjustment to fit within the grid context,
         // or you could conditionally render a full-width message outside the grid motion div
         <div className="col-span-full text-center text-gray-600 dark:text-gray-400 text-lg">
            <p>You are not currently enrolled in any courses.</p>
         </div>
      )}
    </motion.div>
  );
}

export default EnrolledCoursesList;