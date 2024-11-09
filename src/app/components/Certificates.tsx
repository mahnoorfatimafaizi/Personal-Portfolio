import Image from "next/image";

interface Certificate {
  title: string;
  description: string;
  issuedBy: string;
  certificateLink: string;
  imageUrl: string;
}

const certificates: Certificate[] = [
  {
    title: "Introduction to Generative AI",
    description:
      "This certificate showcases completion of a course on Introduction to Generative AI.",
    issuedBy: "Google",
    certificateLink:
      "https://www.cloudskillsboost.google/public_profiles/42113e71-ae7b-48db-be70-bdb8d3266dcb/badges/12224735",
    imageUrl: "/images/genAi-badge.jpg",
  },
];

const Certificates = () => {
  return (
    <section className="text-center mt-8 mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12 font-sans">
      <h2 className="text-2xl sm:text-3xl font-bold text-white">
        Certificates & Badges
      </h2>
      <p className="text-md sm:text-lg text-white mt-2">
        Achievements that showcase my skills and learning
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-8">
        {certificates.map((certificate, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 w-full max-w-sm sm:max-w-xs lg:max-w-sm mx-auto"
          >
            <Image
              src={certificate.imageUrl}
              alt={certificate.title}
              width={400}
              height={200}
              className="w-full h-40 sm:h-48 md:h-56 object-cover"
              priority
            />
            <div className="p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                {certificate.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 mt-2">
                {certificate.description}
              </p>
              <p className="text-xs sm:text-sm text-gray-500 mt-4">
                Issued by:{" "}
                <span className="text-gray-800 font-medium">
                  {certificate.issuedBy}
                </span>
              </p>
              {certificate.certificateLink && (
                <div className="flex justify-center items-center mt-4">
                  <a
                    href={certificate.certificateLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-700 transition-colors duration-200"
                  >
                    View Certificate
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
