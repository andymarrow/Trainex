"use client";

import React from 'react';
import { FaNewspaper, FaUser, FaClock, FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Link from 'next/link';

import { latestBlogs } from '@/lib/constants';

function LatestBlogs() {
  const numberOfBlogsToShow = 5;
  const blogsToShow = latestBlogs.slice(0, numberOfBlogsToShow);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: numberOfBlogsToShow * 0.1 + 0.2 }
    }
  };

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

        {/* Blog Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {blogsToShow.map((blog) => (
            <motion.div
              key={blog.id}
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg flex flex-col"
            >
              {/* Blog Image */}
              <div className="relative h-48">
                <img
                  src={blog.imageUrl}
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>

              {/* Blog Content */}
              <div className="p-4 flex flex-col flex-grow">
                <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 mb-2">
                  <span className="flex items-center mr-3"><FaUser className="mr-1" /> {blog.author || 'Author Name'}</span>
                  <span className="flex items-center"><FaClock className="mr-1" /> {blog.date}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">{blog.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 flex-grow">{blog.excerpt}</p>
                <Link href={`/blog/${blog.slug}`} passHref>
                  <span className="mt-4 inline-flex items-center text-blue-600 dark:text-cyan-400 hover:text-blue-800 dark:hover:text-cyan-300 text-sm font-medium cursor-pointer">
                    Read More <FaArrowRight className="ml-2 text-xs" />
                  </span>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          className="mt-16 text-center"
          variants={buttonVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Link href="/bloglist" passHref>
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
