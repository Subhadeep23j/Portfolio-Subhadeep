import React, { useState } from 'react';
import AnimatedSection from './AnimatedSection';

const projectsData = [
    // { id: 1, title: "AI Job Finder", description: "A full-stack web application for job seekers.", tech: ["React", "Node.js", "MongoDB"], link: "#" },
    // { id: 2, title: "Resume Builder", description: "An AI-powered resume builder.", tech: ["Next.js", "Tailwind CSS"], link: "#" },
    // { id: 3, title: "Chat App", description: "A real-time chat application.", tech: ["Firebase", "React Native"], link: "#" },
    // { id: 4, title: "E-commerce Site", description: "A modern e-commerce platform.", tech: ["React", "Django"], link: "#" },
    { id: 5, title: "Portfolio Website", description: "A personal portfolio showcasing skills and projects.", tech: ["HTML", "CSS", "JavaScript", "React.js", "Tailwind CSS"], link: "https://subhadeep23j.github.io/Portfolio-Subhadeep/" },
    { id: 6, title: "College Website", description: "A simple college website of CCLMS", tech: ["HTML", "CSS", "JavaScript","React.js","Tailwind CSS"], link: "https://subhadeep23j.github.io/CCLMS-Management-College/" }
];

const Projects = () => {
    const [category, setCategory] = useState("All");
    const categories = ["All", "Web", "AI", "Mobile"];

    return (
        <section id="projects" className="min-h-screen bg-gray-900 text-white px-6 pb-10 flex flex-col items-center">
            
            {/* Heading */}
            <AnimatedSection delay={0.2}>
                <div className="w-full text-center py-12">
                    <h2 className="text-5xl font-extrabold text-purple-500 mb-2 pt-10">My Projects</h2>
                    <div className="w-20 h-1 bg-purple-500 mx-auto"></div>
                </div>
            </AnimatedSection>

            {/* Category Filter */}
            <AnimatedSection delay={0.4}>
                <div className="flex space-x-4 mb-6">
                    {categories.map(cat => (
                        <button key={cat} onClick={() => setCategory(cat)} className={`px-4 py-2 rounded-lg ${category === cat ? "bg-purple-600" : "bg-gray-700"}`}>{cat}</button>
                    ))}
                </div>
            </AnimatedSection>

            {/* Projects Grid */}
            <div className="max-w-6xl w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {projectsData.map((project, index) => (
                    <AnimatedSection delay={0.5 + (index * 0.1)} key={project.id}>
                        <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform h-full flex flex-col">
                            <h3 className="text-2xl font-semibold text-purple-400">{project.title}</h3>
                            <p className="text-gray-300 mt-2">{project.description}</p>
                            <div className="mt-3 flex flex-wrap gap-2">
                                {project.tech.map((tech, index) => (
                                    <span key={index} className="px-2 py-1 bg-purple-700 rounded text-sm">{tech}</span>
                                ))}
                            </div>
                            <a href={project.link} className="text-purple-500 inline-block hover:underline mt-auto" target='blank'>View Project →</a>
                        </div>
                    </AnimatedSection>
                ))}
            </div>
            <AnimatedSection delay={0.9}>
                <p className='py-5 rounded text-m text-purple-500'>More projects are coming soon....</p>
            </AnimatedSection>

            {/* Featured Project */}
            <AnimatedSection delay={1.0}>
                <div className="w-full max-w-4xl bg-gray-800 p-8 rounded-lg shadow-lg mt-12">
                    <h3 className="text-3xl font-bold text-purple-500">Featured Project: AI Resume Builder</h3>
                    <p className="text-gray-300 mt-2">An advanced AI-powered resume builder that customizes CVs based on job descriptions.</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-purple-700 rounded text-sm">Next.js</span>
                        <span className="px-3 py-1 bg-purple-700 rounded text-sm">Tailwind CSS</span>
                        <span className="px-3 py-1 bg-purple-700 rounded text-sm">AI Integration</span>
                    </div>
                    <div className="mt-4 flex space-x-4">
                        <a href="#" className="bg-purple-600 px-4 py-2 rounded hover:bg-purple-700">Live Demo</a>
                        <a href="#" className="border border-purple-500 px-4 py-2 rounded hover:bg-purple-700">GitHub</a>
                    </div>
                </div>
            </AnimatedSection>

            {/* Button
            <div className="mt-8">
                <a href="#contact" className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 transform hover:scale-105">
                    Contact Me
                </a>
            </div> */}
        </section>
    );
};

export default Projects;
