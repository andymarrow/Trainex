// app/(StudentDashboard)/trainex-dashboard/_components/dashboard/CourseStatusPieChart.jsx
import React, { useState, useEffect } from 'react'; // Import useState and useEffect
import {
  PieChart,
  Pie,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from 'recharts';
import { motion } from 'framer-motion';

// Custom Tooltip component
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const { name, value } = payload[0];
    return (
      <div className="p-3 bg-white dark:bg-gray-700 rounded-md shadow-lg border border-gray-200 dark:border-gray-600 text-gray-900 dark:text-gray-100">
        <p className="font-semibold">{name}</p>
        <p>{value} Courses</p>
      </div>
    );
  }
  return null;
};

function CourseStatusPieChart({ enrolledCourses }) {
  // State to track dark mode status on the client
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Effect to check dark mode status after the component mounts on the client
  useEffect(() => {
    // Check if window/document is defined (i.e., running on client)
    if (typeof window !== 'undefined') {
      setIsDarkMode(document.documentElement.classList.contains('dark'));

      // Optional: Add a listener for theme changes if you have a dynamic theme switcher
      // const observer = new MutationObserver(() => {
      //   setIsDarkMode(document.documentElement.classList.contains('dark'));
      // });
      // observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
      // return () => observer.disconnect(); // Cleanup
    }
  }, []); // Empty dependency array means this effect runs only once after initial render on the client

  // Calculate stats
  const totalEnrolled = enrolledCourses.length;
  const completedCourses = enrolledCourses.filter(c => c.isCourseComplete).length;
  const inProgressCourses = enrolledCourses.filter(c => !c.isCourseComplete && c.courseProgressPercentage > 0).length;
  const notStartedCourses = totalEnrolled - completedCourses - inProgressCourses;

  // Data for the chart - Filter out categories with zero value
  const chartData = [
    { name: 'Completed', value: completedCourses },
    { name: 'In Progress', value: inProgressCourses },
    { name: 'Not Started', value: notStartedCourses },
  ].filter(item => item.value > 0);

  // Define colors using your theme
  const colors = ['#06B6D4', '#3B82F6', '#E5E7EB']; // Cyan-500, Blue-500, Gray-200 (light mode)
  const darkColors = ['#06B6D4', '#3B82F6', '#6B7280']; // Cyan-500, Blue-500, Gray-500 (dark mode)

  // Determine active colors based on state
  const activeColors = isDarkMode ? darkColors : colors;

  // Animation variants for the container
  const chartVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.4 } },
  };

  return (
    <motion.div
      className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md"
      initial="hidden"
      animate="visible"
      variants={chartVariants}
    >
      <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Course Status Overview</h2>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={chartData}
            cx="50%"
            cy="50%"
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
            isAnimationActive={true}
            labelLine={false}
          >
            {chartData.map((entry, index) => (
              // Use activeColors from state
              <Cell key={`cell-${index}`} fill={activeColors[index % activeColors.length]} />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
          <Legend wrapperStyle={{ paddingTop: '10px' }} />
        </PieChart>
      </ResponsiveContainer>
    </motion.div>
  );
}

export default CourseStatusPieChart;