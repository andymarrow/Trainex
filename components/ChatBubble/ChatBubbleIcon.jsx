"use client";

import React from "react";
import { motion } from "framer-motion";
import { IoChatbubbleOutline } from "react-icons/io5";

function ChatBubbleIcon({ onClick }) {
	return (
		<motion.button
			className="fixed bottom-6 right-6 bg-blue-600 dark:bg-cyan-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 dark:hover:bg-cyan-600 transition-colors duration-200 z-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 dark:focus:ring-cyan-500 dark:focus:ring-opacity-50" // Increased padding, adjusted position
			onClick={onClick}
			initial={{ opacity: 0, y: 50, x: 50, rotate: 180 }} // Start from bottom right, rotated
			animate={{ opacity: 1, y: 0, x: 0, rotate: 0 }} // Animate to position, unrotated
			transition={{
                type: "spring", // Use spring physics for a bouncy feel
                stiffness: 150,
                damping: 10,
                delay: 0.5 // Still delay appearance slightly
            }}
			whileHover={{ scale: 1.1, rotate: 5 }} // Subtle hover effect
            whileTap={{ scale: 0.9 }} // Subtle press effect
			aria-label="Open chat support"
		>
			<IoChatbubbleOutline className="h-8 w-8" /> {/* Increased icon size */}
		</motion.button>
	);
}

export default ChatBubbleIcon;