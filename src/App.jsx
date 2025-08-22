import { useState, useEffect } from "react"; // Import useEffect
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
