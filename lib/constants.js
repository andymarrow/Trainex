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
    // New Fields Added Below:
    hoursSpent: 60, // Estimated hours of video content + guided coding
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
    sections: [
      {
        sectionTitle: 'Introduction and Environment Setup',
        chapters: [
          { chapterTitle: 'Welcome to 100 Days of Code', videoUrl: '...', description: 'Overview of the course structure and goals.' },
          { chapterTitle: 'Setting up Your Development Environment', videoUrl: '...', description: 'Installing Python, IDEs, and necessary tools.' },
          { chapterTitle: 'How the 100 Days Structure Works', videoUrl: '...', description: 'Tips and strategies for success.' },
        ],
      },
      {
        sectionTitle: 'Core Python: Fundamentals',
        chapters: [
          { chapterTitle: 'Data Types and Variables', videoUrl: '...', description: 'Numbers, strings, booleans, etc.' },
          { chapterTitle: 'Control Flow: If/Else & Loops', videoUrl: '...', description: 'Conditional statements and iterations.' },
          { chapterTitle: 'Functions and Scope', videoUrl: '...', description: 'Defining and using functions.' },
          { chapterTitle: 'Lists, Dictionaries, Tuples, Sets', videoUrl: '...', description: 'Working with Python data structures.' },
        ],
      },
      {
        sectionTitle: 'Intermediate Python & Libraries',
        chapters: [
          { chapterTitle: 'Object-Oriented Programming (OOP)', videoUrl: '...', description: 'Classes, objects, inheritance.' },
          { chapterTitle: 'Working with Files', videoUrl: '...', description: 'Reading from and writing to files.' },
          { chapterTitle: 'Error Handling', videoUrl: '...', description: 'Using try, except, finally.' },
          { chapterTitle: 'Introduction to External Libraries', videoUrl: '...', description: 'Installing and using pip packages.' },
        ],
      },
       {
        sectionTitle: 'Project Building Phase (Representative)', // Simplified representation
        chapters: [
          { chapterTitle: 'Day 15 Project: Coffee Machine', videoUrl: '...', description: 'Build a command-line coffee machine simulation.' },
          { chapterTitle: 'Day 30 Project: Password Manager', videoUrl: '...', description: 'Build a GUI application for managing passwords.' },
          { chapterTitle: 'Day 50 Project: API Authentication', videoUrl: '...', description: 'Learn to authenticate with APIs.' },
          // ... many more project chapters ...
          { chapterTitle: 'Day 100 Project: Final Capstone', videoUrl: '...', description: 'Build a significant project integrating multiple concepts.' },
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
     // New Fields Added Below:
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
    sections: [
      {
        sectionTitle: 'Frontend Web Development: HTML',
        chapters: [
          { chapterTitle: 'Introduction to HTML', videoUrl: '...', description: 'Structure of web pages.' },
          { chapterTitle: 'HTML Elements and Attributes', videoUrl: '...', description: 'Using tags correctly.' },
          { chapterTitle: 'HTML Forms', videoUrl: '...', description: 'Creating user input forms.' },
        ],
      },
       {
        sectionTitle: 'Frontend Web Development: CSS',
        chapters: [
          { chapterTitle: 'Introduction to CSS', videoUrl: '...', description: 'Styling your web pages.' },
          { chapterTitle: 'CSS Selectors and Properties', videoUrl: '...', description: 'Targeting elements and applying styles.' },
          { chapterTitle: 'CSS Layouts (Flexbox & Grid)', videoUrl: '...', description: 'Building responsive page structures.' },
          { chapterTitle: 'Bootstrap Framework', videoUrl: '...', description: 'Using a popular CSS framework.' },
        ],
      },
       {
        sectionTitle: 'JavaScript Introduction',
        chapters: [
          { chapterTitle: 'JavaScript Fundamentals', videoUrl: '...', description: 'Variables, data types, operators.' },
          { chapterTitle: 'Control Flow and Loops', videoUrl: '...', description: 'Decision making and repetition.' },
          { chapterTitle: 'DOM Manipulation', videoUrl: '...', description: 'Changing web page content dynamically.' },
          { chapterTitle: 'Event Handling', videoUrl: '...', description: 'Responding to user interactions.' },
        ],
      },
      // ... many more sections on Node, Express, Databases, React, Web3, Projects ...
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
    level: 'Intermediate',
    thumbnail: '/images/coursebanner14.jpg', // Placeholder image path
    isBestseller: false,
    category: 'Development',
    description: [
      "Learn Python like a professional! Start from the basics and go all the way to creating your own applications and games.",
      "Includes Jupyter Notebooks, Exercises, and projects.",
      "Covers advanced topics like decorators, generators, and modules."
    ],
     // New Fields Added Below:
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
    sections: [
      {
        sectionTitle: 'Python Crash Course',
        chapters: [
          { chapterTitle: 'Why Learn Python?', videoUrl: '...', description: 'Overview of Python applications.' },
          { chapterTitle: 'Installation and Setup', videoUrl: '...', description: 'Getting Python running.' },
          { chapterTitle: 'Running Python Code (Jupyter)', videoUrl: '...', description: 'Using Jupyter Notebooks.' },
        ],
      },
      {
        sectionTitle: 'Python Object and Data Structure Basics',
        chapters: [
          { chapterTitle: 'Numbers', videoUrl: '...', description: 'Integers and floats.' },
          { chapterTitle: 'Strings', videoUrl: '...', description: 'Working with text.' },
          { chapterTitle: 'Lists', videoUrl: '...', description: 'Ordered, mutable sequences.' },
           { chapterTitle: 'Dictionaries', videoUrl: '...', description: 'Key-value pairs.' },
           { chapterTitle: 'Tuples and Sets', videoUrl: '...', description: 'Other useful data structures.' },
        ],
      },
      {
        sectionTitle: 'Programming Statements',
        chapters: [
           { chapterTitle: 'Comparison Operators', videoUrl: '...', description: 'Comparing values.' },
           { chapterTitle: 'If/Elif/Else Statements', videoUrl: '...', description: 'Conditional logic.' },
           { chapterTitle: 'For Loops', videoUrl: '...', description: 'Iterating through sequences.' },
           { chapterTitle: 'While Loops', videoUrl: '...', description: 'Repeating actions based on a condition.' },
        ]
      },
       {
        sectionTitle: 'Functions and Methods',
        chapters: [
           { chapterTitle: 'Methods', videoUrl: '...', description: 'Built-in object functions.' },
           { chapterTitle: 'Functions', videoUrl: '...', description: 'Defining and calling functions.' },
           { chapterTitle: 'Lambda Expressions', videoUrl: '...', description: 'Anonymous functions.' },
           { chapterTitle: 'Nested Statements and Scope', videoUrl: '...', description: 'Understanding variable visibility.' },
        ]
      },
      // ... more sections including Modules, Errors, OOP, Advanced, Projects ...
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
    level: 'Advanced',
    thumbnail: '/images/coursebanner13.jpg', // Placeholder image path
    isBestseller: false,
    category: 'Development',
    description: [
      "The ONLY course you need to learn web development - HTML, CSS, JS, Node, Express, MongoDB, and more!",
      "Build real-world projects and launch your own full-stack applications.",
      "Updated for 2025 with the latest technologies and best practices."
    ],
    // New Fields Added Below:
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
    sections: [
      {
        sectionTitle: 'HTML & CSS: The Basics',
        chapters: [
          { chapterTitle: 'Setting up Your Environment', videoUrl: '...', description: 'Editor setup.' },
          { chapterTitle: 'HTML Boilerplate and Semantics', videoUrl: '...', description: 'Basic page structure.' },
          { chapterTitle: 'Introduction to CSS', videoUrl: '...', description: 'Adding styles.' },
          { chapterTitle: 'The Box Model', videoUrl: '...', description: 'Understanding element spacing.' },
        ],
      },
       {
        sectionTitle: 'Intermediate CSS & Layouts',
        chapters: [
          { chapterTitle: 'CSS Selectors Revisited', videoUrl: '...', description: 'Advanced selection techniques.' },
          { chapterTitle: 'Flexbox', videoUrl: '...', description: 'Building flexible layouts.' },
          { chapterTitle: 'Responsive Design', videoUrl: '...', description: 'Making sites look good on all devices.' },
        ],
      },
      {
        sectionTitle: 'JavaScript: The Client-Side',
        chapters: [
          { chapterTitle: 'Basic JS Data Types and Variables', videoUrl: '...', description: 'Understanding data.' },
          { chapterTitle: 'Control Flow', videoUrl: '...', description: 'Conditionals and loops.' },
          { chapterTitle: 'Functions and Scope', videoUrl: '...', description: 'Writing reusable code.' },
          { chapterTitle: 'Working with the DOM', videoUrl: '...', description: 'Interacting with the page.' },
        ],
      },
       // ... more sections on Asynchronous JS, Node, Express, MongoDB, Authentication, Deployment, YelpCamp Project ...
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
     // New Fields Added Below:
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
    sections: [
      {
        sectionTitle: 'JavaScript Fundamentals - Part 1',
        chapters: [
          { chapterTitle: 'Linking a JavaScript File', videoUrl: '...', description: 'Connecting JS to HTML.' },
          { chapterTitle: 'Variables and Data Types', videoUrl: '...', description: 'Storing information.' },
          { chapterTitle: 'Operators', videoUrl: '...', description: 'Performing operations.' },
          { chapterTitle: 'Statements and Expressions', videoUrl: '...', description: 'Code structure.' },
        ],
      },
      {
        sectionTitle: 'JavaScript Fundamentals - Part 2',
        chapters: [
          { chapterTitle: 'Functions', videoUrl: '...', description: 'Writing reusable blocks of code.' },
          { chapterTitle: 'Arrays', videoUrl: '...', description: 'Working with lists of data.' },
          { chapterTitle: 'Objects', videoUrl: '...', description: 'Working with structured data.' },
          { chapterTitle: 'Loops', videoUrl: '...', description: 'Repeating actions.' },
        ],
      },
      {
        sectionTitle: 'How JavaScript Works Behind the Scenes',
        chapters: [
          { chapterTitle: 'The Execution Context', videoUrl: '...', description: 'Understanding how code runs.' },
          { chapterTitle: 'Scope and the Scope Chain', videoUrl: '...', description: 'Variable access.' },
          { chapterTitle: 'The `this` Keyword', videoUrl: '...', description: 'Understanding context.' },
          { chapterTitle: 'Primitives vs. Objects', videoUrl: '...', description: 'Value vs. reference types.' },
        ],
      },
      // ... many more sections on ES6+, Asynchronous JS, OOP, Modules, Projects ...
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
    // New Fields Added Below:
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
    sections: [
      {
        sectionTitle: 'Introduction to AWS & The Exam',
        chapters: [
          { chapterTitle: 'What is Cloud Computing?', videoUrl: '...', description: 'Overview of cloud concepts.' },
          { chapterTitle: 'Introduction to AWS', videoUrl: '...', description: 'Core AWS services.' },
          { chapterTitle: 'Understanding the SAA-C03 Exam', videoUrl: '...', description: 'Exam format and domains.' },
        ],
      },
       {
        sectionTitle: 'Amazon EC2 - Compute Service',
        chapters: [
          { chapterTitle: 'EC2 Instances', videoUrl: '...', description: 'Launching virtual machines.' },
          { chapterTitle: 'EC2 Pricing Models', videoUrl: '...', description: 'On-Demand, Reserved, Spot.' },
          { chapterTitle: 'EC2 Storage (EBS)', videoUrl: '...', description: 'Attaching persistent storage.' },
          { chapterTitle: 'Load Balancing (ELB)', videoUrl: '...', description: 'Distributing traffic.' },
          { chapterTitle: 'Auto Scaling Groups (ASG)', videoUrl: '...', description: 'Scaling EC2 instances.' },
        ],
      },
      {
        sectionTitle: 'Amazon S3 - Storage Service',
        chapters: [
           { chapterTitle: 'Introduction to S3', videoUrl: '...', description: 'Object storage basics.' },
           { chapterTitle: 'S3 Versioning and Lifecycle Policies', videoUrl: '...', description: 'Managing data over time.' },
           { chapterTitle: 'S3 Security and Encryption', videoUrl: '...', description: 'Protecting data in S3.' },
        ]
      },
       // ... many more sections on VPC, Databases, IAM, etc. ...
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
    // New Fields Added Below:
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
    sections: [
      {
        sectionTitle: 'Introduction to Large Language Models',
        chapters: [
          { chapterTitle: 'What are LLMs?', videoUrl: '...', description: 'History and evolution.' },
          { chapterTitle: 'Types of LLMs', videoUrl: '...', description: 'Distinguishing models.' },
          { chapterTitle: 'LLM Capabilities and Applications', videoUrl: '...', description: 'What they can do.' },
        ],
      },
       {
        sectionTitle: 'Basic Prompt Engineering',
        chapters: [
          { chapterTitle: 'Anatomy of a Prompt', videoUrl: '...', description: 'Components of a good prompt.' },
          { chapterTitle: 'Zero-shot and Few-shot Prompting', videoUrl: '...', description: 'Basic techniques.' },
          { chapterTitle: 'Temperature and Top-P', videoUrl: '...', description: 'Controlling creativity.' },
        ],
      },
      {
        sectionTitle: 'Advanced Prompting Techniques',
        chapters: [
          { chapterTitle: 'Chain-of-Thought Prompting', videoUrl: '...', description: 'Enhancing reasoning.' },
          { chapterTitle: 'Tree-of-Thoughts Prompting', videoUrl: '...', description: 'Exploring multiple paths.' },
          { chapterTitle: 'Role Playing and Persona Prompts', videoUrl: '...', description: 'Guiding the model behavior.' },
        ],
      },
       // ... more sections on APIs, Fine-tuning, Applications, Ethics ...
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
    // New Fields Added Below:
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
    sections: [
      {
        sectionTitle: 'Foundations of Agentic AI',
        chapters: [
          { chapterTitle: 'What is an AI Agent?', videoUrl: '...', description: 'Definition and key concepts.' },
          { chapterTitle: 'Why Agentic Design?', videoUrl: '...', description: 'Advantages over simple prompting.' },
          { chapterTitle: 'Components of an Agent', videoUrl: '...', description: 'LLM, Memory, Planning, Tools.' },
        ],
      },
       {
        sectionTitle: 'Tools and External Integrations',
        chapters: [
          { chapterTitle: 'Connecting Agents to the Internet', videoUrl: '...', description: 'Web browsing tools.' },
          { chapterTitle: 'Using Calculation Tools', videoUrl: '...', description: 'Integrating calculators.' },
          { chapterTitle: 'Interacting with Databases', videoUrl: '...', description: 'Reading and writing data.' },
          { chapterTitle: 'Creating Custom Tools', videoUrl: '...', description: 'Extending agent capabilities.' },
        ],
      },
      {
        sectionTitle: 'Building Agentic Applications (with Frameworks)',
        chapters: [
          { chapterTitle: 'Introduction to Agent Frameworks', videoUrl: '...', description: 'Overview of popular options.' },
          { chapterTitle: 'Building a Simple Agent with LangChain', videoUrl: '...', description: 'Step-by-step example.' },
          { chapterTitle: 'Building an Agent with LlamaIndex', videoUrl: '...', description: 'Another framework example.' },
          { chapterTitle: 'Creating a Multi-Agent System', videoUrl: '...', description: 'Designing interaction patterns.' },
        ],
      },
       // ... more sections on Memory, Planning, Evaluation ...
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
    level: 'Advanced',
    thumbnail: '/images/coursebanner12.jpg', // Placeholder image path
    isBestseller: true,
    category: 'AI & Machine Learning',
    description: [
      "Learn Machine Learning from A-Z with Python and R.",
      "Covers topics like Regression, Classification, Clustering, Reinforcement Learning, NLP, and AI.",
      "Hands-on implementations of algorithms."
    ],
    // New Fields Added Below:
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
    sections: [
      {
        sectionTitle: 'Data Preprocessing',
        chapters: [
          { chapterTitle: 'Handling Missing Data', videoUrl: '...', description: 'Techniques for incomplete datasets.' },
          { chapterTitle: 'Encoding Categorical Data', videoUrl: '...', description: 'Converting text data to numerical.' },
          { chapterTitle: 'Splitting the Dataset (Train/Test)', videoUrl: '...', description: 'Preparing data for model training.' },
          { chapterTitle: 'Feature Scaling', videoUrl: '...', description: 'Normalizing data.' },
        ],
      },
       {
        sectionTitle: 'Regression Models',
        chapters: [
          { chapterTitle: 'Simple Linear Regression', videoUrl: '...', description: 'Predicting continuous values (one feature).' },
          { chapterTitle: 'Multiple Linear Regression', videoUrl: '...', description: 'Predicting with multiple features.' },
          { chapterTitle: 'Polynomial Regression', videoUrl: '...', description: 'Modeling non-linear relationships.' },
          { chapterTitle: 'Support Vector Regression (SVR)', videoUrl: '...', description: 'Advanced regression technique.' },
        ],
      },
      {
        sectionTitle: 'Classification Models',
        chapters: [
          { chapterTitle: 'Logistic Regression', videoUrl: '...', description: 'Predicting categories (binary).' },
          { chapterTitle: 'K-Nearest Neighbors (K-NN)', videoUrl: '...', description: 'Classification based on proximity.' },
          { chapterTitle: 'Support Vector Machine (SVM)', videoUrl: '...', description: 'Finding optimal decision boundaries.' },
          { chapterTitle: 'Decision Tree Classification', videoUrl: '...', description: 'Tree-based classification.' },
        ],
      },
       // ... many more sections on Clustering, Association Rules, Reinforcement Learning, NLP, Deep Learning ...
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
    level: 'Advanced',
    thumbnail: '/images/coursebanner1.jpg', // Placeholder image path
    isBestseller: true,
    category: 'Project Management',
    description: [
      "Everything you need to pass the PMP Exam on your first try.",
      "35 Hours of Project Management Education/PDU.",
      "Covers Agile, Hybrid, and Predictive methodologies."
    ],
    // New Fields Added Below:
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
    sections: [
      {
        sectionTitle: 'Introduction and Project Management Framework',
        chapters: [
          { chapterTitle: 'Welcome and Course Overview', videoUrl: '...', description: 'Setting expectations.' },
          { chapterTitle: 'What is a Project? What is PM?', videoUrl: '...', description: 'Basic definitions.' },
          { chapterTitle: 'The PMBOK Guide & Standards', videoUrl: '...', description: 'Understanding the reference.' },
          { chapterTitle: 'Project Life Cycles', videoUrl: '...', description: 'Phases of a project.' },
        ],
      },
       {
        sectionTitle: 'Predictive Process Groups: Initiating',
        chapters: [
          { chapterTitle: 'Develop Project Charter', videoUrl: '...', description: 'Defining the project.' },
          { chapterTitle: 'Identify Stakeholders', videoUrl: '...', description: 'Finding key people.' },
        ],
      },
      {
        sectionTitle: 'Predictive Process Groups: Planning',
        chapters: [
           { chapterTitle: 'Develop Project Management Plan', videoUrl: '...', description: 'Creating the roadmap.' },
           { chapterTitle: 'Plan Scope Management', videoUrl: '...', description: 'Defining scope.' },
           { chapterTitle: 'Create WBS (Work Breakdown Structure)', videoUrl: '...', description: 'Breaking down work.' },
           { chapterTitle: 'Plan Schedule Management', videoUrl: '...', description: 'Defining the timeline approach.' },
           // ... many more planning chapters (Cost, Quality, Resources, Communications, Risk, Procurement, Stakeholder) ...
        ]
      },
       {
        sectionTitle: 'Agile and Hybrid Project Management',
        chapters: [
           { chapterTitle: 'Introduction to Agile', videoUrl: '...', description: 'Agile manifesto and principles.' },
           { chapterTitle: 'Agile Methodologies (Scrum, Kanban)', videoUrl: '...', description: 'Common frameworks.' },
           { chapterTitle: 'Hybrid Approaches', videoUrl: '...', description: 'Combining predictive and agile.' },
           { chapterTitle: 'Agile Roles and Events', videoUrl: '...', description: 'Scrum specifics.' },
        ]
      },
      // ... more sections covering other Process Groups, Business Environment, Exam Tips ...
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
    thumbnail: '/images/coursebanner13.jpg',
    isBestseller: true,
    category: 'Marketing',
    description: [
      "Master Digital Marketing Strategy, SEO, YouTube, Email Marketing, Facebook Marketing, Instagram Marketing, Copywriting & More!",
      "Learn using real-world examples and practical exercises.",
      "Grow your business or land your dream marketing job."
    ],
     // New Fields Added Below:
    hoursSpent: 45,
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
    sections: [
      {
        sectionTitle: 'Introduction to Digital Marketing',
        chapters: [
          { chapterTitle: 'What is Digital Marketing?', videoUrl: '...', description: 'Overview of the landscape.' },
          { chapterTitle: 'Developing a Marketing Plan', videoUrl: '...', description: 'Setting goals and strategy.' },
        ],
      },
       {
        sectionTitle: 'Website Marketing (SEO)',
        chapters: [
          { chapterTitle: 'How Search Engines Work', videoUrl: '...', description: 'Crawling, indexing, ranking.' },
          { chapterTitle: 'Keyword Research', videoUrl: '...', description: 'Finding the right terms.' },
          { chapterTitle: 'On-Page SEO Factors', videoUrl: '...', description: 'Optimizing page content.' },
          { chapterTitle: 'Off-Page SEO Factors', videoUrl: '...', description: 'Link building and authority.' },
        ],
      },
      {
        sectionTitle: 'Social Media Marketing',
        chapters: [
           { chapterTitle: 'Facebook Marketing', videoUrl: '...', description: 'Pages, groups, strategy.' },
           { chapterTitle: 'Instagram Marketing', videoUrl: '...', description: 'Visual content and growth.' },
           { chapterTitle: 'YouTube Marketing', videoUrl: '...', description: 'Video strategy and optimization.' },
           { chapterTitle: 'LinkedIn Marketing', videoUrl: '...', description: 'Professional networking and lead gen.' },
        ]
      },
       // ... many more sections on Email, Content, Copywriting, Ads, Analytics ...
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
    thumbnail: '/images/coursebanner14.jpg',
    isBestseller: true,
    category: 'Design',
    description: [
      "Become a UX Designer. Learn the essential concepts, tools, and techniques for creating great user experiences.",
      "Hands-on projects to build your portfolio.",
      "Covers research, ideation, prototyping, and testing."
    ],
     // New Fields Added Below:
    hoursSpent: 25,
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
    sections: [
      {
        sectionTitle: 'Introduction to User Experience Design',
        chapters: [
          { chapterTitle: 'Defining UX', videoUrl: '...', description: 'What makes a good user experience?' },
          { chapterTitle: 'The Value of UX', videoUrl: '...', description: 'Why businesses invest in UX.' },
          { chapterTitle: 'The UX Design Process', videoUrl: '...', description: 'Overview of the typical steps.' },
        ],
      },
       {
        sectionTitle: 'User Research',
        chapters: [
          { chapterTitle: 'Planning Your Research', videoUrl: '...', description: 'Setting research goals.' },
          { chapterTitle: 'Qualitative Research Methods', videoUrl: '...', description: 'Interviews, observations.' },
          { chapterTitle: 'Quantitative Research Methods', videoUrl: '...', description: 'Surveys, analytics.' },
          { chapterTitle: 'Analyzing Research Data', videoUrl: '...', description: 'Synthesizing findings.' },
        ],
      },
      {
        sectionTitle: 'Ideation and Design',
        chapters: [
           { chapterTitle: 'Information Architecture', videoUrl: '...', description: 'Organizing content.' },
           { chapterTitle: 'Sketching and Ideation', videoUrl: '...', description: 'Generating design ideas quickly.' },
           { chapterTitle: 'Wireframing', videoUrl: '...', description: 'Creating low-fidelity layouts.' },
        ]
      },
       // ... more sections on Prototyping, Testing, Portfolio ...
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
    level: 'Intermediate',
    thumbnail: '/images/coursebanner12.jpg',
    isBestseller: true,
    category: 'Design',
    description: [
      "The ULTIMATE Graphic Design Course which will teach you core skills to make GREAT Designs!",
      "Covers Photoshop, Illustrator, InDesign, and design principles.",
      "Ideal for beginners and those looking to level up."
    ],
     // New Fields Added Below:
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
    sections: [
      {
        sectionTitle: 'Design Fundamentals',
        chapters: [
          { chapterTitle: 'The Principles of Design', videoUrl: '...', description: 'Contrast, Repetition, Alignment, Proximity.' },
          { chapterTitle: 'Introduction to Layout', videoUrl: '...', description: 'Arranging elements on a page.' },
        ],
      },
       {
        sectionTitle: 'Typography',
        chapters: [
          { chapterTitle: 'Understanding Typefaces', videoUrl: '...', description: 'Serif, sans-serif, script, etc.' },
          { chapterTitle: 'Hierarchy and Pairing Fonts', videoUrl: '...', description: 'Using fonts effectively.' },
        ],
      },
      {
        sectionTitle: 'Color Theory',
        chapters: [
           { chapterTitle: 'The Color Wheel', videoUrl: '...', description: 'Understanding relationships.' },
           { chapterTitle: 'Color Harmonies', videoUrl: '...', description: 'Creating pleasing palettes.' },
           { chapterTitle: 'Using Color in Design', videoUrl: '...', description: 'Psychology and application.' },
        ]
      },
       {
        sectionTitle: 'Adobe Photoshop Essentials',
        chapters: [
           { chapterTitle: 'Photoshop Interface', videoUrl: '...', description: 'Getting to know the tools.' },
           { chapterTitle: 'Working with Layers', videoUrl: '...', description: 'Non-destructive editing.' },
           { chapterTitle: 'Selections and Masks', videoUrl: '...', description: 'Isolating parts of an image.' },
           { chapterTitle: 'Basic Photo Editing', videoUrl: '...', description: 'Adjustments and retouching.' },
        ]
      },
      // ... more sections on Illustrator, InDesign, Branding, Portfolio ...
    ],
  },
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
