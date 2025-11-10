import React from 'react';
import university from '../assets/univ.png';
import HS from '../assets/hs.webp';
import MP from '../assets/mp.png';
import './About.css';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaFigma, FaNodeJs, FaPhp, FaLaravel } from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiMongodb, SiOracle } from "react-icons/si";
import AnimatedSection from './AnimatedSection';

const About = () => {
  return (
    <section id="about" className="min-h-screen flex flex-col items-center justify-start bg-gray-900 text-white px-6 pt-8">
      <div className="max-w-6xl text-center animate-fade-up">
        {/* About Me Section */}
        <AnimatedSection delay={0.1}>
          <div className="w-full text-center py-12">
              <h2 className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400 mb-4">
                About Me
              </h2>
              <div className="h-1.5 bg-gradient-to-r from-transparent via-pink-500 to-transparent max-w-2xl mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 mb-16">
            {/* About Card 1 */}
            <div className="bg-gradient-to-br from-purple-600/20 to-purple-900/20 backdrop-blur-md border border-purple-500/40 rounded-2xl p-8 hover:border-purple-500/80 transition-all duration-500 group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 to-pink-600/0 group-hover:from-purple-600/10 group-hover:to-pink-600/10 rounded-2xl transition-all duration-500"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-purple-300 mb-4">Who I Am</h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                  I'm <span className="text-purple-400 font-semibold">Subhadeep Maity</span>, a passionate web developer dedicated to crafting beautiful and functional digital experiences. I transform ideas into reality through modern technologies and innovative solutions.
                </p>
              </div>
            </div>
            
            {/* About Card 2 */}
            <div className="bg-gradient-to-br from-blue-600/20 to-blue-900/20 backdrop-blur-md border border-blue-500/40 rounded-2xl p-8 hover:border-blue-500/80 transition-all duration-500 group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 to-cyan-600/0 group-hover:from-blue-600/10 group-hover:to-cyan-600/10 rounded-2xl transition-all duration-500"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-blue-300 mb-4">My Passion</h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                  With expertise in <span className="text-blue-400 font-semibold">React, Tailwind CSS, and JavaScript</span>, I love building responsive, dynamic, and scalable applications. I'm driven by continuous learning and delivering exceptional results.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

       {/* Education Section - Minimalist Design */}
        <div className="mt-20 text-center px-4">
            <AnimatedSection delay={0.3}>
              <div className="inline-block mb-4">
                <h3 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400 mb-4">
                  Education
                </h3>
                <div className="h-1.5 bg-gradient-to-r from-transparent via-pink-500 to-transparent max-w-2xl mx-auto"></div>
              </div>
            </AnimatedSection>

            <div className="max-w-6xl mx-auto mt-16 space-y-8">
              
              {/* BCA Card */}
              <AnimatedSection delay={0.4}>
                <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-gray-900/80 to-gray-800/80 border border-purple-500/30 hover:border-purple-500/80 transition-all duration-500 backdrop-blur-md">
                  {/* Animated background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 via-purple-600/5 to-pink-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Left accent bar */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-600 to-pink-600"></div>
                  
                  {/* Content */}
                  <div className="relative p-8 md:p-10 flex flex-col md:flex-row md:items-center gap-8">
                    {/* Left section - Logo and basic info */}
                    <div className="flex-shrink-0 flex flex-col items-center md:items-start gap-4">
                      <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-purple-600/30 to-pink-600/20 border border-purple-400/60 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <img src={university} alt="University" className="w-full h-full object-contain p-3" />
                      </div>
                      <div className="text-center md:text-left">
                        <p className="text-purple-300 text-sm font-bold uppercase tracking-widest">University</p>
                        <p className="text-gray-400 text-xs mt-1">Pursuing Degree</p>
                      </div>
                    </div>
                    
                    {/* Middle section - Main details */}
                    <div className="flex-1">
                      <h4 className="text-3xl md:text-4xl font-black text-white mb-2">Bachelor of Computer Applications</h4>
                      <p className="text-purple-400 text-lg font-semibold mb-4">Maulana Abul Kalam Azad University of Technology</p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1.5 text-xs font-bold bg-purple-600/40 text-purple-200 rounded-full border border-purple-400/50">Web Development</span>
                        <span className="px-3 py-1.5 text-xs font-bold bg-purple-600/40 text-purple-200 rounded-full border border-purple-400/50">Data Structures</span>
                        <span className="px-3 py-1.5 text-xs font-bold bg-purple-600/40 text-purple-200 rounded-full border border-purple-400/50">AI & ML</span>
                      </div>
                    </div>
                    
                    {/* Right section - Timeline */}
                    <div className="flex-shrink-0 text-center md:text-right">
                      <div className="mb-4">
                        <p className="text-gray-500 text-xs uppercase tracking-widest">Duration</p>
                        <p className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mt-1">2023 - Present</p>
                      </div>
                      <div className="px-4 py-2 bg-purple-600/50 text-purple-100 text-xs font-bold rounded-full border border-purple-400/60 inline-block">
                        🎓 Ongoing
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {/* HS Card */}
              <AnimatedSection delay={0.5}>
                <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-gray-900/80 to-gray-800/80 border border-blue-500/30 hover:border-blue-500/80 transition-all duration-500 backdrop-blur-md">
                  {/* Animated background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-blue-600/5 to-cyan-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Left accent bar */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 to-cyan-600"></div>
                  
                  {/* Content */}
                  <div className="relative p-8 md:p-10 flex flex-col md:flex-row md:items-center gap-8">
                    {/* Left section - Logo and basic info */}
                    <div className="flex-shrink-0 flex flex-col items-center md:items-start gap-4">
                      <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-blue-600/30 to-cyan-600/20 border border-blue-400/60 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <img src={HS} alt="School" className="w-full h-full object-contain p-3" />
                      </div>
                      <div className="text-center md:text-left">
                        <p className="text-blue-300 text-sm font-bold uppercase tracking-widest">High School</p>
                        <p className="text-gray-400 text-xs mt-1">12th Grade</p>
                      </div>
                    </div>
                    
                    {/* Middle section - Main details */}
                    <div className="flex-1">
                      <h4 className="text-3xl md:text-4xl font-black text-white mb-2">Higher Secondary Education</h4>
                      <p className="text-blue-400 text-lg font-semibold mb-4">Ganeswarpur D.H High School</p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1.5 text-xs font-bold bg-blue-600/40 text-blue-200 rounded-full border border-blue-400/50">Bio-Science</span>
                        <span className="px-3 py-1.5 text-xs font-bold bg-blue-600/40 text-blue-200 rounded-full border border-blue-400/50">Computer Application</span>
                        <span className="px-3 py-1.5 text-xs font-bold bg-blue-600/40 text-blue-200 rounded-full border border-blue-400/50">Mathematics</span>
                      </div>
                    </div>
                    
                    {/* Right section - Timeline */}
                    <div className="flex-shrink-0 text-center md:text-right">
                      <div className="mb-4">
                        <p className="text-gray-500 text-xs uppercase tracking-widest">Completed</p>
                        <p className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mt-1">2023</p>
                      </div>
                      <div className="px-4 py-2 bg-blue-600/50 text-blue-100 text-xs font-bold rounded-full border border-blue-400/60 inline-block">
                        ⭐ 80% Marks
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {/* 10th Card */}
              <AnimatedSection delay={0.6}>
                <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-gray-900/80 to-gray-800/80 border border-green-500/30 hover:border-green-500/80 transition-all duration-500 backdrop-blur-md">
                  {/* Animated background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-r from-green-600/0 via-green-600/5 to-emerald-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Left accent bar */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-green-600 to-emerald-600"></div>
                  
                  {/* Content */}
                  <div className="relative p-8 md:p-10 flex flex-col md:flex-row md:items-center gap-8">
                    {/* Left section - Logo and basic info */}
                    <div className="flex-shrink-0 flex flex-col items-center md:items-start gap-4">
                      <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-green-600/30 to-emerald-600/20 border border-green-400/60 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <img src={MP} alt="School" className="w-full h-full object-contain p-3" />
                      </div>
                      <div className="text-center md:text-left">
                        <p className="text-green-300 text-sm font-bold uppercase tracking-widest">Secondary</p>
                        <p className="text-gray-400 text-xs mt-1">10th Grade</p>
                      </div>
                    </div>
                    
                    {/* Middle section - Main details */}
                    <div className="flex-1">
                      <h4 className="text-3xl md:text-4xl font-black text-white mb-2">Secondary Education</h4>
                      <p className="text-green-400 text-lg font-semibold mb-4">Ganeswarpur D.H High School</p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1.5 text-xs font-bold bg-green-600/40 text-green-200 rounded-full border border-green-400/50">Science</span>
                        <span className="px-3 py-1.5 text-xs font-bold bg-green-600/40 text-green-200 rounded-full border border-green-400/50">Mathematics</span>
                        <span className="px-3 py-1.5 text-xs font-bold bg-green-600/40 text-green-200 rounded-full border border-green-400/50">Computer Science</span>
                      </div>
                    </div>
                    
                    {/* Right section - Timeline */}
                    <div className="flex-shrink-0 text-center md:text-right">
                      <div className="mb-4">
                        <p className="text-gray-500 text-xs uppercase tracking-widest">Completed</p>
                        <p className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400 mt-1">2021</p>
                      </div>
                      <div className="px-4 py-2 bg-green-600/50 text-green-100 text-xs font-bold rounded-full border border-green-400/60 inline-block">
                        ⭐ 85% Marks
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
                
            </div>
        </div>

        {/* Skills Section */}
        <div className="mt-24 text-center px-4">
          <AnimatedSection delay={0.2}>
            <div className="inline-block mb-4">
              <h3 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400 mb-4">
                🛠️ Skills & Technologies
              </h3>
              <div className="h-1.5 bg-gradient-to-r from-transparent via-pink-500 to-transparent max-w-2xl mx-auto"></div>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mt-12">
            
            <AnimatedSection delay={0.3}>
              <div className="bg-gradient-to-br from-purple-900/40 to-purple-900/20 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-purple-500/40 hover:border-purple-500/80 transition-all duration-500 group h-full flex flex-col min-h-[300px] transform hover:-translate-y-2">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-400">Frontend</h4>
                  <span className="text-xs bg-purple-600/60 text-purple-100 px-3 py-1 rounded-full font-semibold">Core Skills</span>
                </div>
                
                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div className="flex flex-col items-center group/item">
                    <div className="bg-gradient-to-br from-orange-500/20 to-transparent p-3 rounded-lg mb-2">
                      <FaHtml5 className="text-4xl text-orange-500 transform group-hover/item:scale-110 transition-transform" />
                    </div>
                    <span className="text-sm text-gray-300 group-hover/item:text-orange-400 transition-colors">HTML5</span>
                  </div>
                  
                  <div className="flex flex-col items-center group/item">
                    <div className="bg-gradient-to-br from-blue-500/20 to-transparent p-3 rounded-lg mb-2">
                      <FaCss3Alt className="text-4xl text-blue-500 transform group-hover/item:scale-110 transition-transform" />
                    </div>
                    <span className="text-sm text-gray-300 group-hover/item:text-blue-400 transition-colors">CSS3</span>
                  </div>
                  
                  <div className="flex flex-col items-center group/item">
                    <div className="bg-gradient-to-br from-yellow-500/20 to-transparent p-3 rounded-lg mb-2">
                      <FaJs className="text-4xl text-yellow-400 transform group-hover/item:scale-110 transition-transform" />
                    </div>
                    <span className="text-sm text-gray-300 group-hover/item:text-yellow-300 transition-colors">JavaScript</span>
                  </div>
                  
                  <div className="flex flex-col items-center group/item">
                    <div className="bg-gradient-to-br from-cyan-500/20 to-transparent p-3 rounded-lg mb-2">
                      <SiTailwindcss className="text-4xl text-cyan-400 transform group-hover/item:scale-110 transition-transform" />
                    </div>
                    <span className="text-sm text-gray-300 group-hover/item:text-cyan-300 transition-colors">Tailwind</span>
                  </div>
                </div>
                
                <div className="mt-auto pt-2 border-t border-purple-500/20">
                  <p className="text-xs text-gray-400">Advanced UI development with responsive design principles</p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="bg-gradient-to-br from-blue-900/40 to-blue-900/20 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-blue-500/40 hover:border-blue-500/80 transition-all duration-500 group h-full flex flex-col min-h-[300px] transform hover:-translate-y-2">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">React</h4>
                  <span className="text-xs bg-blue-600/60 text-blue-100 px-3 py-1 rounded-full font-semibold">Framework</span>
                </div>
                
                <div className="flex flex-col items-center mb-6">
                  <div className="bg-gradient-to-br from-blue-600/40 to-cyan-600/20 p-6 rounded-2xl mb-4 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all duration-500">
                    <FaReact className="text-6xl text-blue-400 animate-spin-slow transform group-hover:scale-110 transition-transform" />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="bg-blue-600/40 rounded-lg py-2 px-3 text-xs text-center text-blue-200 font-semibold border border-blue-500/40 hover:border-blue-500/80 transition-colors">Hooks</div>
                  <div className="bg-blue-600/40 rounded-lg py-2 px-3 text-xs text-center text-blue-200 font-semibold border border-blue-500/40 hover:border-blue-500/80 transition-colors">Context API</div>
                  <div className="bg-blue-600/40 rounded-lg py-2 px-3 text-xs text-center text-blue-200 font-semibold border border-blue-500/40 hover:border-blue-500/80 transition-colors">State</div>
                  <div className="bg-blue-600/40 rounded-lg py-2 px-3 text-xs text-center text-blue-200 font-semibold border border-blue-500/40 hover:border-blue-500/80 transition-colors">Effects</div>
                </div>
                
                <div className="mt-auto pt-4 border-t border-blue-500/20">
                  <p className="text-sm text-gray-400">Building interactive UI components and SPAs</p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.5}>
              <div className="bg-gradient-to-br from-pink-900/40 to-pink-900/20 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-pink-500/40 hover:border-pink-500/80 transition-all duration-500 group h-full flex flex-col min-h-[300px] transform hover:-translate-y-2">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-400">UI/UX Design</h4>
                  <span className="text-xs bg-pink-600/60 text-pink-100 px-3 py-1 rounded-full font-semibold">Creative</span>
                </div>
                
                <div className="flex flex-col items-center mb-6">
                  <div className="bg-gradient-to-br from-pink-600/40 to-rose-600/20 p-6 rounded-2xl mb-4 group-hover:shadow-[0_0_20px_rgba(236,72,153,0.4)] transition-all duration-500">
                    <FaFigma className="text-6xl text-pink-400 transform group-hover:scale-110 transition-transform" />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="bg-pink-600/40 rounded-lg py-2 px-3 text-xs text-center text-pink-200 font-semibold border border-pink-500/40 hover:border-pink-500/80 transition-colors">Wireframing</div>
                  <div className="bg-pink-600/40 rounded-lg py-2 px-3 text-xs text-center text-pink-200 font-semibold border border-pink-500/40 hover:border-pink-500/80 transition-colors">Prototyping</div>
                  <div className="bg-pink-600/40 rounded-lg py-2 px-3 text-xs text-center text-pink-200 font-semibold border border-pink-500/40 hover:border-pink-500/80 transition-colors">UI Design</div>
                  <div className="bg-pink-600/40 rounded-lg py-2 px-3 text-xs text-center text-pink-200 font-semibold border border-pink-500/40 hover:border-pink-500/80 transition-colors">UX Research</div>
                </div>
                
                <div className="mt-auto pt-4 border-t border-pink-500/20">
                  <p className="text-sm text-gray-400">Creating intuitive and visually appealing interfaces</p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.6}>
              <div className="bg-gradient-to-br from-green-900/40 to-green-900/20 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-green-500/40 hover:border-green-500/80 transition-all duration-500 group h-full flex flex-col min-h-[300px] transform hover:-translate-y-2">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">Backend</h4>
                  <span className="text-xs bg-green-600/60 text-green-100 px-3 py-1 rounded-full font-semibold">Server-side</span>
                </div>
                
                <div className="flex justify-center gap-6 mb-6">
                  <div className="flex flex-col items-center group/item">
                    <div className="bg-gradient-to-br from-indigo-600/40 to-purple-600/20 p-3 rounded-xl mb-3 group-hover/item:shadow-[0_0_12px_rgba(99,102,241,0.4)] transition-all">
                      <FaPhp className="text-4xl text-indigo-400 transform group-hover/item:scale-110 transition-transform" />
                    </div>
                    <span className="text-sm text-gray-300 group-hover/item:text-indigo-300 transition-colors font-semibold">PHP</span>
                  </div>
                  
                  <div className="flex flex-col items-center group/item">
                    <div className="bg-gradient-to-br from-red-600/40 to-orange-600/20 p-3 rounded-xl mb-3 group-hover/item:shadow-[0_0_12px_rgba(239,68,68,0.4)] transition-all">
                      <FaLaravel className="text-4xl text-red-400 transform group-hover/item:scale-110 transition-transform" />
                    </div>
                    <span className="text-sm text-gray-300 group-hover/item:text-red-300 transition-colors font-semibold">Laravel</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="bg-green-600/40 rounded-lg py-2 px-3 text-xs text-center text-green-200 font-semibold border border-green-500/40 hover:border-green-500/80 transition-colors">REST APIs</div>
                  <div className="bg-green-600/40 rounded-lg py-2 px-3 text-xs text-center text-green-200 font-semibold border border-green-500/40 hover:border-green-500/80 transition-colors">MVC Pattern</div>
                  <div className="bg-green-600/40 rounded-lg py-2 px-3 text-xs text-center text-green-200 font-semibold border border-green-500/40 hover:border-green-500/80 transition-colors">Authentication</div>
                  <div className="bg-green-600/40 rounded-lg py-2 px-3 text-xs text-center text-green-200 font-semibold border border-green-500/40 hover:border-green-500/80 transition-colors">Server Logic</div>
                </div>
                
                <div className="mt-auto pt-4 border-t border-green-500/20">
                  <p className="text-sm text-gray-400">API development and server-side application logic</p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.7}>
              <div className="bg-gradient-to-br from-yellow-900/40 to-yellow-900/20 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-yellow-500/40 hover:border-yellow-500/80 transition-all duration-500 group h-full flex flex-col min-h-[300px] transform hover:-translate-y-2">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-400">Database</h4>
                  <span className="text-xs bg-yellow-600/60 text-yellow-100 px-3 py-1 rounded-full font-semibold">Data Storage</span>
                </div>
                
                <div className="flex justify-center gap-6 mb-6">
                  <div className="flex flex-col items-center group/item">
                    <div className="bg-gradient-to-br from-green-600/40 to-emerald-600/20 p-3 rounded-xl mb-3 group-hover/item:shadow-[0_0_12px_rgba(34,197,94,0.4)] transition-all">
                      <SiMongodb className="text-4xl text-green-400 transform group-hover/item:scale-110 transition-transform" />
                    </div>
                    <span className="text-sm text-gray-300 group-hover/item:text-green-300 transition-colors font-semibold">MongoDB</span>
                  </div>
                  
                  <div className="flex flex-col items-center group/item">
                    <div className="bg-gradient-to-br from-blue-600/40 to-cyan-600/20 p-3 rounded-xl mb-3 group-hover/item:shadow-[0_0_12px_rgba(59,130,246,0.4)] transition-all">
                      <svg className="w-10 h-10 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9.452 19.737H6.958V5.13h2.494v14.607Z"/>
                        <path d="M17.748 6.04a5.851 5.851 0 0 0-2.483.976v-.976h-2.494v13.697h2.494v-7.97c0-1.29 1.22-2.983 2.984-2.983 1.712 0 2.053 1.307 2.053 2.962v7.99h2.494v-8.924c0-2.763-1.693-4.772-5.048-4.772Z"/>
                        <path d="M4.745 18.828h.035a1.823 1.823 0 1 0-.035 0Z"/>
                      </svg>
                    </div>
                    <span className="text-sm text-gray-300 group-hover/item:text-blue-300 transition-colors font-semibold">MySQL</span>
                  </div>
                  
                  <div className="flex flex-col items-center group/item">
                    <div className="bg-gradient-to-br from-red-600/40 to-orange-600/20 p-3 rounded-xl mb-3 group-hover/item:shadow-[0_0_12px_rgba(239,68,68,0.4)] transition-all">
                      <SiOracle className="text-4xl text-red-400 transform group-hover/item:scale-110 transition-transform" />
                    </div>
                    <span className="text-sm text-gray-300 group-hover/item:text-red-300 transition-colors font-semibold">Oracle DB</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="bg-yellow-600/40 rounded-lg py-2 px-3 text-xs text-center text-yellow-200 font-semibold border border-yellow-500/40 hover:border-yellow-500/80 transition-colors">SQL</div>
                  <div className="bg-yellow-600/40 rounded-lg py-2 px-3 text-xs text-center text-yellow-200 font-semibold border border-yellow-500/40 hover:border-yellow-500/80 transition-colors">NoSQL</div>
                  <div className="bg-yellow-600/40 rounded-lg py-2 px-3 text-xs text-center text-yellow-200 font-semibold border border-yellow-500/40 hover:border-yellow-500/80 transition-colors">Data Modeling</div>
                  <div className="bg-yellow-600/40 rounded-lg py-2 px-3 text-xs text-center text-yellow-200 font-semibold border border-yellow-500/40 hover:border-yellow-500/80 transition-colors">CRUD Operations</div>
                </div>
                
                <div className="mt-auto pt-4 border-t border-yellow-500/20">
                  <p className="text-sm text-gray-400">Working with both relational and document databases</p>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.8}>
              <div className="bg-gradient-to-br from-purple-900/40 to-purple-900/20 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-purple-500/40 hover:border-purple-500/80 transition-all duration-500 group h-full flex flex-col min-h-[300px] transform hover:-translate-y-2">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Tools & Others</h4>
                  <span className="text-xs bg-purple-600/60 text-purple-100 px-3 py-1 rounded-full font-semibold">Dev Ops</span>
                </div>
                
                <div className="grid grid-cols-3 gap-3 mb-6">
                  <div className="bg-purple-600/40 rounded-lg py-2 px-2 text-xs text-center text-purple-200 font-semibold border border-purple-500/40 hover:border-purple-500/80 transition-colors">Git</div>
                  <div className="bg-purple-600/40 rounded-lg py-2 px-2 text-xs text-center text-purple-200 font-semibold border border-purple-500/40 hover:border-purple-500/80 transition-colors">GitHub</div>
                  <div className="bg-purple-600/40 rounded-lg py-2 px-2 text-xs text-center text-purple-200 font-semibold border border-purple-500/40 hover:border-purple-500/80 transition-colors">VS Code</div>
                  <div className="bg-purple-600/40 rounded-lg py-2 px-2 text-xs text-center text-purple-200 font-semibold border border-purple-500/40 hover:border-purple-500/80 transition-colors">npm</div>
                  <div className="bg-purple-600/40 rounded-lg py-2 px-2 text-xs text-center text-purple-200 font-semibold border border-purple-500/40 hover:border-purple-500/80 transition-colors">Vite</div>
                  <div className="bg-purple-600/40 rounded-lg py-2 px-2 text-xs text-center text-purple-200 font-semibold border border-purple-500/40 hover:border-purple-500/80 transition-colors">Vercel</div>
                </div>
                
                <div className="mt-auto pt-4 border-t border-purple-500/20">
                  <p className="text-sm text-gray-400">Development workflow and deployment tools</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>


        {/* Interests Section */}
        <div className="mt-24 text-center px-4">
          <AnimatedSection delay={0.2}>
            <div className="inline-block mb-4">
              <h3 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400 mb-4">
                Interests
              </h3>
              <div className="h-1.5 bg-gradient-to-r from-transparent via-pink-500 to-transparent max-w-2xl mx-auto"></div>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 mt-12">
              {/* Interest Cards */}
              {[
              { title: "Web Development", icon: "🌐" },
              { title: "UI/UX Designing", icon: "🎨" },
              { title: "Machine Learning", icon: "🤖" },
              { title: "Cyber Security", icon: "🔐" },
              { title: "Gaming", icon: "🎮" },
              { title: "Music", icon: "🎵" },
              { title: "Cricket", icon: "🏏" },
              { title: "Singing", icon: "🎤" },
              { title: "Photography", icon: "📷" },
              { title: "Videography", icon: "🎥" }
              ].map((interest, index) => (
                <AnimatedSection key={index} delay={0.3 + (index * 0.05)}>
                  <div
                      className="bg-gradient-to-br from-purple-900/40 to-purple-900/20 backdrop-blur-md p-6 rounded-2xl shadow-lg transform hover:-translate-y-2 transition-all duration-500 flex flex-col items-center border border-purple-500/40 hover:border-purple-500/80 group"
                  >
                      <span className="text-5xl mb-3 transform group-hover:scale-110 transition-transform duration-300">{interest.icon}</span>
                      <h4 className="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors">{interest.title}</h4>
                  </div>
                </AnimatedSection>
              ))}
          </div>
        </div>


        {/* Button */}
        {/* <div className="mt-8">
          <a href="#projects" className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 transform hover:scale-105">
            View My Work
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default About;
