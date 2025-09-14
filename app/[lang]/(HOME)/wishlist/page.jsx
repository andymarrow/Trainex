// app/(home)/wishlist/page.jsx

"use client"; // Necessary if using App Router and client-side features like state/hooks

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link'; // Import Link for navigation
import { IoStar, IoRemoveCircleOutline, IoAddCircleOutline } from 'react-icons/io5'; // Using IoStar for consistency
import { FaShoppingCart } from 'react-icons/fa'; // Shopping cart icon for Add to Cart/Buy All

// --- Dummy Data Simulation ---
// In a real app, fetch this from global state, context, or API
const dummyCourses = [
	{
		id: 1,
		title: "Complete React Guide with Hooks",
		instructor: "Stephen Grider",
		description: "Learn React from scratch, including hooks, context, and more.",
		rating: 4.8,
		reviews: 12000,
		currentPrice: 19.99,
		originalPrice: 129.99,
		thumbnail: "/images/coursebanner1.jpg", // Use actual paths
		isBestseller: true,
	},
	{
		id: 2,
		title: "Advanced CSS & Sass for Responsive Design",
		instructor: "Jonas Schmedtmann",
        description: "Master CSS and Sass, including advanced techniques and animations for modern web design.",
		rating: 4.7,
		reviews: 8500,
		currentPrice: 14.99,
		originalPrice: 99.99,
		thumbnail: "/images/coursebanner12.jpg",
		isBestseller: false,
	},
    {
		id: 3,
		title: "Modern JavaScript: From Novice to Ninja",
		instructor: "Brad Traversy",
        description: "Become a modern JavaScript developer. Learn ES6+, Node.js, and more with practical projects.",
		rating: 4.9,
		reviews: 15000,
		currentPrice: 24.99,
		originalPrice: 149.99,
		thumbnail: "/images/coursebanner13.jpg",
		isBestseller: true,
	},
     {
		id: 4,
		title: "Fullstack Node.js Development",
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
		title: "Python for Data Science & Machine Learning Bootcamp",
		instructor: "Jose Portilla",
        description: "Learn Python for Data Science and Machine Learning, including libraries like Pandas, NumPy, Scikit-learn.",
		rating: 4.7,
		reviews: 10000,
		currentPrice: 21.99,
		originalPrice: 139.99,
		thumbnail: "/images/coursebanner12.jpg",
		isBestseller: true,
	},
];

// Initial dummy wishlist items (simulate a subset of dummyCourses)
const initialDummyWishlist = [
    dummyCourses[0], // React Guide
    dummyCourses[3], // Fullstack Node.js
    dummyCourses[4], // Python
];
// --- End Dummy Data ---


