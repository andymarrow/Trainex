// lib/uiconstant.jsx or constants/uiconstant.jsx
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube, FaSpotify } from 'react-icons/fa';
import { FiPhone, FiMail, FiClock } from 'react-icons/fi';
import { AiOutlineMessage, AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai';
import { MdCheckCircle, MdOutlineErrorOutline } from 'react-icons/md'; // Using MdOutlineErrorOutline for red marker
import { BsBookHalf, BsCameraVideo } from 'react-icons/bs'; // Example icons for stats

// --- Colors ---
// Define Tailwind class names for consistency and dark mode
// You should ideally define these in your tailwind.config.js
export const COLORS = {
  ACCENT_GRADIENT: 'bg-gradient-to-r from-cyan-500 to-blue-500',
  ACCENT_GRADIENT_TEXT: 'bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500',
  BUTTON_DARK_BG: 'bg-gray-800 dark:bg-gray-700',
  BUTTON_DARK_TEXT: 'text-white',
  TEXT_PRIMARY_LIGHT: 'text-gray-900',
  TEXT_PRIMARY_DARK: 'dark:text-gray-100',
  TEXT_SECONDARY_LIGHT: 'text-gray-700',
  TEXT_SECONDARY_DARK: 'dark:text-gray-300',
  BACKGROUND_LIGHT: 'bg-white',
  BACKGROUND_DARK: 'dark:bg-gray-900',
  TOP_BAR_BG_LIGHT: 'bg-gray-900',
  TOP_BAR_BG_DARK: 'dark:bg-gray-950',
  TOP_BAR_TEXT: 'text-gray-300',
  MARKER_RED: 'text-red-500',
  CHECK_BLUE: 'text-blue-500',
};

// --- Text & Content ---

// Header Top Bar
export const TOP_BAR_CONTACT = [
  { icon: <FiPhone />, text: '+111 (564) 568 25', link: 'tel:+11156456825' },
  { icon: <FiMail />, text: 'info@trainex.com', link: 'mailto:info@trainex.com' },
  { icon: <FiClock />, text: 'Mon - Sat: 8:00 - 15:00' },
];

export const TOP_BAR_SOCIAL = {
  label: 'Follow Us:',
  links: [
    { icon: <FaFacebookF />, link: '#', label: 'Facebook' },
    { icon: <FaTwitter />, link: '#', label: 'Twitter' },
    { icon: <FaLinkedinIn />, link: '#', label: 'LinkedIn' },
    { icon: <FaYoutube />, link: '#', label: 'YouTube' },
    { icon: <FaSpotify />, link: '#', label: 'Spotify' },
  ],
};

export const TOP_BAR_LOGIN_REGISTER = {
  text: 'Login / Register',
  link: '#' // Replace with actual login/register route
};

// Header Main Nav
export const BRAND_NAME = 'Train ex';
// You could use an image component here instead of just text
// export const BRAND_LOGO = <img src="/path/to/logo.png" alt="Train ex Logo" />;

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  {
    label: 'Courses',
    href: '/courses',
    dropdown: [
      { label: 'All Courses', href: '/courses' },
      { label: 'Course Categories', href: '/courses/categories' },
      { label: 'Single Course', href: '/courses/single' },
    ],
  },
  {
    label: 'Blog',
    href: '/blog',
    dropdown: [
      { label: 'All Posts', href: '/blog' },
      { label: 'Single Post', href: '/blog/single' },
    ],
  },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export const HEADER_ICONS = [
  { icon: <AiOutlineMessage size={20} />, label: 'Messages', count: 3, href: '#' },
  { icon: <AiOutlineHeart size={20} />, label: 'Wishlist', count: 5, href: '#' },
  { icon: <AiOutlineShoppingCart size={20} />, label: 'Cart', count: 0, href: '#' }, // Example count
];

export const HEADER_CONTACT_BUTTON = {
  text: 'CONTACT US',
  href: '/contact',
};


// Hero Section
export const HERO_CONTENT = {
  subtitle: 'ONLINE E-LEARNING COURSE',
  subtitleIcon: <MdOutlineErrorOutline size={16} />, // Red marker icon
  title: 'Online Education Feels Like Real Classroom',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', // Placeholder description
  checklist: [
    { icon: <MdCheckCircle size={20} />, text: 'Get Certified' },
    { icon: <MdCheckCircle size={20} />, text: 'Gain Job-ready Skills' },
    { icon: <MdCheckCircle size={20} />, text: 'Great Life' },
  ],
  ctaButtons: [
    { text: 'GET STARTED', href: '#', isPrimary: true },
    { text: 'OUR COURSES', href: '/courses', isPrimary: false },
  ],
  stats: [
    { icon: <BsBookHalf size={32} />, number: '16500+', label: 'Students' },
    { icon: <BsCameraVideo size={32} />, number: '7500+', label: 'Online Video Courses' },
  ],
  // Hero image path could be defined here
  // heroImage: '/images/happy-student.png' // Placeholder
};