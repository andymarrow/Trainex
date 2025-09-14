// components/Header.jsx
"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

// Import consistent outline icons from react-icons/hi
import {
  HiOutlineBell,
  HiOutlineHeart,
  HiOutlineMenuAlt3,
  HiOutlineUserCircle,
  HiOutlineCash,
  HiOutlineCog,
  HiOutlineGlobe,
  HiOutlineHome,
  HiOutlinePlay, // Using Play icon from hi for consistency if desired, or PlayCircle below
  HiOutlineShoppingBag,
  HiOutlineChevronDown,
  HiOutlineChevronUp,
} from "react-icons/hi";

// Import outline icon from react-icons/hi2 for specific needs
import { HiOutlinePlayCircle } from 'react-icons/hi2'; // Use this for playlist icon

// Import new dropdown components
import NotificationDropdown from './NotificationDropdown';
import PlaylistDropdown from './PlaylistDropdown';
import WishlistCartDropdown from './WishlistCartDropdown'; // Reuse this component

import ThemeToggle from '@/components/Themetoggle';

// Import necessary data structures from constants
import {
    SAMPLE_USER_STUDENT, // For profile info display
    SAMPLE_STUDENT_PROFILE, // Contains enrolledCourses, wishlist, payment history, quiz scores etc.
    sampleCourses,          // Needed to lookup details for enrolledCourses in playlist
    dummyNotifications,     // <--- IMPORT THIS DIRECTLY
    // dummyWishlistItems,  // No longer needed, use studentProfile.wishList
    // dummyPlaylistItems   // No longer needed, derive from studentProfile.enrolledCourses
} from '@/lib/constants';


// Helper function to find a course by ID (needed here now for playlist lookup)
const findCourseById = (courseId) => {
    // Ensure sampleCourses is available (imported)
    return sampleCourses.find(course => course.id === courseId);
};

// Helper function to find the most recent incomplete chapter (needed here now for playlist)
const findLastWatchedChapterDetails = (courseBlueprint, chapterProgress) => {
     if (!courseBlueprint || !courseBlueprint.sections || !chapterProgress) {
         return null;
     }

     // Find the chapter progress entry that is *not* complete and has the most recent access
     const lastInProgressChapter = chapterProgress
         .filter(cp => !cp.isComplete && cp.lastAccessed) // Must be in progress and accessed
         .sort((a, b) => new Date(b.lastAccessed) - new Date(a.lastAccessed))[0]; // Sort by most recent

     if (!lastInProgressChapter) {
          // If no incomplete chapters were accessed, check for the very first incomplete one
          const firstInProgressChapter = chapterProgress.find(cp => !cp.isComplete);
          if (firstInProgressChapter) {
                const section = courseBlueprint.sections[firstInProgressChapter.sectionIndex];
                const chapter = section?.chapters[firstInProgressChapter.chapterIndex];
                 return {
                     title: chapter?.chapterTitle || `Section ${firstInProgressChapter.sectionIndex + 1}, Chapter ${firstInProgressChapter.chapterIndex + 1}`,
                      link: `/CourseList/${courseBlueprint.id}?section=${firstInProgressChapter.sectionIndex}&chapter=${firstInProgressChapter.chapterIndex}`,
                 };
          }
         return null; // No incomplete chapters found
     }

     // Found the last accessed incomplete chapter. Look up its title in the blueprint.
     const section = courseBlueprint.sections[lastInProgressChapter.sectionIndex];
     const chapter = section?.chapters[lastInProgressChapter.chapterIndex];

     return {
         title: chapter?.chapterTitle || `Section ${lastInProgressChapter.sectionIndex + 1}, Chapter ${lastInProgressChapter.chapterIndex + 1}`,
         link: `/CourseList/${courseBlueprint.id}?section=${lastInProgressChapter.sectionIndex}&chapter=${lastInProgressChapter.chapterIndex}`,
     };
};


