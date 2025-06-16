import React from 'react';
import { ExternalLink, Github, Smartphone, Globe, Shield, ArrowRight } from 'lucide-react';

interface ProjectsProps {
  onViewAllProjects: () => void;
}

const Projects: React.FC<ProjectsProps> = ({ onViewAllProjects }) => {
  const projects = [
    {
      title: "SecureChat Mobile App",
      category: "Flutter Development",
      description: "End-to-end encrypted messaging app built with Flutter and Firebase, featuring biometric authentication and self-destructing messages.",
      technologies: ["Flutter", "Firebase", "Encryption", "Biometrics"],
      image: "mobile",
      color: "cyan",
      icon: Smartphone,
      features: ["Real-time messaging", "End-to-end encryption", "Biometric security", "Cross-platform"]
    },
    {
      title: "Enterprise Security Dashboard",
      category: "Web Development",
      description: "Real-time security monitoring dashboard for enterprise networks with threat detection and automated response systems.",
      technologies: ["React", "Node.js", "MongoDB", "WebSocket"],
      image: "dashboard",
      color: "purple",
      icon: Globe,
      features: ["Real-time monitoring", "Threat detection", "Automated alerts", "Custom reports"]
    },
    {
      title: "Vulnerability Assessment Platform",
      category: "Security Auditing",
      description: "Comprehensive security audit platform that automates vulnerability scanning and generates detailed compliance reports.",
      technologies: ["Python", "PostgreSQL", "Docker", "OWASP"],
      image: "security",
      color: "green",
      icon: Shield,
      features: ["Automated scanning", "Compliance reports", "Risk assessment", "Remediation guides"]
    },
    {
      title: "FinTech Mobile Wallet",
      category: "Flutter Development",
      description: "Secure mobile wallet application with multi-factor authentication, transaction monitoring, and fraud detection.",
      technologies: ["Flutter", "Blockchain", "ML", "Security"],
      image: "fintech",
      color: "blue",
      icon: Smartphone,
      features: ["Digital payments", "Fraud detection", "Blockchain integration", "ML algorithms"]
    },
    {
      title: "Cloud Infrastructure Monitor",
      category: "Web Development",
      description: "Cloud-native monitoring solution for infrastructure health, performance metrics, and automated scaling.",
      technologies: ["Next.js", "AWS", "Kubernetes", "Grafana"],
      image: "cloud",
      color: "indigo",
      icon: Globe,
      features: ["Infrastructure monitoring", "Auto-scaling", "Performance metrics", "Cloud-native"]
    },
    {
      title: "Penetration Testing Suite",
      category: "Security Auditing",
      description: "Automated penetration testing framework with custom exploits, reporting, and remediation recommendations.",
      technologies: ["Python", "Kali Linux", "Metasploit", "Nmap"],
      image: "pentest",
      color: "red",
      icon: Shield,
      features: ["Automated testing", "Custom exploits", "Detailed reports", "Risk prioritization"]
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      cyan: {
        gradient: "from-cyan-500/20 to-cyan-600/20",
        border: "border-cyan-500/30",
        text: "text-cyan-400",
        hover: "hover:border-cyan-500/60"
      },
      purple: {
        gradient: "from-purple-500/20 to-purple-600/20",
        border: "border-purple-500/30",
        text: "text-purple-400",
        hover: "hover:border-purple-500/60"
      },
      green: {
        gradient: "from-green-500/20 to-green-600/20",
        border: "border-green-500/30",
        text: "text-green-400",
        hover: "hover:border-green-500/60"
      },
      blue: {
        gradient: "from-blue-500/20 to-blue-600/20",
        border: "border-blue-500/30",
        text: "text-blue-400",
        hover: "hover:border-blue-500/60"
      },
      indigo: {
        gradient: "from-indigo-500/20 to-indigo-600/20",
        border: "border-indigo-500/30",
        text: "text-indigo-400",
        hover: "hover:border-indigo-500/60"
      },
      red: {
        gradient: "from-red-500/20 to-red-600/20",
        border: "border-red-500/30",
        text: "text-red-400",
        hover: "hover:border-red-500/60"
      }
    };
    return colorMap[color as keyof typeof colorMap];
  };

  return (
    <section className="py-20 px-6 bg-slate-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-purple-500/5 to-green-500/5 animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-green-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Showcasing innovative solutions across mobile development, web applications, and cybersecurity
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-green-500 mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const colors = getColorClasses(project.color);
            const Icon = project.icon;
            
            return (
              <div
                key={index}
                className={`group relative p-6 rounded-2xl bg-slate-800/50 backdrop-blur-sm border ${colors.border} ${colors.hover} transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl overflow-hidden`}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`p-3 rounded-xl bg-slate-700/50 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className={`w-6 h-6 ${colors.text}`} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-white transition-colors duration-300">
                          {project.title}
                        </h3>
                        <span className={`text-sm ${colors.text} font-medium`}>
                          {project.category}
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button className="p-2 rounded-lg bg-slate-700/50 hover:bg-slate-600/50 transition-colors duration-200">
                        <Github className="w-4 h-4 text-slate-300" />
                      </button>
                      <button className="p-2 rounded-lg bg-slate-700/50 hover:bg-slate-600/50 transition-colors duration-200">
                        <ExternalLink className="w-4 h-4 text-slate-300" />
                      </button>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-slate-400 mb-3">Key Features</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {project.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2 text-sm text-slate-300">
                          <div className={`w-1.5 h-1.5 rounded-full ${colors.text.replace('text-', 'bg-')}`}></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 text-xs font-medium rounded-full bg-slate-700/60 text-slate-300 border border-slate-600/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* View Project Button */}
                  <button className={`flex items-center gap-2 ${colors.text} font-medium text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0`}>
                    View Project Details
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-12">
          <button 
            onClick={onViewAllProjects}
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-white font-semibold hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
          >
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;