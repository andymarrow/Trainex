// app/(StudentDashboard)/trainex-dashboard/courses/page.jsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';

// Import sample data
import { SAMPLE_STUDENT_PROFILE, sampleCourses } from '@/lib/constants'; // Need student profile and courses blueprint

// Import the card list component
import EnrolledCoursesList from './_components/EnrolledCoursesList'; // We'll create this next


function StudentCoursesPage() {
  // In a real application, you would fetch the logged-in user's profile
  // and their enrolled courses from your backend.
  // For this example, we use sample data.
  const studentProfile = SAMPLE_STUDENT_PROFILE;

  // Combine enrolledCourses data from the student profile with the course blueprint data
  // We only need the enrolled courses for this page.
  const enrolledCoursesWithDetails = studentProfile.enrolledCourses.map(enrollment => {
    const courseDetails = sampleCourses.find(course => course.id === enrollment.courseId);
     // Return combined data, ensure courseDetails exists
    if (!courseDetails) {
       console.warn(`Course details not found for enrolled course ID: ${enrollment.courseId}`);
       return null; // Filter this out later
    }
    return {
      courseEnrollment: enrollment,
      courseDetails: courseDetails,
    };
  }).filter(item => item !== null); // Filter out any entries where course details weren't found


  // Animation variants for the main content area
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };


  return (
    <motion.div
      className="container mx-auto py-8"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Headline */}
      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
        All Your{' '}
         <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">
            Enrolled Courses
         </span>
      </h1>
      {/* Subtitle */}
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
        Explore the courses you've started or completed.
      </p>

      {/* List of Enrolled Course Cards */}
      {/* Pass the combined data to the list component */}
      <EnrolledCoursesList courses={enrolledCoursesWithDetails} />

    </motion.div>
  );
}

export default StudentCoursesPage;