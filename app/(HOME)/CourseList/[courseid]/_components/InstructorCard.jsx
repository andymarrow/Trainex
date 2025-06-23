import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaStar, FaBookOpen, FaTwitter, FaLinkedinIn, FaGithub, FaLink } from 'react-icons/fa'; 

// Mapping icon names to components
const socialIconMap = {
    FaTwitter: FaTwitter,
    FaLinkedinIn: FaLinkedinIn,
    FaGithub: FaGithub,
    FaLink: FaLink,
};


function InstructorCard({ instructor }) {
  if (!instructor) return null;

  const {
    name,
    role,
    image,
    socialLinks,
    rating,
    totalCourses,
    description,
  } = instructor;

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
    <div className="flex flex-col sm:flex-row items-center sm:items-start bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
      {/* Instructor Image */}
      <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden flex-shrink-0 mb-4 sm:mb-0 sm:mr-6">
        <Image
          src={image || '/images/placeholder-instructor.jpg'}
          alt={name}
          width={128} 
          height={128}
          objectFit="cover"
        />
      </div>

      {/* Instructor Details */}
      <div className="flex-1 text-center sm:text-left">
        <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{name}</h4>
        <p className="text-blue-600 dark:text-cyan-400 mb-3">{role}</p>

        {/* Rating and Course Count */}
        <div className="flex items-center justify-center sm:justify-start text-sm text-gray-700 dark:text-gray-300 mb-3">
            <div className="flex items-center mr-3">
                {renderStars(rating || 0)} 
            </div>
             <span className="font-bold text-yellow-600 dark:text-yellow-400 mr-1">{rating ? rating.toFixed(1) : 'N/A'}</span>
             <span className="mr-3">Rating</span>
            <FaBookOpen className="mr-2 text-gray-500 dark:text-gray-400" />
             <span className="font-semibold">{totalCourses || 0}</span> Courses
        </div>

        {/* Description */}
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          {description}
        </p>

        {/* Social Links */}
         {socialLinks && socialLinks.length > 0 && (
             <div className="flex items-center justify-center sm:justify-start space-x-3">
                 {socialLinks.map((link, index) => {
                     const IconComponent = socialIconMap[link.icon];
                     if (!IconComponent) return null; 
                     return (
                         <Link key={index} href={link.url} target="_blank" rel="noopener noreferrer"
                               className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-cyan-400 transition-colors"
                               aria-label={`Link to ${name}'s ${link.platform}`}>
                             <IconComponent className="h-5 w-5" />
                         </Link>
                     );
                 })}
             </div>
         )}
      </div>
    </div>
  );
}

export default InstructorCard;