import { useState, useEffect } from "react"; // Import useEffect
import { Helmet } from "react-helmet-async";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Loader from "./components/Codeloader"; // Import the loader

function App() {
  const [loading, setLoading] = useState(true); // Loader state

  // Fallback: force-finish after 6s in case onFinish not triggered
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 6000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Helmet>
        <title>Subhadeep Maity | Full Stack Web Developer Portfolio</title>
        <meta
          name="description"
          content="Subhadeep Maity is a Full Stack Web Developer specializing in React and Laravel. Explore projects, skills, and services in this web developer portfolio."
        />
        <meta
          name="keywords"
          content="Subhadeep Maity, Full Stack Web Developer, React Developer, Laravel Developer, Web Developer Portfolio"
        />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <link rel="canonical" href="https://subhadeepmaity.netlify.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Subhadeep Maity | Full Stack Web Developer Portfolio" />
        <meta
          property="og:description"
          content="Portfolio of Subhadeep Maity, Full Stack Web Developer using React and Laravel to build performant web applications."
        />
        <meta property="og:url" content="https://subhadeepmaity.netlify.app/" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Subhadeep Maity | Full Stack Web Developer Portfolio" />
        <meta
          property="twitter:description"
          content="React and Laravel web developer portfolio showcasing full stack projects and technical expertise."
        />
      </Helmet>
      {loading && <Loader onFinish={() => setLoading(false)} />}
  <div className={`min-h-screen bg-gray-900 text-white ${loading ? 'pointer-events-none select-none' : ''}`}>        
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
