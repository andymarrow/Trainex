import React from 'react';
import Link from 'next/link';
import { FaUser, FaClock } from 'react-icons/fa';

function PopularPostItem({ blog, index }) {
    if (!blog) return null;

    const author = blog.author || 'Guest Author';

  return (
     <article className="flex items-start space-x-4 pb-4 border-b border-gray-200 dark:border-gray-700 last:border-b-0">
        <div className="text-4xl font-bold text-blue-300 dark:text-cyan-600 opacity-70">{String(index + 1).padStart(2, '0')}</div> {/* Number with leading zero */}
        <Link href={`/Blog/${blog.id}`} passHref className="block flex-grow cursor-pointer group">
             <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-1 leading-tight group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
              {blog.title}
            </h4>
             <div className="flex flex-wrap items-center text-sm text-gray-600 dark:text-gray-400">
                <span className="flex items-center mr-3"><FaUser className="mr-1" /> {author}</span>
                <span className="flex items-center"><FaClock className="mr-1" /> {blog.date}</span>
            </div>
        </Link>
    </article>
  );
}

export default PopularPostItem;