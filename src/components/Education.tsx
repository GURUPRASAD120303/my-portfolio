import React from 'react';
import { Award } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "B.Tech in AI & Data Science",
      institution: "KGISL Institute of Technology",
      cgpa: "7.8",
      period: "2021 - 2025",
      color: "blue",
      logo: "https://cse-symposium.vercel.app/static/media/KiTE%20Logo%20copy.6848ff95feea66867a7b.png" // example logo
    },
    {
      degree: "Diploma in Mechanical Engineering",
      institution: "Sri Krishna Polytechnic College",
      cgpa: "8.9",
      period: "2018 - 2021",
      color: "green",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/aa/SKI-Coimbatore-Logo.webp" // example logo
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">Education</span>
        </h2>
        
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                {/* ✅ College Logo instead of generic icon */}
                <div className="flex-shrink-0 w-16 h-16 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
                  <img 
                    src={edu.logo} 
                    alt={`${edu.institution} logo`} 
                    className="w-full h-full object-contain p-2"
                  />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {edu.degree}
                  </h3>
                  <p className="text-lg text-gray-600 mb-2">{edu.institution}</p>
                  <p className="text-gray-500">{edu.period}</p>
                </div>
                
                <div className="flex items-center gap-2">
                  <Award className={`w-6 h-6 ${
                    edu.color === 'blue' ? 'text-blue-600' : 'text-green-600'
                  }`} />
                  <div className="text-right">
                    <p className="text-sm text-gray-500">CGPA</p>
                    <p className={`text-2xl font-bold ${
                      edu.color === 'blue' ? 'text-blue-600' : 'text-green-600'
                    }`}>
                      {edu.cgpa}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
