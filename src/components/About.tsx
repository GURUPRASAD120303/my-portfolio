import React from 'react';
import { Brain, Lightbulb, Users, MessageCircle } from 'lucide-react';

const About = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
          About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">Me</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="prose prose-lg text-gray-700">
              <p className="leading-relaxed">
                My journey into AI and Data Science began with a unique foundation in Mechanical Engineering. 
                This diverse background has given me a distinctive perspective on problem-solving and innovation.
              </p>
              <p className="leading-relaxed">
                Transitioning from mechanical systems to intelligent algorithms has been both challenging and 
                rewarding. This experience has honed my adaptability and reinforced my belief that curiosity 
                and continuous learning are the keys to success in any field.
              </p>
              <p className="leading-relaxed">
                I'm passionate about bridging the gap between theoretical concepts and practical applications, 
                always seeking to create solutions that make a real difference in people's lives.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
              <Brain className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Adaptability</h3>
              <p className="text-sm text-gray-600">
                Successfully transitioned from mechanical engineering to AI/ML with continuous learning mindset.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl">
              <Lightbulb className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Innovation</h3>
              <p className="text-sm text-gray-600">
                Bringing creative solutions to complex problems through analytical thinking and curiosity.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl">
              <Users className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Collaboration</h3>
              <p className="text-sm text-gray-600">
                Excellent team player with experience working across different domains and diverse teams.
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl">
              <MessageCircle className="w-12 h-12 text-orange-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Communication</h3>
              <p className="text-sm text-gray-600">
                Strong ability to explain complex technical concepts in simple, understandable terms.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;