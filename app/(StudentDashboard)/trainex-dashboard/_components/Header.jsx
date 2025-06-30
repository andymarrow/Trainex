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
  HiOutlineCash,      // Outline version
  HiOutlineCog,       // Outline version
  HiOutlineGlobe,     // Outline version
  HiOutlineHome,      // Outline version
  HiOutlinePlay,      // Outline version
  HiOutlineShoppingBag, // Outline version
} from "react-icons/hi"

// Import outline icon from react-icons/hi2
import { HiOutlinePlayCircle } from 'react-icons/hi2'

// Example user data (replace with actual data)
const user = {
  name: 'John Doe',
  email: 'john.doe@example.com',
}

export default function Header({ toggleSidebar }) {
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
      document.removeEventListener("mousedown", handleClickOutside); // Corrected typo
    };
  }, [dropdownRef, profileIconRef]); // Depend on refs

  const handleProfileClick = () => {
    setShowProfileDropdown(!showProfileDropdown);
  };

  // Define dropdown menu items with consistent outline icons and links
  const dropdownItems = [
    { icon: HiOutlineHome, text: 'Dashboard', link: '/dashboard' },
    { icon: HiOutlineHeart, text: 'Certificates', link: '/certificates' },
    { icon: HiOutlineCash, text: 'Transactions', link: '/transactions' },
    { icon: HiOutlineGlobe, text: 'Course History', link: '/course-history' },
    { icon: HiOutlineHeart, text: 'Favorite Courses', link: '/favorite-courses' },
    { icon: HiOutlineShoppingBag, text: 'Cart', link: '/cart' },
    { icon: HiOutlinePlay, text: 'My Playlist', link: '/my-playlist' },
    { icon: HiOutlineCog, text: 'Settings', link: '/settings' },
  ];

  // Base classes for main header icons that get gradient/scale on hover
  // This ONLY applies to the Bell, Heart, PlayCircle, and Profile icons in the main header bar.
  const iconBaseClasses = "text-gray-600 dark:text-gray-300 transition-all duration-200 ease-in-out hover:scale-105 hover:text-cyan-500 dark:hover:text-cyan-100";

  return (
    <div className='flex justify-between items-center p-2 shadow-md bg-white dark:bg-gray-800 rounded-md'>
      {/* Menu Button for Small Screens */}
      {/* Hidden on medium and larger screens */}
      <div className='flex items-center gap-2'> {/* Use flex here too for alignment */}

        <button
          className="md:hidden text-2xl p-2 text-gray-700 dark:text-gray-300"
          onClick={toggleSidebar}
          aria-label="Open Menu"
        >
          <HiOutlineMenuAlt3 />
        </button>

        <Link href={"/dashboard"} className="flex-shrink-0">
          <Image src={'/images/logo.jpg'} width={50} height={50} alt='Logo' className='rounded-full' />
        </Link>
      </div>

      {/* Right Side Icons and Profile */}
      <div className='flex flex-row items-center space-x-4'>

        {/* Icons hidden on small screens, shown on medium and larger */}
        <div className="hidden md:flex items-center space-x-4 text-3xl cursor-pointer"> {/* Apply common classes here */}
          <div
            className={iconBaseClasses} // Apply base classes
            aria-label="Notifications"
          >
            <HiOutlineBell />
          </div>
          <div
            className={iconBaseClasses} // Apply base classes
            aria-label="Favorites"
          >
            <HiOutlineHeart />
          </div>
          <div
             className={iconBaseClasses} // Apply base classes
            aria-label="Play"
          >
            <HiOutlinePlayCircle />
          </div>
        </div>

        {/* Theme Toggle - Always visible */}
        <div>
           <ThemeToggle />
        </div>

        {/* Profile Section with Dropdown */}
        <div className="relative" ref={profileIconRef}>
          <button
            // Apply iconBaseClasses to the profile button icon as intended
            className={`flex items-center space-x-1 text-3xl cursor-pointer focus:outline-none ${iconBaseClasses}`}
            onClick={handleProfileClick}
            aria-label="User Profile Menu"
            aria-haspopup="true"
            aria-expanded={showProfileDropdown ? "true" : "false"}
          >
            <HiOutlineUserCircle />
          </button>

          {/* Profile Dropdown Menu */}
          {showProfileDropdown && (
            <div
              ref={dropdownRef}
              className="absolute right-0 mt-2 w-60 bg-white dark:bg-gray-700 rounded-md shadow-lg py-2 z-50 origin-top-right animate-fade-in"
            >
              {/* User Info */}
              <div className="px-4 py-2 border-b border-gray-200 dark:border-gray-600 mb-2">
                <p className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">{user.name}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 truncate">{user.email}</p>
              </div>

              {/* Dropdown Menu Items */}
              {dropdownItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.link}
                  // Add 'group' class to the Link for group-hover effects on child icon
                  // Keep existing styles (padding, text color, hover background, transition)
                  // Add 'hover:text-cyan-500' to change the text color specifically on hover
                  className="group flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-150 hover:text-cyan-500 dark:hover:text-cyan-400"
                  onClick={() => setShowProfileDropdown(false)} // Close dropdown on item click
                >
                  <item.icon
                    // Apply group-hover gradient to the icon ONLY
                    // Keep initial icon color
                    className="mr-3 text-lg text-gray-500 dark:text-gray-400 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-cyan-500"
                  />
                  {item.text} {/* The text */}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}