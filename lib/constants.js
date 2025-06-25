// lib/constants.js

export const sampleCourses = [
  {
    id: '1',
    title: '100 Days of Code: The Complete Python Pro Bootcamp',
    instructor: 'Dr. Angela Yu',
    rating: 4.7,
    reviews: 375593,
    currentPrice: 12.99,
    originalPrice: 74.99,
    level: 'Advanced',
    thumbnail: '/images/coursebanner12.jpg', // Placeholder image path
    isBestseller: true,
    category: 'Development',
    description: [
      "Master Python by building 100 projects in 100 days. Learn data science, automation, game development, and more!",
      "Covers modern Python 3 features and best practices.",
      "Build a strong portfolio to showcase your skills."
    ],
    hoursSpent: 60, // Estimated hours of video content + guided coding for the *entire course*
    targetAudience: [
      "Developers who know Python basics and want to become proficient.",
      "Anyone looking to build a strong portfolio with practical projects.",
      "Individuals preparing for Python development roles.",
    ],
    roadmap: [
      "Introduction & Setup (Day 1-3)",
      "Core Python Concepts (Day 4-14)",
      "Intermediate Python & Libraries (Day 15-30)",
      "Building Larger Projects & Concepts (Day 31-60)",
      "Advanced Topics & Final Projects (Day 61-100)",
    ],
    courseOutcomes: [
      "Confidently write complex Python programs.",
      "Build a diverse portfolio of 100 Python projects.",
      "Understand and apply advanced Python concepts.",
      "Be prepared for professional Python development roles.",
    ],

    // NEW: Flags for features available in this course
    hasChat: true, // Indicates if this course has a dedicated chat room
    hasNotebook: true, // Indicates if students can take notes within this course

    sections: [
      {
        sectionTitle: 'Introduction and Environment Setup',
        // NEW: Potential estimated duration for the entire section (sum of chapter durations)
        // sectionDuration: 90, // in minutes (Optional, can calculate from chapters)
        chapters: [
          {
            chapterTitle: 'Welcome to 100 Days of Code',
            videoUrl: 'https://www.youtube.com/embed/5NzfqW_Yt6Y?si=uB8OGi_t2as9URqZ', // DEMO Youtube URL
            description: 'Overview of the course structure, goals, and what to expect over the next 100 days. Get excited to build real projects!',
            duration: 15, // Estimated duration for the chapter (in minutes) - e.g., video length + activity time
            numberOfVideos: 1, // Number of video segments in this chapter
            isCompletable: true // NEW: Flag to indicate this chapter counts towards progress
            // NEW (Not in this static JSON, but needed in user's enrollment data):
            // userProgress: 75, // Percentage watched by the current user
            // isComplete: false, // Whether this user has completed the chapter
          },
          {
            chapterTitle: 'Setting up Your Development Environment',
            videoUrl: 'https://www.youtube.com/embed/5NzfqW_Yt6Y?si=uB8OGi_t2as9URqZ',
            description: 'Step-by-step guide to installing Python, setting up VS Code (or your preferred IDE), and installing necessary tools like Git.',
            duration: 30,
            numberOfVideos: 2,
            isCompletable: true
          },
          {
            chapterTitle: 'How the 100 Days Structure Works',
            videoUrl: 'https://www.youtube.com/embed/5NzfqW_Yt6Y?si=uB8OGi_t2as9URqZ',
            description: 'Learn about the daily coding challenges, project-based learning approach, and how to make the most out of the bootcamp structure.',
            duration: 10,
            numberOfVideos: 1,
            isCompletable: true
          },
        ],
      },
      {
        sectionTitle: 'Core Python: Fundamentals',
        chapters: [
          {
            chapterTitle: 'Data Types and Variables',
            videoUrl: 'https://www.youtube.com/embed/5NzfqW_Yt6Y?si=uB8OGi_t2as9URqZ',
            description: 'Deep dive into Python\'s fundamental data types (int, float, str, bool) and how to work with variables and assignments.',
            duration: 25,
            numberOfVideos: 2,
            isCompletable: true
          },
          {
            chapterTitle: 'Control Flow: If/Else & Loops',
            videoUrl: 'https://www.youtube.com/embed/5NzfqW_Yt6Y?si=uB8OGi_t2as9URqZ',
            description: 'Understanding conditional logic with if, elif, else statements and iterating using for and while loops.',
            duration: 35,
            numberOfVideos: 3,
            isCompletable: true
          },
          {
            chapterTitle: 'Functions and Scope',
            videoUrl: 'https://www.youtube.com/embed/5NzfqW_Yt6Y?si=uB8OGi_t2as9URqZ',
            description: 'How to define, call, and reuse blocks of code with functions. Understanding local and global scope.',
            duration: 20,
            numberOfVideos: 1,
            isCompletable: true
          },
          {
            chapterTitle: 'Lists, Dictionaries, Tuples, Sets',
            videoUrl: 'https://www.youtube.com/embed/5NzfqW_Yt6Y?si=uB8OGi_t2as9URqZ',
            description: 'Exploring Python\'s powerful built-in data structures and their common methods and use cases.',
            duration: 40,
            numberOfVideos: 3,
            isCompletable: true
          },
        ],
      },
      {
        sectionTitle: 'Intermediate Python & Libraries',
        chapters: [
          {
            chapterTitle: 'Object-Oriented Programming (OOP)',
            videoUrl: 'https://www.youtube.com/embed/5NzfqW_Yt6Y?si=uB8OGi_t2as9URqZ',
            description: 'Introduction to classes, objects, inheritance, and polymorphism - the pillars of OOP in Python.',
            duration: 50,
            numberOfVideos: 4,
            isCompletable: true
          },
          {
            chapterTitle: 'Working with Files',
            videoUrl: 'https://www.youtube.com/embed/5NzfqW_Yt6Y?si=uB8OGi_t2as9URqZ',
            description: 'How to open, read, write, and manage files in Python. Handling different file formats (text, CSV).',
            duration: 30,
            numberOfVideos: 2,
            isCompletable: true
          },
          {
            chapterTitle: 'Error Handling',
            videoUrl: 'https://www.youtube.com/embed/5NzfqW_Yt6Y?si=uB8OGi_t2as9URqZ',
            description: 'Learning how to gracefully handle errors and exceptions using try, except, else, and finally blocks.',
            duration: 20,
            numberOfVideos: 1,
            isCompletable: true
          },
          {
            chapterTitle: 'Introduction to External Libraries',
            videoUrl: 'https://www.youtube.com/embed/5NzfqW_Yt6Y?si=uB8OGi_t2as9URqZ',
            description: 'How to discover, install (using pip), and utilize third-party Python packages to extend functionality.',
            duration: 15,
            numberOfVideos: 1,
            isCompletable: true
          },
        ],
      },
       {
        sectionTitle: 'Project Building Phase (Representative)', // Simplified representation
        chapters: [
          {
            chapterTitle: 'Day 15 Project: Coffee Machine',
            videoUrl: 'https://www.youtube.com/embed/5NzfqW_Yt6Y?si=uB8OGi_t2as9URqZ',
            description: 'Detailed guide on building a command-line coffee machine simulation using Python fundamentals learned so far.',
            duration: 60,
            numberOfVideos: 3,
            isCompletable: true // Projects are also completable units
          },
          {
            chapterTitle: 'Day 30 Project: Password Manager',
            videoUrl: 'https://www.youtube.com/embed/5NzfqW_Yt6Y?si=uB8OGi_t2as9URqZ',
            description: 'Build a GUI application for managing passwords using Tkinter, focusing on file handling and security basics.',
            duration: 90,
            numberOfVideos: 5,
            isCompletable: true
          },
          {
            chapterTitle: 'Day 50 Project: API Authentication',
            videoUrl: 'https://www.youtube.com/embed/5NzfqW_Yt6Y?si=uB8OGi_t2as9URqZ',
            description: 'Learn to interact with external APIs and handle authentication using the requests library.',
            duration: 45,
            numberOfVideos: 2,
            isCompletable: true
          },
          // ... more project chapters will follow this structure ...
          {
            chapterTitle: 'Day 100 Project: Final Capstone',
            videoUrl: 'https://www.youtube.com/embed/5NzfqW_Yt6Y?si=uB8OGi_t2as9URqZ',
            description: 'A significant final project that integrates multiple concepts learned throughout the 100 days.',
            duration: 120, // Estimated longer duration
            numberOfVideos: 6,
            isCompletable: true
          },
           {
            chapterTitle: 'Course Conclusion & Next Steps',
            videoUrl: 'https://www.youtube.com/embed/5NzfqW_Yt6Y?si=uB8OGi_t2as9URqZ',
            description: 'Wrapping up the course, celebrating your progress, and suggestions for continued learning and career paths.',
            duration: 10,
            numberOfVideos: 1,
            isCompletable: true // The conclusion is also a final step
          },
        ],
      },
      // ... more sections covering advanced topics, specific libraries, etc.
    ],
  },
   {
    id: '2',
    title: 'The Complete Full-Stack Web Development Bootcamp',
    instructor: 'Dr. Angela Yu',
    rating: 4.7,
    reviews: 441755,
    currentPrice: 12.99,
    originalPrice: 74.99,
    level: 'Beginner',
    thumbnail: '/images/coursebanner1.jpg', // Placeholder image path
    isBestseller: true,
    category: 'Development',
    description: [
      "Become a Full-Stack Web Developer with just ONE course. HTML, CSS, Javascript, Node, React, PostgreSQL, Web3 and DApps.",
      "Build 16 web development projects for your portfolio.",
      "Learn the latest technologies including Javascript, React, Node and even Web3 development."
    ],
     // New Fields Added Below (Same as Course 1):
    hoursSpent: 65,
    targetAudience: [
      "Complete beginners with no coding experience.",
      "Individuals looking to start a career in web development.",
      "Aspiring entrepreneurs who want to build their own web applications.",
    ],
    roadmap: [
      "Frontend Foundation (HTML, CSS)",
      "JavaScript Mastery",
      "Backend Development (Node, Express)",
      "Databases (SQL, PostgreSQL)",
      "Frontend Frameworks (React)",
      "Authentication & Security",
      "Deployment",
      "Web3 & Blockchain Basics",
      "Project Building",
    ],
    courseOutcomes: [
      "Build responsive, modern websites and web applications.",
      "Develop backend APIs using Node.js and Express.",
      "Work with SQL databases like PostgreSQL.",
      "Create dynamic user interfaces with React.",
      "Understand basic Web3 and blockchain concepts.",
      "Have a portfolio of 16 completed web projects.",
    ],

    // NEW: Flags for features available in this course
    hasChat: true,
    hasNotebook: true,

    sections: [
      {
        sectionTitle: 'Frontend Web Development: HTML',
        chapters: [
          {
            chapterTitle: 'Introduction to HTML',
            videoUrl: 'https://www.youtube.com/embed/5NzfqW_Yt6Y?si=uB8OGi_t2as9URqZ', // Placeholder URL
            description: 'Structure of web pages. Learn the basic document structure, doctype, html, head, and body tags.',
            duration: 10, // Estimated duration
            numberOfVideos: 1, // Number of video parts
            isCompletable: true // Counts towards progress
          },
          {
            chapterTitle: 'HTML Elements and Attributes',
            videoUrl: 'https://www.youtube.com/embed/5NzfqW_Yt6Y?si=uB8OGi_t2as9URqZ',
            description: 'Using common HTML elements like headings, paragraphs, lists, links, and images. Understanding attributes like src, href, id, and class.',
            duration: 20,
            numberOfVideos: 2,
            isCompletable: true
          },
          {
            chapterTitle: 'HTML Forms',
            videoUrl: 'https://www.youtube.com/embed/5NzfqW_Yt6Y?si=uB8OGi_t2as9URqZ',
            description: 'Creating interactive forms to collect user input using input types (text, email, password, submit), labels, and form attributes.',
            duration: 25,
            numberOfVideos: 2,
            isCompletable: true
          },
           {
            chapterTitle: 'Semantic HTML5',
            videoUrl: 'https://www.youtube.com/embed/5NzfqW_Yt6Y?si=uB8OGi_t2as9URqZ',
            description: 'Using new HTML5 semantic elements like <article>, <aside>, <nav>, <header>, <footer> for better structure and SEO.',
            duration: 15,
            numberOfVideos: 1,
            isCompletable: true
          },
        ],
      },
       {
        sectionTitle: 'Frontend Web Development: CSS',
        chapters: [
          {
            chapterTitle: 'Introduction to CSS',
            videoUrl: 'https://www.youtube.com/embed/5NzfqW_Yt6Y?si=uB8OGi_t2as9URqZ',
            description: 'Styling your web pages. Learn about inline, internal, and external CSS, and the CSS box model.',
            duration: 15,
            numberOfVideos: 1,
            isCompletable: true
          },
          {
            chapterTitle: 'CSS Selectors and Properties',
            videoUrl: 'https://www.youtube.com/watch?v=css_example2',
            description: 'Targeting elements using id, class, type, and attribute selectors. Applying common CSS properties like color, font-size, margin, padding.',
            duration: 30,
            numberOfVideos: 2,
            isCompletable: true
          },
          {
            chapterTitle: 'CSS Layouts (Flexbox & Grid)',
            videoUrl: 'https://www.youtube.com/watch?v=css_example3',
            description: 'Building responsive page structures using modern layout techniques: Flexbox for one-dimensional layouts and Grid for two-dimensional layouts.',
            duration: 40,
            numberOfVideos: 3,
            isCompletable: true
          },
          {
            chapterTitle: 'Bootstrap Framework',
            videoUrl: 'https://www.youtube.com/watch?v=css_example4',
            description: 'Introduction to Bootstrap, a popular front-end framework. Learn how to use its grid system, components, and utilities for rapid development.',
            duration: 35,
            numberOfVideos: 2,
            isCompletable: true
          },
        ],
      },
       {
        sectionTitle: 'JavaScript Introduction',
        chapters: [
          {
            chapterTitle: 'JavaScript Fundamentals',
            videoUrl: 'https://www.youtube.com/watch?v=js_example1',
            description: 'Variables, data types, and operators. Understanding the basics of JavaScript syntax and core concepts.',
            duration: 20,
            numberOfVideos: 1,
            isCompletable: true
          },
          {
            chapterTitle: 'Control Flow and Loops',
            videoUrl: 'https://www.youtube.com/watch?v=js_example2',
            description: 'Decision making with if/else and switch statements. Repeating actions using for, while, and do-while loops.',
            duration: 30,
            numberOfVideos: 2,
            isCompletable: true
          },
          {
            chapterTitle: 'DOM Manipulation',
            videoUrl: 'https://www.youtube.com/watch?v=js_example3',
            description: 'Changing web page content dynamically using the Document Object Model (DOM). Selecting elements, modifying content and styles.',
            duration: 35,
            numberOfVideos: 2,
            isCompletable: true
          },
          {
            chapterTitle: 'Event Handling',
            videoUrl: 'https://www.youtube.com/watch?v=js_example4',
            description: 'Responding to user interactions like clicks, keyboard input, and mouse movements using event listeners.',
            duration: 25,
            numberOfVideos: 1,
            isCompletable: true
          },
        ],
      },
      // ... many more sections on Node, Express, Databases, React, Web3, Projects ...
      // Example structure for a Project Section chapter:
       {
        sectionTitle: 'Major Project: Blog Website',
        chapters: [
          {
            chapterTitle: 'Project Setup and Planning',
            videoUrl: 'https://www.youtube.com/watch?v=project_example1',
            description: 'Setting up the project directory, initializing npm, and planning the architecture for the blog website.',
            duration: 30,
            numberOfVideos: 1,
            isCompletable: true
          },
           {
            chapterTitle: 'Building the Frontend with EJS',
            videoUrl: 'https://www.youtube.com/watch?v=project_example2',
            description: 'Creating dynamic HTML templates using Embedded JavaScript templating (EJS).',
            duration: 60,
            numberOfVideos: 3,
            isCompletable: true
          },
          // ... other chapters for backend logic, database integration, etc. for the project
           {
            chapterTitle: 'Deploying the Blog Website',
            videoUrl: 'https://www.youtube.com/watch?v=project_example_deploy',
            description: 'Steps to deploy your full-stack blog website to a hosting platform like Heroku or Vercel (demonstrating one example).',
            duration: 45,
            numberOfVideos: 2,
            isCompletable: true
          },
        ],
      },
       // Example structure for a React Section chapter:
        {
        sectionTitle: 'React: Components and State',
        chapters: [
          {
            chapterTitle: 'Introduction to React',
            videoUrl: 'https://www.youtube.com/watch?v=react_example1',
            description: 'What is React, why use it, and setting up a basic React project with Create React App or Vite.',
            duration: 25,
            numberOfVideos: 1,
            isCompletable: true
          },
           {
            chapterTitle: 'Building Functional Components',
            videoUrl: 'https://www.youtube.com/watch?v=react_example2',
            description: 'Writing reusable UI pieces using functional components and JSX syntax.',
            duration: 30,
            numberOfVideos: 2,
            isCompletable: true
          },
           {
            chapterTitle: 'Understanding State and Props',
            videoUrl: 'https://www.youtube.com/watch?v=react_example3',
            description: 'Managing component data with state (using useState hook) and passing data down with props.',
            duration: 40,
            numberOfVideos: 3,
            isCompletable: true
          },
          // ... other React chapters
        ],
      },
       ],
      },
  {
    id: '3',
    title: 'The Complete Python Bootcamp From Zero to Hero in Python',
    instructor: 'Jose Portilla, Pierian Training',
    rating: 4.6,
    reviews: 539086,
    currentPrice: 12.99,
    originalPrice: 74.99,
    level: 'Intermediate', // Note: Description mentions 'Zero to Hero', so beginner might be more appropriate, but keeping 'Intermediate' as per your original JSON.
    thumbnail: '/images/coursebanner14.jpg', // Placeholder image path
    isBestseller: false,
    category: 'Development',
    description: [
      "Learn Python like a professional! Start from the basics and go all the way to creating your own applications and games.",
      "Includes Jupyter Notebooks, Exercises, and projects.",
      "Covers advanced topics like decorators, generators, and modules."
    ],
     // Existing Fields
    hoursSpent: 50,
    targetAudience: [
      "Absolute beginners to programming and Python.",
      "Individuals who want a comprehensive introduction to Python.",
      "Analysts or data scientists looking to use Python for their work.",
    ],
    roadmap: [
      "Python Crash Course",
      "Core Data Types & Structures",
      "Functions & Methods",
      "Modules & Packages",
      "Object-Oriented Programming",
      "Error Handling",
      "Advanced Topics",
      "Projects & Applications",
    ],
    courseOutcomes: [
      "Write Python scripts for various tasks.",
      "Understand and implement key Python concepts.",
      "Work with different data types and structures.",
      "Develop applications and games using Python.",
      "Utilize advanced Python features like decorators.",
    ],

    // NEW: Flags for features available in this course
    hasChat: true, // Assuming chat is available for this course
    hasNotebook: true, // Assuming notebook is available for this course

    sections: [
      {
        sectionTitle: 'Python Crash Course',
        chapters: [
          {
            chapterTitle: 'Why Learn Python?',
            videoUrl: 'https://www.youtube.com/watch?v=py_bootcamp_intro', // Placeholder URL
            description: 'Overview of Python applications and its relevance in today\'s tech landscape (web development, data science, AI, etc.).',
            duration: 10, // Estimated duration in minutes
            numberOfVideos: 1, // Number of video segments
            isCompletable: true // This chapter counts towards progress
          },
          {
            chapterTitle: 'Installation and Setup',
            videoUrl: 'https://www.youtube.com/watch?v=py_bootcamp_install',
            description: 'Step-by-step guide on how to download and install Python on different operating systems (Windows, macOS, Linux).',
            duration: 25,
            numberOfVideos: 2,
            isCompletable: true
          },
          {
            chapterTitle: 'Running Python Code (Jupyter)',
            videoUrl: 'https://www.youtube.com/watch?v=py_bootcamp_jupyter',
            description: 'Introduction to Jupyter Notebooks and how to use them for writing, running, and experimenting with Python code interactively.',
            duration: 20,
            numberOfVideos: 1,
            isCompletable: true
          },
        ],
      },
      {
        sectionTitle: 'Python Object and Data Structure Basics',
        chapters: [
          {
            chapterTitle: 'Numbers',
            videoUrl: 'https://www.youtube.com/watch?v=py_bootcamp_numbers',
            description: 'Working with integers, floating-point numbers, arithmetic operations, and type conversion in Python.',
            duration: 15,
            numberOfVideos: 1,
            isCompletable: true
          },
          {
            chapterTitle: 'Strings',
            videoUrl: 'https://www.youtube.com/watch?v=py_bootcamp_strings',
            description: 'Manipulating text data using string indexing, slicing, formatting, and common string methods.',
            duration: 30,
            numberOfVideos: 2,
            isCompletable: true
          },
          {
            chapterTitle: 'Lists',
            videoUrl: 'https://www.youtube.com/watch?v=py_bootcamp_lists',
            description: 'Introduction to lists - ordered, mutable sequences. How to create, access, modify, and iterate through list elements.',
            duration: 35,
            numberOfVideos: 2,
            isCompletable: true
          },
           {
            chapterTitle: 'Dictionaries',
            videoUrl: 'https://www.youtube.com/watch?v=py_bootcamp_dicts',
            description: 'Working with dictionaries - unordered collections of key-value pairs. Accessing, adding, and deleting elements.',
            duration: 30,
            numberOfVideos: 2,
            isCompletable: true
          },
           {
            chapterTitle: 'Tuples and Sets',
            videoUrl: 'https://www.youtube.com/watch?v=py_bootcamp_tuples_sets',
            description: 'Understanding tuples (immutable ordered sequences) and sets (unordered collections of unique elements).',
            duration: 20,
            numberOfVideos: 1,
            isCompletable: true
          },
        ],
      },
      {
        sectionTitle: 'Programming Statements',
        chapters: [
           {
            chapterTitle: 'Comparison Operators',
            videoUrl: 'https://www.youtube.com/watch?v=py_bootcamp_compare',
            description: 'Using comparison operators (==, !=, >, <, >=, <=) and logical operators (and, or, not) to evaluate conditions.',
            duration: 15,
            numberOfVideos: 1,
            isCompletable: true
           },
           {
            chapterTitle: 'If/Elif/Else Statements',
            videoUrl: 'https://www.youtube.com/watch?v=py_bootcamp_ifelse',
            description: 'Implementing conditional logic to execute different code blocks based on whether conditions are true or false.',
            duration: 25,
            numberOfVideos: 2,
            isCompletable: true
           },
           {
            chapterTitle: 'For Loops',
            videoUrl: 'https://www.youtube.com/watch?v=py_bootcamp_for',
            description: 'Iterating through sequences (lists, strings, tuples, dictionaries) using for loops.',
            duration: 20,
            numberOfVideos: 1,
            isCompletable: true
           },
           {
            chapterTitle: 'While Loops',
            videoUrl: 'https://www.youtube.com/watch?v=py_bootcamp_while',
            description: 'Repeating actions based on a condition using while loops. Understanding break and continue statements.',
            duration: 20,
            numberOfVideos: 1,
            isCompletable: true
           },
        ]
      },
       {
        sectionTitle: 'Functions and Methods',
        chapters: [
           {
            chapterTitle: 'Methods',
            videoUrl: 'https://www.youtube.com/watch?v=py_bootcamp_methods',
            description: 'Discovering and using built-in methods associated with Python objects like strings, lists, and dictionaries.',
            duration: 15,
            numberOfVideos: 1,
            isCompletable: true
           },
           {
            chapterTitle: 'Functions',
            videoUrl: 'https://www.youtube.com/watch?v=py_bootcamp_functions',
            description: 'Defining your own reusable functions with parameters and return values. Understanding documentation strings (docstrings).',
            duration: 30,
            numberOfVideos: 2,
            isCompletable: true
           },
           {
            chapterTitle: 'Lambda Expressions',
            videoUrl: 'https://www.youtube.com/watch?v=py_bootcamp_lambda',
            description: 'Creating small, anonymous functions using the lambda keyword.',
            duration: 10,
            numberOfVideos: 1,
            isCompletable: true
           },
           {
            chapterTitle: 'Nested Statements and Scope',
            videoUrl: 'https://www.youtube.com/watch?v=py_bootcamp_scope',
            description: 'Understanding LEGB (Local, Enclosing Function Local, Global, Built-in) rule for variable scope in Python.',
            duration: 20,
            numberOfVideos: 1,
            isCompletable: true
           },
        ]
      },
      // ... more sections including Modules, Errors, OOP, Advanced, Projects ...
       {
        sectionTitle: 'Object-Oriented Programming',
        chapters: [
          {
            chapterTitle: 'Introduction to OOP',
            videoUrl: 'https://www.youtube.com/watch?v=py_bootcamp_oop_intro',
            description: 'Understanding the concepts of classes, objects, attributes, and methods.',
            duration: 30,
            numberOfVideos: 2,
            isCompletable: true
          },
          {
            chapterTitle: 'Inheritance and Polymorphism',
            videoUrl: 'https://www.youtube.com/watch?v=py_bootcamp_oop_inheritance',
            description: 'Exploring how to create new classes from existing ones and how objects can take on many forms.',
            duration: 40,
            numberOfVideos: 2,
            isCompletable: true
          },
          // ... other OOP chapters
        ]
      },
       {
        sectionTitle: 'Major Project: Simple Game',
        chapters: [
           {
            chapterTitle: 'Project Planning and Setup',
            videoUrl: 'https://www.youtube.com/watch?v=py_bootcamp_game_setup',
            description: 'Planning the logic for a simple text-based or basic graphical game and setting up the initial code structure.',
            duration: 25,
            numberOfVideos: 1,
            isCompletable: true
          },
          {
            chapterTitle: 'Implementing Game Logic',
            videoUrl: 'https://www.youtube.com/watch?v=py_bootcamp_game_logic',
            description: 'Writing the core game rules, user input handling, and state management using Python concepts.',
            duration: 60,
            numberOfVideos: 3,
            isCompletable: true
          },
          // ... other project chapters
        ]
       }
    ],
  },
  {
    id: '4',
    title: 'The Web Developer Bootcamp 2025',
    instructor: 'Colt Steele',
    rating: 4.7,
    reviews: 281363,
    currentPrice: 12.99,
    originalPrice: 74.99,
    level: 'Advanced', // Keeping 'Advanced' as per your original JSON, though the description suggests it starts from basics.
    thumbnail: '/images/coursebanner13.jpg', // Placeholder image path
    isBestseller: false,
    category: 'Development',
    description: [
      "The ONLY course you need to learn web development - HTML, CSS, JS, Node, Express, MongoDB, and more!",
      "Build real-world projects and launch your own full-stack applications.",
      "Updated for 2025 with the latest technologies and best practices."
    ],
    // Existing Fields
    hoursSpent: 65,
    targetAudience: [
      "Aspiring web developers aiming for a full-stack career.",
      "Developers who want to learn the MERN/MEAN stack.",
      "Anyone who prefers project-based learning.",
    ],
    roadmap: [
      "Frontend Fundamentals (HTML, CSS, Responsive Design)",
      "JavaScript Deep Dive",
      "Frontend Frameworks (Example: Basic integration)",
      "Backend Development with Node & Express",
      "Databases (MongoDB)",
      "User Authentication",
      "Deployment",
      "Project Building (YelpCamp Example)",
    ],
    courseOutcomes: [
      "Build modern, responsive websites.",
      "Develop robust backend applications with Node/Express.",
      "Work with NoSQL databases like MongoDB.",
      "Implement secure user authentication.",
      "Deploy applications to the cloud.",
      "Complete a significant full-stack project (YelpCamp).",
    ],

    // NEW: Flags for features available in this course
    hasChat: true, // Assuming chat is available for this course
    hasNotebook: true, // Assuming notebook is available for this course

    sections: [
      {
        sectionTitle: 'HTML & CSS: The Basics',
        chapters: [
          {
            chapterTitle: 'Setting up Your Environment',
            videoUrl: 'https://www.youtube.com/watch?v=webdev_bootcamp_setup', // Placeholder URL
            description: 'Choosing and setting up a suitable code editor (like VS Code) and understanding basic developer tools in the browser.',
            duration: 15, // Estimated duration
            numberOfVideos: 1, // Number of video parts
            isCompletable: true // Counts towards progress
          },
          {
            chapterTitle: 'HTML Boilerplate and Semantics',
            videoUrl: 'https://www.youtube.com/watch?v=webdev_bootcamp_html_basic',
            description: 'Understanding the minimal required HTML structure (`<!DOCTYPE>`, `<html>`, `<head>`, `<body>`) and using semantic tags like `<article>`, `<nav>`, `<aside>`, etc.',
            duration: 20,
            numberOfVideos: 1,
            isCompletable: true
          },
          {
            chapterTitle: 'Introduction to CSS',
            videoUrl: 'https://www.youtube.com/watch?v=webdev_bootcamp_css_intro',
            description: 'How to link CSS to HTML, basic CSS syntax (selectors, properties, values), and the cascade and specificity rules.',
            duration: 25,
            numberOfVideos: 2,
            isCompletable: true
          },
          {
            chapterTitle: 'The Box Model',
            videoUrl: 'https://www.youtube.com/watch?v=webdev_bootcamp_boxmodel',
            description: 'Deep dive into the CSS Box Model: content, padding, border, and margin, and how they affect element sizing and spacing.',
            duration: 20,
            numberOfVideos: 1,
            isCompletable: true
          },
        ],
      },
       {
        sectionTitle: 'Intermediate CSS & Layouts',
        chapters: [
          {
            chapterTitle: 'CSS Selectors Revisited',
            videoUrl: 'https://www.youtube.com/watch?v=webdev_bootcamp_css_selectors',
            description: 'Mastering advanced CSS selectors like pseudo-classes, pseudo-elements, combinators, and attribute selectors for more precise styling.',
            duration: 20,
            numberOfVideos: 1,
            isCompletable: true
          },
          {
            chapterTitle: 'Flexbox',
            videoUrl: 'https://www.youtube.com/watch?v=webdev_bootcamp_flexbox',
            description: 'Building one-dimensional layouts effortlessly using Flexbox properties (`display: flex`, `flex-direction`, `justify-content`, `align-items`, etc.).',
            duration: 35,
            numberOfVideos: 2,
            isCompletable: true
          },
           {
            chapterTitle: 'CSS Grid', // Added Grid as it's essential for modern layouts
            videoUrl: 'https://www.youtube.com/watch?v=webdev_bootcamp_grid',
            description: 'Creating complex two-dimensional layouts using CSS Grid properties. Designing grids, placing items, and managing gaps.',
            duration: 30,
            numberOfVideos: 2,
            isCompletable: true
          },
          {
            chapterTitle: 'Responsive Design',
            videoUrl: 'https://www.youtube.com/watch?v=webdev_bootcamp_responsive',
            description: 'Making your sites adapt to different screen sizes using media queries, flexible units (%, vw, vh), and responsive images.',
            duration: 40,
            numberOfVideos: 2,
            isCompletable: true
          },
        ],
      },
      {
        sectionTitle: 'JavaScript: The Client-Side',
        chapters: [
          {
            chapterTitle: 'Basic JS Data Types and Variables',
            videoUrl: 'https://www.youtube.com/watch?v=webdev_bootcamp_js_basics',
            description: 'Understanding JavaScript\'s primitive data types (string, number, boolean, null, undefined, symbol, bigint) and declaring variables with `let`, `const`, and `var`.',
            duration: 20,
            numberOfVideos: 1,
            isCompletable: true
          },
          {
            chapterTitle: 'Control Flow',
            videoUrl: 'https://www.youtube.com/watch?v=webdev_bootcamp_js_flow',
            description: 'Using `if/else`, `switch` statements for conditional logic, and `for`, `while`, `do-while` loops for repetition.',
            duration: 30,
            numberOfVideos: 2,
            isCompletable: true
          },
          {
            chapterTitle: 'Functions and Scope',
            videoUrl: 'https://www.youtube.com/watch?v=webdev_bootcamp_js_functions',
            description: 'Defining and calling functions, understanding parameters, return values, and variable scope (global, function, block).',
            duration: 25,
            numberOfVideos: 2,
            isCompletable: true
          },
          {
            chapterTitle: 'Working with the DOM',
            videoUrl: 'https://www.youtube.com/watch?v=webdev_bootcamp_js_dom',
            description: 'Selecting HTML elements, modifying their content, styles, and attributes using the Document Object Model API.',
            duration: 35,
            numberOfVideos: 2,
            isCompletable: true
          },
        ],
      },
       // ... more sections on Asynchronous JS, Node, Express, MongoDB, Authentication, Deployment, YelpCamp Project ...
       {
         sectionTitle: 'Introduction to Backend with Node & Express',
         chapters: [
           {
             chapterTitle: 'Setting up Node.js and npm',
             videoUrl: 'https://www.youtube.com/watch?v=webdev_bootcamp_node_setup',
             description: 'Installing Node.js, understanding the Node.js runtime, and using npm for package management.',
             duration: 20,
             numberOfVideos: 1,
             isCompletable: true
           },
            {
             chapterTitle: 'Your First Express App',
             videoUrl: 'https://www.youtube.com/watch?v=webdev_bootcamp_express_intro',
             description: 'Creating a simple web server using the Express.js framework, handling basic routes and requests.',
             duration: 30,
             numberOfVideos: 2,
             isCompletable: true
           },
           // ... other backend chapters
         ]
       },
       {
         sectionTitle: 'Introduction to Databases: MongoDB',
         chapters: [
           {
             chapterTitle: 'Why NoSQL? Introduction to MongoDB',
             videoUrl: 'https://www.youtube.com/watch?v=webdev_bootcamp_mongo_intro',
             description: 'Understanding the basics of NoSQL databases and the document-oriented structure of MongoDB.',
             duration: 20,
             numberOfVideos: 1,
             isCompletable: true
           },
            {
             chapterTitle: 'Basic MongoDB Operations (CRUD)',
             videoUrl: 'https://www.youtube.com/watch?v=webdev_bootcamp_mongo_crud',
             description: 'Performing Create, Read, Update, and Delete operations using the MongoDB shell or a client library.',
             duration: 35,
             numberOfVideos: 2,
             isCompletable: true
           },
           // ... other database chapters
         ]
       },
       {
         sectionTitle: 'Major Project: YelpCamp',
         chapters: [
           {
             chapterTitle: 'YelpCamp Project Overview and Setup',
             videoUrl: 'https://www.youtube.com/watch?v=webdev_bootcamp_yelpcamp_setup',
             description: 'Introduction to the YelpCamp project (a review site for campgrounds) and setting up the project boilerplate.',
             duration: 25,
             numberOfVideos: 1,
             isCompletable: true
           },
            {
             chapterTitle: 'Building Campground Schemas (MongoDB)',
             videoUrl: 'https://www.youtube.com/watch?v=webdev_bootcamp_yelpcamp_schema',
             description: 'Defining the data models for campgrounds and comments using Mongoose (an ODM for MongoDB).',
             duration: 30,
             numberOfVideos: 1,
             isCompletable: true
           },
           // ... many more chapters covering routes, views, authentication, error handling, deployment for YelpCamp ...
            {
             chapterTitle: 'Deploying YelpCamp',
             videoUrl: 'https://www.youtube.com/watch?v=webdev_bootcamp_yelpcamp_deploy',
             description: 'Steps to deploy the full-stack YelpCamp application to a production server like Heroku or Render.',
             duration: 45,
             numberOfVideos: 2,
             isCompletable: true
           },
         ]
       }
    ],
  },
  {
    id: '5',
    title: 'The Complete JavaScript Course 2025: From Zero to Expert!',
    instructor: 'Jonas Schmedtmann',
    rating: 4.7,
    reviews: 224436,
    currentPrice: 12.99,
    originalPrice: 74.99,
    level: 'Beginner',
    thumbnail: '/images/coursebanner12.jpg', // Placeholder image path
    isBestseller: true,
    category: 'Development',
    description: [
      "The modern JavaScript course for everyone! Master JavaScript with projects, challenges and theory.",
      "Learn how JavaScript works behind the scenes.",
      "Build a beautiful portfolio website from scratch."
    ],
     // Existing Fields
    hoursSpent: 55,
    targetAudience: [
      "Complete beginners to JavaScript and programming.",
      "Developers wanting a deep understanding of how JS works.",
      "Anyone aspiring to work with frontend or backend JavaScript frameworks.",
    ],
    roadmap: [
      "JS Fundamentals Part 1 & 2",
      "How JavaScript Works (Behind the Scenes)",
      "Modern JavaScript (ES6+)",
      "Asynchronous JavaScript",
      "Object-Oriented Programming in JS",
      "Modules and Tooling",
      "Building Projects",
    ],
    courseOutcomes: [
      "Master modern JavaScript from scratch.",
      "Understand JS execution context, scope, and the event loop.",
      "Write clean, modular, and maintainable JS code.",
      "Build complex applications using advanced JS features.",
      "Be prepared for learning frontend/backend frameworks.",
    ],

    // NEW: Flags for features available in this course
    hasChat: true, // Assuming chat is available for this course
    hasNotebook: true, // Assuming notebook is available for this course

    sections: [
      {
        sectionTitle: 'JavaScript Fundamentals - Part 1',
        chapters: [
          {
            chapterTitle: 'Linking a JavaScript File',
            videoUrl: 'https://www.youtube.com/embed/5NzfqW_Yt6Y?si=uB8OGi_t2as9URqZ', // Placeholder URL
            description: 'Methods for connecting external or internal JavaScript code to your HTML document.',
            duration: 10, // Estimated duration
            numberOfVideos: 1, // Number of video parts
            isCompletable: true // Counts towards progress
          },
          {
            chapterTitle: 'Variables and Data Types',
            videoUrl: 'https://www.youtube.com/embed/5NzfqW_Yt6Y?si=uB8OGi_t2as9URqZ',
            description: 'Understanding how to declare variables using `let`, `const`, and `var`, and working with primitive data types like strings, numbers, and booleans.',
            duration: 15,
            numberOfVideos: 1,
            isCompletable: true
          },
          {
            chapterTitle: 'Operators',
            videoUrl: 'https://www.youtube.com/embed/5NzfqW_Yt6Y?si=uB8OGi_t2as9URqZ',
            description: 'Exploring arithmetic, assignment, comparison, logical, and other useful operators in JavaScript.',
            duration: 20,
            numberOfVideos: 1,
            isCompletable: true
          },
          {
            chapterTitle: 'Statements and Expressions',
            videoUrl: 'https://www.youtube.com/embed/5NzfqW_Yt6Y?si=uB8OGi_t2as9URqZ',
            description: 'Differentiating between JavaScript statements (which perform actions) and expressions (which produce values).',
            duration: 10,
            numberOfVideos: 1,
            isCompletable: true
          },
        ],
      },
      {
        sectionTitle: 'JavaScript Fundamentals - Part 2',
        chapters: [
          {
            chapterTitle: 'Functions',
            videoUrl: 'https://www.youtube.com/embed/5NzfqW_Yt6Y?si=uB8OGi_t2as9URqZ',
            description: 'Defining and calling functions to encapsulate reusable blocks of code, understanding parameters and return values.',
            duration: 25,
            numberOfVideos: 2,
            isCompletable: true
          },
          {
            chapterTitle: 'Arrays',
            videoUrl: 'https://www.youtube.com/embed/5NzfqW_Yt6Y?si=uB8OGi_t2as9URqZ',
            description: 'Working with arrays - ordered collections of data. Accessing elements, adding, removing, and iterating.',
            duration: 30,
            numberOfVideos: 2,
            isCompletable: true
          },
          {
            chapterTitle: 'Objects',
            videoUrl: 'https://www.youtube.com/embed/5NzfqW_Yt6Y?si=uB8OGi_t2as9URqZ',
            description: 'Understanding objects as collections of key-value pairs, representing structured data. Accessing properties and methods.',
            duration: 25,
            numberOfVideos: 2,
            isCompletable: true
          },
          {
            chapterTitle: 'Loops',
            videoUrl: 'https://www.youtube.com/embed/5NzfqW_Yt6Y?si=uB8OGi_t2as9URqZ',
            description: 'Repeating actions using `for`, `while`, and `do-while` loops, and iterating over arrays/objects with `for...of` and `for...in`.',
            duration: 20,
            numberOfVideos: 1,
            isCompletable: true
          },
        ],
      },
      {
        sectionTitle: 'How JavaScript Works Behind the Scenes',
        chapters: [
          {
            chapterTitle: 'The Execution Context',
            videoUrl: 'https://www.youtube.com/embed/5NzfqW_Yt6Y?si=uB8OGi_t2as9URqZ',
            description: 'Deep dive into how JavaScript code is executed: the Global Execution Context and Function Execution Contexts, Creation Phase vs. Execution Phase.',
            duration: 30,
            numberOfVideos: 2,
            isCompletable: true
          },
          {
            chapterTitle: 'Scope and the Scope Chain',
            videoUrl: 'https://www.youtube.com/embed/5NzfqW_Yt6Y?si=uB8OGi_t2as9URqZ',
            description: 'Understanding where variables are accessible (global, function, block scope) and how the Scope Chain determines variable lookup.',
            duration: 25,
            numberOfVideos: 1,
            isCompletable: true
          },
          {
            chapterTitle: 'The `this` Keyword',
            videoUrl: 'https://www.youtube.com/embed/5NzfqW_Yt6Y?si=uB8OGi_t2as9URqZ',
            description: 'Demystifying the `this` keyword and how its value changes based on how a function is called (method, simple call, arrow functions, bind/call/apply).',
            duration: 35,
            numberOfVideos: 2,
            isCompletable: true
          },
          {
            chapterTitle: 'Primitives vs. Objects',
            videoUrl: 'https://www.youtube.com/embed/5NzfqW_Yt6Y?si=uB8OGi_t2as9URqZ',
            description: 'Understanding the fundamental difference between primitive values (stored directly) and objects (stored by reference) and how this affects variable assignments and function arguments.',
            duration: 20,
            numberOfVideos: 1,
            isCompletable: true
          },
        ],
      },
      // ... many more sections on ES6+, Asynchronous JS, OOP, Modules, Projects ...
       {
         sectionTitle: 'Asynchronous JavaScript: Promises, Async/Await',
         chapters: [
           {
             chapterTitle: 'Asynchronous JavaScript Overview',
             videoUrl: 'https://www.youtube.com/embed/5NzfqW_Yt6Y?si=uB8OGi_t2as9URqZ',
             description: 'Understanding blocking vs. non-blocking code and the role of the event loop in handling asynchronous operations.',
             duration: 20,
             numberOfVideos: 1,
             isCompletable: true
           },
            {
             chapterTitle: 'Promises',
             videoUrl: 'https://www.youtube.com/embed/5NzfqW_Yt6Y?si=uB8OGi_t2as9URqZ',
             description: 'Working with Promises to manage asynchronous results more cleanly than callbacks. Using `.then()` and `.catch()`.',
             duration: 30,
             numberOfVideos: 2,
             isCompletable: true
           },
           {
             chapterTitle: 'Async/Await',
             videoUrl: 'https://www.youtube.com/embed/5NzfqW_Yt6Y?si=uB8OGi_t2as9URqZ',
             description: 'Simplifying asynchronous code further using the modern `async` and `await` syntax.',
             duration: 35,
             numberOfVideos: 2,
             isCompletable: true
           },
           // ... other async chapters
         ]
       },
        {
         sectionTitle: 'Modern JavaScript Development: Modules and Tooling',
         chapters: [
           {
             chapterTitle: 'ES6 Modules',
             videoUrl: 'https://www.youtube.com/embed/5NzfqW_Yt6Y?si=uB8OGi_t2as9URqZ',
             description: 'Organizing your code into reusable modules using `import` and `export`.',
             duration: 20,
             numberOfVideos: 1,
             isCompletable: true
           },
            {
             chapterTitle: 'Introduction to npm',
             videoUrl: 'https://www.youtube.com/embed/5NzfqW_Yt6Y?si=uB8OGi_t2as9URqZ',
             description: 'Using the Node Package Manager (npm) to manage project dependencies and scripts.',
             duration: 15,
             numberOfVideos: 1,
             isCompletable: true
           },
            {
             chapterTitle: 'Bundlers (e.g., Webpack/Vite overview)',
             videoUrl: 'https://www.youtube.com/embed/5NzfqW_Yt6Y?si=uB8OGi_t2as9URqZ',
             description: 'Brief overview of how modern JavaScript projects are built and optimized using bundlers.',
             duration: 10,
             numberOfVideos: 1,
             isCompletable: false // Maybe mark this as non-completable if it's just an overview? Or true if there's a small task. Decided true for consistency.
           },
           // ... other tooling chapters
         ]
       },
        {
         sectionTitle: 'Major Project: Build a Beautiful Portfolio Website',
         chapters: [
           {
             chapterTitle: 'Project Setup and Planning',
             videoUrl: 'https://www.youtube.com/embed/5NzfqW_Yt6Y?si=uB8OGi_t2as9URqZ',
             description: 'Planning the structure and features of the portfolio website and setting up the project.',
             duration: 25,
             numberOfVideos: 1,
             isCompletable: true
           },
            {
             chapterTitle: 'Implementing Sections with HTML & CSS',
             videoUrl: 'https://www.youtube.com/embed/5NzfqW_Yt6Y?si=uB8OGi_t2as9URqZ',
             description: 'Building the static structure and styling for different sections of the portfolio.',
             duration: 50,
             numberOfVideos: 3,
             isCompletable: true
           },
           // ... more chapters covering dynamic elements with JS, maybe fetching projects from an API, etc.
            {
             chapterTitle: 'Making it Responsive and Final Touches',
             videoUrl: 'https://www.youtube.com/embed/5NzfqW_Yt6Y?si=uB8OGi_t2as9URqZ',
             description: 'Ensuring the website looks great on all devices and adding final styling adjustments.',
             duration: 30,
             numberOfVideos: 2,
             isCompletable: true
           },
         ]
       }
    ],
  },
  {
    id: '6',
    title: 'Ultimate AWS Certified Solutions Architect Associate',
    instructor: 'Stephane Maarek | AWS Certified Cloud Practitioner, Architect, Developer',
    rating: 4.7,
    reviews: 260829,
    currentPrice: 15.99,
    originalPrice: 89.99,
    level: 'Intermediate',
    thumbnail: '/images/coursebanner1.jpg', // Placeholder image path
    isBestseller: true,
    category: 'Cloud Computing',
    description: [
      "Prepare for the AWS Certified Solutions Architect Associate SAA-C03 Exam.",
      "Hands-on labs to reinforce concepts.",
      "Master AWS services like EC2, S3, RDS, VPC, and more."
    ],
    // Existing Fields
    hoursSpent: 45,
    targetAudience: [
      "IT professionals preparing for the AWS SAA-C03 exam.",
      "System administrators and developers working with AWS.",
      "Solutions architects needing to validate their AWS knowledge.",
    ],
    roadmap: [
      "Introduction to AWS & Cloud Concepts",
      "Compute Services (EC2, Lambda)",
      "Storage Services (S3, EBS, EFS)",
      "Networking (VPC, Route 53, Direct Connect)",
      "Databases (RDS, DynamoDB, Aurora)",
      "Security, Identity, and Compliance (IAM, Security Groups)",
      "Management and Governance (CloudWatch, CloudFormation)",
      "Review and Exam Readiness",
    ],
    courseOutcomes: [
      "Pass the AWS Certified Solutions Architect Associate (SAA-C03) exam.",
      "Design and deploy scalable, highly available, and fault-tolerant systems on AWS.",
      "Understand core AWS services and best practices.",
      "Identify appropriate AWS services based on requirements.",
    ],

    // NEW: Flags for features available in this course
    hasChat: true, // Assuming chat is available for this course
    hasNotebook: true, // Assuming notebook is available for this course

    sections: [
      {
        sectionTitle: 'Introduction to AWS & The Exam',
        chapters: [
          {
            chapterTitle: 'What is Cloud Computing?',
            videoUrl: 'https://www.youtube.com/watch?v=aws_sa_intro1', // Placeholder URL
            description: 'Overview of cloud computing concepts, benefits, and different cloud service models (IaaS, PaaS, SaaS).',
            duration: 10, // Estimated duration
            numberOfVideos: 1, // Number of video parts
            isCompletable: true // Counts towards progress
          },
          {
            chapterTitle: 'Introduction to AWS',
            videoUrl: 'https://www.youtube.com/watch?v=aws_sa_intro2',
            description: 'Introducing the Amazon Web Services (AWS) global infrastructure and key foundational services.',
            duration: 15,
            numberOfVideos: 1,
            isCompletable: true
          },
          {
            chapterTitle: 'Understanding the SAA-C03 Exam',
            videoUrl: 'https://www.youtube.com/watch?v=aws_sa_examintro',
            description: 'Detailed breakdown of the AWS Certified Solutions Architect Associate (SAA-C03) exam domains, format, and preparation tips.',
            duration: 20,
            numberOfVideos: 1,
            isCompletable: true
          },
        ],
      },
       {
        sectionTitle: 'Amazon EC2 - Compute Service',
        chapters: [
          {
            chapterTitle: 'EC2 Instances',
            videoUrl: 'https://www.youtube.com/watch?v=aws_sa_ec2_instances',
            description: 'Understanding EC2 concepts, instance types, AMIs, and launching your first virtual machine in the cloud.',
            duration: 25,
            numberOfVideos: 2,
            isCompletable: true
          },
          {
            chapterTitle: 'EC2 Pricing Models',
            videoUrl: 'https://www.youtube.com/watch?v=aws_sa_ec2_pricing',
            description: 'Exploring On-Demand, Reserved Instances, Spot Instances, and Savings Plans to optimize EC2 costs.',
            duration: 15,
            numberOfVideos: 1,
            isCompletable: true
          },
          {
            chapterTitle: 'EC2 Storage (EBS)',
            videoUrl: 'https://www.youtube.com/watch?v=aws_sa_ec2_ebs',
            description: 'Attaching persistent block storage volumes (EBS) to EC2 instances and understanding different volume types.',
            duration: 20,
            numberOfVideos: 1,
            isCompletable: true
          },
          {
            chapterTitle: 'Load Balancing (ELB)',
            videoUrl: 'https://www.youtube.com/watch?v=aws_sa_elb',
            description: 'Distributing incoming application traffic across multiple EC2 instances using Elastic Load Balancers (Application, Network, Gateway).',
            duration: 30,
            numberOfVideos: 2,
            isCompletable: true
          },
          {
            chapterTitle: 'Auto Scaling Groups (ASG)',
            videoUrl: 'https://www.youtube.com/watch?v=aws_sa_asg',
            description: 'Automatically scaling your EC2 capacity up or down based on defined policies and schedules to handle varying load.',
            duration: 25,
            numberOfVideos: 2,
            isCompletable: true
          },
        ],
      },
      {
        sectionTitle: 'Amazon S3 - Storage Service',
        chapters: [
           {
            chapterTitle: 'Introduction to S3',
            videoUrl: 'https://www.youtube.com/watch?v=aws_sa_s3_intro',
            description: 'Understanding S3 (Simple Storage Service) as a highly scalable, durable, and available object storage service.',
            duration: 15,
            numberOfVideos: 1,
            isCompletable: true
           },
           {
            chapterTitle: 'S3 Versioning and Lifecycle Policies',
            videoUrl: 'https://www.youtube.com/watch?v=aws_sa_s3_lifecycle',
            description: 'Managing multiple versions of objects and automating data transitions to different storage classes using lifecycle rules.',
            duration: 20,
            numberOfVideos: 1,
            isCompletable: true
           },
           {
            chapterTitle: 'S3 Security and Encryption',
            videoUrl: 'https://www.youtube.com/watch?v=aws_sa_s3_security',
            description: 'Securing your data in S3 using policies, access control lists (ACLs), bucket policies, and encryption methods (SSE-S3, SSE-KMS, SSE-C).',
            duration: 25,
            numberOfVideos: 2,
            isCompletable: true
           },
            {
            chapterTitle: 'S3 Storage Classes', // Added this common topic
            videoUrl: 'https://www.youtube.com/watch?v=aws_sa_s3_classes',
            description: 'Comparing different S3 storage classes (Standard, IA, One Zone-IA, Glacier, Deep Archive) based on access patterns and cost.',
            duration: 15,
            numberOfVideos: 1,
            isCompletable: true
           },
        ]
      },
       // ... many more sections on VPC, Databases (RDS, DynamoDB), IAM, Management Tools (CloudWatch, CloudFormation), etc. ...
       {
         sectionTitle: 'Amazon VPC - Networking',
         chapters: [
            {
             chapterTitle: 'VPC Fundamentals',
             videoUrl: 'https://www.youtube.com/watch?v=aws_sa_vpc_intro',
             description: 'Creating your own isolated network in the AWS cloud, understanding subnets, route tables, and internet gateways.',
             duration: 30,
             numberOfVideos: 2,
             isCompletable: true
            },
            {
             chapterTitle: 'Network Security: Security Groups & NACLs',
             videoUrl: 'https://www.youtube.com/watch?v=aws_sa_vpc_security',
             description: 'Configuring stateful Security Groups and stateless Network Access Control Lists (NACLs) to control traffic to and from your instances.',
             duration: 25,
             numberOfVideos: 2,
             isCompletable: true
            },
            // ... other VPC chapters (VPN, Direct Connect, VPC Peering, Endpoints)
         ]
       },
        {
         sectionTitle: 'Databases on AWS',
         chapters: [
            {
             chapterTitle: 'Amazon RDS',
             videoUrl: 'https://www.youtube.com/watch?v=aws_sa_rds',
             description: 'Managed Relational Databases (PostgreSQL, MySQL, etc.) on AWS. Understanding multi-AZ deployments and read replicas.',
             duration: 30,
             numberOfVideos: 2,
             isCompletable: true
            },
            {
             chapterTitle: 'Amazon DynamoDB',
             videoUrl: 'https://www.youtube.com/watch?v=aws_sa_dynamodb',
             description: 'Introduction to DynamoDB, a fully managed NoSQL database service. Understanding tables, items, and attributes.',
             duration: 25,
             numberOfVideos: 1,
             isCompletable: true
            },
             {
             chapterTitle: 'Amazon Aurora',
             videoUrl: 'https://www.youtube.com/watch?v=aws_sa_aurora',
             description: 'Exploring Amazon Aurora, a MySQL and PostgreSQL-compatible relational database built for the cloud, offering high performance and availability.',
             duration: 20,
             numberOfVideos: 1,
             isCompletable: true
            },
            // ... other database chapters
         ]
       },
        {
         sectionTitle: 'Identity & Access Management (IAM)',
         chapters: [
            {
             chapterTitle: 'IAM Users, Groups, and Roles',
             videoUrl: 'https://www.youtube.com/watch?v=aws_sa_iam_basics',
             description: 'Understanding how to manage access to AWS services and resources securely using IAM.',
             duration: 25,
             numberOfVideos: 1,
             isCompletable: true
            },
             {
             chapterTitle: 'IAM Policies',
             videoUrl: 'https://www.youtube.com/watch?v=aws_sa_iam_policies',
             description: 'Writing and understanding JSON-based IAM policies to define permissions.',
             duration: 30,
             numberOfVideos: 2,
             isCompletable: true
            },
            // ... other IAM chapters
         ]
       },
        {
          sectionTitle: 'Exam Readiness & Review',
          chapters: [
             {
               chapterTitle: 'Review of Key Services',
               videoUrl: 'https://www.youtube.com/watch?v=aws_sa_review1',
               description: 'A comprehensive review session covering the most important AWS services for the exam.',
               duration: 45,
               numberOfVideos: 3,
               isCompletable: true // Review sections should also be completable
             },
              {
               chapterTitle: 'Practice Exam Strategies',
               videoUrl: 'https://www.youtube.com/watch?v=aws_sa_strategy',
               description: 'Tips and strategies for tackling the exam questions and managing your time effectively.',
               duration: 15,
               numberOfVideos: 1,
               isCompletable: true
             },
             // ... maybe a chapter on scheduling the exam or next steps
          ]
        }
    ],
  },
   {
    id: '7',
    title: 'LLM Engineering: Master AI, Large Language Models & Prompting',
    instructor: 'Ligency Team, Ed Donner',
    rating: 4.7,
    reviews: 11956,
    currentPrice: 9.99,
    originalPrice: 64.99,
    level: 'Intermediate',
    thumbnail: '/images/coursebanner14.jpg', // Placeholder image path
    isBestseller: true,
    category: 'AI & Machine Learning',
    description: [
      "Learn how to engineer powerful AI applications using LLMs.",
      "Master prompting techniques and fine-tuning.",
      "Understand the latest advancements in AI and natural language processing."
    ],
    // Existing Fields
    hoursSpent: 25,
    targetAudience: [
      "Developers interested in integrating AI into applications.",
      "Data scientists exploring NLP and LLMs.",
      "Product managers wanting to understand LLM capabilities.",
    ],
    roadmap: [
      "Introduction to LLMs",
      "Basic Prompt Engineering",
      "Advanced Prompting Techniques",
      "Working with LLM APIs",
      "Introduction to Fine-tuning",
      "Building LLM Applications",
      "Ethics and Limitations",
    ],
    courseOutcomes: [
      "Understand how Large Language Models work.",
      "Write effective prompts for various tasks.",
      "Integrate LLMs into your own applications using APIs.",
      "Understand the basics of fine-tuning LLMs.",
      "Identify use cases and limitations of LLMs.",
    ],

    // NEW: Flags for features available in this course
    hasChat: true, // Assuming chat is available for this course
    hasNotebook: true, // Assuming notebook is available for this course

    sections: [
      {
        sectionTitle: 'Introduction to Large Language Models',
        chapters: [
          {
            chapterTitle: 'What are LLMs?',
            videoUrl: 'https://www.youtube.com/watch?v=llm_intro1', // Placeholder URL
            description: 'An overview of what Large Language Models are, their historical context, and how they evolved.',
            duration: 10, // Estimated duration
            numberOfVideos: 1, // Number of video parts
            isCompletable: true // Counts towards progress
          },
          {
            chapterTitle: 'Types of LLMs',
            videoUrl: 'https://www.youtube.com/watch?v=llm_intro2',
            description: 'Distinguishing between different types of LLMs (e.g., generative, discriminative, various architectures) and common popular models.',
            duration: 15,
            numberOfVideos: 1,
            isCompletable: true
          },
          {
            chapterTitle: 'LLM Capabilities and Applications',
            videoUrl: 'https://www.youtube.com/watch?v=llm_intro3',
            description: 'Exploring the wide range of tasks LLMs can perform, such as text generation, summarization, translation, coding, and common real-world applications.',
            duration: 20,
            numberOfVideos: 1,
            isCompletable: true
          },
        ],
      },
       {
        sectionTitle: 'Basic Prompt Engineering',
        chapters: [
          {
            chapterTitle: 'Anatomy of a Prompt',
            videoUrl: 'https://www.youtube.com/watch?v=llm_prompt_basic1',
            description: 'Understanding the essential components that make up an effective prompt: instruction, context, input data, and output indicator.',
            duration: 15,
            numberOfVideos: 1,
            isCompletable: true
          },
          {
            chapterTitle: 'Zero-shot and Few-shot Prompting',
            videoUrl: 'https://www.youtube.com/watch?v=llm_prompt_basic2',
            description: 'Learning fundamental techniques like asking the model to perform a task with no examples (zero-shot) or with a few examples (few-shot).',
            duration: 20,
            numberOfVideos: 1,
            isCompletable: true
          },
          {
            chapterTitle: 'Temperature and Top-P',
            videoUrl: 'https://www.youtube.com/watch?v=llm_prompt_basic3',
            description: 'Controlling the creativity and randomness of LLM outputs by adjusting generation parameters like temperature and top-p sampling.',
            duration: 10,
            numberOfVideos: 1,
            isCompletable: true
          },
        ],
      },
      {
        sectionTitle: 'Advanced Prompting Techniques',
        chapters: [
          {
            chapterTitle: 'Chain-of-Thought Prompting',
            videoUrl: 'https://www.youtube.com/watch?v=llm_prompt_advanced1',
            description: 'Enhancing the model\'s reasoning abilities by prompting it to explain its steps before giving the final answer.',
            duration: 25,
            numberOfVideos: 2,
            isCompletable: true
          },
          {
            chapterTitle: 'Tree-of-Thoughts Prompting',
            videoUrl: 'https://www.youtube.com/watch?v=llm_prompt_advanced2',
            description: 'Exploring how to prompt models to consider multiple reasoning paths and self-evaluate to improve complex problem-solving.',
            duration: 30,
            numberOfVideos: 2,
            isCompletable: true
          },
          {
            chapterTitle: 'Role Playing and Persona Prompts',
            videoUrl: 'https://www.youtube.com/watch?v=llm_prompt_advanced3',
            description: 'Guiding the model\'s output style and content by assigning it a specific role or persona in the prompt.',
            duration: 20,
            numberOfVideos: 1,
            isCompletable: true
          },
           {
            chapterTitle: 'Prompt Chaining and Structuring', // Added a chapter on combining techniques
            videoUrl: 'https://www.youtube.com/watch?v=llm_prompt_advanced4',
            description: 'Combining multiple prompting techniques and structuring prompts for longer, multi-turn conversations or complex tasks.',
            duration: 15,
            numberOfVideos: 1,
            isCompletable: true
          },
        ],
      },
       // ... more sections on APIs, Fine-tuning, Applications, Ethics ...
       {
         sectionTitle: 'Working with LLM APIs',
         chapters: [
           {
             chapterTitle: 'Introduction to LLM APIs',
             videoUrl: 'https://www.youtube.com/watch?v=llm_api_intro',
             description: 'Understanding how to programmatically interact with LLMs provided by services like OpenAI, Anthropic, Google, etc.',
             duration: 15,
             numberOfVideos: 1,
             isCompletable: true
           },
           {
             chapterTitle: 'Making API Calls (Examples)',
             videoUrl: 'https://www.youtube.com/watch?v=llm_api_calls',
             description: 'Hands-on examples using Python or Node.js to send prompts to an LLM API and process the responses.',
             duration: 30,
             numberOfVideos: 2,
             isCompletable: true
           },
           // ... other API chapters (Rate Limiting, Error Handling, Cost Management)
         ]
       },
       {
         sectionTitle: 'Introduction to Fine-tuning',
         chapters: [
           {
             chapterTitle: 'Why Fine-tune?',
             videoUrl: 'https://www.youtube.com/watch?v=llm_finetune_why',
             description: 'Understanding when and why fine-tuning a pre-trained LLM on a specific dataset is necessary.',
             duration: 10,
             numberOfVideos: 1,
             isCompletable: true
           },
            {
             chapterTitle: 'Basics of Fine-tuning Process',
             videoUrl: 'https://www.youtube.com/watch?v=llm_finetune_basics',
             description: 'An overview of the steps involved in fine-tuning, including data preparation and model training.',
             duration: 20,
             numberOfVideos: 1,
             isCompletable: true
           },
           // ... other fine-tuning chapters (Techniques like LoRA, preparing data)
         ]
       },
        {
         sectionTitle: 'Building LLM Applications',
         chapters: [
           {
             chapterTitle: 'Use Case: Chatbot Development',
             videoUrl: 'https://www.youtube.com/watch?v=llm_app_chatbot',
             description: 'Implementing a simple chatbot application using LLMs and managing conversation history.',
             duration: 40,
             numberOfVideos: 3,
             isCompletable: true
           },
            {
             chapterTitle: 'Use Case: Text Summarization Tool',
             videoUrl: 'https://www.youtube.com/watch?v=llm_app_summarizer',
             description: 'Building a tool that uses an LLM to summarize articles or documents.',
             duration: 30,
             numberOfVideos: 2,
             isCompletable: true
           },
           // ... other application use cases (Q&A, Code Generation, etc.)
         ]
       },
        {
         sectionTitle: 'Ethics, Limitations, and Future of LLMs',
         chapters: [
           {
             chapterTitle: 'Ethical Considerations',
             videoUrl: 'https://www.youtube.com/watch?v=llm_ethics',
             description: 'Discussing ethical issues related to LLMs, such as bias, fairness, misinformation, and privacy.',
             duration: 20,
             numberOfVideos: 1,
             isCompletable: true
           },
           {
             chapterTitle: 'Limitations of LLMs',
             videoUrl: 'https://www.youtube.com/watch?v=llm_limitations',
             description: 'Understanding the current limitations, including hallucination, lack of common sense reasoning, and computational costs.',
             duration: 15,
             numberOfVideos: 1,
             isCompletable: true
           },
           {
             chapterTitle: 'The Future of LLMs',
             videoUrl: 'https://www.youtube.com/watch?v=llm_future',
             description: 'Looking ahead at potential advancements and the evolving landscape of Large Language Models and AI.',
             duration: 10,
             numberOfVideos: 1,
             isCompletable: true
           },
         ]
       }
    ],
  },
  {
    id: '8',
    title: 'The Complete Agentic AI Engineering Course (2025)',
    instructor: 'Ed Donner, Ligency Team',
    rating: 4.8,
    reviews: 3582,
    currentPrice: 9.99,
    originalPrice: 44.99,
    level: 'Beginner',
    thumbnail: '/images/coursebanner13.jpg', // Placeholder image path
    isBestseller: true,
    category: 'AI & Machine Learning',
    description: [
      "Build advanced AI systems using agentic design principles.",
      "Integrate multiple AI models and tools.",
      "Create autonomous AI agents for various tasks."
    ],
    // Existing Fields
    hoursSpent: 22,
    targetAudience: [
      "Developers and researchers interested in autonomous AI.",
      "Those who have basic knowledge of LLMs and want to build systems.",
      "Innovators looking to create AI-driven automation.",
    ],
    roadmap: [
      "Introduction to Agentic AI",
      "Agent Architectures",
      "Integrating Tools and APIs",
      "Memory and State Management",
      "Multi-Agent Systems",
      "Building Agentic Applications (Frameworks)",
      "Evaluating and Deploying Agents",
    ],
    courseOutcomes: [
      "Understand the principles of agentic design.",
      "Design and build simple and complex AI agents.",
      "Integrate agents with external tools and data sources.",
      "Create systems with multiple interacting agents.",
      "Use popular agentic frameworks (e.g., LangChain, LlamaIndex).",
    ],

    // NEW: Flags for features available in this course
    hasChat: true, // Assuming chat is available for this course
    hasNotebook: true, // Assuming notebook is available for this course

    sections: [
      {
        sectionTitle: 'Foundations of Agentic AI',
        chapters: [
          {
            chapterTitle: 'What is an AI Agent?',
            videoUrl: 'https://www.youtube.com/watch?v=agentic_intro1', // Placeholder URL
            description: 'Defining what constitutes an AI agent in the context of LLMs and autonomous systems, and key characteristics.',
            duration: 10, // Estimated duration
            numberOfVideos: 1, // Number of video parts
            isCompletable: true // Counts towards progress
          },
          {
            chapterTitle: 'Why Agentic Design?',
            videoUrl: 'https://www.youtube.com/watch?v=agentic_intro2',
            description: 'Discussing the advantages of using an agentic approach compared to simple one-off prompting for complex tasks requiring planning, memory, and tool use.',
            duration: 15,
            numberOfVideos: 1,
            isCompletable: true
          },
          {
            chapterTitle: 'Components of an Agent',
            videoUrl: 'https://www.youtube.com/watch?v=agentic_intro3',
            description: 'Breaking down the core components: the Language Model (LLM), Memory, Planning/Reasoning module, and Tools/Actions.',
            duration: 20,
            numberOfVideos: 1,
            isCompletable: true
          },
           {
            chapterTitle: 'Agent Architectures Overview', // Added as part of roadmap
            videoUrl: 'https://www.youtube.com/watch?v=agentic_arch_overview',
            description: 'Briefly looking at different ways agents can be structured (e.g., ReAct, MRKL).',
            duration: 10,
            numberOfVideos: 1,
            isCompletable: true
          },
        ],
      },
       {
        sectionTitle: 'Tools and External Integrations',
        chapters: [
          {
            chapterTitle: 'Connecting Agents to the Internet',
            videoUrl: 'https://www.youtube.com/watch?v=agentic_tools1',
            description: 'Integrating web browsing or search tools to give agents access to up-to-date information.',
            duration: 25,
            numberOfVideos: 2,
            isCompletable: true
          },
          {
            chapterTitle: 'Using Calculation Tools',
            videoUrl: 'https://www.youtube.com/watch?v=agentic_tools2',
            description: 'Providing agents with access to calculators or code interpreters for accurate numerical tasks.',
            duration: 15,
            numberOfVideos: 1,
            isCompletable: true
          },
          {
            chapterTitle: 'Interacting with Databases',
            videoUrl: 'https://www.youtube.com/watch?v=agentic_tools3',
            description: 'Enabling agents to read from and write to databases or knowledge bases.',
            duration: 30,
            numberOfVideos: 2,
            isCompletable: true
          },
          {
            chapterTitle: 'Creating Custom Tools',
            videoUrl: 'https://www.youtube.com/watch?v=agentic_tools4',
            description: 'Developing your own specialized tools for agents to interact with specific APIs or systems.',
            duration: 30,
            numberOfVideos: 2,
            isCompletable: true
          },
        ],
      },
       {
         sectionTitle: 'Memory and State Management', // Added as per roadmap
         chapters: [
           {
             chapterTitle: 'Short-Term Memory: Context Windows',
             videoUrl: 'https://www.youtube.com/watch?v=agentic_memory1',
             description: 'Understanding the limitations of LLM context windows and managing recent conversation history.',
             duration: 15,
             numberOfVideos: 1,
             isCompletable: true
           },
            {
             chapterTitle: 'Long-Term Memory: Vector Databases',
             videoUrl: 'https://www.youtube.com/watch?v=agentic_memory2',
             description: 'Implementing mechanisms for agents to recall past information using techniques like Retrieval Augmented Generation (RAG) with vector databases.',
             duration: 30,
             numberOfVideos: 2,
             isCompletable: true
           },
           {
             chapterTitle: 'Managing Agent State',
             videoUrl: 'https://www.youtube.com/watch?v=agentic_memory3',
             description: 'Keeping track of the agent\'s current task, steps taken, and progress towards a goal.',
             duration: 20,
             numberOfVideos: 1,
             isCompletable: true
           },
         ]
       },
      {
        sectionTitle: 'Building Agentic Applications (with Frameworks)',
        chapters: [
          {
            chapterTitle: 'Introduction to Agent Frameworks',
            videoUrl: 'https://www.youtube.com/watch?v=agentic_frameworks_intro',
            description: 'Overview of popular libraries and frameworks (like LangChain, LlamaIndex, Autogen) that simplify building agents.',
            duration: 15,
            numberOfVideos: 1,
            isCompletable: true
          },
          {
            chapterTitle: 'Building a Simple Agent with LangChain',
            videoUrl: 'https://www.youtube.com/watch?v=agentic_frameworks_lc_simple',
            description: 'Hands-on example of creating a basic agent that can use a tool using the LangChain library.',
            duration: 40,
            numberOfVideos: 3,
            isCompletable: true
          },
          {
            chapterTitle: 'Building an Agent with LlamaIndex',
            videoUrl: 'https://www.youtube.com/watch?v=agentic_frameworks_li_simple',
            description: 'Another step-by-step example building an agent, potentially focusing on data indexing and retrieval using LlamaIndex.',
            duration: 35,
            numberOfVideos: 2,
            isCompletable: true
          },
           {
             chapterTitle: 'Introduction to Multi-Agent Systems', // Moved from roadmap
             videoUrl: 'https://www.youtube.com/watch?v=agentic_multiagent_intro',
             description: 'Understanding the concept of multiple agents collaborating to solve complex problems.',
             duration: 20,
             numberOfVideos: 1,
             isCompletable: true
           },
          {
            chapterTitle: 'Creating a Multi-Agent System Example',
            videoUrl: 'https://www.youtube.com/watch?v=agentic_frameworks_multi',
            description: 'Designing interaction patterns and building a simple application where multiple agents work together (e.g., using AutoGen or similar patterns).',
            duration: 50,
            numberOfVideos: 3,
            isCompletable: true
          },
        ],
      },
       // ... more sections on Planning, Evaluation ...
       {
         sectionTitle: 'Planning and Reasoning', // Added as per components/roadmap
         chapters: [
           {
             chapterTitle: 'Agent Planning Techniques',
             videoUrl: 'https://www.youtube.com/watch?v=agentic_planning1',
             description: 'Methods agents use to break down complex goals into smaller steps (e.g., ReAct, MRKL, Plan-and-Execute).',
             duration: 25,
             numberOfVideos: 2,
             isCompletable: true
           },
           {
             chapterTitle: 'Self-Correction and Reflection',
             videoUrl: 'https://www.youtube.com/watch?v=agentic_planning2',
             description: 'Teaching agents to evaluate their own outputs and correct errors.',
             duration: 20,
             numberOfVideos: 1,
             isCompletable: true
           },
         ]
       },
        {
         sectionTitle: 'Evaluating and Deploying Agents', // Added as per roadmap
         chapters: [
           {
             chapterTitle: 'Evaluating Agent Performance',
             videoUrl: 'https://www.youtube.com/watch?v=agentic_eval',
             description: 'Strategies and metrics for testing and evaluating how well your AI agents perform tasks.',
             duration: 20,
             numberOfVideos: 1,
             isCompletable: true
           },
            {
             chapterTitle: 'Deployment Considerations',
             videoUrl: 'https://www.youtube.com/watch?v=agentic_deploy',
             description: 'Factors to consider when deploying agents into production environments.',
             duration: 15,
             numberOfVideos: 1,
             isCompletable: true
           },
         ]
        }
    ],
  },
   {
    id: '9',
    title: 'Machine Learning A-Z: AI, Python & R + ChatGPT Prize',
    instructor: 'Kirill Eremenko, Hadelin de Ponteves,...',
    rating: 4.5,
    reviews: 197451,
    currentPrice: 14.99,
    originalPrice: 84.99,
    level: 'Advanced', // Keeping 'Advanced' as per your original JSON.
    thumbnail: '/images/coursebanner12.jpg', // Placeholder image path
    isBestseller: true,
    category: 'AI & Machine Learning',
    description: [
      "Learn Machine Learning from A-Z with Python and R.",
      "Covers topics like Regression, Classification, Clustering, Reinforcement Learning, NLP, and AI.",
      "Hands-on implementations of algorithms."
    ],
    // Existing Fields
    hoursSpent: 70,
    targetAudience: [
      "Anyone interested in Machine Learning.",
      "Individuals with basic programming knowledge in Python or R.",
      "Aspiring data scientists and AI engineers.",
    ],
    roadmap: [
      "Data Preprocessing",
      "Regression Models",
      "Classification Models",
      "Clustering Techniques",
      "Association Rule Learning",
      "Reinforcement Learning",
      "Natural Language Processing",
      "Deep Learning Introduction",
      "Model Selection & Boosting",
      "Putting It All Together",
    ],
    courseOutcomes: [
      "Understand the theory and intuition behind ML algorithms.",
      "Implement ML models using Python and R.",
      "Apply ML algorithms to solve real-world problems.",
      "Evaluate and compare different ML models.",
      "Understand core concepts in NLP and Deep Learning.",
    ],

    // NEW: Flags for features available in this course
    hasChat: true, // Assuming chat is available for this course
    hasNotebook: true, // Assuming notebook is available for this course

    sections: [
      {
        sectionTitle: 'Data Preprocessing',
        chapters: [
          {
            chapterTitle: 'Handling Missing Data',
            videoUrl: 'https://www.youtube.com/watch?v=ml_az_preprocessing1', // Placeholder URL
            description: 'Techniques for dealing with incomplete datasets, including imputation and deletion methods using libraries like Pandas.',
            duration: 20, // Estimated duration
            numberOfVideos: 1, // Number of video parts
            isCompletable: true // Counts towards progress
          },
          {
            chapterTitle: 'Encoding Categorical Data',
            videoUrl: 'https://www.youtube.com/watch?v=ml_az_preprocessing2',
            description: 'Converting text-based categorical variables into numerical representations suitable for machine learning algorithms (e.g., One-Hot Encoding, Label Encoding).',
            duration: 25,
            numberOfVideos: 2,
            isCompletable: true
          },
          {
            chapterTitle: 'Splitting the Dataset (Train/Test)',
            videoUrl: 'https://www.youtube.com/watch?v=ml_az_preprocessing3',
            description: 'Dividing your dataset into training and testing sets to evaluate model performance effectively and prevent overfitting.',
            duration: 15,
            numberOfVideos: 1,
            isCompletable: true
          },
          {
            chapterTitle: 'Feature Scaling',
            videoUrl: 'https://www.youtube.com/watch?v=ml_az_preprocessing4',
            description: 'Normalizing or standardizing features to a common range or distribution, which is crucial for many ML algorithms (e.g., Standardization, Normalization).',
            duration: 20,
            numberOfVideos: 1,
            isCompletable: true
          },
        ],
      },
       {
        sectionTitle: 'Regression Models',
        chapters: [
          {
            chapterTitle: 'Simple Linear Regression',
            videoUrl: 'https://www.youtube.com/watch?v=ml_az_regression1',
            description: 'Understanding the theory and implementation of predicting a continuous output variable based on a single input feature.',
            duration: 25,
            numberOfVideos: 2,
            isCompletable: true
          },
          {
            chapterTitle: 'Multiple Linear Regression',
            videoUrl: 'https://www.youtube.com/watch?v=ml_az_regression2',
            description: 'Extending linear regression to predict a continuous output based on multiple input features.',
            duration: 30,
            numberOfVideos: 2,
            isCompletable: true
          },
          {
            chapterTitle: 'Polynomial Regression',
            videoUrl: 'https://www.youtube.com/watch?v=ml_az_regression3',
            description: 'Modeling non-linear relationships between features and the target variable by using polynomial terms.',
            duration: 20,
            numberOfVideos: 1,
            isCompletable: true
          },
          {
            chapterTitle: 'Support Vector Regression (SVR)',
            videoUrl: 'https://www.youtube.com/watch?v=ml_az_regression4',
            description: 'An advanced regression technique that finds the best fit line within a certain margin of error.',
            duration: 35,
            numberOfVideos: 2,
            isCompletable: true
          },
           {
            chapterTitle: 'Decision Tree Regression', // Added
            videoUrl: 'https://www.youtube.com/watch?v=ml_az_regression5',
            description: 'Using a tree structure to make decisions and predict continuous values.',
            duration: 20,
            numberOfVideos: 1,
            isCompletable: true
           },
           {
            chapterTitle: 'Random Forest Regression', // Added
            videoUrl: 'https://www.youtube.com/watch?v=ml_az_regression6',
            description: 'Ensemble learning method using multiple decision trees for improved regression accuracy.',
            duration: 25,
            numberOfVideos: 2,
            isCompletable: true
           },
        ],
      },
      {
        sectionTitle: 'Classification Models',
        chapters: [
          {
            chapterTitle: 'Logistic Regression',
            videoUrl: 'https://www.youtube.com/watch?v=ml_az_classification1',
            description: 'Predicting the probability of a binary outcome using a logistic function.',
            duration: 25,
            numberOfVideos: 2,
            isCompletable: true
          },
          {
            chapterTitle: 'K-Nearest Neighbors (K-NN)',
            videoUrl: 'https://www.youtube.com/watch?v=ml_az_classification2',
            description: 'Classifying data points based on the majority class of their nearest neighbors.',
            duration: 20,
            numberOfVideos: 1,
            isCompletable: true
          },
          {
            chapterTitle: 'Support Vector Machine (SVM)',
            videoUrl: 'https://www.youtube.com/watch?v=ml_az_classification3',
            description: 'Finding the optimal hyperplane that best separates different classes in the feature space.',
            duration: 30,
            numberOfVideos: 2,
            isCompletable: true
          },
          {
            chapterTitle: 'Kernel SVM', // Common extension
            videoUrl: 'https://www.youtube.com/watch?v=ml_az_classification4',
            description: 'Using kernel functions to apply SVM to non-linearly separable data.',
            duration: 25,
            numberOfVideos: 1,
            isCompletable: true
          },
          {
            chapterTitle: 'Decision Tree Classification',
            videoUrl: 'https://www.youtube.com/watch?v=ml_az_classification5',
            description: 'A tree-like model where decisions are made based on features to classify data points.',
            duration: 20,
            numberOfVideos: 1,
            isCompletable: true
          },
           {
            chapterTitle: 'Random Forest Classification', // Ensemble method
            videoUrl: 'https://www.youtube.com/watch?v=ml_az_classification6',
            description: 'Ensemble method that builds multiple decision trees and combines their predictions for robust classification.',
            duration: 25,
            numberOfVideos: 2,
            isCompletable: true
           },
           {
            chapterTitle: 'Naive Bayes', // Common simple classifier
            videoUrl: 'https://www.youtube.com/watch?v=ml_az_classification7',
            description: 'A probabilistic classifier based on Bayes\' theorem, assuming independence between features.',
            duration: 15,
            numberOfVideos: 1,
            isCompletable: true
           },
        ],
      },
       // ... many more sections on Clustering, Association Rules, Reinforcement Learning, NLP, Deep Learning ...

       {
        sectionTitle: 'Clustering Techniques',
        chapters: [
          {
            chapterTitle: 'K-Means Clustering',
            videoUrl: 'https://www.youtube.com/watch?v=ml_az_clustering1',
            description: 'An unsupervised learning algorithm for partitioning data into K distinct groups (clusters).',
            duration: 20,
            numberOfVideos: 1,
            isCompletable: true
          },
          {
            chapterTitle: 'Hierarchical Clustering',
            videoUrl: 'https://www.youtube.com/watch?v=ml_az_clustering2',
            description: 'Building a hierarchy of clusters, either agglomerative (bottom-up) or divisive (top-down).',
            duration: 25,
            numberOfVideos: 2,
            isCompletable: true
          },
           {
            chapterTitle: 'DBSCAN', // Another common clustering algorithm
            videoUrl: 'https://www.youtube.com/watch?v=ml_az_clustering3',
            description: 'Density-Based Spatial Clustering of Applications with Noise. Identifying clusters based on data point density.',
            duration: 15,
            numberOfVideos: 1,
            isCompletable: true
           },
        ]
       },
        {
        sectionTitle: 'Association Rule Learning',
        chapters: [
          {
            chapterTitle: 'Apriori Algorithm',
            videoUrl: 'https://www.youtube.com/watch?v=ml_az_association1',
            description: 'Discovering interesting relationships (association rules) between items in large datasets (e.g., market basket analysis).',
            duration: 30,
            numberOfVideos: 2,
            isCompletable: true
          },
           {
            chapterTitle: 'Eclat Algorithm', // Another algorithm
            videoUrl: 'https://www.youtube.com/watch?v=ml_az_association2',
            description: 'An alternative algorithm for association rule mining using vertical data format.',
            duration: 20,
            numberOfVideos: 1,
            isCompletable: true
           },
        ]
       },
        {
        sectionTitle: 'Reinforcement Learning',
        chapters: [
          {
            chapterTitle: 'Introduction to Reinforcement Learning',
            videoUrl: 'https://www.youtube.com/watch?v=ml_az_rl1',
            description: 'Understanding the framework of an agent interacting with an environment, learning through trial and error via rewards.',
            duration: 20,
            numberOfVideos: 1,
            isCompletable: true
          },
          {
            chapterTitle: 'Upper Confidence Bound (UCB)', // Example Algorithm
            videoUrl: 'https://www.youtube.com/watch?v=ml_az_rl2',
            description: 'Implementing an exploration-exploitation strategy for multi-armed bandit problems.',
            duration: 25,
            numberOfVideos: 1,
            isCompletable: true
          },
           {
            chapterTitle: 'Thompson Sampling', // Another example
            videoUrl: 'https://www.youtube.com/watch?v=ml_az_rl3',
            description: 'A probabilistic approach to the multi-armed bandit problem.',
            duration: 20,
            numberOfVideos: 1,
            isCompletable: true
           },
        ]
       },
       {
        sectionTitle: 'Natural Language Processing (NLP)',
        chapters: [
          {
            chapterTitle: 'Introduction to NLP',
            videoUrl: 'https://www.youtube.com/watch?v=ml_az_nlp1',
            description: 'Overview of Natural Language Processing tasks and common techniques for working with text data.',
            duration: 15,
            numberOfVideos: 1,
            isCompletable: true
          },
          {
            chapterTitle: 'Bag-of-Words Model',
            videoUrl: 'https://www.youtube.com/watch?v=ml_az_nlp2',
            description: 'Representing text as a collection of words, disregarding grammar and word order.',
            duration: 20,
            numberOfVideos: 1,
            isCompletable: true
          },
           {
            chapterTitle: 'TF-IDF',
            videoUrl: 'https://www.youtube.com/watch?v=ml_az_nlp3',
            description: 'Term Frequency-Inverse Document Frequency: A statistical measure used to evaluate how important a word is to a document.',
            duration: 20,
            numberOfVideos: 1,
            isCompletable: true
           },
           {
            chapterTitle: 'Naive Bayes for Text Classification', // Applying classifier to NLP
            videoUrl: 'https://www.youtube.com/watch?v=ml_az_nlp4',
            description: 'Using the Naive Bayes algorithm to classify text documents (e.g., spam detection, sentiment analysis).',
            duration: 25,
            numberOfVideos: 2,
            isCompletable: true
           },
        ]
       },
        {
        sectionTitle: 'Deep Learning Introduction',
        chapters: [
          {
            chapterTitle: 'Introduction to Artificial Neural Networks (ANN)',
            videoUrl: 'https://www.youtube.com/watch?v=ml_az_dl1',
            description: 'Understanding the basics of neural networks: neurons, layers, weights, and activation functions.',
            duration: 25,
            numberOfVideos: 2,
            isCompletable: true
          },
          {
            chapterTitle: 'Implementing an ANN',
            videoUrl: 'https://www.youtube.com/watch?v=ml_az_dl2',
            description: 'Building a simple neural network using a library like TensorFlow or PyTorch.',
            duration: 30,
            numberOfVideos: 2,
            isCompletable: true
          },
           {
            chapterTitle: 'Convolutional Neural Networks (CNN) Intro', // Common DL type
            videoUrl: 'https://www.youtube.com/watch?v=ml_az_dl3',
            description: 'Brief introduction to CNNs, commonly used for image data.',
            duration: 15,
            numberOfVideos: 1,
            isCompletable: true
           },
           {
            chapterTitle: 'Recurrent Neural Networks (RNN) Intro', // Common DL type
            videoUrl: 'https://www.youtube.com/watch?v=ml_az_dl4',
            description: 'Brief introduction to RNNs, commonly used for sequence data like text.',
            duration: 15,
            numberOfVideos: 1,
            isCompletable: true
           },
        ]
       },
        {
        sectionTitle: 'Model Selection & Boosting',
        chapters: [
          {
            chapterTitle: 'Evaluating Model Performance',
            videoUrl: 'https://www.youtube.com/watch?v=ml_az_eval1',
            description: 'Metrics for evaluating regression (MSE, R²) and classification (Accuracy, Precision, Recall, F1-Score) models.',
            duration: 25,
            numberOfVideos: 2,
            isCompletable: true
          },
          {
            chapterTitle: 'K-Fold Cross Validation',
            videoUrl: 'https://www.youtube.com/watch?v=ml_az_eval2',
            description: 'A technique for evaluating model performance robustly by splitting data into multiple folds.',
            duration: 20,
            numberOfVideos: 1,
            isCompletable: true
          },
           {
            chapterTitle: 'Grid Search for Hyperparameter Tuning',
            videoUrl: 'https://www.youtube.com/watch?v=ml_az_eval3',
            description: 'Finding the best hyperparameters for your models to optimize performance.',
            duration: 20,
            numberOfVideos: 1,
            isCompletable: true
           },
            {
            chapterTitle: 'XGBoost & LightGBM', // Popular boosting algorithms
            videoUrl: 'https://www.youtube.com/watch?v=ml_az_boosting',
            description: 'Introduction to powerful gradient boosting frameworks like XGBoost and LightGBM.',
            duration: 30,
            numberOfVideos: 2,
            isCompletable: true
           },
        ]
       },
        {
         sectionTitle: 'Putting It All Together & Case Studies',
         chapters: [
            {
             chapterTitle: 'End-to-End Project Example',
             videoUrl: 'https://www.youtube.com/watch?v=ml_az_project1',
             description: 'Working through a complete machine learning project lifecycle from data preprocessing to model deployment considerations.',
             duration: 60,
             numberOfVideos: 3,
             isCompletable: true
            },
            {
             chapterTitle: 'Case Study: Image Classification',
             videoUrl: 'https://www.youtube.com/watch?v=ml_az_casestudy1',
             description: 'Applying CNNs to an image classification problem.',
             duration: 40,
             numberOfVideos: 2,
             isCompletable: true
            },
            {
             chapterTitle: 'Case Study: Sentiment Analysis',
             videoUrl: 'https://www.youtube.com/watch?v=ml_az_casestudy2',
             description: 'Applying NLP techniques to determine the sentiment of text data.',
             duration: 40,
             numberOfVideos: 2,
             isCompletable: true
            },
             {
             chapterTitle: 'Course Conclusion & Next Steps',
             videoUrl: 'https://www.youtube.com/watch?v=ml_az_conclusion',
             description: 'Recap of the course, tips for continued learning, and potential career paths.',
             duration: 10,
             numberOfVideos: 1,
             isCompletable: true
            },
         ]
        }

    ],
  },
   {
    id: '10',
    title: 'PMP Certification Exam Prep Course 35 PDU Contact Hours/PDU',
    instructor: 'TIA Education, Andrew Ramdayal',
    rating: 4.7,
    reviews: 134500,
    currentPrice: 15.99,
    originalPrice: 89.99,
    level: 'Advanced', // Keeping 'Advanced' as per your original JSON. PMP is generally considered advanced level certification preparation.
    thumbnail: '/images/coursebanner1.jpg', // Placeholder image path
    isBestseller: true,
    category: 'Project Management',
    description: [
      "Everything you need to pass the PMP Exam on your first try.",
      "35 Hours of Project Management Education/PDU.",
      "Covers Agile, Hybrid, and Predictive methodologies."
    ],
    // Existing Fields
    hoursSpent: 40, // Content hours, study time varies
    targetAudience: [
      "Project Managers preparing for the PMP Exam.",
      "Team Leads and aspiring PMs seeking certification.",
      "Professionals needing 35 contact hours for PMP eligibility.",
    ],
    roadmap: [
      "Introduction & Foundation",
      "Predictive Process Groups (Initiating, Planning, Executing, M&C, Closing)",
      "Agile & Hybrid Methodologies",
      "Business Environment",
      "Exam Content Outline Domains (People, Process, Business Environment)",
      "Exam Strategies & Practice Questions",
    ],
    courseOutcomes: [
      "Pass the PMP Certification Exam on the first attempt.",
      "Meet the 35 contact hour requirement for the exam application.",
      "Master project management principles (Predictive, Agile, Hybrid).",
      "Understand the PMP Exam Content Outline.",
    ],

    // NEW: Flags for features available in this course
    hasChat: true, // Assuming chat is available for this course (useful for study groups)
    hasNotebook: true, // Assuming notebook is available for this course (useful for taking notes)

    sections: [
      {
        sectionTitle: 'Introduction and Project Management Framework',
        chapters: [
          {
            chapterTitle: 'Welcome and Course Overview',
            videoUrl: 'https://www.youtube.com/embed/5NzfqW_Yt6Y?si=uB8OGi_t2as9URqZ', // Placeholder URL
            description: 'Setting expectations, outlining the course structure, and how it aligns with the PMP Exam Content Outline (ECO).',
            duration: 15, // Estimated duration
            numberOfVideos: 1, // Number of video parts
            isCompletable: true // Counts towards progress
          },
          {
            chapterTitle: 'What is a Project? What is PM?',
            videoUrl: 'https://www.youtube.com/embed/5NzfqW_Yt6Y?si=uB8OGi_t2as9URqZ',
            description: 'Defining key project management terms like "project," "project management," "portfolio," and "program." Understanding project characteristics.',
            duration: 20,
            numberOfVideos: 1,
            isCompletable: true
          },
          {
            chapterTitle: 'The PMBOK Guide & Standards',
            videoUrl: 'https://www.youtube.com/embed/5NzfqW_Yt6Y?si=uB8OGi_t2as9URqZ',
            description: 'Understanding the role of the PMBOK Guide and other PMI standards in project management and the PMP exam.',
            duration: 15,
            numberOfVideos: 1,
            isCompletable: true
          },
          {
            chapterTitle: 'Project Life Cycles',
            videoUrl: 'https://www.youtube.com/embed/5NzfqW_Yt6Y?si=uB8OGi_t2as9URqZ',
            description: 'Exploring different project life cycle types: predictive (waterfall), iterative, incremental, and agile/hybrid.',
            duration: 25,
            numberOfVideos: 2,
            isCompletable: true
          },
        ],
      },
       {
        sectionTitle: 'Predictive Process Groups: Initiating',
        chapters: [
          {
            chapterTitle: 'Develop Project Charter',
            videoUrl: 'https://www.youtube.com/embed/5NzfqW_Yt6Y?si=uB8OGi_t2as9URqZ',
            description: 'Learning about the Project Charter: its purpose, key elements, and how it formally authorizes the project.',
            duration: 20,
            numberOfVideos: 1,
            isCompletable: true
          },
          {
            chapterTitle: 'Identify Stakeholders',
            videoUrl: 'https://www.youtube.com/embed/5NzfqW_Yt6Y?si=uB8OGi_t2as9URqZ',
            description: 'Techniques and importance of identifying all people or groups impacted by the project and analyzing their influence.',
            duration: 25,
            numberOfVideos: 2,
            isCompletable: true
          },
        ],
      },
      {
        sectionTitle: 'Predictive Process Groups: Planning',
        chapters: [
           {
            chapterTitle: 'Develop Project Management Plan',
            videoUrl: 'https://www.youtube.com/embed/5NzfqW_Yt6Y?si=uB8OGi_t2as9URqZ',
            description: 'Understanding the Project Management Plan as the comprehensive document outlining how the project will be executed, monitored, controlled, and closed.',
            duration: 30,
            numberOfVideos: 2,
            isCompletable: true
           },
           {
            chapterTitle: 'Plan Scope Management',
            videoUrl: 'https://www.youtube.com/embed/5NzfqW_Yt6Y?si=uB8OGi_t2as9URqZ',
            description: 'Defining how the project scope will be defined, validated, and controlled.',
            duration: 20,
            numberOfVideos: 1,
            isCompletable: true
           },
           {
            chapterTitle: 'Create WBS (Work Breakdown Structure)',
            videoUrl: 'https://www.youtube.com/embed/5NzfqW_Yt6Y?si=uB8OGi_t2as9URqZ',
            description: 'Decomposing project deliverables into smaller, more manageable components.',
            duration: 25,
            numberOfVideos: 2,
            isCompletable: true
           },
           {
            chapterTitle: 'Plan Schedule Management',
            videoUrl: 'https://www.youtube.com/embed/5NzfqW_Yt6Y?si=uB8OGi_t2as9URqZ',
            description: 'Establishing the policies, procedures, and documentation for planning, developing, managing, executing, and controlling the project schedule.',
            duration: 15,
            numberOfVideos: 1,
            isCompletable: true
           },
           { // Example of another planning chapter
             chapterTitle: 'Estimate Activity Durations',
             videoUrl: 'https://www.youtube.com/embed/5NzfqW_Yt6Y?si=uB8OGi_t2as9URqZ',
             description: 'Estimating the number of work periods needed to complete individual schedule activities.',
             duration: 20,
             numberOfVideos: 1,
             isCompletable: true
           },
           { // Example of another planning chapter
             chapterTitle: 'Develop Schedule',
             videoUrl: 'https://www.youtube.com/embed/5NzfqW_Yt6Y?si=uB8OGi_t2as9URqZ',
             description: 'Analyzing activity sequences, durations, resource requirements, and schedule constraints to create the project schedule model.',
             duration: 30,
             numberOfVideos: 2,
             isCompletable: true
           },
           // ... many more planning chapters (Cost, Quality, Resources, Communications, Risk, Procurement, Stakeholder) following this structure ...
        ]
      },
       {
        sectionTitle: 'Predictive Process Groups: Executing',
        chapters: [ // Example of Executing chapters
          {
            chapterTitle: 'Direct and Manage Project Work',
            videoUrl: 'https://www.youtube.com/embed/5NzfqW_Yt6Y?si=uB8OGi_t2as9URqZ',
            description: 'Leading and performing the work defined in the project management plan and implementing approved changes.',
            duration: 25,
            numberOfVideos: 2,
            isCompletable: true
          },
          {
            chapterTitle: 'Manage Communications',
            videoUrl: 'https://www.youtube.com/embed/5NzfqW_Yt6Y?si=uB8OGi_t2as9URqZ',
            description: 'Ensuring timely and appropriate collection, creation, distribution, storage, retrieval, management, control, and disposition of project information.',
            duration: 20,
            numberOfVideos: 1,
            isCompletable: true
          },
          // ... other executing chapters (Manage Team, Conduct Procurements, Implement Risk Responses, etc.)
        ]
       },
        {
        sectionTitle: 'Predictive Process Groups: Monitoring & Controlling',
        chapters: [ // Example of M&C chapters
          {
            chapterTitle: 'Monitor and Control Project Work',
            videoUrl: 'https://www.youtube.com/embed/5NzfqW_Yt6Y?si=uB8OGi_t2as9URqZ',
            description: 'Tracking, reviewing, and reporting project progress to meet the performance objectives defined in the project management plan.',
            duration: 25,
            numberOfVideos: 2,
            isCompletable: true
          },
          {
            chapterTitle: 'Perform Integrated Change Control',
            videoUrl: 'https://www.youtube.com/embed/5NzfqW_Yt6Y?si=uB8OGi_t2as9URqZ',
            description: 'Reviewing all change requests, approving changes, and managing changes to deliverables and organizational process assets.',
            duration: 30,
            numberOfVideos: 2,
            isCompletable: true
          },
          {
            chapterTitle: 'Validate Scope',
            videoUrl: 'https://www.youtube.com/embed/5NzfqW_Yt6Y?si=uB8OGi_t2as9URqZ',
            description: 'Formalizing acceptance of the completed project deliverables.',
            duration: 15,
            numberOfVideos: 1,
            isCompletable: true
          },
          // ... other M&C chapters (Control Schedule, Control Costs, Control Quality, etc.)
        ]
       },
         {
        sectionTitle: 'Predictive Process Groups: Closing',
        chapters: [ // Example of Closing chapters
          {
            chapterTitle: 'Close Project or Phase',
            videoUrl: 'https://www.youtube.com/embed/5NzfqW_Yt6Y?si=uB8OGi_t2as9URqZ',
            description: 'Finalizing all activities across all Project Management Process Groups to formally complete a project or phase.',
            duration: 20,
            numberOfVideos: 1,
            isCompletable: true
          },
        ]
       },
       {
        sectionTitle: 'Agile and Hybrid Project Management',
        chapters: [
           {
            chapterTitle: 'Introduction to Agile',
            videoUrl: 'https://www.youtube.com/embed/5NzfqW_Yt6Y?si=uB8OGi_t2as9URqZ',
            description: 'Understanding the Agile Manifesto, its values and principles, and when Agile methodologies are appropriate.',
            duration: 20,
            numberOfVideos: 1,
            isCompletable: true
           },
           {
            chapterTitle: 'Agile Methodologies (Scrum, Kanban)',
            videoUrl: 'https://www.youtube.com/embed/5NzfqW_Yt6Y?si=uB8OGi_t2as9URqZ',
            description: 'Deep dive into popular Agile frameworks like Scrum and Kanban, their practices, roles, and events.',
            duration: 30,
            numberOfVideos: 2,
            isCompletable: true
           },
           {
            chapterTitle: 'Hybrid Approaches',
            videoUrl: 'https://www.youtube.com/embed/5NzfqW_Yt6Y?si=uB8OGi_t2as9URqZ',
            description: 'Exploring how to combine elements of predictive and Agile methodologies to create a hybrid approach suitable for specific project needs.',
            duration: 25,
            numberOfVideos: 1,
            isCompletable: true
           },
           {
            chapterTitle: 'Agile Roles and Events',
            videoUrl: 'https://www.youtube.com/embed/5NzfqW_Yt6Y?si=uB8OGi_t2as9URqZ',
            description: 'Detailed look at common roles in Agile (e.g., Product Owner, Scrum Master, Development Team) and events (e.g., sprint planning, daily stand-up, sprint review, sprint retrospective).',
            duration: 20,
            numberOfVideos: 1,
            isCompletable: true
           },
        ]
      },
      {
        sectionTitle: 'The Business Environment', // As per ECO domain
        chapters: [
          {
            chapterTitle: 'Compliance Requirements',
            videoUrl: 'https://www.youtube.com/embed/5NzfqW_Yt6Y?si=uB8OGi_t2as9URqZ',
            description: 'Understanding the importance of project compliance with external regulatory bodies and internal organizational policies.',
            duration: 15,
            numberOfVideos: 1,
            isCompletable: true
          },
           {
            chapterTitle: 'External Changes',
            videoUrl: 'https://www.youtube.com/embed/5NzfqW_Yt6Y?si=uB8OGi_t2as9URqZ',
            description: 'Managing the impact of external business environment changes on the project.',
            duration: 10,
            numberOfVideos: 1,
            isCompletable: true
          },
           {
            chapterTitle: 'Organizational Change Management',
            videoUrl: 'https://www.youtube.com/embed/5NzfqW_Yt6Y?si=uB8OGi_t2as9URqZ',
            description: 'Supporting organizational change through the project and understanding change resistance.',
            duration: 20,
            numberOfVideos: 1,
            isCompletable: true
          },
        ]
      },
       {
        sectionTitle: 'Exam Strategies & Practice Questions',
        chapters: [
           {
             chapterTitle: 'PMP Mindset and Approach',
             videoUrl: 'https://www.youtube.com/embed/5NzfqW_Yt6Y?si=uB8OGi_t2as9URqZ',
             description: 'Developing the correct mindset for answering scenario-based PMP exam questions.',
             duration: 20,
             numberOfVideos: 1,
             isCompletable: true
           },
           {
             chapterTitle: 'Answering Situational Questions',
             videoUrl: 'https://www.youtube.com/embed/5NzfqW_Yt6Y?si=uB8OGi_t2as9URqZ',
             description: 'Techniques for breaking down and selecting the best answer for complex situational questions.',
             duration: 25,
             numberOfVideos: 2,
             isCompletable: true
           },
           {
             chapterTitle: 'Practice Question Walkthrough (Predictive)',
             videoUrl: 'https://www.youtube.com/embed/5NzfqW_Yt6Y?si=uB8OGi_t2as9URqZ',
             description: 'Working through example practice questions focused on Predictive project management.',
             duration: 40,
             numberOfVideos: 3,
             isCompletable: true
           },
            {
             chapterTitle: 'Practice Question Walkthrough (Agile/Hybrid)',
             videoUrl: 'https://www.youtube.com/embed/5NzfqW_Yt6Y?si=uB8OGi_t2as9URqZ',
             description: 'Working through example practice questions focused on Agile and Hybrid scenarios.',
             duration: 40,
             numberOfVideos: 3,
             isCompletable: true
           },
            {
             chapterTitle: 'Final Review and Confidence Building',
             videoUrl: 'https://www.youtube.com/embed/5NzfqW_Yt6Y?si=uB8OGi_t2as9URqZ',
             description: 'A final review session and tips for exam day preparation and managing stress.',
             duration: 30,
             numberOfVideos: 2,
             isCompletable: true
           },
        ]
       }
    ],
  },
  {
    id: '11',
    title: 'The Complete Digital Marketing Course - 12 Courses in 1',
    instructor: 'Rob Percival, Daragh Walsh',
    rating: 4.5,
    reviews: 550000,
    currentPrice: 13.99,
    originalPrice: 79.99,
    level: 'Intermediate',
    thumbnail: '/images/coursebanner13.jpg', // Placeholder image path
    isBestseller: true,
    category: 'Marketing',
    description: [
      "Master Digital Marketing Strategy, SEO, YouTube, Email Marketing, Facebook Marketing, Instagram Marketing, Copywriting & More!",
      "Learn using real-world examples and practical exercises.",
      "Grow your business or land your dream marketing job."
    ],
     // Existing Fields
    hoursSpent: 45, // Content hours, study time varies
    targetAudience: [
      "Small business owners and entrepreneurs.",
      "Marketing professionals looking to upgrade skills.",
      "Students and job seekers interested in digital marketing.",
      "Anyone wanting to market their own products or services online.",
    ],
    roadmap: [
      "Digital Marketing Fundamentals",
      "Market Research & Strategy",
      "Website Marketing (SEO, WordPress)",
      "Email Marketing",
      "Social Media Marketing (Facebook, Instagram, YouTube, LinkedIn)",
      "Content Marketing",
      "Copywriting",
      "Advertising (Google Ads, Facebook Ads)",
      "Analytics",
    ],
    courseOutcomes: [
      "Create a comprehensive digital marketing strategy.",
      "Drive traffic to your website through SEO and social media.",
      "Build and engage an email list.",
      "Run effective social media and search engine ad campaigns.",
      "Understand and analyze marketing data.",
      "Confidently market products, services, or a personal brand online.",
    ],

    // NEW: Flags for features available in this course
    hasChat: true, // Assuming chat is available for this course (useful for discussions)
    hasNotebook: true, // Assuming notebook is available for this course (useful for strategy/note-taking)

    sections: [
      {
        sectionTitle: 'Introduction to Digital Marketing',
        chapters: [
          {
            chapterTitle: 'What is Digital Marketing?',
            videoUrl: 'https://www.youtube.com/watch?v=dm_intro1', // Placeholder URL
            description: 'Overview of the digital marketing landscape, its importance, and key channels (SEO, Social Media, Email, Content, Paid Ads).',
            duration: 10, // Estimated duration
            numberOfVideos: 1, // Number of video parts
            isCompletable: true // Counts towards progress
          },
          {
            chapterTitle: 'Developing a Marketing Plan',
            videoUrl: 'https://www.youtube.com/watch?v=dm_intro2',
            description: 'Setting clear marketing goals (SMART goals), identifying target audiences, and outlining key strategies to achieve objectives.',
            duration: 15,
            numberOfVideos: 1,
            isCompletable: true
          },
           {
            chapterTitle: 'Understanding the Customer Journey', // Added chapter
            videoUrl: 'https://www.youtube.com/watch?v=dm_intro3',
            description: 'Mapping out the stages a customer goes through from awareness to purchase and loyalty, and how digital channels fit in.',
            duration: 15,
            numberOfVideos: 1,
            isCompletable: true
          },
        ],
      },
       {
        sectionTitle: 'Market Research & Strategy', // Added section from roadmap
        chapters: [
          {
            chapterTitle: 'Competitive Analysis',
            videoUrl: 'https://www.youtube.com/watch?v=dm_research1',
            description: 'Analyzing competitors\' digital presence and strategies to identify opportunities and threats.',
            duration: 20,
            numberOfVideos: 1,
            isCompletable: true
          },
           {
            chapterTitle: 'Identifying Your Niche & Target Audience',
            videoUrl: 'https://www.youtube.com/watch?v=dm_research2',
            description: 'Defining your specific market segment and creating detailed buyer personas.',
            duration: 15,
            numberOfVideos: 1,
            isCompletable: true
          },
           {
            chapterTitle: 'Setting Digital Marketing Objectives',
            videoUrl: 'https://www.youtube.com/watch?v=dm_research3',
            description: 'Translating business goals into specific, measurable digital marketing objectives (e.g., increasing website traffic, improving conversion rates).',
            duration: 15,
            numberOfVideos: 1,
            isCompletable: true
          },
        ]
       },
       {
        sectionTitle: 'Website Marketing (SEO)',
        chapters: [
          {
            chapterTitle: 'How Search Engines Work',
            videoUrl: 'https://www.youtube.com/watch?v=dm_seo1',
            description: 'Understanding the basic process of crawling, indexing, and ranking web pages by search engines like Google.',
            duration: 10,
            numberOfVideos: 1,
            isCompletable: true
          },
          {
            chapterTitle: 'Keyword Research',
            videoUrl: 'https://www.youtube.com/watch?v=dm_seo2',
            description: 'Finding relevant keywords that your target audience is searching for using tools and techniques.',
            duration: 20,
            numberOfVideos: 1,
            isCompletable: true
          },
          {
            chapterTitle: 'On-Page SEO Factors',
            videoUrl: 'https://www.youtube.com/watch?v=dm_seo3',
            description: 'Optimizing elements directly on your web pages, such as title tags, meta descriptions, headings, content, and image alt text.',
            duration: 25,
            numberOfVideos: 2,
            isCompletable: true
          },
          {
            chapterTitle: 'Off-Page SEO Factors',
            videoUrl: 'https://www.youtube.com/watch?v=dm_seo4',
            description: 'Understanding external factors that influence ranking, primarily backlink building and online mentions.',
            duration: 20,
            numberOfVideos: 1,
            isCompletable: true
          },
           {
            chapterTitle: 'Technical SEO Basics', // Added common SEO topic
            videoUrl: 'https://www.youtube.com/watch?v=dm_seo5',
            description: 'Introduction to sitemaps, robots.txt, site speed, mobile-friendliness, and structured data.',
            duration: 15,
            numberOfVideos: 1,
            isCompletable: true
          },
        ],
      },
      {
        sectionTitle: 'Email Marketing', // Added section from roadmap
        chapters: [
          {
            chapterTitle: 'Building Your Email List',
            videoUrl: 'https://www.youtube.com/watch?v=dm_email1',
            description: 'Strategies and tools for ethically collecting email addresses from potential customers.',
            duration: 20,
            numberOfVideos: 1,
            isCompletable: true
          },
           {
            chapterTitle: 'Writing Effective Emails',
            videoUrl: 'https://www.youtube.com/watch?v=dm_email2',
            description: 'Crafting compelling subject lines, body copy, and calls-to-action for different email campaigns.',
            duration: 25,
            numberOfVideos: 2,
            isCompletable: true
          },
           {
            chapterTitle: 'Email Marketing Automation',
            videoUrl: 'https://www.youtube.com/watch?v=dm_email3',
            description: 'Setting up automated email sequences (e.g., welcome series, abandoned cart reminders) using email marketing platforms.',
            duration: 20,
            numberOfVideos: 1,
            isCompletable: true
          },
        ]
      },
      {
        sectionTitle: 'Social Media Marketing',
        chapters: [
           {
            chapterTitle: 'Facebook Marketing',
            videoUrl: 'https://www.youtube.com/watch?v=dm_social1',
            description: 'Creating and managing Facebook Pages and Groups, understanding algorithms, and content strategies for engagement.',
            duration: 30,
            numberOfVideos: 2,
            isCompletable: true
           },
           {
            chapterTitle: 'Instagram Marketing',
            videoUrl: 'https://www.youtube.com/watch?v=dm_social2',
            description: 'Utilizing Instagram for business: creating compelling visuals, using Stories, Reels, hashtags, and engaging with followers.',
            duration: 25,
            numberOfVideos: 2,
            isCompletable: true
           },
           {
            chapterTitle: 'YouTube Marketing',
            videoUrl: 'https://www.youtube.com/watch?v=dm_social3',
            description: 'Developing a YouTube channel strategy, optimizing videos for search, and building a subscriber base.',
            duration: 30,
            numberOfVideos: 2,
            isCompletable: true
           },
           {
            chapterTitle: 'LinkedIn Marketing',
            videoUrl: 'https://www.youtube.com/watch?v=dm_social4',
            description: 'Leveraging LinkedIn for professional networking, company branding, and generating leads (organic strategies).',
            duration: 20,
            numberOfVideos: 1,
            isCompletable: true
           },
           {
             chapterTitle: 'Choosing the Right Platforms', // Added chapter
             videoUrl: 'https://www.youtube.com/watch?v=dm_social5',
             description: 'Deciding which social media platforms are best suited for your target audience and business goals.',
             duration: 15,
             numberOfVideos: 1,
             isCompletable: true
           },
        ]
      },
      {
        sectionTitle: 'Content Marketing', // Added section from roadmap
        chapters: [
          {
            chapterTitle: 'What is Content Marketing?',
            videoUrl: 'https://www.youtube.com/watch?v=dm_content1',
            description: 'Creating and distributing valuable, relevant, and consistent content to attract and retain a clearly defined audience.',
            duration: 15,
            numberOfVideos: 1,
            isCompletable: true
          },
           {
            chapterTitle: 'Content Ideas and Planning',
            videoUrl: 'https://www.youtube.com/watch?v=dm_content2',
            description: 'Brainstorming content ideas based on audience needs and keywords, and creating a content calendar.',
            duration: 20,
            numberOfVideos: 1,
            isCompletable: true
          },
           {
            chapterTitle: 'Different Content Formats',
            videoUrl: 'https://www.youtube.com/watch?v=dm_content3',
            description: 'Exploring various content types like blog posts, videos, infographics, podcasts, and webinars.',
            duration: 15,
            numberOfVideos: 1,
            isCompletable: true
          },
        ]
      },
       {
        sectionTitle: 'Copywriting', // Added section from roadmap
        chapters: [
          {
            chapterTitle: 'Principles of Effective Copywriting',
            videoUrl: 'https://www.youtube.com/watch?v=dm_copywriting1',
            description: 'Writing persuasive text that motivates your audience to take a desired action (e.g., click, sign up, buy).',
            duration: 20,
            numberOfVideos: 1,
            isCompletable: true
          },
           {
            chapterTitle: 'Copywriting for Websites and Ads',
            videoUrl: 'https://www.youtube.com/watch?v=dm_copywriting2',
            description: 'Tailoring your copy for different digital channels like landing pages, sales pages, and social media ads.',
            duration: 25,
            numberOfVideos: 2,
            isCompletable: true
          },
        ]
       },
        {
        sectionTitle: 'Advertising (Paid Ads)', // Added section from roadmap
        chapters: [
          {
            chapterTitle: 'Introduction to Paid Advertising',
            videoUrl: 'https://www.youtube.com/watch?v=dm_ads1',
            description: 'Understanding Pay-Per-Click (PPC) advertising and how it fits into a digital marketing strategy.',
            duration: 15,
            numberOfVideos: 1,
            isCompletable: true
          },
           {
            chapterTitle: 'Google Ads Basics',
            videoUrl: 'https://www.youtube.com/watch?v=dm_ads2',
            description: 'Setting up a basic Google Search Ads campaign, understanding keywords, ad groups, and ad copy.',
            duration: 30,
            numberOfVideos: 2,
            isCompletable: true
          },
           {
            chapterTitle: 'Facebook Ads Basics',
            videoUrl: 'https://www.youtube.com/watch?v=dm_ads3',
            description: 'Setting up basic Facebook and Instagram ad campaigns, understanding audience targeting and ad creative.',
            duration: 30,
            numberOfVideos: 2,
            isCompletable: true
          },
           {
             chapterTitle: 'Retargeting and Remarketing', // Added common ad concept
             videoUrl: 'https://www.youtube.com/watch?v=dm_ads4',
             description: 'Strategies for showing ads to people who have previously interacted with your website or social media.',
             duration: 20,
             numberOfVideos: 1,
             isCompletable: true
           },
        ]
       },
        {
        sectionTitle: 'Analytics', // Added section from roadmap
        chapters: [
          {
            chapterTitle: 'Introduction to Google Analytics',
            videoUrl: 'https://www.youtube.com/watch?v=dm_analytics1',
            description: 'Setting up Google Analytics and understanding basic reports to track website traffic and user behavior.',
            duration: 25,
            numberOfVideos: 2,
            isCompletable: true
          },
           {
            chapterTitle: 'Tracking Conversions',
            videoUrl: 'https://www.youtube.com/watch?v=dm_analytics2',
            description: 'Setting up goals and tracking conversions (e.g., purchases, form submissions) in Google Analytics.',
            duration: 20,
            numberOfVideos: 1,
            isCompletable: true
          },
           {
            chapterTitle: 'Social Media Analytics',
            videoUrl: 'https://www.youtube.com/watch?v=dm_analytics3',
            description: 'Measuring performance on social media platforms using built-in analytics tools.',
            duration: 15,
            numberOfVideos: 1,
            isCompletable: true
          },
           {
             chapterTitle: 'Reporting and Making Data-Driven Decisions', // Added chapter
             videoUrl: 'https://www.youtube.com/watch?v=dm_analytics4',
             description: 'Compiling data into reports and using insights to refine your digital marketing strategies.',
             duration: 15,
             numberOfVideos: 1,
             isCompletable: true
           },
        ]
       },
        {
         sectionTitle: 'Putting It All Together & Next Steps', // Added final section
         chapters: [
            {
             chapterTitle: 'Creating Your Full Digital Marketing Plan',
             videoUrl: 'https://www.youtube.com/watch?v=dm_finalplan',
             description: 'Synthesizing knowledge from all sections to build a complete digital marketing strategy for a business or project.',
             duration: 30,
             numberOfVideos: 2,
             isCompletable: true
            },
             {
             chapterTitle: 'Staying Up-to-Date in Digital Marketing',
             videoUrl: 'https://www.youtube.com/watch?v=dm_future',
             description: 'Resources and strategies for keeping your skills current in the fast-changing digital marketing landscape.',
             duration: 10,
             numberOfVideos: 1,
             isCompletable: true
            },
         ]
        }
    ],
  },
  {
    id: '12',
    title: 'User Experience Design Fundamentals',
    instructor: 'Joe Natoli',
    rating: 4.5,
    reviews: 230000,
    currentPrice: 11.99,
    originalPrice: 69.99,
    level: 'Beginner',
    thumbnail: '/images/coursebanner14.jpg', // Placeholder image path
    isBestseller: true,
    category: 'Design',
    description: [
      "Become a UX Designer. Learn the essential concepts, tools, and techniques for creating great user experiences.",
      "Hands-on projects to build your portfolio.",
      "Covers research, ideation, prototyping, and testing."
    ],
     // Existing Fields
    hoursSpent: 25, // Content hours, study time varies
    targetAudience: [
      "Individuals aspiring to become UX designers.",
      "Developers and project managers who want to understand UX principles.",
      "Anyone involved in creating digital products.",
    ],
    roadmap: [
      "What is UX? Principles & Importance",
      "User Research Methods",
      "Defining the Problem (Personas, Journey Maps)",
      "Ideation & Design (Sketching, Wireframing)",
      "Prototyping (Low & High Fidelity)",
      "Usability Testing",
      "Working with Developers",
      "Building a UX Portfolio",
    ],
    courseOutcomes: [
      "Understand the core concepts of User Experience Design.",
      "Conduct basic user research and analysis.",
      "Create user personas and journey maps.",
      "Design wireframes and interactive prototypes.",
      "Plan and execute usability testing.",
      "Build foundational projects for a UX portfolio.",
    ],

    // NEW: Flags for features available in this course
    hasChat: true, // Assuming chat is available for this course (useful for discussions)
    hasNotebook: true, // Assuming notebook is available for this course (useful for note-taking during research or design)

    sections: [
      {
        sectionTitle: 'Introduction to User Experience Design',
        chapters: [
          {
            chapterTitle: 'Defining UX',
            videoUrl: 'https://www.youtube.com/watch?v=ux_intro1', // Placeholder URL
            description: 'Understanding what User Experience (UX) means beyond just UI, and the key components of a positive user experience.',
            duration: 10, // Estimated duration
            numberOfVideos: 1, // Number of video parts
            isCompletable: true // Counts towards progress
          },
          {
            chapterTitle: 'The Value of UX',
            videoUrl: 'https://www.youtube.com/watch?v=ux_intro2',
            description: 'Why investing in UX is crucial for businesses, leading to increased user satisfaction, conversion rates, and reduced development costs.',
            duration: 15,
            numberOfVideos: 1,
            isCompletable: true
          },
          {
            chapterTitle: 'The UX Design Process',
            videoUrl: 'https://www.youtube.com/watch?v=ux_intro3',
            description: 'Overview of typical iterative UX design processes, including Discover, Define, Design, and Deliver phases.',
            duration: 15,
            numberOfVideos: 1,
            isCompletable: true
          },
           {
             chapterTitle: 'UX Principles and Heuristics', // Added chapter
             videoUrl: 'https://www.youtube.com/watch?v=ux_intro4',
             description: 'Learning fundamental principles and usability heuristics (like Nielsen\'s) that guide good design decisions.',
             duration: 20,
             numberOfVideos: 1,
             isCompletable: true
           },
        ],
      },
       {
        sectionTitle: 'User Research',
        chapters: [
          {
            chapterTitle: 'Planning Your Research',
            videoUrl: 'https://www.youtube.com/watch?v=ux_research1',
            description: 'Defining research objectives, formulating research questions, and choosing appropriate methodologies based on project goals.',
            duration: 15,
            numberOfVideos: 1,
            isCompletable: true
          },
          {
            chapterTitle: 'Qualitative Research Methods',
            videoUrl: 'https://www.youtube.com/watch?v=ux_research2',
            description: 'Conducting user interviews, contextual inquiries, and observations to gain deep insights into user behaviors and motivations.',
            duration: 30,
            numberOfVideos: 2,
            isCompletable: true
          },
          {
            chapterTitle: 'Quantitative Research Methods',
            videoUrl: 'https://www.youtube.com/watch?v=ux_research3',
            description: 'Using methods like surveys, analytics data, and A/B testing to gather measurable data about user behavior.',
            duration: 25,
            numberOfVideos: 2,
            isCompletable: true
          },
          {
            chapterTitle: 'Analyzing Research Data',
            videoUrl: 'https://www.youtube.com/watch?v=ux_research4',
            description: 'Synthesizing findings from research, identifying patterns, themes, and key insights.',
            duration: 20,
            numberOfVideos: 1,
            isCompletable: true
          },
        ],
      },
       {
        sectionTitle: 'Defining the Problem', // Added section from roadmap
        chapters: [
          {
            chapterTitle: 'Creating User Personas',
            videoUrl: 'https://www.youtube.com/watch?v=ux_define1',
            description: 'Developing fictional representations of your key user groups based on research data to humanize the target audience.',
            duration: 25,
            numberOfVideos: 2,
            isCompletable: true
          },
          {
            chapterTitle: 'Mapping User Journeys',
            videoUrl: 'https://www.youtube.com/watch?v=ux_define2',
            description: 'Visualizing the steps a user takes to achieve a goal, identifying pain points and opportunities.',
            duration: 30,
            numberOfVideos: 2,
            isCompletable: true
          },
           {
            chapterTitle: 'Problem Statements & Job Stories', // Added chapter
            videoUrl: 'https://www.youtube.com/watch?v=ux_define3',
            description: 'Framing the user\'s needs and goals as clear problem statements or job stories to align the team.',
            duration: 15,
            numberOfVideos: 1,
            isCompletable: true
          },
        ]
       },
      {
        sectionTitle: 'Ideation and Design',
        chapters: [
           {
            chapterTitle: 'Information Architecture',
            videoUrl: 'https://www.youtube.com/watch?v=ux_design1',
            description: 'Structuring and organizing content effectively so users can find information easily (site maps, user flows).',
            duration: 20,
            numberOfVideos: 1,
            isCompletable: true
           },
           {
            chapterTitle: 'Sketching and Ideation',
            videoUrl: 'https://www.youtube.com/watch?v=ux_design2',
            description: 'Generating a wide range of design ideas quickly through sketching, brainstorming, and design studios.',
            duration: 20,
            numberOfVideos: 1,
            isCompletable: true
           },
           {
            chapterTitle: 'Wireframing',
            videoUrl: 'https://www.youtube.com/watch?v=ux_design3',
            description: 'Creating low-fidelity visual layouts of screens or pages to define structure and content hierarchy.',
            duration: 25,
            numberOfVideos: 2,
            isCompletable: true
           },
            {
             chapterTitle: 'UI Patterns and Guidelines', // Added chapter
             videoUrl: 'https://www.youtube.com/watch?v=ux_design4',
             description: 'Utilizing common UI patterns and adhering to platform design guidelines (e.g., Material Design, Human Interface Guidelines).',
             duration: 15,
             numberOfVideos: 1,
             isCompletable: true
           },
        ]
      },
       {
         sectionTitle: 'Prototyping', // Added section from roadmap
         chapters: [
           {
             chapterTitle: 'Introduction to Prototyping',
             videoUrl: 'https://www.youtube.com/watch?v=ux_proto1',
             description: 'Understanding the purpose of prototyping and different levels of fidelity (low, medium, high).',
             duration: 15,
             numberOfVideos: 1,
             isCompletable: true
           },
           {
             chapterTitle: 'Low-Fidelity Prototyping (Paper & Digital)',
             videoUrl: 'https://www.youtube.com/watch?v=ux_proto2',
             description: 'Creating quick, basic interactive prototypes using paper or simple digital tools to test user flows.',
             duration: 20,
             numberOfVideos: 1,
             isCompletable: true
           },
            {
             chapterTitle: 'High-Fidelity Prototyping (Tools)',
             videoUrl: 'https://www.youtube.com/watch?v=ux_proto3',
             description: 'Building detailed, interactive prototypes using industry-standard tools like Figma, Sketch, Adobe XD, or InVision.',
             duration: 30,
             numberOfVideos: 2,
             isCompletable: true
           },
         ]
       },
       {
         sectionTitle: 'Usability Testing', // Added section from roadmap
         chapters: [
           {
             chapterTitle: 'Planning Usability Tests',
             videoUrl: 'https://www.youtube.com/watch?v=ux_testing1',
             description: 'Defining test objectives, creating test tasks, and recruiting participants.',
             duration: 20,
             numberOfVideos: 1,
             isCompletable: true
           },
            {
             chapterTitle: 'Conducting Usability Tests',
             videoUrl: 'https://www.youtube.com/watch?v=ux_testing2',
             description: 'Facilitating usability sessions and observing user interactions with a prototype or live product.',
             duration: 25,
             numberOfVideos: 2,
             isCompletable: true
           },
            {
             chapterTitle: 'Analyzing Test Results & Reporting',
             videoUrl: 'https://www.youtube.com/watch?v=ux_testing3',
             description: 'Identifying usability issues, prioritizing findings, and communicating results and recommendations to stakeholders.',
             duration: 20,
             numberOfVideos: 1,
             isCompletable: true
           },
         ]
       },
        {
         sectionTitle: 'Working with Development Teams', // Added section from roadmap
         chapters: [
           {
             chapterTitle: 'Design Handoff Best Practices',
             videoUrl: 'https://www.youtube.com/watch?v=ux_dev1',
             description: 'Preparing design files and documentation for developers and ensuring clear communication.',
             duration: 15,
             numberOfVideos: 1,
             isCompletable: true
           },
            {
             chapterTitle: 'Collaboration During Development',
             videoUrl: 'https://www.youtube.com/watch?v=ux_dev2',
             description: 'Collaborating effectively with developers throughout the build phase, addressing implementation challenges.',
             duration: 15,
             numberOfVideos: 1,
             isCompletable: true
           },
         ]
        },
        {
         sectionTitle: 'Building Your UX Portfolio', // Added section from roadmap
         chapters: [
           {
             chapterTitle: 'What Makes a Strong UX Portfolio?',
             videoUrl: 'https://www.youtube.com/watch?v=ux_portfolio1',
             description: 'Highlighting your process, problem-solving skills, and impact in portfolio case studies.',
             duration: 20,
             numberOfVideos: 1,
             isCompletable: true
           },
            {
             chapterTitle: 'Structuring Case Studies',
             videoUrl: 'https://www.youtube.com/watch?v=ux_portfolio2',
             description: 'Organizing your projects into compelling case studies that tell the story of your design process.',
             duration: 25,
             numberOfVideos: 2,
             isCompletable: true
           },
            {
             chapterTitle: 'Presenting Your Work',
             videoUrl: 'https://www.youtube.com/watch?v=ux_portfolio3',
             description: 'Tips for presenting your portfolio projects in interviews or online.',
             duration: 15,
             numberOfVideos: 1,
             isCompletable: true
           },
         ]
        },
         {
          sectionTitle: 'Course Conclusion & Next Steps', // Added final section
          chapters: [
             {
              chapterTitle: 'Recap and Continued Learning',
              videoUrl: 'https://www.youtube.com/watch?v=ux_conclusion',
              description: 'Summarizing key takeaways and suggesting resources for further learning and skill development in UX.',
              duration: 10,
              numberOfVideos: 1,
              isCompletable: true
             },
          ]
         }
    ],
  },
  {
    id: '13',
    title: 'Graphic Design Masterclass - Learn GREAT Design',
    instructor: 'Lindsay Marsh',
    rating: 4.6,
    reviews: 180000,
    currentPrice: 10.99,
    originalPrice: 59.99,
    level: 'Intermediate', // Keeping 'Intermediate' as per your original JSON.
    thumbnail: '/images/coursebanner12.jpg', // Placeholder image path
    isBestseller: true,
    category: 'Design',
    description: [
      "The ULTIMATE Graphic Design Course which will teach you core skills to make GREAT Designs!",
      "Covers Photoshop, Illustrator, InDesign, and design principles.",
      "Ideal for beginners and those looking to level up."
    ],
     // Existing Fields
    hoursSpent: 35,
    targetAudience: [
      "Beginners who want to learn graphic design.",
      "Aspiring designers, marketers, or artists.",
      "Anyone wanting to use Photoshop, Illustrator, and InDesign.",
    ],
    roadmap: [
      "Fundamentals of Design",
      "Typography",
      "Color Theory",
      "Using Adobe Photoshop",
      "Using Adobe Illustrator",
      "Using Adobe InDesign",
      "Layout and Composition",
      "Branding Basics",
      "Building a Design Portfolio",
    ],
    courseOutcomes: [
      "Understand and apply core graphic design principles.",
      "Create professional graphics using Photoshop, Illustrator, and InDesign.",
      "Work effectively with typography and color.",
      "Design layouts for print and web.",
      "Build a foundational graphic design portfolio.",
    ],

    // NEW: Flags for features available in this course
    hasChat: true, // Assuming chat is available for this course (useful for feedback/discussions)
    hasNotebook: true, // Assuming notebook is available for this course (useful for sketching ideas or notes)

    sections: [
      {
        sectionTitle: 'Design Fundamentals',
        chapters: [
          {
            chapterTitle: 'The Principles of Design',
            videoUrl: 'https://www.youtube.com/embed/5NzfqW_Yt6Y?si=uB8OGi_t2as9URqZ', // Placeholder URL
            description: 'Understanding core visual principles like contrast, repetition, alignment, and proximity (CRAP) and how they impact design effectiveness.',
            duration: 15, // Estimated duration
            numberOfVideos: 1, // Number of video parts
            isCompletable: true // Counts towards progress
          },
          {
            chapterTitle: 'Introduction to Layout',
            videoUrl: 'https://www.youtube.com/embed/5NzfqW_Yt6Y?si=uB8OGi_t2as9URqZ',
            description: 'Basic concepts for arranging elements on a page or screen, including whitespace, grids, and visual flow.',
            duration: 20,
            numberOfVideos: 1,
            isCompletable: true
          },
           {
             chapterTitle: 'Visual Hierarchy', // Added chapter
             videoUrl: 'https://www.youtube.com/embed/5NzfqW_Yt6Y?si=uB8OGi_t2as9URqZ',
             description: 'Creating visual order to guide the viewer\'s eye through the design.',
             duration: 10,
             numberOfVideos: 1,
             isCompletable: true
           },
        ],
      },
       {
        sectionTitle: 'Typography',
        chapters: [
          {
            chapterTitle: 'Understanding Typefaces',
            videoUrl: 'https://www.youtube.com/embed/5NzfqW_Yt6Y?si=uB8OGi_t2as9URqZ',
            description: 'Exploring different typeface classifications like serif, sans-serif, script, and display, and when to use them.',
            duration: 20,
            numberOfVideos: 1,
            isCompletable: true
          },
          {
            chapterTitle: 'Hierarchy and Pairing Fonts',
            videoUrl: 'https://www.youtube.com/embed/5NzfqW_Yt6Y?si=uB8OGi_t2as9URqZ',
            description: 'Creating clear typographic hierarchy and learning best practices for combining different fonts effectively.',
            duration: 25,
            numberOfVideos: 2,
            isCompletable: true
          },
           {
            chapterTitle: 'Typographic Terms and Measurement', // Added common typography topic
            videoUrl: 'https://www.youtube.com/embed/5NzfqW_Yt6Y?si=uB8OGi_t2as9URqZ',
            description: 'Understanding terms like kerning, tracking, leading, and points/pixels for precise type control.',
            duration: 15,
            numberOfVideos: 1,
            isCompletable: true
          },
        ],
      },
      {
        sectionTitle: 'Color Theory',
        chapters: [
           {
            chapterTitle: 'The Color Wheel',
            videoUrl: 'https://www.youtube.com/embed/5NzfqW_Yt6Y?si=uB8OGi_t2as9URqZ',
            description: 'Understanding the basic color wheel and relationships between colors (primary, secondary, tertiary).',
            duration: 15,
            numberOfVideos: 1,
            isCompletable: true
           },
           {
            chapterTitle: 'Color Harmonies',
            videoUrl: 'https://www.youtube.com/embed/5NzfqW_Yt6Y?si=uB8OGi_t2as9URqZ',
            description: 'Creating visually pleasing color palettes using schemes like analogous, complementary, triadic, etc.',
            duration: 20,
            numberOfVideos: 1,
            isCompletable: true
           },
           {
            chapterTitle: 'Using Color in Design',
            videoUrl: 'https://www.youtube.com/embed/5NzfqW_Yt6Y?si=uB8OGi_t2as9URqZ',
            description: 'Exploring the psychology of color and how to apply color effectively in design for mood, emphasis, and accessibility.',
            duration: 25,
            numberOfVideos: 2,
            isCompletable: true
           },
        ]
      },
       {
        sectionTitle: 'Adobe Photoshop Essentials',
        chapters: [
           {
            chapterTitle: 'Photoshop Interface',
            videoUrl: 'https://www.youtube.com/embed/5NzfqW_Yt6Y?si=uB8OGi_t2as9URqZ',
            description: 'Navigating the Photoshop workspace, tools panel, options bar, and various panels.',
            duration: 20,
            numberOfVideos: 1,
            isCompletable: true
           },
           {
            chapterTitle: 'Working with Layers',
            videoUrl: 'https://www.youtube.com/embed/5NzfqW_Yt6Y?si=uB8OGi_t2as9URqZ',
            description: 'Understanding layers, groups, blending modes, and non-destructive editing techniques.',
            duration: 25,
            numberOfVideos: 2,
            isCompletable: true
           },
           {
            chapterTitle: 'Selections and Masks',
            videoUrl: 'https://www.youtube.com/embed/5NzfqW_Yt6Y?si=uB8OGi_t2as9URqZ',
            description: 'Using selection tools and layer masks to isolate and edit specific areas of an image without permanently altering pixels.',
            duration: 30,
            numberOfVideos: 2,
            isCompletable: true
           },
           {
            chapterTitle: 'Basic Photo Editing',
            videoUrl: 'https://www.youtube.com/embed/5NzfqW_Yt6Y?si=uB8OGi_t2as9URqZ',
            description: 'Adjusting brightness, contrast, saturation, color balance, and basic retouching techniques.',
            duration: 25,
            numberOfVideos: 2,
            isCompletable: true
           },
            {
             chapterTitle: 'Exporting for Web and Print', // Added common PS task
             videoUrl: 'https://www.youtube.com/embed/5NzfqW_Yt6Y?si=uB8OGi_t2as9URqZ',
             description: 'Saving files in appropriate formats and settings for different uses (web images, print graphics).',
             duration: 15,
             numberOfVideos: 1,
             isCompletable: true
           },
        ]
      },
      // Sections added/expanded based on Roadmap:
       {
        sectionTitle: 'Using Adobe Illustrator Essentials',
        chapters: [
           {
            chapterTitle: 'Illustrator Interface and Vector Basics',
            videoUrl: 'https://www.youtube.com/embed/5NzfqW_Yt6Y?si=uB8OGi_t2as9URqZ',
            description: 'Understanding vector graphics, navigating the workspace, and using basic drawing tools (Pen Tool, Shape Tools).',
            duration: 25,
            numberOfVideos: 2,
            isCompletable: true
           },
           {
            chapterTitle: 'Working with Paths and Shapes',
            videoUrl: 'https://www.youtube.com/embed/5NzfqW_Yt6Y?si=uB8OGi_t2as9URqZ',
            description: 'Creating and editing complex shapes using the Path Tool, Shape Builder, and Pathfinder panel.',
            duration: 30,
            numberOfVideos: 2,
            isCompletable: true
           },
           {
            chapterTitle: 'Color and Gradients in Illustrator',
            videoUrl: 'https://www.youtube.com/embed/5NzfqW_Yt6Y?si=uB8OGi_t2as9URqZ',
            description: 'Applying fills and strokes, working with color swatches, gradients, and patterns.',
            duration: 20,
            numberOfVideos: 1,
            isCompletable: true
           },
            {
             chapterTitle: 'Working with Type in Illustrator', // Added common AI task
             videoUrl: 'https://www.youtube.com/embed/5NzfqW_Yt6Y?si=uB8OGi_t2as9URqZ',
             description: 'Adding and formatting text, creating text outlines, and working with type on a path.',
             duration: 20,
             numberOfVideos: 1,
             isCompletable: true
           },
           {
            chapterTitle: 'Exporting Vector Graphics',
            videoUrl: 'https://www.youtube.com/embed/5NzfqW_Yt6Y?si=uB8OGi_t2as9URqZ',
            description: 'Saving files in appropriate vector and raster formats for different outputs (logos, icons, illustrations).',
            duration: 15,
            numberOfVideos: 1,
            isCompletable: true
           },
        ]
       },
        {
        sectionTitle: 'Using Adobe InDesign Essentials',
        chapters: [
           {
            chapterTitle: 'InDesign Interface and Document Setup',
            videoUrl: 'https://www.youtube.com/embed/5NzfqW_Yt6Y?si=uB8OGi_t2as9URqZ',
            description: 'Getting started with InDesign for layout design, setting up documents for print or digital.',
            duration: 20,
            numberOfVideos: 1,
            isCompletable: true
           },
           {
            chapterTitle: 'Working with Frames and Text',
            videoUrl: 'https://www.youtube.com/embed/5NzfqW_Yt6Y?si=uB8OGi_t2as9URqZ',
            description: 'Placing and managing text and images within frames, text threading, and basic typography in InDesign.',
            duration: 25,
            numberOfVideos: 2,
            isCompletable: true
           },
            {
             chapterTitle: 'Using Master Pages', // Key InDesign concept
             videoUrl: 'https://www.youtube.com/embed/5NzfqW_Yt6Y?si=uB8OGi_t2as9URqZ',
             description: 'Creating consistent layouts across multiple pages using Master Pages.',
             duration: 15,
             numberOfVideos: 1,
             isCompletable: true
           },
           {
            chapterTitle: 'Exporting from InDesign (PDF)',
            videoUrl: 'https://www.youtube.com/embed/5NzfqW_Yt6Y?si=uB8OGi_t2as9URqZ',
            description: 'Exporting documents for print (PDF/X) and interactive digital use (Interactive PDF).',
            duration: 20,
            numberOfVideos: 1,
            isCompletable: true
           },
        ]
       },
        {
         sectionTitle: 'Layout and Composition', // Separate section as per roadmap
         chapters: [
           {
            chapterTitle: 'Grids and Alignment Systems',
            videoUrl: 'https://www.youtube.com/embed/5NzfqW_Yt6Y?si=uB8OGi_t2as9URqZ',
            description: 'Using grid systems to create structured and organized layouts.',
            duration: 20,
            numberOfVideos: 1,
            isCompletable: true
           },
           {
            chapterTitle: 'Creating Visual Flow',
            videoUrl: 'https://www.youtube.com/embed/5NzfqW_Yt6Y?si=uB8OGi_t2as9URqZ',
            description: 'Techniques for guiding the viewer\'s eye through your design elements.',
            duration: 15,
            numberOfVideos: 1,
            isCompletable: true
           },
           {
             chapterTitle: 'Whitespace (Negative Space)', // Added important layout concept
             videoUrl: 'https://www.youtube.com/embed/5NzfqW_Yt6Y?si=uB8OGi_t2as9URqZ',
             description: 'Understanding the importance of negative space in creating balance and emphasis.',
             duration: 10,
             numberOfVideos: 1,
             isCompletable: true
           },
            {
             chapterTitle: 'Designing for Print vs. Digital',
             videoUrl: 'https://www.youtube.com/embed/5NzfqW_Yt6Y?si=uB8OGi_t2as9URqZ',
             description: 'Key differences and considerations when designing for different mediums (resolution, color modes, interactivity).',
             duration: 20,
             numberOfVideos: 1,
             isCompletable: true
           },
         ]
        },
        {
         sectionTitle: 'Branding Basics', // Added section from roadmap
         chapters: [
           {
             chapterTitle: 'What is Branding?',
             videoUrl: 'https://www.youtube.com/embed/5NzfqW_Yt6Y?si=uB8OGi_t2as9URqZ',
             description: 'Understanding the core concepts of branding beyond just a logo.',
             duration: 15,
             numberOfVideos: 1,
             isCompletable: true
           },
            {
             chapterTitle: 'Designing a Simple Logo',
             videoUrl: 'https://www.youtube.com/embed/5NzfqW_Yt6Y?si=uB8OGi_t2as9URqZ',
             description: 'Introduction to logo design principles and techniques using Illustrator.',
             duration: 30,
             numberOfVideos: 2,
             isCompletable: true
           },
           {
             chapterTitle: 'Creating a Brand Style Guide',
             videoUrl: 'https://www.youtube.com/embed/5NzfqW_Yt6Y?si=uB8OGi_t2as9URqZ',
             description: 'Compiling visual identity elements (logo usage, color palette, typography) into a basic style guide.',
             duration: 25,
             numberOfVideos: 2,
             isCompletable: true
           },
         ]
        },
        {
         sectionTitle: 'Building a Design Portfolio', // Added section from roadmap
         chapters: [
           {
             chapterTitle: 'Why You Need a Portfolio',
             videoUrl: 'https://www.youtube.com/embed/5NzfqW_Yt6Y?si=uB8OGi_t2as9URqZ',
             description: 'The importance of showcasing your work effectively to potential clients or employers.',
             duration: 10,
             numberOfVideos: 1,
             isCompletable: true
           },
            {
             chapterTitle: 'Selecting Projects and Case Studies',
             videoUrl: 'https://www.youtube.com/embed/5NzfqW_Yt6Y?si=uB8OGi_t2as9URqZ',
             description: 'Choosing your best work and presenting it with a clear narrative explaining your process.',
             duration: 20,
             numberOfVideos: 1,
             isCompletable: true
           },
           {
             chapterTitle: 'Platforms for Your Portfolio',
             videoUrl: 'https://www.youtube.com/embed/5NzfqW_Yt6Y?si=uB8OGi_t2as9URqZ',
             description: 'Exploring options for hosting your portfolio online (Behance, Dribbble, personal website).',
             duration: 15,
             numberOfVideos: 1,
             isCompletable: true
           },
         ]
        },
         {
          sectionTitle: 'Course Conclusion & Next Steps', // Added final section
          chapters: [
             {
              chapterTitle: 'Recap and Continued Learning',
              videoUrl: 'https://www.youtube.com/embed/5NzfqW_Yt6Y?si=uB8OGi_t2as9URqZ',
              description: 'Summarizing key takeaways and recommending resources for further learning and practice in graphic design.',
              duration: 10,
              numberOfVideos: 1,
              isCompletable: true
             },
          ]
         }
    ],
  }
];

