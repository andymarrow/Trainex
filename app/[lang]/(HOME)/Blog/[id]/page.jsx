// app/(HOME)/Blog/[id]/page.jsx // Assuming your path is /(HOME)/Blog/[id]

import React from 'react';
import { notFound } from 'next/navigation';

// Import your blog data
import { latestBlogs } from '@/lib/constants'; // Adjust path if needed

// Import detail page components
import BlogContent from './_components/BlogContent';
import BlogActions from './_components/BlogActions';
import BlogComments from './_components/BlogComments';
import RelatedBlogs from './_components/RelatedBlogs';

// --- Static Generation ---
export async function generateStaticParams() {
    // console.log('generateStaticParams: Generating static params...'); // Optional: remove logs once working
    const params = latestBlogs.map((blog) => ({
        id: String(blog.id),
    }));
    // console.log('generateStaticParams: Generated params:', params); // Optional: remove logs once working
    return params;
}

// Add Metadata for SEO (can be dynamic)
export async function generateMetadata({ params }) {
    // Await params before accessing properties
    const { id } = await params; // <-- Await params here

    // Find the blog post - convert the string ID from params to a number
    const blog = latestBlogs.find(blog => blog.id === parseInt(id, 10));

    if (!blog) {
        return { title: 'Blog Post Not Found' };
    }

    return {
        title: blog.title,
        description: blog.excerpt,
        openGraph: {
            title: blog.title, // Often good to include title in OG
            description: blog.excerpt, // Often good to include description in OG
            images: [
                {
                    url: blog.imageUrl, // Must be a full absolute URL for external use
                    // Add width/height if known for better performance
                    // width: 800,
                    // height: 600,
                    alt: blog.title,
                }
            ],
            type: 'article', // Appropriate type for blog posts
            // url: `https://your-domain.com/Blog/${blog.id}`, // Full URL to the page
            // publishedTime: blog.publishedDate, // If you have a published date
            // authors: [blog.author], // If you have author data
        },
        // Add Twitter Card metadata for sharing on Twitter
        twitter: {
             card: 'summary_large_image',
             title: blog.title,
             description: blog.excerpt,
             creator: '@yourtwitterhandle', // Optional: your Twitter handle
             images: [blog.imageUrl], // Use the same image(s)
        },
    };
}

// --- Page Component (Server Component) ---
async function BlogDetailPage({ params }) {
    // Await params before accessing properties
    const { id } = await params; // <-- Await params here

    // Find the blog post - convert the string id from params into a number
    const blog = latestBlogs.find(b => b.id === parseInt(id, 10));

    // If blog not found, render 404 page
    if (!blog) {
        // console.error(`Server Component: Blog with id "${id}" not found...`); // Optional: remove logs once working
        notFound(); // This function is for Server Components
    }

    // console.log('Server Component: Blog found successfully for id:', id); // Optional: remove logs once working


    // Find related blogs (same category, exclude current blog)
    const relatedBlogs = latestBlogs
        .filter(b => b.category === blog.category && b.id !== blog.id)
        .slice(0, 4);

    return (
        <div className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 text-gray-800 dark:text-white min-h-screen">
            <div className="max-w-4xl mx-auto">

                {/* Main Blog Content */}
                <div>
                     <BlogContent blog={blog} />
                </div>

                {/* Actions (Likes, Share) */}
                 <div>
                    {/* Pass the blog.id which is the number */}
                    <BlogActions initialLikes={blog.likes} blogTitle={blog.title} blogid={blog.id} />
                 </div>

                {/* Comments Section - Now collapsible */}
                 <div>
                   {/* Pass initial comments and the blog ID */}
                    <BlogComments initialComments={blog.comments} initialBlogId={blog.id} />
                 </div>

                {/* Related Posts Section - Now with images */}
                 <div>
                   <RelatedBlogs blogs={relatedBlogs} />
                 </div>

            </div>
        </div>
    );
}

export default BlogDetailPage;