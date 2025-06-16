import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ProjectsPage from './components/ProjectsPage';
import Certificates from './components/Certificates';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    
    // Smooth scroll to section for home page navigation
    if (page !== 'projects-page') {
      setTimeout(() => {
        if (page === 'home') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          const element = document.getElementById(page);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }, 100);
    }
  };

  const handleViewAllProjects = () => {
    setCurrentPage('projects-page');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Show dedicated projects page
  if (currentPage === 'projects-page') {
    return (
      <div className="min-h-screen bg-slate-900">
        <Navbar currentPage={currentPage} onNavigate={handleNavigate} />
        <div className="pt-16">
          <ProjectsPage onNavigate={handleNavigate} />
        </div>
      </div>
    );
  }

  // Show main portfolio page
  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />
      
      {/* Hero Section */}
      <div id="home">
        <Hero onViewProjects={handleViewAllProjects} />
      </div>
      
      {/* About Section */}
      <div id="about">
        <About />
      </div>
      
      {/* Skills Section */}
      <div id="skills">
        <Skills />
      </div>
      
      {/* Projects Section */}
      <div id="projects">
        <Projects onViewAllProjects={handleViewAllProjects} />
      </div>
      
      {/* Certificates Section */}
      <div id="certificates">
        <Certificates />
      </div>
      
      {/* Resume Section */}
      <div id="resume">
        <Resume />
      </div>
      
      {/* Contact Section */}
      <div id="contact">
        <Contact />
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;