export const sampleInstructors = [
  {
    id: 'instructor-angela-yu',
    name: 'Dr. Angela Yu',
    role: 'Lead Developer & Instructor',
    image: '/images/happystudent7.png', // Placeholder image
    socialLinks: [
      { platform: 'twitter', url: '#', icon: 'FaTwitter' },
      { platform: 'linkedin', url: '#', icon: 'FaLinkedinIn' },
      { platform: 'website', url: '#', icon: 'FaLink' }, // Assuming a website
    ],
    rating: 4.7, // Example rating based on her courses
    totalCourses: 2, // Based on provided sampleCourses list
    description: "Dr. Angela Yu is a medical doctor turned developer and a highly sought-after coding instructor. Known for her clear explanations and project-based learning, she has taught hundreds of thousands of students to code and build real-world applications.",
  },
  {
    id: 'instructor-jose-portilla',
    name: 'Jose Portilla',
    role: 'Head of Data Science',
    image: '/images/happystudent4.png', // Placeholder image
    socialLinks: [
      { platform: 'linkedin', url: '#', icon: 'FaLinkedinIn' },
      { platform: 'github', url: '#', icon: 'FaGithub' }, // Assuming a github
      { platform: 'website', url: '#', icon: 'FaLink' },
    ],
    rating: 4.6, // Example rating based on his course
    totalCourses: 1, // Based on provided sampleCourses list (listed with Pierian Training)
    description: "Jose Portilla is a renowned instructor specializing in data science, Python, and machine learning. With a background in engineering, he focuses on providing hands-on, practical training that empowers students with in-demand data skills.",
  },
   {
    id: 'instructor-colt-steele',
    name: 'Colt Steele',
    role: 'Web Developer & Educator',
    image: '/images/happystudent5.png', // Placeholder image
    socialLinks: [
      { platform: 'twitter', url: '#', icon: 'FaTwitter' },
      { platform: 'github', url: '#', icon: 'FaGithub' },
      { platform: 'website', url: '#', icon: 'FaLink' },
    ],
    rating: 4.7, // Example rating based on his course
    totalCourses: 1, // Based on provided sampleCourses list
    description: "Colt Steele is a developer and former bootcamp instructor known for his dynamic and comprehensive web development courses. He excels at breaking down complex topics and guiding learners through building substantial projects.",
  },
   {
    id: 'instructor-jonas-schmedtmann',
    name: 'Jonas Schmedtmann',
    role: 'Web Developer & Designer',
    image: '/images/happystudent6.png', // Placeholder image
    socialLinks: [
      { platform: 'twitter', url: '#', icon: 'FaTwitter' },
      { platform: 'website', url: '#', icon: 'FaLink' },
      // Maybe a Dribbble or Behance?
    ],
    rating: 4.7, // Example rating based on his course
    totalCourses: 1, // Based on provided sampleCourses list
    description: "Jonas Schmedtmann is a popular web developer and designer who creates highly detailed and modern courses on JavaScript, HTML, and CSS. His teaching focuses on building a deep understanding of how web technologies work.",
  },
   {
    id: 'instructor-stephane-maarek',
    name: 'Stephane Maarek',
    role: 'AWS Certified Cloud Expert',
    image: '/images/happystudent8.png', // Placeholder image
    socialLinks: [
      { platform: 'linkedin', url: '#', icon: 'FaLinkedinIn' },
      { platform: 'twitter', url: '#', icon: 'FaTwitter' },
      { platform: 'website', url: '#', icon: 'FaLink' },
    ],
    rating: 4.7, // Example rating based on his course
    totalCourses: 1, // Based on provided sampleCourses list
    description: "Stephane Maarek is a multiple AWS certified professional and a leading instructor for AWS certification exams. He is known for his clear, concise, and exam-focused teaching style, helping students master cloud concepts and pass certifications.",
  },
   {
    id: 'instructor-ed-donner',
    name: 'Ed Donner',
    role: 'AI Engineering Lead',
    image: '/images/happystudent3.png', // Placeholder image
    socialLinks: [
      { platform: 'linkedin', url: '#', icon: 'FaLinkedinIn' },
      { platform: 'twitter', url: '#', icon: 'FaTwitter' },
    ],
    rating: 4.75, // Example rating based on his courses (averaged)
    totalCourses: 2, // Based on provided sampleCourses list (listed with Ligency Team)
    description: "Ed Donner is an AI expert focusing on the practical implementation of Large Language Models and agentic AI systems. His courses provide cutting-edge insights and hands-on experience in the rapidly evolving field of artificial intelligence.",
  },
   {
    id: 'instructor-joe-natoli',
    name: 'Joe Natoli',
    role: 'UX Strategy Consultant & Speaker',
    image: '/images/happystudent2.png', // Placeholder image
    socialLinks: [
      { platform: 'linkedin', url: '#', icon: 'FaLinkedinIn' },
      { platform: 'website', url: '#', icon: 'FaLink' },
      { platform: 'twitter', url: '#', icon: 'FaTwitter' },
    ],
    rating: 4.5, // Example rating based on his course
    totalCourses: 1, // Based on provided sampleCourses list
    description: "Joe Natoli is a veteran UX consultant with decades of experience helping companies create intuitive and effective digital products. He shares his expertise through practical, no-nonsense training on core UX principles and design.",
  },
  {
    id: 'instructor-lindsay-marsh',
    name: 'Lindsay Marsh',
    role: 'Graphic Designer & Educator',
    image: '/images/happystudent1.png', // Placeholder image
    socialLinks: [
       { platform: 'website', url: '#', icon: 'FaLink' },
        { platform: 'linkedin', url: '#', icon: 'FaLinkedinIn' },
    ],
    rating: 4.6, // Example rating based on her course
    totalCourses: 1, // Based on provided sampleCourses list
    description: "Lindsay Marsh is a professional graphic designer dedicated to teaching the fundamentals of great design. Her courses cover essential principles and software like the Adobe Creative Suite, enabling students to create visually compelling work.",
  },
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
    slug: "mastering-modern-web-development",
    date: "August 15, 2023",
    readTime: "7 min read",
    category: "Technology",
    tags: ["Web Development", "Beginner", "HTML", "CSS", "JavaScript", "React", "Next.js"],
    imageUrl: "/images/coursebanner1.jpg",
    excerpt: "Dive into the world of web development. Learn the essential technologies and build your first project...",
    fullContent: `
## Introduction to Modern Web Development

The landscape of web development is constantly evolving. Gone are the days of static HTML pages; today, we build dynamic, interactive web applications. This guide is designed to give beginners a solid foundation in the core concepts and technologies driving modern web development.

### The Frontend: What Users See

The frontend is everything the user directly interacts with. It's built using three primary languages:

1.  **HTML (HyperText Markup Language):** Provides the structure and content of a web page. Think of it as the skeleton.
2.  **CSS (Cascading Style Sheets):** Controls the presentation and layout. This is the 'skin' and 'clothes' that make the page look good.
3.  **JavaScript (JS):** Adds interactivity and dynamic behavior. This is the 'brain' that makes things happen on the page.

Modern frontend development often involves frameworks and libraries built on JavaScript, such as React, Vue.js, and Angular. These tools help manage complex interfaces and improve development efficiency.

### The Backend: The Server Side

The backend is the server, applications, and database that power the frontend. It handles data storage, business logic, security, and server-side operations. Common backend languages and frameworks include:

*   Node.js (JavaScript)
*   Python (Django, Flask)
*   Ruby (Ruby on Rails)
*   Java (Spring)
*   PHP (Laravel)

Choosing a backend technology often depends on project requirements, team expertise, and scalability needs.

### Databases: Storing Your Data

Web applications typically need to store data, whether it's user information, blog posts, product details, or something else. Databases are essential for this. They fall into two main categories:

*   **Relational Databases (SQL):** Structure data into tables (e.g., PostgreSQL, MySQL, SQLite). Good for structured, interconnected data.
*   **NoSQL Databases:** Offer more flexible data models (e.g., MongoDB, Cassandra, Redis). Often used for unstructured or rapidly changing data.

### Bringing It All Together: The Development Process

Building a web application involves several steps:

1.  **Planning:** Define the project scope, features, and target audience.
2.  **Design:** Create wireframes, mockups, and UI/UX flows.
3.  **Frontend Development:** Build the user interface and client-side logic.
4.  **Backend Development:** Build the server-side logic, APIs, and database interactions.
5.  **Testing:** Ensure the application works correctly and is free of bugs.
6.  **Deployment:** Make the application accessible to users on the internet.
7.  **Maintenance & Iteration:** Continuously improve, update, and fix issues.

### Getting Started

For beginners, focusing on the frontend (HTML, CSS, JavaScript) is a great starting point. Once comfortable, explore a modern framework like React. Then, dive into backend basics and databases. There are countless free and paid resources available online – tutorials, courses, documentation, and coding communities.

Remember to practice consistently by building small projects. This hands-on experience is invaluable.

Happy coding!
`,
    likes: 42,
    commentsCount: 7,
    comments: [ // Placeholder structure for comments - in a real app, this needs a backend
      { id: 101, author: "CodingGuru", date: "August 16, 2023", content: "Great overview! Very helpful for newcomers." },
      { id: 102, author: "WebNovice", date: "August 17, 2023", content: "Thanks for breaking it down. What framework would you recommend for a first project?" },
    ]
  },
  {
    id: 2,
    title: "The Importance of Data Science in Today's World",
    slug: "importance-of-data-science",
    date: "August 01, 2023",
    readTime: "6 min read",
    category: "Data Science",
    tags: ["Data Science", "AI", "Machine Learning", "Big Data", "Analytics"],
    imageUrl: "/images/coursebanner12.jpg",
    excerpt: "Explore how data science is transforming industries and discover the key skills you need to succeed...",
    fullContent: `
## Why Data Science Matters More Than Ever

In the digital age, data is being generated at an unprecedented rate. From social media interactions to sensor readings and financial transactions, every activity leaves a digital footprint. Data science is the field that extracts knowledge and insights from this vast amount of data, helping organizations make better decisions, build innovative products, and understand their users or customers on a deeper level.

### Key Applications of Data Science

Data science is not confined to one industry; its applications are diverse and impactful:

*   **Healthcare:** Predicting disease outbreaks, personalizing treatment plans, drug discovery.
*   **Finance:** Fraud detection, algorithmic trading, risk management.
*   **Retail:** Customer segmentation, personalized recommendations, inventory management.
*   **Marketing:** Campaign optimization, customer behavior analysis, lead scoring.
*   **Transportation:** Optimizing routes, predicting traffic, autonomous vehicles.
*   **Entertainment:** Recommending content (movies, music), analyzing viewer trends.

### Core Components of Data Science

Data science is a multidisciplinary field, drawing on skills from:

1.  **Statistics:** For understanding data distributions, testing hypotheses, and building models.
2.  **Computer Science:** For programming, data structures, algorithms, and system design.
3.  **Domain Expertise:** Understanding the specific industry or problem you are trying to solve is crucial for asking the right questions and interpreting results.
4.  **Mathematics:** Linear algebra, calculus, and discrete math are foundational for many algorithms.

### The Data Science Workflow

A typical data science project follows a pipeline:

*   **Problem Definition:** Clearly define the objective. What problem are you trying to solve? What question are you answering?
*   **Data Collection:** Gather relevant data from various sources.
*   **Data Cleaning and Preprocessing:** Handle missing values, outliers, inconsistencies, and transform data into a usable format. This is often the most time-consuming step.
*   **Exploratory Data Analysis (EDA):** Visualize and summarize the data to uncover patterns, trends, and relationships.
*   **Modeling:** Choose and build statistical or machine learning models based on the problem (e.g., classification, regression, clustering).
*   **Evaluation:** Assess the model's performance using appropriate metrics.
*   **Deployment:** Integrate the model or insights into an application or business process.
*   **Interpretation and Communication:** Explain the findings and their implications to stakeholders, often non-technical ones.

### Becoming a Data Scientist

The path to becoming a data scientist typically involves:

*   Strong foundation in mathematics and statistics.
*   Proficiency in programming languages like Python or R.
*   Experience with data manipulation tools (e.g., Pandas, SQL).
*   Knowledge of machine learning algorithms and libraries (e.g., Scikit-learn, TensorFlow, PyTorch).
*   Data visualization skills (e.g., Matplotlib, Seaborn, Tableau).
*   Continuous learning as the field evolves rapidly.

Data science offers exciting career opportunities with significant impact. If you enjoy working with data, solving complex problems, and using a blend of technical and analytical skills, this field might be for you.
`,
    likes: 78,
    commentsCount: 12,
    comments: [
      { id: 201, author: "DataEnthusiast", date: "August 02, 2023", content: "Excellent summary of the field!" },
      { id: 202, author: "AnalyticMind", date: "August 03, 2023", content: "Spot on! Data cleaning really takes up the most time." },
      { id: 203, author: "BeginnerDS", date: "August 04, 2023", content: "Thanks for outlining the workflow. Very helpful." },
    ]
  },
  {
    id: 3,
    title: "Your First Steps into the World of AI and Machine Learning",
    slug: "ai-machine-learning-first-steps",
    date: "July 20, 2023",
    readTime: "5 min read",
    category: "Artificial Intelligence",
    tags: ["AI", "Machine Learning", "Neural Networks", "Deep Learning", "Beginner"],
    imageUrl: "/images/coursebanner13.jpg",
    excerpt: "Demystifying AI and ML. This post covers the basics and guides you on where to start your learning journey...",
    fullContent: `
## Taking Your First Steps into AI and Machine Learning

Artificial Intelligence (AI) and Machine Learning (ML) are buzzwords you hear everywhere today. They are driving innovations from self-driving cars to personalized recommendations. But what exactly are they, and how can a beginner start exploring this fascinating field?

### What is AI and ML?

*   **Artificial Intelligence (AI):** A broad field focused on creating systems that can perform tasks that typically require human intelligence, such as visual perception, speech recognition, decision-making, and translation.
*   **Machine Learning (ML):** A subset of AI that gives computers the ability to learn from data without being explicitly programmed. Instead of writing specific instructions for every possible scenario, you train a model on data, and it learns to make predictions or decisions.

Think of AI as the goal (creating intelligent machines) and ML as one of the primary ways to achieve that goal (learning from data).

### How Does Machine Learning Work (Simply)?

At its core, ML involves feeding data into an algorithm. The algorithm then builds a model based on patterns it finds in the data. This model can then be used to make predictions or take actions on new, unseen data.

There are main types of ML:

1.  **Supervised Learning:** You train the model on labeled data (data with known inputs and outputs). The model learns to map inputs to outputs. Examples: predicting house prices (regression), classifying emails as spam or not spam (classification).
2.  **Unsupervised Learning:** You train the model on unlabeled data. The model finds hidden patterns or structures within the data. Examples: grouping customers into segments (clustering), dimensionality reduction.
3.  **Reinforcement Learning:** The model learns by trial and error, receiving rewards or penalties based on its actions. Examples: training a robot to walk, developing game-playing AI.

### Getting Started with AI/ML

It might seem daunting, but you can start small. Here’s a possible path:

1.  **Learn Python:** Python is the most popular language for AI/ML due to its extensive libraries (like NumPy, Pandas, Scikit-learn, TensorFlow, PyTorch).
2.  **Understand Fundamental Concepts:** Get a grasp of basic linear algebra, calculus, statistics, and probability. Don't worry about being an expert initially, just understand the core ideas.
3.  **Explore Key Libraries:** Start using libraries like NumPy for numerical operations and Pandas for data manipulation.
4.  **Dive into Machine Learning Libraries:** Learn how to use Scikit-learn, which provides simple and efficient tools for data mining and data analysis.
5.  **Practice with Datasets:** Work on small, publicly available datasets (like those on Kaggle) to build simple models (e.g., linear regression, logistic regression).
6.  **Explore Deep Learning (Optional but Recommended):** Deep learning, a subset of ML using neural networks, has achieved remarkable results in areas like image recognition and natural language processing. Libraries like TensorFlow and PyTorch are essential here.

AI and ML are powerful tools that are reshaping our world. Starting your journey requires patience and consistent learning, but the rewards in terms of understanding and building intelligent systems are immense.
`,
    likes: 65,
    commentsCount: 9,
    comments: [
       { id: 301, author: "AIBeginner", date: "July 21, 2023", content: "This makes it much clearer. Thanks!" },
       { id: 302, author: "MLFan", date: "July 22, 2023", content: "Great points on the different types of learning." },
    ]
  },
   {
    id: 4,
    title: "Boosting Productivity with Effective Time Management Techniques",
    slug: "boosting-productivity-time-management",
    date: "July 10, 2023",
    readTime: "4 min read",
    category: "Productivity",
    tags: ["Productivity", "Time Management", "Tips", "Work-Life Balance"],
    imageUrl: "/images/coursebanner6.jpg",
    excerpt: "Unlock your full potential by implementing simple yet powerful time management strategies...",
    fullContent: `
## Unlock Your Potential: Mastering Time Management

In today's fast-paced world, managing your time effectively is crucial for boosting productivity, reducing stress, and achieving your goals. It's not about working harder, but working smarter. Here are some effective time management techniques you can start implementing today.

### 1. Prioritize Your Tasks

Not all tasks are created equal. Use methods like the Eisenhower Matrix (Urgent/Important) to categorize your tasks and focus on what truly matters. Deal with urgent and important tasks first, schedule important but not urgent ones, delegate urgent but not important tasks, and eliminate tasks that neither.

### 2. Set SMART Goals

Define your goals clearly using the SMART criteria: Specific, Measurable, Achievable, Relevant, Time-bound. Having a clear target helps you prioritize tasks that move you closer to your goals and avoid distractions.

### 3. Plan Your Day (or Week)

Spend a few minutes each morning or the night before planning your day. Schedule specific blocks of time for important tasks. Use a planner, calendar app, or a simple to-do list. Having a roadmap reduces decision fatigue and helps you stay on track.

### 4. Batch Similar Tasks

Group similar tasks together, such as answering emails, making phone calls, or administrative work. This minimizes context switching, which can be a significant time drain, and helps you get into a focused flow for that specific type of work.

### 5. Use Time-Blocking or the Pomodoro Technique

*   **Time Blocking:** Allocate specific blocks of time in your calendar for different tasks or types of work. Treat these blocks like appointments you can't miss.
*   **Pomodoro Technique:** Work in focused bursts (e.g., 25 minutes) followed by short breaks (e.g., 5 minutes). After several cycles, take a longer break. This helps maintain concentration and prevents burnout.

### 6. Minimize Distractions

Identify your biggest distractions (social media, notifications, noisy environment) and take steps to mitigate them. Turn off unnecessary notifications, close irrelevant tabs, or use website blockers during focused work periods.

### 7. Learn to Say No

It's okay to decline requests or commitments that don't align with your priorities or that you genuinely don't have time for. Overcommitting is a surefire way to become overwhelmed and unproductive.

### 8. Take Regular Breaks

Working non-stop is counterproductive. Short, regular breaks help refresh your mind, prevent fatigue, and can actually boost your overall productivity and creativity. Step away from your workspace, stretch, or go for a short walk.

### 9. Review and Adjust

At the end of each day or week, review how you spent your time. What worked well? What didn't? Where did you get distracted? Use these insights to refine your techniques and planning for the future.

Implementing these techniques takes practice, but even adopting just a few can make a significant difference in your productivity and help you feel more in control of your time.
`,
    likes: 55,
    commentsCount: 5,
    comments: [
       { id: 401, author: "ProdMaster", date: "July 11, 2023", content: "Great list! The Pomodoro technique saved my study sessions." },
       { id: 402, author: "BusyBee", date: "July 12, 2023", content: "Prioritization is key. Need to practice saying no more often!" },
    ]
  },
  {
    id: 5,
    title: "The Power of React Hooks: Simplifying State and Side Effects",
    slug: "the-power-of-react-hooks",
    date: "August 22, 2023",
    readTime: "6 min read",
    category: "Technology",
    tags: ["React", "Hooks", "JavaScript", "Frontend", "State Management"],
    imageUrl: "/images/coursebanner12.jpg",
    excerpt: "Explore how React Hooks revolutionized functional components and simplified state management and side effects...",
    fullContent: `
## The Power of React Hooks

React Hooks were introduced in React 16.8, fundamentally changing how developers write React components, particularly functional ones. Before Hooks, state and side effects could only be managed within class components. Hooks provide a way to "hook into" React features like state and lifecycle methods directly from function components.

### Why Hooks?

Hooks address several issues with class components:

*   **Complex Logic Reusability:** Sharing stateful logic between components was difficult (e.g., using render props or higher-order components), leading to wrapper hell. Hooks make it easier to extract and reuse stateful logic.
*   **Confusing Classes:** Classes can be confusing for JavaScript developers, especially regarding \`this\` binding. Hooks use standard JavaScript functions.
*   **Monolithic Components:** Lifecycle methods (like \`componentDidMount\`, \`componentDidUpdate\`, \`componentWillUnmount\`) often contained unrelated logic (e.g., data fetching and event listeners in \`componentDidMount\`), making components hard to understand and test. Hooks allow you to organize logic based on *what* it does, not on a lifecycle method name.

### Key Hooks

1.  **\`useState\`:** Adds state to function components. It returns a stateful value and a function to update it.
    \`\`\`javascript
    import React, { useState } from 'react';

    function Counter() {
      const [count, setCount] = useState(0);

      return (
        <div>
          <p>You clicked {count} times</p>
          <button onClick={() => setCount(count + 1)}>
            Click me
          </button>
        </div>
      );
    }
    \`\`\`

2.  **\`useEffect\`:** Performs side effects in function components. It's a close replacement for \`componentDidMount\`, \`componentDidUpdate\`, and \`componentWillUnmount\`. It takes a function that contains the effect logic. By default, effects run after every render. You can control when it runs using the dependency array.
    \`\`\`javascript
    import React, { useState, useEffect } from 'react';

    function TitleUpdater() {
      const [count, setCount] = useState(0);

      useEffect(() => {
        document.title = \`You clicked {count} times\`;

        // Cleanup function (like componentWillUnmount or cleanup in componentDidUpdate)
        return () => {
          // e.g., remove event listeners, cancel subscriptions
        };
      }, [count]); // Only re-run if count changes

      return (
        <div>
          <p>Click the button to change the document title.</p>
          <button onClick={() => setCount(count + 1)}>
            Click me ({count})
          </button>
        </div>
      );
    }
    \`\`\`

3.  **\`useContext\`:** Subscribes to React context without the need for wrapper components.
4.  **\`useReducer\`:** An alternative to \`useState\` for more complex state logic, often useful when the next state depends on the previous one or when state transitions involve multiple sub-values.
5.  **\`useRef\`:** Returns a mutable ref object whose \`.current\` property is initialized to the passed argument (\`initialValue\`). The returned object will persist for the full lifetime of the component. Useful for accessing DOM nodes or storing mutable values that don't trigger re-renders.
6.  **\`useMemo\` / \`useCallback\`:** Optimization hooks to memoize expensive calculations or functions, preventing unnecessary re-renders.

### Building Custom Hooks

One of the most powerful features is the ability to create your own custom Hooks. A custom Hook is a JavaScript function whose name starts with "use" and that may call other Hooks. This allows you to extract component logic into reusable functions.

\`\`\`javascript
import { useState, useEffect } from 'react';

function useFetchData(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(\`HTTP error! status: {response.status}\`);
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]); // Re-run if the URL changes

  return { data, loading, error };
}

// Usage in a component:
// const { data, loading, error } = useFetchData('/api/items');
\`\`\`

### Rules of Hooks

There are two important rules:
1.  **Only call Hooks at the top level:** Don’t call Hooks inside loops, conditions, or nested functions.
2.  **Only call Hooks from React function components:** Don’t call Hooks from regular JavaScript functions (except from other custom Hooks).

### Conclusion

React Hooks have made functional components incredibly powerful and easier to work with. They promote better code organization, reusability, and readability. If you're working with React, mastering Hooks is essential for building modern, efficient applications.
`,
    likes: 68,
    commentsCount: 12,
    comments: [
      { id: 201, author: "ReactFan", date: "August 23, 2023", content: "Hooks changed everything for me! So much cleaner." },
      { id: 202, author: "BeginnerDev", date: "August 24, 2023", content: "This explanation of useEffect's dependency array is super helpful. Thanks!" },
      { id: 203, author: "AskMeAnything", date: "August 25, 2023", content: "Great intro! Any tips on testing components that use custom hooks?" },
    ]
  },
  {
    id: 6,
    title: "Writing Readable and Maintainable Code: Principles of Clean Code",
    slug: "writing-readable-maintainable-code",
    date: "August 29, 2023",
    readTime: "8 min read",
    category: "Software Development",
    tags: ["Clean Code", "Best Practices", "Software Engineering", "Refactoring", "Maintainability"],
    imageUrl: "/images/coursebanner13.jpg",
    excerpt: "Learn fundamental principles to write code that is easy to understand, modify, and debug for you and your team...",
    fullContent: `
## Writing Readable and Maintainable Code: Principles of Clean Code

Writing code that works is only half the battle. The other, often more challenging, half is writing code that is *readable*, *understandable*, and *maintainable*. This is the essence of "Clean Code." While the term was popularized by Robert C. Martin (Uncle Bob), the principles are universal and apply across languages and paradigms.

### Why Clean Code Matters

*   **Reduced Bugs:** Hard-to-understand code is prone to errors. Clear code is easier to debug.
*   **Faster Development:** When you need to add a feature or fix a bug, understanding the existing code is the first step. Clean code speeds this up significantly.
*   **Improved Collaboration:** Teams work more effectively when everyone can easily read and understand each other's code.
*   **Easier Refactoring:** When code needs improvement, clean code is much simpler to refactor without introducing regressions.
*   **Job Security (and Sanity):** Maintaining messy codebases is painful and slow. Clean code makes maintenance less burdensome.

### Core Principles of Clean Code

1.  **Meaningful Names:**
    *   Variables, functions, classes, and files should have names that clearly indicate their purpose, intent, and usage.
    *   Avoid single letters (unless it's a loop counter), abbreviations, or obscure terms.
    *   Examples: \`customerOrders\`, \`calculateTotalPrice\`, \`UserProfileService\` are better than \`custOrd\`, \`calc\`, \`UPS\`.

2.  **Functions Should Do One Thing:**
    *   Functions should be small and perform a single, well-defined task.
    *   If a function does multiple things, it's harder to name, test, and understand.
    *   Aim for functions that fit on a screen without scrolling.

3.  **Don't Repeat Yourself (DRY):**
    *   Every piece of knowledge or logic should have a single, unambiguous representation within a system.
    *   Duplicated code is a maintenance nightmare – fix a bug in one place, forget the others, and introduce inconsistency.
    *   Abstract common logic into functions or classes.

4.  **Comments Are Not a Crutch:**
    *   Ideally, your code should be so clear that it requires minimal comments.
    *   Comments should explain *why* something is done, not *what* is being done (which the code itself should convey).
    *   Outdated comments are worse than no comments.

5.  **Prefer Readability Over Cleverness:**
    *   Clever, overly complex code might impress some, but it's usually harder to understand and maintain.
    *   Write code that is straightforward and easy for the average developer (including your future self!) to grasp quickly.

6.  **Error Handling Matters:**
    *   Handle errors gracefully. Don't return null, throw exceptions, or use error codes that are hard to interpret.
    *   Error handling logic should be distinct from normal processing logic.

7.  **Keep It Simple, Stupid (KISS):**
    *   Avoid unnecessary complexity. Design simple solutions to problems.
    *   The simplest solution that works is usually the best.

8.  **Consistency:**
    *   Maintain a consistent coding style, naming conventions, and design patterns throughout the codebase. Use linters and formatters to enforce this.

### Conclusion

Writing clean code is a discipline and a skill that improves with practice. It's not just about aesthetics; it's about writing code that is robust, scalable, and easy to evolve. Adopting these principles will make you a more effective developer and contribute positively to any project you work on. Start by focusing on meaningful names and small functions, and gradually integrate other principles into your daily coding habits.
`,
    likes: 91,
    commentsCount: 15,
    comments: [
      { id: 301, author: "SeniorDev", date: "August 30, 2023", content: "Excellent points! Meaningful names are so underrated." },
      { id: 302, author: "CodeNewbie", date: "August 31, 2023", content: "This is really helpful as I'm starting out. Will try to follow these." },
    ]
  },
  {
    id: 7,
    title: "AI and Machine Learning: A Gentle Introduction",
    slug: "ai-and-machine-learning-introduction",
    date: "September 5, 2023",
    readTime: "10 min read",
    category: "Technology",
    tags: ["AI", "Machine Learning", "Data Science", "Algorithms", "Beginner"],
    imageUrl: "/images/coursebanner14.jpg",
    excerpt: "Demystifying the buzzwords: Understand the basics of Artificial Intelligence and Machine Learning and their applications...",
    fullContent: `
## AI and Machine Learning: A Gentle Introduction

Artificial Intelligence (AI) and Machine Learning (ML) are everywhere today, from virtual assistants and recommendation systems to self-driving cars and medical diagnoses. But what exactly are they? This guide provides a simple overview to demystify these powerful fields.

### What is Artificial Intelligence (AI)?

AI is a broad concept referring to the ability of machines to perform tasks that typically require human intelligence. This includes learning, problem-solving, perception, decision-making, and even language understanding. AI is the overarching goal of creating intelligent machines.

### What is Machine Learning (ML)?

Machine Learning is a *subset* of AI. It's the science of getting computers to learn from data without being explicitly programmed. Instead of writing specific instructions for every possible scenario, you provide an ML algorithm with data, and it learns patterns and makes predictions or decisions based on those patterns.

**Think of it this way:**
*   **AI** is the ambition (making machines intelligent).
*   **ML** is one key method or technique to achieve that ambition (learning from data).

### How Does Machine Learning Work (Simplified)?

At its core, ML involves:

1.  **Data:** Collecting and preparing a large dataset relevant to the problem (e.g., images of cats and dogs, historical stock prices, customer purchase history).
2.  **Algorithm:** Choosing or designing a machine learning algorithm (like Linear Regression, Decision Tree, Neural Network).
3.  **Training:** Feeding the data into the algorithm. The algorithm learns patterns, relationships, and rules from the data, adjusting its internal parameters.
4.  **Model:** The output of the training process is a "model." This model is essentially a function or set of rules derived from the data.
5.  **Prediction/Inference:** Using the trained model to make predictions or decisions on *new*, unseen data.

### Types of Machine Learning

ML is typically categorized based on the type of data and the nature of the learning process:

1.  **Supervised Learning:**
    *   The algorithm is trained on labeled data (input data paired with the correct output label).
    *   The goal is to learn a mapping from inputs to outputs.
    *   Examples:
        *   **Classification:** Predicting a category (e.g., spam or not spam, cat or dog, disease or no disease).
        *   **Regression:** Predicting a continuous value (e.g., house price, stock price, temperature).

2.  **Unsupervised Learning:**
    *   The algorithm is trained on unlabeled data.
    *   The goal is to find patterns, structures, or relationships within the data.
    *   Examples:
        *   **Clustering:** Grouping similar data points together (e.g., customer segmentation).
        *   **Dimensionality Reduction:** Reducing the number of features while retaining important information.

3.  **Reinforcement Learning:**
    *   An agent learns to make decisions by taking actions in an environment to maximize a cumulative reward.
    *   Learns through trial and error based on feedback (rewards or penalties).
    *   Examples: Training a robot to walk, playing games (like AlphaGo).

### Deep Learning

Deep Learning is a *subset* of Machine Learning that uses artificial neural networks with multiple layers ("deep" networks). These networks are particularly good at learning complex patterns directly from raw data, such as images, audio, and text. Deep learning powers many of the recent breakthroughs in AI, like sophisticated image recognition and natural language processing.

### Applications of AI & ML

*   **Natural Language Processing (NLP):** Understanding and generating human language (translation, sentiment analysis, chatbots).
*   **Computer Vision:** Enabling computers to "see" and interpret images/videos (facial recognition, object detection).
*   **Recommendation Systems:** Suggesting products, movies, or music based on user behavior (Netflix, Amazon, Spotify).
*   **Predictive Analytics:** Forecasting future trends or events (stock market prediction, fraud detection).
*   **Healthcare:** Medical image analysis, drug discovery, personalized medicine.

### Getting Started

If you're interested in diving deeper:
*   Strengthen your skills in **mathematics** (linear algebra, calculus, statistics).
*   Learn a programming language popular in ML, like **Python** (with libraries like NumPy, pandas, scikit-learn, TensorFlow, PyTorch).
*   Explore online courses and resources dedicated to ML and Data Science.
*   Work on small projects with public datasets.

### Conclusion

AI and Machine Learning are transformative technologies. While the underlying math and algorithms can be complex, the core concepts of learning from data are accessible. Understanding these basics is a great first step into a rapidly evolving and exciting field.
`,
    likes: 115,
    commentsCount: 23,
    comments: [
      { id: 401, author: "AIFanatic", date: "September 6, 2023", content: "Great overview, especially the distinction between AI and ML!" },
      { id: 402, author: "DataNovice", date: "September 7, 2023", content: "Supervised vs Unsupervised is much clearer now. Thanks!" },
      { id: 403, author: "TechGeek", date: "September 8, 2023", content: "What are some good beginner datasets to practice with Python?" },
    ]
  },
  {
    id: 8,
    title: "Stepping into the Cloud: A Beginner's Guide to AWS, Azure, and GCP",
    slug: "stepping-into-the-cloud-guide",
    date: "September 12, 2023",
    readTime: "9 min read",
    category: "Technology",
    tags: ["Cloud Computing", "AWS", "Azure", "GCP", "Infrastructure", "Beginner"],
    imageUrl: "/images/coursebanner12.jpg",
    excerpt: "Understand the basics of cloud computing and the major players like AWS, Azure, and Google Cloud Platform...",
    fullContent: `
## Stepping into the Cloud: A Beginner's Guide

Cloud computing has become the standard for deploying applications, storing data, and running services. It refers to the delivery of computing resources—including servers, storage, databases, networking, software, analytics, and intelligence—over the Internet ("the cloud") to offer faster innovation, flexible resources, and economies of scale.

Instead of owning and maintaining physical data centers and servers, you rent access to computing resources from a cloud provider.

### Why Use the Cloud?

*   **Cost Savings:** Pay-as-you-go models, reduced infrastructure costs (hardware, electricity, cooling, maintenance).
*   **Scalability:** Easily scale resources up or down based on demand. Handle traffic spikes without over-provisioning.
*   **Reliability and Availability:** Cloud providers offer high uptime guarantees and built-in redundancy.
*   **Global Reach:** Deploy applications closer to your users worldwide with multiple data centers.
*   **Innovation:** Access a vast array of services (AI/ML, IoT, big data, etc.) without building them yourself.
*   **Speed:** Quickly deploy and iterate on applications.

### Service Models

Cloud services are typically offered in three main categories:

1.  **Infrastructure as a Service (IaaS):**
    *   Provides fundamental computing resources over the internet on a pay-per-use basis.
    *   You manage the operating system, applications, and data, while the provider manages the hardware, networking, and storage.
    *   Examples: Virtual Machines (VMs), raw storage, virtual networks.
    *   Analogy: Renting a bare apartment – you get the structure and utilities, but you furnish and manage everything inside.

2.  **Platform as a Service (PaaS):**
    *   Provides a platform allowing customers to develop, run, and manage applications without the complexity of building and maintaining the infrastructure typically associated with developing and launching an app.
    *   You manage your applications and data, while the provider manages the OS, runtime, middleware, etc.
    *   Examples: Database services, web hosting platforms, development tools.
    *   Analogy: Renting a furnished apartment – you get the structure, utilities, and furniture, but you live in it and manage your belongings.

3.  **Software as a Service (SaaS):**
    *   Provides ready-to-use software applications over the internet on demand.
    *   The provider manages everything: the application, data, runtime, OS, infrastructure.
    *   Examples: Email services (Gmail, Outlook 365), CRM software (Salesforce), collaboration tools (Slack, Google Workspace).
    *   Analogy: Checking into a hotel – you just use the service; everything else is managed for you.

### Major Cloud Providers

The cloud market is dominated by a few key players:

1.  **Amazon Web Services (AWS):** The largest and most mature cloud platform, offering a vast range of services.
2.  **Microsoft Azure:** The second largest, popular among enterprises already using Microsoft products.
3.  **Google Cloud Platform (GCP):** Known for its strengths in data analytics, machine learning, and containerization.

While they have different names for their services, they generally offer comparable core functionalities across compute (VMs), storage, databases, networking, etc.

### Getting Started with the Cloud

*   **Start with a Free Tier:** AWS, Azure, and GCP all offer free tiers for many services, allowing you to experiment without cost.
*   **Focus on Core Services:** Begin by learning the basics of VMs (EC2 in AWS, Virtual Machines in Azure, Compute Engine in GCP), storage (S3, Blob Storage, Cloud Storage), and databases (RDS, Azure SQL Database, Cloud SQL).
*   **Explore a Specific Use Case:** Try deploying a simple web application or setting up a basic database.
*   **Utilize Documentation and Tutorials:** The providers have extensive documentation and numerous online resources available.

### Conclusion

Cloud computing is no longer a niche technology; it's a fundamental part of modern IT infrastructure. Understanding cloud basics and getting hands-on experience with one or more of the major providers is a valuable step for any developer, IT professional, or business looking to leverage scalable, flexible, and cost-effective computing resources.
`,
    likes: 78,
    commentsCount: 14,
    comments: [
      { id: 501, author: "CloudCurious", date: "September 13, 2023", content: "This clears up the IaaS, PaaS, SaaS difference nicely!" },
      { id: 502, author: "InfraGuy", date: "September 14, 2023", content: "Good intro to the big three. Which one is best for beginners?" },
    ]
  },
  {
    id: 9,
    title: "The Importance of Software Testing: Types, Benefits, and Best Practices",
    slug: "importance-of-software-testing",
    date: "September 19, 2023",
    readTime: "7 min read",
    category: "Software Development",
    tags: ["Testing", "Quality Assurance", "Unit Testing", "Integration Testing", "End-to-End Testing", "Software Engineering"],
    imageUrl: "/images/coursebanner13.jpg",
    excerpt: "Discover the crucial role of testing in software development and explore different testing types and their benefits...",
    fullContent: `
## The Importance of Software Testing

Imagine launching a new feature only to have users immediately report critical bugs. Or deploying an update that crashes the entire application. This is where software testing comes in. Testing is a critical phase in the software development lifecycle, essential for delivering high-quality, reliable, and robust software.

### Why is Testing Important?

*   **Bug Detection:** The primary goal is to find defects (bugs) early in the development process, when they are cheaper and easier to fix.
*   **Improved Quality:** Ensures the software meets requirements and performs as expected.
*   **Increased Confidence:** Provides confidence to developers, stakeholders, and users that the software is reliable.
*   **Reduced Costs:** Fixing bugs in production is significantly more expensive than fixing them during development or testing.
*   **Better User Experience:** Reliable software leads to satisfied users and positive feedback.
*   **Supports Refactoring:** Allows developers to safely refactor (restructure) code knowing that tests will catch any accidental breakages.

### Key Types of Software Testing

Testing can be categorized in many ways, but here are some common types, often seen as levels:

1.  **Unit Testing:**
    *   Tests individual units or components of source code (e.g., a function, a method, a class).
    *   Performed by developers during development.
    *   Focus: Verify that each unit of the software performs as designed.
    *   Goal: Is the smallest piece of code correct?

2.  **Integration Testing:**
    *   Tests the interaction between integrated units or components.
    *   Performed after unit testing.
    *   Focus: Verify that different parts of the system work together correctly.
    *   Goal: Do the connected pieces work together?

3.  **System Testing:**
    *   Tests the complete and integrated software system.
    *   Focus: Verify the system meets the specified requirements (functional and non-functional like performance, security).
    *   Performed by a dedicated testing team or QA.
    *   Goal: Does the entire system meet the requirements?

4.  **Acceptance Testing (User Acceptance Testing - UAT):**
    *   Tests whether the system is acceptable to the end-users or clients.
    *   Performed by actual end-users or client representatives.
    *   Focus: Verify the software meets business needs and is ready for deployment.
    *   Goal: Does the software meet the user's needs?

Other important types include:
*   **Performance Testing:** Evaluates how the software performs under various loads.
*   **Security Testing:** Identifies vulnerabilities in the software.
*   **Usability Testing:** Assesses how easy the software is to use.
*   **Automated Testing:** Using software tools to execute tests and compare actual outcomes with predicted ones.

### Best Practices for Testing

*   **Test Early and Often:** Integrate testing throughout the development lifecycle.
*   **Automate Tests:** Especially unit, integration, and some end-to-end tests, to run them frequently and consistently.
*   **Write Testable Code:** Design your code components to be easy to isolate and test.
*   **Use a Testing Framework:** Leverage libraries and frameworks specific to your language/platform (e.g., Jest, Mocha, JUnit, Pytest).
*   **Aim for Good Test Coverage:** While 100% coverage isn't always necessary or practical, aim for high coverage of critical paths and complex logic.
*   **Write Clear and Concise Tests:** Tests should be easy to read and understand what they are verifying.
*   **Make Tests Independent:** Tests should not rely on the outcome or state of other tests.

### Conclusion

Testing is not just an optional step; it's a fundamental practice for building reliable software. Embracing a testing mindset and incorporating various testing types into your workflow will lead to fewer bugs, higher quality products, faster development cycles in the long run, and ultimately, happier users. Start small by adding unit tests to your code, and gradually expand your testing efforts.
`,
    likes: 55,
    commentsCount: 9,
    comments: [
      { id: 601, author: "QAGuru", date: "September 20, 2023", content: "Essential topic! Automated testing is key for modern development." },
      { id: 602, author: "DeveloperMike", date: "September 21, 2023", content: "As a developer, I sometimes struggle with *what* to unit test. Any tips?" },
    ]
  },
  // Add more blog posts with the same structure
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



