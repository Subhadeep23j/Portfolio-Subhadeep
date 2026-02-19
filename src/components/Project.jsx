import React, { useState } from 'react';
import AnimatedSection from './AnimatedSection';
import { FaGithub, FaExternalLinkAlt, FaCode, FaLaptopCode } from 'react-icons/fa';

const projectsData = [
    { 
        id: 6, 
        title: "College Website", 
        description: "A comprehensive college website for CCLMS with student portal, course information, and admission forms.", 
        tech: ["HTML", "CSS", "JavaScript", "React.js", "Tailwind CSS"], 
        link: "https://subhadeep23j.github.io/CCLMS-Management-College/",
        github: "https://github.com/Subhadeep23j/CCLMS-Management-College",
        image: "https://ik.imagekit.io/phhqetufq/portfolio/clg.png?updatedAt=1756716577386",
        category: "Web"
    },
    { 
        id: 7, 
        title: "Online Voting System", 
        description: "A secure online voting platform with user authentication, real-time results, and an intuitive interface.", 
        tech: ["HTML5", "Tailwind CSS", "PHP", "MYSQL", "JavaScript"],
        link: "https://subhadeep23j.github.io/voting/",
        github: "https://github.com/Subhadeep23j/voting",
        image: "https://ik.imagekit.io/phhqetufq/portfolio/voting.png?updatedAt=1756716710387",
        category: "Web"
    },
    { 
        id: 8, 
        title: "Jeevan Pravaah Blood Bank Management System", 
        description: "A secure online blood bank management system with user authentication, real-time donor matching, and an intuitive interface.", 
        tech: ["Blade", "Tailwind CSS", "Laravel", "MYSQL", "JavaScript"],
        link: "https://jeevanpravaah.free.nf",
        github: "https://github.com/Subhadeep23j/jeevanpravaah-blood-bank",
        image: "https://ik.imagekit.io/t8x8nmobis/bloodBank.png?updatedAt=1762764484853",
        category: "Web"
    }
];

