import Image from "next/image";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

interface Project {
  title: string;
  description: string;
  techStack: string;
  previewLink: string;
  codeLink: string;
  imageUrl: string;
}

const projects: Project[] = [
  {
    title: "Project: Cookieen",
    description:
      "Cookieen is a recipe website built with Next.js, TypeScript, and Tailwind CSS. It features responsive design and shadcn UI components. The project showcases my skills in creating user-friendly, modern websites.",
    techStack: "Next.js, React, Tailwind CSS, TypeScript, Shadcn UI",
    previewLink: "https://alm4-cookieen.vercel.app/",
    codeLink:
      "https://github.com/mahnoorfatimafaizi/Milestone2-Basic-UI-Design-using-Tailwind-CSS.git",
    imageUrl: "/images/recipe_website.png",
  },
  {
    title: "Project: AI & Finance",
    description:
      "AI & Finance is a financial insights platform built with Next.js, TypeScript, and custom CSS. It features a responsive layout and dynamic data displays, showcasing my skills in crafting engaging, data-centric websites.",
    techStack: "Next.js, React, Typescript, Custom CSS",
    previewLink: "https://aiandfinance.vercel.app/",
    codeLink:
      "https://github.com/mahnoorfatimafaizi/Milestone2-Basic-UI-Design-with-Custom-CSS.git",
    imageUrl: "/images/ai&finance.png",
  },
  {
    title: "Project: Company Portfolio",
    description:
      "Company Portfolio is a sleek, responsive website built with HTML and CSS. It highlights professional services, key achievements, and business values in a user-friendly, visually appealing layout. This project showcases my ability to create effective business portfolios.",
    techStack: "HTML, Custom CSS",
    previewLink: "https://company-portfolio-htmlcss.vercel.app/",
    codeLink:
      "https://github.com/mahnoorfatimafaizi/HTML-CSS-Final-Assignment.git",
    imageUrl: "/images/company_portfolio.png",
  },
  {
    title: "Project: Resume Builder",
    description:
      "I developed a dynamic resume builder using HTML, CSS, and TypeScript, which is now enhanced with an edit function. This allows users to create, customize, and update their resumes interactively, highlighting my web development and interactive design skills.",
    techStack: "HTML, CSS",
    previewLink: "https://alm4-resume-builder-editable.vercel.app/",
    codeLink:
      "https://github.com/mahnoorfatimafaizi/Hackathon-Milestone-4-Dynamic-Resume-Builder.git",
    imageUrl: "/images/resume_builder.png",
  },
];

const Projects = () => {
  return (
    <section className="relative text-center mt-16 mx-auto max-w-screen-xl px-4 py-12 mb-16">
      <div className="absolute inset-0 bg-white opacity-20 z-0"></div>

      <h2 className="text-3xl font-bold text-white z-10 relative">Projects</h2>
      <p className="text-lg text-white mt-2 z-10 relative">
        Things I’ve built so far
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 z-10 relative">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden animate-fade-in-up hover:shadow-xl transition-shadow duration-300 max-w-xs mx-auto flex flex-col"
          >
            <Image
              src={project.imageUrl}
              alt={project.title}
              width={400}
              height={200}
              className="w-full h-40 object-cover"
            />
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold text-gray-800">
                {project.title}
              </h3>
              <p className="text-gray-600 mt-2">{project.description}</p>
              <p className="text-sm text-gray-500 mt-4">
                Tech stack:{" "}
                <span className="text-gray-800 font-medium">
                  {project.techStack}
                </span>
              </p>
              <div className="flex justify-between items-center mt-4">
                <a
                  href={project.previewLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-blue-500 hover:text-blue-700 transition-colors duration-200 px-6 pb-2"
                >
                  <FaExternalLinkAlt className="mr-2" />
                  Live Preview
                </a>
                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-blue-500 hover:text-blue-700 transition-colors duration-200 pb-2"
                >
                  <FaGithub className="ml-2" />
                  View Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
