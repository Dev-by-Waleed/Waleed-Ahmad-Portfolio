/**
 * All portfolio content lives here — edit this single file to make the
 * site your own (name, links, projects, etc.).
 */

export const profile = {
  name: "Waleed Ahmad",
  initials: "AR",
  role: "Front-End Developer & Cybersecurity Student",
  tagline:
    "I design and build fast, accessible web interfaces. Currently pursuing my Cybersecurity Diploma & Bachelors Degree looking for a 2026 frontend Entry-role or Internship.",
  location: "Hyderabad, Pakistan",
  email: "walled.a.qazi@gmail.com",
  phone: "+92 333 7066987",
  // availability: "Open to internships · Summer 2026",
  socials: [
    { label: "GitHub", href: "https://github.com/Dev-by-Waleed", icon: "github" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/dev-by-waleed",
      icon: "linkedin",
    },
    // { label: "X", href: "https://x.com/ayaanrahmdev", icon: "x" },
    { label: "Email", href: "mailto:walled.a.qazi@gmail.com", icon: "mail" },
  ],
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export const stats = [
  { value: "14", suffix: "mo", label: "SMIT Web Dev Training" },
  { value: "12", suffix: "+", label: "Projects shipped" },
  { value: "2", suffix: "", label: "Internships Completed" },
  { value: "12", suffix: " hrs", label: "Hackathon build" },
  { value: "151", suffix: "+", label: "GitHub contributions" },
];

export const about = {
  paragraphs: [
    "I'm a Front-End and Full-Stack Web Developer from Hyderabad. I completed a 14-month web development program at Saylani Mass IT Training (SMIT) and build with React.js, Next.js, TypeScript, Tailwind CSS, Node.js and MongoDB.",
    "I enjoy turning Figma designs into clean, reusable components, and adding secure authentication, animation with GSAP, and AI features such as a RAG-powered wellness coach built with the Gemini API.",
  ],

  facts: [
    { label: "Focus", value: "Front-end & full-stack web" },
    { label: "Stack", value: "Next.js, React, Node.js, Supabase" },
    { label: "AI work", value: "Gemini & Groq APIs, RAG" },
    { label: "Based in", value: "Hyderabad, Pakistan" },
  ],

  softSkills: [
    "Problem solving",
    "Communication",
    "Team work",
    "Time management",
    "Adaptability",
    "Attention to detail",
  ],
};

export const skillGroups = [
  {
    icon: "code",
    title: "Frontend",
    description: "Everyday tools for building UIs.",
    skills: [
      { name: "HTML5 & CSS3", level: 90 },
      { name: "JavaScript (ES6+) & TypeScript", level: 85 },
      { name: "React.js, React Native & Next.js", level: 85 },
      { name: "Tailwind CSS, Redux Toolkit & GSAP", level: 85 },
    ],
  },
  {
    icon: "layers",
    title: "Backend & Databases",
    description: "Server-side tools for shipping full features.",
    skills: [
      { name: "Node.js & Express.js", level: 80 },
      { name: "MongoDB & Mongoose", level: 80 },
      { name: "Supabase (database & auth)", level: 80 },
      { name: "REST APIs & HTTP-only JWT auth", level: 80 },
    ],
  },

  {
    icon: "book",
    title: "AI & Tools",
    description: "AI integration and the workflow around it.",
    skills: [
      { name: "Gemini API & Groq API", level: 75 },
      { name: "RAG architecture", level: 70 },
      { name: "Git, GitHub, Vercel & Netlify", level: 85 },
      { name: "Postman, Vite & Figma-to-code", level: 85 },
    ],
  },
];

export const projects = [
  {
    title: "TeleMed AI – Telemedicine Platform",
    category: "Web",
    description:
      "Full-stack telemedicine platform with role-based dashboards, appointment management, real-time doctor–patient chat, and AI-powered medical document summaries using Gemini and Supabase.",
    tags: ["Next.js", "React", "Tailwind CSS", "Supabase", "PostgreSQL", "Gemini"],
    live: "https://telemed-ai-beta.vercel.app/",
    code: "https://github.com/Dev-by-Waleed/TeleMed-AI",
    gradient: "from-sky-500/70 via-blue-500/50 to-violet-400/40",
  },
  {
    title: "MERN Fitness Platform with RAG AI Coach",
    category: "AI",
    description:
      "Built in a 12-hour SMIT AI Hackathon. An AI wellness coach using the Gemini API with RAG architecture, lab report parsing and HTTP-only JWT authentication.",
    tags: ["Next.js 16", "Node.js", "Express", "MongoDB", "Gemini API"],
    live: "https://ai-fitness-coach-front-end-stack.vercel.app",
    backend: "https://github.com/Dev-by-Waleed/AI-Fitness-Coach-Back-End",
    code: "https://github.com/Dev-by-Waleed/AI-Fitness-Coach-Front-End-stack",
    gradient: "from-violet-500/70 via-indigo-500/50 to-cyan-400/40",
  },
  {
    title: "PrimeCare – Pharmacy & Wellness Platform",
    category: "Web",
    description:
      "Full-stack web application with GSAP animations and Supabase database and authentication, deployed on Vercel.",
    tags: ["Next.js", "Tailwind CSS", "GSAP", "Supabase", "Vercel"],
    live: "https://prime-care-pi.vercel.app/",
    code: "https://github.com/Dev-by-Waleed/PrimeCare",
   gradient: "from-emerald-500 via-teal-500 to-cyan-500"
  },
  {
    title: "Playlist Manager Extension - TubeList",
    category: "Chrome Extension",
    description:
      "it's purpose is to transfer your playlist in one go to different account without having to do it manually one by one it's aligned with the website i designed since i couldn't pay the extension fees.",
    tags: ["React", "Tailwind CSS", "HTML", "Netlify"],
    live: "https://tube-list.netlify.app/",
    code: "https://github.com/Dev-by-Waleed-Intellibuild/Tube-List-Extension",
    gradient: "from-emerald-500/70 via-teal-500/50 to-cyan-400/40",
  },
  {
    title: "Ecommerce-Front-End Design",
    category: "Design",
    description:
      "one of my first very basic sites deployed on Netlify.",
    tags: ["Vanilla JS", "Vanilla CSS", "HTML", "Netlify"],
    live: "https://ecommerce-dev-by-waleed.netlify.app",
    code: "https://github.com/Dev-by-Waleed/ecommerce-frontend-design",
    gradient: "from-emerald-500/70 via-amber-400/50 to-orange-400/40",
  },
  {
    title: "AI Text Summarizer Tool",
    category: "AI",
    description:
      "Dynamic text summarization tool integrated with the Groq API.",
    tags: ["Vanilla JavaScript", "Groq API"],
    live: "https://tl-dr-igniter.netlify.app",
    code: "https://github.com/Dev-by-Waleed/TL-DR-Igniter",
    gradient: "from-fuchsia-500/70 via-purple-500/50 to-indigo-400/40",
  },
];


export const education = [
  {
    title: "Intermediate (Pre-Computer-Science)",
    org: "Muslim Science College",
    period: "2023 – 2025",
    highlights: [],
  },
  {
    title: "Diploma in CyberSecurity",
    org: "Government College of Technology Hyderabad",
    period: "2025 – 2028",
    summary:
      "3-year Technical diploma focusing on physical and theoretical foundations of information defense, system administration and network security",
    highlights: [
      "Skills: Cybersecurity, Network Security, Information Security, Ethical Hacking, Vulnerability Assessment",
    ],
  },
  {
    title: "Web Development Program (14 Months)",
    org: "Saylani Mass IT Training (SMIT), Hyderabad",
    period: "Completed Sep 2026",
    summary:
      "Fourteen-month program covering front-end and full-stack web development.",
    highlights: [
      "Built a RAG-powered AI fitness platform during the SMIT AI Hackathon",
    ],
  },
  {
    title: "HTML,  CSS & JS Course Modules & Assessment Certification",
    org: "Cisco Networking Academy",
    period: "Completed Dec 2025",
    summary: "Completed the HTML and CSS course modules and assessment.",
    highlights: [],
  },
  {
    title: "BS Computer Science",
    org: "Degree College Hyderabad",
    period: "2026 – 2030",
    summary:
      "Pursuing Bachlors degree.",
    highlights: [
      // "Coursework: DSA, DBMS, software engineering, computer networks",
      // "Final-year project: accessibility-first course registration system",
    ],
  },
];
export const experience = [
  {
    role: "Frontend Developer Intern",
    org: "Developers Hub",
    period: "Dec 2025 – Jan 2026",
    summary:
      "Worked on front-end UI for an e-commerce project.",
    highlights: [
      "Built desktop and mobile responsive e-commerce UI components directly from Figma design specifications",
      "Structured reusable front-end layout components for maintainability",
    ],
  },
  {
    role: "Frontend Intern",
    org: "Pynexia",
    period: "Oct 2026 – Nov 2026",
    summary:
      "Working on multiple projects every week.",
    highlights: [
      // "Built Todo-App with Vanilla HTML, CSS AND JS",
      // "Structured reusable front-end layout components for maintainability",
    ],
  }
];

export const achievements = [
  {
    icon: "sparkles",
    title: "SMIT AI Hackathon — RAG AI Fitness Coach",
    issuer: "Saylani Mass IT Training (SMIT)",
    year: "2026",
    description:
      "Built a full-stack MERN fitness platform with a Gemini-powered RAG coach in a 12-hour coding night.",
  },
  {
    icon: "book",
    title: "Web Development Program Completion",
    issuer: "Saylani Mass IT Training (SMIT)",
    year: "2026",
    description:
      "Completed the 14-month web development program in Hyderabad.",
  },
  {
    icon: "layers",
    title: "HTML & CSS Certification",
    issuer: "Cisco Networking Academy",
    year: "2025",
    description:
      "Completed the HTML and CSS course modules and passed the assessment.",
  },
];
