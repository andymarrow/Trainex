// app/(StudentDashboard)/trainex-dashboard/myplaylist/page.jsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';

// Import sample data from your constants file
import { SAMPLE_STUDENT_PROFILE, sampleCourses } from '@/lib/constants';

// Import the custom card component
import PlaylistItemCard from './_component/PlaylistItemCard';

// Helper function to find a course by ID (same as in Header.jsx)
const findCourseById = (courseId) => {
    return sampleCourses.find(course => course.id === courseId);
};

// Helper function to find the most recent incomplete chapter (same as in Header.jsx)
const findLastWatchedChapterDetails = (courseBlueprint, chapterProgress) => {
     if (!courseBlueprint || !courseBlueprint.sections || !chapterProgress) {
         return null;
     }

     // Find the chapter progress entry that is *not* complete and has the most recent access
     // or the first incomplete one if none were recently accessed
     const activeChapters = chapterProgress
        .filter(cp => !cp.isComplete && cp.userProgress < 100); // Get all incomplete chapters

     if (activeChapters.length === 0) {
         return null; // No incomplete chapters
     }

     // Prioritize the one with the most recent access timestamp
     const lastAccessedChapter = activeChapters
         .filter(cp => cp.lastAccessed)
         .sort((a, b) => new Date(b.lastAccessed) - new Date(a.lastAccessed))[0];

     let chapterToDisplay;
     if (lastAccessedChapter) {
         chapterToDisplay = lastAccessedChapter;
     } else {
         // If no incomplete chapter has a lastAccessed timestamp, use the first one in the list
         // This might happen if progress is set manually or accessed via a different method
          chapterToDisplay = activeChapters.find(cp => cp.userProgress > 0) || activeChapters[0];
     }


     // Look up its title in the blueprint.
     const section = courseBlueprint.sections[chapterToDisplay.sectionIndex];
     const chapter = section?.chapters[chapterToDisplay.chapterIndex];

     return {
         title: chapter?.chapterTitle || `Section ${chapterToDisplay.sectionIndex + 1}, Chapter ${chapterToDisplay.chapterIndex + 1}`,
         // Create a conceptual link to resume at this specific point
         link: `/CourseList/${courseBlueprint.id}?section=${chapterToDisplay.sectionIndex}&chapter=${chapterToDisplay.chapterIndex}`,
     };
};


function MyPlaylistPage() {
  const studentProfile = SAMPLE_STUDENT_PROFILE;

  // Prepare playlist items: filter in-progress courses and merge with course details
  // Use overall courseProgressPercentage and find the specific last watched chapter details
   const playlistItems = (studentProfile.enrolledCourses || [])
        .filter(enrollment =>
            // An item is in the playlist if it's not complete AND has some progress > 0
            !enrollment.isCourseComplete && enrollment.courseProgressPercentage !== undefined && enrollment.courseProgressPercentage > 0
        )
        .map(enrollment => {
            const courseBlueprint = findCourseById(enrollment.courseId);

             // Find the details for the last watched chapter within this enrollment
            const lastWatchedDetails = findLastWatchedChapterDetails(courseBlueprint, enrollment.chapterProgress);

            // Combine data for the PlaylistItemCard component
            return {
                id: enrollment.courseId, // Use course ID as the item ID
                course: { // Embed course details
                    id: enrollment.courseId,
                    title: courseBlueprint?.title || 'Unknown Course',
                    thumbnail: courseBlueprint?.thumbnail || '/images/placeholder.jpg',
                    instructor: courseBlueprint?.instructor, // Include instructor
                },
                progress: enrollment.courseProgressPercentage, // Use overall course progress
                // Use the title and link found from chapter progress
                lastWatchedChapterTitle: lastWatchedDetails?.title || 'Start/Resume Course',
                link: lastWatchedDetails?.link || `/CourseList/${enrollment.courseId}`, // Fallback to course overview link
            };
        })
        .filter(item => item.course.title !== 'Unknown Course'); // Filter out items if course blueprint wasn't found


    // Animation variants for the staggered grid
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1, // Delay between children animations
            }
        }
    };


  return (
    <div className="container mx-auto py-8 ">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">My Active Playlist</h1>

      {playlistItems.length === 0 ? (
        // Empty state
        <motion.div
            initial="hidden"
            animate="visible"
            variants={{ visible: { opacity: 1, y: 0 }, hidden: { opacity: 0, y: 20 } }}
            transition={{ duration: 0.5 }}
            className="text-center text-gray-600 dark:text-gray-400 py-12"
        >
            <p className="text-xl mb-4">Your active playlist is empty!</p>
            <p>Start a course to see it appear here.</p>
             {/* Optional: Link to browse courses */}
             <Link href="/CourseList" className="mt-4 inline-block text-blue-600 dark:text-cyan-400 hover:underline font-semibold">
                Browse Courses
             </Link>
        </motion.div>
      ) : (
        // Playlist Grid
        <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants} // Apply container staggering variants
            initial="hidden"
            animate="visible"
        >
          {playlistItems.map((item) => (
            <PlaylistItemCard key={item.id} item={item} /> // Pass the prepared item to the card component
          ))}
        </motion.div>
      )}
    </div>
  );
}

export default MyPlaylistPage;