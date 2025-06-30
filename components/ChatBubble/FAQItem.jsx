"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoChevronDownOutline, IoChevronUpOutline } from "react-icons/io5";

function FAQItem({ question, answer }) {
	const [isOpen, setIsOpen] = useState(false);

	const toggleOpen = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className="border-b border-gray-200 dark:border-gray-700 last:border-b-0"> {/* last:border-b-0 removes the last border */}
			<button
				className="flex justify-between items-center w-full text-left py-4 px-5 focus:outline-none hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200" // Increased padding, added hover effect
				onClick={toggleOpen}
				aria-expanded={isOpen}
			>
				<span className="text-gray-800 dark:text-gray-200 font-semibold text-base flex-grow mr-4"> {/* Increased font size */}
					{question}
				</span>
				{isOpen ? (
					<IoChevronUpOutline className="flex-shrink-0 h-5 w-5 text-gray-600 dark:text-gray-400" /> 
				) : (
					<IoChevronDownOutline className="flex-shrink-0 h-5 w-5 text-gray-600 dark:text-gray-400" /> 
				)}
			</button>
			<AnimatePresence initial={false}> {/* initial={false} prevents animation on mount */}
				{isOpen && (
					<motion.div
						initial={{ opacity: 0, height: 0, paddingBottom: 0 }} // Include padding in initial state
						animate={{ opacity: 1, height: "auto", paddingBottom: 16 }} // Animate padding as well (py-4 = pb-4)
						exit={{ opacity: 0, height: 0, paddingBottom: 0 }}
						transition={{ duration: 0.3, ease: "easeInOut" }} // Smoother transition
						className="overflow-hidden px-5 text-gray-700 dark:text-gray-300 text-sm" // Added px-5 to match button padding
					>
						<p>{answer}</p>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}

export default FAQItem;