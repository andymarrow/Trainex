import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

function WishlistCard({ wishlistItems }) {
   // Animation variants
   const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.8 } },
  };

  // Take first few wishlist items
  const displayItems = wishlistItems.slice(0, 3); // Show up to 3 items

  return (
    <motion.div
      className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md mb-8"
      initial="hidden"
      animate="visible"
      variants={cardVariants}
    >
      <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Your Wishlist</h2>
      {displayItems.length > 0 ? (
        <ul className="space-y-3">
          {displayItems.map(item => (
            <li key={item.id}>
              <Link href={`/courses/${item.id}`} className="flex items-center text-gray-700 dark:text-gray-300 text-sm hover:text-blue-600 dark:hover:text-cyan-400 transition-colors duration-200">
                <Image
                  src={item.thumbnail || '/images/placeholder.jpg'}
                  alt={item.title}
                  width={40}
                  height={25}
                  className="rounded-sm object-cover mr-3 flex-shrink-0"
                />
                 <span className="truncate">{item.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-600 dark:text-gray-400 text-sm">Your wishlist is empty.</p>
      )}
       {wishlistItems.length > displayItems.length && (
          <div className="mt-4 text-right">
              <Link href="/trainex-dashboard/wishlist" className="text-blue-600 dark:text-cyan-400 hover:underline text-sm">
                  View All ({wishlistItems.length})
              </Link>
          </div>
       )}
    </motion.div>
  );
}

export default WishlistCard;