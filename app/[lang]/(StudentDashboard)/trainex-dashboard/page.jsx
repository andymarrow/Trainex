// app/(StudentDashboard)/trainex-dashboard/StudentDashboardPage.jsx
'use client';

import React from 'react'; // Removed useState, useEffect
import { motion } from 'framer-motion';

// Import sample data - Keep sampleCourses if needed by other components on the page
import { SAMPLE_USER_STUDENT, SAMPLE_STUDENT_PROFILE, sampleCourses } from '@/lib/constants';

// Import dashboard components - DashboardHeader is now simpler
import DashboardHeader from './_components/dashboard/DashboardHeader';
import StatsGrid from './_components/dashboard/StatsGrid';
import CourseStatusPieChart from './_components/dashboard/CourseStatusPieChart';
import EstimatedHoursBarChart from './_components/dashboard/EstimatedHoursBarChart';
import RecentQuizScoreLineChart from './_components/dashboard/RecentQuizScoreLineChart';
import EnrolledCoursesList from './_components/dashboard/EnrolledCoursesList';
import PaymentHistoryCard from './_components/dashboard/PaymentHistoryCard';
import QuizScoresCard from './_components/dashboard/QuizScoresCard';
import WishlistCard from './_components/dashboard/WishlistCard';

// Helper functions (findCourseById, findLastWatchedChapterDetails) are no longer needed HERE
// because the Playlist dropdown data preparation is moved to the global Header.jsx
// Remove these helpers if they are *only* used for playlist data prep.
// If other components on this page (like EnrolledCoursesList) need course lookup,
// keep findCourseById and pass sampleCourses to those components.
// For now, let's assume EnrolledCoursesList *does* need it.

const findCourseById = (courseId) => {
    return sampleCourses.find(course => course.id === courseId);
};
// findLastWatchedChapterDetails is likely only for the playlist structure, so remove it.


function StudentDashboardPage() {
  const user = SAMPLE_USER_STUDENT;
  const studentProfile = SAMPLE_STUDENT_PROFILE; // Ensure this has all needed data

  // Calculate total paid - handle case where PaymentHistory might be missing or empty
  const totalPaid = studentProfile.PaymentHistory
    ? studentProfile.PaymentHistory.reduce((sum, payment) => sum + payment.amount, 0)
    : 0;

  const statsData = [
    { title: 'Courses Enrolled', value: studentProfile.totalCoursesEnrolled ?? 0, type: 'enrolled' },
    { title: 'Courses Completed', value: studentProfile.totalCoursesCompleted ?? 0, type: 'completed' },
    { title: 'Certificates Earned', value: studentProfile.totalCertificatesEarned ?? 0, type: 'certificates' },
    { title: 'Total Hours Tracked', value: studentProfile.totalHoursTracked ?? 0, type: 'hours' },
    { title: 'Total Paid', value: totalPaid.toFixed(2), type: 'paid' },
  ].filter(stat => stat.value !== undefined && stat.value !== null);


   const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
   };


  return (
    <div className="container mx-auto py-8">
      {/* DashboardHeader is now simpler - NO notifications or playlist props here */}
      <DashboardHeader
        userName={user.name}
        overallProgress={studentProfile.overallProgressAverage}
        // Removed notifications and playlistItems props
      />

      {/* Rest of your dashboard content */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
            hidden: { opacity: 0 },
            visible: {
               opacity: 1,
               transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.3
               }
            }
        }}
      >
         <motion.div variants={sectionVariants} className="mb-8">
            <StatsGrid stats={statsData} />
         </motion.div>

         <motion.div variants={sectionVariants} className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <CourseStatusPieChart enrolledCourses={studentProfile.enrolledCourses || []} />
            <EstimatedHoursBarChart enrolledCourses={studentProfile.enrolledCourses || []} />
         </motion.div>

         <motion.div variants={sectionVariants} className="mb-8">
             <RecentQuizScoreLineChart quizScores={studentProfile.quizScores || []} />
         </motion.div>


         <motion.div variants={sectionVariants} className="mb-8">
              {/* Pass sampleCourses to EnrolledCoursesList if it needs to look up details */}
             <EnrolledCoursesList enrolledCourses={studentProfile.enrolledCourses || []} sampleCourses={sampleCourses} />
         </motion.div>


         <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
         >
             <motion.div variants={sectionVariants}>
                 <PaymentHistoryCard paymentHistory={studentProfile.PaymentHistory || []} />
             </motion.div>
              <motion.div variants={sectionVariants}>
                 {/* Assume WishlistCard uses studentProfile.wishList directly */}
                 <WishlistCard wishlistItems={studentProfile.wishList || []} />
              </motion.div>
              <motion.div variants={sectionVariants}>
                 <QuizScoresCard quizScores={studentProfile.quizScores || []} />
              </motion.div>
         </motion.div>

      </motion.div>
    </div>
  );
}

export default StudentDashboardPage;