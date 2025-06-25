"use client";

import React, { useState } from 'react';
import { FaEnvelope, FaRegCalendarAlt, FaUser, FaTag, FaGlobeEurope, FaArrowRight } from 'react-icons/fa'; // Icons for contact form
import { motion } from 'framer-motion';
import { countries } from '@/lib/constants'; // Import the country list

function Contactus() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: '',
    subject: '',
    country: '',
    message: '', // Added message to state
  });

  // Simple state update handler for form inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Placeholder submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    // In a real app, you would send this data to your backend
    alert('Thank you for your message!'); // Basic feedback
    // Reset form (optional)
    setFormData({
      name: '',
      email: '',
      topic: '',
      subject: '',
      country: '',
      message: '',
    });
  };


  // Framer Motion variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const formContentVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } }, // Delay slightly after image
  };

   const formFieldVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  // Using a simple stagger for the fields within the form content
  const formFieldsContainerVariants = {
      hidden: { opacity: 0 }, // Initial state of the container
      visible: {
        opacity: 1, // Final state of the container
        transition: {
          staggerChildren: 0.1, // Stagger each child (form field div) by 0.1 seconds
          delayChildren: 0.3, // Delay the start of the children's animation
        },
      },
    };


  return (
    // Section container with background and overflow hidden (in case of decorative elements)
    <motion.section
        className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-transparent relative overflow-hidden" // Use your site's general background
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }} // Trigger animation when 10% is visible
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 items-center  rounded-lg overflow-hidden"> {/* Main content container */}

        {/* Left Column: Image */}
        <motion.div
           className="relative h-72 md:h-[550px] overflow-hidden" // Fixed height on mobile, responsive height on desktop
           variants={imageVariants}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, amount: 0.3 }}
        >
          {/* Decorative Shape/Gradient (Optional) - Adjusted colors for dark/light */}
           <div className="absolute inset-0 bg-gradient-to-tr from-blue-200/50 dark:from-cyan-700/50 via-transparent to-transparent z-10 pointer-events-none"></div>

          <img
            src="/images/contactus.jpg" // Replace with your actual contact image path
            alt="Person using a laptop with headphones"
            // Removed rounded-l-3xl here, applied it to the main container
            className="absolute inset-0 w-full h-full object-cover rounded-l-lg md:rounded-l-3xl"
          />

          {/* Optional: Overlay to darken image slightly, adjusted opacity */}
           <div className="absolute inset-0 bg-black opacity-10 dark:opacity-40 rounded-l-lg md:rounded-l-3xl"></div> {/* Lower opacity in light mode */}
        </motion.div>

        {/* Right Column: Text Content and Form - Adjusted Background and Text Colors */}
        <motion.div
           className="p-8 md:p-12 bg-gray-100 dark:bg-gray-950 text-gray-800 dark:text-white relative rounded-r-lg md:rounded-r-3xl" // Light bg in light mode, dark bg in dark mode. Text colors changed.
           variants={formContentVariants}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, amount: 0.3 }}
        >
            


            <div className="relative z-10"> {/* Ensure content is above background pattern */}
                {/* Small Title / Subheading - Adjusted Color */}
                <p className="flex items-center text-sm font-semibold text-blue-600 dark:text-cyan-400 uppercase mb-2"> {/* Changed blue-400 to blue-600 for light mode */}
                <FaEnvelope className="mr-2 text-base" /> Get In Touch
                </p>

                {/* Main Headline - Adjusted Color */}
                <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-800 dark:text-white leading-tight mb-6"> {/* Changed text-white to text-gray-800 */}
                    Have Questions? Contact Us!
                </h2>

                {/* Descriptive Paragraph - Adjusted Color */}
                <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg"> {/* Changed text-gray-400 to text-gray-600 */}
                    We're here to help! Fill out the form below with your inquiry, and our team will get back to you as soon as possible. Whether it's about courses, instructors, or general feedback, we'd love to hear from you.
                </p>

                {/* Contact Form */}
                <motion.form
                    onSubmit={handleSubmit}
                    className="space-y-6"
                    variants={formFieldsContainerVariants} // Apply the container variants here
                    initial="hidden"
                    whileInView="visible" // Animate the fields when the form container is in view
                    viewport={{ once: true, amount: 0.1 }}
                >
                   {/* Name and Email Row */}
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                       <motion.div variants={formFieldVariants}>
                           <label htmlFor="name" className="sr-only">Name</label>
                           <div className="relative">
                                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500 dark:text-gray-400"> {/* Adjusted icon color */}
                                    <FaUser className="h-4 w-4" />
                                </span>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Name*"
                                    value={formData.name}
                                    onChange={handleChange}
                                    // Adjusted background, text, border, and placeholder colors
                                    className="block w-full text-sm bg-white dark:bg-gray-800 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 border border-gray-300 dark:border-gray-700 rounded-md py-3 pl-10 pr-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-cyan-400 dark:focus:border-cyan-400"
                                    required
                                />
                           </div>
                       </motion.div>
                        <motion.div variants={formFieldVariants}>
                           <label htmlFor="email" className="sr-only">Email Address</label>
                            <div className="relative">
                                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500 dark:text-gray-400"> {/* Adjusted icon color */}
                                    <FaEnvelope className="h-4 w-4" />
                                </span>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Email Address*"
                                    value={formData.email}
                                    onChange={handleChange}
                                     // Adjusted background, text, border, and placeholder colors
                                    className="block w-full text-sm bg-white dark:bg-gray-800 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 border border-gray-300 dark:border-gray-700 rounded-md py-3 pl-10 pr-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-cyan-400 dark:focus:border-cyan-400"
                                    required
                                />
                           </div>
                       </motion.div>
                   </div>

                    {/* Topic and Subject Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <motion.div variants={formFieldVariants}>
                           <label htmlFor="topic" className="sr-only">Topic</label>
                            <div className="relative">
                                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500 dark:text-gray-400"> {/* Adjusted icon color */}
                                    <FaTag className="h-4 w-4" />
                                </span>
                                <input
                                    type="text"
                                    id="topic"
                                    name="topic"
                                    placeholder="Topic (e.g., Course Inquiry, Support)*"
                                    value={formData.topic}
                                    onChange={handleChange}
                                     // Adjusted background, text, border, and placeholder colors
                                    className="block w-full text-sm bg-white dark:bg-gray-800 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 border border-gray-300 dark:border-gray-700 rounded-md py-3 pl-10 pr-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-cyan-400 dark:focus:border-cyan-400"
                                    required
                                />
                            </div>
                        </motion.div>
                        <motion.div variants={formFieldVariants}>
                           <label htmlFor="subject" className="sr-only">Subject</label>
                            <div className="relative">
                                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500 dark:text-gray-400"> {/* Adjusted icon color */}
                                    {/* Using calendar icon as in image, maybe use FaPencilAlt? */}
                                    <FaRegCalendarAlt className="h-4 w-4" />
                                </span>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    placeholder="Subject*"
                                    value={formData.subject}
                                    onChange={handleChange}
                                     // Adjusted background, text, border, and placeholder colors
                                    className="block w-full text-sm bg-white dark:bg-gray-800 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 border border-gray-300 dark:border-gray-700 rounded-md py-3 pl-10 pr-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-cyan-400 dark:focus:border-cyan-400"
                                    required
                                />
                            </div>
                       </motion.div>
                    </div>

                   {/* Country Selector (Full Width) */}
                    <motion.div variants={formFieldVariants}>
                       <label htmlFor="country" className="sr-only">Country</label>
                        <div className="relative">
                           <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500 dark:text-gray-400 pointer-events-none"> {/* Adjusted icon color */}
                                <FaGlobeEurope className="h-4 w-4" />
                            </span>
                            {/* Styled Select Input - Adjusted background, text, border colors */}
                           <select
                                id="country"
                                name="country"
                                value={formData.country}
                                onChange={handleChange}
                                className="block w-full text-sm bg-white dark:bg-gray-800 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 border border-gray-300 dark:border-gray-700 rounded-md py-3 pl-10 pr-10 focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-cyan-400 dark:focus:border-cyan-400 appearance-none cursor-pointer" // appearance-none hides default arrow, pr-10 makes space for custom arrow if needed
                                required
                           >
                               {countries.map(country => (
                                   <option key={country.value} value={country.value}>
                                       {country.label}
                                   </option>
                               ))}
                           </select>
                            {/* Optional: Custom Select Arrow (if appearance-none is used) */}
                           {/* <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                            </div> */}
                        </div>
                   </motion.div>

                    {/* Message (Textarea) */}
                    <motion.div variants={formFieldVariants}>
                       <label htmlFor="message" className="sr-only">Your Message</label>
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Your Message*"
                            value={formData.message} // Bind message state
                            onChange={handleChange} // Use handleChange for message
                            rows="6" // Adjust rows as needed
                             // Adjusted background, text, border, and placeholder colors
                            className="block w-full bg-white dark:bg-gray-800 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 border border-gray-300 dark:border-gray-700 rounded-md py-3 px-4 focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-cyan-400 dark:focus:border-cyan-400"
                            required
                        ></textarea>
                   </motion.div>


                   {/* Submit Button */}
                   <motion.div variants={formFieldVariants}>
                        <button
                            type="submit"
                            className="inline-flex items-center justify-center w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold rounded-md transition-all duration-300 shadow-lg hover:shadow-xl text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 dark:focus:ring-cyan-400"
                            whileHover={{ scale: 1.02 }} // Slightly smaller scale on hover for a button feel
                            whileTap={{ scale: 0.99 }}
                        >
                            Send Message <FaArrowRight className="ml-2 text-sm" />
                        </button>
                    </motion.div>
                </motion.form>
            </div>
        </motion.div>

      </div>
       {/* Decorative element behind the section (Optional) - Adjust positioning and colors */}
       {/* <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-300 dark:bg-cyan-700 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
       <div className="absolute top-0 right-0 w-72 h-72 bg-purple-300 dark:bg-violet-700 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div> */}

    </motion.section>
  );
}

export default Contactus;