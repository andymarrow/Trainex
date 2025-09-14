"use client"
import ThemeToggle from '@/components/Themetoggle' // Assuming this component exists

import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useRef, useEffect } from 'react'

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
  HiOutlinePlay,
  HiOutlineShoppingBag,
  HiOutlineDocumentText, // Using this for certificates/notes
} from "react-icons/hi"

// Import outline icon from react-icons/hi2
import { HiOutlinePlayCircle } from 'react-icons/hi2' // Keep PlayCircle from hi2

// Example user data (replace with actual data)
const user = {
  name: 'Alex Johnson', // Using sample user name for consistency
  email: 'alex.johnson@example.com',
  avatar: '/images/happystudent4.png' // Assuming user object has avatar
}

export default function Header() {
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const dropdownRef = useRef(null); // Ref for the dropdown container
  const profileIconRef = useRef(null); // Ref for the profile icon button

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      // Check if the click is outside the dropdown and the profile icon button
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        profileIconRef.current &&
        !profileIconRef.current.contains(event.target)
      ) {
        setShowProfileDropdown(false);
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on cleanup
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef, profileIconRef]); // Depend on refs


  const handleProfileClick = () => {
    setShowProfileDropdown(!showProfileDropdown);
  };

   // Define dropdown menu items that are *always* visible in the dropdown
  const defaultDropdownItems = [
    { icon: HiOutlineHome, text: 'Dashboard', link: '/trainex-dashboard' }, // Adjusted link to dashboard
    { icon: HiOutlineDocumentText, text: 'Certificates', link: '/trainex-dashboard/certificates' }, // Using DocumentText for Certificates
    { icon: HiOutlineCash, text: 'Transactions', link: '/trainex-dashboard/transactions' },
    { icon: HiOutlineGlobe, text: 'Course History', link: '/trainex-dashboard/course-history' },
    { icon: HiOutlineHeart, text: 'Favorite Courses', link: '/trainex-dashboard/favorite-courses' },
    { icon: HiOutlineShoppingBag, text: 'Cart', link: '/cart' }, // Assuming cart link is not in dashboard route
    { icon: HiOutlinePlay, text: 'My Courses', link: '/trainex-dashboard/courses' }, // Link to the enrolled courses page
    { icon: HiOutlineCog, text: 'Settings', link: '/trainex-dashboard/settings' },
  ];

   // Define icons that are shown in the main header on large screens (>= md)
   // AND moved to the dropdown on small screens (< md)
   const mainHeaderIcons = [
       { icon: HiOutlineBell, text: 'Notifications', link: '/notifications' }, // Add link for notifications
       { icon: HiOutlineHeart, text: 'Favorites', link: '/trainex-dashboard/favorite-courses' }, // Link to favorite courses
       { icon: HiOutlinePlayCircle, text: 'Continue Learning', link: '/trainex-dashboard/courses' }, // Link to enrolled courses/continue
   ];


  // Base classes for main header icons that get accent color/scale on hover
  // Applied to the icons themselves, not the wrapper div/button
  const mainIconHoverClasses = "transition-all duration-200 ease-in-out hover:scale-110 text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-cyan-400";


  return (
    <header className='flex justify-between items-center p-2 shadow-md bg-white dark:bg-gray-800 rounded-md'>
      {/* Left Side - Logo */}
      {/* Use flex here too for alignment */}
      <div className='flex items-center gap-2'>
        <Link href={"/trainex-dashboard"} className="flex-shrink-0 rounded-full overflow-hidden"> {/* Wrap Image in Link */}
            <Image
              src={'/images/logo.jpg'}
              width={40} // Slightly smaller logo for header
              height={40}
              alt='Logo'
              className='transition-transform duration-200 ease-in-out hover:scale-105' // Subtle hover effect on logo
             />
        </Link>
      </div>

      {/* Right Side Icons and Profile */}
      <div className='flex flex-row items-center space-x-3 md:space-x-4'> {/* Adjust spacing */}

        {/* Main Header Icons (Bell, Heart, PlayCircle) - Visible on md and larger */}
        <div className="hidden md:flex items-center space-x-4 text-2xl cursor-pointer"> {/* Adjust icon size slightly */}
          {mainHeaderIcons.map((item, index) => (
             <Link
                key={`main-icon-${index}`}
                href={item.link}
                className={`p-1 ${mainIconHoverClasses}`} // Apply hover classes
                aria-label={item.text}
             >
                 <item.icon /> {/* Render the icon component */}
             </Link>
          ))}
        </div>

        {/* Theme Toggle - Always visible */}
        <div>
           <ThemeToggle />
        </div>

        {/* Profile Section with Dropdown */}
        <div className="relative" ref={profileIconRef}>
          <button
            // Apply hover classes directly to the button icon
            className={`flex items-center justify-center w-10 h-10 rounded-full overflow-hidden text-2xl cursor-pointer focus:outline-none ${mainIconHoverClasses}`} // Apply icon hover classes to the button itself
            onClick={handleProfileClick}
            aria-label="User Profile Menu"
            aria-haspopup="true"
            aria-expanded={showProfileDropdown ? "true" : "false"}
          >
             {/* Display user avatar or default icon */}
             {user.avatar ? (
                 <Image
                   src={user.avatar}
                   alt={user.name}
                   width={40}
                   height={40}
                   className="object-cover"
                 />
             ) : (
                 <HiOutlineUserCircle className="w-full h-full" /> // Use the icon as a fallback
             )}

          </button>

          {/* Profile Dropdown Menu */}
          {showProfileDropdown && (
            <div
              ref={dropdownRef}
              className="absolute right-0 mt-2 w-64 bg-white dark:bg-gray-700 rounded-md shadow-lg py-2 z-50 origin-top-right animate-fade-in" // Increased width slightly
            >
              {/* User Info */}
              <div className="px-4 py-3 border-b border-gray-200 dark:border-gray-600 mb-2"> {/* Increased padding */}
                 {/* User Name with Gradient */}
                <p className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">{user.name}</p>
                 {/* User Email */}
                <p className="text-xs text-gray-500 dark:text-gray-400 truncate">{user.email}</p>
              </div>

              {/* Mobile-Only Icons in Dropdown (Visible on < md) */}
              <div className="md:hidden border-b border-gray-200 dark:border-gray-600 pb-2 mb-2"> {/* Separator */}
                 {mobileDropdownIcons.map((item, index) => (
                     <Link
                         key={`mobile-icon-${index}`}
                         href={item.link}
                         className="flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-150"
                         onClick={() => setShowProfileDropdown(false)} // Close dropdown on item click
                     >
                        <item.icon className="mr-3 text-lg text-gray-500 dark:text-gray-400 group-hover:text-blue-500 dark:group-hover:text-cyan-400" /> {/* Apply accent color on group hover */}
                        {item.text}
                     </Link>
                 ))}
              </div>


              {/* Default Dropdown Menu Items (Always in dropdown) */}
              {defaultDropdownItems.map((item, index) => (
                <Link
                  key={`dropdown-item-${index}`}
                  href={item.link}
                  className="group flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-150 hover:text-blue-500 dark:hover:text-cyan-400" // Text color changes on hover
                  onClick={() => setShowProfileDropdown(false)} // Close dropdown on item click
                >
                  <item.icon
                    // Apply accent color to the icon on group hover
                    className="mr-3 text-lg text-gray-500 dark:text-gray-400 group-hover:text-blue-500 dark:group-hover:text-cyan-400"
                  />
                  {item.text} {/* The text */}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

// Define icons that are only shown in the dropdown on small screens (< md)
const mobileDropdownIcons = [
   { icon: HiOutlineBell, text: 'Notifications', link: '/notifications' },
    // Note: Favorites is already in defaultDropdownItems, so we don't need to add it here again unless
    // you want a *separate* "Favorites" entry just for mobile. Let's assume the main one is sufficient.
   { icon: HiOutlinePlayCircle, text: 'Continue Learning', link: '/trainex-dashboard/courses' }, // Link to enrolled courses
];