export const latestPartners = [
  {
    id: 'partner-1',
    name: 'Company A', // Name for alt text/tooltip
    logoUrl: '/images/companieslogo1.png', // Replace with actual logo paths (e.g., in public/logos)
    websiteUrl: '#', // Optional: URL to partner website
  },
  {
    id: 'partner-2',
    name: 'Company B',
    logoUrl: '/images/companieslogo2.png',
    websiteUrl: '#',
  },
  {
    id: 'partner-3',
    name: 'Company C',
    logoUrl: '/images/companieslogo3.png',
    websiteUrl: '#',
  },
  {
    id: 'partner-4',
    name: 'Company D',
    logoUrl: '/images/companieslogo4.png',
    websiteUrl: '#',
  },
  {
    id: 'partner-5',
    name: 'Company E',
    logoUrl: '/images/companieslogo1.png',
    websiteUrl: '#',
  },
  {
    id: 'partner-6',
    name: 'Company F',
    logoUrl: '/images/companieslogo2.png',
    websiteUrl: '#',
  },
  {
    id: 'partner-7',
    name: 'Company G',
    logoUrl: '/images/companieslogo3.png',
    websiteUrl: '#',
  },
  {
    id: 'partner-8',
    name: 'Company H',
    logoUrl: '/images/companieslogo4.png',
    websiteUrl: '#',
  },
  // Add more partners with unique data
];



