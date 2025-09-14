// app/(StudentDashboard)/trainex-dashboard/_components/dashboard/RecentQuizScoreLineChart.jsx
import React, { useState, useEffect } from 'react'; // Import useState and useEffect
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts';
import { motion } from 'framer-motion';

// Import sampleCourses blueprint
import { sampleCourses } from '@/lib/constants'; // Adjust path as needed

// Custom Tooltip
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const quizData = payload[0].payload; // Get the data object
    const course = sampleCourses.find(c => c.id === quizData.courseId); // Find course details
    const courseTitle = course ? course.title : 'Unknown Course';

    return (
      <div className="p-3 bg-white dark:bg-gray-700 rounded-md shadow-lg border border-gray-200 dark:border-gray-600 text-gray-900 dark:text-gray-100">
        <p className="font-semibold">{quizData.quizTitle}</p>
        <p className="text-sm text-gray-600 dark:text-gray-400">{courseTitle}</p>
        <p className="mt-1">Score: <span className="font-medium">{quizData.score} / {quizData.totalQuestions}</span></p>
        <p className="text-xs text-gray-500 dark:text-gray-400">{label}</p>
      </div>
    );
  }
  return null;
};

// Helper function to format date for XAxis labels
const formatAxisDate = (dateString) => {
  if (!dateString) return 'N/A';
  const date = new Date(dateString);
  const options = { month: 'short', day: 'numeric' };
  return date.toLocaleDateString(undefined, options);
};

function RecentQuizScoreLineChart({ quizScores }) {
   // State to track dark mode status on the client
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Effect to check dark mode status after the component mounts on the client
  useEffect(() => {
     if (typeof window !== 'undefined') {
      setIsDarkMode(document.documentElement.classList.contains('dark'));
     }
  }, []);

  // Sort and get recent quiz scores (e.g., last 7)
  const recentQuizScores = quizScores
    .sort((a, b) => new Date(a.date) - new Date(b.date)) // Sort by date ascending for line chart
    .slice(-7); // Get the last 7 scores

  // Prepare data for the chart
  const chartData = recentQuizScores.map(quiz => ({
    ...quiz,
    dateLabel: formatAxisDate(quiz.date),
  }));

  // Animation variants for the container
  const chartVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.6 } },
  };

  // Define colors based on state
  const axisColor = isDarkMode ? '#D1D5DB' : '#4B5563'; // Gray-300/Gray-600
  const gridColor = isDarkMode ? '#4B5563' : '#E5E7EB'; // Gray-600/Gray-200
  const lineColor = '#3B82F6'; // Blue-500


  return (
    <motion.div
      className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md mb-8"
      initial="hidden"
      animate="visible"
      variants={chartVariants}
    >
      <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Recent Quiz Performance</h2>
      {chartData.length > 0 ? (
        <ResponsiveContainer width="100%" height={300}>
          <LineChart
            data={chartData}
            margin={{
              top: 5, right: 30, left: 20, bottom: 5,
            }}
          >
            <CartesianGrid
               strokeDasharray="3 3"
               stroke={gridColor} // Use state-controlled color
            />
            <XAxis
              dataKey="dateLabel"
              stroke={axisColor} // Use state-controlled color
              fontSize={12}
            />
            <YAxis
               domain={[0, 100]}
               label={{ value: 'Score', angle: -90, position: 'insideLeft', style: { textAnchor: 'middle', fill: axisColor } }} // Use state-controlled color
               stroke={axisColor} // Use state-controlled color
               fontSize={12}
            />
            <Tooltip content={<CustomTooltip />} />
            <Line
              type="monotone"
              dataKey="score"
              stroke={lineColor}
              activeDot={{ r: 8 }}
              isAnimationActive={true}
            />
          </LineChart>
        </ResponsiveContainer>
      ) : (
         <p className="text-gray-600 dark:text-gray-400 text-sm">No quiz attempts recorded yet.</p>
      )}
    </motion.div>
  );
}

export default RecentQuizScoreLineChart;