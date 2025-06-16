// import React, { useState } from 'react';
// import { Send, Mail, MessageSquare, User, MapPin, Phone, Linkedin, Github, Twitter } from 'lucide-react';

// const Contact: React.FC = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: ''
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Handle form submission here
//     console.log('Form submitted:', formData);
//   };

//   return (
//     <section className="py-20 px-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
//       {/* Background Effects */}
//       <div className="absolute inset-0">
//         <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
//         <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
//       </div>

//       <div className="max-w-7xl mx-auto relative z-10">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-green-400 bg-clip-text text-transparent">
//             Let's Connect
//           </h2>
//           <p className="text-xl text-slate-300 max-w-3xl mx-auto">
//             Ready to discuss your next project or explore collaboration opportunities? I'd love to hear from you.
//           </p>
//           <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full mt-6"></div>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-12">
//           {/* Contact Form */}
//           <div className="space-y-8">
//             <div className="p-8 rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50">
//               <div className="flex items-center gap-3 mb-6">
//                 <MessageSquare className="w-6 h-6 text-cyan-400" />
//                 <h3 className="text-2xl font-semibold text-white">Send a Message</h3>
//               </div>

//               <form onSubmit={handleSubmit} className="space-y-6">
//                 <div className="grid md:grid-cols-2 gap-6">
//                   <div className="relative group">
//                     <input
//                       type="text"
//                       name="name"
//                       value={formData.name}
//                       onChange={handleChange}
//                       className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
//                       placeholder="Your Name"
//                       required
//                     />
//                     <User className="absolute right-3 top-3 w-5 h-5 text-slate-400 group-focus-within:text-cyan-400 transition-colors duration-300" />
//                   </div>
//                   <div className="relative group">
//                     <input
//                       type="email"
//                       name="email"
//                       value={formData.email}
//                       onChange={handleChange}
//                       className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
//                       placeholder="Your Email"
//                       required
//                     />
//                     <Mail className="absolute right-3 top-3 w-5 h-5 text-slate-400 group-focus-within:text-cyan-400 transition-colors duration-300" />
//                   </div>
//                 </div>

//                 <div className="relative">
//                   <input
//                     type="text"
//                     name="subject"
//                     value={formData.subject}
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
//                     placeholder="Subject"
//                     required
//                   />
//                 </div>

//                 <div className="relative">
//                   <textarea
//                     name="message"
//                     value={formData.message}
//                     onChange={handleChange}
//                     rows={6}
//                     className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300 resize-none"
//                     placeholder="Your message..."
//                     required
//                   ></textarea>
//                 </div>

//                 <button
//                   type="submit"
//                   className="w-full flex items-center justify-center gap-3 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl text-white font-semibold hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
//                 >
//                   <Send className="w-5 h-5" />
//                   Send Message
//                 </button>
//               </form>
//             </div>
//           </div>

//           {/* Contact Information */}
//           <div className="space-y-8">
//             {/* Contact Details */}
//             <div className="p-8 rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50">
//               <h3 className="text-2xl font-semibold text-white mb-6">Get in Touch</h3>
              
//               <div className="space-y-6">
//                 <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-700/30 hover:bg-slate-700/50 transition-colors duration-300">
//                   <div className="p-3 rounded-lg bg-cyan-500/20">
//                     <Mail className="w-5 h-5 text-cyan-400" />
//                   </div>
//                   <div>
//                     <div className="text-sm text-slate-400">Email</div>
//                     <div className="text-white font-medium">ruta.zelalem@example.com</div>
//                   </div>
//                 </div>

//                 <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-700/30 hover:bg-slate-700/50 transition-colors duration-300">
//                   <div className="p-3 rounded-lg bg-purple-500/20">
//                     <Phone className="w-5 h-5 text-purple-400" />
//                   </div>
//                   <div>
//                     <div className="text-sm text-slate-400">Phone</div>
//                     <div className="text-white font-medium">+1 (555) 123-4567</div>
//                   </div>
//                 </div>

//                 <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-700/30 hover:bg-slate-700/50 transition-colors duration-300">
//                   <div className="p-3 rounded-lg bg-green-500/20">
//                     <MapPin className="w-5 h-5 text-green-400" />
//                   </div>
//                   <div>
//                     <div className="text-sm text-slate-400">Location</div>
//                     <div className="text-white font-medium">San Francisco, CA</div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Social Links */}
//             <div className="p-8 rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50">
//               <h3 className="text-2xl font-semibold text-white mb-6">Connect Online</h3>
              
//               <div className="grid grid-cols-3 gap-4">
//                 <a
//                   href="#"
//                   className="flex flex-col items-center gap-2 p-4 rounded-xl bg-slate-700/30 hover:bg-slate-700/50 hover:scale-105 transition-all duration-300 group"
//                 >
//                   <div className="p-3 rounded-lg bg-blue-500/20 group-hover:bg-blue-500/30 transition-colors duration-300">
//                     <Linkedin className="w-5 h-5 text-blue-400" />
//                   </div>
//                   <span className="text-sm text-slate-300">LinkedIn</span>
//                 </a>

//                 <a
//                   href="#"
//                   className="flex flex-col items-center gap-2 p-4 rounded-xl bg-slate-700/30 hover:bg-slate-700/50 hover:scale-105 transition-all duration-300 group"
//                 >
//                   <div className="p-3 rounded-lg bg-gray-500/20 group-hover:bg-gray-500/30 transition-colors duration-300">
//                     <Github className="w-5 h-5 text-gray-400" />
//                   </div>
//                   <span className="text-sm text-slate-300">GitHub</span>
//                 </a>

//                 <a
//                   href="#"
//                   className="flex flex-col items-center gap-2 p-4 rounded-xl bg-slate-700/30 hover:bg-slate-700/50 hover:scale-105 transition-all duration-300 group"
//                 >
//                   <div className="p-3 rounded-lg bg-sky-500/20 group-hover:bg-sky-500/30 transition-colors duration-300">
//                     <Twitter className="w-5 h-5 text-sky-400" />
//                   </div>
//                   <span className="text-sm text-slate-300">Twitter</span>
//                 </a>
//               </div>
//             </div>

//             {/* Availability Status */}
//             <div className="p-6 rounded-xl bg-gradient-to-r from-green-500/10 to-cyan-500/10 border border-green-500/30">
//               <div className="flex items-center gap-3 mb-2">
//                 <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
//                 <span className="text-green-400 font-semibold">Available for Projects</span>
//               </div>
//               <p className="text-slate-300 text-sm">
//                 Currently accepting new projects and collaboration opportunities. Let's build something amazing together!
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;