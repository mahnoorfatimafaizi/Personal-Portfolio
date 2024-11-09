
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="container mx-auto px-4 py-16 max-w-screen-2xl animate-fade-in-up min-h-screen p-10 font-serif">
      <h2 className="text-4xl font-bold text-white mb-4 text-center animate__animated animate__fadeIn animate__delay-1s">Get in Touch</h2>
      <p className="text-white text-center mb-8 animate__animated animate__fadeIn animate__delay-2s">Feel free to reach out to me through my social profiles or email address.</p>

      <div className="flex justify-center">
        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-4xl animate__animated animate__fadeIn animate__delay-3s">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Left side info, hidden on small screens */}
            <div className="space-y-6 hidden md:block">
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-3xl text-red-600 transition-transform transform hover:scale-110" />
                <p className="text-lg text-gray-800">Email</p>
              </div>

              <div className="flex items-center space-x-3">
                <FaLinkedin className="text-3xl text-blue-600 transition-transform transform hover:scale-110" />
                <p className="text-lg text-gray-800">LinkedIn</p>
              </div>

              <div className="flex items-center space-x-3">
                <FaGithub className="text-3xl text-gray-800 transition-transform transform hover:scale-110" />
                <p className="text-lg text-gray-800">GitHub</p>
              </div>
            </div>

            {/* Right side info */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                
                  <div className="text-lg text-gray-800 font-bold hover:underline transition-all hover:text-purple-500">mahnoorf2002@gmail.com</div>
                
              </div>

              <div className="flex items-center space-x-3">
                <Link href="https://www.linkedin.com/in/mahnoor-fatima-f-76782b257/" passHref target='blank'>
                  <div className="text-lg text-gray-800 font-bold hover:underline transition-all hover:text-purple-500">My Linkedin</div>
                </Link>
              </div>

              <div className="flex items-center space-x-3">
                <Link href="https://github.com/mahnoorfatimafaizi" passHref target='blank'>
                  <div className="text-lg text-gray-800 font-bold hover:underline transition-all hover:text-purple-500">My Github</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center space-x-6 text-gray-800 text-2xl mt-8">
        <Link href="https://github.com" passHref>
          <div className="hover:text-blue-600 transition-all transform hover:scale-125">
            <i className="fab fa-github"></i>
          </div>
        </Link>
        <Link href="https://twitter.com" passHref>
          <div className="hover:text-blue-600 transition-all transform hover:scale-125">
            <i className="fab fa-twitter"></i>
          </div>
        </Link>
        <Link href="https://linkedin.com" passHref>
          <div className="hover:text-blue-600 transition-all transform hover:scale-125">
            <i className="fab fa-linkedin"></i>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Contact;






