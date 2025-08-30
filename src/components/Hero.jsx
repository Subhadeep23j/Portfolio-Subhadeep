import { useState, useEffect } from 'react';
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [img1, img2, img3];

  const roles = ["I'm Web Developer", "I'm UI/UX Designer","I'm Photographer"];
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
    <div id='home' className="relative h-screen overflow-hidden bg-gray-900">
      {/* Image Carousel */}
      <div className="absolute inset-0">
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === activeIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img src={img} alt={`Slide ${index}`} className="object-cover w-full h-full" />
            <div className="absolute inset-0 bg-black opacity-70"></div>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection delay={0.3}>
            <a href="/SubhadeepMaityResume.pdf" download="Subhadeep_Maity_Resume.pdf" className="inline-block"><button className="bg-purple-500 hover:bg-purple-700 cursor-pointer text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:-translate-y-1 animate-fade-up">
              Download CV 
            </button></a>
          </AnimatedSection>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h1 className="mb-6 text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">
              <motion.span 
                className="block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                Hello World..!
              </motion.span>
              <motion.span 
                className="block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.1 }}
              >
                I am Subhadeep Maity
              </motion.span>
              <span className="block mt-2 text-purple-400 transition-all duration-1000 ease-in-out opacity-100 text-4xl">
                {roles[roleIndex]}
              </span>
            </h1>
          </motion.div>
          
          <AnimatedSection delay={1.5}>
            <p className="text-xl text-gray-300 md:text-2xl max-w-2xl mx-auto">
              "Engineering the Future, One Line of Code at a Time.
              Transforming Ideas into Digital Reality."
            </p>
          </AnimatedSection>

          <AnimatedSection delay={1.8}>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 justify-center mt-8">
              <a href='#contact' className="px-8 py-4 font-bold text-white transition-all bg-purple-600 rounded-lg hover:bg-purple-700 transform hover:-translate-y-1 cursor-pointer">
                Hire Me   
              </a>
              <a href='#about' className="px-8 py-4 font-bold text-white transition-all border-2 border-white rounded-lg hover:bg-white hover:text-purple-900 transform hover:-translate-y-1 cursor-pointer">
                Know Me Better
              </a>
            </div>
          </AnimatedSection>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 2.3 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 animate-bounce animate-float"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </div>

      {/* Image Navigation Dots */}
      <motion.div 
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 2.5 }}
      >
        <div className="flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-2 w-8 rounded-full transition-all ${
                index === activeIndex ? 'bg-white' : 'bg-gray-500'
              }`}
            ></button>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;