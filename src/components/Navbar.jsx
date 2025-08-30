import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaFileDownload, FaHome, FaUser, FaLaptopCode, FaEnvelope } from "react-icons/fa";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);
	const [activeSection, setActiveSection] = useState("home");

	// Close mobile menu when screen size changes to desktop
	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth >= 768 && isOpen) {
				setIsOpen(false);
			}
		};
    
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, [isOpen]);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 10);
      
			// Determine active section based on scroll position
			const sections = ["home", "about", "projects", "contact"];
			for (const section of sections.reverse()) {
				const element = document.getElementById(section);
				if (element) {
					const rect = element.getBoundingClientRect();
					if (rect.top <= 100) {
						setActiveSection(section);
						break;
					}
				}
			}
		};
    
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	// Prevent scrolling when mobile menu is open
	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'auto';
		}
    
		return () => {
			document.body.style.overflow = 'auto';
		};
	}, [isOpen]);

	const navLinks = [
		{ name: "Home", href: "#home", icon: <FaHome className="mr-2" /> },
		{ name: "About", href: "#about", icon: <FaUser className="mr-2" /> },
		{ name: "Projects", href: "#projects", icon: <FaLaptopCode className="mr-2" /> },
		{ name: "Contact", href: "#contact", icon: <FaEnvelope className="mr-2" /> },
	];

	return (
		<nav
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
				isScrolled 
					? "bg-gray-900/90 backdrop-blur-md shadow-lg py-2" 
					: "bg-transparent py-4"
			}`}
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-14">
					{/* Logo */}
					<div className="flex-shrink-0">
						<a href="#home" className="flex items-center group">
							<span className="text-lg sm:text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 group-hover:from-pink-500 group-hover:to-purple-400 transition-all duration-300">
								Subhadeep Maity
							</span>
						</a>
					</div>

					{/* Desktop Menu */}
					<div className="hidden md:flex items-center space-x-2">
						{navLinks.map((item) => (
							<a
								key={item.name}
								href={item.href}
								className={`relative flex items-center px-3 py-2 mx-1 rounded-lg text-sm font-medium transition-all duration-300 group ${
									activeSection === item.href.substring(1)
										? "text-white"
										: "text-gray-300 hover:text-white"
								}`}
							>
								{/* Active indicator */}
								{activeSection === item.href.substring(1) && (
									<motion.span
										layoutId="activeSection"
										className="absolute inset-0 bg-purple-600/30 rounded-lg -z-10"
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										transition={{ duration: 0.3 }}
									/>
								)}
                
								{/* Hover indicator */}
								<span className="absolute inset-0 bg-gray-700/50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-20"></span>
                
								{item.name}
							</a>
						))}
            
						{/* Download CV button */}
						<a 
							href="/SubhadeepMaityResume.pdf" 
							download="Subhadeep_Maity_Resume.pdf" 
							className="ml-3 cursor-pointer"
						>
							<motion.button 
								className="flex items-center bg-gradient-to-r from-purple-600 to-pink-600 hover:from-pink-600 hover:to-purple-600 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 shadow-md hover:shadow-purple-500/30 cursor-pointer"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
							>
								<FaFileDownload className="mr-2" />
								Download CV
							</motion.button>
						</a>
					</div>

					{/* Mobile menu button */}
					<div className="md:hidden flex items-center">
						<button
							onClick={() => setIsOpen(!isOpen)}
							className="inline-flex items-center justify-center p-2 text-white focus:outline-none transition-colors duration-300"
							aria-label="Toggle Menu"
							aria-expanded={isOpen}
						>
							<motion.div
								animate={isOpen ? "open" : "closed"}
								className="w-7 h-6 relative"
							>
								<motion.span
									className="absolute h-0.5 w-7 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full"
									variants={{
										closed: { rotate: 0, y: 0 },
										open: { rotate: 45, y: 2.5 },
									}}
									transition={{ type: "spring", stiffness: 260, damping: 20 }}
								></motion.span>
								<motion.span
									className="absolute h-0.5 w-7 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full top-[10px]"
									variants={{
										closed: { opacity: 1, width: "100%" },
										open: { opacity: 0, width: "80%" },
									}}
									transition={{ duration: 0.2 }}
								></motion.span>
								<motion.span
									className="absolute h-0.5 w-7 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full top-[20px]"
									variants={{
										closed: { rotate: 0, y: 0 },
										open: { rotate: -45, y: -2.5 },
									}}
									transition={{ type: "spring", stiffness: 260, damping: 20 }}
								></motion.span>
							</motion.div>
						</button>
					</div>
				</div>
			</div>

			{/* Mobile menu - outside the nav container for full width */}
			<AnimatePresence>
				{isOpen && (
					<div className="relative">
						<motion.div
							initial={{ opacity: 0, scaleY: 0 }}
							animate={{ opacity: 1, scaleY: 1 }}
							exit={{ opacity: 0, scaleY: 0 }}
							transition={{ duration: 0.4, ease: "easeOut" }}
							style={{ transformOrigin: "top" }}
							className="md:hidden absolute top-full left-0 right-0 w-full bg-gray-900/95 backdrop-blur-lg shadow-lg z-40 border-t border-purple-600/30"
						>
							<motion.div 
								className="px-4 py-6 space-y-4 max-h-[calc(100vh-4rem)] overflow-y-auto"
								initial={{ opacity: 0, y: -20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: 0.1 }}
							>
								{navLinks.map((item, index) => (
									<motion.a
										key={item.name}
										href={item.href}
										className={`flex items-center text-base px-6 py-4 rounded-lg transition-all ${
											activeSection === item.href.substring(1)
												? "bg-purple-600/40 text-white font-medium"
												: "text-gray-200 hover:bg-gray-800/60 hover:text-white"
										}`}
										onClick={() => setIsOpen(false)}
										initial={{ opacity: 0, x: -10 }}
										animate={{ opacity: 1, x: 0 }}
										transition={{ delay: index * 0.05 + 0.2 }}
									>
										<span className="text-xl mr-3">{item.icon}</span>
										{item.name}
									</motion.a>
								))}
                
								<motion.div
									initial={{ opacity: 0, y: 10 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.4 }}
									className="pt-4 pb-3"
								>
									<a
										href="/SubhadeepMaityResume.pdf"
										download="Subhadeep_Maity_Resume.pdf"
										className="block w-full cursor-pointer"
										onClick={() => setIsOpen(false)}
									>
										<motion.button 
											className="w-full flex items-center justify-center bg-gradient-to-r from-purple-600 to-pink-600 hover:from-pink-600 hover:to-purple-600 text-white font-medium py-4 px-6 rounded-lg transition-all duration-300 shadow-lg cursor-pointer"
											whileHover={{ scale: 1.03 }}
											whileTap={{ scale: 0.97 }}
										>
											<FaFileDownload className="mr-3 text-xl" />
											Download CV
										</motion.button>
									</a>
								</motion.div>
							</motion.div>
						</motion.div>
					</div>
				)}
			</AnimatePresence>

			{/* Bottom line */}
			<div className="w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50"></div>
		</nav>
	);
};

export default Navbar;

