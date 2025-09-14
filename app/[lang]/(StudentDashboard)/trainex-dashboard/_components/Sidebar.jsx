// _components/SideBar.js
"use client"

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

// Import icons from react-icons/hi2 for consistency
import {
    HiOutlineHome,          // Used for Dashboard
    HiOutlineAcademicCap,   // Used for Courses
    HiOutlineCurrencyDollar, // Used for Billing
    HiOutlineBars3CenterLeft, // Used for Explore
    HiOutlineCog,           // Used for Settings
    HiOutlineSparkles,      // Used for the footer CTA
} from "react-icons/hi2";

export default function SideBar() {
    const path = usePathname();

    // Define accent gradient classes
    const accentGradientText = 'bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-500'; // Corrected gradient direction to match previous elements
    // Keep the accentGradientBg for the footer CTA, which is fine.
    const accentGradientBg = 'bg-gradient-to-r from-blue-500 to-cyan-500'; // Corrected gradient direction

    // Define classes for Active Link State (combining light and dark)
    // Light Theme Active: Uses light gradient background, solid dark blue text/icon (user liked this)
    // Dark Theme Active: Use a darker background, and the accent gradient for text and icon
    const activeLinkClasses = `
        bg-gradient-to-r from-cyan-50 to-blue-50 text-blue-700 font-semibold // Light theme active styles
        dark:bg-gray-700 // Dark theme active background (darker gray)
        dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-blue-500 dark:to-cyan-500 dark:font-semibold // Dark theme active text/icon gradient
    `;

    const Menu = [
         {
            id: 1,
            name: 'Dashboard',
            icon: <HiOutlineHome />, // Using HiOutlineHome for Dashboard
            path: '/trainex-dashboard'
        },
        {
            id: 2,
            name: 'Courses',
            icon: <HiOutlineAcademicCap />, // Using HiOutlineAcademicCap for Courses
            path: '/trainex-dashboard/courses'
        },
        {
            id: 3,
            name: 'Billing',
            icon: <HiOutlineCurrencyDollar />, // Using HiOutlineCurrencyDollar for Billing
            path: '/trainex-dashboard/billing'
        },
        {
            id: 4,
            name: 'Explore',
            icon: <HiOutlineBars3CenterLeft />, // Already using this one
            path: '/trainex-dashboard/explore'
        },
        {
            id: 5,
            name: 'Settings',
            icon: <HiOutlineCog />, // Using HiOutlineCog for Settings
            path: '/trainex-dashboard/settings'
        },
        // Removed the Logout placeholder as it wasn't being rendered anyway
    ];

    return (
        <div className='fixed top-0 left-0 h-full md:w-64 p-5 shadow-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200 flex flex-col rounded-md'>
            <div className='text-center flex items-center justify-center gap-2'>
                <Link href={"/trainex-dashboard"}>
                    <Image src={'/images/logo.jpg'} width={50} height={50} alt='Logo' className='rounded-full' />
                </Link>
                <div className='flex flex-col items-start'>
                    <span className={`text-xl md:text-2xl font-bold text-gray-800 dark:text-gray-100 ${accentGradientText}`}>Train<span className='bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-500'>ex</span></span> {/* Applied gradient to 'Train' and 'ex' */}
                    {/* <span className='text-xs text-gray-500 dark:text-gray-400'>Elevate Your Skills</span> */}
                </div>
            </div>

            <hr className='my-5 border-gray-200 dark:border-gray-700' />

            <ul className='flex-grow space-y-2'> {/* Added space-y-2 for spacing between list items */}
                {Menu.map((item) => {
                    const isActive = item.path === path;

                    return (
                         <li key={item.id}> {/* Wrap Link in li for better semantic HTML */}
                            <Link href={item.path}>
                                <div className={`flex items-center gap-3 p-3 cursor-pointer rounded-lg transition duration-200 ease-in-out
                                    text-gray-600 dark:text-gray-400 // Default text/icon color
                                    hover:bg-gray-100 dark:hover:bg-gray-700 // Hover background
                                    hover:text-gray-900 dark:hover:text-cyan-400 // Hover text/icon color (solid accent in dark)
                                    ${isActive ? activeLinkClasses : ''}`}> {/* Apply active classes conditionally */}

                                    {/* Icon */}
                                    <div className={`text-2xl flex-shrink-0 ${isActive ? 'text-blue-600 dark:text-cyan-400' : ''}`}> {/* Keep solid accent color for active icon */}
                                        {item.icon}
                                    </div>
                                    {/* Text */}
                                    <h2 className="flex-grow">{item.name}</h2> {/* Allow text to grow */}
                                </div>
                            </Link>
                         </li>
                    );
                })}
            </ul>

            {/* Footer CTA Card */}
            <div className={`mt-auto p-4 rounded-lg shadow-md text-center ${accentGradientBg} text-white`}> {/* Accent gradient background */}
                <HiOutlineSparkles className='text-4xl mx-auto mb-2 text-white' /> {/* Icon - ensure icon is white */}
                <h2 className='text-lg font-semibold'>Get All-in-One Package</h2>
                <p className='text-sm opacity-90 mb-4'>Unlock unlimited Courses access & enhanced learning experience!</p>
                {/* Button */}
                <button className='bg-white text-blue-600 py-2 px-4 rounded-md font-semibold hover:opacity-90 transition duration-200 ease-in-out'>
                    Upgrade Now
                </button>
            </div>

        </div>
    );
}