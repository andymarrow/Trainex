// app/(StudentDashboard)/trainex-learn/[id]/learn/_components/CourseSidebar.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiChevronDown, HiChevronUp, HiOutlineCheckCircle } from 'react-icons/hi';

function CourseSidebar({ courseDetails, studentChapterProgress, selectedSectionIndex, selectedChapterIndex, onSelectChapter }) {
  const { title, sections } = courseDetails;

  // State to manage which sections are open/closed
  const [openSectionIndex, setOpenSectionIndex] = useState(selectedSectionIndex);

  useEffect(() => {
      // Ensure the currently selected section is open when the page loads
      setOpenSectionIndex(selectedSectionIndex);
  }, [selectedSectionIndex]); // Update if selected section changes externally

  const toggleSection = (index) => {
    setOpenSectionIndex(openSectionIndex === index ? null : index);
  };

  const sectionVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: 'auto', transition: { duration: 0.3, ease: 'easeOut' } },
    exit: { opacity: 0, height: 0, transition: { duration: 0.3, ease: 'easeOut' } },
  };

  const chapterVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="w-full lg:w-80 flex-shrink-0 bg-gray-100 dark:bg-gray-900 p-4 overflow-y-auto border-r dark:border-gray-700">
      {/* Course Title in Sidebar */}
      <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4 truncate" title={title}>
        {title}
      </h2>

      {/* Sections List */}
      <nav>
        {sections.map((section, secIndex) => {
          // Find the student's progress for the chapters in this section
          const sectionProgress = studentChapterProgress.filter(
              p => p.sectionIndex === secIndex
          );

          // Check if all completable chapters in this section are complete
           const completableChaptersInSection = section.chapters.filter(chap => chap.isCompletable);
           const completedChaptersInSectionCount = sectionProgress.filter(p => p.isComplete).length;
           const isSectionComplete = completableChaptersInSection.length > 0 &&
                                      completedChaptersInSectionCount === completableChaptersInSection.length;


          return (
            <div key={secIndex} className="mb-2 last:mb-0">
              {/* Section Header (Clickable to toggle) */}
              <motion.button
                className={`flex items-center justify-between w-full text-left p-3 rounded-md font-semibold transition-colors duration-200
                          ${secIndex === selectedSectionIndex ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'}`}
                onClick={() => toggleSection(secIndex)}
                aria-expanded={openSectionIndex === secIndex}
                aria-controls={`section-chapters-${secIndex}`}
              >
                <span className="flex-grow mr-2">{section.sectionTitle}</span>
                 {isSectionComplete && (
                      <HiOutlineCheckCircle className="text-green-500 dark:text-green-400 mr-2" size={20} aria-label="Section Complete" />
                 )}
                {openSectionIndex === secIndex ? (
                  <HiChevronUp size={20} />
                ) : (
                  <HiChevronDown size={20} />
                )}
              </motion.button>

              {/* Chapters List (Animated based on section state) */}
              <AnimatePresence>
                {openSectionIndex === secIndex && (
                  <motion.div
                    id={`section-chapters-${secIndex}`}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={sectionVariants}
                    className="mt-1 overflow-hidden"
                  >
                    <ul className="ml-4 border-l border-gray-300 dark:border-gray-600">
                      {section.chapters.map((chapter, chapIndex) => {
                         // Find the specific progress for this chapter
                         const chapterProgress = studentChapterProgress.find(
                             p => p.sectionIndex === secIndex && p.chapterIndex === chapIndex
                         );
                         const isComplete = chapterProgress?.isComplete || false;
                         const isSelected = secIndex === selectedSectionIndex && chapIndex === selectedChapterIndex;
                         const isCompletable = chapter.isCompletable; // Check from course blueprint

                        // Determine chapter item style based on state
                        let chapterClass = 'flex items-center w-full text-left p-2 text-sm rounded-r-md transition-colors duration-200 border-l-4';
                        if (isSelected) {
                            chapterClass += ' bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 font-semibold border-blue-500';
                        } else if (isComplete) {
                            chapterClass += ' text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 border-green-500';
                        } else if (!isCompletable) {
                           // Style for non-completable chapters (e.g., prerequisites, welcome)
                            chapterClass += ' text-gray-500 dark:text-gray-500 italic border-gray-300 dark:border-gray-600 cursor-not-allowed';
                        }
                         else {
                           // Default style for incomplete, completable chapters
                            chapterClass += ' text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 border-transparent';
                         }


                        return (
                          <motion.li
                             key={chapIndex}
                             variants={chapterVariants}
                             // Only make chapter clickable if it's completable or the currently selected one (even if not completable)
                             // This prevents clicking on non-content items like "Prerequisites" unless they are the first thing shown
                             // Or you can decide to make all chapters clickable
                             onClick={() => isCompletable || isSelected ? onSelectChapter(secIndex, chapIndex) : null}
                             className={chapterClass}
                             // Add subtle hover effect on clickable items
                            whileHover={isCompletable || isSelected ? { x: 5 } : {}}
                             // Add cursor style
                            style={{ cursor: (isCompletable || isSelected) ? 'pointer' : 'default' }}
                          >
                             {/* Chapter Title */}
                            <span className="flex-grow mr-2 truncate">
                                {chapter.chapterTitle}
                                {isComplete && <HiOutlineCheckCircle className="inline-block ml-2 text-green-600 dark:text-green-400" size={16} aria-label="Chapter Complete" />}
                            </span>

                            {/* Chapter Duration (Optional) */}
                            {chapter.duration && (
                                <span className="text-xs flex-shrink-0">
                                    ({chapter.duration} min)
                                </span>
                            )}
                          </motion.li>
                        );
                      })}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </nav>
    </div>
  );
}

export default CourseSidebar;