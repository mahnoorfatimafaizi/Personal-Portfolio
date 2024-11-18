"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiVisualstudiocode,
  SiTypescript,
  SiNextdotjs,
} from "react-icons/si";

const TechStack: React.FC = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section
      data-aos="fade-up"
      className="text-center mt-20 max-w-screen-xl mx-auto p-6 md:p-8 min-h-[500px] mb-20 bg-white font-serif"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
        My Tech Stack
      </h2>
      <p className="text-lg sm:text-2xl text-gray-600 mt-2">
        Technologies I&#8217;ve been working with recently
      </p>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6 sm:gap-8 mt-8 justify-items-center">
        <FaHtml5 size={68} className="text-orange-500" />
        <FaCss3Alt size={68} className="text-blue-600" />
        <FaJsSquare size={68} className="text-yellow-500" />
        <FaReact size={68} className="text-blue-400" />
        <SiNextdotjs size={68} className="text-black" />
        <SiTailwindcss size={68} className="text-teal-400" />
        <SiTypescript size={68} className="text-blue-600" />
        <FaGitAlt size={68} className="text-red-500" />
        <FaGithub size={68} className="text-gray-800" />
        <SiVisualstudiocode size={68} className="text-blue-500" />
      </div>
    </section>
  );
};

export default TechStack;
