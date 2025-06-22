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
  // Add more instructors with unique data
];


// Placeholder data for testimonials - 
// lib/constants.js (Assuming this is where your constants file is)

// Placeholder data for testimonials - Adapted for TrainEx E-learning
export const testimonials = [
    {
        id: 1,
        name: "David Miller",
        role: "Student Parent",
        testimonial: "Choosing TrainEx for my child's learning journey was one of the best decisions we made. It feels like we've found a platform that truly invests in their future. We're seeing amazing results and couldn't be happier.",
        photo: "/images/happystudent6.png", 
    },
    {
        id: 2,
        name: "Sarah Johnson",
        role: "Parent",
        testimonial: "Starting with online learning felt a bit overwhelming at first, especially balancing everything. But TrainEx's flexibility and the quality of the courses have made it incredibly manageable and rewarding for our family.",
        photo: "/images/happystudent6.png", 
    },
    {
        id: 3,
        name: "Michael Brown",
        role: "Instructor", // Role as requested
        testimonial: "As an instructor on TrainEx, I'm constantly impressed by the engagement and potential of my students. The platform provides the tools to connect effectively and foster a truly dynamic learning environment.",
        photo: "/images/happystudent6.png", 
    },
    {
        id: 4,
        name: "Robert Davis",
        role: "Instructor and Learning Specialist", // Role as requested
        testimonial: "TrainEx understands that effective learning isn't just about content; it's about guidance and support. It's vital that students are not just presented with material but actively mentored to grow, and TrainEx facilitates that beautifully.",
        photo: "/images/happystudent6.png", 
    },
    {
        id: 5,
        name: "William Wilson",
        role: "Parent",
        testimonial: "While we try our best to support our child's education at home, TrainEx offers a level of depth and access to expertise that's simply unmatched. They've gained skills and knowledge here that we couldn't have provided on our own.",
        photo: "/images/happystudent6.png", 
    },
     {
        id: 6,
        name: "Linda Taylor",
        role: "Parent",
        testimonial: "Within just two weeks of enrolling on TrainEx, I noticed a remarkable positive shift in my child's study habits and enthusiasm for learning. I was honestly surprised by how quickly the platform made an impact!",
        photo: "/images/happystudent6.png", 
    },
     {
        id: 7,
        name: "Barbara Clark",
        role: "Parent",
        testimonial: "Beyond the academic subjects, TrainEx has helped instill crucial skills like self-discipline and independent learning in my child. They are now more organized and take initiative in their studies.",
        photo: "/images/happystudent6.png", 
    },
    {
        id: 8, 
        name: "Ethan White",
        role: "Student", 
        testimonial: "Learning on TrainEx feels very connected. Even though it's online, the instructors and other students are all supportive. It feels like a real community where everyone is willing to help.",
        photo: "/images/happystudent6.png", 
    },
    {
        id: 9, 
        name: "Olivia Green",
        role: "Student", 
        testimonial: "There are so many things I love about TrainEx! The courses are interesting, the platform is easy to use, and I can learn at my own pace. It makes studying enjoyable and I feel like I'm really learning.",
        photo: "/images/happystudent6.png", 
    },
  
];

export const latestBlogs = [
  {
    id: 1,
    title: "Mastering Modern Web Development: A Beginner's Guide",
    slug: "mastering-modern-web-development", // Unique slug for linking
    author: "Alex Johnson",
    date: "15 Aug, 2023",
    imageUrl: "/images/coursebanner1.jpg", // Replace with actual image paths
    excerpt: "Dive into the world of web development. Learn the essential technologies and build your first project...",
  },
  {
    id: 2,
    title: "The Importance of Data Science in Today's World",
    slug: "importance-of-data-science",
    author: "Maria Garcia",
    date: "01 Aug, 2023",
    imageUrl: "/images/coursebanner12.jpg", // Replace with actual image paths
    excerpt: "Explore how data science is transforming industries and discover the key skills you need to succeed...",
  },
  {
    id: 3,
    title: "Your First Steps into the World of AI and Machine Learning",
    slug: "ai-machine-learning-first-steps",
    author: "Chen Wei",
    date: "20 Jul, 2023",
    imageUrl: "/images/coursebanner13.jpg", // Replace with actual image paths
    excerpt: "Demystifying AI and ML. This post covers the basics and guides you on where to start your learning journey...",
  },
   {
    id: 4,
    title: "Boosting Productivity with Effective Time Management Techniques",
    slug: "boosting-productivity-time-management",
    author: "Sophia Lee",
    date: "10 Jul, 2023",
    imageUrl: "/images/coursebanner14.jpg", // Replace with actual image paths
    excerpt: "Unlock your full potential by implementing simple yet powerful time management strategies...",
  },
];


export const countries = [
  { value: '', label: 'Select Country' },
  { value: 'US', label: 'United States' },
  { value: 'CA', label: 'Canada' },
  { value: 'GB', label: 'United Kingdom' },
  { value: 'AU', label: 'Australia' },
  { value: 'DE', label: 'Germany' },
  { value: 'FR', label: 'France' },
  { value: 'JP', label: 'Japan' },
  // Add more countries as needed
];

