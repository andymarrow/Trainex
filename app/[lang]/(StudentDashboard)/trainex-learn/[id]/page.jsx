// app/(StudentDashboard)/trainex-learn/[id]/page.jsx
'use client';

import React from 'react';
import { useParams } from 'next/navigation'; // Use useParams to get the ID
import CourseIntroHero from './_components/CourseIntroHero'; // Import the intro component

// Import sample data
import { sampleCourses, SAMPLE_STUDENT_PROFILE } from '@/lib/constants'; // Need courses blueprint and student profile

function CourseIntroPage() {
  const params = useParams();
  const courseId = params.id; // Get the course ID from the URL

  // In a real application, you would fetch this data from your backend based on the courseId
  // and the logged-in user's ID.
  const courseDetails = sampleCourses.find(course => course.id === courseId);
  // Find the specific enrollment data for this course for the sample student
  const enrollmentData = SAMPLE_STUDENT_PROFILE.enrolledCourses.find(
    enrollment => enrollment.courseId === courseId
  );

  // Handle case where course is not found or user is not enrolled (in a real app, you'd check enrollment properly)
  if (!courseDetails) {
    // Redirect or show an error message
    return (
      <div className="text-center text-red-600 dark:text-red-400 min-h-screen flex items-center justify-center">
        Course not found!
      </div>
    );
  }

   if (!enrollmentData) {
    // In a real app, you'd handle this - maybe show a purchase/enroll button
     return (
       <div className="text-center text-yellow-600 dark:text-yellow-400 min-h-screen flex items-center justify-center">
         You are not enrolled in this course.
       </div>
     );
   }


  return (
    <CourseIntroHero
      courseDetails={courseDetails}
      enrollmentData={enrollmentData}
    />
  );
}

export default CourseIntroPage;