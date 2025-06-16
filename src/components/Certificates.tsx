// import React from 'react';
// import { Award, Calendar, ExternalLink, Shield, Code, Cloud, Database, Smartphone, Globe } from 'lucide-react';

// const Certificates: React.FC = () => {
//   const certificates = [
//     {
//       title: "Certified Ethical Hacker (CEH)",
//       issuer: "EC-Council",
//       date: "March 2023",
//       credentialId: "ECC-CEH-2023-001234",
//       description: "Advanced ethical hacking and penetration testing certification covering network security, web application security, and vulnerability assessment.",
//       skills: ["Penetration Testing", "Network Security", "Web App Security", "Vulnerability Assessment"],
//       icon: Shield,
//       color: "red",
//       verified: true,
//       image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=400"
//     },
//     {
//       title: "AWS Certified Security - Specialty",
//       issuer: "Amazon Web Services",
//       date: "January 2022",
//       credentialId: "AWS-CSS-2022-567890",
//       description: "Specialized certification in AWS security services, incident response, logging and monitoring, and infrastructure security.",
//       skills: ["AWS Security", "Cloud Security", "Incident Response", "Compliance"],
//       icon: Cloud,
//       color: "orange",
//       verified: true,
//       image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=400"
//     },
//     {
//       title: "Google Flutter Certified Developer",
//       issuer: "Google",
//       date: "September 2021",
//       credentialId: "GOOG-FLT-2021-112233",
//       description: "Official Google certification for Flutter development, covering advanced UI design, state management, and cross-platform development.",
//       skills: ["Flutter", "Dart", "Mobile Development", "Cross-platform"],
//       icon: Smartphone,
//       color: "blue",
//       verified: true,
//       image: "https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=400"
//     },
//     {
//       title: "CISSP - Certified Information Systems Security Professional",
//       issuer: "ISC²",
//       date: "June 2021",
//       credentialId: "ISC2-CISSP-2021-445566",
//       description: "Advanced certification in information security covering security and risk management, asset security, and security architecture.",
//       skills: ["Information Security", "Risk Management", "Security Architecture", "Governance"],
//       icon: Shield,
//       color: "green",
//       verified: true,
//       image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=400"
//     },
//     {
//       title: "React Developer Certification",
//       issuer: "Meta (Facebook)",
//       date: "March 2020",
//       credentialId: "META-REACT-2020-778899",
//       description: "Professional certification in React development, covering advanced concepts, hooks, state management, and performance optimization.",
//       skills: ["React", "JavaScript", "Web Development", "Frontend"],
//       icon: Code,
//       color: "cyan",
//       verified: true,
//       image: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=400"
//     },
//     {
//       title: "MongoDB Certified Developer",
//       issuer: "MongoDB Inc.",
//       date: "November 2020",
//       credentialId: "MONGO-DEV-2020-334455",
//       description: "Certification in MongoDB database development, covering data modeling, aggregation, indexing, and performance optimization.",
//       skills: ["MongoDB", "Database Design", "NoSQL", "Performance Tuning"],
//       icon: Database,
//       color: "green",
//       verified: true,
//       image: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=400"
//     },
//     {
//       title: "Kubernetes Certified Application Developer",
//       issuer: "Cloud Native Computing Foundation",
//       date: "August 2021",
//       credentialId: "CNCF-CKAD-2021-667788",
//       description: "Certification in Kubernetes application development, covering pod design, configuration, multi-container pods, and observability.",
//       skills: ["Kubernetes", "Container Orchestration", "DevOps", "Cloud Native"],
//       icon: Cloud,
//       color: "purple",
//       verified: true,
//       image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=400"
//     },
//     {
//       title: "CompTIA Security+",
//       issuer: "CompTIA",
//       date: "February 2019",
//       credentialId: "COMP-SEC-2019-998877",
//       description: "Foundational cybersecurity certification covering network security, compliance, operational security, and threats and vulnerabilities.",
//       skills: ["Network Security", "Compliance", "Risk Assessment", "Incident Response"],
//       icon: Shield,
//       color: "blue",
//       verified: true,
//       image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=400"
//     },
//     {
//       title: "Google Cloud Professional Cloud Architect",
//       issuer: "Google Cloud",
//       date: "May 2022",
//       credentialId: "GCP-PCA-2022-123789",
//       description: "Professional certification in Google Cloud architecture, covering design, development, and management of robust, secure, and scalable solutions.",
//       skills: ["Google Cloud", "Cloud Architecture", "Scalability", "Security"],
//       icon: Cloud,
//       color: "indigo",
//       verified: true,
//       image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=400"
//     }
//   ];

