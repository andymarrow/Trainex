// app/(StudentDashboard)/trainex-dashboard/_components/NotificationDropdown.jsx
'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { IoCheckmarkCircleOutline, IoAlertCircleOutline, IoInformationCircleOutline } from 'react-icons/io5';

// This component contains its own animation and positioning
function NotificationDropdown({ notifications, isOpen, onClose }) {
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
            // Add event listener only when the dropdown is open
            document.addEventListener('mousedown', handleOutsideClick);
        } else {
             // Remove listener when closed to prevent unnecessary calls
            document.removeEventListener('mousedown', handleOutsideClick);
        }

        // Clean up the event listener when the component unmounts or isOpen changes
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [isOpen, onClose]); // Re-run effect if isOpen or onClose changes


    const dropdownVariants = {
        initial: { opacity: 0, y: -10, scale: 0.95 },
        animate: { opacity: 1, y: 0, scale: 1 },
        exit: { opacity: 0, y: -10, scale: 0.95 },
    };

    // Helper to get icon based on notification type
    const getNotificationIcon = (type) => {
        switch (type) {
            case 'progress':
                return <IoInformationCircleOutline className="text-blue-500 dark:text-cyan-400" />;
            case 'purchase':
                return <IoCheckmarkCircleOutline className="text-green-500 dark:text-green-400" />;
             case 'reminder':
                return <IoAlertCircleOutline className="text-yellow-500 dark:text-yellow-400" />;
            default:
                return <IoInformationCircleOutline className="text-gray-500 dark:text-gray-400" />;
        }
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
                    className={`absolute right-0 mt-2 w-72 md:w-96 bg-white dark:bg-gray-700
                                rounded-md shadow-lg ring-1 ring-black ring-opacity-5
                                z-50 overflow-hidden transform origin-top-right`}
                >
                    <div className="p-4 border-b border-gray-200 dark:border-gray-600">
                        <h4 className="text-lg font-semibold text-gray-800 dark:text-white">Notifications</h4>
                    </div>

                    {(!notifications || notifications.length === 0) ? ( // Handle null/undefined notifications
                        <div className="p-4 text-center text-gray-600 dark:text-gray-400">
                            No new notifications.
                        </div>
                    ) : (
                        <>
                            <ul className="max-h-64 overflow-y-auto p-2 custom-scrollbar">
                                {notifications.map((notification) => (
                                    <li key={notification.id}>
                                        {/* Use button or div if no link, Link if there is */}
                                        {notification.link ? (
                                             <Link
                                                href={notification.link}
                                                className="flex items-start py-3 px-3 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-md transition-colors duration-150"
                                                onClick={onClose} // Close dropdown on click
                                            >
                                                <div className="flex-shrink-0 mr-3 text-2xl">
                                                    {getNotificationIcon(notification.type)}
                                                </div>
                                                <div className="flex-grow">
                                                    <p className="text-sm font-medium text-gray-800 dark:text-white">{notification.message}</p>
                                                    {notification.timestamp && (
                                                         <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{new Date(notification.timestamp).toLocaleString()}</p>
                                                    )}
                                                </div>
                                            </Link>
                                        ) : (
                                            <div className="flex items-start py-3 px-3"> {/* Not clickable */}
                                                 <div className="flex-shrink-0 mr-3 text-2xl">
                                                    {getNotificationIcon(notification.type)}
                                                </div>
                                                <div className="flex-grow">
                                                    <p className="text-sm font-medium text-gray-800 dark:text-white">{notification.message}</p>
                                                    {notification.timestamp && (
                                                         <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{new Date(notification.timestamp).toLocaleString()}</p>
                                                    )}
                                                </div>
                                            </div>
                                        )}
                                    </li>
                                ))}
                            </ul>

                            {/* Assuming a '/notifications' page exists */}
                            <div className="p-4 border-t border-gray-200 dark:border-gray-600">
                                <Link
                                    href="/notifications"
                                    className="block w-full text-center text-blue-600 dark:text-cyan-400 font-semibold text-sm hover:underline transition-colors duration-200"
                                    onClick={onClose}
                                >
                                    View all notifications
                                </Link>
                            </div>
                        </>
                    )}
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export default NotificationDropdown;