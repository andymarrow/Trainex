"use client";

import React from "react";

function Tabs({ activeTab, onTabChange, tabs }) {
	return (
		<div className="flex border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700">
			{tabs.map((tab) => (
				<button
					key={tab.id}
					className={`flex-1 text-center py-3 px-2 text-sm font-medium transition-colors duration-200 focus:outline-none relative group
                        ${
							activeTab === tab.id
								? "text-blue-600 dark:text-cyan-400"
								: "text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
						}`}
					onClick={() => onTabChange(tab.id)}
				>
					{tab.name}
                    {/* Animated underline */}
                    <span className={`absolute bottom-0 left-0 w-full h-0.5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200
                        ${activeTab === tab.id ? 'scale-x-100 bg-blue-600 dark:bg-cyan-400' : 'bg-gray-400 dark:bg-gray-500'}`}
                    ></span>
				</button>
			))}
		</div>
	);
}

export default Tabs;