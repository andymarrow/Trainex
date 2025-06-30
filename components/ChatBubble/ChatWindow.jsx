"use client";

import React from "react";
import { IoCloseOutline } from "react-icons/io5";
import Tabs from "./Tabs";
import ChatInterface from "./ChatInterface";
import FAQSection from "./FAQSection";
// Import motion AND AnimatePresence from framer-motion
import { motion, AnimatePresence } from "framer-motion";

function ChatWindow({ activeTab, onTabChange, onClose }) {
	const tabs = [
		{ id: "assistants", name: "Assistants" },
		{ id: "ai", name: "Train ex AI" },
		{ id: "faq", name: "FAQs" }, // Changed name for clarity
	];

	return (
		<div className="flex flex-col h-full bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700"> {/* Added border, overflow hidden */}
			{/* Header */}
			<div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700"> {/* Added background */}
				<h3 className="text-lg font-semibold text-gray-900 dark:text-white">
					Train ex Support
				</h3>
				<button
					onClick={onClose}
					className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors duration-200 p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600" // Added padding, hover background
					aria-label="Close chat window"
				>
					<IoCloseOutline className="h-6 w-6" />
				</button>
			</div>

			{/* Tabs */}
			<Tabs activeTab={activeTab} onTabChange={onTabChange} tabs={tabs} />

			{/* Content Area */}
			<div className="flex-grow overflow-hidden relative"> {/* Use overflow-hidden here, added relative for absolute positioning children if needed */}
				{/* Use AnimatePresence and motion.div for smoother tab content transitions (optional but nice) */}
                {/* AnimatePresence is now imported */}
                <AnimatePresence mode="wait"> {/* Wait for exit before animating in */}
                    <motion.div
                        key={activeTab} // Key changes when tab changes, triggering animation
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute inset-0 flex flex-col" // Position content absolutely to fill container
                    >
                        {activeTab === "assistants" && (
                            <ChatInterface tabName="Assistants" />
                        )}
                        {activeTab === "ai" && <ChatInterface tabName="Train ex AI" />}
                        {activeTab === "faq" && <FAQSection />}
                    </motion.div>
                </AnimatePresence>
			</div>
		</div>
	);
}

export default ChatWindow;