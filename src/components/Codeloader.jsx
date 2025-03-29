import { useState, useEffect } from "react";

const CodeLoader = () => {
  const codeLines = [
    "const developer = 'Subhadeep Maity';"
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
        }, 70);
      } else {
        setTimeout(() => {
          setCurrentText((prev) => prev + "\n"); // Move to the next line
          setLineIndex((prev) => prev + 1);
          setCharIndex(0);
        }, 500);
      }
    } else {
      setTimeout(() => {
        setCurrentText(""); // Restart animation
        setLineIndex(0);
        setCharIndex(0);
      }, 2000);
    }
  }, [charIndex, lineIndex]);

  // Blinking cursor effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className="h-screen flex items-center justify-center bg-gray-900 text-green-400 font-mono text-lg">
      <pre className="whitespace-pre-wrap">
        {currentText}
        {showCursor && "|"}
      </pre>
    </div>
  );
};

export default CodeLoader;
