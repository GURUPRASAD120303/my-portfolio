import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const IntroScreen: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [showIntro, setShowIntro] = useState(true);
  const [systemStatus, setSystemStatus] = useState("INITIALIZING");
  const [currentLine, setCurrentLine] = useState(0);
  const [cyberScanActive, setCyberScanActive] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  const systemMessages = [
    "> SYSTEM BOOT SEQUENCE INITIATED",
    "> MEMORY ALLOCATION: 8.4GB/9.2GB",
    "> NEURAL NETWORK: ACTIVATED",
    "> EMOTIONAL MODULES: CALIBRATING",
    "> THREAT ASSESSMENT: NOMINAL",
    "> BIO COMPONENTS: ONLINE",
    "> CONSCIOUSNESS INTERFACE: STABLE",
    "> READY FOR DEPLOYMENT"
  ];

  useEffect(() => {
    // Start cyber scan effect after a delay
    const scanTimer = setTimeout(() => {
      setCyberScanActive(true);
      setTimeout(() => setCyberScanActive(false), 2000);
    }, 1500);

    return () => clearTimeout(scanTimer);
  }, []);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setSystemStatus("READY");
          setTimeout(() => {
            setShowIntro(false);
            setTimeout(() => onComplete(), 1000);
          }, 2000);
          return 100;
        }
        
        if (prev > 85 && systemStatus !== "FINALIZING") {
          setSystemStatus("FINALIZING");
        } else if (prev > 60 && systemStatus !== "CALIBRATING") {
          setSystemStatus("CALIBRATING");
        } else if (prev > 30 && systemStatus !== "ANALYZING") {
          setSystemStatus("ANALYZING");
        }
        
        if (prev % 15 === 0 && currentLine < systemMessages.length - 1) {
          setCurrentLine(Math.min(systemMessages.length - 1, currentLine + 1));
        }
        
        const increment = prev > 90 ? 0.5 : 
                         prev > 70 ? 1 : 
                         prev > 50 ? 1.5 : 2;
        return prev + increment;
      });
    }, 70);
    
    return () => clearInterval(progressInterval);
  }, [onComplete, systemStatus, currentLine, systemMessages]);

  // Particle animation effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    // Create particles with different types
    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      type: 'circle' | 'rect' | 'triangle';
      rotation: number;
    }> = [];
    
    for (let i = 0; i < 150; i++) {
      const type = ['circle', 'rect', 'triangle'][Math.floor(Math.random() * 3)] as 'circle' | 'rect' | 'triangle';
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 0.8,
        speedY: (Math.random() - 0.5) * 0.8,
        color: Math.random() > 0.7 ? 'rgba(0, 183, 255, 0.7)' : 
               Math.random() > 0.4 ? 'rgba(138, 43, 226, 0.7)' : 'rgba(255, 255, 255, 0.5)',
        type,
        rotation: Math.random() * 360
      });
    }
    
    // Draw different shapes
    const drawShape = (particle: typeof particles[0]) => {
      ctx.save();
      ctx.translate(particle.x, particle.y);
      ctx.rotate(particle.rotation * Math.PI / 180);
      ctx.fillStyle = particle.color;
      
      switch(particle.type) {
        case 'circle':
          ctx.beginPath();
          ctx.arc(0, 0, particle.size, 0, Math.PI * 2);
          ctx.fill();
          break;
        case 'rect':
          ctx.fillRect(-particle.size, -particle.size, particle.size * 2, particle.size * 2);
          break;
        case 'triangle':
          ctx.beginPath();
          ctx.moveTo(0, -particle.size);
          ctx.lineTo(particle.size, particle.size);
          ctx.lineTo(-particle.size, particle.size);
          ctx.closePath();
          ctx.fill();
          break;
      }
      
      ctx.restore();
    };
    
    // Animation loop
    const animate = () => {
      if (!ctx) return;
      
      // Clear with fade effect for trails
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      particles.forEach(particle => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        particle.rotation += particle.speedX * 2;
        
        // Wrap around edges
        if (particle.x > canvas.width + 10) particle.x = -10;
        if (particle.x < -10) particle.x = canvas.width + 10;
        if (particle.y > canvas.height + 10) particle.y = -10;
        if (particle.y < -10) particle.y = canvas.height + 10;
        
        drawShape(particle);
      });
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    const handleResize = () => {
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Cyber scan effect component
  const CyberScanEffect = () => (
    <motion.div
      className="absolute inset-0 z-30 pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div 
        className="absolute left-0 right-0 h-20 bg-gradient-to-b from-cyan-400/70 to-transparent"
        initial={{ top: "0%", opacity: 0 }}
        animate={{ top: "100%", opacity: [0, 1, 0] }}
        transition={{ duration: 2, ease: "easeOut" }}
      />
      <motion.div 
        className="absolute left-0 right-0 h-8 bg-cyan-400/20"
        initial={{ top: "0%", opacity: 0 }}
        animate={{ top: "100%", opacity: [0, 0.5, 0] }}
        transition={{ duration: 2, ease: "easeOut", delay: 0.1 }}
      />
    </motion.div>
  );

  return (
    <AnimatePresence>
      {showIntro && (
        <motion.div
          className="h-screen w-screen flex flex-col items-center justify-center bg-black text-white overflow-hidden relative"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
        >
          {/* Cyber scan effect */}
          <AnimatePresence>
            {cyberScanActive && <CyberScanEffect />}
          </AnimatePresence>

          {/* Animated canvas for background particles */}
          <canvas 
            ref={canvasRef} 
            className="absolute inset-0 z-0"
          />
          
          {/* Grid overlay with animation */}
          <motion.div 
            className="absolute inset-0 bg-grid-pattern opacity-30"
            animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          
          {/* Pulsing circles in center */}
          <motion.div 
            className="absolute w-64 h-64 rounded-full border border-cyan-400/20"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute w-80 h-80 rounded-full border border-purple-400/10"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
          />
          
          {/* Interactive cyber lines */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  width: `${Math.random() * 100 + 100}px`,
                }}
                animate={{
                  opacity: [0, 1, 0],
                  x: [0, Math.random() * 200 - 100],
                }}
                transition={{
                  duration: Math.random() * 5 + 3,
                  repeat: Infinity,
                  delay: Math.random() * 5,
                }}
              />
            ))}
          </div>

          {/* Main content */}
          <motion.div 
            className="z-10 flex flex-col items-center justify-center p-8 relative"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, type: "spring" }}
          >
            {/* Android-style circular progress with interactive glow */}
            <div className="relative w-64 h-64 mb-8 cursor-pointer"
                 onClick={() => setCyberScanActive(true)}>
              <svg className="w-full h-full" viewBox="0 0 100 100">
                <circle
                  className="text-gray-800"
                  strokeWidth="4"
                  stroke="currentColor"
                  fill="transparent"
                  r="42"
                  cx="50"
                  cy="50"
                />
                <motion.circle
                  className="text-cyan-400 drop-shadow-glow"
                  strokeWidth="4"
                  strokeLinecap="round"
                  stroke="currentColor"
                  fill="transparent"
                  r="42"
                  cx="50"
                  cy="50"
                  initial={{ strokeDashoffset: 264, strokeDasharray: 264 }}
                  animate={{ 
                    strokeDashoffset: 264 - (264 * loadingProgress) / 100,
                  }}
                  transition={{ duration: 0.5 }}
                />
                {/* Animated glow effect */}
                <motion.circle
                  className="text-cyan-400"
                  strokeWidth="8"
                  strokeLinecap="round"
                  stroke="currentColor"
                  fill="transparent"
                  r="42"
                  cx="50"
                  cy="50"
                  initial={{ strokeDashoffset: 264, strokeDasharray: 264, opacity: 0 }}
                  animate={{ 
                    strokeDashoffset: 264 - (264 * loadingProgress) / 100,
                    opacity: [0, 0.5, 0]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </svg>
              
              {/* Percentage in center with interactive pulse */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <motion.span 
                  className="text-3xl font-bold text-cyan-400 drop-shadow-glow"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {loadingProgress}%
                </motion.span>
                <motion.span 
                  className="text-sm text-cyan-300 mt-1"
                  animate={{
                    textShadow: ["0 0 5px rgba(34, 211, 238, 0)", "0 0 10px rgba(34, 211, 238, 0.7)", "0 0 5px rgba(34, 211, 238, 0)"]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {systemStatus}
                </motion.span>
              </div>

              {/* Rotating elements around circle */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-3 h-3 bg-cyan-400 rounded-full"
                  style={{
                    left: '50%',
                    top: '50%',
                    x: '-50%',
                    y: '-50%',
                  }}
                  animate={{
                    rotate: 360,
                    x: [0, Math.sin((i * 45) * Math.PI / 180) * 42 - 6],
                    y: [0, -Math.cos((i * 45) * Math.PI / 180) * 42 - 6],
                  }}
                  transition={{
                    rotate: { duration: 5, repeat: Infinity, ease: "linear" },
                    x: { duration: 0.5 },
                    y: { duration: 0.5 },
                  }}
                />
              ))}
            </div>
            
            {/* Name with advanced glow effect and interactive elements */}
            <motion.h1
              className="text-5xl md:text-6xl font-thin mb-10 tracking-widest text-center"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              <motion.span 
                className="text-cyan-300 drop-shadow-glow"
                whileHover={{ scale: 1.05, color: "#7aefff" }}
                transition={{ type: "spring", stiffness: 500, damping: 15 }}
              >
                GURU
              </motion.span>
              <span className="text-white"> PRASAD </span>
              <motion.span 
                className="text-purple-300 drop-shadow-glow"
                whileHover={{ scale: 1.05, color: "#d9a6ff" }}
                transition={{ type: "spring", stiffness: 500, damping: 15 }}
              >
                R
              </motion.span>
            </motion.h1>
            
            {/* Interactive system messages terminal */}
            <motion.div 
              className="w-full max-w-md bg-black/70 border border-cyan-500/30 rounded p-4 font-mono text-sm h-40 overflow-hidden relative"
              whileHover={{ boxShadow: "0 0 20px rgba(34, 211, 238, 0.4)" }}
              transition={{ duration: 0.3 }}
            >
              {/* Scan lines overlay */}
              <div className="absolute inset-0 pointer-events-none scanlines opacity-10"></div>
              
              {systemMessages.slice(0, currentLine + 1).map((message, index) => (
                <motion.div
                  key={index}
                  className="text-cyan-300 mb-1 relative z-10"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.3, duration: 0.5 }}
                >
                  {message}
                  {index === currentLine && (
                    <motion.span
                      animate={{ opacity: [0, 1, 0] }}
                      transition={{ duration: 1, repeat: Infinity }}
                      className="ml-1"
                    >
                      █
                    </motion.span>
                  )}
                </motion.div>
              ))}
              
              {/* Interactive elements */}
              <motion.button 
                className="absolute bottom-2 right-2 text-xs text-cyan-500 hover:text-cyan-300 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setCyberScanActive(true)}
              >
                [RUN DIAGNOSTICS]
              </motion.button>
            </motion.div>
            
            {/* Animated progress bars at bottom */}
            <div className="w-full max-w-md mt-6 space-y-2">
              {['SYSTEM INTEGRITY', 'NEURAL PROCESSES', 'MEMORY ALLOCATION', 'SENSORY MODULES'].map((label, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-center"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 + 0.5 }}
                >
                  <span className="text-cyan-300 text-xs w-40">{label}</span>
                  <div className="flex-1 h-1.5 bg-gray-800 rounded-full overflow-hidden relative">
                    <motion.div
                      className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full relative"
                      initial={{ width: "0%" }}
                      animate={{ width: `${Math.min(100, loadingProgress - (index * 15))}%` }}
                      transition={{ delay: index * 0.2, duration: 1 }}
                    >
                      <motion.div 
                        className="absolute inset-0 bg-white/30"
                        animate={{ left: ["0%", "100%"] }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: index * 0.3 }}
                        style={{ width: "20%" }}
                      />
                    </motion.div>
                  </div>
                  <span className="text-cyan-300 text-xs w-8 ml-2">
                    {Math.min(100, loadingProgress - (index * 15))}%
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* LED indicators with interactive tooltips */}
          <div className="absolute bottom-6 left-6 flex space-x-2">
            {[0, 1, 2].map(i => (
              <motion.div
                key={i}
                className="w-3 h-3 rounded-full relative cursor-pointer"
                animate={{
                  backgroundColor: loadingProgress > i * 30 ? '#00f5ff' : '#4a5568'
                }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.5 }}
              >
                <motion.span 
                  className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs text-cyan-300 bg-black/80 px-2 py-1 rounded whitespace-nowrap"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  {['CPU', 'MEM', 'NET'][i]}
                </motion.span>
              </motion.div>
            ))}
          </div>
          
          {/* Copyright with interactive elements */}
          <motion.div 
            className="absolute bottom-6 right-6 text-cyan-500/60 text-xs font-mono flex items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
          >
            <span>RK800 © {new Date().getFullYear()} CYBERLIFE</span>
            <motion.button 
              className="ml-3 text-cyan-700 hover:text-cyan-400 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setLoadingProgress(100);
                setSystemStatus("READY");
              }}
            >
              [SKIP]
            </motion.button>
          </motion.div>

          {/* Audio element for sound effects */}
          <audio ref={audioRef} src="https://assets.mixkit.co/sfx/preview/mixkit-sci-fi-click-900.mp3" />

          {/* Global styles */}
          <style>{`
            .bg-grid-pattern {
              background-image: 
                linear-gradient(rgba(0, 183, 255, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0, 183, 255, 0.1) 1px, transparent 1px);
              background-size: 40px 40px;
            }
            
            .drop-shadow-glow {
              filter: drop-shadow(0 0 6px rgba(34, 211, 238, 0.8));
            }
            
            .scanlines {
              background: linear-gradient(
                to bottom,
                rgba(255, 255, 255, 0) 0%,
                rgba(255, 255, 255, 0.03) 50%,
                rgba(255, 255, 255, 0) 100%
              );
              background-size: 100% 3px;
            }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroScreen;