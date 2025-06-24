"use client";

import React from 'react';
import { FaNewspaper, FaUser, FaClock, FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Link from 'next/link'; // Use Next.js Link for navigation

import { latestBlogs } from '@/lib/constants'; // Import your blog data

function LatestBlogs() {

  // --- IMPORTANT CHANGE ---
  // Define how many blogs to show on the landing page
  const numberOfBlogsToShow = 4;
  // Get only the first 'numberOfBlogsToShow' blogs from the array
  const blogsToShow = latestBlogs.slice(0, numberOfBlogsToShow);
  // --- END IMPORTANT CHANGE ---


  // Framer Motion variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Small delay between items
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 }, // Slide up and fade in
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  // Variants for the "View All" button
  const buttonVariants = {
     hidden: { opacity: 0, y: 30 },
     visible: {
        opacity: 1,
        y: 0,
        // Calculate delay based on the *number of items being displayed* + a small offset
        transition: { duration: 0.6, ease: "easeOut", delay: numberOfBlogsToShow * 0.1 + 0.2 }
     }
  }


  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 text-gray-800 dark:text-white">
      <div className="max-w-7xl mx-auto">

        {/* Section Title */}
        <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="flex items-center justify-center text-sm font-semibold text-blue-600 dark:text-cyan-400 uppercase mb-2">
            <FaNewspaper className="h-5 w-5 mr-2" /> Our News & Blogs
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-800 dark:text-white leading-tight">
            Latest Articles & Insights
          </h2>
        </motion.div>

        {/* Blog Posts List - Using alternating layout */}
        <motion.div
          className="space-y-12 lg:space-y-16" // Vertical space between blog items
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }} // Trigger when a bit of the container is visible
        >
          {/* --- IMPORTANT CHANGE: Mapping over blogsToShow instead of latestBlogs --- */}
          {blogsToShow.map((blog, index) => (
            <motion.div
              key={blog.id}
              variants={itemVariants} // Apply animation to each blog item
              className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center
                         ${index % 2 === 1 ? 'md:grid-flow-col-dense' : ''}`} // Alternate layout
            >
              {/* Blog Image */}
              <div className={`rounded-lg overflow-hidden shadow-lg relative
                             ${index % 2 === 1 ? 'md:col-start-2' : ''}`}> {/* Image position alternates */}
                <img
                  src={blog.imageUrl}
                  alt={blog.title}
                  className="w-full h-64 sm:h-80 object-cover transition-transform duration-500 ease-in-out hover:scale-105" // Hover scale effect
                />
                {/* Optional: Overlay or gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>

              {/* Blog Content */}
              <div className={`flex flex-col justify-center
                             ${index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}`}> {/* Content position alternates */}
                {/* Author and Date */}
                {/* NOTE: Your provided blog data doesn't include an 'author' field.
                   This line will show "Author Name". You might want to remove the
                   FaUser icon and text or add an author field to your data. */}
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-3">
                  <span className="flex items-center mr-4"><FaUser className="mr-1" /> {blog.author || 'Author Name'}</span> {/* Added fallback */}
                  <span className="flex items-center"><FaClock className="mr-1" /> {blog.date}</span>
                </div>

                {/* Title */}
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white mb-3 leading-tight">
                  {blog.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-lg">
                  {blog.excerpt}
                </p>

                {/* Read More Link */}
                {/* Using Next.js Link for client-side navigation */}
                <Link href={`/blog/${blog.slug}`} passHref> {/* Use passHref when wrapping elements */}
                    <span className="inline-flex items-center text-blue-600 dark:text-cyan-400 font-semibold hover:text-blue-800 dark:hover:text-cyan-600 transition-colors duration-200 cursor-pointer">
                      Read More Details <FaArrowRight className="ml-2 text-sm" />
                    </span>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* "View All Posts" Button */}
        <motion.div
           className="mt-16 text-center"
           variants={buttonVariants}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, amount: 0.3 }}
        >
          <Link href="/bloglist" passHref> {/* Use passHref */}
              <span className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 dark:focus:ring-cyan-400 cursor-pointer">
                View All Posts →
              </span>
           </Link>
        </motion.div>

      </div>
    </section>
  );
}

export default LatestBlogs;