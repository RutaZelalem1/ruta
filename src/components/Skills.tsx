// import React from 'react';
// import { 
//   Smartphone, 
//   Code, 
//   Shield, 
//   Database, 
//   Cloud, 
//   Zap,
//   Globe,
//   Lock,
//   Cpu
// } from 'lucide-react';

// const Skills: React.FC = () => {
//   const skillCategories = [
//     {
//       title: "Mobile Development",
//       icon: Smartphone,
//       color: "cyan",
//       skills: ["Flutter", "Dart", "Firebase", "SQLite", "REST APIs", "State Management"]
//     },
//     {
//       title: "Web Development",
//       icon: Code,
//       color: "purple",
//       skills: ["React", "TypeScript", "Node.js", "Next.js", "Tailwind CSS", "MongoDB"]
//     },
//     {
//       title: "Security & Auditing",
//       icon: Shield,
//       color: "green",
//       skills: ["Security Assessment", "Penetration Testing", "OWASP", "Vulnerability Analysis", "Code Review", "Compliance"]
//     },
//     {
//       title: "Backend & Database",
//       icon: Database,
//       color: "blue",
//       skills: ["PostgreSQL", "MongoDB", "Redis", "Docker", "Microservices", "GraphQL"]
//     },
//     {
//       title: "Cloud & DevOps",
//       icon: Cloud,
//       color: "indigo",
//       skills: ["AWS", "Google Cloud", "CI/CD", "Kubernetes", "Terraform", "Monitoring"]
//     },
//     {
//       title: "Tools & Technologies",
//       icon: Zap,
//       color: "pink",
//       skills: ["Git", "Jira", "Figma", "Postman", "VS Code", "Linux"]
//     }
//   ];

//   const getColorClasses = (color: string) => {
//     const colorMap = {
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
//       green: {
//         border: "border-green-500/30",
//         hoverBorder: "hover:border-green-500/60",
//         bg: "bg-green-500/10",
//         text: "text-green-400",
//         shadow: "hover:shadow-green-500/25"
//       },
//       blue: {
//         border: "border-blue-500/30",
//         hoverBorder: "hover:border-blue-500/60",
//         bg: "bg-blue-500/10",
//         text: "text-blue-400",
//         shadow: "hover:shadow-blue-500/25"
//       },
//       indigo: {
//         border: "border-indigo-500/30",
//         hoverBorder: "hover:border-indigo-500/60",
//         bg: "bg-indigo-500/10",
//         text: "text-indigo-400",
//         shadow: "hover:shadow-indigo-500/25"
//       },
//       pink: {
//         border: "border-pink-500/30",
//         hoverBorder: "hover:border-pink-500/60",
//         bg: "bg-pink-500/10",
//         text: "text-pink-400",
//         shadow: "hover:shadow-pink-500/25"
//       }
//     };
//     return colorMap[color as keyof typeof colorMap];
//   };

//   return (
//     <section className="py-20 px-6 bg-gradient-to-br from-slate-800 to-slate-900 relative overflow-hidden">
//       {/* Background Pattern */}
//       <div className="absolute inset-0 opacity-5">
//         <div className="absolute inset-0" style={{
//           backgroundImage: `radial-gradient(circle at 25% 25%, cyan 2px, transparent 2px),
//                            radial-gradient(circle at 75% 75%, purple 2px, transparent 2px)`,
//           backgroundSize: '50px 50px'
//         }}></div>
//       </div>

//       <div className="max-w-7xl mx-auto relative z-10">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
//             Skills & Technologies
//           </h2>
//           <p className="text-xl text-slate-300 max-w-3xl mx-auto">
//             A comprehensive toolkit spanning mobile development, web technologies, and cybersecurity expertise
//           </p>
//           <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full mt-6"></div>
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {skillCategories.map((category, index) => {
//             const colors = getColorClasses(category.color);
//             const Icon = category.icon;
            
//             return (
//               <div
//                 key={index}
//                 className={`p-6 rounded-2xl bg-slate-800/50 backdrop-blur-sm border ${colors.border} ${colors.hoverBorder} transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg ${colors.shadow} group`}
//               >
//                 <div className="flex items-center gap-3 mb-6">
//                   <div className={`p-3 rounded-xl ${colors.bg} group-hover:scale-110 transition-transform duration-300`}>
//                     <Icon className={`w-6 h-6 ${colors.text}`} />
//                   </div>
//                   <h3 className={`text-xl font-semibold ${colors.text}`}>{category.title}</h3>
//                 </div>
                
//                 <div className="space-y-3">
//                   {category.skills.map((skill, skillIndex) => (
//                     <div
//                       key={skillIndex}
//                       className="flex items-center gap-3 p-3 rounded-lg bg-slate-700/30 hover:bg-slate-700/50 transition-all duration-200 group/skill"
//                     >
//                       <div className={`w-2 h-2 rounded-full ${colors.bg} group-hover/skill:scale-125 transition-transform duration-200`}></div>
//                       <span className="text-slate-300 group-hover/skill:text-white transition-colors duration-200">
//                         {skill}
//                       </span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         {/* Additional certifications or badges section */}
//         <div className="mt-16 text-center">
//           <div className="inline-flex flex-wrap gap-4 justify-center">
//             <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/60 border border-green-500/30">
//               <Lock className="w-4 h-4 text-green-400" />
//               <span className="text-green-300 text-sm">Security Certified</span>
//             </div>
//             <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/60 border border-cyan-500/30">
//               <Globe className="w-4 h-4 text-cyan-400" />
//               <span className="text-cyan-300 text-sm">Full-Stack Expert</span>
//             </div>
//             <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/60 border border-purple-500/30">
//               <Cpu className="w-4 h-4 text-purple-400" />
//               <span className="text-purple-300 text-sm">Performance Optimized</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;