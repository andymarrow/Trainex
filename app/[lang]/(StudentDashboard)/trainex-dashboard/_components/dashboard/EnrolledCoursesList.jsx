import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Import sampleCourses blueprint
import { sampleCourses } from '@/lib/constants'; // Adjust path as needed

function EnrolledCourseCard({ courseEnrollment, courseDetails }) {
  // Animation variants for individual course cards
  const cardVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
  };

  // Fallback details if courseDetails is not found (shouldn't happen with correct IDs)
  const { title = 'Unknown Course', thumbnail = '/images/placeholder.jpg', instructor = 'Unknown Instructor' } = courseDetails || {};
  const progress = courseEnrollment.courseProgressPercentage || 0;

  // Determine progress bar color based on progress
  const progressBarColor = progress === 100
    ? 'bg-green-500' // Green for completed
    : 'bg-gradient-to-r from-blue-500 to-cyan-500'; // Accent gradient for in-progress

  return (
    <motion.div
      className="flex flex-col md:flex-row items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md transition-all duration-300 ease-in-out hover:shadow-lg"
      variants={cardVariants}
      whileHover={{ scale: 1.01 }} // Subtle hover effect
    >
      {/* Use Link component for navigation */}
      {/* Ensure the Link is the flex container for its contents */}
      <Link href={`/trainex-dashboard/courses/${courseEnrollment.courseId}`} className="flex items-center w-full">
        {/* Image container - ensure it doesn't shrink */}
        <div className="flex-shrink-0 mr-4">
          <Image
            src={thumbnail}
            alt={title}
            width={80}
            height={50}
            className="rounded-md object-cover"
          />
        </div>

        {/* Text and Progress container - allow it to grow but respect min-width */}
        {/* Added min-w-0 to ensure this flex item doesn't overflow its parent due to text */}
        <div className="flex-grow min-w-0">
          {/* Course Title - using truncate to cut off long titles with ellipsis */}
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 truncate">{title}</h3>
          {/* Instructor */}
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{instructor}</p>

          {/* Progress Bar Container */}
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
            {/* Progress Bar Fill */}
            <div
              className={`h-2.5 rounded-full ${progressBarColor}`}
              style={{ width: `${progress}%` }}
              role="progressbar" // ARIA role for accessibility
              aria-valuenow={progress}
              aria-valuemin="0"
              aria-valuemax="100"
              aria-label={`Progress: ${progress}%`}
            ></div>
          </div>
          {/* Progress Percentage Text */}
          <p className="text-xs font-medium text-right text-gray-600 dark:text-gray-300 mt-1">{progress}% Complete</p>
        </div>
      </Link>
    </motion.div>
  );
}

function EnrolledCoursesList({ enrolledCourses }) {
  // Animation variants for the container
   const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08, // Stagger children animations
      },
    },
  };

  // Combine enrolledCourses data with sampleCourses blueprint data
  const coursesWithDetails = enrolledCourses.map(enrollment => {
    const courseDetails = sampleCourses.find(course => course.id === enrollment.courseId);
    // Return combined data, handle case where courseDetails might not be found (though ideally they should exist)
    return {
      courseEnrollment: enrollment,
      // Pass the found course details or a default empty object to prevent errors
      courseDetails: courseDetails || {},
    };
  }).filter(item => item.courseDetails && Object.keys(item.courseDetails).length > 0); // Filter out entries where course details weren't found


  return (
    <motion.div
      className="mb-8"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Your Enrolled Courses</h2>
      <div className="space-y-4">
        {coursesWithDetails.length > 0 ? (
          coursesWithDetails.map(({ courseEnrollment, courseDetails }) => (
            <EnrolledCourseCard
              key={courseEnrollment.courseId} // Use courseId as key
              courseEnrollment={courseEnrollment}
              courseDetails={courseDetails}
            />
          ))
        ) : (
          <p className="text-gray-600 dark:text-gray-400">You haven't enrolled in any courses yet.</p>
        )}
      </div>
    </motion.div>
  );
}

export default EnrolledCoursesList;