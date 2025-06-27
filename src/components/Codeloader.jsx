import React, { useState, useEffect } from 'react';

const IndianVibesLoader = () => {
  const [progress, setProgress] = useState(0);
  const [loadingStage, setLoadingStage] = useState('initializing');
  const [isComplete, setIsComplete] = useState(false);
  const [mandalaRotation, setMandalaRotation] = useState(0);

  const stages = [
    { name: 'initializing', text: 'স্বাগত... (Welcome)', delay: 1000 },
    { name: 'loading', text: 'লোড হচ্ছে... (Loading Resources)', delay: 1000 },
    { name: 'processing', text: 'ডেটা প্রক্রিয়াকরণ... (Processing Data)', delay: 1000 },
    { name: 'finalizing', text: 'প্রায় প্রস্তুত... (Almost Ready)', delay: 1000 }
  ];

  useEffect(() => {
    let currentStageIndex = 0;
    let progressInterval;
    let stageTimeout;
    let rotationInterval;

    rotationInterval = setInterval(() => {
      setMandalaRotation(prev => (prev + 1) % 360);
    }, 50);

    const updateStage = () => {
      if (currentStageIndex < stages.length) {
        setLoadingStage(stages[currentStageIndex].name);

        const stage = stages[currentStageIndex];
        const delay = stage.delay;
        const targetProgress = ((currentStageIndex + 1) / stages.length) * 100;

        let localProgress = progress;
        const stepCount = Math.max(1, Math.floor(delay / 50));
        const incrementAmount = (targetProgress - localProgress) / stepCount;

        let steps = 0;
        progressInterval = setInterval(() => {
          localProgress += incrementAmount;
          steps++;
          if (steps >= stepCount || localProgress >= targetProgress) {
            clearInterval(progressInterval);
            setProgress(targetProgress);
          } else {
            setProgress(localProgress);
          }
        }, 50);

        stageTimeout = setTimeout(() => {
          currentStageIndex++;
          if (currentStageIndex < stages.length) {
            updateStage();
          } else {
            setTimeout(() => {
              setProgress(100);
              setIsComplete(true);
            }, 1000);
          }
        }, delay);
      }
    };

    updateStage();

    return () => {
      clearInterval(progressInterval);
      clearInterval(rotationInterval);
      clearTimeout(stageTimeout);
    };
  }, []);

  const getStageText = () => {
    const stage = stages.find(s => s.name === loadingStage);
    return stage ? stage.text : 'Loading...';
  };

  const MandalCircularProgress = ({ progress }) => {
    const radius = 60;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (progress / 100) * circumference;

    return (
      <div className="relative w-40 h-40 mx-auto mb-4">
        <div className="relative w-40 h-40">
          <div
            className="absolute inset-0 w-40 h-40 opacity-30"
            style={{ transform: `rotate(${mandalaRotation}deg)` }}
          >
            <svg viewBox="0 0 160 160" className="w-full h-full">
              <g className="text-purple-400 fill-current">
                {[...Array(8)].map((_, i) => (
                  <g key={i} transform={`rotate(${i * 45} 80 80)`}>
                    <path d="M80 20 L85 35 L80 50 L75 35 Z" />
                    <circle cx="80" cy="30" r="3" />
                  </g>
                ))}
              </g>
            </svg>
          </div>

          <svg className="w-32 h-32 transform -rotate-90 absolute top-4 left-4" viewBox="0 0 144 144">
            <circle
              cx="72"
              cy="72"
              r={radius}
              stroke="currentColor"
              strokeWidth="4"
              fill="none"
              className="text-slate-700"
            />
            <circle
              cx="72"
              cy="72"
              r={radius}
              stroke="currentColor"
              strokeWidth="4"
              fill="none"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              className="text-purple-500 transition-all duration-300 ease-out"
              strokeLinecap="round"
            />
          </svg>

          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="text-3xl text-purple-400 mb-1">ॐ</div>
            <span className="text-lg font-bold text-purple-200">
              {Math.round(progress)}%
            </span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 flex items-center justify-center z-50">
      <div className="text-center relative z-10">
        <MandalCircularProgress progress={progress} />

        <div className="flex items-center justify-center mb-2">
          <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-purple-400 mr-4"></div>
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-300">
            नमस्ते INDIA
          </h1> <h1 className='text-4xl font-bold'>🙏🏻</h1>
          <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-purple-400 ml-4"></div>
        </div>
        <h2 className="text-xl text-purple-300 mb-3 font-bold">
         MR.Subhadeep Maity
        </h2>

        <p className="text-gray-300 text-lg transition-all duration-500 mb-4">
          {getStageText()}
        </p>

        <div className="relative w-80 mx-auto mb-6">
          <div className="h-3 bg-slate-800 rounded-full overflow-hidden border border-slate-600">
            <div
              className="h-full bg-gradient-to-r from-purple-600 via-purple-500 to-purple-400 rounded-full transition-all duration-300 ease-out relative"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-pulse"></div>
            </div>
          </div>
          <div className="absolute -top-1 left-0 w-2 h-2 bg-purple-400 rounded-full"></div>
          <div className="absolute -top-1 right-0 w-2 h-2 bg-purple-300 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default IndianVibesLoader;
