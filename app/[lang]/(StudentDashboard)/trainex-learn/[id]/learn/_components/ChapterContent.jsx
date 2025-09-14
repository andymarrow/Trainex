// app/(StudentDashboard)/trainex-learn/[id]/learn/_components/ChapterContent.jsx
import React from 'react';
import { motion } from 'framer-motion';
// Import icons
import { HiOutlineCheckCircle, HiOutlineArrowRight, HiOutlineArrowLeft } from 'react-icons/hi';


// Add onPreviousChapter to props
function ChapterContent({ courseDetails, selectedChapter, studentChapterProgressItem, onMarkComplete, onNextChapter, onPreviousChapter }) {
  if (!selectedChapter) {
    return (
      <div className="flex-grow p-6 flex items-center justify-center text-gray-600 dark:text-gray-400">
        Please select a chapter from the sidebar to begin.
      </div>
    );
  }

  const { chapterTitle, description, videoUrl, isCompletable } = selectedChapter;
  // Note: studentChapterProgressItem might be null if the chapter is not completable
  // or has never been accessed/marked. Check for existence before accessing properties.
  const isComplete = studentChapterProgressItem?.isComplete || false;

  // Extract YouTube video ID from the URL
   const getYouTubeVideoId = (url) => {
    if (!url) return null;

    // Regex for standard watch?v= and youtu.be/ URLs
    const watchMatch = url.match(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com|youtu\.be)\/(?:watch\?v=)?([^&\s]+)/);
    if (watchMatch && watchMatch[1]) {
      return watchMatch[1]; // Return ID from watch/share URL
    }

    // Regex for embed URLs like https://www.youtube.com/embed/VIDEO_ID
    const embedMatch = url.match(/(?:https?:\/\/)?(?:www\.)?youtube\.com\/embed\/([^?&\s]+)/);
     if (embedMatch && embedMatch[1]) {
         return embedMatch[1]; // Return ID from embed URL
     }


    // If neither matches, return null
    console.warn(`Could not extract YouTube ID from URL: ${url}`); // Optional: Log a warning
    return null;
  };

  const youtubeId = getYouTubeVideoId(videoUrl);
  // Always use the 'embed' path for the iframe src
  const embedUrl = youtubeId ? `https://www.youtube.com/embed/${youtubeId}` : null;

  // Animation variants for the main content area (re-animates when chapter changes)
  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  // Key to force re-render/re-mount of the content when the chapter changes,
  // ensuring animations and potentially the iframe reset/reload.
  const contentKey = `${selectedChapter.chapterTitle}-${selectedChapter.videoUrl}`;


  return (
    <motion.div
      className="flex-grow p-6 overflow-y-auto"
      initial="hidden"
      animate="visible"
      variants={contentVariants}
      key={contentKey} // Apply key to force content re-animation on chapter change
    >
      {/* Chapter Title */}
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
        {chapterTitle}
      </h2>

      {/* Video Player */}
      {embedUrl ? (
        <motion.div
           className="relative aspect-video w-full rounded-lg overflow-hidden shadow-lg mb-6"
            variants={contentVariants} // Apply animation to the video container
            // No need for a separate key here if the parent div has a key
        >
          <iframe
            src={embedUrl}
            title={chapterTitle}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          ></iframe>
        </motion.div>
      ) : (
        <div className="relative aspect-video w-full rounded-lg bg-gray-200 dark:bg-gray-700 flex items-center justify-center mb-6 text-gray-600 dark:text-gray-300">
          <p>No video available for this chapter.</p>
        </div>
      )}

      {/* Chapter Description */}
      {description && (
        <motion.div variants={contentVariants} className="mb-6 text-gray-700 dark:text-gray-300 leading-relaxed">
          {description}
        </motion.div>
      )}

      {/* Action Buttons */}
      {/* Use justify-between to push previous/next to ends and mark complete to center,
          or justify-end and control order manually */}
      <motion.div variants={contentVariants} className="flex flex-wrap gap-4 justify-between items-center">

        {/* Previous Chapter Button (Conditional) */}
         {onPreviousChapter && (
             <motion.button
                onClick={onPreviousChapter}
                className="inline-flex items-center px-6 py-3 bg-gray-300 hover:bg-gray-400 text-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-200 font-semibold rounded-md shadow transition-colors duration-200"
                 whileHover={{ scale: 1.02 }}
                 whileTap={{ scale: 0.98 }}
             >
               <HiOutlineArrowLeft className="mr-2 text-xl" />
               Previous Chapter
             </motion.button>
         )}

         {/* Container for Mark Complete and Next - to keep them together */}
         {/* Use flex-grow to push this group to the right if previous button exists */}
         <div className={`flex flex-wrap gap-4 ${onPreviousChapter ? 'ml-auto' : 'w-full justify-end'}`}> {/* ml-auto pushes right, w-full justify-end if no prev */}

            {/* Mark as Complete Button (Conditional) */}
            {isCompletable && !isComplete && (
              <motion.button
                onClick={onMarkComplete}
                className="inline-flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-md shadow transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <HiOutlineCheckCircle className="mr-2 text-xl" />
                Mark as Complete
              </motion.button>
            )}

            {/* Next Chapter Button (Conditional) */}
             {onNextChapter && (
               <motion.button
                 onClick={onNextChapter}
                 className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md shadow transition-colors duration-200"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
               >
                 Next Chapter
                 <HiOutlineArrowRight className="ml-2 text-xl" />
               </motion.button>
             )}
         </div>

      </motion.div>

      {/* You can add sections for Notes, Q&A, etc. here */}
       {/* For example, conditionally render if courseDetails.hasNotebook or courseDetails.hasChat */}
       {/*
         <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Notes</h3>
            // Notes component here
         </div>
         <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Course Discussion</h3>
            // Chat component here
         </div>
       */}


    </motion.div>
  );
}

export default ChapterContent;