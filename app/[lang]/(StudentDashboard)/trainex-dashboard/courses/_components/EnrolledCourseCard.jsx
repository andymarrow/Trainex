import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Import icons
import { HiOutlinePlay, HiOutlineCheckCircle, HiOutlineSparkles, HiOutlineAcademicCap, HiOutlineClock } from 'react-icons/hi';

function EnrolledCourseCard({ courseEnrollment, courseDetails }) {
  const {
    id,
    title = 'Unknown Course',
    thumbnail = '/images/placeholder.jpg',
    instructor = 'Unknown Instructor',
    level = 'N/A', // Include level from blueprint
    hoursSpent = 'N/A', // Include estimated hours from blueprint
  } = courseDetails;

  const progress = courseEnrollment.courseProgressPercentage || 0;
  const isComplete = courseEnrollment.isCourseComplete || false;

  // Determine progress bar color
  const progressBarColor = isComplete
    ? 'bg-green-500' // Green for completed
    : 'bg-gradient-to-r from-blue-500 to-cyan-500'; // Accent gradient for in-progress

  // Determine card highlight for completed courses
  // Keeping left border for consistent highlight style, but can adjust if needed
  const cardHighlightClass = isComplete
    ? 'border-l-4 border-green-500' // Green border on the left for completed
    : 'border-l-4 border-transparent'; // No border for others

  // Determine CTA button text and icon based on progress status
  let buttonText = 'Start Course';
  let buttonIcon = <HiOutlinePlay className="text-lg" />;
  let buttonClasses = 'bg-blue-600 hover:bg-blue-700 text-white'; // Default start button style
  let buttonLink = `/trainex-learn/${id}`; // Link to the learning page

  if (isComplete) {
    buttonText = 'Finished';
    buttonIcon = <HiOutlineSparkles className="text-lg" />; // Confetti icon for finished
    buttonClasses = 'bg-green-600 hover:bg-green-700 text-white'; // Green style for finished button
  } else if (progress > 0) {
    buttonText = 'Continue Learning';
    buttonIcon = <HiOutlinePlay className="text-lg" />; // Play icon for continue
     buttonClasses = 'bg-blue-600 hover:bg-blue-700 text-white'; // Blue style for continue button
  }
  // If progress is 0 and not complete, use the 'Start Course' defaults

   // Animation variants for the card
   const cardVariants = {
     hidden: { opacity: 0, x: -20 },
     visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
   };


  return (
    <motion.div
      // Changed from md:flex-row to flex-col to stack elements always
      // Removed md:flex-shrink-0 from image container
      className={`flex flex-col bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-all duration-300 ease-in-out hover:shadow-lg ${cardHighlightClass}`} // Add highlight class
       variants={cardVariants}
       whileHover={{ y: -5 }} // Lift slightly on hover
    >
       {/* Link wraps the whole card for clickability */}
       <Link href={buttonLink} className="flex flex-col w-full group"> {/* Add group for hover effects on children */}

          {/* Course Thumbnail */}
          {/* Changed width/height classes for consistent column layout image */}
          {/* Removed md:w-48 and md:h-auto */}
          <div className="w-full h-48 overflow-hidden relative"> {/* Image container takes full width, fixed height */}
             <Image
               src={thumbnail}
               alt={title}
               fill // Use fill for better responsiveness with parent container sizing
               sizes="(max-width: 768px) 100vw, 33vw" // Adjust sizes attribute as needed for your grid layout
               className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105" // Apply group-hover scale
             />
          </div>

          {/* Course Details and Actions Container - Remains below the image */}
          {/* Changed from flex-grow p-4 flex flex-col justify-between min-w-0 to just p-4 and min-w-0 */}
          {/* Let the content itself structure vertically with margins/padding */}
          <div className="p-4 flex-grow flex flex-col justify-between min-w-0"> {/* min-w-0 for responsiveness */}
             <div>
               {/* Course Title */}
               {/* Keeping truncate for long titles */}
               <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2 truncate">{title}</h3>
               {/* Instructor */}
               <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{instructor}</p>

               {/* Important Info Icons/Badges */}
               {/* Added bottom margin for spacing */}
               <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-700 dark:text-gray-300 mb-4">
                  {/* Level */}
                  <span className="flex items-center">
                     <HiOutlineAcademicCap className="mr-1 text-blue-500 dark:text-cyan-400" />
                     {level}
                  </span>
                  {/* Estimated Hours */}
                  <span className="flex items-center">
                     <HiOutlineClock className="mr-1 text-blue-500 dark:text-cyan-400" />
                     {hoursSpent} hrs
                  </span>
                  {/* Completion Status Badge - Optional */}
                  {isComplete && (
                      <span className="flex items-center px-2 py-0.5 bg-green-100 text-green-800 text-xs font-medium rounded-full dark:bg-green-900 dark:text-green-200">
                         <HiOutlineCheckCircle className="mr-1 text-green-600 dark:text-green-400" />
                         Completed
                      </span>
                   )}
               </div>

               {/* Progress Section */}
               {/* Added bottom margin for spacing */}
               <div className="mb-4">
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Progress:</p>
                  {/* Progress Bar */}
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                     <div
                       className={`h-2.5 rounded-full ${progressBarColor}`}
                       style={{ width: `${progress}%` }}
                       role="progressbar"
                       aria-valuenow={progress}
                       aria-valuemin="0"
                       aria-valuemax="100"
                       aria-label={`Progress: ${progress}%`}
                     ></div>
                   </div>
                   {/* Progress Percentage Text */}
                   {/* Changed alignment to left/start for consistency in this layout */}
                  <p className="text-xs font-medium text-left text-gray-600 dark:text-gray-300 mt-1">{progress}% Complete</p>
               </div>


             </div>

             {/* CTA Button - This will be at the bottom of the details section */}
             {/* No mt-4 needed if it's the last element in the flex column div */}
             {/* Removed md:w-auto to make button full width in column layout */}
             <motion.button
               className={`flex items-center justify-center px-6 py-2.5 rounded-md text-lg font-semibold transition-colors duration-200 ease-in-out w-full ${buttonClasses}`} // Button is now always full width
               whileHover={{ scale: 1.02 }} // Subtle hover effect on button (less scale than before)
               whileTap={{ scale: 0.98 }} // Subtle press effect
             >
               {buttonIcon}
               <span className="ml-2">{buttonText}</span>
             </motion.button>
          </div>
       </Link>
    </motion.div>
  );
}

export default EnrolledCourseCard;