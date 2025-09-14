// components/Header.js
"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

import { FaFacebook, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";
import {
	IoMenuOutline,
	IoCloseOutline,
	IoCartOutline,
	IoHeartOutline,
	IoChatbubbleOutline, // Keeping this although not used in dropdown logic currently
	IoChevronDownOutline,
	IoChevronUpOutline,
} from "react-icons/io5";
import ThemeToggle from "@/components/Themetoggle"; // Adjust path if necessary
import WishlistCartDropdown from "./WishlistCartDropdown"; // Import the new component


// Dummy Data Structure (based on your CourseCard)
const dummyCourses = [
	{
		id: 1,
		title: "Complete React Guide",
		instructor: "Stephen Grider",
		description: "Learn React from scratch, including hooks, context, and more.",
		rating: 4.8,
		reviews: 12000,
		currentPrice: 19.99,
		originalPrice: 129.99,
		thumbnail: "/images/coursebanner1.jpg", // Replace with actual image paths
		isBestseller: true,
	},
	{
		id: 2,
		title: "Advanced CSS & Sass",
		instructor: "Jonas Schmedtmann",
        description: "Master CSS and Sass, including advanced techniques and animations.",
		rating: 4.7,
		reviews: 8500,
		currentPrice: 14.99,
		originalPrice: 99.99,
		thumbnail: "/images/coursebanner12.jpg",
		isBestseller: false,
	},
    {
		id: 3,
		title: "Modern JavaScript",
		instructor: "Brad Traversy",
        description: "Become a modern JavaScript developer. Learn ES6+, Node.js, and more.",
		rating: 4.9,
		reviews: 15000,
		currentPrice: 24.99,
		originalPrice: 149.99,
		thumbnail: "/images/coursebanner13.jpg",
		isBestseller: true,
	},
     {
		id: 4,
		title: "Fullstack Node.js",
		instructor: "Andrew Mead",
        description: "Build full-stack applications with Node.js, Express, and MongoDB.",
		rating: 4.6,
		reviews: 7000,
		currentPrice: 17.99,
		originalPrice: 119.99,
		thumbnail: "/images/coursebanner14.jpg",
		isBestseller: false,
	},
    {
		id: 5,
		title: "Python for Data Science",
		instructor: "Jose Portilla",
        description: "Learn Python for Data Science and Machine Learning.",
		rating: 4.7,
		reviews: 10000,
		currentPrice: 21.99,
		originalPrice: 139.99,
		thumbnail: "/images/coursebanner1.jpg",
		isBestseller: true,
	},
];

// Simulate initial state
const initialWishlist = [dummyCourses[0], dummyCourses[3]]; // Example items
const initialCart = [dummyCourses[1], dummyCourses[4]]; // Example items


function Header() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [openMobileDropdown, setOpenMobileDropdown] = useState(null);

	// State for dropdowns
    const [isWishlistOpen, setIsWishlistOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);

    // State for items (replace with actual state management in a real app)
    // For this example, we'll use useState, but remember this state is lost on refresh
    const [wishlistItems, setWishlistItems] = useState(initialWishlist);
    const [cartItems, setCartItems] = useState(initialCart);


	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
		// Close any open desktop dropdowns when mobile menu opens/closes
        setIsWishlistOpen(false);
        setIsCartOpen(false);
		if (isMobileMenuOpen) { // If closing the menu
			setOpenMobileDropdown(null);
		}
	};

	const toggleMobileDropdown = (name) => {
		setOpenMobileDropdown(openMobileDropdown === name ? null : name);
	};

    // --- Dropdown Logic ---
    const closeDropdowns = () => {
        setIsWishlistOpen(false);
        setIsCartOpen(false);
    };

    const toggleWishlistDropdown = () => {
        // Close cart dropdown if it's open
        if (isCartOpen) setIsCartOpen(false);
        // Close mobile menu if it's open
        if (isMobileMenuOpen) setIsMobileMenuOpen(false);
        setIsWishlistOpen(!isWishlistOpen);
    };

    const toggleCartDropdown = () => {
        // Close wishlist dropdown if it's open
        if (isWishlistOpen) setIsWishlistOpen(false);
         // Close mobile menu if it's open
        if (isMobileMenuOpen) setIsMobileMenuOpen(false);
        setIsCartOpen(!isCartOpen);
    };

    const handleRemoveItem = (itemId, type) => {
        console.log(`Attempting to remove item ${itemId} from ${type}`);
        // In a real app, this would update global state or call an API
        if (type === 'wishlist') {
            setWishlistItems(wishlistItems.filter(item => item.id !== itemId));
        } else if (type === 'cart') {
            setCartItems(cartItems.filter(item => item.id !== itemId));
        }
        // Optionally show a confirmation message
    };

    // Note: Navigation to /wishlist or /cart happens within the WishlistCartDropdown
    // via the <Link> components when an item or "View All" is clicked.
    // The onClose prop passed to the dropdown will handle closing the dropdown
    // after navigation.


	const navLinks = [
		{ name: "Home", href: "/" },
		{
			name: "Courses",
			href: "/CourseList",
			dropdown: [
				{ name: "All Courses", href: "/CourseList" },
				{ name: "Popular Courses", href: "/CourseList" },
				{ name: "Categories", href: "/CourseList" },
			],
		},
		{
			name: "Blog",
			href: "/Blog",
			dropdown: [
				{ name: "All Blog Posts", href: "/Blog" },
				{ name: "Categories", href: "/Blog" },
				{ name: "Archives", href: "/Blog" },
			],
		},
		{ name: "About", href: "/About" },
		{ name: "Contact", href: "/Contact" },
	];

	return (
		<header className="relative bg-white dark:bg-gray-900 shadow-sm z-50">


			{/* Main Header Content */}
			<div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20 md:h-24">
				{/* Logo */}
				<Link href="/" onClick={closeDropdowns}> {/* Close dropdowns if logo is clicked */}
					<div className="flex items-center">
						<Image
							src="/images/logo.jpg"
							alt="Train ex Logo"
							width={40}
							height={40}
							className="mr-2 rounded-md"
						/>
						<span className="text-2xl md:text-3xl font-bold text-blue-600 dark:text-cyan-400">
							Train ex
						</span>
					</div>
				</Link>

				{/* Desktop Navigation (Hidden on Mobile) */}
				<nav className="hidden md:flex flex-grow justify-center space-x-8 lg:space-x-12">
					{navLinks.map((link) =>
						link.dropdown ? (
							// Dropdown Trigger
							<div key={link.name} className="relative group cursor-pointer">
                                {/* The text label for the dropdown */}
								<div
									className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-cyan-400 font-semibold transition-colors duration-200 inline-flex items-center py-2"
								>
									{link.name}
									<IoChevronDownOutline className="ml-1 h-3 w-3 group-hover:rotate-180 transition-transform duration-200" />
								</div>
								{/* Dropdown Content */}
								<div className="absolute left-0 mt-0 w-48 bg-white dark:bg-gray-700 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none group-hover:pointer-events-auto z-50 overflow-hidden ring-1 ring-black ring-opacity-5">
									{link.dropdown.map((dropItem) => (
                                        // Dropdown Link
										<Link
											key={dropItem.name}
                                            // Conditionally set href for Courses dropdown items (as requested in original code)
                                            // Generally, dropdown items should link to specific pages, not always the same page
                                            // For a real course site, Popular/Categories might link differently
                                            // Following your original logic here:
											href={link.name === 'Courses' ? '/CourseList' : dropItem.href}
											className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-600 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors duration-200"
											onClick={closeDropdowns} // Close icons dropdowns on nav click
										>
											{dropItem.name}
										</Link>
									))}
								</div>
							</div>
						) : (
							// Simple Nav Item
							<Link
								key={link.name}
								href={link.href}
								className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-cyan-400 font-semibold transition-colors duration-200 py-2"
								onClick={closeDropdowns} // Close icons dropdowns on nav click
							>
								{link.name}
							</Link>
						)
					)}
				</nav>

				{/* Desktop Right Side Icons & Button */}
				<div className="hidden md:flex items-center space-x-6 lg:space-x-8">

					{/* Wishlist Icon with Dropdown Trigger */}
                    <div className="relative group cursor-pointer" onClick={toggleWishlistDropdown}>
                        <IoHeartOutline className="h-6 w-6 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors duration-200" />
                        {/* Badge - use state length */}
                        {wishlistItems.length > 0 && (
                            <span className="absolute -top-1 -right-1 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-red-100 bg-red-500 rounded-full">
                                {wishlistItems.length}
                            </span>
                        )}
                         {/* Wishlist Dropdown */}
                        <WishlistCartDropdown
                            items={wishlistItems}
                            type="wishlist"
                            isOpen={isWishlistOpen}
                            onClose={closeDropdowns}
                            onRemoveItem={handleRemoveItem}
                        />
                    </div>

					{/* Cart Icon with Dropdown Trigger */}
                    <div className="relative group cursor-pointer" onClick={toggleCartDropdown}>
                        <IoCartOutline className="h-6 w-6 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors duration-200" />
                        {/* Badge - use state length */}
                        {cartItems.length > 0 && (
                            <span className="absolute -top-1 -right-1 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-red-100 bg-red-500 rounded-full">
                                {cartItems.length}
                            </span>
                        )}
                        {/* Cart Dropdown */}
                        <WishlistCartDropdown
                            items={cartItems}
                            type="cart"
                            isOpen={isCartOpen}
                            onClose={closeDropdowns}
                            onRemoveItem={handleRemoveItem}
                        />
                    </div>


					{/* Theme Toggle */}
					<div className="cursor-pointer" onClick={closeDropdowns}> {/* Close icons dropdowns on toggle click */}
						<ThemeToggle />
					</div>

                    {/* Sign In Button - Changed from <a> to Link */}
					<Link
						href="/sign-in" // Changed href to /sign-in based on button text
						className="ml-6 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
						onClick={closeDropdowns} // Close icons dropdowns on nav click
					>
						Sign in →
					</Link>
				</div>

				{/* Mobile Icons & Burger Menu (Visible on Mobile) */}
				<div className="md:hidden flex items-center space-x-5"> {/* Added spacing */}
                    {/* Mobile Theme Toggle */}
                    <div className="cursor-pointer">
						<ThemeToggle />
					</div>
                    {/* Mobile Wishlist Icon - Navigates directly */}
					<Link href="/wishlist" className="relative text-gray-700 dark:text-gray-300" >
                        <IoHeartOutline className="h-7 w-7" />
                         {wishlistItems.length > 0 && (
                            <span className="absolute -top-1 -right-1 px-1.5 py-0.5 text-xs font-bold bg-red-500 rounded-full text-red-100">
                                {wishlistItems.length}
                            </span>
                        )}
                    </Link>
                    {/* Mobile Cart Icon - Navigates directly */}
                     <Link href="/cart" className="relative text-gray-700 dark:text-gray-300" >
                        <IoCartOutline className="h-7 w-7" />
                         {cartItems.length > 0 && (
                            <span className="absolute -top-1 -right-1 px-1.5 py-0.5 text-xs font-bold bg-red-500 rounded-full text-red-100">
                                {cartItems.length}
                            </span>
                        )}
                    </Link>

                    {/* Mobile Menu Toggle */}
					<button
						onClick={toggleMobileMenu}
						className="text-gray-700 dark:text-gray-300 focus:outline-none"
						aria-label="Toggle mobile menu"
					>
						{isMobileMenuOpen ? (
							<IoCloseOutline className="h-8 w-8" />
						) : (
							<IoMenuOutline className="h-8 w-8" />
						)}
					</button>
				</div>
			</div>

			{/* Mobile Menu (Animated) */}
			<AnimatePresence>
				{isMobileMenuOpen && (
					<motion.div
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -20 }}
						transition={{ duration: 0.2 }}
						// top should match header height (h-20 = 80px)
						className="md:hidden fixed top-20 left-0 w-full bg-white dark:bg-gray-800 shadow-lg py-4 z-40 border-t border-gray-200 dark:border-gray-700 max-h-[calc(100vh-80px)] overflow-y-auto" // Added fixed & max-height/overflow-y
					>
						<nav className="flex flex-col items-center space-y-4 px-4">
							{navLinks.map((link) => (
								<div key={link.name} className="w-full">
									{link.dropdown ? (
										<>
											<button
												className="flex items-center justify-center gap-2 w-full text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-cyan-400 text-lg font-medium transition-colors duration-200 py-2 text-left"
												onClick={() =>
													toggleMobileDropdown(
														link.name
													)
												}
											>
												<span>{link.name}</span>
												{openMobileDropdown ===
												link.name ? (
													<IoChevronUpOutline className="ml-2 h-4 w-4" />
												) : (
													<IoChevronDownOutline className="ml-2 h-4 w-4" />
												)}
											</button>
											{/* Conditional rendering for dropdown content */}
											<AnimatePresence>
												{openMobileDropdown ===
													link.name && (
													<motion.div
														initial={{
															opacity: 0,
															height: 0,
														}}
														animate={{
															opacity: 1,
															height: "auto",
														}}
														exit={{
															opacity: 0,
															height: 0,
														}}
														transition={{
															duration: 0.2,
														}}
														className="flex flex-col items-start space-y-2 pl-4 border-l border-gray-300 dark:border-gray-600 mt-2 overflow-hidden"
													>
														{link.dropdown.map(
															(dropItem) => (
                                                                // Mobile Dropdown Link
																<Link
																	key={
																		dropItem.name
																	}
                                                                    // Following your original logic here:
																	href={link.name === 'Courses' ? '/CourseList' : dropItem.href}
																	className="w-full text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-cyan-400 text-base transition-colors duration-200 py-1"
																	onClick={
																		toggleMobileMenu // Close menu on link click
																	}
																>
																	{
																		dropItem.name
																	}
																</Link>
															)
														)}
													</motion.div>
												)}
											</AnimatePresence>
										</>
									) : (
                                        // Simple Mobile Nav Item
										<Link
											key={link.name}
											href={link.href}
											className="block w-full text-center text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-cyan-400 text-lg font-medium transition-colors duration-200 py-2"
											onClick={toggleMobileMenu} // Close menu on link click
										>
											{link.name}
										</Link>
									)}
								</div>
							))}

							{/* Mobile Auth Buttons - Changed from <a> to Link */}
							<div className="flex flex-col items-center space-y-3 mt-6 pt-4 border-t border-gray-200 dark:border-gray-700 w-full"> {/* Moved icons out */}
								<Link
									href="/sign-up"
									className="w-full text-center bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl text-lg"
									onClick={toggleMobileMenu} // Close menu on link click
								>
									Sign up
								</Link>
								<Link
									href="/sign-in" // Changed href to /sign-in
									className="w-full text-center border border-blue-500 dark:border-cyan-500 text-blue-600 dark:text-cyan-400 font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:bg-blue-50 dark:hover:bg-gray-700 text-lg"
									onClick={toggleMobileMenu} // Close menu on link click
								>
									Log in
								</Link>
							</div>
                             {/* Removed icons section from inside mobile nav */}
						</nav>
					</motion.div>
				)}
			</AnimatePresence>
		</header>
	);
}

export default Header;