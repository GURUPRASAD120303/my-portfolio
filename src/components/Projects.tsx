import React from 'react';
import { ExternalLink, Github, BarChart3, Globe, Cpu, Armchair as Wheelchair } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Community Help Portal",
      description: "A comprehensive web-based platform designed to connect users with local community resources and support services. Features user authentication, resource mapping, and community engagement tools.",
      icon: <Globe className="w-8 h-8" />,
      image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=500",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      liveLink: "https://helpconnect.netlify.app/",
      githubLink: "#",
      color: "blue",
    },
    {
      title: "Sales Dashboard",
      description: "Interactive Power BI dashboard providing real-time sales tracking, analytics, and business insights. Features dynamic visualizations, KPI monitoring, and automated reporting capabilities.",
      icon: <BarChart3 className="w-8 h-8" />,
      image: "https://cdn.prod.website-files.com/619c916dd7a3fa284adc0b27/65faca718dfb02a59238976b_750d7b5a-b72d-4bd1-aec5-97b8df0e9eba.webp",
      technologies: ["Power BI", "SQL", "DAX", "Excel"],
      liveLink: "https://www.linkedin.com/posts/guru-prasad-r-2a504731a_powerbi-datavisualization-dataanalytics-activity-7219604595663065088-Qkv3?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFDO1N0BgpL4s2Mbb2FHrYul2S7DRVbxUgs",
      githubLink: "#",  
      color: "green",
    },
    {
      title: "Handwritten Digit Classifier",
      description: "Advanced CNN model built using TensorFlow/Keras for handwritten digit recognition. Achieved 98% accuracy on the MNIST dataset with optimized architecture and preprocessing techniques.",
      icon: <Cpu className="w-8 h-8" />,
      image: "https://1.bp.blogspot.com/-fGR7t6RnXZs/Uv5kdmT89_I/AAAAAAAAAjg/zZHfaCqnkak/s1600/freeDrawExport_012314055352.png",
      technologies: ["Python", "TensorFlow", "Keras", "OpenCV"],
      liveLink: "https://github.com/GURUPRASAD120303/Handwritten-Number-Detection/blob/main/Handwritten_Number_Detection.ipynb",
      githubLink: "#",
      color: "purple",
    },
    {
      title: "Data Cleaning",
      description: "A comprehensive data cleaning and preprocessing workflow implemented in Python using Pandas and NumPy. This project demonstrates techniques for handling missing values, outlier detection, data transformation, and feature engineering.",
      icon: <Cpu className="w-8 h-8" />,
      image: "https://cdn.technologyadvice.com/wp-content/uploads/2022/06/Data-Cleaning-scaled.jpeg",
      technologies: ["Python", "Pandas", "NumPy", "Data Cleaning"],
      liveLink: "https://github.com/GURUPRASAD120303/Data-cleaning/blob/main/Data_cleaning.ipynb",
      githubLink: "#",
      color: "orange",
    },
    {
      title: "Data Visualization",
      description: "This project demonstrates comprehensive data visualization techniques using Python's powerful libraries. The notebook showcases how to transform raw data into meaningful visual insights through various plotting methods and interactive visualizations.",
      icon: <Cpu className="w-8 h-8" />,
      image: "https://images.ctfassets.net/1wryd5vd9xez/642vY3WZoy64ilAAcPXeLU/f6ae8388ea3bfa0c87e28a0de0c6d209/https___cdn-images-1.medium.com_max_4056_1_Tb3tRaD1r358C3N4zUXR-w.png",
      technologies: ["Python", "Matplotlib", "Seaborn", "Jupyter Notebook"],
      liveLink: "https://github.com/GURUPRASAD120303/DEV/blob/main/data%20visualization.ipynb",
      githubLink: "#",
      color: "green",
    },
    {
      title: "Automated Wheelchair-Cum-Bed",
      description: "Innovative mechanical design for enhanced patient mobility and comfort. Features automated transformation between wheelchair and bed configurations with safety mechanisms.",
      icon: <Wheelchair className="w-8 h-8" />,
      image: "https://tse4.mm.bing.net/th/id/OIP.PZyD0gqQZ-9eu2hMVBI06gHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
      technologies: ["CAD Design", "Mechanical Engineering", "Automation", "Healthcare Tech"],
      liveLink: "#",
      githubLink: "#",
      color: "orange",
    },
  ];

  const colorClasses = {
    blue: {
      bg: "from-blue-50 to-blue-100",
      icon: "text-blue-600",
      button: "bg-blue-600 hover:bg-blue-700",
      tag: "bg-blue-100 text-blue-800",
    },
    green: {
      bg: "from-green-50 to-green-100",
      icon: "text-green-600",
      button: "bg-green-600 hover:bg-green-700",
      tag: "bg-green-100 text-green-800",
    },
    purple: {
      bg: "from-purple-50 to-purple-100",
      icon: "text-purple-600",
      button: "bg-purple-600 hover:bg-purple-700",
      tag: "bg-purple-100 text-purple-800",
    },
    orange: {
      bg: "from-orange-50 to-orange-100",
      icon: "text-orange-600",
      button: "bg-orange-600 hover:bg-orange-700",
      tag: "bg-orange-100 text-orange-800",
    },
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">Projects</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${colorClasses[project.color].bg} opacity-90`}></div>
                <div className="absolute top-4 left-4">
                  <div className={`${colorClasses[project.color].icon}`}>
                    {project.icon}
                  </div>
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-gray-900">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-3 py-1 rounded-full text-sm font-medium ${colorClasses[project.color].tag}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3 pt-4">
                  <a
                    href={project.liveLink}
                    className={`flex items-center gap-2 px-4 py-2 ${colorClasses[project.color].button} text-white rounded-lg transition-colors text-sm font-medium`}
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;