function WishlistPage() {
    // State to hold the wishlist items
    const [wishlistItems, setWishlistItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // Simulate fetching wishlist items on component mount
    useEffect(() => {
        // In a real app, you'd fetch from context, global state, or API
        // For this example, we'll just set the dummy data after a short delay
        const fetchWishlist = setTimeout(() => {
            setWishlistItems(initialDummyWishlist); // Set your dummy data here
            setIsLoading(false);
        }, 500); // Simulate a network delay

        return () => clearTimeout(fetchWishlist); // Cleanup timeout
    }, []); // Empty dependency array ensures this runs only once on mount

    // Truncate description helper
	const truncateDescription = (text, charLimit) => {
        if (!text) return '';
        if (text.length <= charLimit) return text;
        const lastSpaceIndex = text.lastIndexOf(' ', charLimit);
        if (lastSpaceIndex === -1 || lastSpaceIndex === 0) {
             return text.substring(0, charLimit) + '...';
        }
        return text.substring(0, lastSpaceIndex) + '...';
    };

    // Handle removing an item from the wishlist
    const handleRemoveItem = (itemId) => {
        // In a real app, you'd update global state or call an API
        setWishlistItems(wishlistItems.filter(item => item.id !== itemId));
        console.log(`Removed item ${itemId} from wishlist`);
        // Optionally show a notification
    };

    // Handle adding an item to the cart
    const handleAddToCart = (item) => {
        // In a real app, you'd add this item to the cart state (global)
        console.log(`Added item ${item.title} to cart`);
        // Optionally show a notification
        // Optionally remove from wishlist after adding to cart (depends on desired flow)
        // handleRemoveItem(item.id);
    };

    // Handle buying all items in the wishlist
    const handleBuyAll = () => {
         if (wishlistItems.length === 0) return;

        // In a real app, this would typically add all items to the cart
        // and navigate to the checkout page, or initiate a direct checkout.
        console.log("Initiating checkout for all wishlist items:", wishlistItems.map(item => item.title));
        // Example: Add all to cart (simulated)
        // wishlistItems.forEach(item => addToCart(item)); // Need a global addToCart function
        // Example: Navigate to checkout
        // router.push('/checkout'); // Need to import useRouter from 'next/navigation'

        // For this simulation, just clear the wishlist after "buying"
        setWishlistItems([]);
        console.log("Wishlist cleared after buying all.");
        // Optionally show a success notification
    };

    // Calculate total price of items in the wishlist
    const totalPrice = wishlistItems.reduce((sum, item) => sum + item.currentPrice, 0);


    // Render stars for rating
    const renderStars = (rating) => {
        const filledStars = Math.round(rating);
        const stars = [];
        for (let i = 0; i < 5; i++) {
            if (i < filledStars) {
                stars.push(<IoStar key={i} className="text-yellow-500 dark:text-yellow-400 w-4 h-4" />);
            } else {
                stars.push(<IoStar key={i} className="text-gray-300 dark:text-gray-600 w-4 h-4" />);
            }
        }
        return stars;
    };


    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 min-h-screen  text-gray-900 dark:text-gray-100">
            <h1 className="text-4xl font-bold mb-8 text-center text-blue-600 dark:text-cyan-400">My Wishlist</h1>

            {isLoading ? (
                <div className="text-center text-lg">Loading wishlist...</div>
            ) : wishlistItems.length === 0 ? (
                <div className="text-center text-lg p-8 border border-dashed border-gray-400 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 max-w-md mx-auto">
                    Your wishlist is currently empty.
                    <p className="mt-4 text-gray-600 dark:text-gray-400 text-base">
                        Browse our courses and add ones you're interested in!
                    </p>
                    <Link href="/CourseList" className="mt-6 inline-block bg-blue-600 dark:bg-cyan-500 text-white font-semibold px-6 py-3 rounded-full hover:bg-blue-700 dark:hover:bg-cyan-600 transition-colors">
                        Explore Courses
                    </Link>
                </div>
            ) : (
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Wishlist Items List */}
                    <div className="lg:w-2/3 space-y-6">
                        {wishlistItems.map(course => (
                            <div
                                key={course.id}
                                className="flex flex-col sm:flex-row bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden p-4 transition-all duration-200 hover:shadow-lg border border-gray-200 dark:border-gray-700"
                            >
                                {/* Course Image (clickable to course detail page - optional) */}
                                {/* Assuming you have a course detail page like /courses/:id */}
                                <Link href={`/courses/${course.id}`} className="flex-shrink-0 relative w-full sm:w-32 h-32 sm:h-24 md:w-40 md:h-28 rounded-md overflow-hidden mb-4 sm:mb-0 sm:mr-4">
                                    <Image
                                        src={course.thumbnail || '/images/placeholder.jpg'}
                                        alt={course.title}
                                        layout="fill"
                                        objectFit="cover"
                                        className="transition-transform duration-300 hover:scale-105"
                                    />
                                </Link>

                                {/* Course Details */}
                                <div className="flex-grow flex flex-col justify-between">
                                    <div>
                                        <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-1 line-clamp-2">{course.title}</h2>
                                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2 line-clamp-1">{course.instructor}</p>
                                         <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">{truncateDescription(course.description, 80)}</p> {/* Truncate description */}
                                    </div>

                                    {/* Rating and Price */}
                                    <div className="flex items-center justify-between mt-2 sm:mt-0">
                                        <div className="flex items-center">
                                            <div className="flex mr-2">{renderStars(course.rating)}</div>
                                            <span className="text-sm font-bold text-yellow-600 dark:text-yellow-400 mr-1">{course.rating.toFixed(1)}</span>
                                            <span className="text-xs text-gray-500 dark:text-gray-400">({course.reviews.toLocaleString()})</span>
                                        </div>
                                        <span className="text-lg font-bold text-blue-600 dark:text-cyan-400">${course.currentPrice.toFixed(2)}</span>
                                    </div>
                                </div>

                                {/* Actions */}
                                <div className="flex sm:flex-col items-center sm:items-end justify-end mt-4 sm:mt-0 sm:ml-4 space-x-4 sm:space-x-0 sm:space-y-4">
                                    {/* Remove from Wishlist Button */}
                                    <button
                                        onClick={() => handleRemoveItem(course.id)}
                                        className="text-gray-500 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-500 transition-colors duration-200"
                                        aria-label={`Remove ${course.title} from wishlist`}
                                    >
                                        <IoRemoveCircleOutline className="w-7 h-7" />
                                    </button>

                                    {/* Add to Cart Button */}
                                    <button
                                         onClick={() => handleAddToCart(course)}
                                        className="flex items-center bg-blue-100 dark:bg-gray-700 text-blue-600 dark:text-cyan-400 font-semibold px-4 py-2 rounded-full hover:bg-blue-200 dark:hover:bg-gray-600 transition-colors text-sm"
                                        aria-label={`Add ${course.title} to cart`}
                                    >
                                        <FaShoppingCart className="mr-2 w-4 h-4" /> Add to Cart
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Summary / Buy All Section */}
                    <div className="lg:w-1/3 sticky top-28 h-fit bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
                        <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 border-b border-gray-200 dark:border-gray-700 pb-3">Summary</h3>

                        <div className="flex justify-between items-center text-lg font-medium mb-4">
                            <span className="text-gray-700 dark:text-gray-300">Total Items:</span>
                            <span className="text-gray-900 dark:text-white">{wishlistItems.length}</span>
                        </div>

                         <div className="flex justify-between items-center text-xl font-bold mb-6">
                            <span className="text-gray-800 dark:text-white">Total Price:</span>
                            <span className="text-blue-600 dark:text-cyan-400">${totalPrice.toFixed(2)}</span>
                        </div>

                        {/* Buy All Button */}
                        <button
                            onClick={handleBuyAll}
                             disabled={wishlistItems.length === 0}
                            className={`w-full text-center font-semibold px-6 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl text-lg
                                       ${wishlistItems.length === 0
                                         ? 'bg-gray-400 dark:bg-gray-600 cursor-not-allowed'
                                         : 'bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white'
                                        }`}
                        >
                           <FaShoppingCart className="inline-block mr-2 w-5 h-5" /> Buy All Items
                        </button>

                         {/* Optional: Continue Shopping Link */}
                         <div className="mt-6 text-center">
                             <Link href="/CourseList" className="text-blue-600 dark:text-cyan-400 hover:underline font-semibold transition-colors duration-200">
                                 ← Continue Shopping
                             </Link>
                         </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default WishlistPage;