import type { Props as ExperienceProp } from "../components/experience/props";

export const PROJECTS: ExperienceProp[] = [
  {
    dates: "Project",
    title: "DJG Bank",
    company: "",
    companyUrl: "https://djgbank.netlify.app/",
    githubUrl: "https://github.com/DJG-inc/DJGBank_Backend",
    description:
      "Developed a banking application for DJG Bank, a fictional bank. The application allows users to create an account, deposit and withdraw funds, and view their transaction history, also includes loans and credit card features. Using clean code and best practices, the application was built with a Spring Boot backend and a React JS frontend.",
    technologies: ["React", "Spring Boot", "PostgreSQL", "Docker", "Netlify"],
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
    technologies: ["React", "Python", "Docker", "OpenAI API"],
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
    technologies: ["React", "Python", "Docker", "Firebase"],
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
    technologies: ["React", "Firebase", "Material-UI"],
    logo: "/logos/pcstore.svg",
  },
];
