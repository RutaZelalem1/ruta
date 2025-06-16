import React from 'react';
import { Download, Calendar, MapPin, Mail, Phone, Award, Briefcase, GraduationCap, Code, Shield, Smartphone } from 'lucide-react';

const Resume: React.FC = () => {
  const handleDownloadCV = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = '/cv/Ruta_Zelalem_CV.pdf'; // This would be the actual PDF file
    link.download = 'Ruta_Zelalem_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const experience = [
    {
      title: "Lead Security Auditor",
      company: "CyberSecure Solutions",
      period: "2022 - Present",
      location: "San Francisco, CA",
      description: "Leading comprehensive security audits for Fortune 500 companies, conducting penetration testing, and developing security frameworks.",
      achievements: [
        "Conducted 50+ security audits resulting in 95% vulnerability reduction",
        "Developed automated security testing framework used company-wide",
        "Led team of 8 security professionals",
        "Achieved 100% compliance rate for all audited systems"
      ]
    },
    {
      title: "Senior Flutter Developer",
      company: "MobileTech Innovations",
      period: "2020 - 2022",
      location: "San Francisco, CA",
      description: "Developed cross-platform mobile applications using Flutter, focusing on performance optimization and user experience.",
      achievements: [
        "Built 15+ production mobile apps with 4.8+ App Store ratings",
        "Reduced app loading time by 60% through optimization techniques",
        "Mentored 5 junior developers in Flutter best practices",
        "Implemented CI/CD pipelines reducing deployment time by 40%"
      ]
    },
    {
      title: "Full Stack Web Developer",
      company: "WebCraft Studios",
      period: "2019 - 2020",
      location: "San Francisco, CA",
      description: "Developed responsive web applications using React, Node.js, and modern web technologies.",
      achievements: [
        "Delivered 20+ client projects on time and within budget",
        "Improved website performance by 75% through optimization",
        "Integrated secure payment systems for e-commerce platforms",
        "Maintained 99.9% uptime for all deployed applications"
      ]
    }
  ];

  const education = [
    {
      degree: "Master of Science in Cybersecurity",
      school: "Stanford University",
      period: "2017 - 2019",
      location: "Stanford, CA",
      gpa: "3.9/4.0",
      achievements: [
        "Thesis: Advanced Threat Detection in Mobile Applications",
        "Dean's List for 4 consecutive semesters",
        "President of Cybersecurity Student Association"
      ]
    },
    {
      degree: "Bachelor of Science in Computer Science",
      school: "UC Berkeley",
      period: "2013 - 2017",
      location: "Berkeley, CA",
      gpa: "3.8/4.0",
      achievements: [
        "Magna Cum Laude graduate",
        "Outstanding Student in Computer Science Award",
        "Lead developer for university mobile app project"
      ]
    }
  ];

  const certifications = [
    { name: "Certified Ethical Hacker (CEH)", issuer: "EC-Council", year: "2023" },
    { name: "AWS Certified Security - Specialty", issuer: "Amazon", year: "2022" },
    { name: "Google Flutter Certified Developer", issuer: "Google", year: "2021" },
    { name: "CISSP - Certified Information Systems Security Professional", issuer: "ISC²", year: "2021" },
    { name: "React Developer Certification", issuer: "Meta", year: "2020" }
  ];

  const skills = {
    "Mobile Development": ["Flutter", "Dart", "Firebase", "SQLite", "REST APIs", "State Management"],
    "Web Development": ["React", "TypeScript", "Node.js", "Next.js", "Tailwind CSS", "MongoDB"],
    "Security & Auditing": ["Penetration Testing", "OWASP", "Vulnerability Assessment", "Security Frameworks", "Compliance"],
    "Cloud & DevOps": ["AWS", "Google Cloud", "Docker", "Kubernetes", "CI/CD", "Terraform"],
    "Programming Languages": ["Dart", "JavaScript", "TypeScript", "Python", "Java", "C++"],
    "Tools & Technologies": ["Git", "Jira", "Figma", "Postman", "VS Code", "Linux"]
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-green-400 bg-clip-text text-transparent">
            Resume & CV
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            Comprehensive overview of my professional experience, education, and achievements
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full mb-8"></div>
          
          {/* Download CV Button */}
          <button
            onClick={handleDownloadCV}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-white font-semibold hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
          >
            <Download className="w-5 h-5" />
            Download CV (PDF)
          </button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Personal Info & Skills */}
          <div className="space-y-8">
            {/* Personal Information */}
            <div className="p-6 rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50">
              <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
                <Award className="w-6 h-6 text-cyan-400" />
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-slate-300">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <span>ruta.zelalem@example.com</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <Phone className="w-4 h-4 text-purple-400" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <MapPin className="w-4 h-4 text-green-400" />
                  <span>San Francisco, CA</span>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className="p-6 rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50">
              <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
                <Code className="w-6 h-6 text-purple-400" />
                Technical Skills
              </h3>
              <div className="space-y-6">
                {Object.entries(skills).map(([category, skillList], index) => (
                  <div key={index}>
                    <h4 className="text-sm font-semibold text-cyan-400 mb-3">{category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 text-xs font-medium rounded-full bg-slate-700/60 text-slate-300 border border-slate-600/50"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="p-6 rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50">
              <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
                <Shield className="w-6 h-6 text-green-400" />
                Certifications
              </h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="p-4 rounded-xl bg-slate-700/30 border border-slate-600/30">
                    <div className="font-semibold text-white text-sm">{cert.name}</div>
                    <div className="text-slate-400 text-xs mt-1">{cert.issuer} • {cert.year}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Experience & Education */}
          <div className="lg:col-span-2 space-y-8">
            {/* Professional Experience */}
            <div className="p-6 rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50">
              <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
                <Briefcase className="w-6 h-6 text-cyan-400" />
                Professional Experience
              </h3>
              <div className="space-y-8">
                {experience.map((job, index) => (
                  <div key={index} className="relative">
                    {index !== experience.length - 1 && (
                      <div className="absolute left-6 top-12 w-px h-full bg-gradient-to-b from-cyan-500/50 to-transparent"></div>
                    )}
                    <div className="flex gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 flex items-center justify-center">
                          <Briefcase className="w-5 h-5 text-cyan-400" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                          <h4 className="text-xl font-semibold text-white">{job.title}</h4>
                          <div className="flex items-center gap-2 text-slate-400 text-sm">
                            <Calendar className="w-4 h-4" />
                            {job.period}
                          </div>
                        </div>
                        <div className="flex items-center gap-4 mb-3">
                          <span className="text-cyan-400 font-medium">{job.company}</span>
                          <div className="flex items-center gap-1 text-slate-400 text-sm">
                            <MapPin className="w-3 h-3" />
                            {job.location}
                          </div>
                        </div>
                        <p className="text-slate-300 mb-4 leading-relaxed">{job.description}</p>
                        <div className="space-y-2">
                          <h5 className="text-sm font-semibold text-purple-400">Key Achievements:</h5>
                          <ul className="space-y-1">
                            {job.achievements.map((achievement, achIndex) => (
                              <li key={achIndex} className="flex items-start gap-2 text-slate-300 text-sm">
                                <div className="w-1.5 h-1.5 rounded-full bg-green-400 mt-2 flex-shrink-0"></div>
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="p-6 rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50">
              <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
                <GraduationCap className="w-6 h-6 text-purple-400" />
                Education
              </h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="relative">
                    {index !== education.length - 1 && (
                      <div className="absolute left-6 top-12 w-px h-full bg-gradient-to-b from-purple-500/50 to-transparent"></div>
                    )}
                    <div className="flex gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500/20 to-green-500/20 border border-purple-500/30 flex items-center justify-center">
                          <GraduationCap className="w-5 h-5 text-purple-400" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                          <h4 className="text-xl font-semibold text-white">{edu.degree}</h4>
                          <div className="flex items-center gap-2 text-slate-400 text-sm">
                            <Calendar className="w-4 h-4" />
                            {edu.period}
                          </div>
                        </div>
                        <div className="flex items-center gap-4 mb-3">
                          <span className="text-purple-400 font-medium">{edu.school}</span>
                          <div className="flex items-center gap-1 text-slate-400 text-sm">
                            <MapPin className="w-3 h-3" />
                            {edu.location}
                          </div>
                        </div>
                        <div className="mb-4">
                          <span className="text-green-400 font-medium text-sm">GPA: {edu.gpa}</span>
                        </div>
                        <div className="space-y-2">
                          <h5 className="text-sm font-semibold text-cyan-400">Achievements:</h5>
                          <ul className="space-y-1">
                            {edu.achievements.map((achievement, achIndex) => (
                              <li key={achIndex} className="flex items-start gap-2 text-slate-300 text-sm">
                                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0"></div>
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Summary Statement */}
        <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm border border-slate-600/30">
          <h3 className="text-2xl font-semibold text-white mb-4 text-center">Professional Summary</h3>
          <p className="text-slate-300 leading-relaxed text-center max-w-4xl mx-auto">
            Highly skilled multi-disciplinary technology professional with 5+ years of experience spanning mobile app development, 
            web development, and cybersecurity. Proven track record of delivering secure, scalable solutions for Fortune 500 companies 
            while maintaining the highest standards of code quality and security practices. Passionate about bridging the gap between 
            innovative development and enterprise-grade security, with expertise in Flutter, React, and comprehensive security auditing.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Resume;