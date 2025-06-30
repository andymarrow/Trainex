// app/(StudentDashboard)/trainex-dashboard/_components/dashboard/EstimatedHoursBarChart.jsx
import React, { useState, useEffect } from 'react'; // Import useState and useEffect
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { motion } from 'framer-motion';

// Import sampleCourses blueprint
import { sampleCourses } from '@/lib/constants'; // Adjust path as needed

// Custom Tooltip
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const course = payload[0].payload; // Get the data object
    return (
      <div className="p-3 bg-white dark:bg-gray-700 rounded-md shadow-lg border border-gray-200 dark:border-gray-600 text-gray-900 dark:text-gray-100">
        <p className="font-semibold">{course.courseTitle}</p>
        <p>Estimated Hours: <span className="font-medium">{course.hours}</span></p>
      </div>
    );
  }
  return null;
};

function EstimatedHoursBarChart({ enrolledCourses }) {
  // State to track dark mode status on the client
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Effect to check dark mode status after the component mounts on the client
  useEffect(() => {
     if (typeof window !== 'undefined') {
      setIsDarkMode(document.documentElement.classList.contains('dark'));
     }
  }, []);

  // Prepare data for the chart
  const chartData = enrolledCourses
    .map(enrollment => {
      const courseDetails = sampleCourses.find(course => course.id === enrollment.courseId);
      if (courseDetails && courseDetails.hoursSpent !== undefined && courseDetails.hoursSpent > 0) {
        return {
          courseId: courseDetails.id,
          courseTitle: courseDetails.title,
          hours: courseDetails.hoursSpent,
          progress: enrollment.courseProgressPercentage
        };
      }
      return null;
    })
    .filter(item => item !== null)
    .sort((a, b) => b.hours - a.hours);

  // Animation variants for the container
  const chartVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.5 } },
  };

  // Define axis color based on state
   const axisColor = isDarkMode ? '#D1D5DB' : '#4B5563'; // Gray-300/Gray-600

  // Define the gradient URL based on theme (static gradient still works)
  const gradientId = 'barGradient';
  const gradientStopColor1 = '#3B82F6'; // Blue-500
  const gradientStopColor2 = '#06B6D4'; // Cyan-500


  return (
    <motion.div
      className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md"
      initial="hidden"
      animate="visible"
      variants={chartVariants}
    >
      <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Estimated Course Hours</h2>
      <ResponsiveContainer width="100%" height={chartData.length * 70 + 60}>
        <BarChart
          data={chartData}
          margin={{
            top: 5, right: 30, left: 20, bottom: 5,
          }}
          layout="vertical"
        >
           {/* Define the gradient */}
           <defs>
             <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="0">
               <stop offset="0%" stopColor={gradientStopColor1} />
               <stop offset="100%" stopColor={gradientStopColor2} />
             </linearGradient>
           </defs>

          <XAxis
             type="number"
             stroke={axisColor} // Use state-controlled color
             fontSize={12}
          />
          <YAxis
             dataKey="courseTitle"
             type="category"
             width={150}
             interval={0}
             stroke={axisColor} // Use state-controlled color
             fontSize={12}
             // tickFormatter={(value) => value.length > 25 ? value.substring(0, 25) + '...' : value}
          />
          <Tooltip content={<CustomTooltip />} />
          <Bar
             dataKey="hours"
             fill={`url(#${gradientId})`}
             barSize={25}
             isAnimationActive={true}
          />
        </BarChart>
      </ResponsiveContainer>
    </motion.div>
  );
}

export default EstimatedHoursBarChart;