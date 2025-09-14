// app/(StudentDashboard)/trainex-dashboard/certificates/page.jsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link'; // Needed for empty state link

// Import sample data from your constants file
// Need profile for enrolledCourses, sampleCourses for course details
import { SAMPLE_STUDENT_PROFILE, sampleCourses } from '@/lib/constants';

// Import the custom card component
import CertificateCard from './_components/CertificateCard';

// Helper function to find a course by ID (same as used elsewhere)
const findCourseById = (courseId) => {
    return sampleCourses.find(course => course.id === courseId);
};

// Helper to format date nicely (optional, or use a library like date-fns)
const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    try {
        // Use toLocaleDateString for a user-friendly format
        return new Date(dateString).toLocaleDateString(undefined, {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    } catch (error) {
        console.error("Failed to parse date:", dateString, error);
        return 'Invalid Date';
    }
};


function CertificatesPage() {
  const studentProfile = SAMPLE_STUDENT_PROFILE;

  // Prepare certificate data: filter completed courses with certificate IDs
  // and merge with course details from sampleCourses
   const certificates = (studentProfile.enrolledCourses || [])
        .filter(enrollment =>
            // An item is a certificate if the course is complete AND there's a certificateId
            enrollment.isCourseComplete && enrollment.certificateId
        )
        .map(enrollment => {
            const courseBlueprint = findCourseById(enrollment.courseId);

            // Combine data for the CertificateCard component
            return {
                id: enrollment.certificateId, // Use the certificate ID as the unique key
                courseTitle: courseBlueprint?.title || 'Unknown Course',
                instructor: courseBlueprint?.instructor, // Include instructor
                thumbnail: courseBlueprint?.thumbnail || courseBlueprint?.image, // Use thumbnail or a general image field
                 // Use enrollmentDate as the completion date proxy, or lastAccessed if preferred for completed courses
                 // Let's use enrollmentDate for consistency as it's guaranteed to exist if enrolled
                completionDate: formatDate(enrollment.enrollmentDate),
                // Construct a potential link based on the certificate ID
                // In a real app, this might be a direct link to a PDF generation endpoint: `/api/certificate/${enrollment.certificateId}/download`
                // Or a page that displays the certificate: `/certificates/${enrollment.certificateId}`
                 certificateLink: `/trainex-dashboard/certificates/${enrollment.certificateId}`, // Example link structure
            };
        })
        // Filter out items where course blueprint wasn't found or no title exists
        .filter(certificate => certificate.courseTitle !== 'Unknown Course');


    // Animation variants for the staggered grid container
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.08, // Slightly smaller delay for cards
            }
        }
    };


  return (
    <div className="container mx-auto py-8 ">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 border-b pb-4 border-gray-200 dark:border-gray-700">
          My Certificates
      </h1>

      {certificates.length === 0 ? (
        // Empty state
        <motion.div
            initial="hidden"
            animate="visible"
            variants={{ visible: { opacity: 1, y: 0 }, hidden: { opacity: 0, y: 20 } }}
            transition={{ duration: 0.5 }}
            className="text-center text-gray-600 dark:text-gray-400 py-16"
        >
            <p className="text-2xl font-semibold mb-4">No Certificates Yet!</p>
            <p className="mb-6">Keep learning and complete courses to earn certificates.</p>
             {/* Optional: Link to browse courses or completed courses */}
             <Link href="/CourseList" className="inline-block text-blue-600 dark:text-cyan-400 hover:underline font-semibold transition-colors duration-200">
                Browse Courses
             </Link>
        </motion.div>
      ) : (
        // Certificates Grid
        <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" // Responsive grid columns
            variants={containerVariants} // Apply container staggering variants
            initial="hidden"
            animate="visible"
        >
          {certificates.map((cert) => (
            <CertificateCard key={cert.id} certificate={cert} /> // Pass the prepared certificate item to the card component
          ))}
        </motion.div>
      )}
    </div>
  );
}

export default CertificatesPage;