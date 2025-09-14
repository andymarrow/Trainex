// app/(StudentDashboard)/trainex-dashboard/certificates/_components/CertificateCard.jsx
'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion'; // For item-level animation
import { HiOutlineDownload } from 'react-icons/hi'; // Download icon

// Define the structure of the certificate item expected by this component
// This structure is prepared in the page.jsx file by combining course and enrollment data
// interface CertificateItem {
//     id: string | number; // Certificate ID from enrollment.certificateId
//     courseTitle: string;
//     instructor?: string;
//     thumbnail?: string;
//     completionDate?: string; // Derived date string
//     certificateLink?: string; // Derived link to view/download
// }

// Define animation variants for each card
const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.8 }, // Animate from slightly below, smaller
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } }, // Glide up and scale in
};

function CertificateCard({ certificate }) {
    if (!certificate || !certificate.courseTitle) {
        // Basic check for invalid data
        return null;
    }

    return (
        <motion.div
            variants={cardVariants} // Apply the animation variants
            whileHover={{ scale: 1.03, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }} // Lift and slightly scale on hover
            transition={{ duration: 0.3 }} // Smooth hover transition
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden
                       flex flex-col h-full border border-gray-200 dark:border-gray-700" // Added border
        >
            {/* Thumbnail Area */}
             <div className="relative w-full h-40 md:h-48 lg:h-56 overflow-hidden"> {/* Responsive height */}
                 <Image
                    src={certificate.thumbnail || '/images/certificate-placeholder.jpg'} // Use a specific certificate placeholder
                    alt={certificate.courseTitle || 'Certificate thumbnail'}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300" // Keep image transition for possible future use
                />
                {/* Optional Overlay with Gradient - indicates completion */}
                 <div className="absolute inset-0 bg-gradient-to-t from-blue-600/40 to-cyan-400/40 dark:from-blue-800/50 dark:to-cyan-600/50 flex items-center justify-center text-white text-xl font-bold">
                     {/* Could add text like "Earned" or an icon here */}
                 </div>
            </div>

            {/* Content Area */}
            <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1 line-clamp-2"> {/* line-clamp to limit title lines */}
                    {certificate.courseTitle || 'Untitled Certificate'}
                </h3>
                 {certificate.instructor && (
                     <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-1"> {/* line-clamp */}
                         Instructor: {certificate.instructor}
                     </p>
                 )}

                {/* Completion Date (if available) */}
                 {certificate.completionDate && (
                     <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">
                         Earned on: <span className="font-semibold">{certificate.completionDate}</span>
                     </p>
                 )}

                {/* View/Download Button */}
                {certificate.certificateLink ? (
                    <Link
                        href={certificate.certificateLink}
                        // Target="_blank" to open in new tab for PDF/image links
                         target="_blank"
                        rel="noopener noreferrer" // Security best practice for target="_blank"
                        className="mt-auto inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-semibold rounded-md shadow-sm text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 dark:from-cyan-500 dark:to-blue-400 dark:hover:from-cyan-600 dark:hover:to-blue-500 transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-gray-800 dark:focus:ring-cyan-400"
                    >
                        <HiOutlineDownload className="mr-2 -ml-1 h-5 w-5" />
                        View Certificate
                    </Link>
                ) : (
                    // Handle case where link is missing
                     <button
                         disabled // Disable the button
                         className="mt-auto inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-semibold rounded-md shadow-sm text-gray-400 bg-gray-200 dark:bg-gray-600 dark:text-gray-500 cursor-not-allowed"
                     >
                         <HiOutlineDownload className="mr-2 -ml-1 h-5 w-5" />
                         Link Unavailable
                     </button>
                )}

            </div>
        </motion.div>
    );
}

export default CertificateCard;