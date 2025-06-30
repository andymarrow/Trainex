import React from 'react';
import FeaturedLargeItem from './FeaturedLargeItem';
import FeaturedSmallItem from './FeaturedSmallItem';
import { motion } from 'framer-motion';

function BlogFeatured({ featuredBlogs }) {
    // We expect featuredBlogs to be an array where the first item is the large one
    const largeFeatured = featuredBlogs && featuredBlogs.length > 0 ? featuredBlogs[0] : null;
    const smallFeatured = featuredBlogs && featuredBlogs.length > 1 ? featuredBlogs.slice(1) : [];

    return (
        <motion.div
           className="mb-12" // Space below the section
           initial={{ opacity: 0, y: 50 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.3 }}
        >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white mb-6 border-b-2 border-blue-600 dark:border-cyan-400 inline-block pb-2">
                Featured Posts
            </h2>
             {largeFeatured && <FeaturedLargeItem blog={largeFeatured} />}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6"> {/* Grid for small items, 2 cols on medium+ */}
                {smallFeatured.map(blog => (
                   <FeaturedSmallItem key={blog.id} blog={blog} />
                ))}
            </div>
        </motion.div>
    );
}

export default BlogFeatured;