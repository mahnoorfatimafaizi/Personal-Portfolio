"use client";

import React, { useEffect, useState } from "react";

const About = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <section
      id="about"
      className="container mx-auto px-4 py-8 animate-fade-in-up font-serif"
    >
      <section className="mb-12 flex justify-center px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow rounded-lg p-6 w-full max-w-screen-lg">
          <h2 className="text-3xl font-bold text-gray-900 text-center">
            About Me
          </h2>
          <p className="text-gray-700 mt-4 text-base sm:text-lg md:text-xl text-center">
            Hello, I am Mahnoor Fatima Faizi. My academic background is in
            finance and business, which continues to shape my perspective as I
            explore new fields. About a year ago, I embarked on my development
            journey, which was a big shift from my initial studies. I expected
            it to be challenging not having a formal computer science
            background. However, my drive to learn and improve pushed me
            forward, and that same passion still fuels my journey today.
          </p>
          <p className="text-gray-700 mt-4 text-base sm:text-lg md:text-xl text-center">
            Since then, I’ve developed solid skills in web development, focusing
            on languages and frameworks that support modern, responsive design.
            I’m dedicated to improving my technical expertise by learning every
            day, as I believe continuous learning is essential for growth and
            success in this industry. This commitment, paired with a strong work
            ethic, ensures that I approach every project with fresh ideas,
            adaptability, and professionalism.
          </p>
          <p className="text-gray-700 mt-4 text-base sm:text-lg md:text-xl text-center">
            As someone who is reliable and detail-oriented, I’m eager to
            contribute meaningfully to any team, bringing a balanced blend of
            business knowledge and tech skills to deliver impactful results. I
            look forward to growing alongside like-minded professionals who
            value innovation and integrity.
          </p>
        </div>
      </section>

      <section className="mb-12 flex justify-center">
        <div className="flex flex-col md:flex-row w-full space-y-8 md:space-x-8 md:space-y-0">
          <div className="bg-white bg-opacity-10 shadow rounded-lg p-6 w-full md:w-1/2">
            <h3 className="text-2xl font-bold text-white text-center mb-4">
              Education
            </h3>

            <div className="bg-white shadow rounded-lg p-4 my-4 flex flex-col sm:flex-row items-start sm:items-center justify-between">
              <div className="mb-4 sm:mb-0">
                <h4 className="text-xl font-semibold text-gray-800">
                  Association of Chartered Certified Accountants (ACCA)
                </h4>
                <p className="text-gray-600">
                  Chartered Certified Accountant International
                  Business/Trade/Commerce
                </p>
                <p className="text-gray-500 text-sm">2023 - Present</p>
              </div>
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                Ongoing
              </span>
            </div>

            <div className="bg-white shadow rounded-lg p-4 my-4 flex flex-col sm:flex-row items-start sm:items-center justify-between">
              <div className="mb-4 sm:mb-0">
                <h4 className="text-xl font-semibold text-gray-800">
                  Associate&#8217;s degree Business/Commerce
                </h4>
                <p className="text-gray-600">Govt. Premier College For Women</p>
                <p className="text-gray-500 text-sm">2022 - Present</p>
              </div>
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                Ongoing
              </span>
            </div>

            <div className="bg-white shadow rounded-lg p-4 my-4 flex flex-col sm:flex-row items-start sm:items-center justify-between">
              <div className="mb-4 sm:mb-0">
                <h4 className="text-xl font-semibold text-gray-800">
                  Higher Secondary Certificate (HSC)- Commerce
                </h4>
                <p className="text-gray-600">Govt. Premier College For Women</p>
                <p className="text-gray-500 text-sm">2020 - 2021</p>
              </div>
            </div>
          </div>

          <div className="bg-white bg-opacity-10 shadow rounded-lg p-6 w-full md:w-1/2">
            <h3 className="text-2xl font-bold text-white text-center mb-4">
              Courses
            </h3>

            <div className="bg-white shadow rounded-lg p-4 my-4 flex flex-col sm:flex-row items-start sm:items-center justify-between">
              <div className="mb-4 sm:mb-0">
                <h4 className="text-xl font-semibold text-gray-800">
                  Google Statup School: Gen AI
                </h4>
                <p className="text-gray-600">Google</p>
                <p className="text-gray-500 text-sm">November 2024 - Present</p>
              </div>
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                Ongoing
              </span>
            </div>

            <div className="bg-white shadow rounded-lg p-4 my-4 flex flex-col sm:flex-row items-start sm:items-center justify-between">
              <div className="mb-4 sm:mb-0">
                <h4 className="text-xl font-semibold text-gray-800">
                  Cloud Applied Generative AI
                </h4>
                <p className="text-gray-600">
                  Governor Sindh Initiative for Cloud Applied Generative AI
                </p>
                <p className="text-gray-500 text-sm">February 2024 - Present</p>
              </div>
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                Ongoing
              </span>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default About;