export default function Header({ toggleSidebar }) {
  // --- Data Source (Using provided constants structure) ---
  const studentProfile = SAMPLE_STUDENT_PROFILE;
  const user = SAMPLE_USER_STUDENT; // For profile info display

  // Get notifications directly from the separately defined dummyNotifications array
  const notifications = dummyNotifications || []; // Use dummyNotifications

  // Get wishlist items directly from the student profile (as per your constants structure)
  const wishlistItems = studentProfile.wishList || [];

  // Prepare playlist items by looking up course details from enrolledCourses
  // (This logic correctly uses studentProfile.enrolledCourses and sampleCourses)
  const playlistItems = (studentProfile.enrolledCourses || [])
        .filter(enrollment =>
            !enrollment.isCourseComplete && enrollment.courseProgressPercentage !== undefined && enrollment.courseProgressPercentage > 0
        )
        .map(enrollment => {
            const courseBlueprint = findCourseById(enrollment.courseId);
             // Find the most recent chapter the user was watching/left off at
            const lastWatchedDetails = findLastWatchedChapterDetails(courseBlueprint, enrollment.chapterProgress);

            return {
                // Create a structure suitable for PlaylistDropdown
                id: enrollment.courseId, // Use courseId as the item ID for playlist
                course: { // Embed relevant course details
                    id: enrollment.courseId,
                    title: courseBlueprint?.title || 'Unknown Course',
                    thumbnail: courseBlueprint?.thumbnail || '/images/placeholder.jpg',
                    // Potentially add instructor, etc. if needed in dropdown item
                },
                progress: enrollment.courseProgressPercentage, // Use the overall course progress
                lastWatchedChapterTitle: lastWatchedDetails?.title || 'Start/Resume Course', // Title to display for resuming
                // Use the specific chapter link if available, otherwise link to course page
                link: lastWatchedDetails?.link || `/CourseList/${enrollment.courseId}`,
            };
        })
        .filter(item => item.course.title !== 'Unknown Course'); // Filter out items where course blueprint wasn't found


  // --- State for dropdown visibility ---
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [showNotificationDropdown, setShowNotificationDropdown] = useState(false);
  const [showWishlistDropdown, setShowWishlistDropdown] = useState(false);
  const [showPlaylistDropdown, setShowPlaylistDropdown] = useState(false);
  // Add state for Cart dropdown if you implement it

  // --- Refs for dropdown trigger icons and content ---
  const profileIconRef = useRef(null);
  const notificationIconRef = useRef(null);
  const wishlistIconRef = useRef(null);
  const playlistIconRef = useRef(null);
  // const cartIconRef = useRef(null);

   // Refs for the dropdown *content* itself (needed by the click-outside logic)
   // NOTE: These refs are now used by the Header's outside click logic,
   // NOT passed down to the dropdown components themselves, as the dropdowns
   // now handle their own internal outside clicks via their own refs.
   const profileDropdownRef = useRef(null);
   const notificationDropdownRef = useRef(null);
   const wishlistDropdownRef = useRef(null);
   const playlistDropdownRef = useRef(null);
   // const cartDropdownRef = useRef(null);


  // --- Handlers for removing items from dummy data ---
  // These would update global state or call an API in a real app
  const handleRemoveWishlistItem = (itemId) => {
      console.log(`Removing item ${itemId} from wishlist (dummy)`);
      // Example state update if using Header state for wishlist (less common for site-wide)
      // setWishlistItems(wishlistItems.filter(item => item.id !== itemId));
      // In a real app, this would likely dispatch a global state action or call an API.
  };

  // Example cart item removal handler if you add a cart dropdown


   // --- Dropdown Toggle & Close Logic ---

   // Function to close all *icon-based* dropdowns (Notification, Wishlist, Playlist, Cart)
   const closeIconDropdowns = () => {
       setShowNotificationDropdown(false);
       setShowWishlistDropdown(false);
       setShowPlaylistDropdown(false);
       // setShowCartDropdown(false);
   };

   // Function to close ALL dropdowns (including profile)
    const closeAllDropdowns = () => {
        setShowProfileDropdown(false);
        closeIconDropdowns();
    };

    // Toggle function pattern: stopPropagation, close others, toggle self
   const toggleProfileDropdown = (event) => {
       event.stopPropagation();
       closeIconDropdowns();
       setShowProfileDropdown(!showProfileDropdown);
   };

   const toggleNotificationDropdown = (event) => {
       event.stopPropagation();
       setShowProfileDropdown(false);
       setShowWishlistDropdown(false);
       setShowPlaylistDropdown(false);
       // setShowCartDropdown(false);
       setShowNotificationDropdown(!showNotificationDropdown);
   };

    const toggleWishlistDropdown = (event) => {
       event.stopPropagation();
       setShowProfileDropdown(false);
       setShowNotificationDropdown(false);
       setShowPlaylistDropdown(false);
        // setShowCartDropdown(false);
       setShowWishlistDropdown(!showWishlistDropdown);
   };

    const togglePlaylistDropdown = (event) => {
       event.stopPropagation();
       setShowProfileDropdown(false);
       setShowNotificationDropdown(false);
       setShowWishlistDropdown(false);
        // setShowCartDropdown(false);
       setShowPlaylistDropdown(!showPlaylistDropdown);
   };

    // Example toggle for Cart dropdown if added


   // --- Outside Click Logic ---
   useEffect(() => {
        function handleClickOutside(event) {
            // List all dropdown content refs that are currently rendered
            const allDropdownRefs = [
                profileDropdownRef,
                notificationDropdownRef,
                wishlistDropdownRef,
                playlistDropdownRef,
                // cartDropdownRef
            ].filter(ref => ref.current); // Filter out null refs if a dropdown isn't open

            // Check if the click was inside any of the open dropdown contents
            const clickedInsideAnyDropdown = allDropdownRefs.some(ref => ref.current && ref.current.contains(event.target));

            // List all trigger icon refs
            const allTriggerRefs = [
                profileIconRef,
                notificationIconRef,
                wishlistIconRef,
                playlistIconRef,
                // cartIconRef
            ].filter(ref => ref.current);

             // Check if the click was on any of the trigger icons
            const clickedOnTrigger = allTriggerRefs.some(ref => ref.current && ref.current.contains(event.target));


            // If the click was NOT on a trigger AND was NOT inside any open dropdown, close ALL dropdowns.
            if (!clickedOnTrigger && !clickedInsideAnyDropdown) {
                 closeAllDropdowns();
            }
             // If the click WAS on a trigger icon, the specific toggle handler (with stopPropagation) handles it.
             // If the click WAS inside a dropdown content, the specific dropdown's internal useEffect handles it
             // by calling onClose (which maps to closeAllDropdowns here).
        }

        // Bind the event listener when *any* dropdown is open
        if (showProfileDropdown || showNotificationDropdown || showWishlistDropdown || showPlaylistDropdown) {
             document.addEventListener("mousedown", handleClickOutside);
        } else {
             // Clean up the listener when no dropdowns are open
             document.removeEventListener("mousedown", handleClickOutside);
        }


        // Unbind the event listener on cleanup
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
   }, [showProfileDropdown, showNotificationDropdown, showWishlistDropdown, showPlaylistDropdown]); // Re-run effect if any dropdown state changes


  // Define profile dropdown menu items with consistent outline icons and links
  const profileDropdownItems = [
    // Use dynamic link based on user's dashboard path if needed, or a generic one
    { icon: HiOutlineHome, text: 'Dashboard', link: '/trainex-dashboard' }, // Link to your student dashboard path
    { icon: HiOutlineGlobe, text: 'My Courses', link: '/trainex-dashboard/courses' }, // Link to a page listing all enrolled courses
    { icon: HiOutlineHeart, text: 'Wishlist', link: '/trainex-dashboard/wishlist' }, // Separate link for wishlist page
     { icon: HiOutlineShoppingBag, text: 'Cart', link: '/trainex-dashboard/cart' }, // Separate link for cart page
    { icon: HiOutlinePlay, text: 'My Playlist', link: '/trainex-dashboard/myplaylist' }, // Separate link for playlist page
     { icon: HiOutlineCash, text: 'Transactions', link: '/trainex-dashboard/billing' }, // Assuming you have a transactions page
     { icon: HiOutlineHeart, text: 'Certificates', link: '/trainex-dashboard/certificates' }, // Link to certificates page
    { icon: HiOutlineCog, text: 'Settings', link: '/trainex-dashboard/settings' }, // Assuming you have a settings page
  ];

  // Base classes for main header icons that get gradient/scale on hover
  const iconBaseClasses = "text-gray-600 dark:text-gray-300 transition-all duration-200 ease-in-out hover:scale-105";
  // Classes for the gradient hover effect
  const iconHoverGradientClasses = "hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500";


  return (
    <div className='flex justify-between items-center p-2 shadow-md bg-white dark:bg-gray-800 rounded-md'>
      {/* Menu Button for Small Screens */}
      <div className='flex items-center gap-2'>

        <button
          className="md:hidden text-2xl p-2 text-gray-700 dark:text-gray-300 focus:outline-none"
          onClick={toggleSidebar}
          aria-label="Open Menu"
        >
          <HiOutlineMenuAlt3 />
        </button>

        {/* Logo */}
        <Link href={"/"} className="flex-shrink-0 flex items-center" onClick={closeAllDropdowns}>
           {/* Adjusted size and added rounded corners for the logo */}
           <Image src={'/images/logo.jpg'} width={36} height={36} alt='Logo' className='rounded-md mr-2' />
           <span className="text-xl font-bold text-blue-600 dark:text-cyan-400 hidden sm:inline">Train ex</span> {/* Adjusted text size slightly */}
        </Link>
      </div>

      {/* Right Side Icons and Profile */}
      {/* This div contains all the icons/profile and their dropdowns */}
      <div className='flex flex-row items-center space-x-3 sm:space-x-4'> {/* Adjusted spacing */}

        {/* Icons with Dropdowns (Hidden on small screens) */}
        {/* This container is NOT relative. Each icon's wrapper IS relative. */}
        <div className="hidden md:flex items-center space-x-4 text-2xl sm:text-3xl"> {/* Adjusted icon size */}

            {/* Notification Icon */}
            <div className="relative"> {/* Relative container for the dropdown */}
                <button
                    ref={notificationIconRef} // Add ref
                    className={`${iconBaseClasses} ${iconHoverGradientClasses} relative flex items-center justify-center`} // Apply base classes, gradient, relative, flex centering
                    onClick={toggleNotificationDropdown}
                    aria-label="Notifications"
                    aria-haspopup="true"
                    aria-expanded={showNotificationDropdown ? "true" : "false"}
                >
                    <HiOutlineBell />
                    {/* Badge */}
                    {notifications && notifications.length > 0 && (
                        <span className="absolute -top-1 -right-1 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-red-100 bg-red-500 rounded-full dark:bg-red-400">
                            {notifications.length > 99 ? '99+' : notifications.length} {/* Show 99+ for large counts */}
                        </span>
                    )}
                </button>
                 {/* Notification Dropdown Content */}
                 {/* Render the dropdown component directly, let it handle its own animation/positioning */}
                 <NotificationDropdown
                     // Pass down the content ref to the dropdown component
                     // REMOVED - The dropdown handles its own ref internally now.
                     notifications={notifications}
                     isOpen={showNotificationDropdown}
                     onClose={closeAllDropdowns} // Close ALL dropdowns when something is clicked inside
                 />
                 {/* The NotificationDropdown component expects to be positioned 'absolute' relative to this 'relative' div */}
            </div>

            {/* Wishlist Icon */}
             <div className="relative"> {/* Relative container for the dropdown */}
                 <button
                     ref={wishlistIconRef} // Add ref
                    className={`${iconBaseClasses} ${iconHoverGradientClasses} relative flex items-center justify-center`} // Apply base classes, gradient, relative, flex centering
                    onClick={toggleWishlistDropdown}
                    aria-label="Wishlist"
                     aria-haspopup="true"
                    aria-expanded={showWishlistDropdown ? "true" : "false"}
                >
                    <HiOutlineHeart />
                     {/* Badge */}
                    {wishlistItems && wishlistItems.length > 0 && (
                        <span className="absolute -top-1 -right-1 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-red-100 bg-red-500 rounded-full dark:bg-red-400">
                            {wishlistItems.length > 99 ? '99+' : wishlistItems.length}
                        </span>
                    )}
                </button>
                 {/* Wishlist Dropdown Content */}
                 {/* Render the dropdown component directly */}
                  <WishlistCartDropdown
                     // Pass down the content ref to the dropdown component
                      // REMOVED - The dropdown handles its own ref internally now.
                     items={wishlistItems}
                     type="wishlist"
                     isOpen={showWishlistDropdown}
                     onClose={closeAllDropdowns} // Close ALL dropdowns on click inside
                     onRemoveItem={handleRemoveWishlistItem} // Pass the remove handler
                 />
             </div>

            {/* Playlist Icon */}
             <div className="relative"> {/* Relative container for the dropdown */}
                <button
                    ref={playlistIconRef} // Add ref
                    className={`${iconBaseClasses} ${iconHoverGradientClasses} relative flex items-center justify-center`} // Apply base classes, gradient, relative, flex centering
                    onClick={togglePlaylistDropdown}
                    aria-label="My Playlist"
                     aria-haspopup="true"
                    aria-expanded={showPlaylistDropdown ? "true" : "false"}
                >
                    <HiOutlinePlayCircle /> {/* Using HiOutlinePlayCircle */}
                    {/* Badge (e.g., number of active playlist items) */}
                     {playlistItems && playlistItems.length > 0 && (
                        <span className="absolute -top-1 -right-1 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-red-100 bg-blue-500 rounded-full dark:bg-cyan-400"> {/* Use a different color for playlist badge */}
                            {playlistItems.length > 99 ? '99+' : playlistItems.length}
                        </span>
                    )}
                </button>
                 {/* Playlist Dropdown Content */}
                 {/* Render the dropdown component directly */}
                 <PlaylistDropdown
                     // Pass down the content ref to the dropdown component
                     // REMOVED - The dropdown handles its own ref internally now.
                     playlistItems={playlistItems}
                     isOpen={showPlaylistDropdown}
                     onClose={closeAllDropdowns} // Close ALL dropdowns on click inside
                 />
            </div>

            {/* Example Cart Icon (if needed) */}
            {/*
             <div className="relative">
                <button
                     ref={cartIconRef}
                    className={`${iconBaseClasses} ${iconHoverGradientClasses} relative flex items-center justify-center`}
                    onClick={toggleCartDropdown}
                    aria-label="Shopping Cart"
                    aria-haspopup="true"
                    aria-expanded={showCartDropdown ? "true" : "false"}
                >
                    <HiOutlineShoppingBag />
                     {cartItems && cartItems.length > 0 && (
                        <span className="absolute -top-1 -right-1 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-red-100 bg-green-500 rounded-full dark:bg-green-400"> // Use a different color
                            {cartItems.length > 99 ? '99+' : cartItems.length}
                        </span>
                    )}
                </button>
                 <WishlistCartDropdown
                     // Pass down the content ref
                     items={cartItems} // Pass your cart items state
                     type="cart"
                     isOpen={showCartDropdown}
                     onClose={closeAllDropdowns}
                     onRemoveItem={handleRemoveCartItem} // Pass cart remove handler
                 />
             </div>
            */}


        </div> {/* End Icons hidden on small screens */}


        {/* Theme Toggle - Always visible */}
        <ThemeToggle />


        {/* Profile Section with Dropdown */}
        <div className="relative"> {/* Use relative positioning */}
            <button
              ref={profileIconRef} // Add ref
              className={`flex items-center space-x-1 cursor-pointer focus:outline-none text-2xl sm:text-3xl ${iconBaseClasses} ${iconHoverGradientClasses}`} // Apply base classes, gradient, text size
              onClick={toggleProfileDropdown}
              aria-label="User Profile Menu"
              aria-haspopup="true"
              aria-expanded={showProfileDropdown ? "true" : "false"}
            >
              <HiOutlineUserCircle />
               {/* Optional: Chevron icon next to profile name/icon */}
               {/* You could add the user's name here on larger screens if preferred */}
               {showProfileDropdown ? (
                   <HiOutlineChevronUp className="h-4 w-4 transition-transform duration-200 text-gray-600 dark:text-gray-300" />
               ) : (
                   <HiOutlineChevronDown className="h-4 w-4 transition-transform duration-200 text-gray-600 dark:text-gray-300" />
               )}
            </button>

          {/* Profile Dropdown Menu */}
          <AnimatePresence>
            {showProfileDropdown && (
                <motion.div
                  ref={profileDropdownRef} // Add ref to dropdown content
                  initial={{ opacity: 0, y: -10, scale: 0.95 }} // Added scale for animation consistency
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  // Position absolute relative to the parent 'relative' div
                  className="absolute right-0 mt-2 w-60 bg-white dark:bg-gray-700 rounded-md shadow-lg py-2 z-50 origin-top-right ring-1 ring-black ring-opacity-5 overflow-hidden"
                >
                    {/* User Info */}
                    <div className="px-4 py-2 border-b border-gray-200 dark:border-gray-600 mb-2">
                        <p className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500 dark:from-cyan-400 dark:to-blue-400">{user.name}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 truncate">{user.email}</p>
                    </div>

                    {/* Dropdown Menu Items */}
                    {profileDropdownItems.map((item, index) => (
                        <Link
                            key={index}
                            href={item.link}
                            className="group flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-150 hover:text-blue-600 dark:hover:text-cyan-400"
                            onClick={closeAllDropdowns} // Close ALL dropdowns on item click
                        >
                            <item.icon className="mr-3 text-lg text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors duration-150" />
                            {item.text}
                        </Link>
                    ))}
                </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}