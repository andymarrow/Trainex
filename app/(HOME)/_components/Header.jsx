'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

import { FaFacebook, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa'; // Keep solid for brand icons
import { IoMenuOutline, IoCloseOutline, IoCartOutline, IoHeartOutline, IoChatbubbleOutline, IoChevronDownOutline, IoChevronUpOutline } from 'react-icons/io5'; // Use outlined icons from io5
import ThemeToggle from '@/components/Themetoggle';

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (isMobileMenuOpen) {
      setOpenMobileDropdown(null);
    }
  };

  const toggleMobileDropdown = (name) => {
    setOpenMobileDropdown(openMobileDropdown === name ? null : name);
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    {
      name: 'Courses',
      href: '/courses',
      dropdown: [
        { name: 'All Courses', href: '/courses' },
        { name: 'Popular Courses', href: '/courses/popular' },
        { name: 'Categories', href: '/courses/categories' },
      ]
    },
    {
      name: 'Blog',
      href: '/blog',
      dropdown: [
        { name: 'All Blog Posts', href: '/blog' },
        { name: 'Categories', href: '/blog/categories' },
        { name: 'Archives', href: '/blog/archives' },
      ]
    },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="relative bg-white dark:bg-gray-900 shadow-sm z-50">
      {/* Top Bar */}
      <div className="hidden md:flex items-center justify-between px-6 py-2 text-sm bg-gray-100 dark:bg-gray-800 dark:text-gray-300 text-gray-600">
        <div className="flex items-center space-x-4">
          <span>+111 (564) 568 25</span>
          <span>info@trainex.com</span>
          <span>Mon - Sat: 8:00 - 15:00</span>
        </div>
        <div className="flex items-center space-x-4">
          <span>Follow Us:</span>
          <a href="#" className="hover:text-blue-600 dark:hover:text-cyan-400"><FaFacebook/></a>
          <a href="#" className="hover:text-blue-600 dark:hover:text-cyan-400"><FaTwitter/></a>
          <a href="#" className="hover:text-blue-600 dark:hover:text-cyan-400"><FaLinkedin/></a>
          <a href="#" className="hover:text-blue-600 dark:hover:text-cyan-400"><FaYoutube/></a>
        </div>
       <div className="flex items-center space-x-4">
      <div>

        <a
            href="/contact"
            className="mt-4 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold px-3 py-1 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl w-max text-lg" 
            onClick={toggleMobileMenu} 
          >
           Sign up
          </a>
      </div>
          <div>

        <a
            href="/contact"
            className="mt-4 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold px-3 py-1 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl w-max text-lg" 
            onClick={toggleMobileMenu} 
          >
           Log in
          </a>
      </div>
    </div>
 
      </div>

      {/* Main Header Content */}
     <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20 md:h-24">

        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/images/logo.jpg"
            alt="Train ex Logo"
            width={40}
            height={40}
            className="mr-2 rounded-md"
          />
          <span className="text-2xl md:text-3xl font-bold text-blue-600 dark:text-cyan-400">
            Train ex
          </span>
        </div>

        {/* Desktop Navigation (Hidden on Mobile) */}
        <nav className="hidden md:flex flex-grow justify-center space-x-8 lg:space-x-12">
          {navLinks.map((link) => (
            link.dropdown ? (
              <div key={link.name} className="relative group">
                <a
                  href={link.href}
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-cyan-400 font-semibold transition-colors duration-200 inline-flex items-center"
                >
                  {link.name}
                  <IoChevronDownOutline className="ml-1 h-3 w-3 group-hover:rotate-180 transition-transform duration-200" />
                </a>
                {/* Dropdown Content */}
                <div className="absolute left-0 mt-2 w-48 bg-white dark:bg-gray-700 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none group-hover:pointer-events-auto z-50 overflow-hidden">
                  {link.dropdown.map((dropItem) => (
                    <a
                      key={dropItem.name}
                      href={dropItem.href}
                      className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-600 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors duration-200"
                    >
                      {dropItem.name}
                    </a>
                  ))}
                </div>
              </div>
            ) : (
              // Simple Nav Item
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-cyan-400 font-semibold transition-colors duration-200"
              >
                {link.name}
              </a>
            )
          ))}
        </nav>

        {/* Desktop Right Side Icons & Button */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
           <div className="relative group cursor-pointer">
             <IoChatbubbleOutline className="h-6 w-6 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors duration-200" />
             <span className="absolute -top-1 -right-1 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-red-100 bg-red-500 rounded-full">
               3
             </span>
           </div>

           <div className="relative group cursor-pointer">
             <IoHeartOutline className="h-6 w-6 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors duration-200" />
             <span className="absolute -top-1 -right-1 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-red-100 bg-red-500 rounded-full">
               5
             </span>
           </div>

           <div className="relative group cursor-pointer">
             <IoCartOutline className="h-6 w-6 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors duration-200" />
             <span className="absolute -top-1 -right-1 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-red-100 bg-red-500 rounded-full">
               2
             </span>
           </div>

           <div className="cursor-pointer">
             <ThemeToggle />
           </div>

          <a
            href="/contact"
            className="ml-6 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Contact Us →
          </a>
        </div>

        {/* Mobile Icons & Burger Menu (Visible on Mobile) */}
        <div className="md:hidden flex items-center">
            <div className="relative group cursor-pointer mr-4">
              <ThemeToggle/>
            </div>
            <button
              onClick={toggleMobileMenu}
              className="text-gray-700 dark:text-gray-300 focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <IoCloseOutline className="h-8 w-8" />
              ) : (
                <IoMenuOutline className="h-8 w-8" />
              )}
            </button>
          </div>
      </div>

      {/* Mobile Menu (Animated) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-20 md:top-24 left-0 w-full bg-white dark:bg-gray-800 shadow-lg py-4 z-40 border-t border-gray-200 dark:border-gray-700"
          >
            <nav className="flex flex-col items-center space-y-4 px-4">
              {navLinks.map((link) => (
                <div key={link.name} className="w-full">
                  {link.dropdown ? (
                    <>
                      <button
                        className="flex items-center justify-between w-full text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-cyan-400 text-lg font-medium transition-colors duration-200 py-2 text-left"
                        onClick={() => toggleMobileDropdown(link.name)}
                      >
                        <span>{link.name}</span>
                        {openMobileDropdown === link.name ? (
                           <IoChevronUpOutline className="ml-2 h-4 w-4" />
                        ) : (
                           <IoChevronDownOutline className="ml-2 h-4 w-4" />
                        )}
                      </button>
                      {/* Conditional rendering for dropdown content */}
                      <AnimatePresence>
                        {openMobileDropdown === link.name && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="flex flex-col items-start space-y-2 pl-4 border-l border-gray-300 dark:border-gray-600 mt-2 overflow-hidden"
                          >
                            {link.dropdown.map((dropItem) => (
                              <a
                                key={dropItem.name}
                                href={dropItem.href}
                                className="w-full text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-cyan-400 text-base transition-colors duration-200 py-1"
                                onClick={toggleMobileMenu}
                              >
                                {dropItem.name}
                              </a>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <a
                      key={link.name}
                      href={link.href}
                      className="block w-full text-center text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-cyan-400 text-lg font-medium transition-colors duration-200 py-2"
                      onClick={toggleMobileMenu}
                    >
                      {link.name}
                    </a>
                  )}
                </div>
              ))}

              {/* Mobile Icons */}
              <div className="flex items-center justify-center space-x-6 mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 w-full">
                 <div className="relative cursor-pointer">
                   <IoChatbubbleOutline className="h-7 w-7 text-gray-700 dark:text-gray-300" />
                   <span className="absolute -top-1 -right-1 px-1.5 py-0.5 text-xs font-bold bg-red-500 rounded-full text-red-100">3</span>
                 </div>
                 <div className="relative cursor-pointer">
                   <IoHeartOutline className="h-7 w-7 text-gray-700 dark:text-gray-300" />
                    <span className="absolute -top-1 -right-1 px-1.5 py-0.5 text-xs font-bold bg-red-500 rounded-full text-red-100">5</span>
                 </div>
                 <div className="relative cursor-pointer">
                   <IoCartOutline className="h-7 w-7 text-gray-700 dark:text-gray-300" />
                   <span className="absolute -top-1 -right-1 px-1.5 py-0.5 text-xs font-bold bg-red-500 rounded-full text-red-100">2</span>
                 </div>
              </div>

              {/* Mobile Theme Toggle */}
              {/* Theme toggle already present on mobile, keeping it there */}

               {/* Mobile Auth Buttons */}
               <div className="flex flex-col items-center space-y-3 mt-6 w-full">
                 <a
                     href="/signup"
                     className="w-full text-center bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl text-lg"
                     onClick={toggleMobileMenu}
                   >
                    Sign up
                   </a>
                   <a
                     href="/login"
                     className="w-full text-center border border-blue-500 dark:border-cyan-500 text-blue-600 dark:text-cyan-400 font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:bg-blue-50 dark:hover:bg-gray-700 text-lg"
                     onClick={toggleMobileMenu}
                   >
                    Log in
                   </a>
               </div>

               {/* Mobile Contact Us Button */}
              <a
                href="/contact"
                className="mt-6 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl w-max text-lg"
                onClick={toggleMobileMenu}
              >
                Contact Us →
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;