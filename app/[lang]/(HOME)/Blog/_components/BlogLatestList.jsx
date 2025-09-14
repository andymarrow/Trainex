import React from 'react';
import LatestPostItem from './LatestPostItem';
import { motion } from 'framer-motion';

function BlogLatestList({ blogs }) {

    // Framer Motion variants for the grid items
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
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };


  if (!blogs || blogs.length === 0) {
    return (
      <motion.div
         className="text-center text-gray-600 dark:text-gray-400 py-8"
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ duration: 0.5 }}
      >
        No blog posts found matching your criteria.
      </motion.div>
    );
  }

  return (
    <motion.div
        className="mb-12" // Space below the section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
    >
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white mb-6 border-b-2 border-blue-600 dark:border-cyan-400 inline-block pb-2">
            Latest Posts
        </h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8" // Responsive grid
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {blogs.map(blog => (
            <motion.div key={blog.id} variants={itemVariants}>
                <LatestPostItem blog={blog} />
            </motion.div>
          ))}
        </motion.div>
    </motion.div>
  );
}

export default BlogLatestList;