import type { Props as ExperienceProp } from "../components/experience/props";

export const EXPERIENCE: ExperienceProp[] = [
  {
    anchor: "bookhub",
    dates: "Feb 2025 — Present",
    title: "AWS Developer",
    company: "BookHub (Muthu GmbH) (Remote)",
    companyUrl: "https://www.mybookhub.de",
    description:
      "Leading AWS serverless development for a Shopify-integrated print-on-demand book platform. Automating book production workflows using AWS Lambda, Step Functions, CloudFormation, and API Gateway. Implementing CI/CD pipelines and optimizing system infrastructure.",
    technologies: [
      "AWS Lambda",
      "Step Functions",
      "CloudFormation",
      "API Gateway",
      "Python",
      "CI/CD",
    ],
    logo: "/logos/bookhub.png",
  },
  {
    anchor: "priver",
    dates: "Oct 2024 — Present",
    title: "Software Engineer (Freelance)",
    company: "Priver Group (Remote)",
    companyUrl: "https://lab.priver.app/",
    description:
      "Working on multiple projects, including HouseApp (Flutter-based real estate discovery platform), DigiMed (medical center portal with GraphQL backend), and a product distribution app integrating SupaBase.",
    technologies: ["Flutter", "Go", "GraphQL", "Supabase", "PostgreSQL"],
    logo: "/logos/priver.png",
  },
  {
    anchor: "bast",
    dates: "Aug 2024 — Present",
    title: "Tech Lead",
    company: "BAST Automation (Remote)",
    companyUrl: "https://www.linkedin.com/company/bast-colombia/",
    description:
      "Leading the development of BIA (BAST Intelligent Assistant), a chatbot for IPS appointment automation, reducing call center workload by 60%. Managing a team of three, defining system architecture, and ensuring product-market fit.",
    technologies: ["AI Chatbots", "Python", "NLP", "PostgreSQL"],
    logo: "/logos/bast_automation.svg",
  },
  {
    anchor: "intellsis",
    dates: "October 2023 — September 2024",
    title: "Junior Software Engineer",
    company: "Intellsis (Remote)",
    companyUrl: "https://www.linkedin.com/company/intellsis-tech/",
    description:
      "Led the development and implementation of advanced point cloud data processing techniques as the leader of four backend development cells. Specialized in optimizing Potree solutions for large-scale data visualization. Actively oversaw backend performance and ensured alignment with company goals. Collaborated with cross-functional teams to integrate backend solutions seamlessly into larger project frameworks, while mentoring team members to maintain excellence in software development.",
    technologies: [
      "React",
      "Potree",
      "Three.js",
      "Go",
      "GraphQL",
      "Python",
      "AWS",
      "Azure",
    ],
    logo: "/logos/intellsis.png",
  },
  {
    anchor: "tastebud",
    dates: "Founder",
    title: "TasteBud",
    company: "Startup Project",
    companyUrl: "https://www.linkedin.com/company/tastebud-co/",
    description:
      "Developing an AI-driven restaurant recommendation platform that suggests dishes based on user taste history and menu analysis. Self-funded and in development.",
    technologies: ["AI", "Python", "React Native", "PostgreSQL"],
    logo: "/logos/tastebud.png",
  },
];
