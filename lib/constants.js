// lib/constants.js

export const sampleCourses = [
  {
    id: 'course-python-pro',
    title: '100 Days of Code: The Complete Python Pro Bootcamp',
    instructor: 'Dr. Angela Yu',
    rating: 4.7,
    reviews: 375593,
    currentPrice: 12.99,
    originalPrice: 74.99,
    thumbnail: '/images/coursebanner12.jpg', // Placeholder image path
    isBestseller: true,
    category: 'Development', // Added category
    description: [
      "Master Python by building 100 projects in 100 days. Learn data science, automation, game development, and more!",
      "Covers modern Python 3 features and best practices.",
      "Build a strong portfolio to showcase your skills."
    ],
  },
  {
    id: 'course-fullstack-web',
    title: 'The Complete Full-Stack Web Development Bootcamp',
    instructor: 'Dr. Angela Yu',
    rating: 4.7,
    reviews: 441755,
    currentPrice: 12.99,
    originalPrice: 74.99,
    thumbnail: '/images/coursebanner1.jpg', // Placeholder image path
    isBestseller: true,
    category: 'Development', // Added category
    description: [
      "Become a Full-Stack Web Developer with just ONE course. HTML, CSS, Javascript, Node, React, PostgreSQL, Web3 and DApps.",
      "Build 16 web development projects for your portfolio.",
      "Learn the latest technologies including Javascript, React, Node and even Web3 development."
    ],
  },
  {
    id: 'course-python-zero-hero',
    title: 'The Complete Python Bootcamp From Zero to Hero in Python',
    instructor: 'Jose Portilla, Pierian Training',
    rating: 4.6,
    reviews: 539086,
    currentPrice: 12.99,
    originalPrice: 74.99,
    thumbnail: '/images/coursebanner14.jpg', // Placeholder image path
    isBestseller: false,
    category: 'Development', // Added category
    description: [
      "Learn Python like a professional! Start from the basics and go all the way to creating your own applications and games.",
      "Includes Jupyter Notebooks, Exercises, and projects.",
      "Covers advanced topics like decorators, generators, and modules."
    ],
  },
  {
    id: 'course-web-dev-2025',
    title: 'The Web Developer Bootcamp 2025',
    instructor: 'Colt Steele',
    rating: 4.7,
    reviews: 281363,
    currentPrice: 12.99,
    originalPrice: 74.99,
    thumbnail: '/images/coursebanner13.jpg', // Placeholder image path
    isBestseller: false,
    category: 'Development', // Added category
    description: [
      "The ONLY course you need to learn web development - HTML, CSS, JS, Node, Express, MongoDB, and more!",
      "Build real-world projects and launch your own full-stack applications.",
      "Updated for 2025 with the latest technologies and best practices."
    ],
  },
  {
    id: 'course-js-zero-hero',
    title: 'The Complete JavaScript Course 2025: From Zero to Expert!',
    instructor: 'Jonas Schmedtmann',
    rating: 4.7,
    reviews: 224436,
    currentPrice: 12.99,
    originalPrice: 74.99,
    thumbnail: '/images/coursebanner12.jpg', // Placeholder image path
    isBestseller: true,
    category: 'Development', // Added category
    description: [
      "The modern JavaScript course for everyone! Master JavaScript with projects, challenges and theory.",
      "Learn how JavaScript works behind the scenes.",
      "Build a beautiful portfolio website from scratch."
    ],
  },
  {
    id: 'course-aws-architect',
    title: 'Ultimate AWS Certified Solutions Architect Associate',
    instructor: 'Stephane Maarek | AWS Certified Cloud Practitioner, Architect, Developer',
    rating: 4.7,
    reviews: 260829,
    currentPrice: 15.99,
    originalPrice: 89.99,
    thumbnail: '/images/coursebanner1.jpg', // Placeholder image path
    isBestseller: true,
    category: 'Cloud Computing', // Added category
    description: [
      "Prepare for the AWS Certified Solutions Architect Associate SAA-C03 Exam.",
      "Hands-on labs to reinforce concepts.",
      "Master AWS services like EC2, S3, RDS, VPC, and more."
    ],
  },
   {
    id: 'course-llm-engineering',
    title: 'LLM Engineering: Master AI, Large Language Models & Prompting',
    instructor: 'Ligency Team, Ed Donner',
    rating: 4.7,
    reviews: 11956,
    currentPrice: 9.99,
    originalPrice: 64.99,
    thumbnail: '/images/coursebanner14.jpg', // Placeholder image path
    isBestseller: true,
    category: 'AI & Machine Learning', // Added category
    description: [
      "Learn how to engineer powerful AI applications using LLMs.",
      "Master prompting techniques and fine-tuning.",
      "Understand the latest advancements in AI and natural language processing."
    ],
  },
  {
    id: 'course-agentic-ai',
    title: 'The Complete Agentic AI Engineering Course (2025)',
    instructor: 'Ed Donner, Ligency Team',
    rating: 4.8,
    reviews: 3582,
    currentPrice: 9.99,
    originalPrice: 44.99,
    thumbnail: '/images/coursebanner13.jpg', // Placeholder image path
    isBestseller: true,
    category: 'AI & Machine Learning', // Added category
    description: [
      "Build advanced AI systems using agentic design principles.",
      "Integrate multiple AI models and tools.",
      "Create autonomous AI agents for various tasks."
    ],
  },
    {
    id: 'course-ml-az',
    title: 'Machine Learning A-Z: AI, Python & R + ChatGPT Prize',
    instructor: 'Kirill Eremenko, Hadelin de Ponteves,...',
    rating: 4.5,
    reviews: 197451,
    currentPrice: 14.99,
    originalPrice: 84.99,
    thumbnail: '/images/coursebanner12.jpg', // Placeholder image path
    isBestseller: true,
    category: 'AI & Machine Learning', // Added category
    description: [
      "Learn Machine Learning from A-Z with Python and R.",
      "Covers topics like Regression, Classification, Clustering, Reinforcement Learning, NLP, and AI.",
      "Hands-on implementations of algorithms."
    ],
  },
   {
    id: 'course-pmp-certification',
    title: 'PMP Certification Exam Prep Course 35 PDU Contact Hours/PDU',
    instructor: 'TIA Education, Andrew Ramdayal',
    rating: 4.7,
    reviews: 134500,
    currentPrice: 15.99,
    originalPrice: 89.99,
    thumbnail: '/images/coursebanner1.jpg', // Placeholder image path
    isBestseller: true,
    category: 'Project Management', // Added category
    description: [
      "Everything you need to pass the PMP Exam on your first try.",
      "35 Hours of Project Management Education/PDU.",
      "Covers Agile, Hybrid, and Predictive methodologies."
    ],
  },
  // Add more courses with categories
  {
    id: 'course-digital-marketing',
    title: 'The Complete Digital Marketing Course - 12 Courses in 1',
    instructor: 'Rob Percival, Daragh Walsh',
    rating: 4.5,
    reviews: 550000,
    currentPrice: 13.99,
    originalPrice: 79.99,
    thumbnail: '/images/coursebanner13.jpg',
    isBestseller: true,
    category: 'Marketing', // Added category
    description: [
      "Master Digital Marketing Strategy, SEO, YouTube, Email Marketing, Facebook Marketing, Instagram Marketing, Copywriting & More!",
      "Learn using real-world examples and practical exercises.",
      "Grow your business or land your dream marketing job."
    ],
  },
  {
    id: 'course-ui-ux',
    title: 'User Experience Design Fundamentals',
    instructor: 'Joe Natoli',
    rating: 4.5,
    reviews: 230000,
    currentPrice: 11.99,
    originalPrice: 69.99,
    thumbnail: '/images/coursebanner14.jpg',
    isBestseller: true,
    category: 'Design', // Added category
    description: [
      "Become a UX Designer. Learn the essential concepts, tools, and techniques for creating great user experiences.",
      "Hands-on projects to build your portfolio.",
      "Covers research, ideation, prototyping, and testing."
    ],
  },
  {
    id: 'course-graphic-design',
    title: 'Graphic Design Masterclass - Learn GREAT Design',
    instructor: 'Lindsay Marsh',
    rating: 4.6,
    reviews: 180000,
    currentPrice: 10.99,
    originalPrice: 59.99,
    thumbnail: '/images/coursebanner12.jpg',
    isBestseller: true,
    category: 'Design', // Added category
    description: [
      "The ULTIMATE Graphic Design Course which will teach you core skills to make GREAT Designs!",
      "Covers Photoshop, Illustrator, InDesign, and design principles.",
      "Ideal for beginners and those looking to level up."
    ],
  },
];

