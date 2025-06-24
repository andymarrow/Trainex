import React from 'react';
import PopularPostItem from './PopularPostItem';
import { motion } from 'framer-motion';

function BlogPopularList({ popularBlogs }) {
     if (!popularBlogs || popularBlogs.length === 0) return null; // Don't render if no popular posts

    return (
        <motion.div
             className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md"
             initial={{ opacity: 0, y: 50 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.5 }} // Delay slightly more
        >
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 border-b-2 border-blue-600 dark:border-cyan-400 inline-block pb-2">
                Popular Posts
            </h2>
            <div className="space-y-6"> {/* Space between popular items */}
                {popularBlogs.map((blog, index) => (
                    <PopularPostItem key={blog.id} blog={blog} index={index} />
                ))}
            </div>
        </motion.div>
    );
}

export default BlogPopularList;