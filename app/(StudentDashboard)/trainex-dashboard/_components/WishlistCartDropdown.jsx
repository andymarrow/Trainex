// components/WishlistCartDropdown.jsx
// Assuming this file is located at components/WishlistCartDropdown.jsx
'use client';
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { IoCloseOutline } from 'react-icons/io5';

// This component handles its own animation and positioning.
// It expects a 'relative' positioned parent container.

// Add prop types or type checking if using TypeScript
// type WishlistItem = {
//    id: string | number;
//    title: string;
//    thumbnail?: string;
//    description?: string;
//    instructor?: string; // Alternative text if no description
//    price?: number; // If used for cart
// };

// interface WishlistCartDropdownProps {
//     items: WishlistItem[]; // Can be wishlist or cart items (matches your wishList structure)
//     type: 'wishlist' | 'cart';
//     isOpen: boolean;
//     onClose: () => void; // Function to close the dropdown
//     onRemoveItem?: (itemId: string | number, type: 'wishlist' | 'cart') => void; // Optional remove handler
// }

function WishlistCartDropdown({ items, type, isOpen, onClose, onRemoveItem }) {
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

    // Determine navigation path and title based on type ('wishlist' or 'cart')
    const navigatePath = type === 'wishlist' ? '/wishlist' : '/cart'; // Assuming these pages exist
    const title = type === 'wishlist' ? 'My Wishlist' : 'My Cart';
    const emptyMessage = type === 'wishlist' ? 'Your wishlist is empty.' : 'Your cart is empty.';
    const viewAllText = type === 'wishlist' ? 'View all wishlist items' : 'View all cart items';

    // Truncate text helper
    const truncateText = (text, charLimit) => {
        if (!text) return '';
        if (text.length <= charLimit) return text;
        // Optional: find last space to avoid cutting mid-word, but keep it simple for now
        // return text.substring(0, charLimit) + '...'; // Basic truncation
         const lastSpaceIndex = text.lastIndexOf(' ', charLimit);
        if (lastSpaceIndex > (charLimit / 2)) { // Only use last space if not too early
            return text.substring(0, lastSpaceIndex) + '...';
        }
        return text.substring(0, charLimit) + '...';
    };

    // Define character limits for title and description
    const TITLE_CHAR_LIMIT = 30; // Example limit for the title
    const DESC_CHAR_LIMIT = 40; // Keep the existing limit for description


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
                    // Position absolute relative to a 'relative' parent
                    // Adjusted width to md:w-80 for better consistency, but you can keep 96 if preferred
                    className={`absolute right-0 mt-2 w-72 md:w-80 bg-white dark:bg-gray-700
                                rounded-md shadow-lg ring-1 ring-black ring-opacity-5
                                z-50 overflow-hidden transform origin-top-right`}
                >

                    <div className="p-4 border-b border-gray-200 dark:border-gray-600">
                        <h4 className="text-lg font-semibold text-gray-800 dark:text-white">{title}</h4>
                    </div>

                    {(!items || items.length === 0) ? (
                        <div className="p-4 text-center text-gray-600 dark:text-gray-400">
                            {emptyMessage}
                        </div>
                    ) : (
                        <>
                            <ul className="max-h-64 overflow-y-auto p-2 custom-scrollbar">
                                {items.map((item) => (
                                    // Use Link for navigation on item click
                                    <li key={item.id} className="flex items-center py-2 px-2 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-md transition-colors duration-150">
                                        {/* Wrap the item content (excluding remove button) in Link */}
                                        {/* Link href goes to course detail page - using item.id */}
                                        {/* Use Link only if item.id exists, otherwise make it a div */}
                                        {item.id ? (
                                             <Link href={`/CourseList/${item.id}`} onClick={onClose} className="flex flex-grow items-center cursor-pointer">
                                                <div className="relative w-12 h-12 flex-shrink-0 rounded overflow-hidden mr-3">
                                                    <Image
                                                        src={item.thumbnail || '/images/placeholder.jpg'}
                                                        alt={item.title || 'Item thumbnail'}
                                                        layout="fill"
                                                        objectFit="cover"
                                                    />
                                                </div>
                                                <div className="flex-grow overflow-hidden">
                                                     {/* Apply JS truncation to the title */}
                                                    <p className="text-sm font-semibold text-gray-800 dark:text-white">
                                                        {truncateText(item.title || 'Untitled Item', TITLE_CHAR_LIMIT)}
                                                    </p>
                                                     {/* Apply JS truncation to the description/instructor */}
                                                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-0.5">
                                                        {truncateText(item.description || item.instructor || 'No description', DESC_CHAR_LIMIT)}
                                                    </p>
                                                     {/* Display price if it's a cart item and price is available */}
                                                     {type === 'cart' && typeof item.price === 'number' && (
                                                         <p className="text-sm font-bold text-blue-600 dark:text-cyan-400 mt-0.5">${item.price.toFixed(2)}</p>
                                                     )}
                                                </div>
                                            </Link>
                                        ) : (
                                            // If no ID/link, render as a non-clickable div
                                             <div className="flex flex-grow items-center">
                                                <div className="relative w-12 h-12 flex-shrink-0 rounded overflow-hidden mr-3">
                                                    <Image
                                                        src={item.thumbnail || '/images/placeholder.jpg'}
                                                        alt={item.title || 'Item thumbnail'}
                                                        layout="fill"
                                                        objectFit="cover"
                                                    />
                                                </div>
                                                <div className="flex-grow overflow-hidden">
                                                     {/* Apply JS truncation to the title */}
                                                    <p className="text-sm font-semibold text-gray-800 dark:text-white">
                                                        {truncateText(item.title || 'Untitled Item', TITLE_CHAR_LIMIT)}
                                                    </p>
                                                     {/* Apply JS truncation to the description/instructor */}
                                                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-0.5">
                                                        {truncateText(item.description || item.instructor || 'No description', DESC_CHAR_LIMIT)}
                                                    </p>
                                                    {type === 'cart' && typeof item.price === 'number' && (
                                                         <p className="text-sm font-bold text-blue-600 dark:text-cyan-400 mt-0.5">${item.price.toFixed(2)}</p>
                                                     )}
                                                </div>
                                            </div>
                                        )}


                                        {/* Remove Button - Only show if onRemoveItem prop is provided */}
                                        {onRemoveItem && (
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation(); // Prevent Link/div click when remove is clicked
                                                    onRemoveItem(item.id, type); // Pass item ID and type
                                                }}
                                                className="ml-3 flex-shrink-0 text-gray-400 dark:text-gray-500 hover:text-red-500 dark:hover:text-red-400 transition-colors duration-150"
                                                aria-label={`Remove ${item.title || 'this item'} from ${type}`}
                                            >
                                                <IoCloseOutline className="w-4 h-4" />
                                            </button>
                                        )}
                                    </li>
                                ))}
                            </ul>

                            {/* View All Link */}
                            {/* Assuming a '/wishlist' or '/cart' page exists */}
                            <div className="p-4 border-t border-gray-200 dark:border-gray-600">
                                <Link
                                    href={navigatePath}
                                    className="block w-full text-center text-blue-600 dark:text-cyan-400 font-semibold text-sm hover:underline transition-colors duration-200"
                                    onClick={onClose}
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