const Projects = () => {
    const [category, setCategory] = useState("All");
    const categories = ["All", "Web", "AI", "Mobile"];
    
    const filteredProjects = category === "All" 
        ? projectsData 
        : projectsData.filter(project => project.category === category);

    return (
        <section id="projects" className="min-h-screen bg-gray-900 text-white px-4 sm:px-6 lg:px-8 pb-16 flex flex-col items-center">
            
            {/* Heading */}
            <AnimatedSection delay={0.2}>
                <div className="w-full text-center py-12">
                    <h2 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-3 pt-10">My Projects</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
                    <p className="text-gray-300 mt-6 max-w-2xl mx-auto">Explore my latest work showcasing my skills in web development and design.</p>
                </div>
            </AnimatedSection>

            {/* Category Filter */}
            <AnimatedSection delay={0.4}>
                <div className="flex flex-wrap justify-center gap-3 mb-10">
                    {categories.map(cat => (
                        <button 
                            key={cat} 
                            onClick={() => setCategory(cat)} 
                            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                                category === cat 
                                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg" 
                                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </AnimatedSection>

            {/* Projects Grid */}
            <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project, index) => (
                    <AnimatedSection delay={0.5 + (index * 0.1)} key={project.id}>
                        <div className="group relative h-full">
                            {/* Card */}
                            <div className="relative w-full h-full bg-gradient-to-br from-gray-900/70 to-gray-950/70 backdrop-blur-md border border-purple-500/30 hover:border-purple-500/70 transition-all duration-500 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl flex flex-col">
                                
                                {/* Image section - smaller height */}
                                <div className="relative h-40 overflow-hidden bg-gray-800">
                                    <img 
                                        src={project.image} 
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950 to-transparent opacity-70"></div>
                                    
                                    {/* Category badge */}
                                    <div className="absolute top-2 right-2">
                                        <span className="px-2.5 py-1 bg-purple-600/80 text-white text-xs font-bold rounded-full border border-purple-400/60">
                                            {project.category}
                                        </span>
                                    </div>
                                </div>
                                
                                {/* Content section */}
                                <div className="p-5 flex-1 flex flex-col">
                                    {/* Title */}
                                    <h3 className="text-lg font-bold text-white mb-2 line-clamp-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all">
                                        {project.title}
                                    </h3>
                                    
                                    {/* Description */}
                                    <p className="text-gray-400 text-xs leading-relaxed mb-3 flex-grow line-clamp-2">
                                        {project.description}
                                    </p>
                                    
                                    {/* Tech stack - horizontal scroll */}
                                    <div className="flex flex-wrap gap-1.5 mb-4 pb-3 border-b border-purple-500/20">
                                        {project.tech.slice(0, 3).map((tech, idx) => (
                                            <span 
                                                key={idx} 
                                                className="px-2 py-0.5 bg-purple-600/40 text-purple-200 rounded text-xs font-semibold border border-purple-400/40 hover:border-purple-400/70 transition-all"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                        {project.tech.length > 3 && (
                                            <span className="px-2 py-0.5 text-purple-300 text-xs font-semibold">+{project.tech.length - 3}</span>
                                        )}
                                    </div>
                                    
                                    {/* Action buttons */}
                                    <div className="flex gap-2">
                                        <a 
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-2 px-3 rounded-lg transition-all duration-300 text-center text-sm shadow-md hover:shadow-purple-500/50 transform hover:scale-105"
                                            title="View on GitHub"
                                        >
                                            Code
                                        </a>
                                        {project.link && (
                                            <a 
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex-1 bg-gray-800 hover:bg-gray-700 border border-purple-500/40 hover:border-purple-500/70 text-white font-bold py-2 px-3 rounded-lg transition-all duration-300 text-center text-sm shadow-md hover:shadow-purple-500/30 transform hover:scale-105"
                                                title="Live Demo"
                                            >
                                               Live Demo
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>
                ))}
            </div>
            
            {projectsData.length === 0 && (
                <AnimatedSection delay={0.6}>
                    <div className="w-full text-center py-10">
                        <p className="text-gray-400">No projects found in this category.</p>
                    </div>
                </AnimatedSection>
            )}
            
            <AnimatedSection delay={0.9}>
                <p className='py-8 text-sm text-purple-400 font-medium'>More projects coming soon...</p>
            </AnimatedSection>

            {/* Featured Project */}
            <AnimatedSection delay={1.0}>
                <div className="w-full max-w-5xl bg-gradient-to-br from-gray-800/70 to-gray-900/70 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-2xl mt-8 border border-purple-500/30">
                    <div className="flex flex-col lg:flex-row gap-8">
                        <div className="lg:w-1/2">
                            <div className="relative rounded-xl overflow-hidden h-64 lg:h-full shadow-lg">
                                <img 
                                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                                    alt="Featured Project"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/70 to-transparent"></div>
                            </div>
                        </div>
                        
                        <div className="lg:w-1/2 flex flex-col">
                            <div className="flex items-center space-x-2 mb-3">
                                <span className="bg-purple-500/20 text-purple-300 text-xs px-3 py-1 rounded-full">Featured Project</span>
                            </div>
                            
                            <h3 className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 mb-3">AI Resume Builder</h3>
                            
                            <p className="text-gray-300 mb-4">
                                An advanced AI-powered resume builder that customizes CVs based on job descriptions. The application analyzes job requirements and suggests tailored content to increase interview chances.
                            </p>
                            
                            <div className="flex flex-wrap gap-2 mb-6">
                                <span className="px-3 py-1 bg-purple-900/40 text-purple-300 rounded-full text-xs font-medium">Next.js</span>
                                <span className="px-3 py-1 bg-purple-900/40 text-purple-300 rounded-full text-xs font-medium">Tailwind CSS</span>
                                <span className="px-3 py-1 bg-purple-900/40 text-purple-300 rounded-full text-xs font-medium">AI Integration</span>
                                <span className="px-3 py-1 bg-purple-900/40 text-purple-300 rounded-full text-xs font-medium">OpenAI</span>
                            </div>
                            
                            <div className="flex flex-wrap gap-4 mt-auto">
                                <a href="#" className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-5 py-2.5 rounded-lg text-white font-medium transition-all duration-300 shadow-lg hover:shadow-purple-500/30">
                                    <FaLaptopCode />
                                    <span>Live Demo</span>
                                </a>
                                <a href="#" className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 border border-purple-500/30 hover:border-purple-500/70 px-5 py-2.5 rounded-lg text-white font-medium transition-all duration-300">
                                    <FaCode />
                                    <span>View Code</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </AnimatedSection>
        </section>
    );
};

export default Projects;
