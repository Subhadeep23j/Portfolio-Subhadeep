import React from 'react';
import university from '../assets/univ.png';
import HS from '../assets/hs.webp';
import MP from '../assets/mp.png';
import './About.css';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaFigma, FaNodeJs, FaPhp, FaLaravel } from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiMongodb, SiOracle } from "react-icons/si";

const About = () => {
  return (
    <section id="about" className="min-h-screen flex flex-col items-center justify-start bg-gray-900 text-white px-6 pt-8">
      <div className="max-w-4xl text-center">
        {/* About Me Section */}
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

       {/* Education Section */}
        <div className="mt-16 text-center px-4">
            <h3 className="text-4xl font-extrabold text-purple-400 mb-14 tracking-wide drop-shadow-lg">
            🎓Education
            </h3>

            <div className="grid md:grid-cols-3 gap-10">
                
                {/* BCA Card */}
                <div className="relative group p-8 rounded-2xl bg-white/10 backdrop-blur-md shadow-2xl border border-purple-500 transition-transform duration-300 hover:scale-105">
                    {/* University Logo */}
                    <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
                        <img 
                            src={university} 
                            alt="University" 
                            className="w-24 h-24 object-cover rounded-full border-4 border-purple-400 shadow-lg"
                        />
                    </div>

                    {/* Content */}
                    <div className="mt-10">
                        <h4 className="text-2xl font-bold text-white drop-shadow-md">Bachelor of Computer Applications (BCA)</h4>
                        <p className="text-gray-400 mt-2 text-lg">🎓 Maulana Abul Kalam Azad University of Technology</p>
                        <p className="text-gray-500 text-sm">2023 - Present</p>
                        <p className="mt-3 text-gray-300 text-md leading-relaxed">
                            Specializing in Web Development, Data Structures, AI & Machine Learning.
                        </p>
                    </div>
                </div>

                {/* HS Card */}
                <div className="relative group p-8 rounded-2xl bg-white/10 backdrop-blur-md shadow-2xl border border-blue-500 transition-transform duration-300 hover:scale-105">
                    {/* School Logo */}
                    <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
                        <img 
                            src={HS} 
                            alt="School" 
                            className="w-24 h-24 object-cover rounded-full border-4 border-blue-400 shadow-lg"
                        />
                    </div>

                    {/* Content */}
                    <div className="mt-10">
                        <h4 className="text-2xl font-bold text-white drop-shadow-md">Higher Secondary Education (12th)</h4>
                        <p className="text-gray-400 mt-2 text-lg">🏫 Ganeswarpur D.H High School</p>
                        <p className="text-gray-400 mt-2 text-lg">West Bengal Council of Higher Secondary Education (WBCHSE)</p>
                        <p className="text-gray-500 text-sm">Completed in 2023</p>
                        <p className="mt-3 text-gray-300 text-md leading-relaxed">
                            Passed with 80% marks in Bio-Science with Computer Application Stream.
                        </p>      
                    </div>
                </div>

                {/* Madhyamik Card */}
                <div className="relative group p-8 rounded-2xl bg-white/10 backdrop-blur-md shadow-2xl border border-green-500 transition-transform duration-300 hover:scale-105">
                    {/* School Logo */}
                    <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
                        <img 
                            src={MP} 
                            alt="School" 
                            className="w-24 h-24 object-cover rounded-full border-4 border-green-400 shadow-lg"
                        />
                    </div>

                    {/* Content */}
                    <div className="mt-10">
                        <h4 className="text-2xl font-bold text-white drop-shadow-md">Secondary Education(10th)</h4>
                        <p className="text-gray-400 mt-2 text-lg">🏫 Ganeswarpur D.H High School</p>
                        <p className="text-gray-400 mt-2 text-lg">West Bengal Board of Secondary Education (WBBSE)</p>
                        <p className="text-gray-500 text-sm">Completed in 2021</p>
                        <p className="mt-3 text-gray-300 text-md leading-relaxed">
                            Passed with 85% marks in all subjects.
                        </p>       
                    </div>
                </div>
                
            </div>
        </div>

        {/* Skills Section */}
        <div className="mt-16 text-center px-4">
          <h3 className="text-4xl font-extrabold text-purple-400 mb-14 tracking-wide drop-shadow-lg">
            🛠️ Skills & Technologies
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Frontend Skills */}
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl shadow-xl border border-purple-500/30 hover:border-purple-500 transition-all duration-300 group">
              <h4 className="text-2xl font-bold text-purple-400 mb-4">Frontend</h4>
              <div className="flex flex-wrap gap-4 justify-center mb-6">
                <div className="flex flex-col items-center">
                  <FaHtml5 className="text-4xl text-orange-500 transform group-hover:scale-110 transition-transform" />
                  <span className="text-sm text-gray-400 mt-1">HTML5</span>
                </div>
                <div className="flex flex-col items-center">
                  <FaCss3Alt className="text-4xl text-blue-500 transform group-hover:scale-110 transition-transform" />
                  <span className="text-sm text-gray-400 mt-1">CSS3</span>
                </div>
                <div className="flex flex-col items-center">
                  <FaJs className="text-4xl text-yellow-400 transform group-hover:scale-110 transition-transform" />
                  <span className="text-sm text-gray-400 mt-1">JavaScript</span>
                </div>
                <div className="flex flex-col items-center">
                  <SiTailwindcss className="text-4xl text-cyan-400 transform group-hover:scale-110 transition-transform" />
                  <span className="text-sm text-gray-400 mt-1">Tailwind</span>
                </div>
              </div>
              <div className="w-full bg-gray-700/50 rounded-full h-2">
                <div className="bg-purple-500 h-2 rounded-full transition-all duration-500" style={{ width: '90%' }}></div>
              </div>
              <p className="text-gray-400 mt-2">90% Proficiency</p>
            </div>

            {/* React Development */}
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl shadow-xl border border-blue-500/30 hover:border-blue-500 transition-all duration-300 group">
              <h4 className="text-2xl font-bold text-blue-400 mb-4">React Development</h4>
              <div className="flex flex-wrap gap-4 justify-center mb-6">
                <div className="flex flex-col items-center">
                  <FaReact className="text-4xl text-blue-400 animate-spin-slow transform group-hover:scale-110 transition-transform" />
                  <span className="text-sm text-gray-400 mt-1">React</span>
                </div>
              </div>
              <div className="w-full bg-gray-700/50 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full transition-all duration-500" style={{ width: '75%' }}></div>
              </div>
              <p className="text-gray-400 mt-2">75% Proficiency</p>
            </div>

            {/* UI/UX Design */}
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl shadow-xl border border-pink-500/30 hover:border-pink-500 transition-all duration-300 group">
              <h4 className="text-2xl font-bold text-pink-400 mb-4">UI/UX Design</h4>
              <div className="flex flex-wrap gap-4 justify-center mb-6">
                <FaFigma className="text-4xl text-pink-400 transform group-hover:scale-110 transition-transform" />
              </div>
              <div className="w-full bg-gray-700/50 rounded-full h-2">
                <div className="bg-pink-500 h-2 rounded-full transition-all duration-500" style={{ width: '80%' }}></div>
              </div>
              <p className="text-gray-400 mt-2">80% Proficiency</p>
            </div>

            {/* Backend Development */}
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl shadow-xl border border-green-500/30 hover:border-green-500 transition-all duration-300 group">
              <h4 className="text-2xl font-bold text-green-400 mb-4">Backend Development</h4>
              <div className="flex flex-wrap gap-4 justify-center mb-6">
                <div className="flex flex-col items-center">
                  <FaNodeJs className="text-4xl text-green-500 transform group-hover:scale-110 transition-transform" />
                  <span className="text-sm text-gray-400 mt-1">Node.js</span>
                </div>
                <div className="flex flex-col items-center">
                  <SiExpress className="text-4xl text-white transform group-hover:scale-110 transition-transform" />
                  <span className="text-sm text-gray-400 mt-1">Express</span>
                </div>
                <div className="flex flex-col items-center">
                  <FaPhp className="text-4xl text-indigo-500 transform group-hover:scale-110 transition-transform" />
                  <span className="text-sm text-gray-400 mt-1">PHP</span>
                </div>
                <div className="flex flex-col items-center">
                  <FaLaravel className="text-4xl text-red-500 transform group-hover:scale-110 transition-transform" />
                  <span className="text-sm text-gray-400 mt-1">Laravel</span>
                </div>
              </div>
              <div className="w-full bg-gray-700/50 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full transition-all duration-500" style={{ width: '45%' }}></div>
              </div>
              <p className="text-gray-400 mt-2">45% Proficiency</p>
            </div>

            {/* Database */}
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl shadow-xl border border-yellow-500/30 hover:border-yellow-500 transition-all duration-300 group">
              <h4 className="text-2xl font-bold text-yellow-400 mb-4">Database</h4>
              <div className="flex flex-wrap gap-4 justify-center mb-6">
                <SiMongodb className="text-4xl text-green-500 transform group-hover:scale-110 transition-transform" />
                <SiOracle className="text-4xl text-red-500 transform group-hover:scale-110 transition-transform" />
              </div>
              <div className="w-full bg-gray-700/50 rounded-full h-2">
                <div className="bg-yellow-500 h-2 rounded-full transition-all duration-500" style={{ width: '45%' }}></div>
              </div>
              <p className="text-gray-400 mt-2">45% Proficiency</p>
            </div>
          </div>
        </div>


        {/* Interests Section */}
        <div className="mt-10 text-center px-4">
        <h3 className="text-3xl font-bold text-purple-500 mb-6">Interests</h3>
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
            <div
                key={index}
                className="bg-gray-800 p-4 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 flex flex-col items-center"
            >
                <span className="text-4xl">{interest.icon}</span>
                <h4 className="text-lg font-semibold text-white mt-2">{interest.title}</h4>
            </div>
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
