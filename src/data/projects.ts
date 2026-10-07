export type ProjectVisualKind =
  | "pandit-ai"
  | "quickona"
  | "hrms"
  | "nfttrace"
  | "sutr"
  | "skate-supply"
  | "hearty-way";

export type Project = {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  proof: string[];
  role: string;
  year: string;
  stack: string[];
  image: string;
  hasImage: boolean;
  tint: string;
  visual: ProjectVisualKind;
  url: string;
  featured: boolean;
  group: "work" | "commerce";
};

export const projects: Project[] = [
  {
    id: "pandit-ai",
    tint: "var(--s-violet)",
    number: "01",
    title: "Pandit AI",
    category: "AI / Full Stack / Mobile",
    description:
      "An AI-powered astrology notification platform - users sign up and receive daily horoscope alerts generated through an LLM API.",
    proof: [
      "DeepSeek AI API integration",
      "Daily horoscope alerts",
      "User sign-up & database design",
      "CI/CD deployment, built single-handedly",
    ],
    role: "End-to-end development, deployed solo",
    year: "2026",
    stack: ["Flutter", "MongoDB", "AdonisJS", "Prisma", "DeepSeek API"],
    image: "/images/projects/pandit-ai-placeholder.webp",
    hasImage: true,
    visual: "pandit-ai",
    url: "#PROJECT_PANDIT_AI",
    featured: true,
    group: "work",
  },
  {
    id: "quickona",
    tint: "var(--s-yellow)",
    number: "02",
    title: "Quickona",
    category: "E-commerce / Shopify",
    description:
      "A full-fledged dropshipping storefront with shoppable video, urgency mechanics and a custom checkout experience built on Shopify Liquid.",
    proof: [
      "Razorpay payment gateway",
      "Shoppable videos",
      "Newsletter popups",
      "Countdown sales & pricing plans",
    ],
    role: "Full Stack Development",
    year: "2025",
    stack: ["Shopify", "Liquid", "Razorpay"],
    image: "/images/projects/quickona-placeholder.webp",
    hasImage: true,
    visual: "quickona",
    url: "#PROJECT_QUICKONA",
    featured: true,
    group: "work",
  },
  {
    id: "hrms",
    tint: "var(--s-orange)",
    number: "03",
    title: "HR Management System",
    category: "HR Tech / SaaS",
    description:
      "An HR platform built at Chain Code Consulting covering the employee lifecycle - onboarding, attendance tracking and leave management - with a live attendance dashboard.",
    proof: [
      "Employee onboarding",
      "Attendance dashboard & charts",
      "Leave management",
      "Responsive web and mobile layouts",
    ],
    role: "Full Stack Development",
    year: "2024",
    stack: ["Next.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
    image: "/images/projects/hrms-placeholder.webp",
    hasImage: true,
    visual: "hrms",
    url: "#PROJECT_HRMS",
    featured: true,
    group: "work",
  },
  {
    id: "nfttrace",
    tint: "var(--s-mint)",
    number: "04",
    title: "NFTTrace",
    category: "Web3 / Blockchain",
    description:
      "A frontend and backend architecture redesign for an NFT marketplace, rebuilt around reusable components and cleaner data flow.",
    proof: [
      "dNFT-based traceability",
      "Marketplace development",
      "Architecture redesign",
      "Reusable components",
    ],
    role: "Frontend & Backend Architecture",
    year: "2024",
    stack: ["React", "Next.js", "Solidity", "IPFS"],
    image: "/images/projects/nfttrace-placeholder.webp",
    hasImage: true,
    visual: "nfttrace",
    url: "#PROJECT_NFTTRACE",
    featured: true,
    group: "work",
  },
  {
    id: "sutr",
    tint: "var(--s-blue)",
    number: "05",
    title: "sutR",
    category: "Web Application / Product Engineering",
    description:
      "A frontend and backend architecture redesign focused on reusable, optimized development patterns across the existing product.",
    proof: ["Architecture redesign", "Reusable, optimized code"],
    role: "Frontend & Backend Architecture",
    year: "2024",
    stack: ["React", "Node.js"],
    image: "/images/projects/sutr-placeholder.webp",
    hasImage: false,
    visual: "sutr",
    url: "#PROJECT_SUTR",
    featured: false,
    group: "work",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
