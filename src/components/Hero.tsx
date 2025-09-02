import React, { useState } from 'react';
import { MapPin, Mail, Phone, Linkedin, Download, Github } from 'lucide-react';

const Hero = () => {
  const [imgError, setImgError] = useState(false);

  // Your Google Drive image converted to direct link
  const avatarUrl = "assets/picture.webp";

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 flex items-center justify-center px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                GURU PRASAD
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
                  R
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 font-medium">
                AI & Data Science Enthusiast | Problem Solver | Future Innovator
              </p>
            </div>

            <div className="flex items-center gap-2 text-gray-600">
              <MapPin className="w-5 h-5" />
              <span>Coimbatore, Tamil Nadu</span>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed max-w-lg">
              Passionate about leveraging artificial intelligence and data science to solve real-world problems. 
              I thrive on innovation, continuous learning, and creating impactful technology solutions.
            </p>

            {/* Contact Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:guruprasad12032003@gmail.com"
                className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Mail className="w-5 h-5" />
                Email Me
              </a>
              <a
                href="tel:+918248981237"
                className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                <Phone className="w-5 h-5" />
                Call
              </a>
              <a
                href="https://www.linkedin.com/in/guru-prasad-r-2a504731a/"
                className="flex items-center gap-2 px-6 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>

              <a
              href="https://github.com/GURUPRASAD120303"
              download
              className="flex items-center gap-2 px-4 py-2 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors w-fit"
            >
              <Github className="w-5 h-5" />
              Github
            </a>
            </div>

            <a
              href="https://drive.google.com/uc?export=download&id=1zjkF04slmYQp1PntAjbiFJocjhLd0ITJ"
              download
              className="flex items-center gap-2 px-4 py-2 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors w-fit"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </a>
          </div>

          {/* Right Content - Avatar */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-400 to-green-400 p-1">
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                  <div className="w-72 h-72 rounded-full overflow-hidden flex items-center justify-center bg-gradient-to-br from-blue-100 to-green-100">
                    {!imgError ? (
                      <img
                        src={avatarUrl}
                        alt="Guru Prasad R"
                        className="w-full h-full object-cover rounded-full"
                        style={{
                          objectFit: "cover",
                          objectPosition: "center 30%"
                        }}
                        onError={() => setImgError(true)}
                      />
                    ) : (
                      <span className="text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
                        GP
                      </span>
                    )}
                  </div>
                </div>
              </div>
              {/* Decorative Pulsing Circles */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-green-500 rounded-full animate-pulse delay-300"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;