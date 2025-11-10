import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaGithub, FaPhone, FaEnvelope, FaMapMarkerAlt, FaArrowRight } from "react-icons/fa";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { label: "Home", href: "#hero" },
        { label: "About", href: "#about" },
        { label: "Projects", href: "#projects" },
        { label: "Contact", href: "#contact" }
    ];

    const socialLinks = [
        { icon: FaFacebook, url: "https://www.facebook.com/", label: "Facebook", color: "from-blue-600 to-blue-400" },
        { icon: FaTwitter, url: "https://twitter.com/", label: "Twitter", color: "from-sky-600 to-sky-400" },
        { icon: FaLinkedin, url: "https://www.linkedin.com/in/subhadeep-maity-056094378/", label: "LinkedIn", color: "from-blue-700 to-blue-500" },
        { icon: FaInstagram, url: "https://www.instagram.com/maitysubhadeep_official/", label: "Instagram", color: "from-pink-600 to-purple-600" },
        { icon: FaGithub, url: "https://github.com/", label: "GitHub", color: "from-gray-700 to-gray-900" }
    ];

    return (
        <footer className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-black text-gray-300 overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl opacity-50"></div>
            <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl opacity-50"></div>

            <div className="relative z-10">
                {/* Top Gradient Divider */}
                <div className="h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>

                <div className="container mx-auto px-6 py-16">
                    {/* Main Content Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">

                        {/* Brand Section */}
                        <div className="space-y-4">
                            <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                                Subhadeep
                            </h2>
                            <p className="text-sm text-gray-400 leading-relaxed">
                                Full-stack developer passionate about creating beautiful and functional digital experiences.
                            </p>
                            <div className="flex space-x-3 pt-2">
                                {socialLinks.map((social, index) => {
                                    const Icon = social.icon;
                                    return (
                                        <a
                                            key={index}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`p-2 rounded-lg bg-gradient-to-br ${social.color} hover:scale-110 transition-transform duration-300 text-white`}
                                            aria-label={social.label}
                                        >
                                            <Icon size={18} />
                                        </a>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h3 className="text-white text-lg font-semibold mb-4 flex items-center">
                                <span className="w-1 h-6 bg-gradient-to-b from-purple-400 to-pink-400 mr-3 rounded"></span>
                                Quick Links
                            </h3>
                            <ul className="space-y-3">
                                {quickLinks.map((link, index) => (
                                    <li key={index}>
                                        <a
                                            href={link.href}
                                            className="group flex items-center text-gray-400 hover:text-purple-400 transition-colors duration-300"
                                        >
                                            <FaArrowRight size={12} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -translate-x-2 group-hover:translate-x-0" />
                                            <span>{link.label}</span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div>
                            <h3 className="text-white text-lg font-semibold mb-4 flex items-center">
                                <span className="w-1 h-6 bg-gradient-to-b from-blue-400 to-cyan-400 mr-3 rounded"></span>
                                Get in Touch
                            </h3>
                            <div className="space-y-3">
                                <a
                                    href="tel:+919330200862"
                                    className="flex items-start space-x-3 text-gray-400 hover:text-blue-400 transition-colors duration-300 group"
                                >
                                    <FaPhone size={16} className="mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                                    <span>+91 9330200862</span>
                                </a>
                                <a
                                    href="mailto:maitysubhadeep72@gmail.com"
                                    className="flex items-start space-x-3 text-gray-400 hover:text-blue-400 transition-colors duration-300 group"
                                >
                                    <FaEnvelope size={16} className="mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                                    <span className="break-all text-sm">maitysubhadeep72@gmail.com</span>
                                </a>
                                <div className="flex items-start space-x-3 text-gray-400">
                                    <FaMapMarkerAlt size={16} className="mt-1 flex-shrink-0" />
                                    <span>Contai, West Bengal, India</span>
                                </div>
                            </div>
                        </div>

                        {/* Location Preview */}
                        <div>
                            <h3 className="text-white text-lg font-semibold mb-4 flex items-center">
                                <span className="w-1 h-6 bg-gradient-to-b from-pink-400 to-rose-400 mr-3 rounded"></span>
                                Location
                            </h3>
                            <div className="rounded-lg overflow-hidden border border-purple-500/30 hover:border-purple-500/60 transition-colors">
                                <iframe
                                    className="w-full h-40"
                                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d4615.502124708325!2d87.58109707602725!3d21.819833960137533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjHCsDQ5JzExLjQiTiA4N8KwMzUnMDEuMiJF!5e1!3m2!1sen!2sin!4v1742379813023!5m2!1sen!2sin"
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    style={{ border: "none" }}
                                ></iframe>
                            </div>
                        </div>
                    </div>

                    {/* Middle Divider */}
                    <div className="h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent mb-8"></div>

                    {/* Bottom Section */}
                    <div className="flex flex-col md:flex-row items-center justify-between">
                        {/* Copyright */}
                        <div className="text-center md:text-left mb-4 md:mb-0">
                            <p className="text-sm text-gray-500">
                                &copy; {currentYear} <span className="text-purple-400 font-semibold">Subhadeep Maity</span>. All rights reserved.
                            </p>
                            <p className="text-xs text-gray-600 mt-1">
                                Designed & Developed with <span className="text-red-500">❤</span> by Subhadeep
                            </p>
                        </div>

                        {/* Bottom Links */}
                        <div className="flex space-x-6 text-sm">
                            <a href="#" className="text-gray-500 hover:text-purple-400 transition-colors">
                                Privacy Policy
                            </a>
                            <span className="text-gray-700">•</span>
                            <a href="#" className="text-gray-500 hover:text-purple-400 transition-colors">
                                Terms of Service
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Gradient Divider */}
                <div className="h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
            </div>
        </footer>
    );
};

export default Footer;
