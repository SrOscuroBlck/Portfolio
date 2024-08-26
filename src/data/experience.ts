import type { Props as ExperienceProp } from "../components/experience/props";

export const EXPERIENCE: ExperienceProp[] = [
  {
    dates: "October 2023 — Present",
    title: "Junior Software Engineer",
    company: "Intellsis (Remote)",
    companyUrl: "https://www.linkedin.com/company/intellsis-tech/mycompany/",
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
      "Azure"
    ],
    logo: "https://media.licdn.com/dms/image/v2/D4E0BAQEcohTSGrDOcg/company-logo_200_200/company-logo_200_200/0/1697696720463/intellsis_tech_logo?e=1732752000&v=beta&t=vQ_uCfVLipeeQ0uNSqPR4_Q7geZefzNv59EyR6K5_Os",
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
    logo: "https://djgbank.netlify.app/assets/logo-d4e9de9a.svg",
  },
  {
    dates: "Project",
    title: "DJG AI Requirement Tools",
    company: "",
    companyUrl: "https://djgaitools.netlify.app/",
    githubUrl: "https://github.com/DJG-inc/DJG_AI_Frontend",
    description:
      "Developed a toolkit to help automate the process of gathering requirements with the help of AI. In this toolkit meeting record generation, that with a meeting recording the tool can generate a list of requirements and a summary of the meeting, SRS generation automation, and a elicitation technique recommendation system.",
    technologies: [
      "React JS",
      "Python",
      "Docker",
      "OpenAI API",
    ],
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
    technologies: [
      "React JS",
      "Python",
      "Docker",
      "Firebase",
    ],
    logo: "https://unicalcgmd.netlify.app/static/media/logo-ct.8c063364af2911006f24835791beff8b.svg",
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
    logo: "https://pcstoreecommerce.netlify.app/assets/PcStoreLogo-74c7c985.svg",
  },
];
