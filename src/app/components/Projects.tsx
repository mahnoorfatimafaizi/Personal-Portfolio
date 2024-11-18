"use client";

import React, { useState } from "react";
import { useInView } from "react-intersection-observer";

interface ProjectProps {
  image: string;
  title: string;
  description: string;
  techStack: string[];
  githubLink: string;
  vercelLink: string;
}

const ProjectCard: React.FC<ProjectProps> = ({
  image,
  title,
  description,
  techStack,
  githubLink,
  vercelLink,
}) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div
      className="flex flex-col md:flex-row items-center justify-between bg-white shadow-lg rounded-lg p-6 space-x-6 bg-opacity-90 
        hover:shadow-2xl hover:scale-105 transition-transform duration-300"
    >
      <div className="flex-shrink-0 w-full md:w-1/3 mb-6 md:mb-0">
        <img
          src={image}
          alt={title}
          className="w-full h-[250px] object-cover rounded-lg"
        />
      </div>

      <div className="w-full md:w-2/3 font-serif">
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {techStack.map((tech, index) => (
            <span
              key={index}
              className="bg-teal-200 text-teal-800 py-1 px-3 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        {showDetails && (
          <div className="text-gray-500 text-sm mb-4">
            Tools used: {techStack.join(", ")}
          </div>
        )}

        <div className="flex space-x-4 items-center">
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-500 font-medium hover:underline"
          >
            GitHub
          </a>
          <a
            href={vercelLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-500 font-medium hover:underline"
          >
            Preview
          </a>
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="text-teal-500 font-medium hover:underline focus:outline-none"
          >
            {showDetails ? "Hide Details" : "Read More"}
          </button>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const { ref, inView } = useInView({
    threshold: 0.2, // Trigger when 20% of the element is visible
    triggerOnce: true, // Only trigger the animation once
  });

  return (
    <section className="py-16 bg-background text-foreground relative font-serif">
      <div className="absolute inset-0 bg-white bg-opacity-20"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <h2
          className={`text-3xl font-bold text-center mb-12 text-white transition-opacity duration-700 ease-out ${
            inView ? "opacity-100" : "opacity-0"
          }`}
          ref={ref}
        >
          My Projects
        </h2>

        <div
          className={`space-y-12 transition-transform duration-700 ease-out ${
            inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <ProjectCard
            image="/images/recipe_website.png"
            title="Project: Cookieen (Recipe Website)"
            description="Cookieen is a recipe website built with Next.js, TypeScript, and Tailwind CSS. It features responsive design and shadcn UI components. The project showcases my skills in creating user-friendly, modern websites."
            techStack={[
              "Next.js",
              "React",
              "Tailwind CSS",
              "TypeScript",
              "Shadcn UI",
            ]}
            githubLink="https://github.com/mahnoorfatimafaizi/Milestone2-Basic-UI-Design-using-Tailwind-CSS.git"
            vercelLink="https://alm4-cookieen.vercel.app/"
          />

          <ProjectCard
            image="/images/ai&finance.png"
            title="Project: AI & Finance"
            description="AI & Finance is a sample project built with Next.js, TypeScript, and custom CSS. It features a responsive design and pixel-perfect layouts. This project showcases my skills in creating modern, user-friendly websites."
            techStack={["Next.js", "React", "Custom CSS"]}
            githubLink="https://github.com/mahnoorfatimafaizi/Milestone2-Basic-UI-Design-with-Custom-CSS.git"
            vercelLink="https://aiandfinance.vercel.app/"
          />
        </div>

        <div className="flex justify-center mt-6">
          <a
            href="/projects"
            className="px-6 py-3 bg-[#065a60] text-white text-bold font-bold rounded-md shadow-md hover:bg-gray-700 hover:shadow-lg hover:scale-105 hover:ring-2 hover:ring-[#32e1e6] active:scale-95 transition-transform duration-300 ease-in-out"
          >
            See more projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
