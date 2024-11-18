// import Image from "next/image";
// import Link from "next/link";

// const Hero = () => {
//   return (
//     <section className="max-w-screen-xl mx-auto px-6 py-12 lg:flex lg:justify-between lg:items-center font-serif">
//       <div className="z-10 space-y-5 text-center lg:text-left lg:w-1/2">
//         <div className="flex flex-wrap justify-center lg:justify-start items-center space-x-2">
//           <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-customAmber">
//             Hi{" "}
//             <span role="img" aria-label="wave">
//               👋
//             </span>
//             ,
//           </h1>
//         </div>
//         <div className="block">
//           <h2 className="text-2xl sm:text-4xl lg:text-5xl font-semibold text-customWhite ">
//             I am{" "}
//             <p className="text-customEarthyOrange text-typing">
//               Mahnoor Fatima Faizi{" "}
//             </p>
//           </h2>
//         </div>
//         <p className="text-xl sm:text-2xl lg:text-3xl text-customTurquoise mt-2">
//           Passionate Web Developer
//         </p>

//         <div className="flex justify-center lg:justify-start space-x-6 mt-6">
//           {/* <a
//             href="/about"
//             className="px-6 py-3 bg-[#065a60] text-white text-lg font-bold rounded-md shadow-md hover:bg-gray-700 hover:shadow-lg transition-all duration-300 ease-in-out"
//           >
//             About
//           </a>
//           <a
//             href="/contact"
//             className="px-6 py-3 bg-[#065a60] text-white text-lg font-bold rounded-md shadow-md hover:bg-gray-700 hover:shadow-lg transition-all duration-300 ease-in-out"
//           >
//             Contact
//           </a> */}
//           <a
//   href="/about"
//   className="px-6 py-3 bg-[#065a60] text-white text-lg font-bold rounded-md shadow-md hover:bg-gray-700 hover:shadow-lg hover:scale-105 hover:ring-2 hover:ring-[#32e1e6] active:scale-95 transition-transform duration-300 ease-in-out"
// >
//   About
// </a>

// <a
//   className="px-6 py-3 bg-[#065a60] text-white text-lg font-bold rounded-md shadow-md hover:bg-gray-700 hover:shadow-lg hover:scale-105 hover:ring-2 hover:ring-[#32e1e6] active:scale-95 transition-transform duration-300 ease-in-out"
// >
// <Link
//           href="https://www.linkedin.com/in/mahnoor-fatima-f-76782b257/"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//         Linkedin
//         </Link>
// </a>

//         </div>
//       </div>

//       <div className="lg:w-1/2 flex justify-center lg:justify-end mt-8 lg:mt-0">
//         <Image
//           src="/images/portfolioimage.png"
//           alt="Portfolio Image"
//           width={300}
//           height={300}
//           className="rounded-full border-4 border-customYellowOrange"
//           priority
//         />
//       </div>
//     </section>
//   );
// };

// export default Hero;
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

const Hero = () => {
  useEffect(() => {
    // Optional: Initialize any other animation libraries or settings if needed
  }, []);

  return (
    <section className="max-w-screen-xl mx-auto px-6 py-12 lg:flex lg:justify-between lg:items-center font-serif">
      <div className="z-10 space-y-5 text-center lg:text-left lg:w-1/2">
        <div className="flex flex-wrap justify-center lg:justify-start items-center space-x-2">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-customAmber">
            Hi{" "}
            <span role="img" aria-label="wave">
              👋
            </span>
            ,
          </h1>
        </div>
        <div className="block">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-semibold text-customWhite ">
            I am{" "}
            <p className="text-customEarthyOrange text-typing">
              Mahnoor Fatima Faizi{" "}
            </p>
          </h2>
        </div>
        <p className="text-xl sm:text-2xl lg:text-3xl text-customTurquoise mt-2 opacity-0 animate-fadeIn">
          Passionate Web Developer
        </p>

        <div className="flex justify-center lg:justify-start space-x-6 mt-6">
          <a
            href="/about"
            className="px-6 py-3 bg-[#065a60] text-white text-lg font-bold rounded-md shadow-md hover:bg-gray-700 hover:shadow-lg hover:scale-105 hover:ring-2 hover:ring-[#32e1e6] active:scale-95 transition-transform duration-300 ease-in-out"
          >
            About
          </a>

          <a
            className="px-6 py-3 bg-[#065a60] text-white text-lg font-bold rounded-md shadow-md hover:bg-gray-700 hover:shadow-lg hover:scale-105 hover:ring-2 hover:ring-[#32e1e6] active:scale-95 transition-transform duration-300 ease-in-out"
          >
            <Link
              href="https://www.linkedin.com/in/mahnoor-fatima-f-76782b257/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Linkedin
            </Link>
          </a>
        </div>
      </div>

      <div className="lg:w-1/2 flex justify-center lg:justify-end mt-8 lg:mt-0">
        <Image
          src="/images/portfolioimage.png"
          alt="Portfolio Image"
          width={300}
          height={300}
          className="rounded-full border-4 border-customYellowOrange"
          priority
        />
      </div>
    </section>
  );
};

export default Hero;
