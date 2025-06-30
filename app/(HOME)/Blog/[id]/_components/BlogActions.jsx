"use client"; 

import React, { useState } from 'react';
import { FaHeart, FaShareAlt, FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa';


function BlogActions({ initialLikes, blogTitle, blogSlug }) {
  const [likes, setLikes] = useState(initialLikes || 0);
  const [liked, setLiked] = useState(false);
  const [showShareOptions, setShowShareOptions] = useState(false);

  // In a real app, this would send a request to your backend to update the like count
  const handleLike = () => {
    if (!liked) {
      setLikes(likes + 1);
      setLiked(true);
      // TODO: Send API request to backend to record the like
    } else {
       // Optional: Allow unliking
       // setLikes(likes - 1);
       // setLiked(false);
       // TODO: Send API request to backend to remove the like
    }
  };

  const handleShareClick = () => {
    // Use Web Share API if available
    if (navigator.share) {
      navigator.share({
        title: blogTitle,
        text: `Check out this blog post: ${blogTitle}`,
        url: window.location.href,
      }).catch((error) => console.error('Error sharing:', error));
    } else {
      // Fallback to showing share options
      setShowShareOptions(!showShareOptions);
    }
  };

    // Function to copy link to clipboard
    const copyLink = () => {
        navigator.clipboard.writeText(window.location.href).then(() => {
            alert("Link copied to clipboard!"); // Simple feedback
            setShowShareOptions(false); // Close options after copy
        }).catch(err => {
            console.error('Failed to copy link: ', err);
        });
    };

  // Construct share URLs (adjust based on actual sharing services)
  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareText = encodeURIComponent(`Check out "${blogTitle}"`);

  const twitterUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${shareText}`;
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const linkedinUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(currentUrl)}&title=${encodeURIComponent(blogTitle)}`;


  return (
    <div className="flex items-center space-x-6 mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
      {/* Like Button */}
      <button
        onClick={handleLike}
        className={`flex items-center space-x-2 text-gray-600 dark:text-gray-400 transition-colors ${liked ? 'text-red-500 dark:text-red-400' : 'hover:text-blue-600 dark:hover:text-cyan-400'}`}
      
        disabled={liked} // Disable after liking (client-side)
      >
        <FaHeart className={`w-5 h-5 ${liked ? 'fill-current' : 'stroke-current stroke-2'}`} /> {/* Solid heart when liked */}
        <span>{likes} Likes</span>
      </button>

      {/* Share Button */}
      <div className="relative">
        <button
          onClick={handleShareClick}
          className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors"
          
        >
          <FaShareAlt className="w-5 h-5" />
          <span>Share</span>
        </button>

        {/* Share Options Popover (Fallback for Web Share API) */}
        <div>
          {showShareOptions && !navigator.share && (
            <div
             
              className="absolute left-0 bottom-full mb-2 w-40 bg-white dark:bg-gray-700 rounded-md shadow-lg p-3 text-sm z-10"
            >
              <a href={twitterUrl} target="_blank" rel="noopener noreferrer" className="flex items-center px-2 py-1 text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600 rounded transition-colors">
                <FaTwitter className="mr-2 text-blue-400" /> Twitter
              </a>
               <a href={facebookUrl} target="_blank" rel="noopener noreferrer" className="flex items-center px-2 py-1 text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600 rounded transition-colors">
                <FaFacebook className="mr-2 text-blue-600" /> Facebook
              </a>
              <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="flex items-center px-2 py-1 text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600 rounded transition-colors">
                <FaLinkedin className="mr-2 text-blue-700" /> LinkedIn
              </a>
               <button onClick={copyLink} className="flex items-center w-full text-left px-2 py-1 text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600 rounded transition-colors mt-1 border-t border-gray-200 dark:border-gray-600 pt-2">
                 <FaShareAlt className="mr-2 text-gray-500" /> Copy Link
               </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default BlogActions;