import React, { useEffect, useState, useRef } from 'react';
import { Code, Database, BarChart, Cloud, Monitor } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-6 h-6" />,
      skills: [
        { name: "Python", level: 85, color: "blue" },
        { name: "SQL", level: 80, color: "green" },
        { name: "HTML", level: 90, color: "orange" },
        { name: "CSS", level: 80, color: "red" },
        { name: "Java", level: 75, color: "yellow" },
        { name: "JavaScript", level: 70, color: "purple" },
      ],
    },
    {
      title: "Data Science & Analytics",
      icon: <BarChart className="w-6 h-6" />,
      skills: [
        { name: "NumPy", level: 85, color: "purple" },
        { name: "Pandas", level: 88, color: "blue" },
        { name: "TensorFlow", level: 85, color: "red" },
        { name: "Matplotlib", level: 80, color: "green" },
        { name: "Power BI", level: 85, color: "yellow" },
        { name: "Tableau", level: 75, color: "orange" },
      ],
    },
    {
      title: "Development Tools",
      icon: <Monitor className="w-6 h-6" />,
      skills: [
        { name: "VS Code", level: 90, color: "blue" },
        { name: "Jupyter Notebook", level: 85, color: "orange" },
        { name: "Google Colab", level: 88, color: "yellow" },
        { name: "Git", level: 78, color: "red" },
      ],
    },
    {
      title: "Cloud Platforms",
      icon: <Cloud className="w-6 h-6" />,
      skills: [
        { name: "AWS", level: 80, color: "orange" },
        { name: "Cloud Computing Fundamentals", level: 90, color: "blue" },
        { name: "Microsoft Azure", level: 85, color: "green" },
        { name: "Google Cloud Platform", level: 75, color: "purple" },
      ],
    },
  ];

  const colorClasses = {
    blue: "bg-blue-500",
    green: "bg-green-500",
    purple: "bg-purple-500",
    orange: "bg-orange-500",
    yellow: "bg-yellow-500",
    red: "bg-red-500",
  };

  // ✅ State to animate skill widths
  const [animatedLevels, setAnimatedLevels] = useState(
    skillCategories.map(cat => cat.skills.map(() => 0))
  );

  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate to actual skill levels
            setAnimatedLevels(
              skillCategories.map(cat => cat.skills.map(skill => skill.level))
            );
          } else {
            // Reset when leaving viewport
            setAnimatedLevels(
              skillCategories.map(cat => cat.skills.map(() => 0))
            );
          }
        });
      },
      { threshold: 0.3 } // triggers when 30% of section is visible
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  return (
    <section className="py-20 px-4 bg-white" ref={skillsRef}>
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
            Skills
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="text-blue-600">{category.icon}</div>
                <h3 className="text-xl font-bold text-gray-900">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-gray-500 text-sm">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                      <div
                        className={`h-2 rounded-full ${colorClasses[skill.color]} transition-all duration-1000 ease-out`}
                        style={{
                          width: `${animatedLevels[index][skillIndex]}%`,
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
  