import React from 'react';
import { ChevronDown, Code, Shield, Smartphone } from 'lucide-react';

interface HeroProps {
  onViewProjects: () => void;
}

const Hero: React.FC<HeroProps> = ({ onViewProjects }) => {
  const handleGetInTouch = () => {
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent animate-pulse"></div>
        <div className="grid grid-cols-12 gap-1 h-full">
          {Array.from({ length: 144 }).map((_, i) => (
            <div
              key={i}
              className="border border-cyan-500/20 animate-pulse"
              style={{
                animationDelay: `${i * 0.1}s`,
                animationDuration: '3s'
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        {/* Profile Image Placeholder */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 p-1 animate-pulse">
              <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-slate-700 to-slate-600 flex items-center justify-center">
                  <span className="text-2xl md:text-3xl font-bold text-cyan-400">RZ</span>
                </div>
              </div>
            </div>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full animate-ping"></div>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full"></div>
          </div>
        </div>

        {/* Name and Title */}
        <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
          Ruta Zelalem
        </h1>
        
        {/* Professional Titles */}
        <div className="space-y-4 mb-8">
          <div className="flex flex-wrap justify-center gap-4 text-lg md:text-xl">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 backdrop-blur-sm border border-cyan-500/30 hover:border-cyan-500/60 transition-all duration-300 hover:scale-105">
              <Smartphone className="w-5 h-5 text-cyan-400" />
              <span className="text-cyan-300">Flutter Developer</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 backdrop-blur-sm border border-purple-500/30 hover:border-purple-500/60 transition-all duration-300 hover:scale-105">
              <Code className="w-5 h-5 text-purple-400" />
              <span className="text-purple-300">Website Developer</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 backdrop-blur-sm border border-green-500/30 hover:border-green-500/60 transition-all duration-300 hover:scale-105">
              <Shield className="w-5 h-5 text-green-400" />
              <span className="text-green-300">Lead Security Auditor</span>
            </div>
          </div>
        </div>

        {/* Tagline */}
        <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          Crafting secure, scalable solutions across mobile, web, and enterprise platforms with cutting-edge technology and meticulous security practices.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button 
            onClick={onViewProjects}
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-white font-semibold hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
          >
            View My Projects
          </button>
          <button 
            onClick={handleGetInTouch}
            className="px-8 py-4 border-2 border-cyan-500 rounded-full text-cyan-400 font-semibold hover:bg-cyan-500 hover:text-slate-900 transition-all duration-300 hover:scale-105"
          >
            Get In Touch
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="animate-bounce">
          <ChevronDown className="w-8 h-8 text-cyan-400 mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default Hero