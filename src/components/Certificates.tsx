import React from 'react';
import { Award, Calendar, ExternalLink, CheckCircle } from 'lucide-react';

const Certificates = () => {
  const certificates = [
    {
      "title": "AWS Cloud Solutions Architect Professional Certificate",
      "issuer": "Amazon Web Services (via Coursera)",
      "date": "May 3, 2024",
      "description": "Completed a professional certificate program covering AWS Cloud Technical Essentials, Architecting Solutions on AWS, Introduction to Designing Data Lakes on AWS, and Exam Prep: AWS Certified Solutions Architect – Associate. The program, endorsed by Maureen Lonergan (VP, AWS Training and Certification), provided hands-on projects and real-world experience in deploying cloud infrastructure, networks, systems, and application services. Prepares learners for the AWS Certified Solutions Architect – Associate exam.",
      "image": "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=500",
      "credentialId": "8APYM28N4CQT",
      "verifyLink": "https://coursera.org/verify/professional-cert/8APYM28N4CQT",
      "skills": [
        "AWS Cloud Architecture",
        "Solutions Design",
        "Data Lakes",
        "Cloud Deployment",
        "Networking",
        "Python",
        "Machine Learning"
      ],
      "color": "blue",
      "status": "verified"
    },
    {
      "title": "Google Data Analytics Professional Certificate",
      "issuer": "Google (via Coursera)",
      "date": "Jul 27, 2023",
      "description": "Completed the Google Data Analytics Professional Certificate consisting of 8 courses: Foundations: Data, Data, Everywhere; Ask Questions to Make Data-Driven Decisions; Prepare Data for Exploration; Process Data from Dirty to Clean; Analyze Data to Answer Questions; Share Data Through the Art of Visualization; Data Analysis with R Programming; and Google Data Analytics Capstone: Complete a Case Study. Endorsed by Amanda Brophy, Global Director of Google Career Certificates. Gained hands-on, practice-based skills in spreadsheets, SQL, Tableau, and R to prepare, process, analyze, and visualize data for decision-making.",
      "image": "https://images.pexels.com/photos/669619/pexels-photo-669619.jpeg?auto=compress&cs=tinysrgb&w=500",
      "credentialId": "CKGMSZ4BTF6L",
      "verifyLink": "https://coursera.org/verify/professional-cert/CKGMSZ4BTF6L",
      "skills": [
        "Data Analytics",
        "SQL",
        "Spreadsheets",
        "Tableau",
        "R Programming",
        "Data Cleaning",
        "Data Visualization",
        "Business Intelligence"
      ],
      "color": "green",
      "status": "verified"
    },   
    {
      "title": "NoSQL, Big Data, and Spark Foundations Specialization",
      "issuer": "IBM Skills Network (via Coursera)",
      "date": "Nov 17, 2023",
      "description": "Completed a 3-course specialization covering Introduction to NoSQL Databases, Introduction to Big Data with Spark and Hadoop, and Machine Learning with Apache Spark. Endorsed by Rav Ahuja, Global Program Director at IBM Skills Network. Gained practical experience with NoSQL databases (MongoDB, IBM Cloudant, Apache Cassandra) for CRUD operations, and foundational Big Data tools including Hadoop, Hive, HDFS, MapReduce, Apache Spark, Spark SQL, Structured Streaming, Spark ML, and scaling Spark with Kubernetes. The specialization culminated in a hands-on project involving ETL processing and machine learning model deployment using Spark.",
      "image": "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=500",
      "credentialId": "JUDPJTJGRLQM",
      "verifyLink": "https://coursera.org/verify/specialization/JUDPJTJGRLQM",
      "skills": [
        "NoSQL Databases",
        "MongoDB",
        "IBM Cloudant",
        "Apache Cassandra",
        "Big Data",
        "Apache Hadoop",
        "Apache Hive",
        "Apache Spark",
        "Spark SQL",
        "Machine Learning with Spark",
        "ETL Pipelines",
        "Kubernetes"
      ],
      "color": "purple",
      "status": "verified"
    },    
    {
      "title": "IBM Data Science Professional Certificate",
      "issuer": "IBM Skills Network (via Coursera)",
      "date": "Jul 27, 2023",
      "description": "Completed a 10-course professional certificate endorsed by Rav Ahuja, AI & Data Science Program Director at IBM Skills Network. The program covered: What is Data Science?, Tools for Data Science, Data Science Methodology, Python for Data Science, AI & Development, Python Project for Data Science, Databases and SQL for Data Science with Python, Data Analysis with Python, Data Visualization with Python, Machine Learning with Python, and Applied Data Science Capstone. Gained hands-on skills in Python, SQL, data visualization, data analysis, and machine learning through labs and assignments on the cloud, culminating in a Capstone Project to demonstrate knowledge and skills.",
      "image": "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=500",
      "credentialId": "YHDYUNCRSGH3",
      "verifyLink": "https://coursera.org/verify/professional-cert/YHDYUNCRSGH3",
      "skills": [
        "Data Science",
        "Python",
        "SQL",
        "Data Analysis",
        "Data Visualization",
        "Machine Learning",
        "Data Science Methodology",
        "Cloud-based Labs",
        "Capstone Project Development"
      ],
      "color": "red",
      "status": "verified"
    },    
    {
      "title": "Python Programming Certificate",
      "issuer": "GUVI Geek Networks (Google for Education Partner, ISO 9001-27001 Certified)",
      "date": "May 3, 2022",
      "description": "Successfully completed the Python Programming course offered by GUVI Geek Networks, endorsed by M. Arunprakash (Founder and CEO, GUVI). The course covered Python fundamentals, data structures, functions, file handling, and problem-solving with real-world examples. Focused on building programming logic and practical coding experience.",
      "image": "https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=500",
      "credentialId": "5j744J165m1i37b15x",
      "verifyLink": "https://www.guvi.in/certificate?id=5j744J165m1i37b15x",
      "skills": [
        "Python Programming",
        "Problem Solving",
        "Data Structures",
        "Functions",
        "File Handling",
        "Programming Logic"
      ],
      "color": "indigo",
      "status": "verified"
    },    
    {
      "title": "Web Scraping with Python",
      "issuer": "Great Learning Academy",
      "date": "Jul 2022",
      "description": "Successfully completed the Web Scraping with Python course offered by Great Learning Academy. The course provided practical knowledge on automating data extraction from websites using Python libraries such as BeautifulSoup and Requests, handling dynamic web pages, and exporting scraped data for further analysis.",
      "image": "https://images.pexels.com/photos/574070/pexels-photo-574070.jpeg?auto=compress&cs=tinysrgb&w=500",
      "credentialId": "DMGHHEEV",
      "verifyLink": "https://verify.mygreatlearning.com/DMGHHEEV",
      "skills": [
        "Python Programming",
        "Web Scraping",
        "BeautifulSoup",
        "Requests Library",
        "Data Extraction",
        "Data Cleaning"
      ],
      "color": "orange",
      "status": "verified"
    },    
  ];

  const colorClasses = {
    blue: {
      bg: "from-blue-50 to-blue-100",
      icon: "text-blue-600",
      badge: "bg-blue-100 text-blue-800",
      button: "bg-blue-600 hover:bg-blue-700",
      border: "border-blue-200",
    },
    green: {
      bg: "from-green-50 to-green-100",
      icon: "text-green-600",
      badge: "bg-green-100 text-green-800",
      button: "bg-green-600 hover:bg-green-700",
      border: "border-green-200",
    },
    purple: {
      bg: "from-purple-50 to-purple-100",
      icon: "text-purple-600",
      badge: "bg-purple-100 text-purple-800",
      button: "bg-purple-600 hover:bg-purple-700",
      border: "border-purple-200",
    },
    orange: {
      bg: "from-orange-50 to-orange-100",
      icon: "text-orange-600",
      badge: "bg-orange-100 text-orange-800",
      button: "bg-orange-600 hover:bg-orange-700",
      border: "border-orange-200",
    },
    indigo: {
      bg: "from-indigo-50 to-indigo-100",
      icon: "text-indigo-600",
      badge: "bg-indigo-100 text-indigo-800",
      button: "bg-indigo-600 hover:bg-indigo-700",
      border: "border-indigo-200",
    },
    red: {
      bg: "from-red-50 to-red-100",
      icon: "text-red-600",
      badge: "bg-red-100 text-red-800",
      button: "bg-red-600 hover:bg-red-700",
      border: "border-red-200",
    },
  };

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">Certificates</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group border-2 ${colorClasses[cert.color].border}`}
            >
              <div className="relative h-40 overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${colorClasses[cert.color].bg} opacity-90`}></div>
                <div className="absolute top-3 left-3">
                  <Award className={`w-8 h-8 ${colorClasses[cert.color].icon}`} />
                </div>
                <div className="absolute top-3 right-3">
                  {cert.status === 'verified' && (
                    <div className="flex items-center gap-1 bg-white bg-opacity-90 rounded-full px-2 py-1">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="text-xs font-medium text-green-600">Verified</span>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    {cert.title}
                  </h3>
                  <p className={`text-sm font-semibold ${colorClasses[cert.color].icon} mb-2`}>
                    {cert.issuer}
                  </p>
                  <div className="flex items-center gap-1 text-gray-500 text-sm mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>{cert.date}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm leading-relaxed">
                  {cert.description}
                </p>
                
                <div className="flex flex-wrap gap-1">
                  {cert.skills.slice(0, 3).map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className={`px-2 py-1 rounded-full text-xs font-medium ${colorClasses[cert.color].badge}`}
                    >
                      {skill}
                    </span>
                  ))}
                  {cert.skills.length > 3 && (
                    <span className="px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-600">
                      +{cert.skills.length - 3} more
                    </span>
                  )}
                </div>
                
                <div className="pt-3 border-t border-gray-100">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-gray-500">Credential ID</p>
                      <p className="text-xs font-mono text-gray-700">{cert.credentialId}</p>
                    </div>
                    <a
                      href={cert.verifyLink}
                      className={`flex items-center gap-1 px-3 py-1.5 ${colorClasses[cert.color].button} text-white rounded-lg transition-colors text-xs font-medium`}
                    >
                      <ExternalLink className="w-3 h-3" />
                      Verify
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            All certificates are verified and can be validated through the respective issuing organizations.
          </p>
          <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-lg hover:from-blue-700 hover:to-green-700 transition-all duration-300 hover:shadow-lg">
            View All Certificates
          </button>
        </div>
      </div>
    </section>
  );
};

export default Certificates;