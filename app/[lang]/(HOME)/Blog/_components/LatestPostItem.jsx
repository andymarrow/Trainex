import React from 'react';
import Link from 'next/link';
import { FaUser, FaClock, FaArrowRight, FaTag } from 'react-icons/fa';

function LatestPostItem({ blog }) {
  if (!blog) return null;

  const author = blog.author || 'Guest Author';
  const category = blog.category || 'Uncategorized';

  return (
    <article className="rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-800 flex flex-col cursor-pointer group transition-transform duration-300 ease-in-out hover:scale-[1.03]">
        <Link href={`/Blog/${blog.id}`} passHref className="flex flex-col h-full">
          <img
            src={blog.imageUrl}
            alt={blog.title}
            className="w-full h-48 object-cover" // Fixed height for grid item image
          />
          <div className="p-5 flex flex-col flex-grow"> {/* Added flex-grow */}
            <div className="flex flex-wrap items-center text-sm text-gray-600 dark:text-gray-400 mb-3">
              <span className="flex items-center mr-4 text-blue-600 dark:text-cyan-400 font-semibold"><FaTag className="mr-1" /> {category}</span>
              <span className="flex items-center mr-4"><FaUser className="mr-1" /> {author}</span>
              <span className="flex items-center"><FaClock className="mr-1" /> {blog.date}</span>
            </div>
            <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-3 leading-tight group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
              {blog.title}
            </h4>
            <p className="text-gray-600 dark:text-gray-400 text-base mb-4 flex-grow"> {/* Added flex-grow */}
              {blog.excerpt}
            </p>
             <span className="inline-flex items-center text-blue-600 dark:text-cyan-400 font-semibold group-hover:text-blue-800 dark:group-hover:text-cyan-600 transition-colors duration-200 mt-auto"> {/* mt-auto pushes to bottom */}
                Read More <FaArrowRight className="ml-2 text-sm" />
             </span>
          </div>
        </Link>
    </article>
  );
}

export default LatestPostItem;