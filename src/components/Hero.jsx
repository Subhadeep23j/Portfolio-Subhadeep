import { useState, useEffect } from 'react';
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [img1, img2, img3];
  const imageAlts = [
    'Subhadeep Maity developing a modern React web application',
    'Subhadeep Maity building full stack web solutions with Laravel and React',
    'Subhadeep Maity portfolio showcase for full stack web development projects',
  ];

  const roles = ['Full Stack Web Developer', 'React Developer', 'Laravel Developer'];
  const [roleIndex, setRoleIndex] = useState(0);

  // Image Carousel Effect
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  // Role Animation Effect
  useEffect(() => {
    const roleInterval = setInterval(() => {
      setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 3000); // Changes every 3 seconds
    return () => clearInterval(roleInterval);
  }, []);

  return (
    <div id='home' className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#0f1419] via-[#1a1f3a] to-[#0f1419]">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-pink-600 rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Image Carousel - Background */}
      <div className="absolute inset-0 z-0">
        {images.map((img, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: index === activeIndex ? 0.15 : 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0"
          >
            <img src={img} alt={imageAlts[index]} className="object-cover w-full h-full" />
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen text-white px-4 pt-32 pb-40">
        <div className="max-w-5xl mx-auto text-center">
          {/* Top Badge */}
          <AnimatedSection delay={0.2}>
            <motion.div 
              className="inline-block mb-8"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="px-6 py-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/50 rounded-full backdrop-blur-sm">
                <span className="text-sm font-semibold text-purple-300">Welcome to my portfolio</span>
              </div>
            </motion.div>
          </AnimatedSection>

          {/* Main Heading */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight tracking-tight mb-4">
              <motion.span 
                className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Subhadeep Maity - Full Stack Web Developer
              </motion.span>
            </h1>
            
            <motion.h2 
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400">React & Laravel Portfolio</span>
            </motion.h2>

            {/* Animated Role */}
            <motion.div 
              className="h-16 md:h-20 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.p
                key={roleIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text"
                aria-live="polite"
              >
                {roles[roleIndex]}
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Tagline */}
          <AnimatedSection delay={1.0}>
            <motion.p 
              className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed mb-12 font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              Engineering the future, one line of code at a time. 
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Transforming Ideas into Digital Reality
              </span>
            </motion.p>
          </AnimatedSection>

          {/* CTA Buttons */}
          <AnimatedSection delay={1.2}>
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <motion.a 
                href='#contact'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-10 py-4 font-bold text-white rounded-lg overflow-hidden cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 transition-all duration-300"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative flex items-center justify-center">
                  Hire Me
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </motion.a>

              <motion.a 
                href='#about'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-10 py-4 font-bold text-white rounded-lg border-2 border-white/30 hover:border-white transition-colors duration-300 cursor-pointer overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/5 group-hover:bg-white/10 transition-colors duration-300"></div>
                <span className="relative">Know Me Better</span>
              </motion.a>

              <motion.a 
                href="/SubhadeepMaityResume.pdf" 
                download="Subhadeep_Maity_Resume.pdf"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-10 py-4 font-bold text-white rounded-lg border-2 border-purple-500/50 hover:border-purple-500 transition-colors duration-300 cursor-pointer overflow-hidden"
              >
                <div className="absolute inset-0 bg-purple-500/10 group-hover:bg-purple-500/20 transition-colors duration-300"></div>
                <span className="relative flex items-center justify-center">
                  Download CV
                  <svg className="w-5 h-5 ml-2 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </span>
              </motion.a>
            </motion.div>
          </AnimatedSection>
        </div>

        {/* Scroll Indicator */}
        {/* <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 2.3 }}
        >
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-purple-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </motion.svg>
        </motion.div> */}
      </div>

      {/* Image Navigation Dots */}
      <motion.div 
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 2.5 }}
      >
        <div className="flex space-x-3 bg-black/20 backdrop-blur-md px-4 py-3 rounded-full border border-white/10">
          {images.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveIndex(index)}
              whileHover={{ scale: 1.2 }}
              className={`h-3 rounded-full transition-all ${
                index === activeIndex 
                  ? 'w-8 bg-gradient-to-r from-purple-500 to-pink-500' 
                  : 'w-3 bg-gray-500 hover:bg-gray-400'
              }`}
            ></motion.button>
          ))}
        </div>
      </motion.div>

      {/* Stats Section - Fixed at bottom */}
      <motion.div 
        className="absolute bottom-24 left-1/2 transform -translate-x-1/2 z-20 w-full px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.4 }}
      >
        <div className="flex justify-center gap-8 text-center max-w-4xl mx-auto">
          <div className="flex flex-col items-center">
            <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">5+</div>
            <div className="text-gray-400 text-sm mt-2">Projects</div>
          </div>
          <div className="hidden sm:block w-px bg-gradient-to-b from-transparent via-purple-500 to-transparent h-16"></div>
          <div className="flex flex-col items-center">
            <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">2+</div>
            <div className="text-gray-400 text-sm mt-2">Years Experience</div>
          </div>
          <div className="hidden sm:block w-px bg-gradient-to-b from-transparent via-purple-500 to-transparent h-16"></div>
          <div className="flex flex-col items-center">
            <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">10+</div>
            <div className="text-gray-400 text-sm mt-2">Technologies</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;