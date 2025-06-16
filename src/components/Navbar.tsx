// import React, { useState, useEffect } from 'react';
// import { Menu, X, Home, User, Code, Award, FileText, Mail, ExternalLink } from 'lucide-react';

// interface NavbarProps {
//   currentPage: string;
//   onNavigate: (page: string) => void;
// }

// const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const navItems = [
//     { id: 'home', label: 'Home', icon: Home },
//     { id: 'about', label: 'About', icon: User },
//     { id: 'skills', label: 'Skills', icon: Code },
//     { id: 'projects', label: 'Projects', icon: ExternalLink },
//     { id: 'certificates', label: 'Certificates', icon: Award },
//     { id: 'resume', label: 'Resume', icon: FileText },
//     { id: 'contact', label: 'Contact', icon: Mail }
//   ];

//   const handleNavClick = (itemId: string) => {
//     onNavigate(itemId);
//     setIsOpen(false);
//   };

//   return (
//     <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//       scrolled 
//         ? 'bg-slate-900/95 backdrop-blur-md border-b border-slate-800/50' 
//         : 'bg-transparent'
//     }`}>
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="flex items-center justify-between h-16">
//           {/* Logo */}
//           <div 
//             className="flex items-center gap-3 cursor-pointer group"
//             onClick={() => handleNavClick('home')}
//           >
//             <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 p-0.5 group-hover:scale-110 transition-transform duration-300">
//               <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
//                 <span className="text-sm font-bold text-cyan-400">RZ</span>
//               </div>
//             </div>
//             <div className="hidden sm:block">
//               <div className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
//                 Ruta Zelalem
//               </div>
//               <div className="text-xs text-slate-400">Multi-Skilled Developer</div>
//             </div>
//           </div>

//           {/* Desktop Navigation */}
//           <div className="hidden lg:flex items-center space-x-1">
//             {navItems.map((item) => {
//               const Icon = item.icon;
//               const isActive = currentPage === item.id;
              
//               return (
//                 <button
//                   key={item.id}
//                   onClick={() => handleNavClick(item.id)}
//                   className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
//                     isActive
//                       ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 border border-cyan-500/30'
//                       : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
//                   }`}
//                 >
//                   <Icon className="w-4 h-4" />
//                   {item.label}
//                 </button>
//               );
//             })}
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="lg:hidden p-2 rounded-lg bg-slate-800/50 text-slate-300 hover:text-white hover:bg-slate-700/50 transition-colors duration-200"
//           >
//             {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
//           </button>
//         </div>

//         {/* Mobile Navigation */}
//         {isOpen && (
//           <div className="lg:hidden absolute top-full left-0 right-0 bg-slate-900/95 backdrop-blur-md border-b border-slate-800/50">
//             <div className="px-6 py-4 space-y-2">
//               {navItems.map((item) => {
//                 const Icon = item.icon;
//                 const isActive = currentPage === item.id;
                
//                 return (
//                   <button
//                     key={item.id}
//                     onClick={() => handleNavClick(item.id)}
//                     className={`flex items-center gap-3 w-full px-4 py-3 rounded-xl text-left transition-all duration-300 ${
//                       isActive
//                         ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 border border-cyan-500/30'
//                         : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
//                     }`}
//                   >
//                     <Icon className="w-5 h-5" />
//                     {item.label}
//                   </button>
//                 );
//               })}
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;