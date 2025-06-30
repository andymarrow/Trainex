// app/(HOME)/Blog/[id]/_components/BlogContent.jsx
"use client"; // This component needs client-side interactivity for animations

import React, { useEffect, useRef, useState, useLayoutEffect } from 'react'; // Import useLayoutEffect
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { FaUser, FaClock, FaTag } from 'react-icons/fa';

// Import GSAP and its plugins
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'; // Use dist path for module build

// Register ScrollTrigger plugin (only needs to be done once globally)
// It's safer to register outside components or in a root layout/file
// if you use GSAP in multiple places. But for this component, here is fine.
gsap.registerPlugin(ScrollTrigger);

function BlogContent({ blog }) {
  if (!blog) return null;

  const author = blog.author || 'Guest Author';
  const category = blog.category || 'Uncategorized';

  // Refs for GSAP animations
  const titleRef = useRef(null);
  const contentRef = useRef(null); // Ref for the content wrapper div

  // State for the typing animation (only display part of the title)
  const [displayedTitle, setDisplayedTitle] = useState('');

  // --- Typing Animation for Title ---
  // Keep useEffect here as it's primarily updating state, not directly manipulating layout
  useEffect(() => {
    if (!blog || !blog.title || !titleRef.current) return;

    // Reset state for potential re-renders
    setDisplayedTitle('');

    // GSAP Tween to animate a number from 0 to the title length
    const titleTween = gsap.to({ charIndex: 0 }, {
      charIndex: blog.title.length,
      duration: 1.5,
      ease: 'none',
      onUpdate: function() {
        const index = Math.floor(this.targets()[0].charIndex);
        setDisplayedTitle(blog.title.substring(0, index));
      },
      onComplete: () => {
          setDisplayedTitle(blog.title); // Ensure full title is set
          // *** POTENTIALLY trigger ScrollTrigger refresh here ***
          // ScrollTrigger.refresh(); // Might need a small delay or another context
      }
    });

    // Cleanup function for the effect
    return () => {
      titleTween.kill(); // Kill the tween on unmount or dependency change
      // Ensure full title is visible if animation is interrupted
      if (blog?.title) {
         setDisplayedTitle(blog.title);
      }
    };

  }, [blog?.title]); // Rerun effect if blog title changes


  // --- Scroll Reveal Animation for Content ---
  // Use useLayoutEffect for DOM-dependent setup like ScrollTrigger
  useLayoutEffect(() => {
      const contentElement = contentRef.current;

      // Ensure the element exists and we have content
      if (!contentElement || !blog?.fullContent) {
          // If no element or content, kill any existing triggers for this element
          ScrollTrigger.getTweensOf(contentElement).forEach(tween => tween.kill());
          ScrollTrigger.getAll().forEach(st => { // Or more targeted cleanup if possible
               if (st.trigger === contentElement) st.kill();
          });
          return; // Exit the effect if requirements aren't met
      }

      console.log("Setting up ScrollTrigger for blog content using useLayoutEffect");

      // Ensure initial state is applied immediately by GSAP's .from()
      // and the animation is created *before* ScrollTrigger refresh runs.
      const scrollTween = gsap.from(contentElement, {
          opacity: 0,
          filter: 'blur(10px)',
          duration: 1, // This duration is for the animation *tween*, not how long it takes to scroll
          ease: 'power1.out',
          // Set immediateRender: false to prevent it from jumping visually on initial load
          // It still *internally* calculates the 'from' state.
          // immediateRender: false, // Might help, but scrub: true usually handles initial state

          scrollTrigger: {
              trigger: contentElement,
              start: 'top 80%',
              end: 'top 30%',
              scrub: true,
              markers: false, // KEEP THIS TRUE FOR DEBUGGING! You will see start/end lines.
              // id: "blogContentReveal" // Optional: give it an ID for targeted killing
          }
      });

      // --- IMPORTANT ---
      // After creating the tween and its ScrollTrigger, refresh ScrollTrigger.
      // This makes ScrollTrigger calculate positions *after* React and potential
      // markdown rendering have affected the layout.
       ScrollTrigger.refresh();
       console.log("ScrollTrigger.refresh() called after setup.");


      // Cleanup function for useLayoutEffect
      return () => {
          console.log("Cleaning up ScrollTrigger for blog content");
          if (scrollTween) {
             scrollTween.kill(); // Kills the tween and its associated ScrollTrigger
          }
          // If you assigned an ID:
          // const st = ScrollTrigger.getById("blogContentReveal");
          // if (st) st.kill();
          // Ensure inline styles set by GSAP are removed if necessary (often not needed after kill)
           gsap.set(contentElement, { clearProps: "opacity,filter" });
      };

  }, [blog?.fullContent]); // Rerun effect if blog full content changes

  // Optional: Another useLayoutEffect just for initial ScrollTrigger refresh
  // This can catch layout issues that happen right after the first render.
   useLayoutEffect(() => {
       // Use a small timeout to allow the browser a moment to finalize layout
       // after the initial render and hydration.
       const timer = setTimeout(() => {
            console.log("Initial ScrollTrigger.refresh() after timeout");
            ScrollTrigger.refresh();
       }, 50); // 50ms is usually enough, can adjust if needed

       return () => clearTimeout(timer);
   }, []); // Empty dependency array means this runs only once on mount

  return (
    <article className="prose dark:prose-invert max-w-none lg:prose-lg xl:prose-xl mx-auto">
      {/* Blog Header */}
      <header className="mb-8">
        {/* Use the state variable for the displayed title and attach ref */}
        {/* min-height helps reserve vertical space for the title while it types */}
        <h1 ref={titleRef} className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight mb-4 min-h-[1.2em]">
           {/* Use displayedTitle state */}
           {displayedTitle}
        </h1>
        <div className="flex flex-wrap items-center text-gray-600 dark:text-gray-400 text-sm sm:text-base mb-6">
          <span className="flex items-center mr-4 text-blue-600 dark:text-cyan-400 font-semibold"><FaTag className="mr-1" /> {category}</span>
          <span className="flex items-center mr-4"><FaUser className="mr-1" /> {author}</span>
          <span className="flex items-center mr-4"><FaClock className="mr-1" /> {blog.date}</span>
          <span className="flex items-center"><FaClock className="mr-1" /> {blog.readTime}</span>
        </div>
         {/* Blog Image */}
        {blog.imageUrl && (
            <div className="rounded-lg overflow-hidden shadow-md mb-8">
                 {/* Consider using next/image here for optimization */}
                 <img
                   src={blog.imageUrl}
                   alt={blog.title}
                   className="w-full h-64 sm:h-80 object-cover"
                 />
             </div>
        )}
      </header>

      {/* Blog Content (Markdown) - Attach ref to a wrapper div */}
      {/* Initial opacity and blur will be set by GSAP's .from() when ScrollTrigger becomes active */}
      <div ref={contentRef} className="blog-content"> {/* Attach ref here */}
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {blog.fullContent}
        </ReactMarkdown>
      </div>
    </article>
  );
}

export default BlogContent;