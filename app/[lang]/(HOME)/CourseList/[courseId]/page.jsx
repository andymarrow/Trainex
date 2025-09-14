// app/courselist/[courseId]/page.js
"use client";

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation'; 
import Image from 'next/image';
import { FaStar, FaUsers, FaHourglassHalf, FaMoneyBillWave } from 'react-icons/fa'; 

import { sampleCourses, sampleInstructors } from '@/lib/constants'; 


import CourseTabs from './_components/CourseTabs';
import CourseSummaryCard from './_components/CourseSummaryCard';
import InstructorCard from './_components/InstructorCard'; 
import SectionAccordion from './_components/SectionAccordion'; 
import RoadmapVisualizer from './_components/RoadmapVisualizer';


import RelatedCoursesSection from './_components/RelatedCoursesSection'; 

import CourseDescriptionTab from './_components/CourseDescriptionTab';
import CourseInstructorTab from './_components/CourseInstructorTab';
import CourseContentTab from './_components/CourseContentTab';


function CourseDetailPage() {
  const params = useParams();
  const { courseId } = params;

  const [course, setCourse] = useState(null);
  const [instructor, setInstructor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    console.log(`Attempting to fetch course details for courseId: ${courseId}`);

    const foundCourse = sampleCourses.find(c => c.id === courseId);

    if (!foundCourse) {
        console.error(`Course with ID ${courseId} not found.`);
        setError('Course not found.');
        setLoading(false);
        return;
    }

    // Find the instructor by name (consider using instructorId for robustness)
    const foundInstructor = sampleInstructors.find(
      inst => inst.name === foundCourse.instructor
    );

    if (!foundInstructor) {
        console.warn(`Instructor "${foundCourse.instructor}" not found for course ID ${courseId}.`);
    }

    setCourse(foundCourse);
    setInstructor(foundInstructor || null);
    setLoading(false);

  }, [courseId]);


  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-transparent">
        <p className="text-gray-600 dark:text-gray-400">Loading course details...</p>
      </div>
    );
  }

  if (error || !course) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-transparent">
        <p className="text-red-600 dark:text-red-400">{error || 'Course data not available.'}</p>
      </div>
    );
  }

    // Render rating stars (can be a reusable utility or component)
    const renderStars = (rating) => {
        const filledStars = Math.round(rating);
        const stars = [];
        for (let i = 0; i < 5; i++) {
          if (i < filledStars) {
            stars.push(<FaStar key={i} className="text-yellow-500 dark:text-yellow-400 w-4 h-4" />);
          } else {
            stars.push(<FaStar key={i} className="text-gray-300 dark:text-gray-600 w-4 h-4" />);
          }
        }
        return stars;
    };


  return (
    <div className="bg-gray-50 dark:bg-transparent py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Layout Container: Main Content (Left) + Summary Card (Right) */}
        <div className="flex flex-col lg:flex-row gap-8">

          {/* Main Content Area (Left Column) */}
          <div className="flex-1 lg:w-2/3">
            {/* Course Banner */}
            <div className="relative w-full h-64 sm:h-80 lg:h-96 rounded-lg overflow-hidden mb-6 shadow-md">
              <Image
                src={course.thumbnail}
                alt={course.title}
                layout="fill"
                objectFit="cover"
              />
            </div>

            {/* Course Title and Rating */}
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2">
              {course.title}
            </h1>

             {/* Rating and Reviews */}
            <div className="flex items-center text-lg text-gray-700 dark:text-gray-300 mb-6">
              <div className="flex items-center mr-2">
                 {renderStars(course.rating)}
              </div>
              <span className="font-bold text-yellow-600 dark:text-yellow-400 mr-1">{course.rating.toFixed(1)}</span>
              <span className="text-sm text-gray-500 dark:text-gray-400">({course.reviews.toLocaleString()} reviews)</span>
            </div>

            {/* Course Tabs Component */}
            <CourseTabs course={course} instructor={instructor} />

          </div>


          {/* Sticky Summary Card Area (Right Column) */}
          <div className="lg:w-1/3 lg:flex-shrink-0">
            <CourseSummaryCard course={course} />
          </div>

        </div> 

      
        {/* related course based on the category of the current rendered course */}
        <RelatedCoursesSection currentCourse={course} limit={4} />


      </div>
    </div>
  );
}

export default CourseDetailPage;