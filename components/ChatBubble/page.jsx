"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ChatBubbleIcon from "./ChatBubbleIcon";
import ChatWindow from "./ChatWindow";

function ChatBubble() {
	const [isChatOpen, setIsChatOpen] = useState(false);
	const [activeTab, setActiveTab] = useState("assistants"); // Default tab

	const toggleChat = () => {
		setIsChatOpen(!isChatOpen);
        // Optional: Reset to default tab when closing/opening
        // Removed resetting tab on close so user returns to where they were
        if (!isChatOpen) {
           setActiveTab("assistants"); // Only reset when opening
        }
	};

	const handleTabChange = (tabId) => {
		setActiveTab(tabId);
	};

    // Define animation variants for the window
    const windowVariants = {
        hidden: {
            opacity: 0,
            y: 50, // Start slightly below
            x: 50, // Start slightly to the right
            scale: 0.9,
            pointerEvents: 'none', // Disable interactions when hidden
        },
        visible: {
            opacity: 1,
            y: 0,
            x: 0,
            scale: 1,
            transition: {
                type: "spring", // Spring animation for pop-up
                stiffness: 100,
                damping: 15,
            },
             pointerEvents: 'auto', // Enable interactions when visible
        },
         exit: {
            opacity: 0,
            y: 50, // Animate back down
            x: 50, // Animate back right
            scale: 0.9,
            transition: { duration: 0.2, ease: "easeOut" }, // Quicker fade/slide out
             pointerEvents: 'none', // Disable interactions immediately on exit
        }
    };

	return (
		<>
			{/* The floating bubble icon */}
			{!isChatOpen && <ChatBubbleIcon onClick={toggleChat} />}

			{/* The chat window (rendered with animation) */}
			<AnimatePresence>
				{isChatOpen && (
					<motion.div
                        // Use responsive classes for width, fixed height
						className="fixed bottom-6 right-6 w-80 sm:w-96 md:w-[400px] h-[550px] z-50 origin-bottom-right" // Adjusted size, position, added origin
						variants={windowVariants} // Apply defined variants
                        initial="hidden"
                        animate="visible"
                        exit="exit"
					>
						<ChatWindow
							activeTab={activeTab}
							onTabChange={handleTabChange}
							onClose={toggleChat}
						/>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}

export default ChatBubble;