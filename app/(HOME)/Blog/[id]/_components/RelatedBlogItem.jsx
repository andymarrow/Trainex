"use client"; 

import React from 'react';
import Link from 'next/link';
import Image from 'next/image'; 

function RelatedBlogItem({ blog }) {
    
    if (!blog || !blog.id || !blog.title || !blog.excerpt || !blog.imageUrl) {
        console.warn("RelatedBlogItem received incomplete blog data:", blog);
        return null; // Or render a placeholder/error
    }

   
    // Assuming your dynamic route is /(HOME)/Blog/[id]
    const blogHref = `/Blog/${blog.id}`;

    return (
        <Link href={blogHref} className="block group hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg p-4 transition-colors duration-200 -mx-4 sm:mx-0"> {/* Add negative margin for hover effect padding */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center">
                {/* Image */}
                <div className="flex-shrink-0 w-full sm:w-24 h-32 sm:h-20 rounded-md overflow-hidden mb-4 sm:mb-0 sm:mr-4">
                    <Image
                        src={blog.imageUrl}
                        alt={blog.title}
                        width={200} 
                        height={150} 
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                </div>

                {/* Text Content */}
                <div className="flex-grow">
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors duration-200">
                        {blog.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 line-clamp-2"> {/* Limit excerpt lines */}
                        {blog.excerpt}
                    </p>
                </div>
            </div>
        </Link>
    );
}

export default RelatedBlogItem;