export const sampleInstructors = [
  {
    id: 'instructor-hirmar',
    name: 'Hirmar Ubunti',
    role: 'Instructor',
    image: '/images/happystudent1.png', // Add unique image paths
    socialLinks: [
      { platform: 'twitter', url: '#', icon: 'FaTwitter' }, // Use icon names from react-icons/fa
      { platform: 'linkedin', url: '#', icon: 'FaLinkedinIn' },
      { platform: 'github', url: '#', icon: 'FaGithub' },
    ],
  },
  {
    id: 'instructor-lily',
    name: 'Lily Michelle',
    role: 'Founder & CEO',
    image: '/images/happystudent3.png', // Add unique image paths
    socialLinks: [
      { platform: 'twitter', url: '#', icon: 'FaTwitter' },
      { platform: 'linkedin', url: '#', icon: 'FaLinkedinIn' },
    ],
    highlightColor: 'red', // Example: Highlight color for this instructor (like the image)
  },
  {
    id: 'instructor-daniel',
    name: 'Daniel Thomas',
    role: 'Junior Instructor',
    image: '/images/happystudent4.png', // Add unique image paths
    socialLinks: [
      { platform: 'twitter', url: '#', icon: 'FaTwitter' },
      { platform: 'linkedin', url: '#', icon: 'FaLinkedinIn' },
      { platform: 'website', url: '#', icon: 'FaLink' },
    ],
  },
  {
    id: 'instructor-jennifer',
    name: 'Jennifer Patricia',
    role: 'Senior Instructor',
    image: '/images/happystudent6.png', // Add unique image paths
    socialLinks: [
      { platform: 'linkedin', url: '#', icon: 'FaLinkedinIn' },
      { platform: 'github', url: '#', icon: 'FaGithub' },
      { platform: 'website', url: '#', icon: 'FaLink' },
    ],
  },
  {
    id: 'instructor-jennifer',
    name: 'Jennifer Patricia',
    role: 'Senior Instructor',
    image: '/images/happystudent6.png', // Add unique image paths
    socialLinks: [
      { platform: 'linkedin', url: '#', icon: 'FaLinkedinIn' },
      { platform: 'github', url: '#', icon: 'FaGithub' },
      { platform: 'website', url: '#', icon: 'FaLink' },
    ],
  },
  {
    id: 'instructor-jennifer',
    name: 'Jennifer Patricia',
    role: 'Senior Instructor',
    image: '/images/happystudent6.png', // Add unique image paths
    socialLinks: [
      { platform: 'linkedin', url: '#', icon: 'FaLinkedinIn' },
      { platform: 'github', url: '#', icon: 'FaGithub' },
      { platform: 'website', url: '#', icon: 'FaLink' },
    ],
  },
  {
    id: 'instructor-jennifer',
    name: 'Jennifer Patricia',
    role: 'Senior Instructor',
    image: '/images/happystudent6.png', // Add unique image paths
    socialLinks: [
      { platform: 'linkedin', url: '#', icon: 'FaLinkedinIn' },
      { platform: 'github', url: '#', icon: 'FaGithub' },
      { platform: 'website', url: '#', icon: 'FaLink' },
    ],
  },
  // Add more instructors with unique data
];