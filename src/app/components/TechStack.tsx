// "use client";
// import React, { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import {
//   FaHtml5,
//   FaCss3Alt,
//   FaJsSquare,
//   FaReact,
//   FaGitAlt,
//   FaGithub,
// } from "react-icons/fa";
// import {
//   SiTailwindcss,
//   SiVisualstudiocode,
//   SiTypescript,
//   SiNextdotjs,
// } from "react-icons/si";

// const TechStack: React.FC = () => {
//   useEffect(() => {
//     AOS.init();
//   }, []);

//   return (
//     <section
//       data-aos="fade-up"
//       className="text-center mt-20 max-w-screen-xl mx-auto p-6 md:p-8 min-h-[500px] mb-20 bg-white font-serif"
//     >
//       <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
//         My Tech Stack
//       </h2>
//       <p className="text-lg sm:text-2xl text-gray-600 mt-2">
//         Technologies I&#8217;ve been working with recently
//       </p>

//       <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6 sm:gap-8 mt-8 justify-items-center">
//         <FaHtml5 size={68} className="text-orange-500" />
//         <FaCss3Alt size={68} className="text-blue-600" />
//         <FaJsSquare size={68} className="text-yellow-500" />
//         <FaReact size={68} className="text-blue-400" />
//         <SiNextdotjs size={68} className="text-black" />
//         <SiTailwindcss size={68} className="text-teal-400" />
//         <SiTypescript size={68} className="text-blue-600" />
//         <FaGitAlt size={68} className="text-red-500" />
//         <FaGithub size={68} className="text-gray-800" />
//         <SiVisualstudiocode size={68} className="text-blue-500" />
//       </div>
//     </section>
//   );
// };

// export default TechStack;

"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
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
        <FaHtml5
          size={95}
          className="text-orange-500 hover:bg-orange-200 hover:scale-110 transition-all duration-300 ease-in-out p-3 rounded-full"
          data-aos="fade-right"
          data-aos-delay="100"
        />
        <FaCss3Alt
          size={95}
          className="text-blue-600 hover:bg-blue-200 hover:scale-110 transition-all duration-300 ease-in-out p-3 rounded-full"
          data-aos="fade-right"
          data-aos-delay="200"
        />
        <FaJsSquare
          size={95}
          className="text-yellow-500 hover:bg-yellow-200 hover:scale-110 transition-all duration-300 ease-in-out p-3 rounded-full"
          data-aos="fade-right"
          data-aos-delay="300"
        />
        <FaReact
          size={95}
          className="text-blue-400 hover:bg-blue-200 hover:scale-110 transition-all duration-300 ease-in-out p-3 rounded-full"
          data-aos="fade-right"
          data-aos-delay="400"
        />
        <SiNextdotjs
          size={95}
          className="text-black hover:bg-black hover:scale-110 transition-all duration-300 ease-in-out p-3 rounded-full"
          data-aos="fade-left"
          data-aos-delay="100"
        />
        <SiTailwindcss
          size={95}
          className="text-teal-400 hover:bg-teal-200 hover:scale-110 transition-all duration-300 ease-in-out p-3 rounded-full"
          data-aos="fade-left"
          data-aos-delay="200"
        />
        <SiTypescript
          size={95}
          className="text-blue-600 hover:bg-blue-200 hover:scale-110 transition-all duration-300 ease-in-out p-3 rounded-full"
          data-aos="fade-left"
          data-aos-delay="300"
        />
        <FaGitAlt
          size={95}
          className="text-red-500 hover:bg-red-200 hover:scale-110 transition-all duration-300 ease-in-out p-3 rounded-full"
          data-aos="fade-left"
          data-aos-delay="400"
        />
        <FaGithub
          size={95}
          className="text-gray-800 hover:bg-gray-200 hover:scale-110 transition-all duration-300 ease-in-out p-3 rounded-full"
          data-aos="fade-up"
          data-aos-delay="100"
        />
        <SiVisualstudiocode
          size={95}
          className="text-blue-500 hover:bg-blue-200 hover:scale-110 transition-all duration-300 ease-in-out p-3 rounded-full"
          data-aos="fade-up"
          data-aos-delay="200"
        />
        {/* Add Python Icon here */}
        <div
          className="hover:bg-yellow-200 hover:scale-110 transition-all duration-300 ease-in-out p-3 rounded-full"
          data-aos="fade-up"
          
        >
          <Image
            src="" // Replace with your Python icon path
            alt="Python"
            className="h-[95px] w-[95px]"

          />
        </div>
      </div>
    </section>
  );
};

export default TechStack;