//   const getColorClasses = (color: string) => {
//     const colorMap = {
//       red: {
//         border: "border-red-500/30",
//         hoverBorder: "hover:border-red-500/60",
//         bg: "bg-red-500/10",
//         text: "text-red-400",
//         shadow: "hover:shadow-red-500/25"
//       },
//       orange: {
//         border: "border-orange-500/30",
//         hoverBorder: "hover:border-orange-500/60",
//         bg: "bg-orange-500/10",
//         text: "text-orange-400",
//         shadow: "hover:shadow-orange-500/25"
//       },
//       blue: {
//         border: "border-blue-500/30",
//         hoverBorder: "hover:border-blue-500/60",
//         bg: "bg-blue-500/10",
//         text: "text-blue-400",
//         shadow: "hover:shadow-blue-500/25"
//       },
//       green: {
//         border: "border-green-500/30",
//         hoverBorder: "hover:border-green-500/60",
//         bg: "bg-green-500/10",
//         text: "text-green-400",
//         shadow: "hover:shadow-green-500/25"
//       },
//       cyan: {
//         border: "border-cyan-500/30",
//         hoverBorder: "hover:border-cyan-500/60",
//         bg: "bg-cyan-500/10",
//         text: "text-cyan-400",
//         shadow: "hover:shadow-cyan-500/25"
//       },
//       purple: {
//         border: "border-purple-500/30",
//         hoverBorder: "hover:border-purple-500/60",
//         bg: "bg-purple-500/10",
//         text: "text-purple-400",
//         shadow: "hover:shadow-purple-500/25"
//       },
//       indigo: {
//         border: "border-indigo-500/30",
//         hoverBorder: "hover:border-indigo-500/60",
//         bg: "bg-indigo-500/10",
//         text: "text-indigo-400",
//         shadow: "hover:shadow-indigo-500/25"
//       }
//     };
//     return colorMap[color as keyof typeof colorMap];
//   };

//   return (
//     <section className="py-20 px-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
//       {/* Background Effects */}
//       <div className="absolute inset-0">
//         <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
//         <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
//         <div className="absolute top-2/3 left-1/4 w-48 h-48 bg-green-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
//       </div>

//       <div className="max-w-7xl mx-auto relative z-10">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-green-400 bg-clip-text text-transparent">
//             Professional Certificates
//           </h2>
//           <p className="text-xl text-slate-300 max-w-3xl mx-auto">
//             Industry-recognized certifications demonstrating expertise across cybersecurity, cloud technologies, and software development
//           </p>
//           <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full mt-6"></div>
//         </div>

//         {/* Statistics */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
//           <div className="text-center p-6 rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-cyan-500/30">
//             <div className="text-3xl font-bold text-cyan-400 mb-2">{certificates.length}</div>
//             <div className="text-sm text-slate-400">Total Certificates</div>
//           </div>
//           <div className="text-center p-6 rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-green-500/30">
//             <div className="text-3xl font-bold text-green-400 mb-2">{certificates.filter(cert => cert.verified).length}</div>
//             <div className="text-sm text-slate-400">Verified</div>
//           </div>
//           <div className="text-center p-6 rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-purple-500/30">
//             <div className="text-3xl font-bold text-purple-400 mb-2">5</div>
//             <div className="text-sm text-slate-400">Security Focused</div>
//           </div>
//           <div className="text-center p-6 rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-orange-500/30">
//             <div className="text-3xl font-bold text-orange-400 mb-2">4</div>
//             <div className="text-sm text-slate-400">Cloud Platforms</div>
//           </div>
//         </div>

