import React from 'react';
import Link from 'next/link';
import { FaUser, FaClock, FaTag } from 'react-icons/fa';

function FeaturedSmallItem({ blog }) {
  if (!blog) return null;

  const author = blog.author || 'Guest Author';
  const category = blog.category || 'Uncategorized';

  return (
    <article className="pb-4 border-b border-gray-200 dark:border-gray-700 last:border-b-0">
        <Link href={`/Blog/${blog.id}`} passHref>
            <div className="block cursor-pointer group">
                 {/* Removed image */}
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-1 leading-tight group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                  {blog.title}
                </h4>
                 <div className="flex flex-wrap items-center text-sm text-gray-600 dark:text-gray-400">
                     <span className="flex items-center mr-4"><FaTag className="mr-1 text-blue-600 dark:text-cyan-400" /> {category}</span> {/* Category/Tag style adjusted */}
                    <span className="flex items-center mr-4"><FaUser className="mr-1" /> {author}</span>
                    <span className="flex items-center mr-4"><FaClock className="mr-1" /> {blog.date}</span>
                    <span className="flex items-center"><FaClock className="mr-1" /> {blog.readTime}</span>
                </div>
            </div>
        </Link>
    </article>
  );
}

export default FeaturedSmallItem;