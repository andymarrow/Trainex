"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaPlayCircle } from 'react-icons/fa'; 

function SectionAccordion({ section }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-md overflow-hidden">
      {/* Section Header (Clickable) */}
      <button
        className="flex justify-between items-center w-full p-4 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white font-semibold text-left focus:outline-none"
        onClick={toggleOpen}
        aria-expanded={isOpen}
      >
        <span>{section.sectionTitle}</span>
        <FaChevronDown className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : 'rotate-0'}`} />
      </button>

      {/* Section Content (Collapsible) */}
      <AnimatePresence initial={false}> 
        {isOpen && (
          <motion.div
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="p-4 bg-white dark:bg-gray-800" 
          >
            {/* Chapters List */}
            <ul className="divide-y divide-gray-200 dark:divide-gray-700">
              {section.chapters.map((chapter, index) => (
                <li key={index} className="py-3 flex items-start">
                  {/* Play Icon (Placeholder - not actually functional video) */}
                   <div className="flex-shrink-0 mr-3 mt-0.5">
                       <FaPlayCircle className="h-5 w-5 text-blue-600 dark:text-cyan-400 cursor-pointer"
                           onClick={() => console.log(`Simulating play for: ${chapter.chapterTitle}`)}
                           aria-label={`Preview ${chapter.chapterTitle}`}
                       />
                   </div>

                  {/* Chapter Details */}
                  <div className="flex-1">
                    <h5 className="font-medium text-gray-800 dark:text-white">{chapter.chapterTitle}</h5>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{chapter.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default SectionAccordion;