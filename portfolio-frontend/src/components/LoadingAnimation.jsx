import { useState, useEffect } from 'react';
import { BiCodeAlt } from "react-icons/bi";

function LoadingAnimation() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      className="loading-screen fixed inset-0 z-[9999] bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center"
      style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 9999 }}
    >
      <div className="text-center px-8 w-full max-w-md">
        {/* Logo Animation */}
        <div className="mb-8 relative">
          <div className="w-24 h-24 mx-auto relative">
            <div className="absolute inset-0 border-4 border-t-orange-500 border-r-transparent border-b-red-600 border-l-transparent rounded-full animate-spin"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center text-white font-bold">
                 <BiCodeAlt size={28} />
                </div>
            </div>
          </div>
        </div>

        {/* Name */}
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
          Jastin Lim
        </h1>
        <p className="text-gray-400 text-sm mb-10 animate-pulse">
          Loading Portfolio...
        </p>

        {/* Progress Bar */}
        <div className="w-full h-3 bg-gray-800 rounded-full overflow-hidden shadow-inner mb-4">
          <div
            className="h-full bg-gradient-to-r from-orange-500 to-red-600 rounded-full transition-all duration-300 relative"
            style={{ width: `${progress}%` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
          </div>
        </div>

        {/* Percentage */}
        <div className="text-gray-400 text-lg font-mono font-bold">
          {progress}%
        </div>

        {/* Loading Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-3 h-3 bg-orange-500 rounded-full animate-bounce"
              style={{
                animationDelay: `${i * 0.15}s`,
                animationDuration: '0.6s'
              }}
            />
          ))}
        </div>

        {/* Fun Quote */}
        <p className="mt-8 text-gray-500 text-xs italic">
          Building something awesome... ☕
        </p>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
        .animate-shimmer {
          animation: shimmer 1.5s infinite;
        }
      `}</style>
    </div>
  );
}

export default LoadingAnimation;