// --- Sample User Data (as a Student) ---
export const SAMPLE_USER_STUDENT = {
  id: 'user_std_uuid_12345', // Matches Student.userId
  name: 'Alex Johnson',
  email: 'alex.johnson@example.com',
  role: 'student', // Matches UserRole enum
  createdAt: '2023-01-01T10:00:00.000Z', // ISO 8601 format
  updatedAt: '2024-07-28T12:00:00.000Z', // ISO 8601 format
  // student relation is conceptual here, links via ID
  // userPreference, notifications, certificates are arrays/objects linked elsewhere
  emailVerified: true,
  image: '/images/alex_johnson_avatar.jpg', // Placeholder avatar
  sessions: [], // Represents a relation, empty array in sample
  accounts: [], // Represents a relation, empty array in sample
  banned: false,
  banReason: null,
  banExpires: null,
};



export const SAMPLE_STUDENT_PROFILE = {
  id: '1', // Matches Student.id
  userId: SAMPLE_USER_STUDENT.id, // Link back to the sample user

  // --- Enrolled Courses with Progress ---
  // This array represents records in a conceptual StudentCourse model/join table
  enrolledCourses: [
    {
      // Represents StudentCourse record for Course ID '1' (Python)
      studentId: '1', // Redundant in this object structure, but conceptually correct
      courseId: '1', // Link to the Course blueprint data (from sampleCourses.js)
      enrollmentDate: '2023-01-15T08:00:00.000Z', // ISO 8601 format
      lastAccessed: '2024-07-28T10:00:00.000Z', // Last time student accessed this course

      // Course-level progress for THIS student in THIS course (Completed)
      courseProgressPercentage: 100,
      isCourseComplete: true,
      certificateId: 'cert_uuid_python_complete', // Link to a Certificate record if one exists

      // Detailed chapter progress for THIS student in THIS course.
      // This array lists the progress status for each completable chapter.
      // You would dynamically generate this list based on the Course 1 blueprint
      // when building the real application, marking progress here.
      chapterProgress: [
        // Example entries for a COMPLETED course: All relevant chapters marked true/100%
        { sectionIndex: 0, chapterIndex: 0, isComplete: true, userProgress: 100, lastAccessed: '2023-01-16T09:00:00.000Z' },
        { sectionIndex: 0, chapterIndex: 1, isComplete: true, userProgress: 100, lastAccessed: '2023-01-17T08:30:00.000Z' },
        { sectionIndex: 0, chapterIndex: 2, isComplete: true, userProgress: 100, lastAccessed: '2023-01-18T11:15:00.000Z' },
        { sectionIndex: 1, chapterIndex: 0, isComplete: true, userProgress: 100, lastAccessed: '2023-01-25T14:00:00.000Z' },
        // ... (Add entries for ALL other chapters in Course 1 that have isCompletable: true, all with isComplete: true, userProgress: 100)
        { sectionIndex: 3, chapterIndex: 4, isComplete: true, userProgress: 100, lastAccessed: '2023-07-27T17:30:00.000Z' }, // Example final chapter completed
      ],

      // --- Conceptual Data (Would likely be separate tables linked by studentId + courseId) ---
      // userNotes: [], // Array of Note objects for this student in this course
      // courseChatHistory: [], // Array of ChatMessage objects for this student in this course thread
    },
    {
      // Represents StudentCourse record for Course ID '5' (JavaScript)
      studentId: '1',
      courseId: '5',
      enrollmentDate: '2024-03-10T14:30:00.000Z',
      lastAccessed: '2024-07-28T15:30:00.000Z', // Most recent access

      // Progress for this course (In Progress - Finished Section 1, Started Section 2)
      // Assuming Course 5 has ~60 completable chapters. Completing 4 chapters is roughly 6.7%.
      // Starting Section 2 adds to this.
      courseProgressPercentage: 18, // Example calculation based on chapters completed/in progress
      isCourseComplete: false,
      certificateId: null, // Not yet completed

      chapterProgress: [
        // Chapters from Section 1 (Fundamentals - Part 1) - Completed
        { sectionIndex: 0, chapterIndex: 0, isComplete: true, userProgress: 100, lastAccessed: '2024-03-11T09:00:00.000Z' },
        { sectionIndex: 0, chapterIndex: 1, isComplete: true, userProgress: 100, lastAccessed: '2024-03-12T10:00:00.000Z' },
        { sectionIndex: 0, chapterIndex: 2, isComplete: true, userProgress: 100, lastAccessed: '2024-03-13T11:00:00.000Z' },
        { sectionIndex: 0, chapterIndex: 3, isComplete: true, userProgress: 100, lastAccessed: '2024-03-14T14:00:00.000Z' },
        // Chapters from Section 2 (Fundamentals - Part 2) - Partially started
        { sectionIndex: 1, chapterIndex: 0, isComplete: false, userProgress: 75, lastAccessed: '2024-07-28T15:30:00.000Z' }, // Currently watching/doing
        { sectionIndex: 1, chapterIndex: 1, isComplete: false, userProgress: 20, lastAccessed: '2024-07-25T09:00:00.000Z' }, // Started but left off
        { sectionIndex: 1, chapterIndex: 2, isComplete: false, userProgress: 0, lastAccessed: null }, // Not started
        { sectionIndex: 1, chapterIndex: 3, isComplete: false, userProgress: 0, lastAccessed: null }, // Not started
        // ... (Add entries for ALL other chapters in Course 5 that have isCompletable: true, mostly with isComplete: false, userProgress: 0)
      ],
      // userNotes: [], // Link/ID for notes in this course
      // courseChatHistory: [], // Link/ID for chat in this course
    },
    {
      // Represents StudentCourse record for Course ID '10' (PMP)
      studentId: '1',
      courseId: '10',
      enrollmentDate: '2024-07-20T11:00:00.000Z', // Most recent enrollment
      lastAccessed: '2024-07-28T16:00:00.000Z', // Very recently accessed

      // Progress for this course (Just Started)
      // Assuming Course 10 has ~45 completable chapters. Completing 2-3 is a small percentage.
      courseProgressPercentage: 6, // Example calculation
      isCourseComplete: false,
       certificateId: null, // Not yet completed

      chapterProgress: [
        // Chapters from Section 0 (Introduction) - Partially completed
        { sectionIndex: 0, chapterIndex: 0, isComplete: true, userProgress: 100, lastAccessed: '2024-07-20T10:00:00.000Z' },
        { sectionIndex: 0, chapterIndex: 1, isComplete: true, userProgress: 100, lastAccessed: '2024-07-20T11:00:00.000Z' },
        { sectionIndex: 0, chapterIndex: 2, isComplete: false, userProgress: 60, lastAccessed: '2024-07-28T16:00:00.000Z' }, // Currently watching
        { sectionIndex: 0, chapterIndex: 3, isComplete: false, userProgress: 0, lastAccessed: null }, // Not started
         // ... (Add entries for ALL other chapters in Course 10 that have isCompletable: true, mostly with isComplete: false, userProgress: 0)
      ],
      // userNotes: [], // Link/ID for notes in this course
      // courseChatHistory: [], // Link/ID for chat in this course
    },
     {
      // Represents StudentCourse record for Course ID '13' (Graphic Design)
      studentId: '1',
      courseId: '13',
      enrollmentDate: '2024-07-25T09:00:00.000Z',
      lastAccessed: null, // Never accessed

      // Progress for this course (Not Started)
      courseProgressPercentage: 0,
      isCourseComplete: false,
      certificateId: null, // Not yet completed

      chapterProgress: [
         // Populate this with entries for all completable chapters from Course 13 blueprint
         // All entries should have isComplete: false and userProgress: 0 initially
         // Example structure:
         // { sectionIndex: 0, chapterIndex: 0, isComplete: false, userProgress: 0, lastAccessed: null },
         // { sectionIndex: 0, chapterIndex: 1, isComplete: false, userProgress: 0, lastAccessed: null },
         // ... (Add entries for ALL chapters in Course 13 that have isCompletable: true, all with isComplete: false, userProgress: 0)
      ],
      // userNotes: [], // Link/ID for notes in this course
      // courseChatHistory: [], // Link/ID for chat in this course
    }
    // Add more StudentCourse entries here for other enrolled courses if needed
  ],

  // --- Wishlist ---
  // Represents the wishList relation - an array of Course objects (or minimal data)
  wishList: [
     // Using minimal course info for the sample JSON
     { id: '4', title: 'The Web Developer Bootcamp 2025', thumbnail: '/images/coursebanner13.jpg' },
     { id: '6', title: 'Ultimate AWS Certified Solutions Architect Associate', thumbnail: '/images/coursebanner1.jpg' },
     { id: '8', title: 'The Complete Agentic AI Engineering Course (2025)', thumbnail: '/images/coursebanner13.jpg' },
  ],

  // --- Payment History ---
  // Represents the PaymentHistory relation - array of dummy payment entries
  PaymentHistory: [
    { id: 'pay_uuid_001', amount: 12.99, date: '2023-01-15T08:00:00.000Z', description: 'Enrollment: Python Bootcamp', status: 'Completed', currency: 'USD' },
    { id: 'pay_uuid_002', amount: 12.99, date: '2024-03-10T14:30:00.000Z', description: 'Enrollment: JS Course 2025', status: 'Completed', currency: 'USD' },
    { id: 'pay_uuid_003', amount: 15.99, date: '2024-07-20T11:00:00.000Z', description: 'Enrollment: PMP Exam Prep', status: 'Completed', currency: 'USD' },
    { id: 'pay_uuid_004', amount: 10.99, date: '2024-07-25T09:00:00.000Z', description: 'Enrollment: Graphic Design', status: 'Completed', currency: 'USD' },
    // ... add more dummy payment entries if needed
  ],

  // --- Quiz Scores ---
  // Represents the QuizAttempt relation - array of dummy quiz attempt entries
  quizScores: [
    {
      id: 'quiz_att_uuid_abc',
      courseId: '1',
      // These indices are for context, linking to which part of the course the quiz relates.
      relatedSectionIndex: 1, // Corresponds to 'Core Python: Fundamentals' section in Course 1
      relatedChapterIndex: null, // If quiz is for the whole section
      quizTitle: 'Core Python Fundamentals Quiz',
      score: 85,
      totalQuestions: 10,
      date: '2023-02-01T18:00:00.000Z',
    },
    {
      id: 'quiz_att_uuid_def',
      courseId: '1',
      relatedSectionIndex: 3, // Corresponds to 'Project Building Phase' section in Course 1
      relatedChapterIndex: 4, // Corresponds to 'Day 100 Project: Final Capstone' chapter
      quizTitle: 'Final Python Project Quiz',
      score: 92,
      totalQuestions: 15,
      date: '2023-07-10T20:00:00.000Z',
    },
    {
      id: 'quiz_att_uuid_ghi',
      courseId: '5',
      relatedSectionIndex: 0, // Corresponds to 'JavaScript Fundamentals - Part 1' section in Course 5
      relatedChapterIndex: null,
      quizTitle: 'JS Fundamentals Part 1 Quiz',
      score: 78,
      totalQuestions: 8,
      date: '2024-03-15T10:00:00.000Z',
    },
    // Add sample quiz scores for other enrolled courses if applicable
  ],

  // --- Additional conceptual fields for dashboard display ---
  //  These might be calculated on the frontend or included if you add them to your schema
   totalCoursesEnrolled: 4, // (Calculated from enrolledCourses.length)
   totalCoursesCompleted: 1, // (Calculated from enrolledCourses.filter)
  totalCertificatesEarned: 1, // (Calculated from enrolledCourses with certificateId or a separate Certificate model)
   overallProgressAverage: 31, // (Example average: (100 + 18 + 6 + 0) / 4 = 31)
   totalHoursTracked: 105, // (Sum of userProgress * chapterDuration across all chapters)
};