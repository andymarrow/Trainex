// app/(StudentDashboard)/trainex-learn/[id]/learn/page.jsx
'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import CourseSidebar from './_components/CourseSidebar';
import ChapterContent from './_components/ChapterContent';

// Import sample data
import { sampleCourses, SAMPLE_STUDENT_PROFILE } from '@/lib/constants';

// Helper to find the first incomplete chapter OR the first chapter if none are started
// This is used to determine which chapter to load initially
const findInitialChapter = (courseSections, studentProgress) => {
    // First, try to find the most recently accessed *incomplete* chapter
    // This requires iterating through studentProgress to find the latest lastAccessed
    let latestAccessTimestamp = null;
    let initialSecIndex = 0;
    let initialChapIndex = 0;

     // Find the chapter with the latest lastAccessed timestamp among incomplete chapters
    studentProgress.forEach(p => {
        // Ensure the chapter exists in the course structure
         const section = courseSections[p.sectionIndex];
         const chapter = section?.chapters[p.chapterIndex];

        if (chapter && chapter.isCompletable && !p.isComplete && p.lastAccessed) {
            const accessDate = new Date(p.lastAccessed);
            if (!latestAccessTimestamp || accessDate > latestAccessTimestamp) {
                latestAccessTimestamp = accessDate;
                initialSecIndex = p.sectionIndex;
                initialChapIndex = p.chapterIndex;
            }
        }
    });

     // If a recently accessed incomplete chapter was found, use that
     if (latestAccessTimestamp !== null) {
         return { sectionIndex: initialSecIndex, chapterIndex: initialChapIndex };
     }


    // If no recently accessed incomplete chapter, find the *first* incomplete chapter
    for (let sIndex = 0; sIndex < courseSections.length; sIndex++) {
        const section = courseSections[sIndex];
         // Handle case where section might be empty
        if (!section || !section.chapters || section.chapters.length === 0) continue;

        for (let cIndex = 0; cIndex < section.chapters.length; cIndex++) {
            const chapter = section.chapters[cIndex];
            // Only consider completable chapters for "first incomplete" logic
            if (chapter.isCompletable) {
                 const progressItem = studentProgress.find(
                     p => p.sectionIndex === sIndex && p.chapterIndex === cIndex
                 );
                 // If no progress item exists or it's not complete, this is the first incomplete
                 if (!progressItem || !progressItem.isComplete) {
                     return { sectionIndex: sIndex, chapterIndex: cIndex };
                 }
            }
        }
    }

    // If all completable chapters are complete, return the very first chapter of the course
     if (courseSections.length > 0 && courseSections[0].chapters.length > 0) {
         return { sectionIndex: 0, chapterIndex: 0 };
     }


    // Fallback if course has no sections/chapters (shouldn't happen with valid data)
    return { sectionIndex: 0, chapterIndex: 0 };
};


