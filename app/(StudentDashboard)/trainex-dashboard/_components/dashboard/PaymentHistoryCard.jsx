import React from 'react';
import { motion } from 'framer-motion';

function PaymentHistoryCard({ paymentHistory }) {
   // Animation variants
   const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.6 } },
  };

  // Sort and get recent payments (e.g., last 3)
  const recentPayments = paymentHistory
    .sort((a, b) => new Date(b.date) - new Date(a.date)) // Sort by date descending
    .slice(0, 3); // Get the top 3

  return (
    <motion.div
      className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md mb-8"
      initial="hidden"
      animate="visible"
      variants={cardVariants}
    >
      <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Recent Payments</h2>
      {recentPayments.length > 0 ? (
        <ul className="space-y-3">
          {recentPayments.map(payment => (
            <li key={payment.id} className="flex justify-between items-center text-gray-700 dark:text-gray-300 text-sm">
              <span>{payment.description}</span>
              <span className="font-medium text-green-600 dark:text-green-400">
                {payment.currency} {payment.amount.toFixed(2)}
              </span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-600 dark:text-gray-400 text-sm">No payment history found.</p>
      )}
    </motion.div>
  );
}

export default PaymentHistoryCard;