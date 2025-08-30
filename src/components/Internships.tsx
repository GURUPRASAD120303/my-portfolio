import React from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

const Internships = () => {
  const internships = [
    {
      "title": "Data Scientist Training Intern",
      "company": "Devtown Edtech Pvt Ltd",
      "period": "Jan 2024 – Mar 2024",
      "location": "Remote",
      "description": [
        "Performed data cleaning, transformation, and statistical analysis using Python and SQL.",
        "Designed and developed interactive Power BI dashboards to visualize key business metrics.",
        "Worked on end-to-end data workflows, improving insights for decision-making."
      ],
      "skills": ["Python", "SQL", "Power BI", "Data Visualization", "Statistical Analysis"],
      "verifyLink": "assets/6sLBoXcgy.pdf",
      "color": "blue",
      "logo": "https://media.licdn.com/dms/image/v2/C4E0BAQEBQ0ItUQd9GA/company-logo_200_200/company-logo_200_200/0/1662036891199/devtown_in_logo?e=2147483647&v=beta&t=Hf-n88vMkzoJomBFugU4iUTFhH9ZNGu0Z1pZdv7dWPY"
    },    
    {
      "title": "Front-End Developer Intern",
      "company": "Suven Consultants & Technology Pvt Ltd",
      "period": "Jul 2023 – Aug 2023",
      "location": "Remote",
      "description": [
        "Built responsive web applications using HTML, CSS, and JavaScript.",
        "Implemented interactive UI components and ensured cross-browser compatibility.",
        "Integrated AI-based features into web solutions, improving functionality and user engagement."
      ],
      "skills": ["HTML", "CSS", "JavaScript", "Responsive Design", "UI/UX Development"],
      "verifyLink": "assets/Internship-certificate.png",
      "credentialId": "FEHLMKPX",
      "color": "orange",
      "logo": "https://internship.suvenconsultants.com/images/sctpl_logo.png"
    },    
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">Internships</span>
        </h2>
        
        <div className="space-y-8">
          {internships.map((internship, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative"
            >
              <div className="flex flex-col lg:flex-row gap-6">
                {/* ✅ Company Logo */}
                <div className="flex-shrink-0 w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden">
                  <img 
                    src={internship.logo} 
                    alt={`${internship.company} logo`} 
                    className="w-full h-full object-contain p-2"
                  />
                </div>
                
                <div className="flex-1 space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {internship.title}
                    </h3>
                    <p className={`text-xl font-semibold ${
                      internship.color === 'blue' ? 'text-blue-600' : 'text-green-600'
                    } mb-2`}>
                      {internship.company}
                    </p>
                    <div className="flex flex-wrap gap-4 text-gray-600 mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{internship.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{internship.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* ✅ Description */}
                  <div className="text-gray-700 leading-relaxed space-y-2">
                    <ul className="list-disc list-inside">
                      {internship.description.map((point, idx) => (
                        <li key={idx}>{point}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {internship.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          internship.color === 'blue'
                            ? 'bg-blue-100 text-blue-800'
                            : 'bg-green-100 text-green-800'
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* ✅ Verify Box (Bottom Right) */}
              {internship.verifyLink && (
                <div className="absolute bottom-4 right-4 md:static md:flex md:justify-end mt-4">
                  <a
                    href={internship.verifyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-semibold shadow-md transition-colors ${
                      internship.color === 'blue'
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'bg-green-600 text-white hover:bg-green-700'
                    }`}
                  >
                    <ExternalLink className="w-4 h-4" />
                    Verify Certificate
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Internships;
