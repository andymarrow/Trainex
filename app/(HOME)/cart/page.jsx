// app/cart/page.jsx

"use client"; // Necessary if using App Router and client-side features like state/hooks

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IoCloseOutline, IoStar } from 'react-icons/io5'; // Added IoStar, using IoCloseOutline for item remove button
import { FaShoppingCart, FaArrowRight } from 'react-icons/fa'; // Icons for buttons

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
		thumbnail: "/images/coursebanner14.jpg", // Using a different thumbnail path for variety
		isBestseller: true,
	},
];

// Initial dummy cart items
const initialDummyCart = [
    dummyCourses[1],
    dummyCourses[2],
    dummyCourses[4], 
    dummyCourses[0],
];
// --- End Dummy Data ---


function CartPage() {
    // State to hold the cart items (array of course objects)
    const [cartItems, setCartItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // Simulate fetching cart items on component mount
    useEffect(() => {
        // In a real app, you'd fetch from context, global state, or API
        // For this example, we'll just set the dummy data after a short delay
        const fetchCart = setTimeout(() => {
            setCartItems(initialDummyCart);
            setIsLoading(false);
        }, 500); // Simulate a network delay

        return () => clearTimeout(fetchCart); // Cleanup timeout
    }, []); // Empty dependency array ensures this runs only once on mount

    // Truncate description helper (copied from WishlistPage)
	const truncateDescription = (text, charLimit) => {
        if (!text) return '';
        if (text.length <= charLimit) return text;
        const lastSpaceIndex = text.lastIndexOf(' ', charLimit);
        if (lastSpaceIndex === -1 || lastSpaceIndex === 0) {
             return text.substring(0, charLimit) + '...';
        }
        return text.substring(0, lastSpaceIndex) + '...';
    };

     // Render stars for rating (copied from WishlistPage)
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


    // Handle removing an item from the cart
    const handleRemoveItem = (itemId) => {
         // In a real app, you'd update global state or call an API
        setCartItems(cartItems.filter(item => item.id !== itemId));
        console.log(`Removed item ${itemId} from cart`);
        // Optionally show a notification
    };

    // Handle buying a single item
    const handleBuyItem = (item) => {
        // In a real app, this would likely navigate to a checkout page
        // with only this item pre-selected, or trigger a specific purchase flow.
        console.log(`Initiating purchase for single item: ${item.title}`);
         // For simulation, you might navigate to /checkout?item=itemId
        // Or, if the checkout page handles a list, you could pass [item.id]
        // router.push(`/checkout?item=${item.id}`); // Example navigation
        // Optionally remove the item from the cart after buying it individually
        // handleRemoveItem(item.id);
    };


    // Handle proceeding to checkout (Buying all)
    const handleProceedToCheckout = () => {
        if (cartItems.length === 0) return;

        // In a real app, this would typically navigate to the checkout page
        // with all items in the cart.
        console.log("Initiating checkout for all cart items:", cartItems.map(item => item.title));
        // Example: Navigate to checkout page with all items
        // router.push('/checkout'); // Assuming /checkout page reads the full cart state
    };

    // Calculate total number of items (simply the count of courses)
    const totalItemsCount = cartItems.length;

    // Calculate subtotal price (sum of currentPrice for each item)
    const subtotalPrice = cartItems.reduce((sum, item) => sum + item.currentPrice, 0);


    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 min-h-screen  text-gray-900 dark:text-gray-100"> {/* Added bg color back */}
            <h1 className="text-4xl font-bold mb-8 text-center text-blue-600 dark:text-cyan-400">My Cart</h1>

            {isLoading ? (
                <div className="text-center text-lg">Loading cart...</div>
            ) : cartItems.length === 0 ? (
                <div className="text-center text-lg p-8 border border-dashed border-gray-400 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 max-w-md mx-auto">
                    Your cart is empty.
                    <p className="mt-4 text-gray-600 dark:text-gray-400 text-base">
                        Discover courses you love and add them to your cart!
                    </p>
                    <Link href="/CourseList" className="mt-6 inline-block bg-blue-600 dark:bg-cyan-500 text-white font-semibold px-6 py-3 rounded-full hover:bg-blue-700 dark:hover:bg-cyan-600 transition-colors">
                        Explore Courses
                    </Link>
                </div>
            ) : (
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Cart Items List */}
                    <div className="lg:w-2/3 space-y-6">
                        {cartItems.map(course => (
                             <div
                                key={course.id}
                                className="flex flex-col sm:flex-row bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden p-4 transition-all duration-200 hover:shadow-lg border border-gray-200 dark:border-gray-700"
                            >
                                {/* Course Image (clickable to course detail page - optional) */}
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
                                {/* Adjusted flex-grow to take available space */}
                                <div className="flex-grow flex flex-col justify-between">
                                    <div> {/* Container for Title, Instructor, Desc, Rating */}
                                        <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-1 line-clamp-2">{course.title}</h2>
                                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2 line-clamp-1">{course.instructor}</p>
                                        <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">{truncateDescription(course.description, 80)}</p> {/* Truncate description */}

                                        {/* Rating */}
                                        <div className="flex items-center text-sm text-gray-700 dark:text-gray-300 mb-2">
                                            <div className="flex items-center mr-2">{renderStars(course.rating)}</div>
                                            <span className="font-bold text-yellow-600 dark:text-yellow-400 mr-1">{course.rating.toFixed(1)}</span>
                                            <span className="text-xs text-gray-500 dark:text-gray-400">({course.reviews.toLocaleString()})</span>
                                        </div>
                                    </div>

                                    {/* Price */}
                                    <div className="flex items-center mt-2"> {/* Added mt-2 for separation */}
                                         <span className="font-bold text-lg text-blue-600 dark:text-cyan-400">${course.currentPrice.toFixed(2)}</span>
                                          {/* Optional: Show original price if applicable */}
                                            {course.originalPrice > course.currentPrice && (
                                                <span className="ml-3 text-sm text-gray-500 dark:text-gray-400 line-through">${course.originalPrice.toFixed(2)}</span>
                                            )}
                                    </div>
                                </div>

                                {/* Actions */}
                                {/* Adjusted flex and items alignment for buttons */}
                                <div className="flex sm:flex-col items-center sm:items-end justify-end mt-4 sm:mt-0 sm:ml-4 space-x-4 sm:space-x-0 sm:space-y-4">
                                    {/* Remove from Cart Button */}
                                    <button
                                        onClick={() => handleRemoveItem(course.id)}
                                        className="text-gray-500 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-500 transition-colors duration-200"
                                        aria-label={`Remove ${course.title} from cart`}
                                    >
                                        <IoCloseOutline className="w-7 h-7" />
                                    </button>

                                    {/* Buy Item Button */}
                                    <button
                                         onClick={() => handleBuyItem(course)}
                                        className="flex items-center bg-blue-100 dark:bg-gray-700 text-blue-600 dark:text-cyan-400 font-semibold px-4 py-2 rounded-full hover:bg-blue-200 dark:hover:bg-gray-600 transition-colors text-sm"
                                        aria-label={`Buy ${course.title}`}
                                    >
                                        <FaShoppingCart className="mr-2 w-4 h-4" /> Buy Now
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Summary / Checkout Section */}
                    <div className="lg:w-1/3 sticky top-28 h-fit bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
                        <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 border-b border-gray-200 dark:border-gray-700 pb-3">Order Summary</h3>

                        <div className="flex justify-between items-center text-lg font-medium mb-4">
                            <span className="text-gray-700 dark:text-gray-300">Courses in Cart:</span>
                            <span className="text-gray-900 dark:text-white">{totalItemsCount}</span>
                        </div>

                         {/* Subtotal Price */}
                         <div className="flex justify-between items-center text-xl font-bold mb-6">
                            <span className="text-gray-800 dark:text-white">Subtotal:</span>
                            <span className="text-blue-600 dark:text-cyan-400">${subtotalPrice.toFixed(2)}</span>
                        </div>

                        {/* Proceed to Checkout Button (Buy All) */}
                        <button
                            onClick={handleProceedToCheckout}
                            disabled={cartItems.length === 0}
                            className={`w-full text-center font-semibold px-6 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl text-lg
                                       ${cartItems.length === 0
                                         ? 'bg-gray-400 dark:bg-gray-600 cursor-not-allowed'
                                         : 'bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white'
                                        }`}
                        >
                           <FaArrowRight className="inline-block mr-2 w-5 h-5" /> Proceed to Checkout
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

export default CartPage;