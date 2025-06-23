import React from 'react';
import { FaCheckCircle, FaBullseye, FaClipboardCheck } from 'react-icons/fa'; 
import RoadmapVisualizer from './RoadmapVisualizer';


function CourseDescriptionTab({ course }) {
  if (!course) return null;

  return (
    <div className="text-gray-700 dark:text-gray-300 space-y-6">
      {/* Description */}
      <div>
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">What you'll learn</h3>
        <ul className="space-y-2 list-inside">
          {course.description.map((point, index) => (
            <li key={index} className="flex items-start">
               <FaCheckCircle className="h-4 w-4 text-green-500 dark:text-green-400 mr-2 flex-shrink-0 mt-0.5" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Target Audience */}
       {course.targetAudience && course.targetAudience.length > 0 && (
           <div>
               <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Who this course is for</h3>
                <ul className="space-y-2 list-inside">
                   {course.targetAudience.map((point, index) => (
                     <li key={index} className="flex items-start">
                         <FaBullseye className="h-4 w-4 text-red-500 dark:text-red-400 mr-2 flex-shrink-0 mt-0.5" />
                        <span>{point}</span>
                     </li>
                   ))}
               </ul>
           </div>
       )}


      {/* Course Outcomes */}
       {course.courseOutcomes && course.courseOutcomes.length > 0 && (
           <div>
               <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Course Outcomes</h3>
                <ul className="space-y-2 list-inside">
                   {course.courseOutcomes.map((point, index) => (
                     <li key={index} className="flex items-start">
                         <FaClipboardCheck className="h-4 w-4 text-purple-500 dark:text-purple-400 mr-2 flex-shrink-0 mt-0.5" />
                        <span>{point}</span>
                     </li>
                   ))}
               </ul>
           </div>
       )}

      {/* Roadmap - Use the Visualizer Component */}
       {course.roadmap && course.roadmap.length > 0 && (
           <div>
               <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Roadmap</h3>
               <RoadmapVisualizer steps={course.roadmap} />
           </div>
       )}

    </div>
  );
}

export default CourseDescriptionTab;