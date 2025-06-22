"use client";
import React, { useRef, useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight, FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'; // Import arrow icons

// FiQuote is not needed based on the image provided, but keeping for future reference if needed
// import { FiQuote } from "react-icons/fi";
import { testimonials } from '@/lib/constants';




function Testimonials() {
    // Ref for the scrollable container
    const carouselRef = useRef(null);

    // State for controlling arrow visibility
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);

    // Function to scroll left by one card width
    const scrollLeft = () => {
        if (carouselRef.current) {
            // Get the width of the first card + spacing (Tailwind's space-x-6 is 1.5rem = 24px)
            const itemWidth = carouselRef.current.children[0]?.offsetWidth || 400; // Default if no children yet
            const scrollDistance = itemWidth + 24; // Add spacing
            carouselRef.current.scrollBy({ left: -scrollDistance, behavior: 'smooth' });
        }
    };

    // Function to scroll right by one card width
    const scrollRight = () => {
        if (carouselRef.current) {
             // Get the width of the first card + spacing (Tailwind's space-x-6 is 1.5rem = 24px)
            const itemWidth = carouselRef.current.children[0]?.offsetWidth || 400; // Default if no children yet
            const scrollDistance = itemWidth + 24; // Add spacing
            carouselRef.current.scrollBy({ left: scrollDistance, behavior: 'smooth' });
        }
    };

    // Function to update arrow visibility based on scroll position
    const updateArrowVisibility = () => {
        if (carouselRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
            const tolerance = 5; // Small tolerance for floating point issues

            setCanScrollLeft(scrollLeft > tolerance);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - tolerance);
        }
    };

    // --- Autoplay Logic ---
    useEffect(() => {
        const carousel = carouselRef.current;
        if (!carousel) return;

        const autoplayInterval = setInterval(() => {
            const { scrollLeft, scrollWidth, clientWidth } = carousel;
            const tolerance = 5; // Small tolerance for floating point issues

             // Get the width of the first card + spacing
            const itemWidth = carousel.children[0]?.offsetWidth || 400; // Default if no children yet
            const scrollDistance = itemWidth + 24; // Add spacing

            // Check if we are at the end (or very close)
            if (scrollLeft + clientWidth >= scrollWidth - tolerance) {
                // If at the end, scroll back to the beginning smoothly
                carousel.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                // Otherwise, scroll right by one item
                carousel.scrollBy({ left: scrollDistance, behavior: 'smooth' });
            }
        }, 5000); // Scroll every 5 seconds

        // Clean up interval on component unmount
        return () => clearInterval(autoplayInterval);

    }, [testimonials]); // Re-run effect if testimonials data changes (unlikely but good practice)


    // --- Arrow Visibility Effect ---
    useEffect(() => {
        const carousel = carouselRef.current;
        if (!carousel) return;

        // Update visibility on mount
        updateArrowVisibility();

        // Add scroll event listener
        carousel.addEventListener('scroll', updateArrowVisibility);

        // Clean up event listener
        return () => {
            carousel.removeEventListener('scroll', updateArrowVisibility);
        };
    }, [testimonials]); // Dependencies: Re-run if testimonials change or carousel ref is set


    return (
        <section className=" py-16 lg:py-16">
            <div className="container mx-auto max-w-7xl relative"> {/* Main section container - Added relative for arrow positioning */}

              
                {/* Section Titles */}
                        <div className="text-center mb-12">
                          <p className="flex items-center justify-center text-md font-semibold text-blue-600 dark:text-cyan-400 uppercase mb-2">
                             <FaQuoteLeft className="h-4 w-4 mr-2" />
                             Testimonials
                             <FaQuoteRight className="h-4 w-4 ml-2" />
                          </p>
                          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-800 dark:text-white leading-tight">
                            What people say about us
                          </h2>
                        </div>

                {/* Testimonials Carousel (Horizontal Scroll) Container */}
                {/* Added relative positioning here as well to contain icons if needed,
                    but absolute on icons with parent relative container works better */}
                <div className="relative"> {/* Added relative positioning */}
                     {/* Left Arrow Button */}
                    {canScrollLeft && (
                        <button
                            onClick={scrollLeft}
                            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white dark:bg-gray-700 rounded-full p-2 shadow-md ml-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition opacity-80 hover:opacity-100"
                            aria-label="Scroll left"
                        >
                           <FaArrowLeft className="h-6 w-6 text-gray-700 dark:text-gray-200" />
                        </button>
                    )}


                    {/* Scrollable Carousel Content */}
                    {/* Added ref and confirmed hide-scrollbar class */}
                    <div
                        ref={carouselRef}
                        className="flex overflow-x-auto space-x-6 pb-4 px-4 sm:px-6 lg:px-8 hide-scrollbar"
                    >
                        {testimonials.map((testimonial) => (
                            <div
                                key={testimonial.id}
                                // flex-shrink-0 ensures items don't shrink, w-full/sm:w-96/lg:w-[400px] sets width
                                className="flex-shrink-0 w-full sm:w-96 lg:w-[400px] bg-gray-50 dark:bg-gray-800/50 p-6 rounded-xl shadow-lg h-full flex flex-col"
                            >
                                 {/* Star ratings */}
                                 <div className="flex text-yellow-400 mb-4">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.792 2.03a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.792-2.03a1 1 0 00-1.176 0l-2.792 2.03c-.785.57-1.84-.197-1.54-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588 1.81h3.462a1 1 0 00.95-.69l1.07-3.292z"></path></svg>
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.792 2.03a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.792-2.03a1 1 0 00-1.176 0l-2.792 2.03c-.785.57-1.84-.197-1.54-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588 1.81h3.462a1 1 0 00.95-.69l1.07-3.292z"></path></svg>
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.792 2.03a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.792-2.03a1 1 0 00-1.176 0l-2.792 2.03c-.785.57-1.84-.197-1.54-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588 1.81h3.462a1 1 0 00.95-.69l1.07-3.292z"></path></svg>
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.792 2.03a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.792-2.03a1 1 0 00-1.176 0l-2.792 2.03c-.785.57-1.84-.197-1.54-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588 1.81h3.462a1 1 0 00.95-.69l1.07-3.292z"></path></svg>
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.792 2.03a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.792-2.03a1 1 0 00-1.176 0l-2.792 2.03c-.785.57-1.84-.197-1.54-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588 1.81h3.462a1 1 0 00.95-.69l1.07-3.292z"></path></svg>
                                </div>

                                {/* Testimonial Text */}
                                <p className="text-gray-700 dark:text-gray-300 italic leading-relaxed mb-6 flex-grow">
                                    {testimonial.testimonial}
                                </p>

                                {/* Divider */}
                                <div className="w-16 h-0.5 bg-gray-300 dark:bg-gray-600 mx-auto mb-6"></div>

                                {/* Photo, Name, Role */}
                                <div className="flex items-center mt-auto">
                                    <img
                                        src={testimonial.photo}
                                        alt={`የ${testimonial.role} ${testimonial.name} ፎቶ`}
                                        className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-white dark:border-gray-800"
                                    />
                                    <div>
                                        <p className="text-lg font-semibold text-gray-900 dark:text-white">
                                            {testimonial.name}
                                        </p>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">
                                            {testimonial.role}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right Arrow Button */}
                     {canScrollRight && (
                        <button
                            onClick={scrollRight}
                            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white dark:bg-gray-700 rounded-full p-2 shadow-md mr-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition opacity-80 hover:opacity-100"
                             aria-label="Scroll right"
                        >
                           <FaArrowRight className="h-6 w-6 text-gray-700 dark:text-gray-200" />
                        </button>
                     )}

                </div> {/* End relative container for carousel and arrows */}


            </div>
        </section>
    );
}

export default Testimonials;