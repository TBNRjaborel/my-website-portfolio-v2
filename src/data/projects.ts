import { desc } from "motion/react-client";

export type Project = {
  title: string;
  description: string;
  stack: string[];
  github?: string;
  live?: string;
};

const projects: Project[] = [
  {
    title: "PawHuway",
    description:
      "A platform that connect pet owners,veterinarians, and vet clinics towards better pet care.",
    stack: ["React Native", "Supabase"],
    github: "https://github.com/TBNRjaborel/PawHuway",
  },
  {
    title: "Portfolio Website V1",
    description:
      "A personal portfolio website to showcase my skills, experience, and projects.",
    stack: ["Next.js", "Tailwind CSS"],
    github: "https://github.com/TBNRjaborel/my-website-porfolio",
    live: "https://gabrielmagdugo.vercel.app",
  },
  {
    title: "Portfolio Website V2",
    description:
      "Revamped and refined website portfolio showcasing my skills, experience, and projects.",
    stack: ["Next.js", "Tailwind CSS"],
    github: "https://github.com/TBNRjaborel/my-website-portfolio-v2",
    live: "https://gabrielmagdugov2.vercel.app",
  },
  {
    title: "Ma22",
    description:
      "A learning management system platform that enables users access to structured learning content and progress tracking with admin-side CRUD operations for managing trainings and topics.",
    stack: ["C# ASP.NET MVC", "Razor", "Microsoft SQL Server", "Tailwind CSS"],
    github: "https://github.com/SirLKFD/Ma22",
  },
  {
    title: "CodeX",
    description:
      "An IDE with a custom language that supports basic programming constructs such as assignments and arithmetic operations for our CMSC 124 project",
    stack: ["Tauri", "Vite", "Vue.js"],
    github: "https://github.com/ande24/cmsc124-project",
  },
  {
    title: "Tibaks",
    description:
      "An ongoing development of a mobile and desktop application that serves as a platform for digitizing vaccination and health records",
    stack: [
      "React Native",
      "React",
      "Electron",
      "Supabase",
      "C# ASP.NET Core",
      "Tailwind CSS",
    ],
    github: "https://github.com/Pixelazation/med-app-desktop",
  },
];

export default projects;
