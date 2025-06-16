import React from 'react';
import { User, Target, Zap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-purple-500/5"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Main Content */}
          <div className="space-y-6">
            <div className="p-8 rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:border-cyan-500/30 transition-all duration-300 hover:transform hover:scale-105">
              <div className="flex items-center gap-3 mb-4">
                <User className="w-6 h-6 text-cyan-400" />
                <h3 className="text-2xl font-semibold text-white">Who I Am</h3>
              </div>
              <p className="text-slate-300 leading-relaxed">
                I'm a passionate multi-disciplinary developer with expertise spanning mobile app development, web technologies, and cybersecurity. With years of experience in creating robust, secure applications, I bridge the gap between innovative development and enterprise-grade security.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:border-purple-500/30 transition-all duration-300 hover:transform hover:scale-105">
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-6 h-6 text-purple-400" />
                <h3 className="text-2xl font-semibold text-white">My Mission</h3>
              </div>
              <p className="text-slate-300 leading-relaxed">
                To deliver cutting-edge digital solutions that not only meet business objectives but also maintain the highest standards of security and user experience. I believe in code that's both elegant and bulletproof.
              </p>
            </div>
          </div>

          {/* Right Side - Stats & Highlights */}
          <div className="space-y-6">
            <div className="p-8 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-sm border border-slate-600/30">
              <div className="flex items-center gap-3 mb-6">
                <Zap className="w-6 h-6 text-green-400" />
                <h3 className="text-2xl font-semibold text-white">Key Highlights</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 rounded-xl bg-slate-800/60 border border-cyan-500/20">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">50+</div>
                  <div className="text-sm text-slate-400">Projects Delivered</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-slate-800/60 border border-purple-500/20">
                  <div className="text-3xl font-bold text-purple-400 mb-2">5+</div>
                  <div className="text-sm text-slate-400">Years Experience</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-slate-800/60 border border-green-500/20">
                  <div className="text-3xl font-bold text-green-400 mb-2">100%</div>
                  <div className="text-sm text-slate-400">Security Focused</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-slate-800/60 border border-pink-500/20">
                  <div className="text-3xl font-bold text-pink-400 mb-2">24/7</div>
                  <div className="text-sm text-slate-400">Support Ready</div>
                </div>
              </div>
            </div>

            {/* Philosophy */}
            <div className="p-6 rounded-xl bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30">
              <blockquote className="text-slate-300 italic text-center">
                "Security isn't just a feature—it's the foundation upon which all great applications are built."
              </blockquote>
              <div className="text-center mt-3 text-cyan-400 font-semibold">- Ruta Zelalem</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;