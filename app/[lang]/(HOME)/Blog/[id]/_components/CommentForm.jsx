"use client"; 

import React, { useState } from 'react';

import { FaPaperPlane } from 'react-icons/fa';

function CommentForm({ onAddComment }) {
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // In a real app, this would send data to your backend
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!author.trim() || !content.trim()) {
      alert('Please enter your name and comment.');
      return;
    }

    setIsSubmitting(true);

    // Simulate adding the comment (client-side only)
    // In a real app, this would be an async API call
    const newComment = {
      id: Date.now(), // Simple unique ID (not good for real DB)
      author: author.trim(),
      date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }), // Current date
      content: content.trim(),
    };

    // Call the parent function to add the comment to the list
    onAddComment(newComment);

    // Reset form
    setAuthor('');
    setContent('');
    setIsSubmitting(false);

    // TODO: Send API request to backend to save the comment persistently
    console.log("Comment submitted (client-side only):", newComment);
  };

  return (
    <form
        onSubmit={handleSubmit}
        className="space-y-4 bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-inner"
  
    >
      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Leave a Comment</h3>

      <div>
        <label htmlFor="author" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Name
        </label>
        <input
          type="text"
          id="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-cyan-50adesign transition-colors"
          disabled={isSubmitting}
        />
      </div>

      <div>
        <label htmlFor="content" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Comment
        </label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows="4"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-cyan-500 resize-none transition-colors"
           disabled={isSubmitting}
        ></textarea>
      </div>

      <button
        type="submit"
        className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold rounded-md shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 dark:focus:ring-cyan-400 disabled:opacity-50 disabled:cursor-not-allowed"

        disabled={isSubmitting}
      >
        {isSubmitting ? 'Posting...' : 'Post Comment'}
        {!isSubmitting && <FaPaperPlane className="ml-2" />}
      </button>
    </form>
  );
}

export default CommentForm;