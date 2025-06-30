"use client";

import React, { useState } from "react";
import { IoSend, IoMicOutline } from "react-icons/io5";

function ChatInterface({ tabName }) {
	const [message, setMessage] = useState("");

	const handleSend = () => {
		if (message.trim()) {
			console.log(`Sending message (${tabName}):`, message);
			// TODO: Add logic to send message (e.g., via API, WebSocket)
			setMessage("");
		}
	};

	const handleVoice = () => {
		console.log(`Initiating voice input for ${tabName}`);
		// TODO: Add logic for voice input
		alert("Voice input not implemented yet!");
	};

	const handleKeyPress = (e) => {
		if (e.key === "Enter") {
			e.preventDefault(); // Prevent new line
			handleSend();
		}
	};

	// Placeholder messages for demonstration
	const placeholderMessages = [
		{ sender: 'system', text: `Welcome to the ${tabName} chat. How can I help you today?` },
		{ sender: 'system', text: `Feel free to ask any questions about our courses or platform features.` },
		// Add more placeholder messages if needed
	];


	return (
		<div className="flex flex-col h-full">
			{/* Message Display Area */}
			<div className="flex-grow overflow-y-auto p-4 space-y-3 text-sm custom-scrollbar"> {/* Added custom-scrollbar class */}
				{/* Example Placeholder Message */}
				{placeholderMessages.map((msg, index) => (
					 <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
						<div className={`p-3 rounded-lg max-w-[85%] ${msg.sender === 'user' ? 'bg-blue-500 text-white dark:bg-blue-700' : 'bg-gray-200 text-gray-800 dark:bg-gray-600 dark:text-gray-200'}`}>
							{msg.text}
						</div>
					</div>
				))}
				{/* User sent messages would appear here */}
			</div>

			{/* Input Area */}
			<div className="flex items-center p-4 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700"> {/* Added background color */}
				<input
					type="text"
					className="flex-grow px-4 py-2.5 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-cyan-500 text-sm placeholder-gray-500 dark:placeholder-gray-400 shadow-inner" // Adjusted py, added shadow
					placeholder={`Type your message...`} // More general placeholder
					value={message}
					onChange={(e) => setMessage(e.target.value)}
					onKeyPress={handleKeyPress}
				/>
				<button
					className="ml-3 text-blue-600 dark:text-cyan-400 hover:opacity-80 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed" // Increased margin
					onClick={handleSend}
					disabled={!message.trim()}
					aria-label="Send message"
				>
					<IoSend className="h-6 w-6" /> {/* Icon size remains good */}
				</button>
				<button
					className="ml-2 text-gray-600 dark:text-gray-400 hover:opacity-80 transition-opacity"
					onClick={handleVoice}
					aria-label="Send voice message"
				>
					<IoMicOutline className="h-6 w-6" /> {/* Icon size remains good */}
				</button>
			</div>
		</div>
	);
}

export default ChatInterface;