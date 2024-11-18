"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

const Footer = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <footer className="bg-[#000000] py-16 font-serif">
      <div className="container mx-auto px-4 flex flex-col items-center space-y-6 md:flex-row md:justify-between md:space-y-0 mt-10">
        <div className="text-center md:text-left">
          <p className="text-white">mahnoorf2002@gmail.com</p>
        </div>

        <div className="flex space-x-4">
          <Link href="https://github.com/mahnoorfatimafaizi" passHref>
            <div className="text-white hover:text-purple-500 text-2xl">
              <i className="fab fa-github"></i>
            </div>
          </Link>

          <Link href="https://www.linkedin.com/in/mahnoor-fatima-f-76782b257/" passHref>
            <div className="text-white hover:text-purple-500 text-2xl">
              <i className="fab fa-linkedin"></i>
            </div>
          </Link>
        </div>

        <div className="flex flex-wrap justify-center md:justify-start space-x-6 text-white text-sm">
          <Link href="/" passHref>
            <div className="hover:underline hover:text-purple-500">Home</div>
          </Link>
          <Link href="/about" passHref>
            <div className="hover:underline hover:text-purple-500">About</div>
          </Link>
          <Link href="/projects" passHref>
            <div className="hover:underline hover:text-purple-500">
              Projects
            </div>
          </Link>
          <Link href="/contact" passHref>
            <div className="hover:underline hover:text-purple-500">Contact</div>
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-8">
        <hr className="border-t border-gray-300" />
      </div>
    </footer>
  );
};

export default Footer;
