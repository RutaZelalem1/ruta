import React, { useState } from 'react';
import { ExternalLink, Github, Smartphone, Globe, Shield, ArrowLeft, Filter, Search, Calendar, Star } from 'lucide-react';

interface ProjectsPageProps {
  onNavigate: (page: string) => void;
}

const ProjectsPage: React.FC<ProjectsPageProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const projects = [
    {
      title: "SecureChat Mobile App",
      category: "mobile",
      description: "End-to-end encrypted messaging app built with Flutter and Firebase, featuring biometric authentication and self-destructing messages.",
      longDescription: "A comprehensive secure messaging application that prioritizes user privacy and data protection. Features include real-time messaging with end-to-end encryption, biometric authentication for enhanced security, self-destructing messages, group chats, file sharing with encryption, and cross-platform compatibility.",
      technologies: ["Flutter", "Firebase", "Encryption", "Biometrics", "WebRTC", "SQLite"],
      image: "https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=800",
      color: "cyan",
      icon: Smartphone,
      features: ["Real-time messaging", "End-to-end encryption", "Biometric security", "Cross-platform", "Group chats", "File sharing"],
      status: "completed",
      date: "2023",
      rating: 4.9,
      github: "https://github.com/rutazelalem/securechat",
      demo: "https://securechat-demo.com"
    },
    {
      title: "Enterprise Security Dashboard",
      category: "web",
      description: "Real-time security monitoring dashboard for enterprise networks with threat detection and automated response systems.",
      longDescription: "A comprehensive security monitoring solution designed for enterprise environments. The dashboard provides real-time visibility into network security, automated threat detection using machine learning algorithms, incident response automation, and detailed compliance reporting.",
      technologies: ["React", "Node.js", "MongoDB", "WebSocket", "D3.js", "Docker"],
      image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800",
      color: "purple",
      icon: Globe,
      features: ["Real-time monitoring", "Threat detection", "Automated alerts", "Custom reports", "ML algorithms", "API integration"],
      status: "completed",
      date: "2023",
      rating: 4.8,
      github: "https://github.com/rutazelalem/security-dashboard",
      demo: "https://security-dashboard-demo.com"
    },
    {
      title: "Vulnerability Assessment Platform",
      category: "security",
      description: "Comprehensive security audit platform that automates vulnerability scanning and generates detailed compliance reports.",
      longDescription: "An advanced vulnerability assessment platform that automates the entire security audit process. Features include automated vulnerability scanning, compliance reporting for various standards (SOC 2, ISO 27001, PCI DSS), risk assessment and prioritization, and detailed remediation guides.",
      technologies: ["Python", "PostgreSQL", "Docker", "OWASP", "Nmap", "OpenVAS"],
      image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800",
      color: "green",
      icon: Shield,
      features: ["Automated scanning", "Compliance reports", "Risk assessment", "Remediation guides", "Multi-standard support", "API integration"],
      status: "completed",
      date: "2022",
      rating: 4.7,
      github: "https://github.com/rutazelalem/vuln-assessment",
      demo: "https://vuln-assessment-demo.com"
    },
    {
      title: "FinTech Mobile Wallet",
      category: "mobile",
      description: "Secure mobile wallet application with multi-factor authentication, transaction monitoring, and fraud detection.",
      longDescription: "A cutting-edge mobile wallet application designed for the financial technology sector. Incorporates advanced security measures including multi-factor authentication, real-time transaction monitoring, AI-powered fraud detection, blockchain integration for transparency, and seamless payment processing.",
      technologies: ["Flutter", "Blockchain", "ML", "Security", "Firebase", "Stripe"],
      image: "https://images.pexels.com/photos/1602726/pexels-photo-1602726.jpeg?auto=compress&cs=tinysrgb&w=800",
      color: "blue",
      icon: Smartphone,
      features: ["Digital payments", "Fraud detection", "Blockchain integration", "ML algorithms", "Multi-factor auth", "Real-time monitoring"],
      status: "completed",
      date: "2023",
      rating: 4.9,
      github: "https://github.com/rutazelalem/fintech-wallet",
      demo: "https://fintech-wallet-demo.com"
    },
    {
      title: "Cloud Infrastructure Monitor",
      category: "web",
      description: "Cloud-native monitoring solution for infrastructure health, performance metrics, and automated scaling.",
      longDescription: "A comprehensive cloud infrastructure monitoring solution that provides real-time insights into system health and performance. Features include automated scaling based on metrics, performance optimization recommendations, cost analysis, and multi-cloud support.",
      technologies: ["Next.js", "AWS", "Kubernetes", "Grafana", "Prometheus", "Terraform"],
      image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800",
      color: "indigo",
      icon: Globe,
      features: ["Infrastructure monitoring", "Auto-scaling", "Performance metrics", "Cloud-native", "Cost optimization", "Multi-cloud support"],
      status: "completed",
      date: "2022",
      rating: 4.6,
      github: "https://github.com/rutazelalem/cloud-monitor",
      demo: "https://cloud-monitor-demo.com"
    },
    {
      title: "Penetration Testing Suite",
      category: "security",
      description: "Automated penetration testing framework with custom exploits, reporting, and remediation recommendations.",
      longDescription: "A comprehensive penetration testing framework that automates the entire security assessment process. Includes custom exploit development, automated vulnerability discovery, detailed reporting with risk prioritization, and actionable remediation recommendations.",
      technologies: ["Python", "Kali Linux", "Metasploit", "Nmap", "Burp Suite", "Docker"],
      image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800",
      color: "red",
      icon: Shield,
      features: ["Automated testing", "Custom exploits", "Detailed reports", "Risk prioritization", "Remediation guides", "Multi-target support"],
      status: "completed",
      date: "2022",
      rating: 4.8,
      github: "https://github.com/rutazelalem/pentest-suite",
      demo: "https://pentest-suite-demo.com"
    },
    {
      title: "AI-Powered Code Review Tool",
      category: "web",
      description: "Machine learning-based code review platform that automatically detects security vulnerabilities and code quality issues.",
      longDescription: "An innovative code review platform powered by artificial intelligence and machine learning. Automatically analyzes code for security vulnerabilities, performance issues, and adherence to best practices. Provides detailed feedback and suggestions for improvement.",
      technologies: ["React", "Python", "TensorFlow", "Node.js", "MongoDB", "Docker"],
      image: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800",
      color: "purple",
      icon: Globe,
      features: ["AI-powered analysis", "Security scanning", "Code quality metrics", "Automated suggestions", "Integration support", "Custom rules"],
      status: "in-progress",
      date: "2024",
      rating: 4.5,
      github: "https://github.com/rutazelalem/ai-code-review",
      demo: "https://ai-code-review-demo.com"
    },
    {
      title: "Blockchain Security Auditor",
      category: "security",
      description: "Specialized tool for auditing smart contracts and blockchain applications for security vulnerabilities.",
      longDescription: "A specialized security auditing tool designed specifically for blockchain applications and smart contracts. Performs comprehensive security analysis, identifies common vulnerabilities, and provides detailed reports with remediation strategies.",
      technologies: ["Solidity", "Python", "Web3", "Ethereum", "Security", "Docker"],
      image: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800",
      color: "orange",
      icon: Shield,
      features: ["Smart contract analysis", "Vulnerability detection", "Gas optimization", "Security reports", "Multi-blockchain support", "Automated testing"],
      status: "in-progress",
      date: "2024",
      rating: 4.4,
      github: "https://github.com/rutazelalem/blockchain-auditor",
      demo: "https://blockchain-auditor-demo.com"
    },
    {
      title: "IoT Security Framework",
      category: "security",
      description: "Comprehensive security framework for Internet of Things devices with threat detection and device management.",
      longDescription: "A robust security framework designed specifically for IoT ecosystems. Provides device authentication, encrypted communication, threat detection, and centralized device management with real-time monitoring capabilities.",
      technologies: ["C++", "Python", "MQTT", "TLS", "Raspberry Pi", "Docker"],
      image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800",
      color: "green",
      icon: Shield,
      features: ["Device authentication", "Encrypted communication", "Threat detection", "Device management", "Real-time monitoring", "Scalable architecture"],
      status: "completed",
      date: "2023",
      rating: 4.7,
      github: "https://github.com/rutazelalem/iot-security",
      demo: "https://iot-security-demo.com"
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects', count: projects.length },
    { id: 'mobile', label: 'Mobile Apps', count: projects.filter(p => p.category === 'mobile').length },
    { id: 'web', label: 'Web Applications', count: projects.filter(p => p.category === 'web').length },
    { id: 'security', label: 'Security Tools', count: projects.filter(p => p.category === 'security').length }
  ];

  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const getColorClasses = (color: string) => {
    const colorMap = {
      cyan: { border: "border-cyan-500/30", hoverBorder: "hover:border-cyan-500/60", text: "text-cyan-400", shadow: "hover:shadow-cyan-500/25" },
      purple: { border: "border-purple-500/30", hoverBorder: "hover:border-purple-500/60", text: "text-purple-400", shadow: "hover:shadow-purple-500/25" },
      green: { border: "border-green-500/30", hoverBorder: "hover:border-green-500/60", text: "text-green-400", shadow: "hover:shadow-green-500/25" },
      blue: { border: "border-blue-500/30", hoverBorder: "hover:border-blue-500/60", text: "text-blue-400", shadow: "hover:shadow-blue-500/25" },
      indigo: { border: "border-indigo-500/30", hoverBorder: "hover:border-indigo-500/60", text: "text-indigo-400", shadow: "hover:shadow-indigo-500/25" },
      red: { border: "border-red-500/30", hoverBorder: "hover:border-red-500/60", text: "text-red-400", shadow: "hover:shadow-red-500/25" },
      orange: { border: "border-orange-500/30", hoverBorder: "hover:border-orange-500/60", text: "text-orange-400", shadow: "hover:shadow-orange-500/25" }
    };
    return colorMap[color as keyof typeof colorMap];
  };

  return (
    <section className="min-h-screen py-20 px-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-12">
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-200 mb-6"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Portfolio
          </button>
          
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-green-400 bg-clip-text text-transparent">
              All Projects
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Comprehensive showcase of mobile applications, web platforms, and security tools
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-green-500 mx-auto rounded-full mt-6"></div>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 border border-cyan-500/30'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/50 border border-slate-700/50'
                  }`}
                >
                  <Filter className="w-4 h-4" />
                  {category.label}
                  <span className="px-2 py-0.5 rounded-full bg-slate-700/50 text-xs">
                    {category.count}
                  </span>
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-64 px-4 py-2 pl-10 bg-slate-800/50 border border-slate-700/50 rounded-full text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
              />
              <Search className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => {
            const colors = getColorClasses(project.color);
            const Icon = project.icon;
            
            return (
              <div
                key={index}
                className={`group relative p-6 rounded-2xl bg-slate-800/50 backdrop-blur-sm border ${colors.border} ${colors.hoverBorder} transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl ${colors.shadow} overflow-hidden`}
              >
                {/* Project Image */}
                <div className="relative mb-6 rounded-xl overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                  
                  {/* Status Badge */}
                  <div className={`absolute top-3 left-3 px-2 py-1 rounded-full text-xs font-medium ${
                    project.status === 'completed' 
                      ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                      : 'bg-orange-500/20 text-orange-400 border border-orange-500/30'
                  }`}>
                    {project.status === 'completed' ? 'Completed' : 'In Progress'}
                  </div>

                  {/* Rating */}
                  <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 rounded-full bg-slate-900/80 backdrop-blur-sm">
                    <Star className="w-3 h-3 text-yellow-400 fill-current" />
                    <span className="text-xs text-white font-medium">{project.rating}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg bg-slate-700/50 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className={`w-5 h-5 ${colors.text}`} />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white group-hover:text-white transition-colors duration-300">
                          {project.title}
                        </h3>
                        <div className="flex items-center gap-2 text-xs text-slate-400">
                          <Calendar className="w-3 h-3" />
                          {project.date}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-300 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="text-xs font-semibold text-slate-400 mb-2">Key Features</h4>
                    <div className="grid grid-cols-2 gap-1">
                      {project.features.slice(0, 4).map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-1 text-xs text-slate-300">
                          <div className={`w-1 h-1 rounded-full ${colors.text.replace('text-', 'bg-')}`}></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 4).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 text-xs font-medium rounded-full bg-slate-700/60 text-slate-300 border border-slate-600/50"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-2 py-1 text-xs font-medium rounded-full bg-slate-700/60 text-slate-400 border border-slate-600/50">
                          +{project.technologies.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 px-3 py-2 rounded-lg bg-slate-700/50 hover:bg-slate-600/50 transition-colors duration-200 text-slate-300 hover:text-white text-xs"
                    >
                      <Github className="w-3 h-3" />
                      Code
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-1 px-3 py-2 rounded-lg ${colors.text.replace('text-', 'bg-')}/20 hover:${colors.text.replace('text-', 'bg-')}/30 transition-colors duration-200 ${colors.text} text-xs`}
                    >
                      <ExternalLink className="w-3 h-3" />
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-white mb-2">No Projects Found</h3>
            <p className="text-slate-400">Try adjusting your search or filter criteria</p>
          </div>
        )}

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-6 rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-cyan-500/30">
            <div className="text-3xl font-bold text-cyan-400 mb-2">{projects.length}</div>
            <div className="text-sm text-slate-400">Total Projects</div>
          </div>
          <div className="text-center p-6 rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-green-500/30">
            <div className="text-3xl font-bold text-green-400 mb-2">{projects.filter(p => p.status === 'completed').length}</div>
            <div className="text-sm text-slate-400">Completed</div>
          </div>
          <div className="text-center p-6 rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-purple-500/30">
            <div className="text-3xl font-bold text-purple-400 mb-2">{projects.filter(p => p.category === 'security').length}</div>
            <div className="text-sm text-slate-400">Security Tools</div>
          </div>
          <div className="text-center p-6 rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-orange-500/30">
            <div className="text-3xl font-bold text-orange-400 mb-2">4.7</div>
            <div className="text-sm text-slate-400">Avg Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;