import { useState, useEffect } from "react";
import "./codeloader.css"; // we'll define custom effects here

const CodeLoader = () => {
  const codeLines = [
    "const developer = 'Subhadeep Maity';",
    // "const stack = ['React', 'Node.js', 'TailwindCSS'];",
    // "console.log('Building the future...');"
  ];

  const [currentText, setCurrentText] = useState("");
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (lineIndex < codeLines.length) {
      if (charIndex <= codeLines[lineIndex].length) {
        setTimeout(() => {
          setCurrentText(codeLines[lineIndex].slice(0, charIndex));
          setCharIndex((prev) => prev + 1);
        }, 55);
      } else {
        setTimeout(() => {
          setCurrentText((prev) => prev + "\n");
          setLineIndex((prev) => prev + 1);
          setCharIndex(0);
        }, 400);
      }
    } else {
      setTimeout(() => {
        setCurrentText("");
        setLineIndex(0);
        setCharIndex(0);
      }, 2000);
    }
  }, [charIndex, lineIndex]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 400);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className="loader-bg flex items-center justify-center h-screen w-full">
      <div className="code-box">
        <pre className="text-effect">
          {currentText}
          <span className={`cursor ${showCursor ? "visible" : "invisible"}`}>|</span>
        </pre>
      </div>
    </div>
  );
};

export default CodeLoader;
