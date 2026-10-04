export type Milestone = {
  year: string;
  title: string;
  detail: string;
  current?: boolean;
};

export const journey: Milestone[] = [
  {
    year: "2019",
    title: "BBA in Tourism begins",
    detail:
      "Himachal Pradesh University, Shimla - a business and people-first foundation.",
  },
  {
    year: "2022",
    title: "Diploma in Computer Applications & Blockchain Technology",
    detail:
      "Jetking Institute, Chandigarh - the shift from business into software.",
  },
  {
    year: "2024",
    title: "Chain Code Consulting Ltd.",
    detail:
      "MERN Stack Developer, Chandigarh (Feb–Oct 2024). Redesigned frontend and backend architecture for NFTTrace and sutR, contributed to the NFTTrace marketplace, and created an HR Management System with onboarding, leave and attendance.",
  },
  {
    year: "2024",
    title: "MCA begins",
    detail:
      "Jain University, Online - deepening the computer science foundation alongside full-time work.",
  },
  {
    year: "Nov 2024",
    title: "Techmarbles Web Solutions",
    detail:
      "Full Stack Developer, Chandigarh. Built and maintained apps with MERN, AdonisJS, Prisma, Flutter and PostgreSQL; launched Pandit AI with CI/CD, developed Quickona on Shopify, and contributed to analytics tools like instaElevate for Instagram profile enhancement.",
  },
  {
    year: "Present",
    title: "Building full-stack products",
    detail: "Across AI, commerce and modern web applications - end to end.",
    current: true,
  },
];

export type Principle = {
  number: string;
  title: string;
  body: string;
};

export const principles: Principle[] = [
  {
    number: "01",
    title: "Understand the product",
    body: "I think beyond the component. I try to understand what the product is trying to achieve and who is using it.",
  },
  {
    number: "02",
    title: "Design the experience",
    body: "Interfaces should feel intentional, fast and easy to understand.",
  },
  {
    number: "03",
    title: "Build the system",
    body: "Reusable components, clean architecture, APIs, databases and integrations.",
  },
  {
    number: "04",
    title: "Ship & improve",
    body: "Deployment is part of development. Once a product ships, performance, analytics and iteration matter.",
  },
];

export type SkillGroup = {
  id: string;
  label: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    id: "frontend",
    label: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "Flutter", "HTML5", "CSS3"],
  },
  {
    id: "backend",
    label: "Backend",
    items: ["Node.js", "Express.js", "AdonisJS", "NestJS", "REST APIs"],
  },
  {
    id: "data",
    label: "Data",
    items: ["MongoDB", "PostgreSQL", "Prisma ORM", "Mongoose", "Sequelize"],
  },
  {
    id: "commerce",
    label: "Commerce",
    items: ["Shopify", "Liquid", "Razorpay"],
  },
  {
    id: "ai-apis",
    label: "AI / APIs",
    items: ["DeepSeek API", "React Query", "Redux", "Formik", "Yup"],
  },
  {
    id: "web3",
    label: "Web3",
    items: ["Solidity", "IPFS", "Hardhat", "OpenZeppelin", "NFT marketplaces"],
  },
  {
    id: "tools",
    label: "Tools",
    items: ["Git", "GitHub", "Postman", "Docker", "CI/CD", "Chai", "Mocha"],
  },
];

export type EducationItem = {
  degree: string;
  school: string;
  period: string;
  note: string;
};

export const education: EducationItem[] = [
  {
    degree: "Master of Computer Applications (MCA)",
    school: "Jain University, Bangalore (Online)",
    period: "2024 - Present",
    note: "Deepening the CS foundation behind day-to-day full-stack work.",
  },
  {
    degree: "Diploma in Computer Applications & Blockchain Technology",
    school: "Jetking Institute, Chandigarh",
    period: "2022 - 2024",
    note: "Where software development and blockchain fundamentals began.",
  },
  {
    degree: "BBA in Tourism",
    school: "Himachal Pradesh University, Shimla",
    period: "2019 - 2022",
    note: "The business lens that still shapes how products get built.",
  },
];
