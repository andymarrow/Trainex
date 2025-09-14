import React from 'react';
import Link from 'next/link';
import { FaUser, FaClock, FaArrowRight, FaTag } from 'react-icons/fa';

function FeaturedLargeItem({ blog }) {
  if (!blog) return null;

  const author = blog.author || 'Guest Author';
  const category = blog.category || 'Uncategorized';

  return (
    <article className="col-span-full lg:col-span-full mb-8"> {/* Takes full width on small, but is within the larger grid */}
      <Link href={`/Blog/${blog.id}`} passHref>
        <div className="block rounded-lg overflow-hidden shadow-lg cursor-pointer group transition-transform duration-300 ease-in-out hover:scale-[1.02]">
          <img
            src={blog.imageUrl}
            alt={blog.title}
            className="w-full h-64 sm:h-80 object-cover"
          />
          <div className="p-6 bg-white dark:bg-gray-800">
            <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-3">
              <span className="flex items-center mr-4 text-blue-600 dark:text-cyan-400 font-semibold"><FaTag className="mr-1" /> {category}</span>
              <span className="flex items-center mr-4"><FaUser className="mr-1" /> {author}</span>
              <span className="flex items-center mr-4"><FaClock className="mr-1" /> {blog.date}</span>
              <span className="flex items-center"><FaClock className="mr-1" /> {blog.readTime}</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white mb-3 leading-tight group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
              {blog.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-4">
              {blog.excerpt}
            </p>
             <span className="inline-flex items-center text-blue-600 dark:text-cyan-400 font-semibold group-hover:text-blue-800 dark:group-hover:text-cyan-600 transition-colors duration-200">
                Read More <FaArrowRight className="ml-2 text-sm" />
             </span>
          </div>
        </div>
      </Link>
    </article>
  );
}

export default FeaturedLargeItem;