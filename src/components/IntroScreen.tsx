import React, { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';

const IntroScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [phase, setPhase] = useState<'warp' | 'zoom' | 'reveal' | 'enter'>('warp');
  const [showSkipButton, setShowSkipButton] = useState(false);

  useEffect(() => {
    // Show skip button after 1 second
    const skipTimer = setTimeout(() => setShowSkipButton(true), 1000);

    // Phase progression
    const warpTimer = setTimeout(() => setPhase('zoom'), 3000);
    const zoomTimer = setTimeout(() => setPhase('reveal'), 5500);
    const revealTimer = setTimeout(() => setPhase('enter'), 7000);
    const enterTimer = setTimeout(() => onComplete(), 8000);

    return () => {
      clearTimeout(skipTimer);
      clearTimeout(warpTimer);
      clearTimeout(zoomTimer);
      clearTimeout(revealTimer);
      clearTimeout(enterTimer);
    };
  }, [onComplete]);

  const handleSkip = () => {
    onComplete();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black overflow-hidden">
      {/* Skip Button */}
      {showSkipButton && (
        <button
          onClick={handleSkip}
          className="absolute top-8 right-8 z-50 flex items-center gap-2 px-4 py-2 bg-white bg-opacity-20 backdrop-blur-sm text-white rounded-full hover:bg-opacity-30 transition-all duration-300"
        >
          Skip Intro
          <ChevronRight className="w-4 h-4" />
        </button>
      )}

      {/* Space Warp Effect */}
      {phase === 'warp' && (
        <div className="absolute inset-0 overflow-hidden">
          {/* Warp Speed Lines */}
          {[...Array(200)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-white opacity-80"
              style={{
                left: `${50 + (Math.random() - 0.5) * 100}%`,
                top: `${50 + (Math.random() - 0.5) * 100}%`,
                width: '2px',
                height: `${Math.random() * 100 + 50}px`,
                transform: `rotate(${Math.random() * 360}deg)`,
                animation: `warpSpeed ${0.5 + Math.random() * 1}s linear infinite`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            ></div>
          ))}
          
          {/* Central Vortex */}
          <div className="absolute inset-0 flex items-center justify-center">
            {[...Array(10)].map((_, i) => (
              <div
                key={i}
                className="absolute border border-blue-400 rounded-full animate-ping"
                style={{
                  width: `${50 + i * 50}px`,
                  height: `${50 + i * 50}px`,
                  animationDelay: `${i * 0.2}s`,
                  animationDuration: '2s',
                  opacity: 1 - i * 0.1,
                }}
              ></div>
            ))}
          </div>

          {/* Swirling Particles */}
          {[...Array(100)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-300 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `spiral ${2 + Math.random() * 3}s linear infinite`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            ></div>
          ))}
        </div>
      )}

      {/* Zoom Phase */}
      {phase === 'zoom' && (
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-purple-900 to-black">
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Zooming Tunnel Effect */}
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute border-2 border-blue-400 rounded-full opacity-30"
                style={{
                  width: `${100 + i * 100}px`,
                  height: `${100 + i * 100}px`,
                  animation: `zoomTunnel ${1 + i * 0.1}s ease-out infinite`,
                  animationDelay: `${i * 0.1}s`,
                }}
              ></div>
            ))}
            
            {/* Central Light */}
            <div className="w-32 h-32 bg-white rounded-full opacity-80 animate-pulse blur-sm"></div>
            <div className="absolute w-16 h-16 bg-blue-400 rounded-full animate-ping"></div>
          </div>
        </div>
      )}

      {/* Name Reveal Phase */}
      {(phase === 'reveal' || phase === 'enter') && (
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-black flex items-center justify-center">
          {/* Background Stars */}
          {[...Array(100)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${1 + Math.random() * 2}s`,
              }}
            ></div>
          ))}

          {/* Main Content */}
          <div className="text-center space-y-8 max-w-4xl mx-auto px-8">
            {/* Name Animation */}
            <div className={`transform transition-all duration-2000 ${
              phase === 'reveal' ? 'scale-150 opacity-0' : 'scale-100 opacity-100'
            }`}>
              <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 animate-glow">
                GURU PRASAD
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400 animate-pulse">
                  R
                </span>
              </h1>
              
              <div className="space-y-4">
                <p className="text-xl md:text-2xl text-blue-300 animate-fade-in-up">
                  AI & Data Science Enthusiast
                </p>
                <p className="text-lg md:text-xl text-purple-300 animate-fade-in-up delay-500">
                  Problem Solver | Future Innovator
                </p>
                <p className="text-md text-gray-400 animate-fade-in-up delay-1000">
                  From Coimbatore, Tamil Nadu
                </p>
              </div>
            </div>

            {/* Enter Button */}
            {phase === 'enter' && (
              <div className="animate-fade-in-up delay-1500">
                <button
                  onClick={onComplete}
                  className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-full hover:from-blue-700 hover:to-green-700 transition-all duration-300 hover:shadow-2xl hover:scale-105 transform"
                >
                  <span className="flex items-center gap-3 text-lg font-semibold">
                    Enter Portfolio
                    <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
              </div>
            )}
          </div>

          {/* Floating Orbs */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-60"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
                  animationDelay: `${Math.random() * 2}s`,
                }}
              ></div>
            ))}
          </div>
        </div>
      )}

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes warpSpeed {
          0% {
            transform: scale(0) rotate(0deg);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: scale(20) rotate(360deg);
            opacity: 0;
          }
        }

        @keyframes spiral {
          0% {
            transform: rotate(0deg) translateX(50px) rotate(0deg);
          }
          100% {
            transform: rotate(360deg) translateX(50px) rotate(-360deg);
          }
        }

        @keyframes zoomTunnel {
          0% {
            transform: scale(0);
            opacity: 0;
          }
          50% {
            opacity: 0.5;
          }
          100% {
            transform: scale(5);
            opacity: 0;
          }
        }

        @keyframes glow {
          0%, 100% {
            text-shadow: 0 0 20px rgba(59, 130, 246, 0.5);
          }
          50% {
            text-shadow: 0 0 40px rgba(59, 130, 246, 0.8), 0 0 60px rgba(16, 185, 129, 0.6);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }

        .animate-glow {
          animation: glow 3s ease-in-out infinite;
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
          opacity: 0;
        }

        .delay-500 {
          animation-delay: 0.5s;
        }

        .delay-1000 {
          animation-delay: 1s;
        }

        .delay-1500 {
          animation-delay: 1.5s;
        }
      `}</style>
    </div>
  );
};

export default IntroScreen;