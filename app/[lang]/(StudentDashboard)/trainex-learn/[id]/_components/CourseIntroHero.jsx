// app/(StudentDashboard)/trainex-learn/[id]/_components/CourseIntroHero.jsx
'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
// Import more icons for visual interest
import {
  HiOutlinePlay,
  HiOutlineCheckCircle,
  HiOutlineSparkles,
  HiOutlineAcademicCap, // For level
  HiOutlineClock, // For hours
  HiOutlineChatAlt2, // For chat
  HiOutlineDocumentText, // For notebook/notes
  HiOutlineUserGroup, // For target audience
  HiOutlineClipboardList, // For roadmap
  HiOutlineBadgeCheck // For outcomes
} from 'react-icons/hi';

function CourseIntroHero({ courseDetails, enrollmentData }) {
  // Handle cases where courseDetails or enrollmentData are missing
  if (!courseDetails || !enrollmentData) {
    // You might want to render an error or loading state here
    return (
      <div className="text-center text-gray-600 dark:text-gray-400 min-h-screen flex items-center justify-center">
        Loading course details or enrollment data...
      </div>
    );
  }

  const {
    id,
    title,
    description,
    thumbnail,
    instructor,
    courseOutcomes,
    roadmap,
    level, // Added level
    hoursSpent, // Added hoursSpent
    hasChat, // Added hasChat
    hasNotebook, // Added hasNotebook
    targetAudience // Added targetAudience
  } = courseDetails;

  const { courseProgressPercentage = 0, isCourseComplete = false } = enrollmentData;

  // Determine CTA button state and text
  let buttonText = 'Start Course';
  let buttonIcon = <HiOutlinePlay className="text-xl" />;
  let buttonClasses = 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:from-blue-600 hover:to-cyan-600'; // Using gradient button
  let buttonLink = `/trainex-learn/${id}/learn`; // Link to the actual learning page

  if (isCourseComplete) {
    buttonText = 'Review Course'; // Or 'View Certificate'
    buttonIcon = <HiOutlineSparkles className="text-xl" />; // Sparkles for completed
    buttonClasses = 'bg-green-600 hover:bg-green-700 text-white'; // Green button for completed
    // Link might still go to the learn page to allow review
    buttonLink = `/trainex-learn/${id}/learn`;
  } else if (courseProgressPercentage > 0) {
    buttonText = 'Continue Learning';
    buttonIcon = <HiOutlinePlay className="text-xl" />;
    buttonClasses = 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:from-blue-600 hover:to-cyan-600'; // Gradient button
    buttonLink = `/trainex-learn/${id}/learn`; // Link to the last accessed spot ideally, but /learn is simpler for now
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.1 } }, // Stagger children
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className="relative min-h-screen pb-16" // Use relative and add padding bottom for potential footer/elements
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Background Gradient Overlay */}
      {/* This adds a subtle background to the whole page area */}
       <div className="absolute inset-0 bg-gradient-to-br from-gray-50 dark:from-gray-900 to-gray-200 dark:to-gray-950 z-0"></div>

      {/* Hero Section with Diagonal Bottom Edge */}
      <motion.div
        className="relative w-full h-96 md:h-[500px] lg:h-[600px] overflow-hidden z-10" // Ensure it's above the background gradient
        variants={itemVariants}
      >
        {thumbnail && (
          <Image
            src={thumbnail}
            alt={title}
            fill
            sizes="100vw" // Image fills the container width
            className="object-cover object-center"
             priority // Priority for above-the-fold image
          />
        )}
        {/* Text Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center">
          <div className="container mx-auto px-4 md:px-6 lg:px-8 text-white">
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3 drop-shadow-lg max-w-3xl"
              variants={itemVariants} // Animate title
            >
              {title}
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-gray-200 drop-shadow max-w-3xl"
              variants={itemVariants} // Animate instructor
            >
              by {instructor}
            </motion.p>
             {/* Quick Course Stats Overlay */}
             <motion.div variants={itemVariants} className="mt-6 flex items-center gap-6 text-gray-300 text-sm md:text-base">
                 {level && (
                     <span className="flex items-center"><HiOutlineAcademicCap className="mr-1 text-blue-300 dark:text-cyan-300" /> {level}</span>
                 )}
                 {hoursSpent && (
                     <span className="flex items-center"><HiOutlineClock className="mr-1 text-blue-300 dark:text-cyan-300" /> ~{hoursSpent} total hours</span>
                 )}
             </motion.div>
          </div>
        </div>

      </motion.div>

      {/* Main Content Area */}
      <div className="relative z-20 container mx-auto px-4 md:px-6 lg:px-8 -mt-12 md:-mt-20"> {/* Negative margin pulls content up */}

         {/* CTA & Progress Card (Floats over the diagonal edge) */}
         <motion.div
            className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 md:p-8 mb-8 flex flex-col md:flex-row items-center justify-between gap-6"
             variants={itemVariants}
         >
            {/* Progress Section */}
            <div className="flex-grow text-center md:text-left w-full md:w-auto">
               <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Your Progress:</p>
               {isCourseComplete ? (
                   <span className="text-xl font-bold text-green-600 dark:text-green-400 flex items-center justify-center md:justify-start">
                       <HiOutlineCheckCircle className="mr-2" /> Completed!
                   </span>
               ) : (
                   <div className="flex items-center">
                       <div className="w-full md:w-64 bg-gray-200 dark:bg-gray-700 rounded-full h-3 mr-3">
                           <div
                                className={`h-3 rounded-full ${courseProgressPercentage > 0 ? 'bg-gradient-to-r from-blue-500 to-cyan-500' : 'bg-gray-400'}`}
                               style={{ width: `${courseProgressPercentage}%` }}
                               role="progressbar"
                               aria-valuenow={courseProgressPercentage}
                               aria-valuemin="0"
                               aria-valuemax="100"
                               aria-label={`Progress: ${courseProgressPercentage}%`}
                           ></div>
                       </div>
                       <span className="text-sm font-medium text-gray-700 dark:text-gray-300 flex-shrink-0">{courseProgressPercentage}%</span>
                   </div>
               )}
            </div>

            {/* CTA Button */}
            <div className="w-full md:w-auto flex-shrink-0">
                <Link href={buttonLink} passHref>
                  <motion.button
                    className={`w-full md:w-auto inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-bold rounded-md shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-2xl ${buttonClasses}`} // Enhanced button styles
                     whileHover={{ scale: 1.02, boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)" }}
                     whileTap={{ scale: 0.98 }}
                  >
                    {buttonIcon}
                    <span className="ml-3">{buttonText}</span>
                  </motion.button>
                </Link>
            </div>
         </motion.div>


        {/* Main Content Grid (Description, Outcomes, Roadmap) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8"> {/* Using a 3-column grid */}

          {/* Left Column: About & Target Audience */}
          <div className="lg:col-span-2"> {/* This column takes 2/3 width on large screens */}
            <motion.div variants={itemVariants} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 md:p-8 mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">About this Course</h2>
                 <div className="text-gray-700 dark:text-gray-300 space-y-4 leading-relaxed text-lg"> {/* Increased text size */}
                   {Array.isArray(description) ? (
                     description.map((paragraph, index) => <p key={index}>{paragraph}</p>)
                   ) : (
                     <p>{description}</p> // Handle description as a single string if not array
                   )}
                 </div>
            </motion.div>

             {/* Course Features/Includes (Level, Hours, Chat, Notebook) */}
            <motion.div variants={itemVariants} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 md:p-8">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">What this course includes</h2>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-700 dark:text-gray-300 text-lg">
                     <span className="flex items-center"><HiOutlineAcademicCap className="mr-2 text-blue-500 dark:text-cyan-500 text-xl" /> Skill Level: {level}</span>
                     <span className="flex items-center"><HiOutlineClock className="mr-2 text-blue-500 dark:text-cyan-500 text-xl" /> Estimated: {hoursSpent} total hours</span>
                     {hasChat && (
                        <span className="flex items-center"><HiOutlineChatAlt2 className="mr-2 text-blue-500 dark:text-cyan-500 text-xl" /> Dedicated Chat</span>
                     )}
                     {hasNotebook && (
                        <span className="flex items-center"><HiOutlineDocumentText className="mr-2 text-blue-500 dark:text-cyan-500 text-xl" /> In-Course Notes</span>
                     )}
                      {/* Add other features like quizzes, coding exercises etc. */}
                 </div>
            </motion.div>
          </div>


          {/* Right Column: Outcomes & Roadmap */}
          <div className="lg:col-span-1 space-y-8"> {/* This column takes 1/3 width */}
             {/* Course Outcomes */}
             {courseOutcomes && courseOutcomes.length > 0 && (
               <motion.div variants={itemVariants} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 md:p-8">
                 <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4 border-b border-gray-200 dark:border-gray-700 pb-2 flex items-center">
                     <HiOutlineBadgeCheck className="mr-2 text-blue-500 dark:text-cyan-500" /> What you'll learn
                 </h2>
                 <ul className="list-none text-gray-700 dark:text-gray-300 space-y-3">
                   {courseOutcomes.map((outcome, index) => (
                     <li key={index} className="flex items-start">
                         <HiOutlineCheckCircle className="flex-shrink-0 mr-2 mt-1 text-green-500 dark:text-green-400" />
                         <span>{outcome}</span>
                     </li>
                   ))}
                 </ul>
               </motion.div>
             )}

            {/* Roadmap */}
            {roadmap && roadmap.length > 0 && (
              <motion.div variants={itemVariants} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 md:p-8">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4 border-b border-gray-200 dark:border-gray-700 pb-2 flex items-center">
                    <HiOutlineClipboardList className="mr-2 text-blue-500 dark:text-cyan-500" /> Course Roadmap
                </h2>
                <ol className="list-none text-gray-700 dark:text-gray-300 space-y-3">
                  {roadmap.map((step, index) => (
                    <li key={index} className="flex items-start">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500 dark:bg-cyan-500 text-white flex items-center justify-center text-xs font-bold mr-2">{index + 1}</span>
                        <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </motion.div>
            )}

             {/* Target Audience (Optional Card) */}
             {targetAudience && targetAudience.length > 0 && (
                 <motion.div variants={itemVariants} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 md:p-8">
                     <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4 border-b border-gray-200 dark:border-gray-700 pb-2 flex items-center">
                         <HiOutlineUserGroup className="mr-2 text-blue-500 dark:text-cyan-500" /> Who is this for?
                     </h2>
                      <ul className="list-none text-gray-700 dark:text-gray-300 space-y-3">
                         {targetAudience.map((target, index) => (
                           <li key={index} className="flex items-start">
                                <span className="flex-shrink-0 mr-2 text-blue-500 dark:text-cyan-500">•</span> {/* Using a simple bullet */}
                                <span>{target}</span>
                           </li>
                         ))}
                      </ul>
                 </motion.div>
             )}

          </div> {/* End Right Column */}

        </div> {/* End Main Content Grid */}


      </div> {/* End Main Content Area */}

       {/* Optional Footer or extra space */}
       <div className="h-16"></div>


    </motion.div>
  );
}

export default CourseIntroHero;