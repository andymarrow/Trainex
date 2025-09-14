// app/(StudentDashboard)/trainex-dashboard/_components/dashboard/DashboardHeader.jsx
'use client';

import React from 'react';
// Removed imports for FaBell, FaPlayCircle, NotificationDropdown, PlaylistDropdown
// Keep other icons/imports if used elsewhere in this component (not shown)

// Note: This component is now just a display for the dashboard title and overall progress.
// The site-wide header handles notifications, wishlist, etc.

// Add prop types or type checking if using TypeScript
// interface DashboardHeaderProps {
//     userName: string;
//     overallProgress: number;
//     // notifications and playlistItems props are REMOVED
// }


function DashboardHeader({ userName, overallProgress }) {
  // Removed state for dropdowns
  // Removed handlers for dropdowns


  return (
    // Keep mb-8 for spacing below header
    <header className="mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between">
      {/* Header Content - Simplified */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Welcome, {userName}!
        </h1>
        <p className="mt-1 text-gray-600 dark:text-gray-400">
          Your overall progress: <span className="font-semibold text-blue-600 dark:text-cyan-400">{overallProgress}%</span>
        </p>
      </div>

      {/* Icons Container (now empty or contains other non-dropdown dashboard-specific actions if any) */}
      {/* If no other icons are needed here, this div might be removed */}
      <div className="mt-4 sm:mt-0 flex items-center space-x-4">
         {/* Any other dashboard-specific header elements would go here */}
      </div>
    </header>
  );
}

export default DashboardHeader;