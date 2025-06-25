// app/(StudentDashboard)/trainex-dashboard/StudentDashboardPage.jsx
'use client'; // Mark as Client Component

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Import sample data
import { SAMPLE_USER_STUDENT, SAMPLE_STUDENT_PROFILE, sampleCourses } from '@/lib/constants'; // Import sampleCourses too

// Import dashboard components
import DashboardHeader from './_components/dashboard/DashboardHeader';
import StatsGrid from './_components/dashboard/StatsGrid';
// Import the new chart components
import CourseStatusPieChart from './_components/dashboard/CourseStatusPieChart';
import EstimatedHoursBarChart from './_components/dashboard/EstimatedHoursBarChart';
import RecentQuizScoreLineChart from './_components/dashboard/RecentQuizScoreLineChart';

// Import other cards
import EnrolledCoursesList from './_components/dashboard/EnrolledCoursesList';
import PaymentHistoryCard from './_components/dashboard/PaymentHistoryCard';
import QuizScoresCard from './_components/dashboard/QuizScoresCard';
import WishlistCard from './_components/dashboard/WishlistCard';


function StudentDashboardPage() {
  // In a real application, you would fetch this data from your backend
  // For this example, we use sample data directly
  const user = SAMPLE_USER_STUDENT;
  const studentProfile = SAMPLE_STUDENT_PROFILE;

  // --- Data Preparation ---

  // Calculate total paid amount for stats grid
  const totalPaid = studentProfile.PaymentHistory.reduce((sum, payment) => sum + payment.amount, 0);

  // Data for the StatsGrid
  // Using the pre-calculated fields from SAMPLE_STUDENT_PROFILE
  const statsData = [
    { title: 'Courses Enrolled', value: studentProfile.totalCoursesEnrolled, type: 'enrolled' },
    { title: 'Courses Completed', value: studentProfile.totalCoursesCompleted, type: 'completed' },
    { title: 'Certificates Earned', value: studentProfile.totalCertificatesEarned, type: 'certificates' },
    { title: 'Total Hours Tracked', value: studentProfile.totalHoursTracked, type: 'hours' },
    { title: 'Total Paid', value: totalPaid.toFixed(2), type: 'paid' },
  ].filter(stat => stat.value !== undefined); // Filter out stats if their value is undefined in sample


  // --- Framer Motion Variants ---
  // Variants for the main layout sections
   const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
   };


  return (
    <div className="container mx-auto py-8 ">
      {/* Header Section */}
      <DashboardHeader
        userName={user.name}
        overallProgress={studentProfile.overallProgressAverage}
      />

      {/* Key Statistics Grid */}
      <StatsGrid stats={statsData} />

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
         {/* Course Status Overview Pie Chart */}
         {/* Pass only the enrolledCourses data needed for this chart */}
         <CourseStatusPieChart enrolledCourses={studentProfile.enrolledCourses} />

         {/* Estimated Hours Per Enrolled Course Bar Chart */}
         {/* Pass only the enrolledCourses data needed for this chart */}
         <EstimatedHoursBarChart enrolledCourses={studentProfile.enrolledCourses} />
      </div>

       {/* Recent Quiz Scores Chart (Full Width) */}
        <RecentQuizScoreLineChart quizScores={studentProfile.quizScores} />


      {/* Enrolled Courses List */}
      <EnrolledCoursesList enrolledCourses={studentProfile.enrolledCourses} />

      {/* Other Cards Section (Payment, Wishlist, etc.) */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
         initial="hidden"
         animate="visible"
         variants={{
            hidden: { opacity: 0 },
            visible: {
               opacity: 1,
               transition: {
                  staggerChildren: 0.15,
                  delayChildren: 1.2 // Start after the charts animate in
               }
            }
         }}
      >
         {/* Payment History Card */}
        <PaymentHistoryCard paymentHistory={studentProfile.PaymentHistory} />

         {/* Wishlist Card */}
         <WishlistCard wishlistItems={studentProfile.wishList} />

         {/* Note: QuizScoresCard is replaced by the chart, you can keep it or remove it */}
         <QuizScoresCard quizScores={studentProfile.quizScores} />
      </motion.div>


    </div>
  );
}

export default StudentDashboardPage;