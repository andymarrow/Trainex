"use client"; 

import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { FaNewspaper } from 'react-icons/fa';

// Import your components
import BlogFeatured from './_components/BlogFeatured';
import BlogLatestList from './_components/BlogLatestList';
import BlogPopularList from './_components/BlogPopularList';
import BlogSearch from './_components/BlogSearch';
import BlogFilters from './_components/BlogFilters';
import Pagination from './_components/Pagination';

// Import your blog data
import { latestBlogs } from '@/lib/constants'; 

// Define how many featured and popular posts to show
const NUMBER_OF_FEATURED = 4; // 1 large + 3 small
const NUMBER_OF_POPULAR = 5;

function BlogPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  // Define how many posts per page for the 'Latest Posts' section
  const postsPerPage = 6; 

  // Featured Posts: Take the first N posts from the original list
  const featuredBlogs = useMemo(() => {
      return latestBlogs.slice(0, NUMBER_OF_FEATURED);
  }, [latestBlogs]);

  // Popular Posts: Sort original list by likes and take top N
  const popularBlogs = useMemo(() => {
    // Create a copy before sorting to avoid mutating the original array
    const sortedByLikes = [...latestBlogs].sort((a, b) => (b.likes || 0) - (a.likes || 0)); // Handle missing likes
    return sortedByLikes.slice(0, NUMBER_OF_POPULAR);
  }, [latestBlogs]);


  // --- Filtering and Searching Logic (Applied ONLY to the list shown in "Latest Posts") ---
  const filteredAndSearchedLatestBlogs = useMemo(() => {
    let filtered = latestBlogs; // Start with the full list for filtering/search

    // 1. Filter by Category
    if (selectedCategory) {
      filtered = filtered.filter(blog => blog.category === selectedCategory);
    }

    // 2. Search by Term (case-insensitive)
    if (searchTerm) {
      const lowerCaseSearchTerm = searchTerm.toLowerCase();
      filtered = filtered.filter(blog =>
        blog.title.toLowerCase().includes(lowerCaseSearchTerm) ||
        blog.excerpt.toLowerCase().includes(lowerCaseSearchTerm) ||
        (blog.tags && blog.tags.some(tag => tag.toLowerCase().includes(lowerCaseSearchTerm))) // Search tags
      );
    }

    return filtered;
  }, [latestBlogs, searchTerm, selectedCategory]);


    // Handle Search/Filter Change & Reset Page
    const handleSearchChange = (term) => {
        setSearchTerm(term);
        setCurrentPage(1); // Reset to first page on search
    };

    const handleFilterChange = (category) => {
        setSelectedCategory(category);
        setCurrentPage(1); // Reset to first page on filter change
    };


  // --- Pagination Logic (Applied to filtered/searched Latest Blogs) ---
  const totalLatestPosts = filteredAndSearchedLatestBlogs.length;
  const totalPages = Math.ceil(totalLatestPosts / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentLatestPosts = filteredAndSearchedLatestBlogs.slice(indexOfFirstPost, indexOfLastPost);

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
 
    }
  };

  // --- Extract unique categories for filter dropdown ---
  const uniqueCategories = useMemo(() => {
    const categories = latestBlogs.map(blog => blog.category).filter(Boolean); // Get all categories, remove null/undefined
    return Array.from(new Set(categories)); // Get unique categories
  }, [latestBlogs]);


  return (
    <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 text-gray-800 dark:text-white min-h-screen">
      <div className="max-w-7xl mx-auto">

        {/* Section Title */}
        <motion.div
            className="text-center mb-8 sm:mb-12"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="flex items-center justify-center text-sm font-semibold text-blue-600 dark:text-cyan-400 uppercase mb-2">
            <FaNewspaper className="h-5 w-5 mr-2" /> Our Insights
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-800 dark:text-white leading-tight">
            All Blog Posts
          </h1>
        </motion.div>

        {/* Search and Filter Section */}
        <motion.div
            className="mb-8 sm:mb-12 flex flex-col sm:flex-row gap-4 sm:gap-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
            <BlogSearch searchTerm={searchTerm} onSearchChange={handleSearchChange} />
            <BlogFilters
                selectedCategory={selectedCategory}
                onFilterChange={handleFilterChange}
                categories={uniqueCategories}
            />
        </motion.div>

        {/* Main Content Layout: Two columns on large screens */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Left Column: Featured and Latest Posts */}
            <div className="lg:col-span-2">
                {/* Featured Posts Section */}
                 {featuredBlogs.length > 0 && <BlogFeatured featuredBlogs={featuredBlogs} />}

                {/* Latest Posts Section */}
                 <BlogLatestList blogs={currentLatestPosts} />

                 {/* Pagination (positioned below Latest Posts) */}
                {totalLatestPosts > postsPerPage && (
                    <Pagination
                       currentPage={currentPage}
                       totalPages={totalPages}
                       onPageChange={handlePageChange}
                    />
                )}

            </div>

            {/* Right Column: Popular Posts */}
            <aside className="lg:col-span-1">
                 <BlogPopularList popularBlogs={popularBlogs} />
            </aside>

        </div>


      </div>
    </section>
  );
}

export default BlogPage;