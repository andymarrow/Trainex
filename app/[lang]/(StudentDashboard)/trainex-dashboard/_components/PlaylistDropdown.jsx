// app/(StudentDashboard)/trainex-dashboard/_components/PlaylistDropdown.jsx
'use client';
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { IoPlayCircleOutline } from 'react-icons/io5';
import { FaCircle } from 'react-icons/fa';

// This component expects the PREPARED data structure from StudentDashboardPage
// type PlaylistItem = {
//     id: string | number; // Should be the course ID
//     course: { // Embedded course details
//         id: string | number;
//         title: string;
//         thumbnail?: string;
//     };
//     progress: number; // Course progress percentage
//     lastWatchedChapterTitle?: string; // Title derived in parent
//     link?: string; // Specific link derived in parent
// };

// interface PlaylistDropdownProps {
//     playlistItems: PlaylistItem[];
//     isOpen: boolean;
//     onClose: () => void;
// }


// This component contains its own animation and positioning
function PlaylistDropdown({ playlistItems, isOpen, onClose }) {
     const dropdownRef = useRef(null); // Ref for click outside

    // Close dropdown when clicking outside of it
     useEffect(() => {
        const handleOutsideClick = (event) => {
            // Check if the click was outside the dropdown itself
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleOutsideClick);
        } else {
             document.removeEventListener('mousedown', handleOutsideClick);
        }

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [isOpen, onClose]);


    const dropdownVariants = {
        initial: { opacity: 0, y: -10, scale: 0.95 },
        animate: { opacity: 1, y: 0, scale: 1 },
        exit: { opacity: 0, y: -10, scale: 0.95 },
    };

    return (
        <AnimatePresence>
            {/* Only render the motion.div if isOpen is true */}
            {isOpen && (
                <motion.div
                    ref={dropdownRef} // Attach ref here
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={dropdownVariants}
                    transition={{ duration: 0.2 }}
                     // Position absolute relative to a 'relative' parent (in DashboardHeader)
                    className={`absolute right-0 mt-2 w-72 md:w-80 bg-white dark:bg-gray-700
                                rounded-md shadow-lg ring-1 ring-black ring-opacity-5
                                z-50 overflow-hidden transform origin-top-right`}
                >
                    <div className="p-4 border-b border-gray-200 dark:border-gray-600">
                        <h4 className="text-lg font-semibold text-gray-800 dark:text-white">My Active Playlist</h4>
                    </div>

                    {(!playlistItems || playlistItems.length === 0) ? ( // Handle null/undefined items
                        <div className="p-4 text-center text-gray-600 dark:text-gray-400">
                            No courses in your active playlist.
                        </div>
                    ) : (
                        <>
                            <ul className="max-h-64 overflow-y-auto p-2 custom-scrollbar">
                                {playlistItems.map((item) => (
                                    // Use item.id which should be the course ID
                                    <li key={item.id}>
                                        {/* Link to the specific course/chapter using the pre-determined link */}
                                        <Link
                                            href={item.link || `/CourseList/${item.id}`} // Fallback link to course detail
                                            className="flex items-center py-2 px-2 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-md transition-colors duration-150"
                                            onClick={onClose} // Close dropdown on click
                                        >
                                            <div className="relative w-14 h-10 flex-shrink-0 rounded overflow-hidden mr-3">
                                                 <Image
                                                    src={item.course?.thumbnail || '/images/placeholder.jpg'} // Access thumbnail from embedded course
                                                    alt={item.course?.title || 'Course'} // Access title from embedded course
                                                    layout="fill"
                                                    objectFit="cover"
                                                />
                                                {/* Optional: Play icon overlay */}
                                                 <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                                                    <IoPlayCircleOutline className="text-white text-xl" />
                                                </div>
                                            </div>
                                            <div className="flex-grow overflow-hidden">
                                                <p className="text-sm font-semibold text-gray-800 dark:text-white truncate">{item.course?.title || 'Unknown Course'}</p> {/* Access title from embedded course */}
                                                {/* Display progress and resume text */}
                                                <p className="text-xs text-gray-600 dark:text-gray-400 mt-0.5">
                                                     {item.progress !== undefined ? `${item.progress}% Complete` : 'Progress N/A'}
                                                    {/* Use the derived last watched chapter title */}
                                                    {item.lastWatchedChapterTitle && ` - Resume ${item.lastWatchedChapterTitle}`}
                                                </p>
                                            </div>
                                            {/* Optional: Progress indicator dot */}
                                            {item.progress !== undefined && item.progress > 0 && item.progress < 100 && (
                                                 <FaCircle className="flex-shrink-0 ml-2 text-blue-500 dark:text-cyan-400 w-2 h-2" />
                                            )}
                                        </Link>
                                    </li>
                                ))}
                            </ul>

                            {/* Assuming a '/my-playlist' page exists */}
                             <div className="p-4 border-t border-gray-200 dark:border-gray-600">
                                <Link
                                    href="/my-playlist"
                                    className="block w-full text-center text-blue-600 dark:text-cyan-400 font-semibold text-sm hover:underline transition-colors duration-200"
                                    onClick={onClose}
                                >
                                    View my playlist
                                </Link>
                            </div>
                        </>
                    )}
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export default PlaylistDropdown;