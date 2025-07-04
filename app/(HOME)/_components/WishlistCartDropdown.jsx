// components/WishlistCartDropdown.js
import React from 'react';
import Image from 'next/image';
import Link from 'next/link'; // Import Link
import { motion, AnimatePresence } from 'framer-motion';
import { IoCloseOutline } from 'react-icons/io5'; // Use IoCloseOutline for remove button

function WishlistCartDropdown({ items, type, isOpen, onClose, onRemoveItem }) {
    // Determine navigation path for "View All" and title based on type ('wishlist' or 'cart')
    const navigatePath = type === 'wishlist' ? '/wishlist' : '/cart';
    const title = type === 'wishlist' ? 'My Wishlist' : 'My Cart';
    const emptyMessage = type === 'wishlist' ? 'Your wishlist is empty.' : 'Your cart is empty.';
    const viewAllText = type === 'wishlist' ? 'View all wishlist items' : 'View all cart items';

    // Truncate description helper (basic character limit)
    const truncateDescription = (text, charLimit) => {
        if (!text) return '';
        if (text.length <= charLimit) return text;
        // Find the last space before the limit and cut there, add ellipsis
        const lastSpaceIndex = text.lastIndexOf(' ', charLimit);
        if (lastSpaceIndex === -1 || lastSpaceIndex === 0) {
             return text.substring(0, charLimit) + '...';
        }
        return text.substring(0, lastSpaceIndex) + '...';
    };

    const dropdownVariants = {
        initial: { opacity: 0, y: -10 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -10 },
    };

    // Removed unused handleNavigationClick function


    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={dropdownVariants}
                    transition={{ duration: 0.2 }}
                    // Position relative to the parent element (the icon's wrapper div)
                    className={`absolute right-0 mt-2 w-64 md:w-72 lg:w-80 bg-white dark:bg-gray-700
                                rounded-md shadow-lg ring-1 ring-black ring-opacity-5
                                z-50 overflow-hidden`}
                >
                    <div className="p-4 border-b border-gray-200 dark:border-gray-600">
                        <h4 className="text-lg font-semibold text-gray-800 dark:text-white">{title}</h4>
                    </div>

                    {items.length === 0 ? (
                        <div className="p-4 text-center text-gray-600 dark:text-gray-400">
                            {emptyMessage}
                        </div>
                    ) : (
                        <>
                            <ul className="max-h-64 overflow-y-auto p-2 custom-scrollbar"> {/* Added max-height and overflow for scroll */}
                                {items.map((item) => (
                                    // Each list item
                                    <li key={item.id} className="flex items-center py-2 px-2 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-md transition-colors duration-150">
                                        {/* Wrap the item content (excluding remove button) in Link */}
                                        {/* *** CHANGED HREF HERE *** */}
                                        <Link href={`/CourseList/${item.id}`} onClick={onClose} className="flex flex-grow items-center cursor-pointer">
                                            <div className="relative w-12 h-12 flex-shrink-0 rounded overflow-hidden mr-3">
                                                <Image
                                                    src={item.thumbnail || '/images/placeholder.jpg'} // Use a placeholder if no thumbnail
                                                    alt={item.title}
                                                    layout="fill"
                                                    objectFit="cover"
                                                />
                                            </div>
                                            <div className="flex-grow overflow-hidden">
                                                <p className="text-sm font-semibold text-gray-800 dark:text-white truncate">{item.title}</p>
                                                <p className="text-xs text-gray-600 dark:text-gray-400 mt-0.5">
                                                    {truncateDescription(item.description || item.instructor || 'No description', 40)} {/* Use instructor if no description, truncate */}
                                                </p>
                                            </div>
                                        </Link>

                                        {/* Remove Button - Placed outside the Link */}
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation(); // Prevent Link click when remove is clicked
                                                onRemoveItem(item.id, type); // Pass item ID and type
                                            }}
                                            className="ml-3 flex-shrink-0 text-gray-400 dark:text-gray-500 hover:text-red-500 dark:hover:text-red-400 transition-colors duration-150"
                                            aria-label={`Remove ${item.title} from ${type}`}
                                        >
                                            <IoCloseOutline className="w-4 h-4" />
                                        </button>
                                    </li>
                                ))}
                            </ul>

                            {/* View All Link - Still navigates to the list page */}
                            <div className="p-4 border-t border-gray-200 dark:border-gray-600">
                                <Link
                                    href={navigatePath} // This still goes to /wishlist or /cart
                                    className="block w-full text-center text-blue-600 dark:text-cyan-400 font-semibold text-sm hover:underline transition-colors duration-200"
                                    onClick={onClose} // Close dropdown when navigating
                                >
                                    {viewAllText}
                                </Link>
                            </div>
                        </>
                    )}
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export default WishlistCartDropdown;