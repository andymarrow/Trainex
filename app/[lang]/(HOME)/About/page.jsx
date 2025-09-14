"use client"

import React from 'react'
import Image from 'next/image';

function AboutPage() {
  return (
     <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-extrabold mb-4 text-center text-blue-400">About Us</h1>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Image Section */}
       

         <div>
          
            <h1 className="text-4xl font-extrabold mb-4 text-blue-800">
            Empowering Learning, Anywhere. Anytime.
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-200 mb-6 leading-relaxed">
            We are a passionate team of educators, developers, and designers
            working to empower learners through technology and modern skills.
            Our mission is to build inclusive, accessible, and impactful
            learning environments across the globe.
          </p>
          <p className="text-md text-gray-600 dark:text-gray-200 mb-4">
            From grassroots to global, our journey has always focused on impact,
            innovation, and integrity. We collaborate with communities,
            universities, and organizations to make education engaging and
            practical.
          </p>
            <p className="text-lg text-gray-600 dark:text-gray-200 mb-4">
            Whether you’re learning a new skill, preparing for a certification, or
            upskilling your team, our platform offers carefully curated courses
            designed by industry experts, delivered in an intuitive and interactive
            environment.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-200">
            Join thousands of learners and experience the future of education —
            personalized, practical, and powerful.
          </p>
         
        </div>
         <div className="overflow-hidden rounded-2xl shadow-lg">
          <Image
            src={"/images/student-hero.png"}
            alt="Our Team"
            className="w-full h-auto object-cover"
            width={600}
            height={400}
          />
        </div>
        </div>

          <div className="mt-16 grid md:grid-cols-2 gap-8">
        <div>
        <h2 className="text-2xl font-bold text-blue-600 mb-2 text-center">Our Mission</h2>
        <p className="text-gray-600 dark:text-gray-200">
          At Yours Tech Academy, our mission is to democratize education by providing
          high-quality, industry-relevant, and practical learning experiences to students,
          professionals, and lifelong learners across the globe. We are committed to
          bridging the gap between traditional education and the modern skills demanded
          by today's digital economy. Through accessible online learning, interactive
          content, and expert-led courses, we empower individuals to transform their
          potential into achievement — regardless of their background or location.
        </p>
      </div>

       <div className="overflow-hidden rounded-2xl shadow-lg">
          <Image
            src={"/images/student-hero.png"}
            alt="Our Team"
            className="w-full h-auto object-cover"
            width={600}
            height={400}
          />
        </div>
        </div>
           <div>
  <h2 className="text-2xl font-bold text-blue-600 my-4 text-center">Our Vision</h2>
  <p className="text-gray-600 dark:text-gray-200">
    Our vision is to become a global leader in digital learning, nurturing a culture
    of continuous growth and innovation. We envision a world where education knows no
    boundaries — where anyone, anywhere, can gain the skills, confidence, and mindset
    needed to thrive in a fast-changing world. By harnessing the power of technology,
    community, and creativity, we aim to inspire millions to unlock opportunities,
    contribute meaningfully to society, and shape the future of work, entrepreneurship,
    and personal development.
  </p>
</div>
        <div>
          <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 my-2">Our Values</h2>
          <ul className="list-disc pl-5 text-gray-600 dark:text-gray-200">
            <li>Accessibility</li>
            <li>Innovation</li>
            <li>Integrity</li>
            <li>Excellence</li>
            <li>Community</li>
          </ul>
        </div>
    </div>
  )
}

export default AboutPage