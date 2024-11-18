// "use client";
// import Link from "next/link";
// import { FaGithub, FaLinkedin } from "react-icons/fa";
// import { useState } from "react";
// import { HiMenuAlt4, HiX } from "react-icons/hi";

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <header className="relative flex justify-between items-center px-8 py-4 bg-[#000000] max-w-screen-2xl mx-auto z-10 font-serif">
//       <div className="md:hidden flex items-center text-gray-600">
//         <button onClick={toggleMenu}>
//           {isMenuOpen ? <HiX size={30} /> : <HiMenuAlt4 size={30} />}
//         </button>
//       </div>

//       <div className="text-xl font-bold hidden md:block">
//         <span className="text-white">
//           Let&#8217;s Build Something Together!
//         </span>
//       </div>

//       <nav className="hidden md:flex space-x-8 text-lg font-medium text-white">
//         <Link href="/" className="hover:text-purple-500">
//           Home
//         </Link>
//         <Link href="/about" className="hover:text-purple-500">
//           About
//         </Link>
//         <Link href="/projects" className="hover:text-purple-500">
//           Projects
//         </Link>
//         <Link href="/contact" className="hover:text-purple-500">
//           Contact
//         </Link>
//       </nav>

//       {isMenuOpen && (
//         <nav className="md:hidden absolute top-16 left-0 w-full bg-gray-100 p-5 space-y-4 text-center z-20">
//           <Link
//             href="/"
//             className="block text-lg text-gray-700 hover:text-purple-500"
//           >
//             Home
//           </Link>
//           <Link
//             href="/about"
//             className="block text-lg text-gray-700 hover:text-purple-500"
//           >
//             About
//           </Link>{" "}
//           <Link
//             href="/projects"
//             className="block text-lg text-gray-700 hover:text-purple-500"
//           >
//             Projects
//           </Link>
//           <Link
//             href="/contact"
//             className="block text-lg text-gray-700 hover:text-purple-500"
//           >
//             Contact
//           </Link>
//         </nav>
//       )}

//       <div className="hidden md:flex space-x-4 text-gray-600">
//         <Link
//           href="https://github.com/mahnoorfatimafaizi"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <FaGithub size={22} />
//         </Link>

//         <Link
//           href="https://www.linkedin.com/in/mahnoor-fatima-f-76782b257/"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <FaLinkedin size={22} />
//         </Link>
//       </div>
//     </header>
//   );
// };

// export default Header;

"use client";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useState, useEffect } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`relative flex justify-between items-center px-8 py-4 bg-[#000000] max-w-screen-2xl mx-auto z-10 font-serif transform ${
        isLoaded ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
      } transition-all duration-500 ease-out`}
    >
      <div className="md:hidden flex items-center text-gray-600">
        <button onClick={toggleMenu}>
          {isMenuOpen ? <HiX size={30} /> : <HiMenuAlt4 size={30} />}
        </button>
      </div>

      <div className="text-xl font-bold hidden md:block">
        <span className="text-white">
          Let&#8217;s Build Something Together!
        </span>
      </div>

      <nav className="hidden md:flex space-x-8 text-lg font-medium text-white">
        <Link href="/" className="hover:text-purple-500">
          Home
        </Link>
        <Link href="/about" className="hover:text-purple-500">
          About
        </Link>
        <Link href="/projects" className="hover:text-purple-500">
          Projects
        </Link>
        <Link href="/contact" className="hover:text-purple-500">
          Contact
        </Link>
      </nav>

      {isMenuOpen && (
        <nav className="md:hidden absolute top-16 left-0 w-full bg-gray-100 p-5 space-y-4 text-center z-20">
          <Link
            href="/"
            className="block text-lg text-gray-700 hover:text-purple-500"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="block text-lg text-gray-700 hover:text-purple-500"
          >
            About
          </Link>{" "}
          <Link
            href="/projects"
            className="block text-lg text-gray-700 hover:text-purple-500"
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className="block text-lg text-gray-700 hover:text-purple-500"
          >
            Contact
          </Link>
        </nav>
      )}

      <div className="hidden md:flex space-x-4 text-gray-600">
        <Link
          href="https://github.com/mahnoorfatimafaizi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={22} />
        </Link>

        <Link
          href="https://www.linkedin.com/in/mahnoor-fatima-f-76782b257/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={22} />
        </Link>
      </div>
    </header>
  );
};

export default Header;
