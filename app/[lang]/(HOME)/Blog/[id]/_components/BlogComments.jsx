"use client";

import React, { useState, useEffect, useRef } from 'react';
import CommentForm from './CommentForm';

import { FaComments, FaChevronDown, FaChevronUp } from 'react-icons/fa';

function CommentItem({ comment }) {
    return (
        <div className="border-b border-gray-200 dark:border-gray-700 pb-4 last:border-b-0">
            <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">{comment.author}</p>
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">{comment.date}</p>
            <p className="text-gray-700 dark:text-gray-300">{comment.content}</p>
        </div>
    );
}

function BlogComments({ initialComments, initialBlogId }) {
    const [comments, setComments] = useState(initialComments || []);
  
    const [isCollapsed, setIsCollapsed] = useState(false); // Default to open
    const contentRef = useRef(null);

    // State to control the *target* maxHeight for transitions.
    // Initialize to '0px'. If not collapsed, the effect will immediately measure and update this.
    const [targetMaxHeight, setTargetMaxHeight] = useState('0px');


    // Effect to handle collapse/expand logic and height calculation
    useEffect(() => {
        const element = contentRef.current;
        if (!element) return; 

        console.log(`useEffect: isCollapsed = ${isCollapsed}, comments count = ${comments.length}`);

        // Ensure overflow-hidden is always applied via the class
        element.style.overflow = ''; // Clear any temporary inline overflow set during measurement

        if (!isCollapsed) {
            // --- Expanding Logic ---
            console.log('useEffect: Handling Expand');

            // Temporarily remove maxHeight to measure true scrollHeight
            // Use rAF to ensure this style is applied before measuring
            requestAnimationFrame(() => {
                element.style.maxHeight = 'none'; // Remove constraint for measurement
                 element.style.overflow = 'visible'; // Temporarily allow overflow for measurement

                requestAnimationFrame(() => { // Wait another tick for potential layout changes after overflow:visible
                    const measuredHeight = element.scrollHeight;
                    console.log('useEffect: Measured scrollHeight for expansion:', measuredHeight);

                    // Set targetMaxHeight state to the measured height
                    // This initiates the transition from 0px (or current) to measuredHeight
                    setTargetMaxHeight(`${measuredHeight}px`);
                    console.log('useEffect: Set targetMaxHeight to:', `${measuredHeight}px`);

                     // Restore overflow after measurement (className handles it)
                     element.style.overflow = '';


                    // Clean up: Set maxHeight to 'none' after transition ends
                    const handleTransitionEnd = () => {
                        // Check if we are still in the expanded state after transition
                         // Use scrollHeight check or rely purely on isCollapsed? isCollapsed is safer.
                         if (!isCollapsed && parseFloat(element.style.maxHeight) >= measuredHeight) { // Add threshold or compare with measuredHeight
                              element.style.maxHeight = 'none'; // Allow natural height
                              console.log('TransitionEnded (Expand): MaxHeight set to none.');
                          }
                    };
                     element.addEventListener('transitionend', handleTransitionEnd);

                    // Cleanup function specific to the expanding listener
                     // This runs if the effect re-runs (e.g., collapse clicked) before transition ends
                     return () => {
                         element.removeEventListener('transitionend', handleTransitionEnd);
                          console.log('Cleanup: Expanding transitionend listener removed.');
                     };
                });
            });


        } else {
            // --- Collapsing Logic ---
             console.log('useEffect: Handling Collapse');

             // To animate collapse, we must transition from the element's *current* height
             // to 0px. Ensure we read the height after potential layout updates.
             requestAnimationFrame(() => {
                 const startHeight = element.scrollHeight;
                 console.log('useEffect: Current scrollHeight for collapsing:', startHeight);

                 // Set the max-height CSS property directly to the current height
                 // This "locks in" the starting point for the transition.
                 element.style.maxHeight = `${startHeight}px`;
                 console.log('useEffect: Set element.style.maxHeight directly to:', `${startHeight}px`);


                // Use rAF again to ensure the browser registers the starting maxHeight value *before*
                // we tell it the target value (0px).
                requestAnimationFrame(() => {
                     // Now, update the state to the target height (0px)
                     // This state change will trigger a re-render, applying maxHeight: '0px'
                     // via the style prop, and the transition will animate from the
                     // element.style.maxHeight we just set.
                     setTargetMaxHeight('0px');
                     console.log('useEffect: Set targetMaxHeight state to 0px');

                     // No need for a specific cleanup listener for the collapse end here
                     // as we want it to stay at max-height: 0.
                     // Return empty function if no specific cleanup for this branch
                     return () => {};
                });
             });
             // Return empty function if no specific cleanup for the main else branch
              return () => {};

        }

    }, [isCollapsed, comments]); // Effect runs when collapse state or comments change


    // Function to add a new comment
    const handleAddComment = (newComment) => {
        setComments(prevComments => [...prevComments, newComment]);

        // Optional: If collapsed, expand it when a new comment is added
        // This state change will trigger the useEffect to expand 
        //which i personally think dont matter cause the whole page collapse with the comment form so
        //owww i fixed it wehihihihihihih now the comment section is always open
        if (isCollapsed) {
            setIsCollapsed(false);
        }
    };

    // Function to toggle the collapsed state
    const toggleCollapse = () => {
        console.log('Toggling collapse. Current state:', isCollapsed);
        setIsCollapsed(prev => !prev);
    };


    return (
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            {/* Header with Title and Toggle Button */}
            <div
                className="flex justify-between items-center mb-6 cursor-pointer select-none"
                onClick={toggleCollapse}
                role="button" // Indicate it's interactive
                aria-expanded={!isCollapsed}
                aria-controls={`comments-section-${initialBlogId}`}
            >
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white flex items-center pointer-events-none">
                    <FaComments className="mr-3 text-purple-600 dark:text-pink-400" /> Comments ({comments.length})
                </h2>
                 <div className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors pointer-events-none">
                      {isCollapsed ? (
                            <FaChevronDown className="text-gray-600 dark:text-gray-300 w-5 h-5" />
                        ) : (
                            <FaChevronUp className="text-gray-600 dark:text-gray-300 w-5 h-5" />
                        )}
                 </div>
            </div>

            {/* Collapsible Content Area */}
             <div
                id={`comments-section-${initialBlogId}`}
                ref={contentRef}
                // Apply targetMaxHeight state via inline style
                style={{ maxHeight: targetMaxHeight }}
                // Ensure overflow-hidden and transition classes are present
                className={`overflow-hidden transition-[max-height] duration-500 ease-in-out`}
                // onTransitionEnd listener is handled inside the expanding effect now
             >
                {/* Comments List */}
                <div className="space-y-6 mb-8">
                    {comments.length > 0 ? (
                        comments.map(comment => (
                            <CommentItem key={comment.id} comment={comment} />
                        ))
                    ) : (
                        <p className="text-gray-600 dark:text-gray-400">No comments yet. Be the first!</p>
                    )}
                </div>

               
            </div>
             {/* Comment Form */}
                <div>
                    <CommentForm onAddComment={handleAddComment} />
                </div>
        </div>
    );
}

export default BlogComments;