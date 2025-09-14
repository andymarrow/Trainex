// app/(StudentDashboard)/trainex-dashboard/myplaylist/_component/PlaylistItemCard.jsx
'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion'; // For item-level animation
import { IoPlayCircleOutline } from 'react-icons/io5'; // Icon for resume/play
import { FaCircle } from 'react-icons/fa'; // Icon for progress dot

// Define the structure of the item expected by this component
// (This structure is prepared in the page.jsx file)
// interface PlaylistItem {
//     id: string | number; // Course ID
//     course: {
//         id: string | number;
//         title: string;
//         thumbnail?: string;
//         instructor?: string; // Added instructor for display
//     };
//     progress: number; // Overall course progress percentage
//     lastWatchedChapterTitle?: string; // Title of chapter to resume
//     link?: string; // Specific link to resume
// }

// Define animation variants for each card
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

function PlaylistItemCard({ item }) {
    if (!item || !item.course) {
        // Basic check for invalid item data
        return null;
    }

    // Ensure progress is between 0 and 100
    const safeProgress = Math.max(0, Math.min(100, item.progress || 0));


    return (
        <motion.div
            variants={cardVariants} // Apply the animation variants
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden
                       flex flex-col h-full transition-all duration-300 ease-in-out
                       hover:shadow-xl hover:scale-[1.02]" // Added hover effects
        >
            {/* Clickable area covering image and main text content */}
            {/* Use Link for the main card content to navigate */}
            <Link href={item.link || `/CourseList/${item.id}`} className="flex flex-col h-full">
                 <div className="relative w-full h-32 sm:h-40 md:h-48 overflow-hidden"> {/* Adjust height as needed */}
                     <Image
                        src={item.course.thumbnail || '/images/placeholder.jpg'}
                        alt={item.course.title || 'Course thumbnail'}
                        layout="fill"
                        objectFit="cover"
                        className="transition-transform duration-300 hover:scale-110" // Image zoom on hover
                    />
                    {/* Optional: Overlay play button */}
                     <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                        <IoPlayCircleOutline className="text-white text-5xl" />
                    </div>
                </div>

                <div className="p-4 flex flex-col flex-grow">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1 truncate">
                        {item.course.title || 'Untitled Course'}
                    </h3>
                     {item.course.instructor && (
                         <p className="text-sm text-gray-600 dark:text-gray-400 mb-2 truncate">
                             By {item.course.instructor}
                         </p>
                     )}


                     {/* Progress Bar */}
                     <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mb-3">
                        <div
                            className="bg-blue-600 h-2.5 rounded-full transition-all duration-500 ease-out dark:bg-cyan-400"
                            style={{ width: `${safeProgress}%` }}
                        ></div>
                     </div>

                    {/* Progress Text & Resume Info */}
                    <div className="flex items-center justify-between text-sm text-gray-700 dark:text-gray-300 mt-auto"> {/* mt-auto pushes this to bottom */}
                         <span className="font-semibold">
                            {safeProgress}% Complete
                         </span>
                         {item.lastWatchedChapterTitle && safeProgress < 100 && (
                              <span className="text-xs text-gray-500 dark:text-gray-400 italic">
                                 Resume: {item.lastWatchedChapterTitle}
                              </span>
                         )}
                    </div>

                </div>
            </Link>

            {/* Optional: Resume button outside the main link area if needed */}
            {/* <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                <Link href={item.link || `/CourseList/${item.id}`} className="block w-full text-center text-blue-600 dark:text-cyan-400 font-semibold text-sm hover:underline">
                    Resume Course
                </Link>
            </div> */}

        </motion.div>
    );
}

export default PlaylistItemCard;