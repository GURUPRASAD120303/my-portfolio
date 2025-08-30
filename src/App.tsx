import React from 'react';
import { useState } from 'react';
import IntroScreen from './components/IntroScreen';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Internships from './components/Internships';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Accomplishments from './components/Accomplishments';
import Certificates from './components/Certificates';
import Contact from './components/Contact';

function App() {
  const [showIntro, setShowIntro] = useState(true);

  const handleIntroComplete = () => {
    setShowIntro(false);
  };

  if (showIntro) {
    return <IntroScreen onComplete={handleIntroComplete} />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main>
        <section id="home">
          <Hero />
        </section>
        
        <section id="about">
          <About />
        </section>
        
        <section id="education">
          <Education />
        </section>
        
        <section id="experience">
          <Internships />
        </section>
        
        <section id="projects">
          <Projects />
        </section>
        
        <section id="skills">
          <Skills />
        </section>
        
        <section id="certificates">
          <Certificates />
        </section>
        
        <section id="accomplishments">
          <Accomplishments />
        </section>
        
        <section id="contact">
          <Contact />
        </section>
      </main>
      
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2024 Guru Prasad R. Designed with passion for AI and innovation.
          </p>
          <div className="mt-4 flex justify-center space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;