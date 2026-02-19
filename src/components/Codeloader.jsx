import React, { useState, useEffect, useRef, useMemo } from 'react';

const PortfolioLoader = ({ duration = 2600, onFinish }) => {
  const [progress, setProgress] = useState(0); // 0..100
  const [fadeOut, setFadeOut] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  const startRef = useRef(null);
  const rafRef = useRef(null);

  const steps = useMemo(() => [
    'Initializing portfolio...',
    'Loading UI/UX components...',
    'Compiling design systems...',
    'Fetching project data...',
    'Optimizing user experience...',
    'Rendering creative solutions...',
    'Finalizing digital reality...'
  ], []);

  const totalSteps = steps.length;

  // Single rAF timeline
  useEffect(() => {
    const tick = (ts) => {
      if (!startRef.current) startRef.current = ts;
      const elapsed = ts - startRef.current;
      const pct = Math.min(1, elapsed / duration);
      setProgress(Math.floor(pct * 100));
      if (pct < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        setFadeOut(true);
        // Finish after fade
        const t = setTimeout(() => {
          onFinish && onFinish();
        }, 600);
        return () => clearTimeout(t);
      }
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [duration, onFinish]);

  // Cursor blink
  useEffect(() => {
    const id = setInterval(() => setShowCursor(c => !c), 500);
    return () => clearInterval(id);
  }, []);

  const currentStepIndex = Math.min(totalSteps - 1, Math.floor((progress / 100) * totalSteps));
  const currentStep = steps[currentStepIndex];

  // Pre-build matrix columns only once for perf
  const matrixColumns = useMemo(() => {
    const chars = '01{}[];()<>/=+-*&%$#@!?';
    const cols = 42;
    return Array.from({ length: cols }, (_, i) => ({
      id: i,
      left: (i / cols) * 100,
      delay: (Math.random() * 3).toFixed(2),
      duration: (2 + Math.random() * 4).toFixed(2),
      glyphs: Array.from({ length: 18 }, () => chars[Math.floor(Math.random() * chars.length)])
    }));
  }, []);

  return (
    <div className={`fixed inset-0 flex items-center justify-center z-[100] bg-gradient-to-br from-gray-950 via-purple-950 to-gray-900 overflow-hidden transition-opacity duration-700 ${fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>      
      {/* Matrix Rain */}
      <div className="absolute inset-0 overflow-hidden opacity-15 pointer-events-none">
        {matrixColumns.map(c => (
          <div
            key={c.id}
            className="absolute text-emerald-400/80 text-[10px] md:text-xs font-mono animate-matrix"
            style={{ left: `${c.left}%`, animationDelay: `${c.delay}s`, animationDuration: `${c.duration}s` }}
          >
            {c.glyphs.map((g, idx) => (
              <div key={idx} className="drop-shadow-[0_0_2px_rgba(16,185,129,0.6)]">{g}</div>
            ))}
          </div>
        ))}
      </div>

      {/* Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-fuchsia-400/30 animate-ping"
            style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`, animationDelay: `${Math.random() * 2}s` }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-xl">
        <p className="text-5xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent mb-3">
          Subhadeep Maity
        </p>
        <p className="text-base md:text-lg text-fuchsia-300 font-mono mb-1">Web Developer</p>
        <p className="text-xs md:text-sm text-gray-400 italic mb-6">Engineering the Future, One Line of Code at a Time.</p>

        <div className="h-7 flex items-center justify-center font-mono text-sm md:text-base">
          <span className="bg-gradient-to-r from-emerald-300 to-purple-400 bg-clip-text text-transparent">
            {currentStep}
          </span>
          <span className={`ml-1 text-purple-400 ${showCursor ? 'opacity-100' : 'opacity-0'}`}>|</span>
        </div>

        {/* Circular progress */}
        <div className="relative w-36 h-36 md:w-40 md:h-40 mx-auto mt-8">
          <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
            <circle cx="50" cy="50" r="42" stroke="rgba(255,255,255,0.1)" strokeWidth="8" fill="none" />
            <circle
              cx="50" cy="50" r="42" fill="none" strokeLinecap="round" strokeWidth="8"
              stroke="url(#loaderGradient)"
              strokeDasharray={`${2 * Math.PI * 42}`}
              strokeDashoffset={`${2 * Math.PI * 42 * (1 - progress / 100)}`}
              className="transition-[stroke-dashoffset] duration-150 ease-linear"
            />
            <defs>
              <linearGradient id="loaderGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#8B5CF6" />
                <stop offset="50%" stopColor="#EC4899" />
                <stop offset="100%" stopColor="#06B6D4" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white text-xl font-semibold tabular-nums">{progress}%</span>
          </div>
        </div>

        <div className="flex justify-center gap-6 mt-6 text-[10px] md:text-xs font-mono text-purple-300">
          {['🎨 Design','💻 Code','⚡ Speed','🚀 Launch'].map((tag,i)=>(
            <span key={tag} className={`transition-opacity duration-300 ${progress >= (i+1)*25 ? 'opacity-100' : 'opacity-30'}`}>{tag}</span>
          ))}
        </div>
      </div>

      {/* Scoped styles (matrix animation) */}
      <style>{`@keyframes matrix{0%{transform:translateY(-110%)}100%{transform:translateY(110%)} } .animate-matrix{animation:matrix linear infinite}`}</style>
    </div>
  );
};

export default PortfolioLoader;
