import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaGithub, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-400 py-10">
            {/* Bold HR Line */}
            <hr className="border-t-4 border-purple-500 w-full mb-6" />

            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">

                {/* Navigation Links */}
                <div>
                    <h3 className="text-white text-xl font-semibold mb-3">Quick Links</h3>
                    <ul className="space-y-2">
                        {["Home", "About", "Projects", "Contact"].map((item, index) => (
                            <li key={index}>
                                <a href={`#${item.toLowerCase()}`} className="hover:text-purple-400 transition">{item}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact Information */}
                <div>
                    <h3 className="text-white text-xl font-semibold mb-3">Contact</h3>
                    <p className="flex items-center justify-center md:justify-start space-x-2">
                        <FaPhone /> <span>+91 9330200862</span>
                    </p>
                    <p className="flex items-center justify-center md:justify-start space-x-2">
                        <FaEnvelope /> <span>maitysubhadeep72@gmail.com</span>
                    </p>
                    <p className="flex items-center justify-center md:justify-start space-x-2">
                        <FaMapMarkerAlt /> <span>Contai West Bengal, India</span>
                    </p>
                </div>

                {/* Google Map Embed */}
                <div>
                    <h3 className="text-white text-xl font-semibold mb-3">Location</h3>
                    <iframe
                        className="w-full h-40 rounded-lg shadow-lg"
                        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d4615.502124708325!2d87.58109707602725!3d21.819833960137533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjHCsDQ5JzExLjQiTiA4N8KwMzUnMDEuMiJF!5e1!3m2!1sen!2sin!4v1742379813023!5m2!1sen!2sin"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>

            {/* Social Media Links */}
            <div className="mt-6 text-center">
                <div className="flex justify-center space-x-6 mb-4">
                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="text-purple-400 text-2xl hover:text-purple-600 transition">
                        <FaFacebook />
                    </a>
                    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-purple-400 text-2xl hover:text-purple-600 transition">
                        <FaTwitter />
                    </a>
                    <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-purple-400 text-2xl hover:text-purple-600 transition">
                        <FaLinkedin />
                    </a>
                    <a href="https://www.instagram.com/maitysubhadeep_official/" target="_blank" rel="noopener noreferrer" className="text-purple-400 text-2xl hover:text-purple-600 transition">
                        <FaInstagram />
                    </a>
                    <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-purple-400 text-2xl hover:text-purple-600 transition">
                        <FaGithub />
                    </a>
                </div>

                {/* Copyright */}
                <p className="text-sm">&copy; {new Date().getFullYear()} Subhadeep Maity. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