function CourseLearningPage() {
  const params = useParams();
  const courseId = params.id; // Get the course ID

  // --- Data Simulation ---
  const courseDetails = sampleCourses.find(course => course.id === courseId);
  // Deep clone the student enrollment data so we can modify the chapterProgress state locally
  const studentEnrollment = useMemo(() => {
      const originalEnrollment = SAMPLE_STUDENT_PROFILE.enrolledCourses.find(
        enrollment => enrollment.courseId === courseId
      );
      // Perform a deep copy - Note: This is simple for sample data, but for complex data (Dates, functions, etc.)
      // you'd need a more robust cloning method or manage updates immutably without cloning the whole object.
      return originalEnrollment ? JSON.parse(JSON.stringify(originalEnrollment)) : null;
  }, [courseId]);


  // Handle case where course or enrollment is not found
   if (!courseDetails || !studentEnrollment) {
     return (
       <div className="text-center text-red-600 dark:text-red-400 min-h-screen flex items-center justify-center">
         Error: Course or enrollment not found.
       </div>
     );
   }

  // --- State Management ---
  // Use the student's actual chapter progress data as initial state
  const [studentChapterProgressState, setStudentChapterProgressState] = useState(
    studentEnrollment.chapterProgress || []
  );

  // Determine the initial selected chapter based on progress or first chapter
   const initialChapter = useMemo(() => {
       return findInitialChapter(courseDetails.sections, studentChapterProgressState);
   }, [courseDetails.sections, studentChapterProgressState]);

  const [selectedSectionIndex, setSelectedSectionIndex] = useState(initialChapter.sectionIndex);
  const [selectedChapterIndex, setSelectedChapterIndex] = useState(initialChapter.chapterIndex);

   // --- Effects ---
   // Update selected chapter state if the initial chapter calculation changes (e.g., after marking one complete)
   // This helps ensure the UI updates correctly if the "first incomplete" logic finds a new chapter after completion.
   useEffect(() => {
        // Only update state if the initialChapter derived value actually changes
        if (selectedSectionIndex !== initialChapter.sectionIndex || selectedChapterIndex !== initialChapter.chapterIndex) {
             setSelectedSectionIndex(initialChapter.sectionIndex);
             setSelectedChapterIndex(initialChapter.chapterIndex);
        }
   }, [initialChapter, selectedSectionIndex, selectedChapterIndex]); // Add existing state to dependencies


  // --- Derived State / Helpers ---
  const selectedChapter = useMemo(() => {
      try {
          // Return null or handle gracefully if indices are out of bounds
          if (selectedSectionIndex < 0 || selectedSectionIndex >= courseDetails.sections.length) return null;
          const section = courseDetails.sections[selectedSectionIndex];
          if (!section || !section.chapters || selectedChapterIndex < 0 || selectedChapterIndex >= section.chapters.length) return null;
          return section.chapters[selectedChapterIndex];
      } catch (error) {
           console.error("Error accessing selected chapter:", error);
           return null;
      }
  }, [courseDetails.sections, selectedSectionIndex, selectedChapterIndex]);

   // Find the progress item for the currently selected chapter
   const selectedChapterProgressItem = useMemo(() => {
       // Ensure selectedChapter is valid before trying to find progress
       if (!selectedChapter) return null;

       return studentChapterProgressState.find(
           p => p.sectionIndex === selectedSectionIndex && p.chapterIndex === selectedChapterIndex
       );
   }, [studentChapterProgressState, selectedSectionIndex, selectedChapterIndex, selectedChapter]);


  // --- Event Handlers ---

  // Handler for selecting a chapter from the sidebar (or finding the next/previous)
  const handleSelectChapter = (secIndex, chapIndex) => {
    // Basic boundary check
     if (secIndex < 0 || secIndex >= courseDetails.sections.length) {
          console.warn(`Attempted to select out-of-bounds section index: ${secIndex}`);
          return;
     }
     const section = courseDetails.sections[secIndex];
     if (!section || !section.chapters || chapIndex < 0 || chapIndex >= section.chapters.length) {
          console.warn(`Attempted to select out-of-bounds chapter index: ${chapIndex} in section ${secIndex}`);
          return;
     }

    setSelectedSectionIndex(secIndex);
    setSelectedChapterIndex(chapIndex);

     // Simulate updating lastAccessed for the selected chapter in state
     // This also ensures a progress entry exists for the chapter if it's completable
       setStudentChapterProgressState(currentProgress => {
            const chapter = courseDetails.sections[secIndex].chapters[chapIndex];
             // Only track progress/lastAccessed for completable chapters.
             // We *always* add/update lastAccessed if a chapter is selected, regardless of completable status,
             // as the user *is* accessing it. However, we only add *new* entries for completable ones if they don't exist.
            const existingIndex = currentProgress.findIndex(
                p => p.sectionIndex === secIndex && p.chapterIndex === chapIndex
            );

            const now = new Date().toISOString();

            if (existingIndex > -1) {
                // Update existing entry (only lastAccessed for now)
                return currentProgress.map((item, index) =>
                    index === existingIndex
                        ? { ...item, lastAccessed: now }
                        : item
                );
            } else {
                 // If no existing entry, add one ONLY if it's a completable chapter
                if (chapter?.isCompletable) {
                     return [
                         ...currentProgress,
                         {
                             sectionIndex: secIndex,
                             chapterIndex: chapIndex,
                             isComplete: false, // Start as incomplete
                             userProgress: 0, // Start at 0 progress
                             lastAccessed: now,
                         },
                     ];
                 }
                 // If not completable and no existing entry, do nothing to the progress state
                 return currentProgress;
            }
       });
  };


  // Handler for the "Mark as Complete" button
  const handleMarkComplete = () => {
    // Ensure a chapter is selected, is completable, and not already complete
    if (!selectedChapter || !selectedChapter.isCompletable || selectedChapterProgressItem?.isComplete) {
      return;
    }

    // In a real application, you would make an API call here to update the student's progress in the database.
    // For this example, we'll update the local state to simulate the change.
    setStudentChapterProgressState(currentProgress => {
        const existingIndex = currentProgress.findIndex(
            p => p.sectionIndex === selectedSectionIndex && p.chapterIndex === selectedChapterIndex
        );

        const now = new Date().toISOString();

        // Ensure an entry exists (or create one if it doesn't exist but the chapter is completable)
        // Then update that entry to be complete.
         if (existingIndex > -1) {
             return currentProgress.map((item, index) =>
                 index === existingIndex
                     ? { ...item, isComplete: true, userProgress: 100, lastAccessed: now } // Mark complete
                     : item
             );
         } else {
             // This case should ideally not happen if handleSelectChapter is used,
             // but as a fallback for a completable chapter...
             const chapter = courseDetails.sections[selectedSectionIndex]?.chapters[selectedChapterIndex];
             if (chapter?.isCompletable) {
                 return [
                     ...currentProgress,
                     {
                         sectionIndex: selectedSectionIndex,
                         chapterIndex: selectedChapterIndex,
                         isComplete: true,
                         userProgress: 100,
                         lastAccessed: now,
                     },
                 ];
             }
             return currentProgress; // Should not happen if checks pass, but defensive
         }
    });

     // *** Marking complete does NOT automatically go to the next chapter ***
     // User must click the "Next Chapter" button separately.

     // In a real app, after updating backend, you might re-fetch or update global state
     // that calculates overall course progress and triggers UI updates like section completion checkmarks.
  };


   // Handler for the "Next Chapter" button - This ONLY navigates
  const handleNextChapter = () => {
      if (!selectedChapter) return; // Can't go next if no chapter is selected

      const currentSection = courseDetails.sections[selectedSectionIndex];
      let nextChapterIndex = selectedChapterIndex + 1;
      let nextSectionIndex = selectedSectionIndex;

      // Loop through subsequent chapters in the current section first
      if (nextChapterIndex < currentSection.chapters.length) {
          handleSelectChapter(nextSectionIndex, nextChapterIndex);
          return; // Found and selected the next chapter in the current section
      }

      // If we reached here, there's no next chapter in the current section.
      // Try to find the first chapter in the next section or subsequent sections.
      nextSectionIndex++; // Move to the next section index
      nextChapterIndex = 0; // Start checking from the first chapter of the potential next section

      while (nextSectionIndex < courseDetails.sections.length) {
          const nextSection = courseDetails.sections[nextSectionIndex];
           // Check if the current candidate next section has chapters
          if (nextSection?.chapters && nextSection.chapters.length > 0) {
              // Found the next section with chapters, select its first chapter
              handleSelectChapter(nextSectionIndex, nextChapterIndex);
              return; // Found and selected the next chapter
          }
          // If the current candidate next section is empty or invalid, try the section after that
          nextSectionIndex++;
      }

      // If the loop finishes without returning, there are no more chapters in subsequent sections.
      alert('You have reached the end of the course content!');
       // In a real app, you might navigate to a course completion page or dashboard
  };

   // Handler for the "Previous Chapter" button - This ONLY navigates
   const handlePreviousChapter = () => {
       if (!selectedChapter) return; // Can't go back if no chapter is selected

       const currentSection = courseDetails.sections[selectedSectionIndex];
       let prevChapterIndex = selectedChapterIndex - 1;
       let prevSectionIndex = selectedSectionIndex;

       // Loop through previous chapters in the current section first
       if (prevChapterIndex >= 0) {
           handleSelectChapter(prevSectionIndex, prevChapterIndex);
           return; // Found and selected the previous chapter in the current section
       }

       // If we reached here, we are at the first chapter of the current section.
       // Try to find the last chapter in the previous section or prior sections.
       prevSectionIndex--; // Move to the previous section index

       // Loop backward through sections
       while (prevSectionIndex >= 0) {
           const prevSection = courseDetails.sections[prevSectionIndex];
            // Check if the current candidate previous section has chapters
           if (prevSection?.chapters && prevSection.chapters.length > 0) {
               // Found the previous section with chapters, select its *last* chapter
               const lastChapterIndexInPrevSection = prevSection.chapters.length - 1;
               handleSelectChapter(prevSectionIndex, lastChapterIndexInPrevSection);
               return; // Found and selected the previous chapter
           }
           // If the current candidate previous section is empty or invalid, try the section before that
           prevSectionIndex--;
       }

       // If the loop finishes without returning, there are no more chapters in prior sections.
       // This means we are at the very first chapter of the entire course.
       alert('You are already at the beginning of the course!');
   };


  // Determine if a 'Next Chapter' button should be shown
  const hasNextChapter = useMemo(() => {
      if (!selectedChapter || !courseDetails || !courseDetails.sections) return false;

      const currentSection = courseDetails.sections[selectedSectionIndex];
       if (!currentSection || !currentSection.chapters) return false; // Defensive check

      // Is there a next chapter index in the current section?
      if (selectedChapterIndex + 1 < currentSection.chapters.length) {
           return true;
      }

      // Check if any subsequent section has chapters
      const nextSectionIndex = selectedSectionIndex + 1;
      for (let sIndex = nextSectionIndex; sIndex < courseDetails.sections.length; sIndex++) {
          const section = courseDetails.sections[sIndex];
           if (section?.chapters && section.chapters.length > 0) {
               return true; // Found a subsequent section with chapters
           }
      }

      // No next chapter in current section, and no subsequent section has chapters
      return false;
  }, [courseDetails, selectedSectionIndex, selectedChapterIndex, selectedChapter]);

   // Determine if a 'Previous Chapter' button should be shown
   const hasPreviousChapter = useMemo(() => {
       if (!selectedChapter || !courseDetails || !courseDetails.sections) return false;

       // Are we past the first chapter of the current section?
       if (selectedChapterIndex > 0) {
           return true;
       }

       // If at the first chapter of the current section, check if any prior section has chapters
       const prevSectionIndex = selectedSectionIndex - 1;
        for (let sIndex = prevSectionIndex; sIndex >= 0; sIndex--) {
           const section = courseDetails.sections[sIndex];
           if (section?.chapters && section.chapters.length > 0) {
               return true; // Found a prior section with chapters
           }
       }

       // At the very first chapter of the very first section
       return false;
   }, [courseDetails, selectedSectionIndex, selectedChapterIndex, selectedChapter]);


    // --- Calculate overall course progress (optional but good to keep) ---
    // This could be passed down to the sidebar or a header component
    const allCompletableChaptersCount = useMemo(() => {
        let count = 0;
        courseDetails.sections.forEach(section => {
            section.chapters.forEach(chapter => {
                if (chapter.isCompletable) {
                    count++;
                }
            });
        });
        return count;
    }, [courseDetails.sections]);

    const completedCompletableChaptersCount = useMemo(() => {
        return studentChapterProgressState.filter(p => p.isComplete).length;
    }, [studentChapterProgressState]);

    const overallCourseProgressPercentage = allCompletableChaptersCount > 0
        ? Math.min(100, Math.round((completedCompletableChaptersCount / allCompletableChaptersCount) * 100))
        : 0;

    // In a real app, you would save this overall progress back to studentEnrollment record in the backend.
    // For this simulation, we just calculate and could display it (e.g., in the header or sidebar).
    // console.log(`Overall Course Progress: ${overallCourseProgressPercentage}%`);


  return (
    <motion.div
      className="flex flex-col lg:flex-row h-full overflow-hidden" // Added overflow-hidden
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Left Sidebar */}
      <CourseSidebar
        courseDetails={courseDetails}
        studentChapterProgress={studentChapterProgressState}
        selectedSectionIndex={selectedSectionIndex}
        selectedChapterIndex={selectedChapterIndex}
        onSelectChapter={handleSelectChapter}
      />

      {/* Right Content Area */}
      <ChapterContent
        courseDetails={courseDetails} // Pass full details if needed elsewhere
        selectedChapter={selectedChapter}
        studentChapterProgressItem={selectedChapterProgressItem}
        onMarkComplete={handleMarkComplete} // This handler only marks complete
        onNextChapter={hasNextChapter ? handleNextChapter : null} // This handler only navigates forward
        onPreviousChapter={hasPreviousChapter ? handlePreviousChapter : null} // This handler only navigates backward
      />
    </motion.div>
  );
}

export default CourseLearningPage;