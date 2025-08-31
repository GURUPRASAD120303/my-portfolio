import React, { useEffect, useState, useRef } from "react";
import { Trophy, FileText, ExternalLink } from "lucide-react";


const Accomplishments = () => {
  const accomplishments = [
    {
      title: "Finalist – Hactrix 1.0",
      description:
        "Achieved finalist status in the National Hackathon 2023, competing among thousands of participants nationwide. Demonstrated innovative problem-solving and technical excellence.",
      year: "2023",
      type: "Competition",
      icon: <Trophy className="w-8 h-8" />,
      color: "blue",
      link: "assets/Hackathon.jpg", // ✅ Add link here
    },
    {
      title: "Research Paper Publication",
      description:
        "Published research paper on 'Recycling of Plaster Paris Dolls' in PIERS-2022 (Progress in Electromagnetics Research Symposium), contributing to sustainable material research.",
      year: "2022",
      type: "Research",
      icon: <FileText className="w-8 h-8" />,
      color: "green",
      link: "assets/research-paper.jpg", // ✅ Add link here
    },
  ];

  const languages = [
    { language: "Tamil", level: "Native", proficiency: 100, color: "orange" },
    { language: "English", level: "Fluent", proficiency: 90, color: "blue" },
  ];

  const colorClasses = {
    blue: {
      bg: "from-blue-400 to-blue-600",
      light: "from-blue-50 to-blue-100",
      text: "text-blue-600",
      progress: "bg-blue-500",
    },
    green: {
      bg: "from-green-400 to-green-600",
      light: "from-green-50 to-green-100",
      text: "text-green-600",
      progress: "bg-green-500",
    },
    orange: {
      bg: "from-orange-400 to-orange-600",
      light: "from-orange-50 to-orange-100",
      text: "text-orange-600",
      progress: "bg-orange-500",
    },
  };

  // ✅ Ref + IntersectionObserver for Languages animation
  const langRef = useRef(null);
  const [animatedWidths, setAnimatedWidths] = useState(languages.map(() => 0));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimatedWidths(languages.map((lang) => lang.proficiency));
          } else {
            setAnimatedWidths(languages.map(() => 0));
          }
        });
      },
      { threshold: 0.3 }
    );

    if (langRef.current) observer.observe(langRef.current);

    return () => {
      if (langRef.current) observer.unobserve(langRef.current);
    };
  }, []);

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Accomplishments */}
          <div className="lg:col-span-2">
            <h2 className="text-4xl font-bold mb-12 text-gray-900">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
                Accomplishments
              </span>
            </h2>

            <div className="space-y-8">
              {accomplishments.map((accomplishment, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative"
                >
                  <div className="flex gap-6">
                    <div
                      className={`flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br ${colorClasses[accomplishment.color].bg} flex items-center justify-center text-white`}
                    >
                      {accomplishment.icon}
                    </div>

                    <div className="flex-1 space-y-3">
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-xl font-bold text-gray-900">
                          {accomplishment.title}
                        </h3>
                        <span
                          className={`px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${colorClasses[accomplishment.color].light} ${colorClasses[accomplishment.color].text}`}
                        >
                          {accomplishment.type}
                        </span>
                        <span className="text-gray-500 text-sm">
                          {accomplishment.year}
                        </span>
                      </div>

                      <p className="text-gray-600 leading-relaxed">
                        {accomplishment.description}
                      </p>
                    </div>
                  </div>

                  {/* ✅ View Button Bottom Right */}
                  {accomplishment.link && (
                    <div className="mt-4 flex justify-start md:absolute md:bottom-4 md:right-4">
                      <a
                        href={accomplishment.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold shadow-md transition-colors ${
                          accomplishment.color === "blue"
                            ? "bg-blue-600 text-white hover:bg-blue-700"
                            : "bg-green-600 text-white hover:bg-green-700"
                        }`}
                      >
                        <ExternalLink className="w-4 h-4" />
                        View
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div ref={langRef}>
            <h2 className="text-4xl font-bold mb-12 text-gray-900">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
                Languages
              </span>
            </h2>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="space-y-6">
                {languages.map((lang, index) => (
                  <div key={index} className="space-y-3">
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {lang.language}
                      </h3>
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${colorClasses[lang.color].light} ${colorClasses[lang.color].text}`}
                      >
                        {lang.level}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div
                        className={`h-3 rounded-full ${colorClasses[lang.color].progress} transition-all duration-1000 ease-out`}
                        style={{ width: `${animatedWidths[index]}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Accomplishments;
