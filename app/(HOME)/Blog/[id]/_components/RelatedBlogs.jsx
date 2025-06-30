"use client";

import React from 'react';

import RelatedBlogItem from './RelatedBlogItem';

import { FaLink } from 'react-icons/fa';

function RelatedBlogs({ blogs }) {
    if (!blogs || blogs.length === 0) return null; // Don't render if no related posts

    return (
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
                <FaLink className="mr-3 text-blue-600 dark:text-cyan-400" /> Related Posts
            </h2>
            <div className="space-y-6"> {/* Space between related items */}
                {/* Renders the new component */}
                {blogs.map(blog => (
                    <RelatedBlogItem key={blog.id} blog={blog} />
                ))}
            </div>
        </div>
    );
}

export default RelatedBlogs;