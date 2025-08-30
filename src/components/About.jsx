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
      <div className="max-w-4xl text-center animate-fade-up">
        {/* About Me Section */}
        <AnimatedSection delay={0.1}>
          <div className="w-full text-center py-12">
              <h2 className="text-5xl font-extrabold text-purple-500 mb-2">About Me</h2>
              <div className="w-20 h-1 bg-purple-500 mx-auto"></div>
          </div>
          <p className="text-lg text-gray-300 leading-relaxed">
            I am Subhadeep Maity, a passionate web developer dedicated to crafting beautiful and functional websites.
            My goal is to transform ideas into reality through modern technologies and innovative solutions.
          </p>
          <p className="mt-4 text-lg text-gray-300">
            With experience in <span className="text-purple-400 font-semibold">React, Tailwind CSS, and JavaScript</span>,
            I love building responsive and dynamic applications.
          </p>
        </AnimatedSection>

       {/* Education Section */}
        <div className="mt-16 text-center px-4">
            <AnimatedSection delay={0.3}>
              <h3 className="text-4xl font-extrabold text-white mb-10 tracking-wide drop-shadow-lg">
                Education
                <div className="w-full h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 mt-2"></div>
              </h3>
            </AnimatedSection>

            <div className="grid md:grid-cols-3 gap-10">
                
                {/* BCA Card */}
                <AnimatedSection delay={0.4}>
                  <div className="relative group rounded-xl bg-[#111527] border border-[#1a1f38] overflow-hidden shadow-lg h-full flex flex-col">
                      {/* Top purple glowing border */}
                      <div className="absolute top-0 left-0 right-0 h-[2px] bg-purple-600 shadow-[0_0_10px_3px_rgba(147,51,234,0.5)] z-10"></div>
                      
                      {/* Left-right glowing borders */}
                      <div className="absolute top-0 left-0 bottom-0 w-[2px] bg-purple-600 shadow-[0_0_10px_3px_rgba(147,51,234,0.5)] z-10"></div>
                      <div className="absolute top-0 right-0 bottom-0 w-[2px] bg-purple-600 shadow-[0_0_10px_3px_rgba(147,51,234,0.5)] z-10"></div>

                      {/* Bottom glowing border */}
                      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-purple-600 shadow-[0_0_10px_3px_rgba(147,51,234,0.5)] z-10"></div>
                      
                      {/* University Logo */}
                      <div className="mt-8 mb-4 flex justify-center">
                          <div className="w-24 h-24 rounded-full overflow-hidden bg-[#151a33] border-2 border-gray-800 p-0.5">
                              <img 
                                  src={university} 
                                  alt="University" 
                                  className="w-full h-full object-contain rounded-full"
                              />
                          </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 px-5 pb-8">
                          <h4 className="text-3xl font-bold text-white mb-1">
                              Bachelor of<br />Computer<br />Applications
                          </h4>
                          <h5 className="text-2xl font-bold text-purple-500 mb-4">(BCA)</h5>
                          
                          <div className="flex gap-2 justify-center mb-5">
                              <span className="px-4 py-2 text-sm font-medium bg-[#1a1f38] text-white rounded-full">2023 - Present</span>
                              <span className="px-4 py-2 text-sm font-medium bg-[#1a1f38] text-purple-400 rounded-full">Ongoing</span>
                          </div>
                          
                          <p className="text-gray-300 text-sm mb-6">
                              @ Maulana Abul Kalam Azad<br />University of Technology
                          </p>
                          
                          <div className="bg-[#151a33] rounded-lg p-4">
                              <h5 className="text-lg font-bold text-purple-400 mb-3">Focus Areas:</h5>
                              <div className="grid grid-cols-2 gap-2">
                                  <span className="px-3 py-2 text-sm bg-[#1a1f38] text-white rounded">Web Development</span>
                                  <span className="px-3 py-2 text-sm bg-[#1a1f38] text-white rounded">Data Structures</span>
                                  <span className="px-3 py-2 text-sm bg-[#1a1f38] text-white rounded">AI & Machine Learning</span>
                                  <span className="px-3 py-2 text-sm bg-[#1a1f38] text-white rounded">Cloud Computing</span>
                              </div>
                          </div>
                      </div>
                  </div>
                </AnimatedSection>

                {/* HS Card */}
                <AnimatedSection delay={0.5}>
                  <div className="relative group rounded-xl bg-[#111527] border border-[#1a1f38] overflow-hidden shadow-lg h-full flex flex-col">
                      {/* Top blue glowing border */}
                      <div className="absolute top-0 left-0 right-0 h-[2px] bg-blue-600 shadow-[0_0_10px_3px_rgba(37,99,235,0.5)] z-10"></div>
                      
                      {/* Left-right glowing borders */}
                      <div className="absolute top-0 left-0 bottom-0 w-[2px] bg-blue-600 shadow-[0_0_10px_3px_rgba(37,99,235,0.5)] z-10"></div>
                      <div className="absolute top-0 right-0 bottom-0 w-[2px] bg-blue-600 shadow-[0_0_10px_3px_rgba(37,99,235,0.5)] z-10"></div>

                      {/* Bottom glowing border */}
                      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-blue-600 shadow-[0_0_10px_3px_rgba(37,99,235,0.5)] z-10"></div>
                      
                      {/* School Logo */}
                      <div className="mt-8 mb-4 flex justify-center">
                          <div className="w-24 h-24 rounded-full overflow-hidden bg-[#151a33] border-2 border-gray-800 p-0.5">
                              <img 
                                  src={HS} 
                                  alt="School" 
                                  className="w-full h-full object-contain rounded-full"
                              />
                          </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 px-5 pb-8">
                          <h4 className="text-3xl font-bold text-white mb-1">
                              Higher<br />Secondary<br />Education
                          </h4>
                          <h5 className="text-2xl font-bold text-blue-500 mb-4">(12th)</h5>
                          
                          <div className="flex gap-2 justify-center mb-5">
                              <span className="px-4 py-2 text-sm font-medium bg-[#1a1f38] text-white rounded-full">Completed 2023</span>
                              <span className="px-4 py-2 text-sm font-medium bg-[#1a1f38] text-blue-400 rounded-full">80% Marks</span>
                          </div>
                          
                          <p className="text-gray-300 text-sm mb-6">
                              @ Ganeswarpur D.H High School<br />
                              <span className="text-xs text-gray-400">(West Bengal Council of Higher Secondary Education)</span>
                          </p>
                          
                          <div className="bg-[#151a33] rounded-lg p-4">
                              <h5 className="text-lg font-bold text-blue-400 mb-3">Specializations:</h5>
                              <div className="grid grid-cols-1 gap-2">
                                  <span className="px-3 py-2 text-sm bg-[#1a1f38] text-white rounded">Bio-Science</span>
                                  <span className="px-3 py-2 text-sm bg-[#1a1f38] text-white rounded">Computer Application</span>
                                  <span className="px-3 py-2 text-sm bg-[#1a1f38] text-white rounded">Mathematics</span>
                              </div>
                          </div>
                      </div>
                  </div>
                </AnimatedSection>

                {/* Madhyamik Card */}
                <AnimatedSection delay={0.6}>
                  <div className="relative group rounded-xl bg-[#111527] border border-[#1a1f38] overflow-hidden shadow-lg h-full flex flex-col">
                      {/* Top green glowing border */}
                      <div className="absolute top-0 left-0 right-0 h-[2px] bg-green-600 shadow-[0_0_10px_3px_rgba(22,163,74,0.5)] z-10"></div>
                      
                      {/* Left-right glowing borders */}
                      <div className="absolute top-0 left-0 bottom-0 w-[2px] bg-green-600 shadow-[0_0_10px_3px_rgba(22,163,74,0.5)] z-10"></div>
                      <div className="absolute top-0 right-0 bottom-0 w-[2px] bg-green-600 shadow-[0_0_10px_3px_rgba(22,163,74,0.5)] z-10"></div>

                      {/* Bottom glowing border */}
                      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-green-600 shadow-[0_0_10px_3px_rgba(22,163,74,0.5)] z-10"></div>
                      
                      {/* School Logo */}
                      <div className="mt-8 mb-4 flex justify-center">
                          <div className="w-24 h-24 rounded-full overflow-hidden bg-[#151a33] border-2 border-gray-800 p-0.5">
                              <img 
                                  src={MP} 
                                  alt="School" 
                                  className="w-full h-full object-contain rounded-full"
                              />
                          </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 px-5 pb-8">
                          <h4 className="text-3xl font-bold text-white mb-1">
                              Secondary<br />Education
                          </h4>
                          <h5 className="text-2xl font-bold text-green-500 mb-4">(10th)</h5>
                          
                          <div className="flex gap-2 justify-center mb-5">
                              <span className="px-4 py-2 text-sm font-medium bg-[#1a1f38] text-white rounded-full">Completed 2021</span>
                              <span className="px-4 py-2 text-sm font-medium bg-[#1a1f38] text-green-400 rounded-full">85% Marks</span>
                          </div>
                          
                          <p className="text-gray-300 text-sm mb-6">
                              @ Ganeswarpur D.H High School<br />
                              <span className="text-xs text-gray-400">(West Bengal Board of Secondary Education)</span>
                          </p>
                          
                          <div className="bg-[#151a33] rounded-lg p-4">
                              <h5 className="text-lg font-bold text-green-400 mb-3">Key Achievements:</h5>
                              <div className="grid grid-cols-1 gap-2">
                                  <span className="px-3 py-2 text-sm bg-[#1a1f38] text-white rounded">Science</span>
                                  <span className="px-3 py-2 text-sm bg-[#1a1f38] text-white rounded">Mathematics</span>
                                  <span className="px-3 py-2 text-sm bg-[#1a1f38] text-white rounded">Computer Science</span>
                              </div>
                          </div>
                      </div>
                  </div>
                </AnimatedSection>
                
            </div>
        </div>

        {/* Skills Section */}
        <div className="mt-16 text-center px-4">
          <AnimatedSection delay={0.2}>
            <h3 className="text-4xl font-extrabold text-purple-400 mb-14 tracking-wide drop-shadow-lg">
              🛠️ Skills & Technologies
            </h3>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            
            <AnimatedSection delay={0.3}>
              <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/90 backdrop-blur-sm p-6 rounded-xl shadow-xl border border-purple-500/40 hover:border-purple-500 transition-all duration-300 group h-full flex flex-col min-h-[300px] transform hover:translate-y-[-5px]">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-2xl font-bold text-purple-400">Frontend</h4>
                  <span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full">Core Skills</span>
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
              <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/90 backdrop-blur-sm p-6 rounded-xl shadow-xl border border-blue-500/40 hover:border-blue-500 transition-all duration-300 group h-full flex flex-col min-h-[300px] transform hover:translate-y-[-5px]">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-2xl font-bold text-blue-400">React</h4>
                  <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded-full">Framework</span>
                </div>
                
                <div className="flex flex-col items-center mb-6">
                  <div className="bg-gradient-to-br from-blue-500/20 to-transparent p-6 rounded-full mb-3 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-all duration-500">
                    <FaReact className="text-6xl text-blue-400 animate-spin-slow transform group-hover:scale-110 transition-transform" />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-blue-500/10 rounded-lg py-1 px-2 text-xs text-center text-blue-300">Hooks</div>
                  <div className="bg-blue-500/10 rounded-lg py-1 px-2 text-xs text-center text-blue-300">Context API</div>
                  <div className="bg-blue-500/10 rounded-lg py-1 px-2 text-xs text-center text-blue-300">State</div>
                  <div className="bg-blue-500/10 rounded-lg py-1 px-2 text-xs text-center text-blue-300">Effects</div>
                </div>
                
                <div className="mt-auto pt-2 border-t border-blue-500/20">
                  <p className="text-xs text-gray-400">Building interactive UI components and SPAs</p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.5}>
              <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/90 backdrop-blur-sm p-6 rounded-xl shadow-xl border border-pink-500/40 hover:border-pink-500 transition-all duration-300 group h-full flex flex-col min-h-[300px] transform hover:translate-y-[-5px]">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-2xl font-bold text-pink-400">UI/UX Design</h4>
                  <span className="text-xs bg-pink-500/20 text-pink-300 px-2 py-1 rounded-full">Creative</span>
                </div>
                
                <div className="flex flex-col items-center mb-6">
                  <div className="bg-gradient-to-br from-pink-500/20 to-transparent p-6 rounded-full mb-3 group-hover:shadow-[0_0_15px_rgba(236,72,153,0.5)] transition-all duration-500">
                    <FaFigma className="text-6xl text-pink-400 transform group-hover:scale-110 transition-transform" />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-pink-500/10 rounded-lg py-1 px-2 text-xs text-center text-pink-300">Wireframing</div>
                  <div className="bg-pink-500/10 rounded-lg py-1 px-2 text-xs text-center text-pink-300">Prototyping</div>
                  <div className="bg-pink-500/10 rounded-lg py-1 px-2 text-xs text-center text-pink-300">UI Design</div>
                  <div className="bg-pink-500/10 rounded-lg py-1 px-2 text-xs text-center text-pink-300">UX Research</div>
                </div>
                
                <div className="mt-auto pt-2 border-t border-pink-500/20">
                  <p className="text-xs text-gray-400">Creating intuitive and visually appealing interfaces</p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.6}>
              <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/90 backdrop-blur-sm p-6 rounded-xl shadow-xl border border-green-500/40 hover:border-green-500 transition-all duration-300 group h-full flex flex-col min-h-[300px] transform hover:translate-y-[-5px]">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-2xl font-bold text-green-400">Backend</h4>
                  <span className="text-xs bg-green-500/20 text-green-300 px-2 py-1 rounded-full">Server-side</span>
                </div>
                
                <div className="flex justify-center gap-6 mb-6">
                  <div className="flex flex-col items-center group/item">
                    <div className="bg-gradient-to-br from-indigo-500/20 to-transparent p-3 rounded-lg mb-2">
                      <FaPhp className="text-4xl text-indigo-500 transform group-hover/item:scale-110 transition-transform" />
                    </div>
                    <span className="text-sm text-gray-300 group-hover/item:text-indigo-400 transition-colors">PHP</span>
                  </div>
                  
                  <div className="flex flex-col items-center group/item">
                    <div className="bg-gradient-to-br from-red-500/20 to-transparent p-3 rounded-lg mb-2">
                      <FaLaravel className="text-4xl text-red-500 transform group-hover/item:scale-110 transition-transform" />
                    </div>
                    <span className="text-sm text-gray-300 group-hover/item:text-red-400 transition-colors">Laravel</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-green-500/10 rounded-lg py-1 px-2 text-xs text-center text-green-300">REST APIs</div>
                  <div className="bg-green-500/10 rounded-lg py-1 px-2 text-xs text-center text-green-300">MVC Pattern</div>
                  <div className="bg-green-500/10 rounded-lg py-1 px-2 text-xs text-center text-green-300">Authentication</div>
                  <div className="bg-green-500/10 rounded-lg py-1 px-2 text-xs text-center text-green-300">Server Logic</div>
                </div>
                
                <div className="mt-auto pt-2 border-t border-green-500/20">
                  <p className="text-xs text-gray-400">API development and server-side application logic</p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.7}>
              <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/90 backdrop-blur-sm p-6 rounded-xl shadow-xl border border-yellow-500/40 hover:border-yellow-500 transition-all duration-300 group h-full flex flex-col min-h-[300px] transform hover:translate-y-[-5px]">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-2xl font-bold text-yellow-400">Database</h4>
                  <span className="text-xs bg-yellow-500/20 text-yellow-300 px-2 py-1 rounded-full">Data Storage</span>
                </div>
                
                <div className="flex justify-center gap-6 mb-6">
                  <div className="flex flex-col items-center group/item">
                    <div className="bg-gradient-to-br from-green-500/20 to-transparent p-3 rounded-lg mb-2">
                      <SiMongodb className="text-4xl text-green-500 transform group-hover/item:scale-110 transition-transform" />
                    </div>
                    <span className="text-sm text-gray-300 group-hover/item:text-green-400 transition-colors">MongoDB</span>
                  </div>
                  
                  <div className="flex flex-col items-center group/item">
                    <div className="bg-gradient-to-br from-blue-500/20 to-transparent p-3 rounded-lg mb-2">
                      <svg className="w-10 h-10 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9.452 19.737H6.958V5.13h2.494v14.607Z"/>
                        <path d="M17.748 6.04a5.851 5.851 0 0 0-2.483.976v-.976h-2.494v13.697h2.494v-7.97c0-1.29 1.22-2.983 2.984-2.983 1.712 0 2.053 1.307 2.053 2.962v7.99h2.494v-8.924c0-2.763-1.693-4.772-5.048-4.772Z"/>
                        <path d="M4.745 18.828h.035a1.823 1.823 0 1 0-.035 0Z"/>
                      </svg>
                    </div>
                    <span className="text-sm text-gray-300 group-hover/item:text-blue-400 transition-colors">MySQL</span>
                  </div>
                  
                  <div className="flex flex-col items-center group/item">
                    <div className="bg-gradient-to-br from-red-500/20 to-transparent p-3 rounded-lg mb-2">
                      <SiOracle className="text-4xl text-red-500 transform group-hover/item:scale-110 transition-transform" />
                    </div>
                    <span className="text-sm text-gray-300 group-hover/item:text-red-400 transition-colors">Oracle DB</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-yellow-500/10 rounded-lg py-1 px-2 text-xs text-center text-yellow-300">SQL</div>
                  <div className="bg-yellow-500/10 rounded-lg py-1 px-2 text-xs text-center text-yellow-300">NoSQL</div>
                  <div className="bg-yellow-500/10 rounded-lg py-1 px-2 text-xs text-center text-yellow-300">Data Modeling</div>
                  <div className="bg-yellow-500/10 rounded-lg py-1 px-2 text-xs text-center text-yellow-300">CRUD Operations</div>
                </div>
                
                <div className="mt-auto pt-2 border-t border-yellow-500/20">
                  <p className="text-xs text-gray-400">Working with both relational and document databases</p>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.8}>
              <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/90 backdrop-blur-sm p-6 rounded-xl shadow-xl border border-purple-500/40 hover:border-purple-500 transition-all duration-300 group h-full flex flex-col min-h-[300px] transform hover:translate-y-[-5px]">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-2xl font-bold text-purple-400">Tools & Others</h4>
                  <span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full">Dev Ops</span>
                </div>
                
                <div className="grid grid-cols-3 gap-2 mb-6">
                  <div className="bg-purple-500/10 rounded-lg py-2 px-2 text-sm text-center text-purple-300">Git</div>
                  <div className="bg-purple-500/10 rounded-lg py-2 px-2 text-sm text-center text-purple-300">GitHub</div>
                  <div className="bg-purple-500/10 rounded-lg py-2 px-2 text-sm text-center text-purple-300">VS Code</div>
                  <div className="bg-purple-500/10 rounded-lg py-2 px-2 text-sm text-center text-purple-300">npm</div>
                  <div className="bg-purple-500/10 rounded-lg py-2 px-2 text-sm text-center text-purple-300">Vite</div>
                  <div className="bg-purple-500/10 rounded-lg py-2 px-2 text-sm text-center text-purple-300">Vercel</div>
                </div>
                
                <div className="mt-auto pt-2 border-t border-purple-500/20">
                  <p className="text-xs text-gray-400">Development workflow and deployment tools</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>


        {/* Interests Section */}
        <div className="mt-10 text-center px-4">
          <AnimatedSection delay={0.2}>
            <h3 className="text-3xl font-bold text-purple-500 mb-6">Interests</h3>
          </AnimatedSection>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
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
                      className="bg-gray-800 p-4 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 flex flex-col items-center"
                  >
                      <span className="text-4xl">{interest.icon}</span>
                      <h4 className="text-lg font-semibold text-white mt-2">{interest.title}</h4>
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
