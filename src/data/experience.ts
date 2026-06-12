import type { Props as ExperienceProp } from "../components/experience/props";

export const EXPERIENCE: ExperienceProp[] = [
  {
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
    dates: "Oct 2024 — Present",
    title: "Software Engineer (Freelance)",
    company: "Priver Group (Remote)",
    companyUrl: "https://lab.priver.app/",
    description:
      "Working on multiple projects, including HouseApp (Flutter-based real estate discovery platform), DigiMed (medical center portal with GraphQL backend), and a product distribution app integrating SupaBase.",
    technologies: ["Flutter", "Go", "GraphQL", "SupaBase", "PostgreSQL"],
    logo: "/logos/priver.png",
  },
  {
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
    dates: "October 2023 — September 2024",
    title: "Junior Software Engineer",
    company: "Intellsis (Remote)",
    companyUrl: "https://www.linkedin.com/company/intellsis-tech/",
    description:
      "Led the development and implementation of advanced point cloud data processing techniques as the leader of four backend development cells. Specialized in optimizing Potree solutions for large-scale data visualization. Actively oversaw backend performance and ensured alignment with company goals. Collaborated with cross-functional teams to integrate backend solutions seamlessly into larger project frameworks, while mentoring team members to maintain excellence in software development.",
    technologies: [
      "React.JS",
      "Potree",
      "Three.JS",
      "Go (Golang)",
      "GraphQL",
      "Python",
      "AWS",
      "Azure",
    ],
    logo: "/logos/intellsis.png",
  },
  {
    dates: "Founder",
    title: "TasteBud",
    company: "Startup Project",
    companyUrl: "https://app.tastebud-co.com",
    description:
      "Developing an AI-driven restaurant recommendation platform that suggests dishes based on user taste history and menu analysis. Self-funded and in development.",
    technologies: ["AI", "Python", "React Native", "PostgreSQL"],
    logo: "/logos/tastebud.png",
  },
  {
    dates: "Project",
    title: "DJG Bank",
    company: "",
    companyUrl: "https://djgbank.netlify.app/",
    githubUrl: "https://github.com/DJG-inc/DJGBank_Backend",
    description:
      "Developed a banking application for DJG Bank, a fictional bank. The application allows users to create an account, deposit and withdraw funds, and view their transaction history, also includes loans and credit card features. Using clean code and best practices, the application was built with a Spring Boot backend and a React JS frontend.",
    technologies: [
      "React JS",
      "Spring Boot",
      "PostgreSQL",
      "Docker",
      "Netlify",
    ],
    logo: "/logos/djgbank.svg",
  },
  {
    dates: "Project",
    title: "DJG AI Requirement Tools",
    company: "",
    companyUrl: "https://djgaitools.netlify.app/",
    githubUrl: "https://github.com/DJG-inc/DJG_AI_Frontend",
    description:
      "Developed a toolkit to help automate the process of gathering requirements with the help of AI. In this toolkit meeting record generation, that with a meeting recording the tool can generate a list of requirements and a summary of the meeting, SRS generation automation, and a elicitation technique recommendation system.",
    technologies: ["React JS", "Python", "Docker", "OpenAI API"],
    logo: "/logos/djg.svg",
  },
  {
    dates: "Project",
    title: "UniCalc",
    company: "",
    companyUrl: "https://unicalcgmd.netlify.app/",
    githubUrl: "https://github.com/SrOscuroBlck/UniCalcWebGMD",
    description:
      "Developed a web application that allows students to calculate their GPA and CGPA. The application allows students to input their grades and credit hours for each course and calculates their GPA and CGPA. Also allows pdf uploads to automatize the grade input process.",
    technologies: ["React JS", "Python", "Docker", "Firebase"],
    logo: "/logos/unicalc.svg",
  },
  {
    dates: "Project",
    title: "Pc Store E-Commerce",
    company: "",
    companyUrl: "https://pcstoreecommerce.netlify.app/",
    githubUrl: "https://github.com/SrOscuroBlck/E-CommerceGustavoCamargo",
    description:
      "Developed an e-commerce website for a fictional computer store. The website allows users to view products, add them to a cart, and checkout. The website was built using React JS and styled with Material-UI.",
    technologies: ["ReactJs", "Firebase", "Material-UI"],
    logo: "/logos/pcstore.svg",
  },
];
