import React from 'react';
import { motion } from 'framer-motion';

// Helper function to format date
const formatDate = (dateString) => {
  if (!dateString) return 'N/A';
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

function QuizScoresCard({ quizScores }) {
   // Animation variants
   const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.7 } },
  };

  // Sort and get recent quiz scores (e.g., last 3)
  const recentQuizScores = quizScores
    .sort((a, b) => new Date(b.date) - new Date(a.date)) // Sort by date descending
    .slice(0, 3); // Get the top 3

  return (
    <motion.div
      className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md mb-8"
      initial="hidden"
      animate="visible"
      variants={cardVariants}
    >
      <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Recent Quiz Scores</h2>
      {recentQuizScores.length > 0 ? (
        <ul className="space-y-3">
          {recentQuizScores.map(quiz => (
            <li key={quiz.id} className="flex justify-between items-center text-gray-700 dark:text-gray-300 text-sm">
              <span>{quiz.quizTitle}</span>
              <span className="font-medium">
                {quiz.score} / {quiz.totalQuestions}
                <span className="ml-2 text-xs text-gray-500 dark:text-gray-400">{formatDate(quiz.date)}</span>
              </span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-600 dark:text-gray-400 text-sm">No quiz attempts recorded yet.</p>
      )}
    </motion.div>
  );
}

export default QuizScoresCard;