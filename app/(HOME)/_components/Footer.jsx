// src/components/Footer.js or src/components/Footer.tsx
"use client"

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaInstagram, FaTelegramPlane, FaYoutube, FaTwitter, FaTiktok, FaEnvelope, FaLinkedinIn } from 'react-icons/fa';

function Footer() {
    // Replicate the nav items from the Header
    const navItems = [
        { name: 'Home', href: '/' },
    { name: 'Courses', href: '/Courses' },
    { name: 'Blog', href: '/Blog' },
    { name: 'Contact', href: '/contact' },
    { name: 'About', href: '/About', display: 'About us' },
    ];

    // Social media links (replace with actual URLs)
    const socialLinks = [
    { name: 'Instagram', href: '/', icon: FaInstagram}, // Moved these up to appear first visually
    { name: 'Telegram', href: '/', icon: FaTelegramPlane },
    { name: 'YouTube', href: '/', icon: FaYoutube },
    { name: 'X', href: '/', icon: FaTwitter },
    { name: 'TikTok', href: '/', icon: FaTiktok },
    { name: 'Gmail', href: '/', icon: FaEnvelope },
    { name: 'LinkedIn', href: '/', icon: FaLinkedinIn },
];


  return (
    <footer className="bg-white text-gray-700 dark:bg-gray-950 dark:text-gray-400 py-12 relative overflow-hidden">

         <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-cyan-200 opacity-40 dark:bg-cyan-800 dark:opacity-10 rounded-full filter blur-3xl animate-blob pointer-events-none"></div>
         <div className="absolute top-0 right-1/4 w-64 h-64 bg-cyan-200 opacity-40 dark:bg-cyan-600 dark:opacity-10 rounded-full filter blur-3xl animate-blob animation-delay-2000 pointer-events-none"></div>


      <div className="container mx-auto px-4 z-10 relative">
        {/* Main Grid/Flex Layout */}
        <div className="flex flex-col md:flex-row md:justify-between gap-y-8 md:gap-x-12 lg:gap-x-16 border-b border-gray-200 dark:border-gray-800 pb-8 mb-8">

          {/* Column 1: Logo and Description */}
          <div className="w-full md:w-1/3 lg:w-1/4 flex flex-col items-center md:items-start text-center md:text-left">
            <Link href="/" className="flex flex-wrap items-center gap-2 mb-4" legacyBehavior>
                <a>
                    <div className='flex flex-row items-center gap-2'>
                        <div>
                            <Image
                                src={"/images/logo.jpg"}
                                alt={`equb logo`}
                                width={40}
                                height={40}
                                className="object-cover rounded-full" 
                            />
                        </div>
                        <div className="flex flex-col -space-y-1">
                            <span className="text-xl font-bold text-gray-800 dark:text-white">
                                <span className="text-cyan-800 dark:text-cyan-500">Train</span> Ex
                            </span>
                            <span className="text-xs text-gray-600 dark:text-gray-500">
                                Online Learning
                            </span>
                        </div>
                    </div>
                </a>
            </Link>
            <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-500 max-w-sm mt-2 pt-4">
              Making your future Bright.
            </p>
                <p className="text-cyan-800 dark:text-cyan-500 pt-4">
                    " Train Ex " 
                </p>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="w-full md:w-1/3 lg:w-1/4 items-center md:items-start text-center md:text-left"> 
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4 border-b border-cyan-800 dark:border-cyan-600 pb-2 inline-block">
                Social Links
                Navigation
            </h3>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} legacyBehavior>
                    <a className="text-gray-700 dark:text-gray-500 hover:text-cyan-700 dark:hover:text-cyan-400 transition-colors duration-200 text-sm">
                      {item.display || item.name}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Social Media Links */}
           <div className="w-full md:w-1/3 lg:w-1/4 flex flex-col items-center md:items-start text-center md:text-left"> {/* Added text-center md:text-left */}
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4 border-b border-cyan-800 dark:border-cyan-600 pb-2 inline-block">
                Follow us
              </h3>
              <div className="flex flex-wrap justify-center md:justify-start gap-4 text-gray-600 dark:text-gray-500">
            
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className={`text-cyan-500 hover:text-cyan-700 dark:text-blue-400 dark:hover:text-blue-700 transition-colors duration-200 transform hover:scale-110`}
                  >
                    <social.icon className="h-6 w-6" />
                  </a>
                ))}
              </div>
           </div>

           {/* Column 4: Address Info (Hidden below lg) */}
           {/* This column is already hidden below lg, so no mobile specific layout needed */}
             <div className="w-full md:w-1/3 lg:w-1/4 hidden lg:block">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4 border-b border-cyan-800 dark:border-cyan-600 pb-2 inline-block">
                    Address
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-500 mb-2">
                    Bole , Addis Ababa , Ethiopia
                </p>
                <div className="text-sm text-gray-700 dark:text-gray-500 mb-2 space-y-1">
                    <div>ስልክ: +251 955 568 333</div>
                    <div className="pl-8">+251 911 223 444 </div>
                    <div className="pl-8">+251 925 267 444</div>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-500">
                    Email: Trainex@Trainex.edu
                </p>
            </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center text-sm text-gray-600 dark:text-gray-600">
          © {new Date().getFullYear()} Train Ex - all Rights reserved
        </div>
      </div>
    </footer>
  );
}

export default Footer;