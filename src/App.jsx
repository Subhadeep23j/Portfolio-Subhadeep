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

  useEffect(() => {
    // Simulate a loading delay (e.g., 3 seconds)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  return (
    <>
      {loading ? (  
        <Loader /> // Show loader first
      ) : (
        <div className="min-h-screen">
          <Navbar />
          <Hero />
          <About />
          <Projects />
          <Contact />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