//         {/* Certificates Grid */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {certificates.map((cert, index) => {
//             const colors = getColorClasses(cert.color);
//             const Icon = cert.icon;
            
//             return (
//               <div
//                 key={index}
//                 className={`group relative p-6 rounded-2xl bg-slate-800/50 backdrop-blur-sm border ${colors.border} ${colors.hoverBorder} transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl ${colors.shadow} overflow-hidden`}
//               >
//                 {/* Background Image */}
//                 <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
//                   <img 
//                     src={cert.image} 
//                     alt={cert.title}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>

//                 {/* Verified Badge */}
//                 {cert.verified && (
//                   <div className="absolute top-4 right-4 flex items-center gap-1 px-2 py-1 rounded-full bg-green-500/20 border border-green-500/30">
//                     <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
//                     <span className="text-xs text-green-400 font-medium">Verified</span>
//                   </div>
//                 )}

//                 {/* Content */}
//                 <div className="relative z-10">
//                   {/* Header */}
//                   <div className="flex items-start gap-4 mb-4">
//                     <div className={`p-3 rounded-xl ${colors.bg} group-hover:scale-110 transition-transform duration-300`}>
//                       <Icon className={`w-6 h-6 ${colors.text}`} />
//                     </div>
//                     <div className="flex-1">
//                       <h3 className="text-lg font-bold text-white group-hover:text-white transition-colors duration-300 leading-tight">
//                         {cert.title}
//                       </h3>
//                       <div className={`text-sm ${colors.text} font-medium mt-1`}>
//                         {cert.issuer}
//                       </div>
//                     </div>
//                   </div>

//                   {/* Date and Credential ID */}
//                   <div className="mb-4 space-y-2">
//                     <div className="flex items-center gap-2 text-slate-400 text-sm">
//                       <Calendar className="w-4 h-4" />
//                       {cert.date}
//                     </div>
//                     <div className="text-xs text-slate-500 font-mono">
//                       ID: {cert.credentialId}
//                     </div>
//                   </div>

//                   {/* Description */}
//                   <p className="text-slate-300 text-sm mb-4 leading-relaxed">
//                     {cert.description}
//                   </p>

//                   {/* Skills */}
//                   <div className="mb-4">
//                     <h4 className="text-xs font-semibold text-slate-400 mb-2">Skills Covered</h4>
//                     <div className="flex flex-wrap gap-1">
//                       {cert.skills.map((skill, skillIndex) => (
//                         <span
//                           key={skillIndex}
//                           className="px-2 py-1 text-xs font-medium rounded-full bg-slate-700/60 text-slate-300 border border-slate-600/50"
//                         >
//                           {skill}
//                         </span>
//                       ))}
//                     </div>
//                   </div>

//                   {/* View Certificate Button */}
//                   <button className={`flex items-center gap-2 ${colors.text} font-medium text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 hover:underline`}>
//                     View Certificate
//                     <ExternalLink className="w-4 h-4" />
//                   </button>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         {/* Call to Action */}
//         <div className="text-center mt-16">
//           <div className="p-8 rounded-2xl bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm border border-slate-600/30">
//             <h3 className="text-2xl font-bold text-white mb-4">Continuous Learning</h3>
//             <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
//               I'm committed to staying current with the latest technologies and security practices. 
//               Currently pursuing additional certifications in AI/ML security and advanced cloud architecture.
//             </p>
//             <div className="flex flex-wrap justify-center gap-4">
//               <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-500/30">
//                 <Award className="w-4 h-4 text-cyan-400" />
//                 <span className="text-cyan-300 text-sm">In Progress: CISSP Renewal</span>
//               </div>
//               <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30">
//                 <Globe className="w-4 h-4 text-purple-400" />
//                 <span className="text-purple-300 text-sm">Next: AI Security Certification</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Certificates;